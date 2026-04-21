'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function ShimmerPage() {
  return (
    <ComponentPage name="Shimmer" description="Shimmer provides loading placeholder animations for content being fetched." slug="shimmer">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Text</td><td>Rectangular shimmer mimicking text lines</td></tr>
          <tr><td>Circle</td><td>Circular shimmer for avatars</td></tr>
          <tr><td>Card</td><td>Full card skeleton with image and text areas</td></tr>
          <tr><td>List Item</td><td>Row-style shimmer for list content</td></tr>
          <tr><td>Table</td><td>Grid shimmer for tabular data</td></tr>
          <tr><td>Custom</td><td>Composable shimmer shapes for any layout</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Wrapper matching the target content dimensions</td></tr>
          <tr><td>2</td><td>Shimmer Shape</td><td>Animated gradient placeholder element</td></tr>
          <tr><td>3</td><td>Animation Layer</td><td>Moving highlight that creates the shimmer effect</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Loading</td><td>Content is being fetched</td><td>Shimmer animation active</td></tr>
          <tr><td>Loaded</td><td>Content has arrived</td><td>Shimmer replaced by real content</td></tr>
          <tr><td>Error</td><td>Content failed to load</td><td>Shimmer replaced by error state</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Match shimmer shapes to the actual content layout</li>
        <li>Use consistent animation speed across all shimmer instances</li>
        <li>Avoid shimmer for content that loads in under 200ms</li>
        <li>Provide aria-busy and aria-live for screen readers</li>
        <li>Use shimmer instead of spinners for content-heavy pages</li>
        <li>Do not animate shimmer too fast — it can cause motion discomfort</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>aria-busy</td><td>true</td><td>Indicates content is loading</td></tr>
          <tr><td>aria-live</td><td>polite</td><td>Announces when content is ready</td></tr>
          <tr><td>aria-label</td><td>Loading...</td><td>Accessible name for the placeholder</td></tr>
          <tr><td>Role</td><td>status</td><td>Communicates loading state</td></tr>
          <tr><td>prefers-reduced-motion</td><td>Pause animation</td><td>Respects motion preferences</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>shimmer-bg</td><td>neutral-200</td><td>Base background color</td></tr>
          <tr><td>shimmer-highlight</td><td>neutral-100</td><td>Moving highlight color</td></tr>
          <tr><td>shimmer-duration</td><td>1.5s</td><td>Animation cycle duration</td></tr>
          <tr><td>shimmer-border-radius</td><td>4px</td><td>Default corner rounding</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface ShimmerProps {
  variant?: 'text' | 'circle' | 'card' | 'rectangle';
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  lines?: number;
  animated?: boolean;
  className?: string;
}`}</code></pre>
      <pre><code>{`{isLoading ? (
  <Shimmer variant="card" width="100%" height={200} />
) : (
  <Card>{content}</Card>
)}

<Shimmer variant="text" lines={3} />
<Shimmer variant="circle" width={48} height={48} />`}</code></pre>
    </ComponentPage>
  );
}
