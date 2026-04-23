'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function TogglePage() {
  return (
    <ComponentPage name="Toggle" description="Toggles allow users to switch between two states, typically on and off." slug="toggle">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Standard toggle switch</td></tr>
          <tr><td>With Label</td><td>Toggle with on/off labels</td></tr>
          <tr><td>With Icons</td><td>Toggle with icons inside the track</td></tr>
          <tr><td>Small</td><td>Compact toggle for dense layouts</td></tr>
          <tr><td>With Description</td><td>Toggle with helper text</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Wrapper holding toggle and label</td></tr>
          <tr><td>2</td><td>Track</td><td>Background rail of the toggle</td></tr>
          <tr><td>3</td><td>Thumb</td><td>Sliding circular indicator</td></tr>
          <tr><td>4</td><td>Label</td><td>Text describing the toggle purpose</td></tr>
          <tr><td>5</td><td>Description</td><td>Optional helper text</td></tr>
          <tr><td>6</td><td>On/Off Icons</td><td>Optional icons inside the track</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Off</td><td>Toggle is inactive</td><td>Thumb on the left, muted track</td></tr>
          <tr><td>On</td><td>Toggle is active</td><td>Thumb on the right, colored track</td></tr>
          <tr><td>Hover</td><td>Mouse over toggle</td><td>Thumb shadow or scale</td></tr>
          <tr><td>Focus</td><td>Keyboard focus</td><td>Focus ring visible</td></tr>
          <tr><td>Disabled</td><td>Non-interactive</td><td>Reduced opacity</td></tr>
          <tr><td>Loading</td><td>State is being saved</td><td>Spinner on thumb</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use toggles for immediate on/off settings</li>
        <li>Always provide a visible label describing the setting</li>
        <li>Apply the change immediately — no save button needed</li>
        <li>Use toggles instead of single checkboxes for binary settings</li>
        <li>Show loading state when the toggle triggers an async action</li>
        <li>Do not use toggles for form selections — use checkboxes instead</li>
      </ul>
      <DoDont slug="toggle" doItems={["Use for immediate on/off settings", "Show the current state clearly", "Include a label describing what the toggle controls"]} dontItems={["Use for form submissions — use checkboxes", "Use toggles without labels", "Require a save button after toggling"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>switch</td><td>ARIA switch role</td></tr>
          <tr><td>aria-checked</td><td>true | false</td><td>Current toggle state</td></tr>
          <tr><td>aria-labelledby</td><td>ID</td><td>Associates label with toggle</td></tr>
          <tr><td>aria-describedby</td><td>ID</td><td>Links to description text</td></tr>
          <tr><td>Keyboard</td><td>Space</td><td>Toggles the switch</td></tr>
          <tr><td>Keyboard</td><td>Enter</td><td>Toggles the switch</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>toggle-width</td><td>44px</td><td>Track width</td></tr>
          <tr><td>toggle-height</td><td>24px</td><td>Track height</td></tr>
          <tr><td>toggle-thumb-size</td><td>20px</td><td>Thumb diameter</td></tr>
          <tr><td>toggle-off-bg</td><td>neutral-300</td><td>Track color when off</td></tr>
          <tr><td>toggle-on-bg</td><td>primary-600</td><td>Track color when on</td></tr>
          <tr><td>toggle-thumb-color</td><td>white</td><td>Thumb color</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label: string;
  description?: string;
  disabled?: boolean;
  loading?: boolean;
  size?: 'sm' | 'md';
}`}</code></pre>
      <pre><code>{`<Toggle
  label="Dark mode"
  description="Switch between light and dark themes"
  checked={isDarkMode}
  onChange={setIsDarkMode}
/>

<Toggle
  label="Notifications"
  checked={notificationsEnabled}
  onChange={handleToggle}
  loading={isSaving}
/>`}</code></pre>
    </ComponentPage>
  );
}
