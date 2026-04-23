'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function NavigationPage() {
  return (
    <ComponentPage name="Navigation" description="Navigation components provide wayfinding and structure for applications." slug="navigation">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Top Nav</td><td>Horizontal navigation bar at the top</td></tr>
          <tr><td>Side Nav</td><td>Vertical navigation in a sidebar</td></tr>
          <tr><td>Bottom Nav</td><td>Mobile bottom tab bar</td></tr>
          <tr><td>Mega Menu</td><td>Expanded dropdown with rich content</td></tr>
          <tr><td>Collapsible</td><td>Sidebar that collapses to icons only</td></tr>
          <tr><td>Nested</td><td>Multi-level navigation with sub-items</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Nav Container</td><td>Wrapper for navigation items</td></tr>
          <tr><td>2</td><td>Nav Item</td><td>Individual navigation link</td></tr>
          <tr><td>3</td><td>Icon</td><td>Optional icon for each nav item</td></tr>
          <tr><td>4</td><td>Label</td><td>Text label for the nav item</td></tr>
          <tr><td>5</td><td>Active Indicator</td><td>Visual marker for current page</td></tr>
          <tr><td>6</td><td>Sub-Menu</td><td>Nested navigation items</td></tr>
          <tr><td>7</td><td>Collapse Toggle</td><td>Button to expand/collapse sidebar</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Normal display</td><td>All items visible</td></tr>
          <tr><td>Active</td><td>Current page item</td><td>Highlighted with indicator</td></tr>
          <tr><td>Hover</td><td>Mouse over item</td><td>Background highlight</td></tr>
          <tr><td>Focus</td><td>Keyboard focus</td><td>Focus ring visible</td></tr>
          <tr><td>Collapsed</td><td>Sidebar minimized</td><td>Only icons visible</td></tr>
          <tr><td>Expanded</td><td>Sub-menu open</td><td>Child items visible</td></tr>
          <tr><td>Disabled</td><td>Non-interactive item</td><td>Reduced opacity</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Keep primary navigation to 5-7 items</li>
        <li>Clearly indicate the current active page</li>
        <li>Use icons alongside labels for better recognition</li>
        <li>Provide a collapsible sidebar for complex applications</li>
        <li>Use bottom navigation for mobile with 3-5 items</li>
        <li>Do not hide primary navigation behind a hamburger menu on desktop</li>
      </ul>
      <DoDont slug="navigation" doItems={["Highlight the current/active page clearly", "Keep navigation items to 7 or fewer at the top level", "Support keyboard navigation"]} dontItems={["Hide primary navigation behind a hamburger on desktop", "Use icons without labels", "Change navigation structure between pages"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>navigation</td><td>Landmark role for nav regions</td></tr>
          <tr><td>aria-label</td><td>Main / Secondary</td><td>Distinguishes multiple navs</td></tr>
          <tr><td>aria-current</td><td>page</td><td>Indicates the current page link</td></tr>
          <tr><td>aria-expanded</td><td>true | false</td><td>Sub-menu expanded state</td></tr>
          <tr><td>Keyboard</td><td>Tab</td><td>Navigate between items</td></tr>
          <tr><td>Keyboard</td><td>Enter</td><td>Activate navigation link</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>nav-width</td><td>240px</td><td>Sidebar width</td></tr>
          <tr><td>nav-collapsed-width</td><td>64px</td><td>Collapsed sidebar width</td></tr>
          <tr><td>nav-item-height</td><td>40px</td><td>Navigation item height</td></tr>
          <tr><td>nav-active-bg</td><td>primary-50</td><td>Active item background</td></tr>
          <tr><td>nav-active-color</td><td>primary-700</td><td>Active item text color</td></tr>
          <tr><td>nav-hover-bg</td><td>neutral-100</td><td>Hover background</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface NavigationProps {
  items: Array<{
    id: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
    active?: boolean;
    children?: NavigationItem[];
  }>;
  variant?: 'top' | 'side' | 'bottom';
  collapsible?: boolean;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
}`}</code></pre>
      <pre><code>{`<Navigation
  variant="side"
  collapsible
  items={[
    { id: 'home', label: 'Home', href: '/', icon: <HomeIcon />, active: true },
    { id: 'components', label: 'Components', href: '/components', icon: <BoxIcon /> },
    { id: 'docs', label: 'Documentation', href: '/docs', icon: <BookIcon /> },
  ]}
/>`}</code></pre>
    </ComponentPage>
  );
}
