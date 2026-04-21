'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function BadgePage() {
  return (
    <ComponentPage name="Badge" description="Badges display small counts or status indicators, typically on icons or avatars." slug="badge">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Numeric</td><td>Shows a count value</td></tr>
          <tr><td>Dot</td><td>Small dot indicator without a number</td></tr>
          <tr><td>Icon Badge</td><td>Badge overlaid on an icon</td></tr>
          <tr><td>Avatar Badge</td><td>Badge overlaid on an avatar</td></tr>
          <tr><td>Standalone</td><td>Badge used independently as a label</td></tr>
          <tr><td>Max Count</td><td>Shows "99+" when count exceeds maximum</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Anchor</td><td>The element the badge is attached to</td></tr>
          <tr><td>2</td><td>Badge Element</td><td>The small indicator overlay</td></tr>
          <tr><td>3</td><td>Count Text</td><td>Numeric value displayed in the badge</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Visible</td><td>Badge is shown</td><td>Count or dot displayed</td></tr>
          <tr><td>Hidden</td><td>Badge is not shown</td><td>Count is zero</td></tr>
          <tr><td>Pulsing</td><td>Animated attention state</td><td>Pulse animation active</td></tr>
          <tr><td>Overflow</td><td>Count exceeds max</td><td>Shows max+ (e.g., 99+)</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use badges to indicate unread counts or status changes</li>
        <li>Position badges consistently (top-right is standard)</li>
        <li>Use dot badges when the exact count is not important</li>
        <li>Set a maximum display count (e.g., 99+)</li>
        <li>Hide badges when the count is zero</li>
        <li>Do not use badges for decorative purposes</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>aria-label</td><td>string</td><td>Describes the badge meaning (e.g., "3 notifications")</td></tr>
          <tr><td>aria-hidden</td><td>true</td><td>When badge is purely decorative</td></tr>
          <tr><td>aria-live</td><td>polite</td><td>Announces count changes</td></tr>
          <tr><td>Role</td><td>status</td><td>For dynamic count updates</td></tr>
          <tr><td>Screen reader</td><td>Full text</td><td>Reads "99 plus" not "99+"</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>badge-size</td><td>20px</td><td>Default badge diameter</td></tr>
          <tr><td>badge-dot-size</td><td>8px</td><td>Dot variant size</td></tr>
          <tr><td>badge-bg</td><td>error-500</td><td>Background color</td></tr>
          <tr><td>badge-text-color</td><td>white</td><td>Text color</td></tr>
          <tr><td>badge-font-size</td><td>11px</td><td>Count text size</td></tr>
          <tr><td>badge-offset</td><td>-4px</td><td>Position offset from anchor corner</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface BadgeProps {
  count?: number;
  max?: number;
  dot?: boolean;
  color?: 'error' | 'warning' | 'success' | 'info' | 'neutral';
  showZero?: boolean;
  pulse?: boolean;
  children: React.ReactNode;
}`}</code></pre>
      <pre><code>{`<Badge count={5}>
  <NotificationIcon />
</Badge>

<Badge dot color="success">
  <Avatar name="John Doe" />
</Badge>

<Badge count={150} max={99}>
  <MailIcon />
</Badge>`}</code></pre>
    </ComponentPage>
  );
}
