'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/components/ThemeProvider';
import { Sun, Moon, Github, Menu, X, ExternalLink } from 'lucide-react';

export function TopBar({ onMenuToggle, sidebarOpen }: { onMenuToggle: () => void; sidebarOpen: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const isActive = (href: string) => {
    const section = href.split('/')[1];
    return pathname.startsWith(`/${section}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400"
            aria-label="Toggle menu"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-tarmac-red rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-white font-bold text-base">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm leading-tight tracking-tight text-neutral-900 dark:text-neutral-100">TARMAC</span>
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500 tracking-[0.15em] font-medium">DESIGN SYSTEM</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="/about/overview" active={isActive('/about')}>About</NavLink>
          <NavLink href="/foundations/colors" active={isActive('/foundations')}>Foundations</NavLink>
          <NavLink href="/components/button" active={isActive('/components')}>Components</NavLink>
          <NavLink href="/accessibility/overview" active={isActive('/accessibility')}>Accessibility</NavLink>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href="https://tarmac-storybook-dev.pntrzz.com/storybook/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors"
          >
            Storybook
            <ExternalLink size={12} />
          </a>
          <a
            href="https://github.com/abhishekthakur3-sketch/TDS"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium rounded-xl transition-colors ${
        active
          ? 'text-tarmac-red dark:text-red-400 bg-tarmac-red/5 dark:bg-red-500/10'
          : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800'
      }`}
    >
      {children}
    </Link>
  );
}
