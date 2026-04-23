'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function FooterPage() {
  return (
    <ComponentPage name="Footer" description="Footers provide secondary navigation, links, and information at the bottom of pages." slug="footer">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Simple</td><td>Minimal footer with copyright and links</td></tr>
          <tr><td>Multi-Column</td><td>Footer with organized link columns</td></tr>
          <tr><td>With Newsletter</td><td>Footer including email subscription form</td></tr>
          <tr><td>With Social</td><td>Footer with social media icon links</td></tr>
          <tr><td>Sticky</td><td>Footer fixed to the bottom of the viewport</td></tr>
          <tr><td>Minimal</td><td>Single-line footer with essential info only</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Full-width wrapper at page bottom</td></tr>
          <tr><td>2</td><td>Logo</td><td>Brand mark in the footer</td></tr>
          <tr><td>3</td><td>Link Columns</td><td>Organized groups of navigation links</td></tr>
          <tr><td>4</td><td>Social Icons</td><td>Links to social media profiles</td></tr>
          <tr><td>5</td><td>Newsletter</td><td>Optional email subscription form</td></tr>
          <tr><td>6</td><td>Copyright</td><td>Legal text and year</td></tr>
          <tr><td>7</td><td>Bottom Bar</td><td>Secondary row with legal links</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Normal display</td><td>All content visible</td></tr>
          <tr><td>Collapsed</td><td>Mobile view</td><td>Columns stacked vertically</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Organize footer links into logical groups</li>
        <li>Include essential legal links (Privacy, Terms)</li>
        <li>Keep the footer consistent across all pages</li>
        <li>Use a multi-column layout for content-rich footers</li>
        <li>Do not duplicate primary navigation in the footer</li>
        <li>Ensure all links are descriptive and accessible</li>
      </ul>
      <DoDont slug="footer" doItems={["Include essential navigation links", "Keep footer content organized in columns", "Include copyright and legal links"]} dontItems={["Duplicate the main navigation entirely", "Overload with too many links", "Use footer for primary calls-to-action"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>contentinfo</td><td>Landmark role for the footer</td></tr>
          <tr><td>nav</td><td>navigation</td><td>Wraps footer navigation sections</td></tr>
          <tr><td>aria-label</td><td>Footer navigation</td><td>Describes the nav purpose</td></tr>
          <tr><td>Keyboard</td><td>Tab</td><td>Navigate through footer links</td></tr>
          <tr><td>Link text</td><td>Descriptive</td><td>Avoid generic "click here" text</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>footer-bg</td><td>neutral-900</td><td>Background color</td></tr>
          <tr><td>footer-text-color</td><td>neutral-300</td><td>Text color</td></tr>
          <tr><td>footer-link-color</td><td>neutral-100</td><td>Link color</td></tr>
          <tr><td>footer-padding-y</td><td>48px</td><td>Vertical padding</td></tr>
          <tr><td>footer-border-top</td><td>1px neutral-700</td><td>Top border</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface FooterProps {
  logo?: React.ReactNode;
  columns?: Array<{
    title: string;
    links: Array<{ label: string; href: string }>;
  }>;
  socialLinks?: Array<{ icon: React.ReactNode; href: string; label: string }>;
  copyright?: string;
  newsletter?: boolean;
  onSubscribe?: (email: string) => void;
}`}</code></pre>
      <pre><code>{`<Footer
  logo={<Logo variant="light" />}
  columns={[
    { title: 'Product', links: [{ label: 'Features', href: '/features' }] },
    { title: 'Company', links: [{ label: 'About', href: '/about' }] },
  ]}
  copyright="© 2024 Acme Inc."
  socialLinks={socialLinks}
/>`}</code></pre>
    </ComponentPage>
  );
}
