'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function PillsPage() {
  return (
    <ComponentPage name="Pills" description="Pills are rounded labels used for filtering, selection, or status display." slug="pills">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Standard pill label</td></tr>
          <tr><td>Selectable</td><td>Toggleable pill for filtering</td></tr>
          <tr><td>With Count</td><td>Pill showing a count value</td></tr>
          <tr><td>With Icon</td><td>Pill with a leading icon</td></tr>
          <tr><td>Removable</td><td>Pill with dismiss action</td></tr>
          <tr><td>Group</td><td>Set of pills for multi-select filtering</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Fully rounded wrapper</td></tr>
          <tr><td>2</td><td>Icon</td><td>Optional leading icon</td></tr>
          <tr><td>3</td><td>Label</td><td>Text content</td></tr>
          <tr><td>4</td><td>Count</td><td>Optional trailing count badge</td></tr>
          <tr><td>5</td><td>Remove Button</td><td>Optional dismiss icon</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Unselected state</td><td>Outlined or light fill</td></tr>
          <tr><td>Selected</td><td>Active/chosen state</td><td>Filled with primary color</td></tr>
          <tr><td>Hover</td><td>Mouse over pill</td><td>Darkened background</td></tr>
          <tr><td>Focus</td><td>Keyboard focus</td><td>Focus ring visible</td></tr>
          <tr><td>Disabled</td><td>Non-interactive</td><td>Reduced opacity</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use pills for filter selections and category toggles</li>
        <li>Clearly distinguish selected from unselected states</li>
        <li>Allow multiple pill selections in filter groups</li>
        <li>Keep pill labels concise (1-2 words)</li>
        <li>Use pills instead of checkboxes for visual filter bars</li>
        <li>Do not use pills for navigation — use tabs instead</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>option / checkbox</td><td>Selectable pill role</td></tr>
          <tr><td>aria-selected</td><td>true | false</td><td>Selection state</td></tr>
          <tr><td>aria-pressed</td><td>true | false</td><td>Toggle state</td></tr>
          <tr><td>Keyboard</td><td>Enter / Space</td><td>Toggle selection</td></tr>
          <tr><td>Keyboard</td><td>Arrow keys</td><td>Navigate between pills in a group</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>pill-height</td><td>32px</td><td>Default pill height</td></tr>
          <tr><td>pill-padding-x</td><td>12px</td><td>Horizontal padding</td></tr>
          <tr><td>pill-border-radius</td><td>16px</td><td>Fully rounded corners</td></tr>
          <tr><td>pill-selected-bg</td><td>primary-600</td><td>Selected background</td></tr>
          <tr><td>pill-selected-color</td><td>white</td><td>Selected text color</td></tr>
          <tr><td>pill-font-size</td><td>13px</td><td>Label text size</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface PillProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  count?: number;
  removable?: boolean;
  onRemove?: () => void;
  disabled?: boolean;
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error';
}`}</code></pre>
      <pre><code>{`<PillGroup>
  {categories.map(cat => (
    <Pill
      key={cat.id}
      label={cat.name}
      count={cat.count}
      selected={selectedIds.includes(cat.id)}
      onClick={() => toggleCategory(cat.id)}
    />
  ))}
</PillGroup>`}</code></pre>
    </ComponentPage>
  );
}
