'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function StepperPage() {
  return (
    <ComponentPage name="Stepper" description="Steppers display progress through a sequence of numbered steps." slug="stepper">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Horizontal</td><td>Steps arranged in a horizontal line</td></tr>
          <tr><td>Vertical</td><td>Steps stacked vertically</td></tr>
          <tr><td>With Icons</td><td>Steps with custom icons instead of numbers</td></tr>
          <tr><td>Clickable</td><td>Steps that can be clicked to navigate</td></tr>
          <tr><td>With Description</td><td>Steps with subtitle descriptions</td></tr>
          <tr><td>Compact</td><td>Minimal stepper for mobile layouts</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Wrapper for all steps</td></tr>
          <tr><td>2</td><td>Step</td><td>Individual step indicator</td></tr>
          <tr><td>3</td><td>Step Number/Icon</td><td>Numeric or icon indicator</td></tr>
          <tr><td>4</td><td>Step Label</td><td>Title of the step</td></tr>
          <tr><td>5</td><td>Step Description</td><td>Optional subtitle text</td></tr>
          <tr><td>6</td><td>Connector</td><td>Line connecting adjacent steps</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Incomplete</td><td>Step not yet reached</td><td>Muted styling</td></tr>
          <tr><td>Active</td><td>Current step</td><td>Highlighted with primary color</td></tr>
          <tr><td>Complete</td><td>Step finished</td><td>Checkmark icon, success color</td></tr>
          <tr><td>Error</td><td>Step has an issue</td><td>Error icon, red color</td></tr>
          <tr><td>Disabled</td><td>Step not accessible</td><td>Reduced opacity</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use steppers for multi-step processes like forms or wizards</li>
        <li>Keep step labels short and descriptive</li>
        <li>Show the current step clearly with visual emphasis</li>
        <li>Allow navigation to completed steps when possible</li>
        <li>Use 3-7 steps; break longer processes into sub-steps</li>
        <li>Do not use steppers for content tabs — use tabs instead</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>list / listitem</td><td>Semantic list structure</td></tr>
          <tr><td>aria-current</td><td>step</td><td>Indicates the current step</td></tr>
          <tr><td>aria-label</td><td>Progress</td><td>Accessible name for the stepper</td></tr>
          <tr><td>aria-disabled</td><td>true</td><td>For non-navigable steps</td></tr>
          <tr><td>Keyboard</td><td>Tab</td><td>Navigate between clickable steps</td></tr>
          <tr><td>Keyboard</td><td>Enter</td><td>Activate a clickable step</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>stepper-indicator-size</td><td>32px</td><td>Step circle diameter</td></tr>
          <tr><td>stepper-active-color</td><td>primary-600</td><td>Active step color</td></tr>
          <tr><td>stepper-complete-color</td><td>success-500</td><td>Completed step color</td></tr>
          <tr><td>stepper-incomplete-color</td><td>neutral-300</td><td>Incomplete step color</td></tr>
          <tr><td>stepper-connector-height</td><td>2px</td><td>Connector line thickness</td></tr>
          <tr><td>stepper-gap</td><td>16px</td><td>Space between steps</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface StepperProps {
  steps: Array<{
    label: string;
    description?: string;
    icon?: React.ReactNode;
    error?: boolean;
  }>;
  activeStep: number;
  orientation?: 'horizontal' | 'vertical';
  clickable?: boolean;
  onStepClick?: (step: number) => void;
}`}</code></pre>
      <pre><code>{`<Stepper
  activeStep={currentStep}
  steps={[
    { label: 'Account', description: 'Create your account' },
    { label: 'Profile', description: 'Set up your profile' },
    { label: 'Preferences', description: 'Choose your settings' },
    { label: 'Confirm', description: 'Review and submit' },
  ]}
  clickable
  onStepClick={setCurrentStep}
/>`}</code></pre>
    </ComponentPage>
  );
}
