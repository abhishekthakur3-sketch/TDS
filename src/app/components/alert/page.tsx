'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function AlertPage() {
  return (
    <ComponentPage name="Alert" description="Alerts display important messages that require user attention." slug="alert">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Info</td><td>Informational message with blue styling</td></tr>
          <tr><td>Success</td><td>Positive confirmation message</td></tr>
          <tr><td>Warning</td><td>Cautionary message requiring attention</td></tr>
          <tr><td>Error</td><td>Critical error or failure message</td></tr>
          <tr><td>With Action</td><td>Alert with an action button</td></tr>
          <tr><td>Dismissible</td><td>Alert with a close button</td></tr>
          <tr><td>Banner</td><td>Full-width alert at the top of the page</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Colored wrapper indicating severity</td></tr>
          <tr><td>2</td><td>Icon</td><td>Severity icon (info, check, warning, error)</td></tr>
          <tr><td>3</td><td>Title</td><td>Optional bold heading</td></tr>
          <tr><td>4</td><td>Message</td><td>Descriptive text content</td></tr>
          <tr><td>5</td><td>Action</td><td>Optional action button or link</td></tr>
          <tr><td>6</td><td>Close Button</td><td>Optional dismiss icon</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Visible</td><td>Alert is displayed</td><td>Full content shown</td></tr>
          <tr><td>Dismissing</td><td>Alert is being closed</td><td>Fade-out animation</td></tr>
          <tr><td>Dismissed</td><td>Alert has been closed</td><td>Not visible</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use the appropriate severity level for the message type</li>
        <li>Keep alert messages concise and actionable</li>
        <li>Provide a clear action when the user needs to do something</li>
        <li>Use dismissible alerts for non-critical information</li>
        <li>Place alerts near the relevant content or at the top of the page</li>
        <li>Do not use alerts for success feedback after actions — use snackbars instead</li>
      </ul>
      <DoDont slug="alert" doItems={["Use appropriate severity for the message type", "Keep messages concise and actionable", "Place alerts near relevant content"]} dontItems={["Use alerts for success feedback after actions — use snackbars", "Stack multiple alerts of the same type", "Use alerts for promotional content"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>alert</td><td>Announces the message to screen readers</td></tr>
          <tr><td>aria-live</td><td>assertive</td><td>For error alerts</td></tr>
          <tr><td>aria-live</td><td>polite</td><td>For info and success alerts</td></tr>
          <tr><td>aria-label</td><td>Close alert</td><td>For the dismiss button</td></tr>
          <tr><td>Keyboard</td><td>Tab</td><td>Focus on action and close buttons</td></tr>
          <tr><td>Keyboard</td><td>Enter</td><td>Activate action or close</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>alert-border-radius</td><td>8px</td><td>Corner rounding</td></tr>
          <tr><td>alert-padding</td><td>12px 16px</td><td>Internal padding</td></tr>
          <tr><td>alert-info-bg</td><td>info-50</td><td>Info background</td></tr>
          <tr><td>alert-success-bg</td><td>success-50</td><td>Success background</td></tr>
          <tr><td>alert-warning-bg</td><td>warning-50</td><td>Warning background</td></tr>
          <tr><td>alert-error-bg</td><td>error-50</td><td>Error background</td></tr>
          <tr><td>alert-icon-size</td><td>20px</td><td>Severity icon size</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface AlertProps {
  severity: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
  variant?: 'standard' | 'filled' | 'outlined';
}`}</code></pre>
      <pre><code>{`<Alert severity="error" title="Payment failed">
  Your card was declined. Please try a different payment method.
</Alert>

<Alert severity="success" dismissible onDismiss={handleDismiss}>
  Your changes have been saved successfully.
</Alert>

<Alert severity="warning" action={<Button size="sm">Upgrade</Button>}>
  Your trial expires in 3 days.
</Alert>`}</code></pre>
    </ComponentPage>
  );
}
