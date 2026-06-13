'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { profile, socialLinks } from '@/lib/portfolio-data';

const contactIcons = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  linkedin: Linkedin,
  github: Github,
};

export default function SidebarProfile() {
  return (
    <aside className="relative z-30 border-white/10 bg-background/86 px-5 pb-6 pt-6 backdrop-blur-xl lg:fixed lg:inset-y-0 lg:left-0 lg:w-[360px] lg:border-r lg:px-7 lg:pt-8">
      <div className="mx-auto flex max-w-md flex-col items-center text-center lg:sticky lg:top-8">
        <div className="group relative mb-6">
          <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-teal-300/30 via-amber-300/20 to-rose-300/20 opacity-70 blur-xl transition duration-500 group-hover:opacity-100" />
          <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl shadow-black/30 transition duration-500 group-hover:-translate-y-1 sm:h-44 sm:w-44">
            <Image
              src="/profile.jpg"
              alt={profile.name}
              width={176}
              height={176}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white">{profile.name}</h1>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-amber-100/90">
          {profile.role}
        </p>
        <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">{profile.tagline}</p>

        <div className="mt-7 grid w-full gap-3">
          {socialLinks.slice(0, 3).map((link) => {
            const Icon = contactIcons[link.platform];
            const content = (
              <span className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-3 text-left transition duration-300 hover:-translate-y-0.5 hover:border-teal-300/40 hover:bg-white/[0.075]">
                <span className="flex size-10 items-center justify-center rounded-md bg-white/10 text-teal-100">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {link.label}
                  </span>
                  <span className="block truncate text-sm font-medium text-white">{link.value}</span>
                </span>
              </span>
            );

            return link.href ? (
              <Link key={link.platform} href={link.href} className="block" aria-label={link.label}>
                {content}
              </Link>
            ) : (
              <div key={link.platform}>{content}</div>
            );
          })}
        </div>

        <div className="mt-7 flex w-full gap-3">
          <Link
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.1]"
          >
            <Github className="size-4" aria-hidden="true" />
            GitHub
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-teal-300 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-200"
          >
            <Linkedin className="size-4" aria-hidden="true" />
            LinkedIn
          </Link>
        </div>

        <div className="mt-3 flex w-full gap-3">
          <Link
            href="/contact"
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-amber-200/30 bg-amber-200/10 text-sm font-semibold text-amber-50 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-200/20"
          >
            <Send className="size-4" aria-hidden="true" />
            Hire Me
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.1]"
          >
            <Linkedin className="size-4" aria-hidden="true" />
            LinkedIn
          </Link>
        </div>
      </div>
    </aside>
  );
}
