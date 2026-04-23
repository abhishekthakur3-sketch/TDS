'use client';

import { usePathname } from 'next/navigation';
import { TopBar } from '@/components/TopBar';
import { Sidebar } from '@/components/Sidebar';
import { PageFooter } from '@/components/PageFooter';

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      <TopBar />
      <div className="flex pt-16">
        {!isHome && <Sidebar />}
        <div
          className="flex-1 flex flex-col min-h-[calc(100vh-64px)]"
          style={{ marginLeft: isHome ? 0 : 'var(--sidebar-width)' }}
        >
          <main className="flex-1">{children}</main>
          {!isHome && <PageFooter />}
        </div>
      </div>
    </>
  );
}
