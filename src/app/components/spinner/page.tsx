'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function SpinnerPage() {
  return (
    <ComponentPage name="Spinner" description="Spinners indicate an indeterminate loading state." slug="spinner">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Standard circular spinning indicator</td></tr>
          <tr><td>Small</td><td>Compact spinner for inline use</td></tr>
          <tr><td>Large</td><td>Prominent spinner for page-level loading</td></tr>
          <tr><td>With Label</td><td>Spinner with loading text below</td></tr>
          <tr><td>Button Spinner</td><td>Spinner inside a button during action</td></tr>
          <tr><td>Overlay</td><td>Full-screen spinner with backdrop</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Spinner Ring</td><td>Animated circular indicator</td></tr>
          <tr><td>2</td><td>Track</td><td>Optional background ring</td></tr>
          <tr><td>3</td><td>Label</td><td>Optional loading text</td></tr>
          <tr><td>4</td><td>Overlay</td><td>Optional backdrop for full-screen variant</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Spinning</td><td>Loading in progress</td><td>Animation active</td></tr>
          <tr><td>Hidden</td><td>Loading complete</td><td>Spinner not visible</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use spinners for short, indeterminate loading states</li>
        <li>Add a text label for loading states longer than 2 seconds</li>
        <li>Use appropriate sizes — small for inline, large for page-level</li>
        <li>Place spinners near the content being loaded</li>
        <li>Use overlay spinners sparingly to avoid blocking interaction</li>
        <li>Do not use spinners for content loading — use shimmer instead</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>status</td><td>Communicates loading state</td></tr>
          <tr><td>aria-label</td><td>Loading</td><td>Accessible name for the spinner</td></tr>
          <tr><td>aria-live</td><td>polite</td><td>Announces loading state</td></tr>
          <tr><td>aria-busy</td><td>true</td><td>Indicates content is loading</td></tr>
          <tr><td>prefers-reduced-motion</td><td>Reduce animation</td><td>Respects motion preferences</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>spinner-size-sm</td><td>16px</td><td>Small spinner size</td></tr>
          <tr><td>spinner-size-md</td><td>24px</td><td>Medium spinner size</td></tr>
          <tr><td>spinner-size-lg</td><td>48px</td><td>Large spinner size</td></tr>
          <tr><td>spinner-color</td><td>primary-600</td><td>Spinner color</td></tr>
          <tr><td>spinner-track-color</td><td>neutral-200</td><td>Track color</td></tr>
          <tr><td>spinner-speed</td><td>0.8s</td><td>Rotation duration</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | number;
  color?: 'primary' | 'neutral' | 'white';
  label?: string;
  overlay?: boolean;
  className?: string;
}`}</code></pre>
      <pre><code>{`<Spinner size="lg" label="Loading data..." />

<Button disabled={isLoading}>
  {isLoading ? <Spinner size="sm" color="white" /> : 'Submit'}
</Button>

<Spinner overlay />`}</code></pre>
    </ComponentPage>
  );
}
