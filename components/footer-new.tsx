import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/lib/portfolio-data';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/80 px-5 py-8 backdrop-blur sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          {profile.name} | {profile.role} | Built for Vercel
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/bio" className="footer-link">
            Bio
          </Link>
          <Link href="/skills" className="footer-link">
            Skills
          </Link>
          <Link href="/projects" className="footer-link">
            Projects
          </Link>
          <Link href={profile.github} target="_blank" rel="noreferrer" className="footer-link">
            <Github className="size-4" aria-hidden="true" />
            GitHub
          </Link>
          <Link href={profile.linkedin} target="_blank" rel="noreferrer" className="footer-link">
            <Linkedin className="size-4" aria-hidden="true" />
            LinkedIn
          </Link>
          <Link href={`mailto:${profile.email}`} className="footer-link">
            <Mail className="size-4" aria-hidden="true" />
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
