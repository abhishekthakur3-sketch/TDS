'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function SnackbarPage() {
  return (
    <ComponentPage name="Snackbar" description="Snackbars provide brief, non-intrusive feedback messages at the bottom of the screen." slug="snackbar">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Simple text message</td></tr>
          <tr><td>With Action</td><td>Message with an undo or action button</td></tr>
          <tr><td>With Icon</td><td>Message with a leading status icon</td></tr>
          <tr><td>Stacked</td><td>Multi-line message with action below</td></tr>
          <tr><td>Persistent</td><td>Stays until manually dismissed</td></tr>
          <tr><td>Queued</td><td>Multiple snackbars shown in sequence</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Floating bar at the bottom of the screen</td></tr>
          <tr><td>2</td><td>Icon</td><td>Optional leading status icon</td></tr>
          <tr><td>3</td><td>Message</td><td>Brief feedback text</td></tr>
          <tr><td>4</td><td>Action Button</td><td>Optional action like Undo</td></tr>
          <tr><td>5</td><td>Close Button</td><td>Optional dismiss icon</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Entering</td><td>Snackbar is appearing</td><td>Slide-up animation</td></tr>
          <tr><td>Visible</td><td>Snackbar is displayed</td><td>Full content shown</td></tr>
          <tr><td>Exiting</td><td>Snackbar is disappearing</td><td>Fade-out animation</td></tr>
          <tr><td>Hidden</td><td>Snackbar is not visible</td><td>Off-screen</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Keep snackbar messages brief (1-2 lines)</li>
        <li>Auto-dismiss after 4-8 seconds</li>
        <li>Provide an Undo action for reversible operations</li>
        <li>Show only one snackbar at a time, queue the rest</li>
        <li>Place snackbars at the bottom center of the screen</li>
        <li>Do not use snackbars for critical errors — use alerts or dialogs instead</li>
      </ul>
      <DoDont slug="snackbar" doItems={["Use for brief, non-critical feedback", "Auto-dismiss after 4-6 seconds", "Position at the bottom of the screen"]} dontItems={["Use for errors that need user action — use alerts", "Stack more than 2 snackbars", "Use snackbars for permanent messages"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>status</td><td>Announces the message politely</td></tr>
          <tr><td>aria-live</td><td>polite</td><td>Non-intrusive announcement</td></tr>
          <tr><td>aria-atomic</td><td>true</td><td>Reads the entire message</td></tr>
          <tr><td>Keyboard</td><td>Tab</td><td>Focus on action button</td></tr>
          <tr><td>Auto-dismiss</td><td>Pause on hover</td><td>Timer pauses when hovered</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>snackbar-min-width</td><td>300px</td><td>Minimum width</td></tr>
          <tr><td>snackbar-max-width</td><td>560px</td><td>Maximum width</td></tr>
          <tr><td>snackbar-bg</td><td>neutral-800</td><td>Background color</td></tr>
          <tr><td>snackbar-text-color</td><td>white</td><td>Text color</td></tr>
          <tr><td>snackbar-border-radius</td><td>8px</td><td>Corner rounding</td></tr>
          <tr><td>snackbar-z-index</td><td>1300</td><td>Stacking order</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface SnackbarProps {
  message: string;
  severity?: 'info' | 'success' | 'warning' | 'error';
  action?: { label: string; onClick: () => void };
  duration?: number;
  onClose?: () => void;
  position?: 'bottom-center' | 'bottom-left' | 'bottom-right';
  persistent?: boolean;
}`}</code></pre>
      <pre><code>{`<Snackbar
  message="Item deleted successfully"
  action={{ label: 'Undo', onClick: handleUndo }}
  duration={5000}
  onClose={handleClose}
/>

// Using a hook
const { showSnackbar } = useSnackbar();
showSnackbar({ message: 'Saved!', severity: 'success' });`}</code></pre>
    </ComponentPage>
  );
}
