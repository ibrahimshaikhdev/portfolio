import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validation';
import { profile } from '@/lib/portfolio-data';

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
const CONTACT_LOCK_COOKIE = 'portfolio-contact-sent-at';

function getContactLockTimestamp(request: Request) {
  const cookieHeader = request.headers.get('cookie') || '';
  const cookieValue = cookieHeader
    .split(';')
    .map((item) => item.trim())
    .find((item) => item.startsWith(`${CONTACT_LOCK_COOKIE}=`))
    ?.split('=')[1];
  const parsed = Number(cookieValue || 0);

  return Number.isFinite(parsed) ? parsed : 0;
}

export async function POST(request: Request) {
  const lastSentAt = getContactLockTimestamp(request);

  if (lastSentAt && Date.now() - lastSentAt < ONE_DAY_IN_MS) {
    return NextResponse.json(
      { error: 'Sent !!! You can send another message after 24 hours.' },
      { status: 429 },
    );
  }

  const payload = await request.json().catch(() => null);
  const result = contactFormSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json(
      {
        error: 'Invalid form data',
        issues: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email service is not configured yet.' },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const { name, email, subject, message } = result.data;
  const toEmail = process.env.CONTACT_TO_EMAIL || profile.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        '',
        message,
      ].join('\n'),
    });

    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: CONTACT_LOCK_COOKIE,
      value: String(Date.now()),
      path: '/',
      maxAge: ONE_DAY_IN_MS / 1000,
      sameSite: 'lax',
    });

    return response;
  } catch (error) {
    console.error('Contact email failed:', error);
    return NextResponse.json(
      { error: 'Message could not be sent right now.' },
      { status: 500 },
    );
  }
}
