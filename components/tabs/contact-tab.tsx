'use client';

import { useEffect, useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { contactFormSchema } from '@/lib/validation';
import { profile } from '@/lib/portfolio-data';
import { ContactFormErrors } from '@/types';

const CONTACT_LOCK_COOKIE = 'portfolio-contact-sent-at';
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

function buildMailtoHref(formData: { name: string; email: string; subject: string; message: string }) {
  const body = [
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
    `Subject: ${formData.subject}`,
    '',
    formData.message,
  ].join('\n');

  return `mailto:${profile.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
}

function getContactLockTimestamp() {
  const storageValue = Number(window.localStorage.getItem(CONTACT_LOCK_COOKIE) || 0);
  const cookieValue = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${CONTACT_LOCK_COOKIE}=`))
    ?.split('=')[1];
  const parsedCookieValue = Number(cookieValue || 0);

  return Math.max(
    Number.isFinite(storageValue) ? storageValue : 0,
    Number.isFinite(parsedCookieValue) ? parsedCookieValue : 0,
  );
}

export default function ContactTab() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const lastSentAt = getContactLockTimestamp();
    const locked = lastSentAt > 0 && Date.now() - lastSentAt < ONE_DAY_IN_MS;

    setIsLocked(locked);
    if (locked) {
      setSubmitMessage('Sent !!! You can send another message after 24 hours.');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitMessage('');
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLocked) {
      setSubmitMessage('Sent !!! You can send another message after 24 hours.');
      return;
    }

    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: ContactFormErrors = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormErrors;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      setSubmitMessage('Please fix the highlighted fields.');
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (data?.error === 'Email service is not configured yet.') {
          const mailtoHref = buildMailtoHref(formData);
          window.location.href = mailtoHref;

          const sentAt = String(Date.now());
          window.localStorage.setItem(CONTACT_LOCK_COOKIE, sentAt);
          document.cookie = `${CONTACT_LOCK_COOKIE}=${sentAt}; path=/; max-age=${60 * 60 * 24}; samesite=lax`;
          setIsLocked(true);
          setSubmitMessage('Sent !!!');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          return;
        }

        throw new Error(data.error || 'Message could not be sent right now.');
      }

      const sentAt = String(Date.now());
      window.localStorage.setItem(CONTACT_LOCK_COOKIE, sentAt);
      document.cookie = `${CONTACT_LOCK_COOKIE}=${sentAt}; path=/; max-age=${60 * 60 * 24}; samesite=lax`;
      setIsLocked(true);
      setSubmitMessage('Sent !!!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitMessage(error instanceof Error ? error.message : 'Message could not be sent right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-10">
      <div className="section-heading">
        <p>Contact</p>
        <h2>Have an idea? Let&apos;s make it real.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6">
          <div className="flex size-12 items-center justify-center rounded-lg border border-teal-300/25 bg-teal-300/12 text-teal-100">
            <Mail className="size-5" aria-hidden="true" />
          </div>
          <h3 className="mt-6 text-2xl font-bold text-white">Open to internships, freelance work, and project collaborations.</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Send a short brief and I will receive it directly by email. For spam control, one successful message is allowed per device every 24 hours.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex h-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] px-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.1]"
          >
            {profile.email}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-white/[0.055] p-5 sm:p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              value={formData.name}
              placeholder="Your name"
              error={errors.name}
              onChange={handleChange}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="you@example.com"
              error={errors.email}
              onChange={handleChange}
            />
          </div>

          <div className="mt-5">
            <Field
              label="Subject"
              name="subject"
              value={formData.subject}
              placeholder="Project internship collaboration"
              error={errors.subject}
              onChange={handleChange}
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-bold text-white">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me what you want to build..."
              rows={7}
              className={`w-full resize-none rounded-lg border bg-slate-950/45 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-muted-foreground focus:ring-2 ${
                errors.message
                  ? 'border-red-400/70 focus:ring-red-400/30'
                  : 'border-white/10 focus:border-teal-300/60 focus:ring-teal-300/20'
              }`}
            />
            {errors.message && <p className="mt-2 text-sm text-red-300">{errors.message}</p>}
          </div>

          {submitMessage && (
            <p className="mt-5 rounded-lg border border-amber-200/25 bg-amber-200/10 px-4 py-3 text-sm font-medium text-amber-50">
              {submitMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting || isLocked}
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-teal-300 px-5 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-200 hover:shadow-xl hover:shadow-teal-950/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            <Send className="size-4" aria-hidden="true" />
            {isSubmitting ? 'Sending...' : isLocked ? 'Sent !!!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  placeholder,
  error,
  type = 'text',
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  error?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-white">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`h-12 w-full rounded-lg border bg-slate-950/45 px-4 text-sm text-white outline-none transition duration-300 placeholder:text-muted-foreground focus:ring-2 ${
          error
            ? 'border-red-400/70 focus:ring-red-400/30'
            : 'border-white/10 focus:border-teal-300/60 focus:ring-teal-300/20'
        }`}
      />
      {error && <p className="mt-2 text-sm text-red-300">{error}</p>}
    </div>
  );
}
