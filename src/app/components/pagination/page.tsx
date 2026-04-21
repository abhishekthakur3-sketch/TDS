'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function PaginationPage() {
  return (
    <ComponentPage name="Pagination" description="Pagination divides content across multiple pages with navigation controls." slug="pagination">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Numbered page buttons with prev/next</td></tr>
          <tr><td>Simple</td><td>Previous and next buttons only</td></tr>
          <tr><td>With Ellipsis</td><td>Truncated page numbers for large sets</td></tr>
          <tr><td>With Page Size</td><td>Dropdown to change items per page</td></tr>
          <tr><td>Compact</td><td>Minimal pagination for mobile</td></tr>
          <tr><td>Cursor-Based</td><td>Load more button for infinite-style pagination</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Wrapper for pagination controls</td></tr>
          <tr><td>2</td><td>Previous Button</td><td>Navigate to the previous page</td></tr>
          <tr><td>3</td><td>Page Numbers</td><td>Clickable page number buttons</td></tr>
          <tr><td>4</td><td>Ellipsis</td><td>Indicator for skipped page numbers</td></tr>
          <tr><td>5</td><td>Next Button</td><td>Navigate to the next page</td></tr>
          <tr><td>6</td><td>Page Size Selector</td><td>Dropdown for items per page</td></tr>
          <tr><td>7</td><td>Page Info</td><td>Text showing current range (e.g., 1-10 of 100)</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>First Page</td><td>On the first page</td><td>Previous button disabled</td></tr>
          <tr><td>Middle Page</td><td>Between first and last</td><td>Both buttons enabled</td></tr>
          <tr><td>Last Page</td><td>On the last page</td><td>Next button disabled</td></tr>
          <tr><td>Hover</td><td>Mouse over page button</td><td>Background highlight</td></tr>
          <tr><td>Active</td><td>Current page</td><td>Filled background</td></tr>
          <tr><td>Focus</td><td>Keyboard focus</td><td>Focus ring visible</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Show the current page clearly with visual emphasis</li>
        <li>Disable prev/next buttons at the boundaries</li>
        <li>Use ellipsis for large page counts (show first, last, and nearby pages)</li>
        <li>Provide a page size selector for data tables</li>
        <li>Show total item count or range for context</li>
        <li>Do not use pagination for content that benefits from infinite scroll</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>navigation</td><td>Landmark for pagination region</td></tr>
          <tr><td>aria-label</td><td>Pagination</td><td>Accessible name</td></tr>
          <tr><td>aria-current</td><td>page</td><td>Indicates the current page</td></tr>
          <tr><td>aria-disabled</td><td>true</td><td>For disabled prev/next buttons</td></tr>
          <tr><td>Keyboard</td><td>Tab</td><td>Navigate between page buttons</td></tr>
          <tr><td>Keyboard</td><td>Enter</td><td>Activate page button</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>pagination-button-size</td><td>36px</td><td>Page button dimensions</td></tr>
          <tr><td>pagination-border-radius</td><td>8px</td><td>Button corner rounding</td></tr>
          <tr><td>pagination-active-bg</td><td>primary-600</td><td>Active page background</td></tr>
          <tr><td>pagination-active-color</td><td>white</td><td>Active page text color</td></tr>
          <tr><td>pagination-hover-bg</td><td>neutral-100</td><td>Hover background</td></tr>
          <tr><td>pagination-gap</td><td>4px</td><td>Space between buttons</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize?: number;
  pageSizeOptions?: number[];
  onPageSizeChange?: (size: number) => void;
  showPageSize?: boolean;
  showTotal?: boolean;
  totalItems?: number;
  siblingCount?: number;
}`}</code></pre>
      <pre><code>{`<Pagination
  currentPage={page}
  totalPages={50}
  onPageChange={setPage}
  showTotal
  totalItems={500}
  siblingCount={1}
/>

<Pagination
  currentPage={page}
  totalPages={20}
  onPageChange={setPage}
  showPageSize
  pageSize={pageSize}
  pageSizeOptions={[10, 25, 50]}
  onPageSizeChange={setPageSize}
/>`}</code></pre>
    </ComponentPage>
  );
}
