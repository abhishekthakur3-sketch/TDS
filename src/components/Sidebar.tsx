'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type NavGroup = { title: string; items: { label: string; href: string }[] };

const sidebarSections: NavGroup[] = [
  { title: 'Get Started', items: [
    { label: 'Introduction to TARMAC', href: '/about/overview' },
    { label: 'Philosophy', href: '/about/philosophy' },
    { label: 'Brand Language', href: '/about/brand-language' },
    { label: 'Movement Metaphors', href: '/about/movement-metaphors' },
    { label: 'TARMAC Logo', href: '/about/logo' },
    { label: 'Installation', href: '/getting-started/installation' },
    { label: 'Quick Start', href: '/getting-started/quick-start' },
  ]},
  { title: 'Foundations', items: [
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
    { label: 'Image Library', href: '/foundations/image-library' },
  ]},
  { title: 'Components', items: [
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
  ]},
  { title: 'Patterns', items: [
    { label: 'Layout', href: '/patterns/layout' },
    { label: 'Forms', href: '/patterns/forms' },
  ]},
  { title: 'Accessibility', items: [
    { label: 'Overview', href: '/accessibility/overview' },
    { label: 'Guidelines', href: '/accessibility/guidelines' },
    { label: 'Keyboard Navigation', href: '/accessibility/keyboard-navigation' },
    { label: 'Screen Readers', href: '/accessibility/screen-readers' },
    { label: 'Color Contrast', href: '/accessibility/color-contrast' },
    { label: 'Focus Management', href: '/accessibility/focus-management' },
    { label: 'Testing', href: '/accessibility/testing' },
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
