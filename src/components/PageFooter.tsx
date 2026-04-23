'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const allPages = [
  { label: 'Introduction to TARMAC', href: '/about/overview' },
  { label: 'Philosophy', href: '/about/philosophy' },
  { label: 'Brand Language', href: '/about/brand-language' },
  { label: 'Movement Metaphors', href: '/about/movement-metaphors' },
  { label: 'TARMAC Logo', href: '/about/logo' },
  { label: 'Installation', href: '/getting-started/installation' },
  { label: 'Quick Start', href: '/getting-started/quick-start' },
  { label: 'Colors', href: '/foundations/colors' },
  { label: 'Typography', href: '/foundations/typography' },
  { label: 'Grid System', href: '/foundations/grid-system' },
  { label: 'Iconography', href: '/foundations/iconography' },
  { label: 'Spacing', href: '/foundations/spacing' },
  { label: 'Radius', href: '/foundations/radius' },
  { label: 'Borders', href: '/foundations/borders' },
  { label: 'Shadows', href: '/foundations/shadows' },
  { label: 'Dividers', href: '/foundations/dividers' },
  { label: 'Image Library', href: '/foundations/image-library' },
  { label: 'Button', href: '/components/button' },
  { label: 'Checkbox', href: '/components/checkbox' },
  { label: 'Radio', href: '/components/radio' },
  { label: 'Input', href: '/components/input' },
  { label: 'Input Area', href: '/components/input-area' },
  { label: 'Dropdown', href: '/components/dropdown' },
  { label: 'Search', href: '/components/search' },
  { label: 'Toggle', href: '/components/toggle' },
  { label: 'Slider', href: '/components/slider' },
  { label: 'OTP Fields', href: '/components/otp-fields' },
  { label: 'File Upload', href: '/components/file-upload' },
  { label: 'Date Time Picker', href: '/components/date-time-picker' },
  { label: 'Filter', href: '/components/filter' },
  { label: 'Rating', href: '/components/rating' },
  { label: 'Avatar', href: '/components/avatar' },
  { label: 'Badge', href: '/components/badge' },
  { label: 'Tags', href: '/components/tags' },
  { label: 'Pills', href: '/components/pills' },
  { label: 'Cards', href: '/components/cards' },
  { label: 'List', href: '/components/list' },
  { label: 'Status Indicator', href: '/components/status-indicator' },
  { label: 'Shimmer', href: '/components/shimmer' },
  { label: 'Spinner', href: '/components/spinner' },
  { label: 'Progress Bar', href: '/components/progress-bar' },
  { label: 'Navigation', href: '/components/navigation' },
  { label: 'Tabs', href: '/components/tabs' },
  { label: 'Breadcrumbs', href: '/components/breadcrumbs' },
  { label: 'Links', href: '/components/links' },
  { label: 'Pagination', href: '/components/pagination' },
  { label: 'Stepper', href: '/components/stepper' },
  { label: 'Alert', href: '/components/alert' },
  { label: 'Snackbar', href: '/components/snackbar' },
  { label: 'Tooltip', href: '/components/tooltip' },
  { label: 'Coachmarks', href: '/components/coachmarks' },
  { label: 'Dialog Box', href: '/components/dialog-box' },
  { label: 'Popups', href: '/components/popups' },
  { label: 'Side Drawer', href: '/components/side-drawer' },
  { label: 'Bottom Sheet', href: '/components/bottom-sheet' },
  { label: 'Header', href: '/components/header' },
  { label: 'Footer', href: '/components/footer' },
  { label: 'Scroll', href: '/components/scroll' },
  { label: 'Accordion', href: '/components/accordion' },
  { label: 'Audio Player', href: '/components/audio-player' },
  { label: 'Layout Patterns', href: '/patterns/layout' },
  { label: 'Form Patterns', href: '/patterns/forms' },
  { label: 'Accessibility', href: '/accessibility/overview' },
  { label: 'Accessibility Guidelines', href: '/accessibility/guidelines' },
  { label: 'Keyboard Navigation', href: '/accessibility/keyboard-navigation' },
  { label: 'Screen Readers', href: '/accessibility/screen-readers' },
  { label: 'Color Contrast', href: '/accessibility/color-contrast' },
  { label: 'Focus Management', href: '/accessibility/focus-management' },
  { label: 'Accessibility Testing', href: '/accessibility/testing' },
];

export function PageFooter() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const idx = allPages.findIndex((p) => p.href === pathname);
  const prev = idx > 0 ? allPages[idx - 1] : null;
  const next = idx < allPages.length - 1 ? allPages[idx + 1] : null;

  return (
    <footer className="px-5 sm:px-10 pb-12">
      <div className="content-area">
        {(prev || next) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t" style={{ borderColor: 'var(--color-outline)' }}>
            {prev ? (
              <Link href={prev.href} className="group p-4 rounded-lg border transition-colors" style={{ borderColor: 'var(--color-outline)' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-outline)'}
              >
                <span className="text-xs block mb-1" style={{ color: 'var(--color-on-surface-variant)' }}>← Previous</span>
                <span className="text-sm font-medium" style={{ color: 'var(--color-on-surface)' }}>{prev.label}</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={next.href} className="group p-4 rounded-lg border text-right transition-colors" style={{ borderColor: 'var(--color-outline)' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-outline)'}
              >
                <span className="text-xs block mb-1" style={{ color: 'var(--color-on-surface-variant)' }}>Up next →</span>
                <span className="text-sm font-medium" style={{ color: 'var(--color-on-surface)' }}>{next.label}</span>
              </Link>
            ) : <div />}
          </div>
        )}

        <div className="mt-10 pt-6 border-t flex items-center justify-between" style={{ borderColor: 'var(--color-outline)' }}>
          <span className="text-xs" style={{ color: 'var(--color-on-surface-variant)' }}>
            © {new Date().getFullYear()} Delhivery Ltd. All rights reserved.
          </span>
          <div className="flex gap-4 text-xs" style={{ color: 'var(--color-on-surface-variant)' }}>
            <a href="https://www.delhivery.com" target="_blank" rel="noopener noreferrer" className="hover:underline">delhivery.com</a>
            <a href="https://github.com/abhishekthakur3-sketch/TDS" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
