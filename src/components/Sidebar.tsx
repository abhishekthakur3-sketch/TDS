'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const nav: NavGroup[] = [
  {
    title: 'Introduction',
    items: [
      { label: 'Overview', href: '/about/overview' },
      { label: 'Philosophy', href: '/about/philosophy' },
      { label: 'Brand Language', href: '/about/brand-language' },
      { label: 'Movement Metaphors', href: '/about/movement-metaphors' },
      { label: 'Installation', href: '/getting-started/installation' },
      { label: 'Quick Start', href: '/getting-started/quick-start' },
    ],
  },
  {
    title: 'Foundations',
    items: [
      { label: 'Colors', href: '/foundations/colors' },
      { label: 'Color Palette', href: '/foundations/colors-palette' },
      { label: 'Colors Implementation', href: '/foundations/colors-implementation' },
      { label: 'Typography', href: '/foundations/typography' },
      { label: 'Typography Styles', href: '/foundations/typography-styles' },
      { label: 'Typography Implementation', href: '/foundations/typography-implementation' },
      { label: 'Grid System', href: '/foundations/grid-system' },
      { label: 'Grid Advanced', href: '/foundations/grid-advanced' },
      { label: 'Grid Implementation', href: '/foundations/grid-implementation' },
      { label: 'Iconography', href: '/foundations/iconography' },
      { label: 'Spacing', href: '/foundations/spacing' },
      { label: 'Radius', href: '/foundations/radius' },
      { label: 'Borders', href: '/foundations/borders' },
      { label: 'Shadows', href: '/foundations/shadows' },
      { label: 'Dividers', href: '/foundations/dividers' },
      { label: 'Logo', href: '/about/logo' },
      { label: 'Image Library', href: '/foundations/image-library' },
    ],
  },
  {
    title: 'Components',
    items: [
      { label: 'Avatar', href: '/components/avatar' },
      { label: 'Button', href: '/components/button' },
      { label: 'Checkbox', href: '/components/checkbox' },
      { label: 'Radio', href: '/components/radio' },
      { label: 'Input', href: '/components/input' },
      { label: 'Input Area', href: '/components/input-area' },
      { label: 'Dropdown', href: '/components/dropdown' },
      { label: 'Search', href: '/components/search' },
      { label: 'Shimmer', href: '/components/shimmer' },
      { label: 'Scroll', href: '/components/scroll' },
      { label: 'Header', href: '/components/header' },
      { label: 'Footer', href: '/components/footer' },
      { label: 'Rating', href: '/components/rating' },
      { label: 'File Upload', href: '/components/file-upload' },
      { label: 'Date Time Picker', href: '/components/date-time-picker' },
      { label: 'Filter', href: '/components/filter' },
      { label: 'Dialog Box', href: '/components/dialog-box' },
      { label: 'List', href: '/components/list' },
      { label: 'Popups', href: '/components/popups' },
      { label: 'Side Drawer', href: '/components/side-drawer' },
      { label: 'Bottom Sheet', href: '/components/bottom-sheet' },
      { label: 'Navigation', href: '/components/navigation' },
      { label: 'Cards', href: '/components/cards' },
      { label: 'Badge', href: '/components/badge' },
      { label: 'Tags', href: '/components/tags' },
      { label: 'Pills', href: '/components/pills' },
      { label: 'Alert', href: '/components/alert' },
      { label: 'Progress Bar', href: '/components/progress-bar' },
      { label: 'Snackbar', href: '/components/snackbar' },
      { label: 'Accordion', href: '/components/accordion' },
      { label: 'Coachmarks', href: '/components/coachmarks' },
      { label: 'Tabs', href: '/components/tabs' },
      { label: 'Breadcrumbs', href: '/components/breadcrumbs' },
      { label: 'Toggle', href: '/components/toggle' },
      { label: 'Status Indicator', href: '/components/status-indicator' },
      { label: 'Links', href: '/components/links' },
      { label: 'Slider', href: '/components/slider' },
      { label: 'Stepper', href: '/components/stepper' },
      { label: 'Spinner', href: '/components/spinner' },
      { label: 'Pagination', href: '/components/pagination' },
      { label: 'Tooltip', href: '/components/tooltip' },
      { label: 'Audio Player', href: '/components/audio-player' },
      { label: 'OTP Fields', href: '/components/otp-fields' },
    ],
  },
  {
    title: 'Patterns',
    items: [
      { label: 'Layout', href: '/patterns/layout' },
      { label: 'Forms', href: '/patterns/forms' },
    ],
  },
  {
    title: 'Accessibility',
    items: [
      { label: 'Overview', href: '/accessibility/overview' },
      { label: 'Guidelines', href: '/accessibility/guidelines' },
      { label: 'Keyboard Navigation', href: '/accessibility/keyboard-navigation' },
      { label: 'Screen Readers', href: '/accessibility/screen-readers' },
      { label: 'Color Contrast', href: '/accessibility/color-contrast' },
      { label: 'Focus Management', href: '/accessibility/focus-management' },
      { label: 'Testing', href: '/accessibility/testing' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Contact Us', href: '/contact/contact-us' },
    ],
  },
];

function NavSection({ section }: { section: NavGroup }) {
  const pathname = usePathname();
  const isActive = section.items.some((item) => pathname === item.href);
  const [open, setOpen] = useState(isActive);

  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
      >
        <span>{section.title}</span>
        <svg
          className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {open && (
        <ul className="mt-0.5 ml-3 border-l border-neutral-200 space-y-0.5">
          {section.items.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block pl-3 py-1.5 text-sm transition-colors border-l-2 -ml-px ${
                    active
                      ? 'border-neutral-900 text-neutral-900 font-medium'
                      : 'border-transparent text-neutral-500 hover:text-neutral-800 hover:border-neutral-300'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 w-[var(--sidebar-width)] h-screen border-r border-neutral-200 bg-neutral-50 overflow-y-auto z-40">
      <div className="p-6 border-b border-neutral-200">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-tarmac-red rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="font-semibold text-lg">TARMAC</span>
        </Link>
      </div>

      <nav className="p-3">
        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 px-3">Start Here</p>
        {nav.map((section) => (
          <NavSection key={section.title} section={section} />
        ))}

        <div className="mt-6 px-3">
          <a
            href="https://tarmac-storybook-dev.pntrzz.com/storybook/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-tarmac-blue transition-colors"
          >
            <span>📖</span>
            <span>Open Storybook</span>
            <span className="text-xs">↗</span>
          </a>
        </div>
      </nav>
    </aside>
  );
}
