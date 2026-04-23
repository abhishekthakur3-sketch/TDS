'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function InputPage() {
  return (
    <ComponentPage name="Input" description="Text inputs allow users to enter and edit single-line text." slug="input">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Standard text input with label</td></tr>
          <tr><td>With Placeholder</td><td>Input showing hint text when empty</td></tr>
          <tr><td>With Prefix</td><td>Input with leading icon or text</td></tr>
          <tr><td>With Suffix</td><td>Input with trailing icon or text</td></tr>
          <tr><td>Password</td><td>Masked input with visibility toggle</td></tr>
          <tr><td>Number</td><td>Numeric input with increment/decrement</td></tr>
          <tr><td>With Clear</td><td>Input with a clear button when filled</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Outer wrapper with border and background</td></tr>
          <tr><td>2</td><td>Label</td><td>Text above the input describing its purpose</td></tr>
          <tr><td>3</td><td>Input Field</td><td>The editable text area</td></tr>
          <tr><td>4</td><td>Prefix</td><td>Optional leading icon or text</td></tr>
          <tr><td>5</td><td>Suffix</td><td>Optional trailing icon or action</td></tr>
          <tr><td>6</td><td>Helper Text</td><td>Guidance text below the input</td></tr>
          <tr><td>7</td><td>Error Message</td><td>Validation error text below the input</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Empty</td><td>No value entered</td><td>Placeholder visible</td></tr>
          <tr><td>Filled</td><td>Value present</td><td>User text displayed</td></tr>
          <tr><td>Hover</td><td>Mouse over input</td><td>Border color change</td></tr>
          <tr><td>Focus</td><td>Input is active</td><td>Focus ring and label highlight</td></tr>
          <tr><td>Disabled</td><td>Non-interactive</td><td>Reduced opacity, no cursor</td></tr>
          <tr><td>Read Only</td><td>Value visible but not editable</td><td>No border highlight</td></tr>
          <tr><td>Error</td><td>Validation failure</td><td>Red border and error message</td></tr>
          <tr><td>Success</td><td>Validation passed</td><td>Green border and checkmark</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Always pair inputs with a visible label</li>
        <li>Use placeholder text as a hint, not a replacement for labels</li>
        <li>Show validation errors inline below the input</li>
        <li>Use appropriate input types (email, tel, url) for built-in validation</li>
        <li>Provide clear error messages that explain how to fix the issue</li>
        <li>Do not disable the submit button — show validation on submit instead</li>
      </ul>
      <DoDont slug="input" doItems={["Always include a visible label", "Show validation errors inline below the field", "Use appropriate input types (email, tel, number)"]} dontItems={["Use placeholder text as the only label", "Show errors only on form submission", "Disable paste on password fields"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>textbox</td><td>Native input element</td></tr>
          <tr><td>aria-label / aria-labelledby</td><td>string / ID</td><td>Accessible name for the input</td></tr>
          <tr><td>aria-describedby</td><td>ID reference</td><td>Links to helper or error text</td></tr>
          <tr><td>aria-invalid</td><td>true | false</td><td>Indicates validation error</td></tr>
          <tr><td>aria-required</td><td>true | false</td><td>Marks field as required</td></tr>
          <tr><td>Keyboard</td><td>Tab</td><td>Moves focus to/from the input</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>input-height</td><td>40px</td><td>Default input height</td></tr>
          <tr><td>input-padding-x</td><td>12px</td><td>Horizontal padding</td></tr>
          <tr><td>input-border-radius</td><td>8px</td><td>Corner rounding</td></tr>
          <tr><td>input-border-color</td><td>neutral-300</td><td>Default border color</td></tr>
          <tr><td>input-focus-border</td><td>primary-500</td><td>Border color on focus</td></tr>
          <tr><td>input-error-color</td><td>error-500</td><td>Error state color</td></tr>
          <tr><td>input-bg</td><td>white</td><td>Background color</td></tr>
          <tr><td>input-font-size</td><td>14px</td><td>Text size</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface InputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  maxLength?: number;
}`}</code></pre>
      <pre><code>{`<Input
  label="Email address"
  type="email"
  placeholder="you@example.com"
  value={email}
  onChange={setEmail}
  error={emailError}
  required
/>`}</code></pre>
    </ComponentPage>
  );
}
