'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function SearchPage() {
  return (
    <ComponentPage name="Search" description="Search inputs allow users to find content by entering keywords." slug="search">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Standard search input with icon</td></tr>
          <tr><td>With Suggestions</td><td>Dropdown showing autocomplete results</td></tr>
          <tr><td>Expandable</td><td>Icon that expands into a full search field</td></tr>
          <tr><td>With Filters</td><td>Search combined with filter controls</td></tr>
          <tr><td>Voice Search</td><td>Search with microphone input option</td></tr>
          <tr><td>Command Palette</td><td>Full-screen search overlay with shortcuts</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Wrapper with border and background</td></tr>
          <tr><td>2</td><td>Search Icon</td><td>Magnifying glass icon on the left</td></tr>
          <tr><td>3</td><td>Input Field</td><td>Text input for search query</td></tr>
          <tr><td>4</td><td>Clear Button</td><td>X icon to clear the search text</td></tr>
          <tr><td>5</td><td>Suggestions Panel</td><td>Dropdown showing matching results</td></tr>
          <tr><td>6</td><td>Loading Indicator</td><td>Spinner shown during search</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Empty</td><td>No query entered</td><td>Placeholder text visible</td></tr>
          <tr><td>Typing</td><td>User entering text</td><td>Clear button appears</td></tr>
          <tr><td>Loading</td><td>Fetching results</td><td>Spinner visible</td></tr>
          <tr><td>Results</td><td>Matches found</td><td>Suggestions panel open</td></tr>
          <tr><td>No Results</td><td>No matches</td><td>Empty state message</td></tr>
          <tr><td>Focus</td><td>Input is active</td><td>Focus ring visible</td></tr>
          <tr><td>Collapsed</td><td>Expandable variant closed</td><td>Only icon visible</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Place search in a consistent, prominent location</li>
        <li>Show recent searches when the field is focused and empty</li>
        <li>Debounce search requests to avoid excessive API calls</li>
        <li>Provide clear feedback when no results are found</li>
        <li>Allow keyboard navigation through suggestions</li>
        <li>Do not require users to press Enter — search as they type when possible</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>search / combobox</td><td>Landmark role for search region</td></tr>
          <tr><td>aria-label</td><td>string</td><td>Accessible name for the search input</td></tr>
          <tr><td>aria-autocomplete</td><td>list | both</td><td>Indicates suggestion behavior</td></tr>
          <tr><td>aria-expanded</td><td>true | false</td><td>Suggestions panel visibility</td></tr>
          <tr><td>aria-activedescendant</td><td>ID</td><td>Currently highlighted suggestion</td></tr>
          <tr><td>Keyboard</td><td>Escape</td><td>Clears input or closes suggestions</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>search-height</td><td>40px</td><td>Input height</td></tr>
          <tr><td>search-border-radius</td><td>20px</td><td>Pill-shaped rounding</td></tr>
          <tr><td>search-icon-size</td><td>20px</td><td>Size of the search icon</td></tr>
          <tr><td>search-bg</td><td>neutral-50</td><td>Background color</td></tr>
          <tr><td>search-focus-border</td><td>primary-500</td><td>Border on focus</td></tr>
          <tr><td>search-suggestion-hover</td><td>neutral-100</td><td>Suggestion hover background</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface SearchProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSearch?: (query: string) => void;
  placeholder?: string;
  suggestions?: Array<{ id: string; label: string; icon?: React.ReactNode }>;
  loading?: boolean;
  debounceMs?: number;
  expandable?: boolean;
  onClear?: () => void;
}`}</code></pre>
      <pre><code>{`<Search
  placeholder="Search components..."
  value={query}
  onChange={setQuery}
  onSearch={handleSearch}
  suggestions={results}
  loading={isSearching}
  debounceMs={300}
/>`}</code></pre>
    </ComponentPage>
  );
}
