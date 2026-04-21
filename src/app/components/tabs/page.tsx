'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function TabsPage() {
  return (
    <ComponentPage name="Tabs" description="Tabs organize content into separate views where only one view is visible at a time." slug="tabs">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Standard horizontal tab bar</td></tr>
          <tr><td>With Icons</td><td>Tabs with leading icons</td></tr>
          <tr><td>Vertical</td><td>Tabs stacked vertically on the side</td></tr>
          <tr><td>Scrollable</td><td>Horizontally scrollable tab bar for many tabs</td></tr>
          <tr><td>Pill Tabs</td><td>Rounded pill-style tab indicators</td></tr>
          <tr><td>With Badge</td><td>Tabs with count badges</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Tab List</td><td>Container for all tab triggers</td></tr>
          <tr><td>2</td><td>Tab</td><td>Individual clickable tab trigger</td></tr>
          <tr><td>3</td><td>Icon</td><td>Optional icon in the tab</td></tr>
          <tr><td>4</td><td>Label</td><td>Text label for the tab</td></tr>
          <tr><td>5</td><td>Active Indicator</td><td>Underline or background showing active tab</td></tr>
          <tr><td>6</td><td>Tab Panel</td><td>Content area for the active tab</td></tr>
          <tr><td>7</td><td>Badge</td><td>Optional count indicator on a tab</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Active</td><td>Currently selected tab</td><td>Indicator visible</td></tr>
          <tr><td>Inactive</td><td>Unselected tab</td><td>Default styling</td></tr>
          <tr><td>Hover</td><td>Mouse over tab</td><td>Background highlight</td></tr>
          <tr><td>Focus</td><td>Keyboard focus</td><td>Focus ring visible</td></tr>
          <tr><td>Disabled</td><td>Non-interactive tab</td><td>Reduced opacity</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use tabs for content that is related but mutually exclusive</li>
        <li>Keep tab labels short (1-2 words)</li>
        <li>Do not use tabs for sequential steps — use a stepper instead</li>
        <li>Limit to 5-7 tabs; use scrollable tabs for more</li>
        <li>Maintain tab state when switching between tabs</li>
        <li>Do not nest tabs within tabs</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>tablist / tab / tabpanel</td><td>ARIA tabs pattern</td></tr>
          <tr><td>aria-selected</td><td>true | false</td><td>Indicates active tab</td></tr>
          <tr><td>aria-controls</td><td>ID</td><td>Links tab to its panel</td></tr>
          <tr><td>aria-labelledby</td><td>ID</td><td>Panel labeled by its tab</td></tr>
          <tr><td>Keyboard</td><td>Arrow keys</td><td>Navigate between tabs</td></tr>
          <tr><td>Keyboard</td><td>Home / End</td><td>Jump to first or last tab</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>tab-height</td><td>48px</td><td>Tab bar height</td></tr>
          <tr><td>tab-indicator-height</td><td>2px</td><td>Active indicator thickness</td></tr>
          <tr><td>tab-indicator-color</td><td>primary-600</td><td>Active indicator color</td></tr>
          <tr><td>tab-active-color</td><td>primary-700</td><td>Active tab text color</td></tr>
          <tr><td>tab-inactive-color</td><td>neutral-500</td><td>Inactive tab text color</td></tr>
          <tr><td>tab-hover-bg</td><td>neutral-50</td><td>Hover background</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface TabsProps {
  tabs: Array<{
    id: string;
    label: string;
    icon?: React.ReactNode;
    badge?: number;
    disabled?: boolean;
    content: React.ReactNode;
  }>;
  activeTab?: string;
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  variant?: 'underline' | 'pill' | 'enclosed';
  orientation?: 'horizontal' | 'vertical';
}`}</code></pre>
      <pre><code>{`<Tabs
  defaultTab="overview"
  tabs={[
    { id: 'overview', label: 'Overview', content: <OverviewPanel /> },
    { id: 'specs', label: 'Specifications', content: <SpecsPanel /> },
    { id: 'reviews', label: 'Reviews', badge: 24, content: <ReviewsPanel /> },
  ]}
/>`}</code></pre>
    </ComponentPage>
  );
}
