'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function ButtonPage() {
  return (
    <ComponentPage name="Button" description="Buttons trigger actions and enable user interactions throughout the interface." slug="button">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Style</th><th>Use Case</th></tr></thead>
        <tbody>
          <tr><td>Black</td><td>Primary</td><td>Main page action — &quot;Save Changes&quot;</td></tr>
          <tr><td>Black</td><td>Secondary</td><td>Supporting action — &quot;Cancel&quot;</td></tr>
          <tr><td>Black</td><td>Tertiary</td><td>Subtle action — &quot;Learn More&quot;</td></tr>
          <tr><td>Blue</td><td>Primary</td><td>System action — &quot;Submit&quot;, &quot;Continue&quot;</td></tr>
          <tr><td>Success</td><td>Primary</td><td>Positive confirmation — &quot;Approve&quot;</td></tr>
          <tr><td>Error</td><td>Primary</td><td>Destructive action — &quot;Delete&quot;</td></tr>
          <tr><td>Warning</td><td>Primary</td><td>Caution action — &quot;Override&quot;</td></tr>
          <tr><td>White</td><td>Primary</td><td>Dark background — &quot;Get Started&quot;</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Clickable area with background, border, border-radius: 6px</td></tr>
          <tr><td>2</td><td>Loading Left</td><td>Optional spinner before label</td></tr>
          <tr><td>3</td><td>Leading Icon</td><td>Optional icon before label</td></tr>
          <tr><td>4</td><td>Label</td><td>Action text — concise, verb-first</td></tr>
          <tr><td>5</td><td>Trailing Icon</td><td>Optional icon after label</td></tr>
          <tr><td>6</td><td>Loading Right</td><td>Optional spinner after label</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Resting state, ready for interaction</td><td>Normal appearance</td></tr>
          <tr><td>Hover</td><td>Pointer over button</td><td>Slightly lighter background</td></tr>
          <tr><td>Pressed</td><td>Active click/tap</td><td>Darker background</td></tr>
          <tr><td>Focused</td><td>Keyboard focus</td><td>2px blue outline</td></tr>
          <tr><td>Disabled</td><td>Non-interactive</td><td>40% opacity</td></tr>
          <tr><td>Loading</td><td>Async action in progress</td><td>Spinner replaces icon</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use clear, action-oriented labels (verbs like &quot;Save&quot;, &quot;Submit&quot;, &quot;Delete&quot;)</li>
        <li>Maintain visual hierarchy — one primary button per section</li>
        <li>Provide loading state for async actions</li>
        <li>Use secondary buttons for supporting actions like &quot;Cancel&quot;</li>
        <li>Use tertiary buttons for low-emphasis actions like &quot;Learn More&quot;</li>
        <li>Ensure touch targets are at least 44×44px on mobile</li>
      </ul>
      <DoDont slug="button"         doItems={[
          "Use clear, action-oriented labels",
          "Maintain visual hierarchy (primary, secondary, tertiary)",
          "Provide loading state for async actions",
        ]}
        dontItems={[
          "Use more than one primary button per section",
          "Use vague labels like 'Click here'",
          "Disable buttons without explaining why",
        ]}
      />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Requirement</th><th>Guideline</th></tr></thead>
        <tbody>
          <tr><td>Semantic HTML</td><td>Always use native &lt;button&gt; element</td></tr>
          <tr><td>Keyboard</td><td>Tab to focus, Enter/Space to activate</td></tr>
          <tr><td>Focus ring</td><td>2px visible outline, ≥ 3:1 contrast</td></tr>
          <tr><td>Text contrast</td><td>≥ 4.5:1 against background (WCAG AA)</td></tr>
          <tr><td>Touch target</td><td>Minimum 44×44px on mobile</td></tr>
          <tr><td>Icon-only</td><td>Must have aria-label</td></tr>
          <tr><td>Loading</td><td>Use aria-busy=&quot;true&quot;</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>button-height-xl</td><td>48px</td><td>XLarge button height</td></tr>
          <tr><td>button-height-lg</td><td>44px</td><td>Large button height</td></tr>
          <tr><td>button-height-md</td><td>36px</td><td>Regular button height</td></tr>
          <tr><td>button-height-sm</td><td>28px</td><td>Small button height</td></tr>
          <tr><td>button-height-xs</td><td>24px</td><td>XSmall button height</td></tr>
          <tr><td>button-border-radius</td><td>6px</td><td>Corner rounding</td></tr>
          <tr><td>button-black-bg</td><td>#000000</td><td>Black variant background</td></tr>
          <tr><td>button-blue-bg</td><td>#2396FB</td><td>Blue variant background</td></tr>
          <tr><td>button-success-bg</td><td>#1BA86E</td><td>Success variant background</td></tr>
          <tr><td>button-error-bg</td><td>#DC143C</td><td>Error variant background</td></tr>
          <tr><td>button-warning-bg</td><td>#CF9F02</td><td>Warning variant background</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface ButtonProps {
  variant?: 'black' | 'white' | 'blue' | 'success' | 'error' | 'warning';
  style?: 'primary' | 'secondary' | 'tertiary';
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
}`}</code></pre>
      <pre><code>{`// Usage
<Button variant="black" style="primary" size="lg">Save</Button>
<Button variant="error" style="primary">Delete</Button>
<Button variant="blue" loading>Saving...</Button>`}</code></pre>
    </ComponentPage>
  );
}
