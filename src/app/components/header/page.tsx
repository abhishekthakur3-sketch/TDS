'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function HeaderPage() {
  return (
    <ComponentPage name="Header" description="Headers provide top-level navigation and branding for applications." slug="header">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Standard header with logo and navigation links</td></tr>
          <tr><td>With Search</td><td>Header including a search bar</td></tr>
          <tr><td>Sticky</td><td>Fixed header that stays on top during scroll</td></tr>
          <tr><td>Transparent</td><td>Overlay header with transparent background</td></tr>
          <tr><td>Mobile</td><td>Responsive header with hamburger menu</td></tr>
          <tr><td>With Actions</td><td>Header with action buttons and user menu</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Full-width wrapper with background</td></tr>
          <tr><td>2</td><td>Logo</td><td>Brand mark or wordmark on the left</td></tr>
          <tr><td>3</td><td>Navigation</td><td>Primary navigation links</td></tr>
          <tr><td>4</td><td>Search</td><td>Optional search input</td></tr>
          <tr><td>5</td><td>Actions</td><td>Right-aligned buttons and icons</td></tr>
          <tr><td>6</td><td>User Menu</td><td>Avatar with dropdown for account actions</td></tr>
          <tr><td>7</td><td>Mobile Toggle</td><td>Hamburger icon for mobile navigation</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Normal display</td><td>Full header visible</td></tr>
          <tr><td>Scrolled</td><td>Page has been scrolled</td><td>May show shadow or shrink</td></tr>
          <tr><td>Mobile Open</td><td>Mobile menu expanded</td><td>Navigation drawer visible</td></tr>
          <tr><td>Mobile Closed</td><td>Mobile menu collapsed</td><td>Only hamburger icon</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Keep the header consistent across all pages</li>
        <li>Limit primary navigation to 5-7 items</li>
        <li>Ensure the logo links back to the home page</li>
        <li>Use a sticky header for long-scrolling pages</li>
        <li>Provide a mobile-friendly hamburger menu for small screens</li>
        <li>Do not overload the header with too many actions</li>
      </ul>
      <DoDont slug="header" doItems={["Keep the header consistent across pages", "Include primary navigation and branding", "Make it responsive with a mobile menu"]} dontItems={["Overload with too many actions", "Hide the logo or brand identity", "Use different header layouts on different pages"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>banner</td><td>Landmark role for the header</td></tr>
          <tr><td>nav</td><td>navigation</td><td>Wraps navigation links</td></tr>
          <tr><td>aria-label</td><td>Main navigation</td><td>Describes the nav purpose</td></tr>
          <tr><td>Skip Link</td><td>Skip to content</td><td>Allows bypassing navigation</td></tr>
          <tr><td>Keyboard</td><td>Tab</td><td>Navigate through header items</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>header-height</td><td>64px</td><td>Default header height</td></tr>
          <tr><td>header-bg</td><td>white</td><td>Background color</td></tr>
          <tr><td>header-shadow</td><td>elevation-1</td><td>Bottom shadow</td></tr>
          <tr><td>header-z-index</td><td>1100</td><td>Stacking order</td></tr>
          <tr><td>header-padding-x</td><td>24px</td><td>Horizontal padding</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface HeaderProps {
  logo: React.ReactNode;
  navigation?: Array<{ label: string; href: string; active?: boolean }>;
  actions?: React.ReactNode;
  search?: boolean;
  sticky?: boolean;
  transparent?: boolean;
  onMenuToggle?: () => void;
}`}</code></pre>
      <pre><code>{`<Header
  logo={<Logo />}
  navigation={[
    { label: 'Home', href: '/', active: true },
    { label: 'Components', href: '/components' },
    { label: 'Docs', href: '/docs' },
  ]}
  actions={<UserMenu />}
  sticky
/>`}</code></pre>
    </ComponentPage>
  );
}
