'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function CheckboxPage() {
  return (
    <ComponentPage name="Checkbox" description="Checkboxes allow users to select one or more items from a set of options." slug="checkbox">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Standard checkbox with label</td></tr>
          <tr><td>Indeterminate</td><td>Partially selected state for parent checkboxes</td></tr>
          <tr><td>Without Label</td><td>Standalone checkbox without visible text</td></tr>
          <tr><td>With Description</td><td>Checkbox with supplementary helper text</td></tr>
          <tr><td>Group</td><td>Multiple related checkboxes in a fieldset</td></tr>
          <tr><td>Card Checkbox</td><td>Selectable card-style checkbox with rich content</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Wrapper holding the checkbox and label</td></tr>
          <tr><td>2</td><td>Control</td><td>The square box that shows checked state</td></tr>
          <tr><td>3</td><td>Checkmark</td><td>SVG icon indicating selection</td></tr>
          <tr><td>4</td><td>Label</td><td>Text describing the option</td></tr>
          <tr><td>5</td><td>Description</td><td>Optional helper text below the label</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Unchecked</td><td>Default empty state</td><td>Empty box</td></tr>
          <tr><td>Checked</td><td>Selected state</td><td>Box with checkmark</td></tr>
          <tr><td>Indeterminate</td><td>Partial selection</td><td>Box with dash icon</td></tr>
          <tr><td>Hover</td><td>Mouse over the control</td><td>Highlighted border</td></tr>
          <tr><td>Focus</td><td>Keyboard focus on control</td><td>Focus ring visible</td></tr>
          <tr><td>Disabled</td><td>Non-interactive state</td><td>Reduced opacity</td></tr>
          <tr><td>Error</td><td>Validation failure</td><td>Red border and error message</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use checkboxes when users can select multiple options</li>
        <li>Always provide a visible label for accessibility</li>
        <li>Use indeterminate state for "select all" parent checkboxes</li>
        <li>Group related checkboxes inside a fieldset with a legend</li>
        <li>Do not use checkboxes for binary on/off — use a toggle instead</li>
        <li>Ensure touch targets are at least 44×44px on mobile</li>
      </ul>
      <DoDont slug="checkbox" doItems={["Use when users can select multiple options", "Always provide a visible label", "Use indeterminate state for 'select all' parents"]} dontItems={["Use for binary on/off — use a toggle instead", "Use without labels for accessibility", "Pre-check options that benefit the business, not the user"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>checkbox</td><td>Native input type="checkbox" or role="checkbox"</td></tr>
          <tr><td>aria-checked</td><td>true | false | mixed</td><td>Reflects current state including indeterminate</td></tr>
          <tr><td>aria-labelledby</td><td>ID reference</td><td>Associates label with the control</td></tr>
          <tr><td>aria-describedby</td><td>ID reference</td><td>Links to description or error text</td></tr>
          <tr><td>Keyboard</td><td>Space</td><td>Toggles checked state</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>checkbox-size</td><td>20px</td><td>Width and height of the control box</td></tr>
          <tr><td>checkbox-border-radius</td><td>4px</td><td>Corner rounding of the control</td></tr>
          <tr><td>checkbox-border-color</td><td>neutral-400</td><td>Default border color</td></tr>
          <tr><td>checkbox-checked-bg</td><td>primary-600</td><td>Background when checked</td></tr>
          <tr><td>checkbox-checkmark-color</td><td>white</td><td>Color of the checkmark icon</td></tr>
          <tr><td>checkbox-focus-ring</td><td>2px primary-300</td><td>Focus ring style</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  error?: string;
  name?: string;
  value?: string;
}`}</code></pre>
      <pre><code>{`<Checkbox
  label="Accept terms and conditions"
  checked={isChecked}
  onChange={setIsChecked}
/>

<CheckboxGroup label="Select toppings">
  <Checkbox label="Cheese" value="cheese" />
  <Checkbox label="Pepperoni" value="pepperoni" />
  <Checkbox label="Mushrooms" value="mushrooms" />
</CheckboxGroup>`}</code></pre>
    </ComponentPage>
  );
}
