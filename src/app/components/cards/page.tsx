'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function CardsPage() {
  return (
    <ComponentPage name="Cards" description="Cards group related content and actions in a contained, elevated surface." slug="cards">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Basic</td><td>Simple card with text content</td></tr>
          <tr><td>With Image</td><td>Card with a header image or media</td></tr>
          <tr><td>Horizontal</td><td>Side-by-side image and content layout</td></tr>
          <tr><td>Interactive</td><td>Clickable card that acts as a link</td></tr>
          <tr><td>With Actions</td><td>Card with footer action buttons</td></tr>
          <tr><td>Stat Card</td><td>Card displaying a metric or KPI</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Elevated surface with border and shadow</td></tr>
          <tr><td>2</td><td>Media</td><td>Optional image or video at the top</td></tr>
          <tr><td>3</td><td>Header</td><td>Title and optional subtitle</td></tr>
          <tr><td>4</td><td>Body</td><td>Main content area</td></tr>
          <tr><td>5</td><td>Footer</td><td>Action buttons or metadata</td></tr>
          <tr><td>6</td><td>Badge</td><td>Optional status indicator</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Normal display</td><td>Static card</td></tr>
          <tr><td>Hover</td><td>Mouse over interactive card</td><td>Elevated shadow</td></tr>
          <tr><td>Focus</td><td>Keyboard focus</td><td>Focus ring visible</td></tr>
          <tr><td>Active</td><td>Being clicked</td><td>Pressed state</td></tr>
          <tr><td>Selected</td><td>Card is chosen</td><td>Border or background highlight</td></tr>
          <tr><td>Loading</td><td>Content loading</td><td>Shimmer placeholder</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use cards to group related information together</li>
        <li>Keep card content scannable and concise</li>
        <li>Make the entire card clickable for interactive cards</li>
        <li>Use consistent card sizes in grid layouts</li>
        <li>Limit action buttons to 2-3 per card</li>
        <li>Do not overload cards with too much content</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>article</td><td>Semantic grouping for card content</td></tr>
          <tr><td>aria-label</td><td>string</td><td>Accessible name for interactive cards</td></tr>
          <tr><td>Keyboard</td><td>Tab</td><td>Focus on interactive cards</td></tr>
          <tr><td>Keyboard</td><td>Enter</td><td>Activate interactive card</td></tr>
          <tr><td>Image alt</td><td>Descriptive text</td><td>Alt text for card media</td></tr>
          <tr><td>Heading hierarchy</td><td>Proper levels</td><td>Card titles use correct heading level</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>card-bg</td><td>white</td><td>Background color</td></tr>
          <tr><td>card-border-radius</td><td>12px</td><td>Corner rounding</td></tr>
          <tr><td>card-shadow</td><td>elevation-1</td><td>Default shadow</td></tr>
          <tr><td>card-hover-shadow</td><td>elevation-3</td><td>Shadow on hover</td></tr>
          <tr><td>card-padding</td><td>16px</td><td>Internal padding</td></tr>
          <tr><td>card-border</td><td>1px neutral-200</td><td>Border style</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface CardProps {
  variant?: 'elevated' | 'outlined' | 'filled';
  interactive?: boolean;
  onClick?: () => void;
  href?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}`}</code></pre>
      <pre><code>{`<Card interactive onClick={handleClick}>
  <CardMedia src="/product.jpg" alt="Product image" />
  <CardHeader title="Product Name" subtitle="\$29.99" />
  <CardBody>
    <p>A brief description of the product.</p>
  </CardBody>
  <CardFooter>
    <Button variant="primary">Add to Cart</Button>
  </CardFooter>
</Card>`}</code></pre>
    </ComponentPage>
  );
}
