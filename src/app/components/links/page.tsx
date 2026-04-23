'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function LinksPage() {
  return (
    <ComponentPage name="Links" description="Links navigate users to other pages or external resources." slug="links">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Standard text link with underline</td></tr>
          <tr><td>With Icon</td><td>Link with a trailing external icon</td></tr>
          <tr><td>Inline</td><td>Link embedded within paragraph text</td></tr>
          <tr><td>Button Link</td><td>Link styled as a button</td></tr>
          <tr><td>Nav Link</td><td>Link used in navigation menus</td></tr>
          <tr><td>Disabled</td><td>Non-interactive link state</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Link Text</td><td>Clickable text content</td></tr>
          <tr><td>2</td><td>Underline</td><td>Visual indicator of interactivity</td></tr>
          <tr><td>3</td><td>Icon</td><td>Optional trailing icon (e.g., external link)</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Normal display</td><td>Colored text with underline</td></tr>
          <tr><td>Hover</td><td>Mouse over link</td><td>Darker color or underline change</td></tr>
          <tr><td>Focus</td><td>Keyboard focus</td><td>Focus ring visible</td></tr>
          <tr><td>Active</td><td>Being clicked</td><td>Pressed color</td></tr>
          <tr><td>Visited</td><td>Previously clicked</td><td>Different color</td></tr>
          <tr><td>Disabled</td><td>Non-interactive</td><td>Reduced opacity, no pointer</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use descriptive link text — avoid "click here" or "read more"</li>
        <li>Indicate external links with an icon or visual cue</li>
        <li>Ensure links are visually distinct from surrounding text</li>
        <li>Use underlines for inline links within paragraphs</li>
        <li>Open external links in a new tab with appropriate rel attributes</li>
        <li>Do not use links for actions — use buttons instead</li>
      </ul>
      <DoDont slug="links" doItems={["Use descriptive link text that makes sense out of context", "Distinguish links from regular text visually", "Open external links in new tabs with an indicator"]} dontItems={["Use 'click here' or 'read more' as link text", "Style links to look like buttons or vice versa", "Remove the underline on inline links"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>link</td><td>Native anchor element</td></tr>
          <tr><td>aria-label</td><td>string</td><td>When link text is not descriptive enough</td></tr>
          <tr><td>aria-current</td><td>page</td><td>For active navigation links</td></tr>
          <tr><td>target="_blank"</td><td>rel="noopener noreferrer"</td><td>Security for external links</td></tr>
          <tr><td>Keyboard</td><td>Enter</td><td>Activates the link</td></tr>
          <tr><td>Focus</td><td>Visible focus ring</td><td>Clear keyboard focus indicator</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>link-color</td><td>primary-600</td><td>Default link color</td></tr>
          <tr><td>link-hover-color</td><td>primary-700</td><td>Hover color</td></tr>
          <tr><td>link-visited-color</td><td>purple-600</td><td>Visited link color</td></tr>
          <tr><td>link-underline</td><td>underline</td><td>Text decoration</td></tr>
          <tr><td>link-font-weight</td><td>500</td><td>Font weight</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface LinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  underline?: 'always' | 'hover' | 'none';
  color?: 'primary' | 'neutral' | 'inherit';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}`}</code></pre>
      <pre><code>{`<Link href="/about">About Us</Link>

<Link href="https://example.com" external>
  Visit Example <ExternalIcon />
</Link>

<p>
  Read our <Link href="/terms" underline="always">terms of service</Link> for details.
</p>`}</code></pre>
    </ComponentPage>
  );
}
