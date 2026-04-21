'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function CoachmarksPage() {
  return (
    <ComponentPage name="Coachmarks" description="Coachmarks guide users through features with step-by-step tooltips." slug="coachmarks">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Single Step</td><td>One-time tooltip highlighting a feature</td></tr>
          <tr><td>Multi-Step Tour</td><td>Sequential walkthrough of multiple features</td></tr>
          <tr><td>With Spotlight</td><td>Dims background and highlights target element</td></tr>
          <tr><td>Beacon</td><td>Pulsing dot that triggers a coachmark on click</td></tr>
          <tr><td>With Media</td><td>Coachmark with image or video content</td></tr>
          <tr><td>Anchored</td><td>Tooltip anchored to a specific UI element</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Overlay</td><td>Optional dimmed background</td></tr>
          <tr><td>2</td><td>Spotlight</td><td>Cutout highlighting the target element</td></tr>
          <tr><td>3</td><td>Tooltip</td><td>Floating content panel with guidance</td></tr>
          <tr><td>4</td><td>Arrow</td><td>Pointer connecting tooltip to target</td></tr>
          <tr><td>5</td><td>Title</td><td>Step heading text</td></tr>
          <tr><td>6</td><td>Description</td><td>Explanatory content</td></tr>
          <tr><td>7</td><td>Progress</td><td>Step counter (e.g., 2 of 5)</td></tr>
          <tr><td>8</td><td>Actions</td><td>Next, Back, Skip, and Done buttons</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Inactive</td><td>Tour not started</td><td>No coachmarks visible</td></tr>
          <tr><td>Active</td><td>Current step shown</td><td>Tooltip and spotlight visible</td></tr>
          <tr><td>Transitioning</td><td>Moving between steps</td><td>Fade animation</td></tr>
          <tr><td>Complete</td><td>Tour finished</td><td>All coachmarks dismissed</td></tr>
          <tr><td>Skipped</td><td>User skipped the tour</td><td>Tour dismissed early</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Keep coachmark content brief and focused on one feature per step</li>
        <li>Limit tours to 5-7 steps maximum</li>
        <li>Always provide a Skip option to dismiss the tour</li>
        <li>Show coachmarks only once per user (persist dismissal)</li>
        <li>Position tooltips to avoid covering the target element</li>
        <li>Do not block critical UI elements with coachmarks</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>dialog</td><td>Coachmark tooltip is a dialog</td></tr>
          <tr><td>aria-label</td><td>Feature tour</td><td>Accessible name for the tour</td></tr>
          <tr><td>aria-describedby</td><td>ID</td><td>References the step description</td></tr>
          <tr><td>Focus Management</td><td>Focus moves to tooltip</td><td>On each step</td></tr>
          <tr><td>Keyboard</td><td>Tab</td><td>Navigate between actions</td></tr>
          <tr><td>Keyboard</td><td>Escape</td><td>Skip/dismiss the tour</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>coachmark-bg</td><td>white</td><td>Tooltip background</td></tr>
          <tr><td>coachmark-shadow</td><td>elevation-3</td><td>Tooltip shadow</td></tr>
          <tr><td>coachmark-border-radius</td><td>12px</td><td>Corner rounding</td></tr>
          <tr><td>coachmark-overlay-bg</td><td>rgba(0,0,0,0.6)</td><td>Overlay background</td></tr>
          <tr><td>coachmark-spotlight-radius</td><td>8px</td><td>Spotlight corner rounding</td></tr>
          <tr><td>coachmark-max-width</td><td>320px</td><td>Maximum tooltip width</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface CoachmarksProps {
  steps: Array<{
    target: string | HTMLElement;
    title: string;
    description: string;
    media?: React.ReactNode;
    placement?: 'top' | 'bottom' | 'left' | 'right';
  }>;
  active?: boolean;
  onComplete?: () => void;
  onSkip?: () => void;
  spotlight?: boolean;
  showProgress?: boolean;
}`}</code></pre>
      <pre><code>{`<Coachmarks
  active={showTour}
  spotlight
  showProgress
  steps={[
    { target: '#search-bar', title: 'Search', description: 'Find components quickly using the search bar.' },
    { target: '#sidebar', title: 'Navigation', description: 'Browse components by category.' },
    { target: '#theme-toggle', title: 'Theme', description: 'Switch between light and dark mode.' },
  ]}
  onComplete={() => setShowTour(false)}
  onSkip={() => setShowTour(false)}
/>`}</code></pre>
    </ComponentPage>
  );
}
