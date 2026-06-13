import { ReactNode } from 'react';
import SidebarProfile from '@/components/sidebar-profile';
import TabNavigation from '@/components/tab-navigation';
import Footer from '@/components/footer-new';
import { cn } from '@/lib/utils';

export default function SiteShell({
  children,
  showProfile = false,
}: {
  children: ReactNode;
  showProfile?: boolean;
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(45,212,191,0.16),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(251,191,36,0.12),transparent_26%),linear-gradient(135deg,#070b10_0%,#10141f_48%,#0b1014_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

      {showProfile && <SidebarProfile />}

      <main className={cn(showProfile && 'lg:ml-[360px]')}>
        <TabNavigation />
        <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-6 sm:px-8 lg:px-12 lg:pt-10">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
