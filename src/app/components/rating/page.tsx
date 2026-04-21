'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function RatingPage() {
  return (
    <ComponentPage name="Rating" description="Rating components allow users to provide feedback using a star-based scale." slug="rating">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Standard 5-star rating input</td></tr>
          <tr><td>Read Only</td><td>Display-only rating without interaction</td></tr>
          <tr><td>Half Stars</td><td>Allows half-star precision</td></tr>
          <tr><td>Custom Icons</td><td>Rating with hearts, thumbs, or other icons</td></tr>
          <tr><td>With Count</td><td>Rating displayed with review count</td></tr>
          <tr><td>Compact</td><td>Small inline rating for lists</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Wrapper holding all star icons</td></tr>
          <tr><td>2</td><td>Star Icon</td><td>Individual rating unit (filled or empty)</td></tr>
          <tr><td>3</td><td>Half Star</td><td>Partially filled star for fractional values</td></tr>
          <tr><td>4</td><td>Label</td><td>Optional text label for the rating</td></tr>
          <tr><td>5</td><td>Count</td><td>Number of reviews or ratings</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Empty</td><td>No rating given</td><td>All stars unfilled</td></tr>
          <tr><td>Partial</td><td>Some stars filled</td><td>Rating value displayed</td></tr>
          <tr><td>Full</td><td>Maximum rating</td><td>All stars filled</td></tr>
          <tr><td>Hover</td><td>Mouse over stars</td><td>Preview fill up to cursor</td></tr>
          <tr><td>Focus</td><td>Keyboard focus</td><td>Focus ring on active star</td></tr>
          <tr><td>Disabled</td><td>Non-interactive</td><td>Reduced opacity</td></tr>
          <tr><td>Read Only</td><td>Display only</td><td>No hover or click effects</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use 5 stars as the default scale</li>
        <li>Show the numeric value alongside stars for clarity</li>
        <li>Allow half-star ratings for more precise feedback</li>
        <li>Use read-only mode for displaying aggregate ratings</li>
        <li>Provide clear hover feedback showing the potential rating</li>
        <li>Do not use ratings for binary feedback — use thumbs up/down instead</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>radiogroup</td><td>Group of selectable rating options</td></tr>
          <tr><td>aria-label</td><td>Rating</td><td>Accessible name for the group</td></tr>
          <tr><td>aria-valuenow</td><td>number</td><td>Current rating value</td></tr>
          <tr><td>aria-valuemin</td><td>0</td><td>Minimum rating</td></tr>
          <tr><td>aria-valuemax</td><td>5</td><td>Maximum rating</td></tr>
          <tr><td>Keyboard</td><td>Arrow keys</td><td>Increase or decrease rating</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>rating-star-size</td><td>24px</td><td>Size of each star icon</td></tr>
          <tr><td>rating-filled-color</td><td>warning-400</td><td>Color of filled stars</td></tr>
          <tr><td>rating-empty-color</td><td>neutral-300</td><td>Color of empty stars</td></tr>
          <tr><td>rating-gap</td><td>4px</td><td>Space between stars</td></tr>
          <tr><td>rating-hover-scale</td><td>1.1</td><td>Scale on hover</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface RatingProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  max?: number;
  precision?: 0.5 | 1;
  size?: 'sm' | 'md' | 'lg';
  readOnly?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  label?: string;
  showValue?: boolean;
  count?: number;
}`}</code></pre>
      <pre><code>{`<Rating
  value={rating}
  onChange={setRating}
  precision={0.5}
  label="Rate this product"
/>

<Rating value={4.5} readOnly count={128} showValue />`}</code></pre>
    </ComponentPage>
  );
}
