'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function AccordionPage() {
  return (
    <ComponentPage name="Accordion" description="Accordions expand and collapse sections of content to manage information density." slug="accordion">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Single</td><td>Only one section open at a time</td></tr>
          <tr><td>Multiple</td><td>Multiple sections can be open simultaneously</td></tr>
          <tr><td>Bordered</td><td>Sections with visible borders</td></tr>
          <tr><td>Flush</td><td>Borderless accordion with dividers only</td></tr>
          <tr><td>With Icons</td><td>Sections with leading icons</td></tr>
          <tr><td>Nested</td><td>Accordion within an accordion</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Wrapper for all accordion items</td></tr>
          <tr><td>2</td><td>Item</td><td>Individual collapsible section</td></tr>
          <tr><td>3</td><td>Header</td><td>Clickable trigger with title</td></tr>
          <tr><td>4</td><td>Chevron</td><td>Expand/collapse indicator icon</td></tr>
          <tr><td>5</td><td>Content Panel</td><td>Collapsible body content</td></tr>
          <tr><td>6</td><td>Icon</td><td>Optional leading icon in header</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Collapsed</td><td>Content is hidden</td><td>Chevron points right/down</td></tr>
          <tr><td>Expanded</td><td>Content is visible</td><td>Chevron rotated</td></tr>
          <tr><td>Hover</td><td>Mouse over header</td><td>Background highlight</td></tr>
          <tr><td>Focus</td><td>Keyboard focus on header</td><td>Focus ring visible</td></tr>
          <tr><td>Disabled</td><td>Section cannot be toggled</td><td>Reduced opacity</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use accordions to organize long content into scannable sections</li>
        <li>Keep section titles descriptive and concise</li>
        <li>Consider having the first section open by default</li>
        <li>Use single-expand mode for mutually exclusive content</li>
        <li>Animate expand/collapse transitions smoothly</li>
        <li>Do not nest accordions more than 2 levels deep</li>
      </ul>
      <DoDont slug="accordion" doItems={["Use for progressive disclosure of content", "Keep headers descriptive and concise", "Allow multiple sections open if content is related"]} dontItems={["Nest accordions inside accordions", "Use for critical content that must always be visible", "Hide primary navigation inside accordions"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>button (header)</td><td>Header acts as a toggle button</td></tr>
          <tr><td>aria-expanded</td><td>true | false</td><td>Indicates expanded state</td></tr>
          <tr><td>aria-controls</td><td>ID</td><td>Links header to content panel</td></tr>
          <tr><td>Role</td><td>region (panel)</td><td>Content panel is a region</td></tr>
          <tr><td>aria-labelledby</td><td>ID</td><td>Panel labeled by its header</td></tr>
          <tr><td>Keyboard</td><td>Enter / Space</td><td>Toggle section</td></tr>
          <tr><td>Keyboard</td><td>Arrow keys</td><td>Navigate between headers</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>accordion-border-color</td><td>neutral-200</td><td>Border color</td></tr>
          <tr><td>accordion-header-padding</td><td>12px 16px</td><td>Header padding</td></tr>
          <tr><td>accordion-content-padding</td><td>16px</td><td>Content padding</td></tr>
          <tr><td>accordion-hover-bg</td><td>neutral-50</td><td>Header hover background</td></tr>
          <tr><td>accordion-transition</td><td>200ms ease</td><td>Expand/collapse animation</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface AccordionProps {
  items: Array<{
    id: string;
    title: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
  }>;
  type?: 'single' | 'multiple';
  defaultExpanded?: string | string[];
  variant?: 'bordered' | 'flush';
  onChange?: (expandedIds: string[]) => void;
}`}</code></pre>
      <pre><code>{`<Accordion
  type="single"
  defaultExpanded="faq-1"
  items={[
    { id: 'faq-1', title: 'What is your return policy?', content: <p>You can return items within 30 days.</p> },
    { id: 'faq-2', title: 'How long does shipping take?', content: <p>Standard shipping takes 5-7 business days.</p> },
    { id: 'faq-3', title: 'Do you offer gift wrapping?', content: <p>Yes, gift wrapping is available at checkout.</p> },
  ]}
/>`}</code></pre>
    </ComponentPage>
  );
}
