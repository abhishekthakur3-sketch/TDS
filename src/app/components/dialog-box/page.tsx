'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function DialogBoxPage() {
  return (
    <ComponentPage name="Dialog Box" description="Dialog boxes present important information or require user decisions in an overlay." slug="dialog-box">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Confirmation</td><td>Asks user to confirm or cancel an action</td></tr>
          <tr><td>Alert</td><td>Displays an important message with acknowledgment</td></tr>
          <tr><td>Form</td><td>Contains a form for user input</td></tr>
          <tr><td>Full Screen</td><td>Takes over the entire viewport</td></tr>
          <tr><td>Side Panel</td><td>Slides in from the side of the screen</td></tr>
          <tr><td>Nested</td><td>Dialog opened from within another dialog</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Overlay</td><td>Semi-transparent backdrop behind the dialog</td></tr>
          <tr><td>2</td><td>Container</td><td>The dialog panel with content</td></tr>
          <tr><td>3</td><td>Header</td><td>Title and optional close button</td></tr>
          <tr><td>4</td><td>Body</td><td>Main content area</td></tr>
          <tr><td>5</td><td>Footer</td><td>Action buttons (confirm, cancel)</td></tr>
          <tr><td>6</td><td>Close Button</td><td>X icon to dismiss the dialog</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Closed</td><td>Dialog is not visible</td><td>No overlay</td></tr>
          <tr><td>Opening</td><td>Dialog is animating in</td><td>Fade and scale animation</td></tr>
          <tr><td>Open</td><td>Dialog is fully visible</td><td>Overlay and content shown</td></tr>
          <tr><td>Closing</td><td>Dialog is animating out</td><td>Fade out animation</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use dialogs sparingly — they interrupt the user flow</li>
        <li>Always provide a way to dismiss (close button, Escape key, overlay click)</li>
        <li>Keep dialog content focused on a single task</li>
        <li>Use confirmation dialogs for destructive actions</li>
        <li>Trap focus inside the dialog while it is open</li>
        <li>Do not use dialogs for simple messages — use snackbars or alerts instead</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>dialog</td><td>Identifies the overlay as a dialog</td></tr>
          <tr><td>aria-modal</td><td>true</td><td>Indicates modal behavior</td></tr>
          <tr><td>aria-labelledby</td><td>ID</td><td>References the dialog title</td></tr>
          <tr><td>aria-describedby</td><td>ID</td><td>References the dialog description</td></tr>
          <tr><td>Focus Trap</td><td>Tab cycles within dialog</td><td>Focus does not escape</td></tr>
          <tr><td>Keyboard</td><td>Escape</td><td>Closes the dialog</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>dialog-width</td><td>480px</td><td>Default dialog width</td></tr>
          <tr><td>dialog-max-width</td><td>90vw</td><td>Maximum width on small screens</td></tr>
          <tr><td>dialog-border-radius</td><td>12px</td><td>Corner rounding</td></tr>
          <tr><td>dialog-shadow</td><td>elevation-4</td><td>Dialog shadow</td></tr>
          <tr><td>dialog-overlay-bg</td><td>rgba(0,0,0,0.5)</td><td>Overlay background</td></tr>
          <tr><td>dialog-z-index</td><td>1200</td><td>Stacking order</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface DialogBoxProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg' | 'fullscreen';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
}`}</code></pre>
      <pre><code>{`<DialogBox
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Delete item?"
  description="This action cannot be undone."
  footer={
    <>
      <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </>
  }
/>`}</code></pre>
    </ComponentPage>
  );
}
