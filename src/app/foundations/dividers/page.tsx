'use client';
import { PageShell } from '@/components/PageShell';
import { DoDont } from '@/components/mdx';

export default function DividersPage() {
  return (
    <PageShell title="Dividers" description="Visual separators for organizing content sections.">
      <h2>Types</h2>
      <table>
        <thead><tr><th>Type</th><th>Usage</th></tr></thead>
        <tbody>
          <tr><td>Full-width</td><td>Separating major sections</td></tr>
          <tr><td>Inset</td><td>Separating list items with left padding</td></tr>
          <tr><td>Middle</td><td>Centered divider with padding on both sides</td></tr>
        </tbody>
      </table>
      <h2>Specifications</h2>
      <ul>
        <li>Height: 1px</li>
        <li>Color: <code>var(--color-border-default)</code> (#E5E5E5)</li>
        <li>No margin by default — spacing is controlled by parent containers</li>
      </ul>
      <h2>Do&apos;s &amp; Don&apos;ts</h2>
      <DoDont slug="dividers"         doItems={[
          "Use dividers to separate content groups",
          "Keep divider color subtle and consistent",
          "Use full-width dividers for major sections",
        ]}
        dontItems={[
          "Overuse dividers — whitespace often works better",
          "Use thick or colored dividers",
          "Place dividers between every single item in a list",
        ]}
      />
    </PageShell>
  );
}
