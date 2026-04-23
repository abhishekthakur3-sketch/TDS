'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function StatusIndicatorPage() {
  return (
    <ComponentPage name="Status Indicator" description="Status indicators display the current state of an item using color and icons." slug="status-indicator">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Dot</td><td>Small colored circle indicator</td></tr>
          <tr><td>Badge</td><td>Colored label with status text</td></tr>
          <tr><td>With Icon</td><td>Status with a semantic icon</td></tr>
          <tr><td>Pulse</td><td>Animated pulsing indicator for live status</td></tr>
          <tr><td>Inline</td><td>Status shown inline with text</td></tr>
          <tr><td>With Tooltip</td><td>Status dot with tooltip on hover</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Indicator</td><td>Colored dot or icon</td></tr>
          <tr><td>2</td><td>Label</td><td>Optional text describing the status</td></tr>
          <tr><td>3</td><td>Pulse Ring</td><td>Animated ring for live indicators</td></tr>
          <tr><td>4</td><td>Tooltip</td><td>Hover text with status details</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Online</td><td>Active and available</td><td>Green indicator</td></tr>
          <tr><td>Offline</td><td>Inactive or unavailable</td><td>Gray indicator</td></tr>
          <tr><td>Busy</td><td>Do not disturb</td><td>Red indicator</td></tr>
          <tr><td>Away</td><td>Temporarily unavailable</td><td>Yellow indicator</td></tr>
          <tr><td>Error</td><td>Something went wrong</td><td>Red with icon</td></tr>
          <tr><td>Success</td><td>Operation completed</td><td>Green with checkmark</td></tr>
          <tr><td>Warning</td><td>Needs attention</td><td>Yellow with exclamation</td></tr>
          <tr><td>Pending</td><td>Awaiting action</td><td>Blue with clock icon</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use consistent colors for the same status across the application</li>
        <li>Always pair color with text or icons for color-blind users</li>
        <li>Use pulse animation sparingly for live or urgent statuses</li>
        <li>Provide tooltip text for dot-only indicators</li>
        <li>Keep status labels concise (1-2 words)</li>
        <li>Do not rely on color alone to convey status meaning</li>
      </ul>
      <DoDont slug="status-indicator" doItems={["Use consistent colors for status meanings", "Include a text label alongside the color", "Keep the indicator near the related content"]} dontItems={["Rely on color alone to convey status", "Use more than 5 status types", "Change status color meanings between contexts"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>status</td><td>Communicates dynamic status</td></tr>
          <tr><td>aria-label</td><td>string</td><td>Full status description</td></tr>
          <tr><td>aria-live</td><td>polite</td><td>Announces status changes</td></tr>
          <tr><td>Color + Text</td><td>Required</td><td>Never use color alone</td></tr>
          <tr><td>Title/Tooltip</td><td>Descriptive text</td><td>For icon-only indicators</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>status-dot-size</td><td>8px</td><td>Default dot diameter</td></tr>
          <tr><td>status-online-color</td><td>success-500</td><td>Online color</td></tr>
          <tr><td>status-offline-color</td><td>neutral-400</td><td>Offline color</td></tr>
          <tr><td>status-busy-color</td><td>error-500</td><td>Busy color</td></tr>
          <tr><td>status-away-color</td><td>warning-400</td><td>Away color</td></tr>
          <tr><td>status-pulse-duration</td><td>2s</td><td>Pulse animation duration</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'busy' | 'away' | 'error' | 'success' | 'warning' | 'pending';
  variant?: 'dot' | 'badge' | 'icon';
  label?: string;
  pulse?: boolean;
  size?: 'sm' | 'md' | 'lg';
  tooltip?: string;
}`}</code></pre>
      <pre><code>{`<StatusIndicator status="online" label="Available" />

<StatusIndicator status="busy" variant="dot" pulse tooltip="In a meeting" />

<StatusIndicator status="error" variant="badge" label="Failed" />`}</code></pre>
    </ComponentPage>
  );
}
