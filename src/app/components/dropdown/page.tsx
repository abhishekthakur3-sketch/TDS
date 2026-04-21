'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function DropdownPage() {
  return (
    <ComponentPage name="Dropdown" description="Dropdowns allow users to select from a list of options in a collapsible menu." slug="dropdown">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Single Select</td><td>Select one option from the list</td></tr>
          <tr><td>Multi Select</td><td>Select multiple options with checkboxes</td></tr>
          <tr><td>Searchable</td><td>Filterable dropdown with search input</td></tr>
          <tr><td>Grouped</td><td>Options organized into labeled sections</td></tr>
          <tr><td>With Icons</td><td>Options with leading icons</td></tr>
          <tr><td>Creatable</td><td>Allows creating new options inline</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Trigger</td><td>Button that opens the dropdown menu</td></tr>
          <tr><td>2</td><td>Label</td><td>Text above the trigger describing the field</td></tr>
          <tr><td>3</td><td>Selected Value</td><td>Display of current selection in trigger</td></tr>
          <tr><td>4</td><td>Chevron</td><td>Arrow icon indicating expandability</td></tr>
          <tr><td>5</td><td>Menu</td><td>Floating panel containing options</td></tr>
          <tr><td>6</td><td>Option</td><td>Individual selectable item</td></tr>
          <tr><td>7</td><td>Search Input</td><td>Optional filter field at top of menu</td></tr>
          <tr><td>8</td><td>Group Header</td><td>Label for grouped option sections</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Closed</td><td>Menu is hidden</td><td>Trigger shows selected value</td></tr>
          <tr><td>Open</td><td>Menu is visible</td><td>Options displayed below trigger</td></tr>
          <tr><td>Hover (Option)</td><td>Mouse over an option</td><td>Background highlight</td></tr>
          <tr><td>Selected</td><td>Option is chosen</td><td>Checkmark or highlight</td></tr>
          <tr><td>Focus</td><td>Keyboard focus</td><td>Focus ring on trigger or option</td></tr>
          <tr><td>Disabled</td><td>Non-interactive</td><td>Reduced opacity</td></tr>
          <tr><td>Error</td><td>Validation failure</td><td>Red border on trigger</td></tr>
          <tr><td>Loading</td><td>Options being fetched</td><td>Spinner in menu</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use dropdowns for 5+ options; use radio buttons for fewer</li>
        <li>Always include a placeholder or default selection</li>
        <li>Add search functionality for lists with 10+ options</li>
        <li>Keep option labels concise and scannable</li>
        <li>Group related options with section headers</li>
        <li>Do not nest dropdowns inside other dropdowns</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>combobox / listbox</td><td>ARIA combobox pattern for trigger and list</td></tr>
          <tr><td>aria-expanded</td><td>true | false</td><td>Indicates menu open state</td></tr>
          <tr><td>aria-haspopup</td><td>listbox</td><td>Declares popup type</td></tr>
          <tr><td>aria-activedescendant</td><td>ID</td><td>Tracks focused option</td></tr>
          <tr><td>Keyboard</td><td>Enter / Space</td><td>Opens menu or selects option</td></tr>
          <tr><td>Keyboard</td><td>Arrow keys</td><td>Navigate between options</td></tr>
          <tr><td>Keyboard</td><td>Escape</td><td>Closes the menu</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>dropdown-trigger-height</td><td>40px</td><td>Height of the trigger button</td></tr>
          <tr><td>dropdown-menu-max-height</td><td>300px</td><td>Maximum menu height before scroll</td></tr>
          <tr><td>dropdown-option-height</td><td>36px</td><td>Height of each option</td></tr>
          <tr><td>dropdown-border-radius</td><td>8px</td><td>Corner rounding</td></tr>
          <tr><td>dropdown-shadow</td><td>elevation-2</td><td>Menu shadow</td></tr>
          <tr><td>dropdown-z-index</td><td>1000</td><td>Stacking order of menu</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface DropdownProps {
  options: Array<{ value: string; label: string; icon?: React.ReactNode }>;
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  label: string;
  placeholder?: string;
  multiple?: boolean;
  searchable?: boolean;
  creatable?: boolean;
  disabled?: boolean;
  error?: string;
  loading?: boolean;
  groupBy?: (option: Option) => string;
}`}</code></pre>
      <pre><code>{`<Dropdown
  label="Country"
  placeholder="Select a country"
  options={countries}
  value={selectedCountry}
  onChange={setSelectedCountry}
  searchable
/>`}</code></pre>
    </ComponentPage>
  );
}
