'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function TooltipPage() {
  return (
    <ComponentPage name="Tooltip" description="Tooltips display informative text when users hover over or focus on an element." slug="tooltip">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Simple text tooltip on hover</td></tr>
          <tr><td>With Arrow</td><td>Tooltip with a pointer arrow</td></tr>
          <tr><td>Rich</td><td>Tooltip with formatted content</td></tr>
          <tr><td>Delayed</td><td>Tooltip with a show/hide delay</td></tr>
          <tr><td>Interactive</td><td>Tooltip that can be hovered and clicked</td></tr>
          <tr><td>Multiline</td><td>Tooltip with wrapped text content</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Trigger</td><td>Element that activates the tooltip</td></tr>
          <tr><td>2</td><td>Tooltip Container</td><td>Floating text panel</td></tr>
          <tr><td>3</td><td>Arrow</td><td>Optional pointer connecting to trigger</td></tr>
          <tr><td>4</td><td>Content</td><td>Text or rich content inside</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Hidden</td><td>Tooltip not visible</td><td>Only trigger shown</td></tr>
          <tr><td>Showing</td><td>Tooltip appearing</td><td>Fade-in animation</td></tr>
          <tr><td>Visible</td><td>Tooltip fully shown</td><td>Content readable</td></tr>
          <tr><td>Hiding</td><td>Tooltip disappearing</td><td>Fade-out animation</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use tooltips for supplementary information, not essential content</li>
        <li>Keep tooltip text brief (1-2 sentences max)</li>
        <li>Show tooltips on both hover and keyboard focus</li>
        <li>Add a small delay (200-300ms) before showing to avoid flicker</li>
        <li>Position tooltips to avoid viewport overflow</li>
        <li>Do not put interactive elements inside tooltips — use popovers instead</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>tooltip</td><td>ARIA tooltip role</td></tr>
          <tr><td>aria-describedby</td><td>ID</td><td>Links trigger to tooltip content</td></tr>
          <tr><td>Keyboard</td><td>Focus</td><td>Shows tooltip on focus</td></tr>
          <tr><td>Keyboard</td><td>Escape</td><td>Dismisses the tooltip</td></tr>
          <tr><td>Hover</td><td>Mouse enter/leave</td><td>Shows/hides tooltip</td></tr>
          <tr><td>Touch</td><td>Long press</td><td>Shows tooltip on mobile</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>tooltip-bg</td><td>neutral-800</td><td>Background color</td></tr>
          <tr><td>tooltip-text-color</td><td>white</td><td>Text color</td></tr>
          <tr><td>tooltip-font-size</td><td>12px</td><td>Text size</td></tr>
          <tr><td>tooltip-padding</td><td>6px 10px</td><td>Internal padding</td></tr>
          <tr><td>tooltip-border-radius</td><td>6px</td><td>Corner rounding</td></tr>
          <tr><td>tooltip-max-width</td><td>240px</td><td>Maximum width</td></tr>
          <tr><td>tooltip-z-index</td><td>1400</td><td>Stacking order</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface TooltipProps {
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  offset?: number;
  showArrow?: boolean;
  interactive?: boolean;
  children: React.ReactElement;
}`}</code></pre>
      <pre><code>{`<Tooltip content="Copy to clipboard" placement="top">
  <IconButton icon={<CopyIcon />} />
</Tooltip>

<Tooltip content="This feature is in beta and may change." showArrow delay={300}>
  <Badge>Beta</Badge>
</Tooltip>`}</code></pre>
    </ComponentPage>
  );
}
