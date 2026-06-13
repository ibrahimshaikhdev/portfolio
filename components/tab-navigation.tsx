'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BriefcaseBusiness, GraduationCap, Home, Layers3, Mail, Sparkles, UserRound } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/bio', label: 'Bio', icon: UserRound },
  { href: '/skills', label: 'Skills', icon: Sparkles },
  { href: '/experience', label: 'Experience', icon: BriefcaseBusiness },
  { href: '/education', label: 'Education', icon: GraduationCap },
  { href: '/projects', label: 'Projects', icon: Layers3 },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function TabNavigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-background/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:px-12">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group inline-flex h-10 shrink-0 items-center gap-2 rounded-lg px-3 text-sm font-semibold transition duration-300 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300',
                isActive ? 'bg-teal-300 text-slate-950 shadow-lg shadow-teal-950/20' : 'text-muted-foreground',
              )}
            >
              <Icon className={cn('size-4 transition duration-300', isActive ? 'text-slate-950' : 'group-hover:text-teal-200')} aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
