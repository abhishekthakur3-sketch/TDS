'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function SliderPage() {
  return (
    <ComponentPage name="Slider" description="Sliders allow users to select a value or range from a continuous scale." slug="slider">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Single</td><td>Select a single value on the scale</td></tr>
          <tr><td>Range</td><td>Select a min and max range</td></tr>
          <tr><td>With Steps</td><td>Discrete steps along the track</td></tr>
          <tr><td>With Labels</td><td>Slider with min/max and value labels</td></tr>
          <tr><td>Vertical</td><td>Vertically oriented slider</td></tr>
          <tr><td>With Marks</td><td>Slider with tick marks at intervals</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Track</td><td>Background rail showing the full range</td></tr>
          <tr><td>2</td><td>Fill</td><td>Colored portion showing selected range</td></tr>
          <tr><td>3</td><td>Thumb</td><td>Draggable handle for value selection</td></tr>
          <tr><td>4</td><td>Label</td><td>Text describing the slider purpose</td></tr>
          <tr><td>5</td><td>Value Display</td><td>Current value shown near the thumb</td></tr>
          <tr><td>6</td><td>Marks</td><td>Optional tick marks along the track</td></tr>
          <tr><td>7</td><td>Min/Max Labels</td><td>Labels at the ends of the track</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Normal display</td><td>Thumb at current value</td></tr>
          <tr><td>Hover</td><td>Mouse over thumb</td><td>Thumb enlarges or shows tooltip</td></tr>
          <tr><td>Dragging</td><td>User is moving thumb</td><td>Value updates in real-time</td></tr>
          <tr><td>Focus</td><td>Keyboard focus</td><td>Focus ring on thumb</td></tr>
          <tr><td>Disabled</td><td>Non-interactive</td><td>Reduced opacity</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use sliders for numeric values within a defined range</li>
        <li>Show the current value near the thumb or in a label</li>
        <li>Use discrete steps for values that should snap to increments</li>
        <li>Provide min and max labels for context</li>
        <li>Use range sliders for price or date range selection</li>
        <li>Do not use sliders for precise value entry — pair with an input field</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>slider</td><td>ARIA slider role</td></tr>
          <tr><td>aria-valuenow</td><td>number</td><td>Current value</td></tr>
          <tr><td>aria-valuemin</td><td>number</td><td>Minimum value</td></tr>
          <tr><td>aria-valuemax</td><td>number</td><td>Maximum value</td></tr>
          <tr><td>aria-label</td><td>string</td><td>Accessible name for the slider</td></tr>
          <tr><td>Keyboard</td><td>Arrow keys</td><td>Increment/decrement value</td></tr>
          <tr><td>Keyboard</td><td>Home / End</td><td>Jump to min or max</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>slider-track-height</td><td>4px</td><td>Track thickness</td></tr>
          <tr><td>slider-thumb-size</td><td>20px</td><td>Thumb diameter</td></tr>
          <tr><td>slider-track-bg</td><td>neutral-200</td><td>Track background</td></tr>
          <tr><td>slider-fill-bg</td><td>primary-600</td><td>Fill color</td></tr>
          <tr><td>slider-thumb-color</td><td>white</td><td>Thumb color</td></tr>
          <tr><td>slider-thumb-shadow</td><td>elevation-1</td><td>Thumb shadow</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface SliderProps {
  value?: number | [number, number];
  defaultValue?: number | [number, number];
  onChange?: (value: number | [number, number]) => void;
  min?: number;
  max?: number;
  step?: number;
  label: string;
  showValue?: boolean;
  marks?: boolean | Array<{ value: number; label: string }>;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
}`}</code></pre>
      <pre><code>{`<Slider
  label="Volume"
  min={0}
  max={100}
  value={volume}
  onChange={setVolume}
  showValue
/>

<Slider
  label="Price range"
  min={0}
  max={1000}
  value={[minPrice, maxPrice]}
  onChange={setPriceRange}
  step={10}
  marks
/>`}</code></pre>
    </ComponentPage>
  );
}
