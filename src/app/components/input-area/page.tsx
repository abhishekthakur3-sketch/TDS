'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function InputAreaPage() {
  return (
    <ComponentPage name="Input Area" description="Text areas allow users to enter and edit multi-line text." slug="input-area">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Standard multi-line text area with label</td></tr>
          <tr><td>Auto-Resize</td><td>Grows vertically as content is added</td></tr>
          <tr><td>With Character Count</td><td>Shows remaining characters allowed</td></tr>
          <tr><td>With Toolbar</td><td>Rich text area with formatting options</td></tr>
          <tr><td>Fixed Height</td><td>Non-resizable text area with scroll</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Outer wrapper with border and background</td></tr>
          <tr><td>2</td><td>Label</td><td>Text above the area describing its purpose</td></tr>
          <tr><td>3</td><td>Text Area</td><td>The multi-line editable region</td></tr>
          <tr><td>4</td><td>Character Count</td><td>Optional counter showing remaining characters</td></tr>
          <tr><td>5</td><td>Helper Text</td><td>Guidance text below the area</td></tr>
          <tr><td>6</td><td>Resize Handle</td><td>Draggable corner for manual resizing</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Empty</td><td>No value entered</td><td>Placeholder visible</td></tr>
          <tr><td>Filled</td><td>Value present</td><td>User text displayed</td></tr>
          <tr><td>Hover</td><td>Mouse over area</td><td>Border color change</td></tr>
          <tr><td>Focus</td><td>Area is active</td><td>Focus ring and label highlight</td></tr>
          <tr><td>Disabled</td><td>Non-interactive</td><td>Reduced opacity</td></tr>
          <tr><td>Error</td><td>Validation failure</td><td>Red border and error message</td></tr>
          <tr><td>Max Length Reached</td><td>Character limit hit</td><td>Counter turns red</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use text areas for multi-line content like comments or descriptions</li>
        <li>Set a reasonable minimum height (at least 3 rows)</li>
        <li>Show character count when there is a maximum length</li>
        <li>Allow vertical resizing unless layout constraints prevent it</li>
        <li>Do not use text areas for single-line input — use Input instead</li>
        <li>Provide clear placeholder text indicating expected content</li>
      </ul>
      <DoDont slug="input-area" doItems={["Show a character count for limited fields", "Allow resizing when appropriate", "Use for multi-line text input"]} dontItems={["Use for single-line input — use Input instead", "Set a tiny default height", "Disable scrolling in the textarea"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>textbox (multiline)</td><td>Native textarea element</td></tr>
          <tr><td>aria-label / aria-labelledby</td><td>string / ID</td><td>Accessible name</td></tr>
          <tr><td>aria-describedby</td><td>ID reference</td><td>Links to helper or error text</td></tr>
          <tr><td>aria-invalid</td><td>true | false</td><td>Indicates validation error</td></tr>
          <tr><td>aria-required</td><td>true | false</td><td>Marks field as required</td></tr>
          <tr><td>Keyboard</td><td>Tab</td><td>Moves focus to/from the area</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>textarea-min-height</td><td>80px</td><td>Minimum height</td></tr>
          <tr><td>textarea-padding</td><td>12px</td><td>Internal padding</td></tr>
          <tr><td>textarea-border-radius</td><td>8px</td><td>Corner rounding</td></tr>
          <tr><td>textarea-border-color</td><td>neutral-300</td><td>Default border color</td></tr>
          <tr><td>textarea-focus-border</td><td>primary-500</td><td>Border color on focus</td></tr>
          <tr><td>textarea-font-size</td><td>14px</td><td>Text size</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface InputAreaProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  label: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  showCount?: boolean;
  autoResize?: boolean;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  resize?: 'none' | 'vertical' | 'both';
}`}</code></pre>
      <pre><code>{`<InputArea
  label="Description"
  placeholder="Tell us about yourself..."
  rows={4}
  maxLength={500}
  showCount
  value={description}
  onChange={setDescription}
/>`}</code></pre>
    </ComponentPage>
  );
}
