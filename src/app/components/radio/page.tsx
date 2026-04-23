'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function RadioPage() {
  return (
    <ComponentPage name="Radio" description="Radio buttons allow users to select exactly one option from a set." slug="radio">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Standard radio button with label</td></tr>
          <tr><td>With Description</td><td>Radio with supplementary helper text</td></tr>
          <tr><td>Card Radio</td><td>Selectable card-style radio with rich content</td></tr>
          <tr><td>Horizontal Group</td><td>Radio buttons arranged in a row</td></tr>
          <tr><td>Vertical Group</td><td>Radio buttons stacked vertically</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Wrapper holding the radio and label</td></tr>
          <tr><td>2</td><td>Control</td><td>Circular outer ring of the radio</td></tr>
          <tr><td>3</td><td>Indicator</td><td>Inner filled circle when selected</td></tr>
          <tr><td>4</td><td>Label</td><td>Text describing the option</td></tr>
          <tr><td>5</td><td>Description</td><td>Optional helper text below the label</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Unselected</td><td>Default empty state</td><td>Empty circle</td></tr>
          <tr><td>Selected</td><td>Active selection</td><td>Circle with filled indicator</td></tr>
          <tr><td>Hover</td><td>Mouse over the control</td><td>Highlighted border</td></tr>
          <tr><td>Focus</td><td>Keyboard focus on control</td><td>Focus ring visible</td></tr>
          <tr><td>Disabled</td><td>Non-interactive state</td><td>Reduced opacity</td></tr>
          <tr><td>Error</td><td>Validation failure</td><td>Red border and error message</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use radio buttons when only one option can be selected</li>
        <li>Always group radios with a fieldset and legend</li>
        <li>Pre-select a default option when possible</li>
        <li>Use at least two options — a single radio has no purpose</li>
        <li>Do not use radios for on/off — use a toggle instead</li>
        <li>Keep option labels concise and scannable</li>
      </ul>
      <DoDont slug="radio" doItems={["Use when only one option can be selected", "Always pre-select a default option", "Group related radios with a fieldset and legend"]} dontItems={["Use for multiple selections — use checkboxes", "Use fewer than 2 options", "Use radio buttons without visible labels"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>radio / radiogroup</td><td>Native input type="radio" with grouping</td></tr>
          <tr><td>aria-checked</td><td>true | false</td><td>Reflects selected state</td></tr>
          <tr><td>aria-labelledby</td><td>ID reference</td><td>Associates label with the control</td></tr>
          <tr><td>Keyboard</td><td>Arrow keys</td><td>Navigate between options in group</td></tr>
          <tr><td>Keyboard</td><td>Space</td><td>Selects the focused option</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>radio-size</td><td>20px</td><td>Diameter of the radio control</td></tr>
          <tr><td>radio-border-color</td><td>neutral-400</td><td>Default border color</td></tr>
          <tr><td>radio-selected-color</td><td>primary-600</td><td>Color when selected</td></tr>
          <tr><td>radio-indicator-size</td><td>10px</td><td>Size of inner filled circle</td></tr>
          <tr><td>radio-focus-ring</td><td>2px primary-300</td><td>Focus ring style</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface RadioProps {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
  name?: string;
}

interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  label: string;
  orientation?: 'horizontal' | 'vertical';
  error?: string;
  children: React.ReactNode;
}`}</code></pre>
      <pre><code>{`<RadioGroup label="Payment method" value={method} onChange={setMethod}>
  <Radio value="credit" label="Credit Card" />
  <Radio value="debit" label="Debit Card" />
  <Radio value="paypal" label="PayPal" />
</RadioGroup>`}</code></pre>
    </ComponentPage>
  );
}
