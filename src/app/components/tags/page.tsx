'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function TagsPage() {
  return (
    <ComponentPage name="Tags" description="Tags are compact labels used to categorize or label content." slug="tags">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Simple text tag</td></tr>
          <tr><td>With Icon</td><td>Tag with a leading icon</td></tr>
          <tr><td>Removable</td><td>Tag with a close/remove button</td></tr>
          <tr><td>Clickable</td><td>Interactive tag that triggers an action</td></tr>
          <tr><td>Colored</td><td>Tag with semantic color coding</td></tr>
          <tr><td>Outlined</td><td>Tag with border instead of filled background</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Rounded wrapper with background</td></tr>
          <tr><td>2</td><td>Icon</td><td>Optional leading icon</td></tr>
          <tr><td>3</td><td>Label</td><td>Text content of the tag</td></tr>
          <tr><td>4</td><td>Remove Button</td><td>Optional X icon to dismiss the tag</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Normal display</td><td>Static tag</td></tr>
          <tr><td>Hover</td><td>Mouse over clickable tag</td><td>Darkened background</td></tr>
          <tr><td>Focus</td><td>Keyboard focus</td><td>Focus ring visible</td></tr>
          <tr><td>Active</td><td>Being clicked</td><td>Pressed state</td></tr>
          <tr><td>Disabled</td><td>Non-interactive</td><td>Reduced opacity</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use tags to categorize or label content items</li>
        <li>Keep tag labels short (1-3 words)</li>
        <li>Use consistent colors for the same categories</li>
        <li>Provide a remove button for user-created tags</li>
        <li>Limit the number of visible tags (show "+N more" for overflow)</li>
        <li>Do not use tags for status — use status indicators instead</li>
      </ul>
      <DoDont slug="tags" doItems={["Use for categorization and metadata", "Allow removal with a clear close button", "Keep tag text concise"]} dontItems={["Use tags for actions — use buttons", "Use more than 3 lines of tags", "Mix removable and non-removable tags without distinction"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>status / button</td><td>Static tags use status, interactive use button</td></tr>
          <tr><td>aria-label</td><td>string</td><td>Full accessible name including action</td></tr>
          <tr><td>Keyboard</td><td>Enter / Space</td><td>Activates clickable tags</td></tr>
          <tr><td>Keyboard</td><td>Delete / Backspace</td><td>Removes removable tags</td></tr>
          <tr><td>aria-describedby</td><td>ID</td><td>Additional context for the tag</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>tag-height</td><td>24px</td><td>Default tag height</td></tr>
          <tr><td>tag-padding-x</td><td>8px</td><td>Horizontal padding</td></tr>
          <tr><td>tag-border-radius</td><td>4px</td><td>Corner rounding</td></tr>
          <tr><td>tag-font-size</td><td>12px</td><td>Label text size</td></tr>
          <tr><td>tag-gap</td><td>4px</td><td>Space between icon and label</td></tr>
          <tr><td>tag-bg</td><td>neutral-100</td><td>Default background</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface TagProps {
  label: string;
  icon?: React.ReactNode;
  color?: 'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  variant?: 'filled' | 'outlined';
  removable?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
  disabled?: boolean;
}`}</code></pre>
      <pre><code>{`<Tag label="React" color="primary" />
<Tag label="TypeScript" icon={<TSIcon />} color="info" />
<Tag label="Draft" removable onRemove={() => removeTag('draft')} />

<TagGroup>
  {tags.map(tag => (
    <Tag key={tag.id} label={tag.name} removable onRemove={() => remove(tag.id)} />
  ))}
</TagGroup>`}</code></pre>
    </ComponentPage>
  );
}
