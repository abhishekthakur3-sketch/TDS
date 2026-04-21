'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function ScrollPage() {
  return (
    <ComponentPage name="Scroll" description="Scroll components manage scrollable content areas with custom scrollbar styling." slug="scroll">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Vertical</td><td>Standard vertical scrollable area</td></tr>
          <tr><td>Horizontal</td><td>Horizontal scrollable content</td></tr>
          <tr><td>Both</td><td>Scrollable in both directions</td></tr>
          <tr><td>Auto-Hide</td><td>Scrollbar fades when not scrolling</td></tr>
          <tr><td>Custom Thumb</td><td>Styled scrollbar thumb and track</td></tr>
          <tr><td>Infinite Scroll</td><td>Loads more content on scroll end</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Scroll Container</td><td>Overflow wrapper for content</td></tr>
          <tr><td>2</td><td>Content Area</td><td>The scrollable inner content</td></tr>
          <tr><td>3</td><td>Scrollbar Track</td><td>Background rail for the scrollbar</td></tr>
          <tr><td>4</td><td>Scrollbar Thumb</td><td>Draggable indicator of scroll position</td></tr>
          <tr><td>5</td><td>Scroll Shadows</td><td>Gradient overlays indicating more content</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Idle</td><td>Not scrolling</td><td>Scrollbar may be hidden</td></tr>
          <tr><td>Scrolling</td><td>User is scrolling</td><td>Scrollbar thumb visible</td></tr>
          <tr><td>At Top</td><td>Scrolled to the beginning</td><td>No top shadow</td></tr>
          <tr><td>At Bottom</td><td>Scrolled to the end</td><td>No bottom shadow</td></tr>
          <tr><td>Overflowing</td><td>Content exceeds container</td><td>Scrollbar appears</td></tr>
          <tr><td>No Overflow</td><td>Content fits container</td><td>No scrollbar shown</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use scroll containers for content that may exceed viewport height</li>
        <li>Show scroll shadows to indicate hidden content above or below</li>
        <li>Ensure custom scrollbars maintain a minimum thumb size for usability</li>
        <li>Support both mouse wheel and touch gestures</li>
        <li>Do not nest scrollable areas in the same direction</li>
        <li>Provide keyboard scrolling support with arrow keys</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>tabindex</td><td>0</td><td>Makes scroll area focusable for keyboard users</td></tr>
          <tr><td>role</td><td>region</td><td>Identifies the scrollable area</td></tr>
          <tr><td>aria-label</td><td>string</td><td>Describes the scrollable content</td></tr>
          <tr><td>Keyboard</td><td>Arrow keys</td><td>Scrolls content when focused</td></tr>
          <tr><td>Keyboard</td><td>Page Up/Down</td><td>Scrolls by page</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>scrollbar-width</td><td>8px</td><td>Width of the scrollbar</td></tr>
          <tr><td>scrollbar-thumb-color</td><td>neutral-400</td><td>Thumb color</td></tr>
          <tr><td>scrollbar-track-color</td><td>neutral-100</td><td>Track background</td></tr>
          <tr><td>scrollbar-thumb-radius</td><td>4px</td><td>Thumb corner rounding</td></tr>
          <tr><td>scroll-shadow-size</td><td>40px</td><td>Height of scroll shadow gradient</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface ScrollProps {
  direction?: 'vertical' | 'horizontal' | 'both';
  autoHide?: boolean;
  showShadows?: boolean;
  maxHeight?: string | number;
  maxWidth?: string | number;
  onScroll?: (event: ScrollEvent) => void;
  onReachEnd?: () => void;
  children: React.ReactNode;
}`}</code></pre>
      <pre><code>{`<Scroll maxHeight={400} showShadows autoHide>
  <LongContentList items={items} />
</Scroll>

<Scroll direction="horizontal" maxWidth="100%">
  <HorizontalCardRow cards={cards} />
</Scroll>`}</code></pre>
    </ComponentPage>
  );
}
