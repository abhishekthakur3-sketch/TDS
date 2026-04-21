'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function SideDrawerPage() {
  return (
    <ComponentPage name="Side Drawer" description="Side drawers slide in from the edge of the screen to show additional content." slug="side-drawer">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Left</td><td>Drawer slides in from the left edge</td></tr>
          <tr><td>Right</td><td>Drawer slides in from the right edge</td></tr>
          <tr><td>With Header</td><td>Drawer with a fixed title bar</td></tr>
          <tr><td>With Footer</td><td>Drawer with fixed action buttons at bottom</td></tr>
          <tr><td>Persistent</td><td>Drawer that stays open alongside content</td></tr>
          <tr><td>Temporary</td><td>Overlay drawer that covers content</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Overlay</td><td>Semi-transparent backdrop</td></tr>
          <tr><td>2</td><td>Drawer Panel</td><td>Sliding content container</td></tr>
          <tr><td>3</td><td>Header</td><td>Title bar with close button</td></tr>
          <tr><td>4</td><td>Body</td><td>Scrollable content area</td></tr>
          <tr><td>5</td><td>Footer</td><td>Fixed action bar at the bottom</td></tr>
          <tr><td>6</td><td>Close Button</td><td>X icon to dismiss the drawer</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Closed</td><td>Drawer is off-screen</td><td>No overlay visible</td></tr>
          <tr><td>Opening</td><td>Drawer is sliding in</td><td>Slide animation active</td></tr>
          <tr><td>Open</td><td>Drawer is fully visible</td><td>Overlay and panel shown</td></tr>
          <tr><td>Closing</td><td>Drawer is sliding out</td><td>Slide-out animation</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use drawers for secondary content that does not need a full page</li>
        <li>Always provide a close button and Escape key to dismiss</li>
        <li>Keep drawer width appropriate (300-500px on desktop)</li>
        <li>Use overlay drawers for temporary tasks, persistent for navigation</li>
        <li>Trap focus inside the drawer when it is open</li>
        <li>Do not use drawers for critical decisions — use dialogs instead</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>dialog / complementary</td><td>Identifies the drawer purpose</td></tr>
          <tr><td>aria-modal</td><td>true</td><td>For overlay drawers</td></tr>
          <tr><td>aria-labelledby</td><td>ID</td><td>References the drawer title</td></tr>
          <tr><td>Focus Trap</td><td>Tab cycles within drawer</td><td>Focus does not escape</td></tr>
          <tr><td>Keyboard</td><td>Escape</td><td>Closes the drawer</td></tr>
          <tr><td>Focus Restore</td><td>Returns focus to trigger</td><td>On close</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>drawer-width</td><td>400px</td><td>Default drawer width</td></tr>
          <tr><td>drawer-max-width</td><td>90vw</td><td>Maximum width on small screens</td></tr>
          <tr><td>drawer-bg</td><td>white</td><td>Background color</td></tr>
          <tr><td>drawer-shadow</td><td>elevation-4</td><td>Panel shadow</td></tr>
          <tr><td>drawer-overlay-bg</td><td>rgba(0,0,0,0.5)</td><td>Overlay background</td></tr>
          <tr><td>drawer-z-index</td><td>1200</td><td>Stacking order</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface SideDrawerProps {
  open: boolean;
  onClose: () => void;
  position?: 'left' | 'right';
  title?: string;
  width?: string | number;
  overlay?: boolean;
  persistent?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
}`}</code></pre>
      <pre><code>{`<SideDrawer
  open={isDrawerOpen}
  onClose={() => setIsDrawerOpen(false)}
  position="right"
  title="Item Details"
  footer={<Button onClick={handleSave}>Save Changes</Button>}
>
  <DetailForm item={selectedItem} />
</SideDrawer>`}</code></pre>
    </ComponentPage>
  );
}
