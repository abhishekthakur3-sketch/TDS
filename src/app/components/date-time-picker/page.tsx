'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function DateTimePickerPage() {
  return (
    <ComponentPage name="Date Time Picker" description="Date and time pickers allow users to select dates, times, or date-time combinations." slug="date-time-picker">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Date Picker</td><td>Calendar-based date selection</td></tr>
          <tr><td>Time Picker</td><td>Hour and minute selection</td></tr>
          <tr><td>Date-Time Picker</td><td>Combined date and time selection</td></tr>
          <tr><td>Date Range</td><td>Select a start and end date</td></tr>
          <tr><td>Month Picker</td><td>Select a month and year</td></tr>
          <tr><td>Year Picker</td><td>Select a year from a grid</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Input Trigger</td><td>Text input that opens the picker</td></tr>
          <tr><td>2</td><td>Calendar Icon</td><td>Icon button to open the picker</td></tr>
          <tr><td>3</td><td>Calendar Grid</td><td>Month view with selectable days</td></tr>
          <tr><td>4</td><td>Month/Year Header</td><td>Navigation for month and year</td></tr>
          <tr><td>5</td><td>Navigation Arrows</td><td>Previous/next month buttons</td></tr>
          <tr><td>6</td><td>Time Selectors</td><td>Hour, minute, and AM/PM controls</td></tr>
          <tr><td>7</td><td>Today Button</td><td>Quick action to select current date</td></tr>
          <tr><td>8</td><td>Footer Actions</td><td>Apply and cancel buttons</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Closed</td><td>Picker is hidden</td><td>Input shows selected date</td></tr>
          <tr><td>Open</td><td>Picker is visible</td><td>Calendar or time view shown</td></tr>
          <tr><td>Date Selected</td><td>A date is chosen</td><td>Date highlighted in calendar</td></tr>
          <tr><td>Range Selected</td><td>Start and end dates chosen</td><td>Range highlighted</td></tr>
          <tr><td>Hover (Day)</td><td>Mouse over a day cell</td><td>Background highlight</td></tr>
          <tr><td>Disabled Date</td><td>Date not selectable</td><td>Reduced opacity</td></tr>
          <tr><td>Error</td><td>Invalid date entered</td><td>Red border and error message</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use a calendar picker for date selection, not free-text input alone</li>
        <li>Allow manual text entry as an alternative to the picker</li>
        <li>Disable dates outside the valid range</li>
        <li>Show the current date highlighted in the calendar</li>
        <li>Use clear date formatting consistent with the user locale</li>
        <li>Do not auto-close the picker on date selection for date-time combos</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>dialog</td><td>Calendar popup is a dialog</td></tr>
          <tr><td>aria-label</td><td>Choose date</td><td>Accessible name for the picker</td></tr>
          <tr><td>aria-selected</td><td>true | false</td><td>Indicates selected date</td></tr>
          <tr><td>aria-disabled</td><td>true</td><td>Marks unavailable dates</td></tr>
          <tr><td>Keyboard</td><td>Arrow keys</td><td>Navigate between days</td></tr>
          <tr><td>Keyboard</td><td>Enter</td><td>Select the focused date</td></tr>
          <tr><td>Keyboard</td><td>Escape</td><td>Close the picker</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>datepicker-width</td><td>320px</td><td>Calendar panel width</td></tr>
          <tr><td>datepicker-cell-size</td><td>40px</td><td>Day cell dimensions</td></tr>
          <tr><td>datepicker-selected-bg</td><td>primary-600</td><td>Selected date background</td></tr>
          <tr><td>datepicker-today-border</td><td>primary-500</td><td>Today indicator border</td></tr>
          <tr><td>datepicker-range-bg</td><td>primary-100</td><td>Range highlight background</td></tr>
          <tr><td>datepicker-shadow</td><td>elevation-3</td><td>Picker panel shadow</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface DateTimePickerProps {
  value?: Date | null;
  defaultValue?: Date;
  onChange?: (date: Date | null) => void;
  mode?: 'date' | 'time' | 'datetime' | 'daterange';
  minDate?: Date;
  maxDate?: Date;
  format?: string;
  placeholder?: string;
  label: string;
  disabled?: boolean;
  error?: string;
  locale?: string;
  firstDayOfWeek?: 0 | 1;
}`}</code></pre>
      <pre><code>{`<DateTimePicker
  label="Appointment date"
  mode="datetime"
  value={selectedDate}
  onChange={setSelectedDate}
  minDate={new Date()}
  format="MM/dd/yyyy HH:mm"
/>`}</code></pre>
    </ComponentPage>
  );
}
