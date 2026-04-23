'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type NavGroup = { title: string; items: { label: string; href: string }[] };

const sidebarSections: NavGroup[] = [
  { title: 'Get started', items: [
    { label: 'Brand Language', href: '/about/brand-language' },
    { label: 'Installation', href: '/getting-started/installation' },
    { label: 'Introduction to TARMAC', href: '/about/overview' },
    { label: 'Movement Metaphors', href: '/about/movement-metaphors' },
    { label: 'Philosophy', href: '/about/philosophy' },
    { label: 'Quick Start', href: '/getting-started/quick-start' },
    { label: 'TARMAC Logo', href: '/about/logo' },
  ]},
  { title: 'Foundations', items: [
    { label: 'Borders', href: '/foundations/borders' },
    { label: 'Colors', href: '/foundations/colors' },
    { label: 'Dividers', href: '/foundations/dividers' },
    { label: 'Grid System', href: '/foundations/grid-system' },
    { label: 'Iconography', href: '/foundations/iconography' },
    { label: 'Image Library', href: '/foundations/image-library' },
    { label: 'Radius', href: '/foundations/radius' },
    { label: 'Shadows', href: '/foundations/shadows' },
    { label: 'Spacing', href: '/foundations/spacing' },
    { label: 'Typography', href: '/foundations/typography' },
  ]},
  { title: 'Components', items: [
    { label: 'Accordion', href: '/components/accordion' },
    { label: 'Alert', href: '/components/alert' },
    { label: 'Audio Player', href: '/components/audio-player' },
    { label: 'Avatar', href: '/components/avatar' },
    { label: 'Badge', href: '/components/badge' },
    { label: 'Bottom Sheet', href: '/components/bottom-sheet' },
    { label: 'Breadcrumbs', href: '/components/breadcrumbs' },
    { label: 'Button', href: '/components/button' },
    { label: 'Cards', href: '/components/cards' },
    { label: 'Checkbox', href: '/components/checkbox' },
    { label: 'Coachmarks', href: '/components/coachmarks' },
    { label: 'Date Time Picker', href: '/components/date-time-picker' },
    { label: 'Dialog Box', href: '/components/dialog-box' },
    { label: 'Dropdown', href: '/components/dropdown' },
    { label: 'File Upload', href: '/components/file-upload' },
    { label: 'Filter', href: '/components/filter' },
    { label: 'Footer', href: '/components/footer' },
    { label: 'Header', href: '/components/header' },
    { label: 'Input', href: '/components/input' },
    { label: 'Input Area', href: '/components/input-area' },
    { label: 'Links', href: '/components/links' },
    { label: 'List', href: '/components/list' },
    { label: 'Navigation', href: '/components/navigation' },
    { label: 'OTP Fields', href: '/components/otp-fields' },
    { label: 'Pagination', href: '/components/pagination' },
    { label: 'Pills', href: '/components/pills' },
    { label: 'Popups', href: '/components/popups' },
    { label: 'Progress Bar', href: '/components/progress-bar' },
    { label: 'Radio', href: '/components/radio' },
    { label: 'Rating', href: '/components/rating' },
    { label: 'Scroll', href: '/components/scroll' },
    { label: 'Search', href: '/components/search' },
    { label: 'Shimmer', href: '/components/shimmer' },
    { label: 'Side Drawer', href: '/components/side-drawer' },
    { label: 'Slider', href: '/components/slider' },
    { label: 'Snackbar', href: '/components/snackbar' },
    { label: 'Spinner', href: '/components/spinner' },
    { label: 'Status Indicator', href: '/components/status-indicator' },
    { label: 'Stepper', href: '/components/stepper' },
    { label: 'Tabs', href: '/components/tabs' },
    { label: 'Tags', href: '/components/tags' },
    { label: 'Toggle', href: '/components/toggle' },
    { label: 'Tooltip', href: '/components/tooltip' },
  ]},
  { title: 'Patterns', items: [
    { label: 'Form Patterns', href: '/patterns/forms' },
    { label: 'Layout Patterns', href: '/patterns/layout' },
  ]},
  { title: 'Accessibility', items: [
    { label: 'Accessibility', href: '/accessibility/overview' },
    { label: 'Accessibility Guidelines', href: '/accessibility/guidelines' },
    { label: 'Accessibility Testing', href: '/accessibility/testing' },
    { label: 'Color Contrast', href: '/accessibility/color-contrast' },
    { label: 'Focus Management', href: '/accessibility/focus-management' },
    { label: 'Keyboard Navigation', href: '/accessibility/keyboard-navigation' },
    { label: 'Screen Readers', href: '/accessibility/screen-readers' },
  ]},
];

function SidebarGroup({ group }: { group: NavGroup }) {
  const pathname = usePathname();
  const hasActive = group.items.some(i => i.href === pathname);
  const [open, setOpen] = useState(hasActive);

  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 text-[13px] font-semibold rounded-lg transition-colors"
        style={{ color: 'var(--color-on-surface)' }}
      >
        {group.title}
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.15s', color: 'var(--color-on-surface-variant)' }}
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      {open && (
        <ul className="mt-0.5">
          {group.items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-3 text-[13px] transition-all rounded-lg"
                  style={{
                    color: isActive ? 'var(--color-on-surface)' : 'var(--color-on-surface-variant)',
                    background: isActive ? 'var(--color-surface-container)' : 'transparent',
                    fontWeight: isActive ? 600 : 400,
                  }}
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

export function Sidebar({ open, onClose }: { open?: boolean; onClose?: () => void }) {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const sidebarContent = (
    <nav className="py-3 px-2">
      {sidebarSections.map((group) => (
        <SidebarGroup key={group.title} group={group} />
      ))}
    </nav>
  );

  return (
    <>
      <aside
        className="hidden lg:block fixed left-0 top-16 w-[var(--sidebar-width)] h-[calc(100vh-64px)] overflow-y-auto z-30 border-r sidebar-scroll"
        style={{ background: 'var(--color-surface)', borderColor: 'var(--color-outline)' }}
      >
        {sidebarContent}
      </aside>

      {open && (
        <>
          <div className="lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" onClick={onClose} />
          <aside
            className="lg:hidden fixed left-0 top-16 w-72 h-[calc(100vh-64px)] overflow-y-auto z-50 border-r"
            style={{ background: 'var(--color-surface)', borderColor: 'var(--color-outline)' }}
          >
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  );
}
