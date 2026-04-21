'use client';

import { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Sidebar } from '@/components/Sidebar';
import { GeometricPattern } from '@/components/GeometricPattern';

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <GeometricPattern />
      <TopBar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
      <Sidebar />
      <main
        className="min-h-screen transition-colors lg:pl-[calc(var(--sidebar-width)+32px)]"
        style={{
          paddingTop: 'var(--topbar-offset)',
          color: 'var(--color-on-surface)',
          background: 'var(--color-surface)',
        }}
      >
        {children}
      </main>
    </>
  );
}
