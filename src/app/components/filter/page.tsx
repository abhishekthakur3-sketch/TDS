'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function FilterPage() {
  return (
    <ComponentPage name="Filter" description="Filter components allow users to narrow down content by applying criteria." slug="filter">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Chip Filters</td><td>Toggleable filter chips in a row</td></tr>
          <tr><td>Dropdown Filters</td><td>Filter criteria in dropdown menus</td></tr>
          <tr><td>Sidebar Filters</td><td>Vertical filter panel with checkboxes</td></tr>
          <tr><td>Active Filters Bar</td><td>Horizontal bar showing applied filters</td></tr>
          <tr><td>Advanced Filters</td><td>Complex filter builder with conditions</td></tr>
          <tr><td>Quick Filters</td><td>Preset filter shortcuts</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Filter Container</td><td>Wrapper for all filter controls</td></tr>
          <tr><td>2</td><td>Filter Group</td><td>Related set of filter options</td></tr>
          <tr><td>3</td><td>Filter Option</td><td>Individual selectable criterion</td></tr>
          <tr><td>4</td><td>Active Filter Tag</td><td>Removable tag showing applied filter</td></tr>
          <tr><td>5</td><td>Clear All</td><td>Action to remove all active filters</td></tr>
          <tr><td>6</td><td>Apply Button</td><td>Confirms filter selection</td></tr>
          <tr><td>7</td><td>Result Count</td><td>Shows number of matching results</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>No Filters</td><td>No criteria applied</td><td>All content shown</td></tr>
          <tr><td>Filters Applied</td><td>Criteria active</td><td>Active tags visible</td></tr>
          <tr><td>Filter Open</td><td>Dropdown or panel expanded</td><td>Options visible</td></tr>
          <tr><td>Loading</td><td>Results being filtered</td><td>Loading indicator</td></tr>
          <tr><td>No Results</td><td>No matches for criteria</td><td>Empty state shown</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Show the number of results after filtering</li>
        <li>Allow users to clear individual filters or all at once</li>
        <li>Persist filter state in the URL for shareability</li>
        <li>Show active filters prominently above results</li>
        <li>Use progressive disclosure for complex filter sets</li>
        <li>Do not auto-apply filters — provide an Apply button for complex filters</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>group</td><td>Groups related filter controls</td></tr>
          <tr><td>aria-label</td><td>Filters</td><td>Accessible name for the filter region</td></tr>
          <tr><td>aria-live</td><td>polite</td><td>Announces result count changes</td></tr>
          <tr><td>aria-pressed</td><td>true | false</td><td>Toggle state for chip filters</td></tr>
          <tr><td>Keyboard</td><td>Tab</td><td>Navigate between filter controls</td></tr>
          <tr><td>Keyboard</td><td>Enter / Space</td><td>Toggle filter option</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>filter-chip-height</td><td>32px</td><td>Height of filter chips</td></tr>
          <tr><td>filter-chip-radius</td><td>16px</td><td>Chip corner rounding</td></tr>
          <tr><td>filter-active-bg</td><td>primary-100</td><td>Active filter background</td></tr>
          <tr><td>filter-active-color</td><td>primary-700</td><td>Active filter text color</td></tr>
          <tr><td>filter-gap</td><td>8px</td><td>Space between filter chips</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface FilterProps {
  filters: Array<{
    key: string;
    label: string;
    type: 'select' | 'multiselect' | 'range' | 'toggle';
    options?: Array<{ value: string; label: string; count?: number }>;
  }>;
  activeFilters?: Record<string, string | string[]>;
  onChange?: (filters: Record<string, string | string[]>) => void;
  onClear?: () => void;
  resultCount?: number;
  layout?: 'horizontal' | 'vertical';
}`}</code></pre>
      <pre><code>{`<Filter
  filters={[
    { key: 'category', label: 'Category', type: 'multiselect', options: categories },
    { key: 'price', label: 'Price Range', type: 'range' },
    { key: 'inStock', label: 'In Stock', type: 'toggle' },
  ]}
  activeFilters={filters}
  onChange={setFilters}
  resultCount={42}
/>`}</code></pre>
    </ComponentPage>
  );
}
