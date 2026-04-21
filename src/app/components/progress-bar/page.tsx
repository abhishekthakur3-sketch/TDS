'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function ProgressBarPage() {
  return (
    <ComponentPage name="Progress Bar" description="Progress bars indicate the completion status of a task or process." slug="progress-bar">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Determinate</td><td>Shows specific completion percentage</td></tr>
          <tr><td>Indeterminate</td><td>Animated bar for unknown duration</td></tr>
          <tr><td>With Label</td><td>Progress bar with percentage text</td></tr>
          <tr><td>Segmented</td><td>Divided into discrete steps</td></tr>
          <tr><td>Circular</td><td>Ring-shaped progress indicator</td></tr>
          <tr><td>Stacked</td><td>Multiple values in a single bar</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Track</td><td>Background rail showing total range</td></tr>
          <tr><td>2</td><td>Fill</td><td>Colored bar showing completion</td></tr>
          <tr><td>3</td><td>Label</td><td>Optional percentage or status text</td></tr>
          <tr><td>4</td><td>Segments</td><td>Dividers for segmented variant</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Empty</td><td>0% complete</td><td>Only track visible</td></tr>
          <tr><td>In Progress</td><td>Partially complete</td><td>Fill partially shown</td></tr>
          <tr><td>Complete</td><td>100% complete</td><td>Full fill with success color</td></tr>
          <tr><td>Error</td><td>Process failed</td><td>Red fill color</td></tr>
          <tr><td>Indeterminate</td><td>Unknown progress</td><td>Animated fill</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use determinate progress when the completion percentage is known</li>
        <li>Use indeterminate progress for unknown durations</li>
        <li>Show a percentage label for long-running tasks</li>
        <li>Use appropriate colors (blue for progress, green for complete, red for error)</li>
        <li>Animate transitions smoothly between values</li>
        <li>Do not use progress bars for loading content — use shimmer instead</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>progressbar</td><td>Identifies the progress indicator</td></tr>
          <tr><td>aria-valuenow</td><td>number</td><td>Current progress value</td></tr>
          <tr><td>aria-valuemin</td><td>0</td><td>Minimum value</td></tr>
          <tr><td>aria-valuemax</td><td>100</td><td>Maximum value</td></tr>
          <tr><td>aria-label</td><td>string</td><td>Describes what is progressing</td></tr>
          <tr><td>aria-live</td><td>polite</td><td>Announces progress updates</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>progress-height</td><td>8px</td><td>Bar height</td></tr>
          <tr><td>progress-border-radius</td><td>4px</td><td>Corner rounding</td></tr>
          <tr><td>progress-track-bg</td><td>neutral-200</td><td>Track background</td></tr>
          <tr><td>progress-fill-bg</td><td>primary-600</td><td>Fill color</td></tr>
          <tr><td>progress-success-bg</td><td>success-500</td><td>Complete color</td></tr>
          <tr><td>progress-error-bg</td><td>error-500</td><td>Error color</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface ProgressBarProps {
  value?: number;
  max?: number;
  indeterminate?: boolean;
  label?: string;
  showValue?: boolean;
  color?: 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'linear' | 'circular';
}`}</code></pre>
      <pre><code>{`<ProgressBar value={65} showValue label="Uploading..." />

<ProgressBar indeterminate label="Processing..." />

<ProgressBar value={100} color="success" label="Complete!" />`}</code></pre>
    </ComponentPage>
  );
}
