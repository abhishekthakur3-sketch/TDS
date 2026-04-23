'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function BreadcrumbsPage() {
  return (
    <ComponentPage name="Breadcrumbs" description="Breadcrumbs show the user's current location within a navigational hierarchy." slug="breadcrumbs">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Standard breadcrumb trail with separators</td></tr>
          <tr><td>With Icons</td><td>Breadcrumbs with leading icons</td></tr>
          <tr><td>Collapsed</td><td>Long trails with ellipsis for middle items</td></tr>
          <tr><td>Custom Separator</td><td>Breadcrumbs with custom separator characters</td></tr>
          <tr><td>With Dropdown</td><td>Collapsed items expandable via dropdown</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Wrapper for the breadcrumb trail</td></tr>
          <tr><td>2</td><td>Breadcrumb Item</td><td>Individual link in the trail</td></tr>
          <tr><td>3</td><td>Separator</td><td>Divider between items (/ or &gt;)</td></tr>
          <tr><td>4</td><td>Current Item</td><td>Last item representing current page</td></tr>
          <tr><td>5</td><td>Ellipsis</td><td>Collapsed middle items indicator</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Normal display</td><td>Full trail visible</td></tr>
          <tr><td>Hover</td><td>Mouse over a link</td><td>Underline or color change</td></tr>
          <tr><td>Focus</td><td>Keyboard focus</td><td>Focus ring on link</td></tr>
          <tr><td>Collapsed</td><td>Long trail truncated</td><td>Ellipsis shown</td></tr>
          <tr><td>Current</td><td>Last item in trail</td><td>Non-clickable, bold text</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Always start with the home or root page</li>
        <li>Make all items except the current page clickable</li>
        <li>Use breadcrumbs for hierarchies with 3+ levels</li>
        <li>Collapse middle items for very deep hierarchies</li>
        <li>Place breadcrumbs at the top of the page content</li>
        <li>Do not use breadcrumbs as the primary navigation</li>
      </ul>
      <DoDont slug="breadcrumbs" doItems={["Show the full navigation path", "Make each level clickable except the current page", "Use a separator between levels"]} dontItems={["Use breadcrumbs as the only navigation", "Show more than 5 levels without truncation", "Use breadcrumbs on single-level pages"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>navigation</td><td>Landmark for breadcrumb region</td></tr>
          <tr><td>aria-label</td><td>Breadcrumb</td><td>Accessible name for the nav</td></tr>
          <tr><td>aria-current</td><td>page</td><td>Marks the current page item</td></tr>
          <tr><td>Separator</td><td>aria-hidden="true"</td><td>Hides decorative separators</td></tr>
          <tr><td>Keyboard</td><td>Tab</td><td>Navigate between breadcrumb links</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>breadcrumb-font-size</td><td>14px</td><td>Text size</td></tr>
          <tr><td>breadcrumb-link-color</td><td>primary-600</td><td>Link color</td></tr>
          <tr><td>breadcrumb-current-color</td><td>neutral-700</td><td>Current item color</td></tr>
          <tr><td>breadcrumb-separator-color</td><td>neutral-400</td><td>Separator color</td></tr>
          <tr><td>breadcrumb-gap</td><td>8px</td><td>Space around separators</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface BreadcrumbsProps {
  items: Array<{
    label: string;
    href?: string;
    icon?: React.ReactNode;
  }>;
  separator?: React.ReactNode;
  maxItems?: number;
  collapseMode?: 'ellipsis' | 'dropdown';
}`}</code></pre>
      <pre><code>{`<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumbs' },
  ]}
  separator="/"
/>`}</code></pre>
    </ComponentPage>
  );
}
