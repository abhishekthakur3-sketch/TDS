'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function BottomSheetPage() {
  return (
    <ComponentPage name="Bottom Sheet" description="Bottom sheets slide up from the bottom of the screen, commonly used on mobile." slug="bottom-sheet">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Standard</td><td>Fixed-height bottom sheet</td></tr>
          <tr><td>Expandable</td><td>Draggable sheet with snap points</td></tr>
          <tr><td>Full Screen</td><td>Sheet that expands to full viewport</td></tr>
          <tr><td>With Handle</td><td>Sheet with a drag handle indicator</td></tr>
          <tr><td>Action Sheet</td><td>List of actions in a bottom sheet</td></tr>
          <tr><td>Map Sheet</td><td>Persistent sheet over map content</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Overlay</td><td>Semi-transparent backdrop</td></tr>
          <tr><td>2</td><td>Sheet Container</td><td>Sliding panel from the bottom</td></tr>
          <tr><td>3</td><td>Drag Handle</td><td>Visual indicator for dragging</td></tr>
          <tr><td>4</td><td>Header</td><td>Optional title and close button</td></tr>
          <tr><td>5</td><td>Content</td><td>Scrollable body area</td></tr>
          <tr><td>6</td><td>Footer</td><td>Optional fixed action bar</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Closed</td><td>Sheet is off-screen</td><td>No overlay visible</td></tr>
          <tr><td>Peek</td><td>Sheet partially visible</td><td>Only header or handle shown</td></tr>
          <tr><td>Half Open</td><td>Sheet at mid-height</td><td>Partial content visible</td></tr>
          <tr><td>Full Open</td><td>Sheet at maximum height</td><td>All content visible</td></tr>
          <tr><td>Dragging</td><td>User is dragging the sheet</td><td>Following touch position</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use bottom sheets for mobile-first interactions</li>
        <li>Provide a drag handle for gesture-based interaction</li>
        <li>Define clear snap points (closed, half, full)</li>
        <li>Allow dismissal by swiping down or tapping overlay</li>
        <li>Keep action sheets to 5-7 options maximum</li>
        <li>Do not use bottom sheets on desktop — use drawers or dialogs instead</li>
      </ul>
      <DoDont slug="bottom-sheet" doItems={["Use for secondary actions on mobile", "Include a visible drag handle", "Allow dismissal by swiping down or tapping overlay"]} dontItems={["Use bottom sheets on desktop — use modals or drawers", "Put critical actions only in bottom sheets", "Stack multiple bottom sheets"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>dialog</td><td>Identifies the sheet as a dialog</td></tr>
          <tr><td>aria-modal</td><td>true</td><td>Indicates modal behavior</td></tr>
          <tr><td>aria-labelledby</td><td>ID</td><td>References the sheet title</td></tr>
          <tr><td>Focus Trap</td><td>Tab cycles within sheet</td><td>Focus does not escape</td></tr>
          <tr><td>Keyboard</td><td>Escape</td><td>Closes the sheet</td></tr>
          <tr><td>Touch</td><td>Swipe down</td><td>Dismisses the sheet</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>bottomsheet-max-height</td><td>90vh</td><td>Maximum sheet height</td></tr>
          <tr><td>bottomsheet-border-radius</td><td>16px 16px 0 0</td><td>Top corner rounding</td></tr>
          <tr><td>bottomsheet-bg</td><td>white</td><td>Background color</td></tr>
          <tr><td>bottomsheet-shadow</td><td>elevation-4</td><td>Sheet shadow</td></tr>
          <tr><td>bottomsheet-handle-width</td><td>40px</td><td>Drag handle width</td></tr>
          <tr><td>bottomsheet-handle-color</td><td>neutral-300</td><td>Handle color</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  snapPoints?: number[];
  defaultSnap?: number;
  title?: string;
  showHandle?: boolean;
  overlay?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
}`}</code></pre>
      <pre><code>{`<BottomSheet
  open={isSheetOpen}
  onClose={() => setIsSheetOpen(false)}
  snapPoints={[0.3, 0.6, 0.9]}
  defaultSnap={0.6}
  showHandle
  title="Select an option"
>
  <ActionList actions={actions} onSelect={handleSelect} />
</BottomSheet>`}</code></pre>
    </ComponentPage>
  );
}
