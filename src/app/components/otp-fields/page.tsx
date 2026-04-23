'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function OTPFieldsPage() {
  return (
    <ComponentPage name="OTP Fields" description="OTP fields provide individual input boxes for entering one-time passwords." slug="otp-fields">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>4-Digit</td><td>Four input boxes for short codes</td></tr>
          <tr><td>6-Digit</td><td>Six input boxes for standard OTP</td></tr>
          <tr><td>With Separator</td><td>Groups of inputs with a dash separator</td></tr>
          <tr><td>Alphanumeric</td><td>Accepts both letters and numbers</td></tr>
          <tr><td>Auto-Submit</td><td>Automatically submits when all fields are filled</td></tr>
          <tr><td>With Timer</td><td>OTP input with resend countdown timer</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Wrapper for all input boxes</td></tr>
          <tr><td>2</td><td>Input Box</td><td>Individual single-character input</td></tr>
          <tr><td>3</td><td>Separator</td><td>Optional dash or dot between groups</td></tr>
          <tr><td>4</td><td>Timer</td><td>Countdown for code expiration</td></tr>
          <tr><td>5</td><td>Resend Link</td><td>Action to request a new code</td></tr>
          <tr><td>6</td><td>Error Message</td><td>Validation error text</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Empty</td><td>No digits entered</td><td>All boxes empty</td></tr>
          <tr><td>Partial</td><td>Some digits entered</td><td>Focus on next empty box</td></tr>
          <tr><td>Complete</td><td>All digits entered</td><td>Ready for submission</td></tr>
          <tr><td>Focus</td><td>Active input box</td><td>Focus ring on current box</td></tr>
          <tr><td>Error</td><td>Invalid code entered</td><td>Red borders and error text</td></tr>
          <tr><td>Disabled</td><td>Input not available</td><td>Reduced opacity</td></tr>
          <tr><td>Expired</td><td>Code has expired</td><td>Timer at zero, resend shown</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Auto-focus the first input box on mount</li>
        <li>Auto-advance focus to the next box after each digit</li>
        <li>Support paste to fill all boxes at once</li>
        <li>Allow backspace to clear and move to the previous box</li>
        <li>Show a resend option with a cooldown timer</li>
        <li>Do not mask OTP digits — they are already temporary</li>
      </ul>
      <DoDont slug="otp-fields" doItems={["Auto-focus the first field on mount", "Auto-advance to the next field on input", "Support paste of the full OTP code"]} dontItems={["Mask OTP digits — they're already temporary", "Use more than 6 fields", "Disable backspace navigation between fields"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>group</td><td>Groups the OTP inputs together</td></tr>
          <tr><td>aria-label</td><td>One-time password</td><td>Accessible name for the group</td></tr>
          <tr><td>aria-describedby</td><td>ID</td><td>Links to instructions or error text</td></tr>
          <tr><td>inputmode</td><td>numeric</td><td>Shows numeric keyboard on mobile</td></tr>
          <tr><td>autocomplete</td><td>one-time-code</td><td>Enables OTP autofill</td></tr>
          <tr><td>Keyboard</td><td>Tab</td><td>Navigate between input boxes</td></tr>
          <tr><td>Keyboard</td><td>Backspace</td><td>Clear and move to previous box</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>otp-box-size</td><td>48px</td><td>Width and height of each box</td></tr>
          <tr><td>otp-border-radius</td><td>8px</td><td>Box corner rounding</td></tr>
          <tr><td>otp-border-color</td><td>neutral-300</td><td>Default border color</td></tr>
          <tr><td>otp-focus-border</td><td>primary-500</td><td>Border on focus</td></tr>
          <tr><td>otp-error-border</td><td>error-500</td><td>Error border color</td></tr>
          <tr><td>otp-font-size</td><td>24px</td><td>Digit text size</td></tr>
          <tr><td>otp-gap</td><td>8px</td><td>Space between boxes</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface OTPFieldsProps {
  length?: 4 | 6 | 8;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  autoFocus?: boolean;
  autoSubmit?: boolean;
  type?: 'numeric' | 'alphanumeric';
  error?: string;
  disabled?: boolean;
  separator?: boolean;
  timer?: number;
  onResend?: () => void;
}`}</code></pre>
      <pre><code>{`<OTPFields
  length={6}
  autoFocus
  onComplete={handleVerify}
  error={otpError}
  timer={60}
  onResend={handleResend}
/>

<OTPFields
  length={4}
  type="numeric"
  value={otp}
  onChange={setOtp}
  autoSubmit
/>`}</code></pre>
    </ComponentPage>
  );
}
