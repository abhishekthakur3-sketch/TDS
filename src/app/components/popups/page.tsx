'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function PopupsPage() {
  return (
    <ComponentPage name="Popups" description="Popups display contextual content in a floating overlay triggered by user interaction." slug="popups">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Menu</td><td>Action menu triggered by click</td></tr>
          <tr><td>Popover</td><td>Rich content popup on click or hover</td></tr>
          <tr><td>Context Menu</td><td>Right-click menu with actions</td></tr>
          <tr><td>Dropdown Menu</td><td>Menu triggered by a button</td></tr>
          <tr><td>Nested Menu</td><td>Menu with sub-menus</td></tr>
          <tr><td>Confirmation Popup</td><td>Inline confirmation before action</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Trigger</td><td>Element that opens the popup</td></tr>
          <tr><td>2</td><td>Popup Container</td><td>Floating panel with content</td></tr>
          <tr><td>3</td><td>Arrow</td><td>Optional pointer connecting popup to trigger</td></tr>
          <tr><td>4</td><td>Menu Items</td><td>List of actions or options</td></tr>
          <tr><td>5</td><td>Divider</td><td>Separator between menu groups</td></tr>
          <tr><td>6</td><td>Header</td><td>Optional title for the popup</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Closed</td><td>Popup is hidden</td><td>Only trigger visible</td></tr>
          <tr><td>Open</td><td>Popup is visible</td><td>Floating content shown</td></tr>
          <tr><td>Hover (Item)</td><td>Mouse over menu item</td><td>Background highlight</td></tr>
          <tr><td>Focus (Item)</td><td>Keyboard focus on item</td><td>Focus ring visible</td></tr>
          <tr><td>Disabled (Item)</td><td>Non-interactive item</td><td>Reduced opacity</td></tr>
          <tr><td>Sub-Menu Open</td><td>Nested menu visible</td><td>Child menu shown</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Position popups to avoid viewport overflow</li>
        <li>Close popups when clicking outside or pressing Escape</li>
        <li>Keep popup content concise and focused</li>
        <li>Use consistent placement relative to the trigger</li>
        <li>Avoid deeply nested sub-menus (max 2 levels)</li>
        <li>Do not use popups for critical information — use dialogs instead</li>
      </ul>
      <DoDont slug="popups" doItems={["Position near the trigger element", "Dismiss on outside click or Escape key", "Keep content focused and brief"]} dontItems={["Use popups for critical information", "Nest popups inside popups", "Block the entire page with a popup"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>menu / menuitem</td><td>ARIA menu pattern</td></tr>
          <tr><td>aria-haspopup</td><td>true | menu</td><td>Indicates popup trigger</td></tr>
          <tr><td>aria-expanded</td><td>true | false</td><td>Popup visibility state</td></tr>
          <tr><td>Keyboard</td><td>Enter / Space</td><td>Opens popup or activates item</td></tr>
          <tr><td>Keyboard</td><td>Arrow keys</td><td>Navigate menu items</td></tr>
          <tr><td>Keyboard</td><td>Escape</td><td>Closes the popup</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>popup-bg</td><td>white</td><td>Popup background</td></tr>
          <tr><td>popup-shadow</td><td>elevation-3</td><td>Popup shadow</td></tr>
          <tr><td>popup-border-radius</td><td>8px</td><td>Corner rounding</td></tr>
          <tr><td>popup-min-width</td><td>180px</td><td>Minimum popup width</td></tr>
          <tr><td>popup-z-index</td><td>1100</td><td>Stacking order</td></tr>
          <tr><td>popup-item-height</td><td>36px</td><td>Menu item height</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface PopupProps {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  offset?: number;
  showArrow?: boolean;
  closeOnClickOutside?: boolean;
  children: React.ReactNode;
}`}</code></pre>
      <pre><code>{`<Popup
  trigger={<Button variant="ghost"><MoreIcon /></Button>}
  placement="bottom-start"
>
  <MenuItem icon={<EditIcon />}>Edit</MenuItem>
  <MenuItem icon={<CopyIcon />}>Duplicate</MenuItem>
  <MenuDivider />
  <MenuItem icon={<TrashIcon />} destructive>Delete</MenuItem>
</Popup>`}</code></pre>
    </ComponentPage>
  );
}
