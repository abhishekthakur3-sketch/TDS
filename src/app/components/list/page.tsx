'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function ListPage() {
  return (
    <ComponentPage name="List" description="Lists display a collection of related items in a vertical layout." slug="list">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Simple</td><td>Basic text-only list items</td></tr>
          <tr><td>With Icons</td><td>List items with leading icons</td></tr>
          <tr><td>With Avatars</td><td>List items with user avatars</td></tr>
          <tr><td>With Actions</td><td>List items with trailing action buttons</td></tr>
          <tr><td>Selectable</td><td>Clickable list items with selection state</td></tr>
          <tr><td>Nested</td><td>Collapsible list with sub-items</td></tr>
          <tr><td>Ordered</td><td>Numbered list items</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>List Container</td><td>Wrapper for all list items</td></tr>
          <tr><td>2</td><td>List Item</td><td>Individual row in the list</td></tr>
          <tr><td>3</td><td>Leading Element</td><td>Icon, avatar, or checkbox on the left</td></tr>
          <tr><td>4</td><td>Primary Text</td><td>Main label of the item</td></tr>
          <tr><td>5</td><td>Secondary Text</td><td>Supporting description text</td></tr>
          <tr><td>6</td><td>Trailing Element</td><td>Action button, badge, or chevron on the right</td></tr>
          <tr><td>7</td><td>Divider</td><td>Optional separator between items</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Normal display</td><td>Standard styling</td></tr>
          <tr><td>Hover</td><td>Mouse over item</td><td>Background highlight</td></tr>
          <tr><td>Selected</td><td>Item is chosen</td><td>Active background color</td></tr>
          <tr><td>Focus</td><td>Keyboard focus</td><td>Focus ring visible</td></tr>
          <tr><td>Disabled</td><td>Non-interactive item</td><td>Reduced opacity</td></tr>
          <tr><td>Expanded</td><td>Nested items visible</td><td>Sub-list shown</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Keep list items consistent in structure and height</li>
        <li>Use dividers to separate groups, not every item</li>
        <li>Provide clear visual hierarchy with primary and secondary text</li>
        <li>Make the entire row clickable for selectable lists</li>
        <li>Use virtualization for lists with 100+ items</li>
        <li>Do not mix different list item layouts in the same list</li>
      </ul>
      <DoDont slug="list" doItems={["Use consistent row heights and spacing", "Support sorting and filtering for data lists", "Highlight the selected or active row"]} dontItems={["Display too many columns on mobile", "Use lists for fewer than 3 items", "Mix different content types in the same list"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>list / listitem</td><td>Semantic list structure</td></tr>
          <tr><td>aria-selected</td><td>true | false</td><td>Selection state for selectable items</td></tr>
          <tr><td>aria-expanded</td><td>true | false</td><td>Expanded state for nested items</td></tr>
          <tr><td>Keyboard</td><td>Arrow keys</td><td>Navigate between items</td></tr>
          <tr><td>Keyboard</td><td>Enter</td><td>Activate or select item</td></tr>
          <tr><td>Keyboard</td><td>Home / End</td><td>Jump to first or last item</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>list-item-height</td><td>48px</td><td>Minimum item height</td></tr>
          <tr><td>list-item-padding-x</td><td>16px</td><td>Horizontal padding</td></tr>
          <tr><td>list-hover-bg</td><td>neutral-100</td><td>Hover background</td></tr>
          <tr><td>list-selected-bg</td><td>primary-50</td><td>Selected background</td></tr>
          <tr><td>list-divider-color</td><td>neutral-200</td><td>Divider color</td></tr>
          <tr><td>list-gap</td><td>0px</td><td>Space between items</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface ListProps {
  items: Array<{
    id: string;
    primary: string;
    secondary?: string;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    disabled?: boolean;
    children?: ListItem[];
  }>;
  selectable?: boolean;
  selectedId?: string;
  onSelect?: (id: string) => void;
  dividers?: boolean;
  dense?: boolean;
}`}</code></pre>
      <pre><code>{`<List
  items={[
    { id: '1', primary: 'Inbox', secondary: '24 messages', leading: <InboxIcon /> },
    { id: '2', primary: 'Sent', secondary: '12 messages', leading: <SendIcon /> },
    { id: '3', primary: 'Drafts', secondary: '3 messages', leading: <DraftIcon /> },
  ]}
  selectable
  selectedId={selectedFolder}
  onSelect={setSelectedFolder}
/>`}</code></pre>
    </ComponentPage>
  );
}
