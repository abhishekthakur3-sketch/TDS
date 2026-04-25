'use client';
import { PageShell } from '@/components/PageShell';
import { Info, DoDont } from '@/components/mdx';

const brandColors = [
  { token: 'brand.black', name: 'Black', hex: '#000000', usage: 'Primary text, high-contrast elements' },
  { token: 'brand.white', name: 'White', hex: '#FFFFFF', usage: 'Backgrounds, inverse text' },
  { token: 'brand.red', name: 'DLV Red', hex: '#ED1B36', usage: 'Brand accent, primary actions' },
  { token: 'brand.blue', name: 'Blue', hex: '#2396FB', usage: 'Links, informational elements' },
  { token: 'brand.success', name: 'Success', hex: '#1BA86E', usage: 'Positive states, confirmations' },
  { token: 'brand.warning', name: 'Warning', hex: '#CF9F02', usage: 'Caution states, alerts' },
  { token: 'brand.error', name: 'Error', hex: '#DC143C', usage: 'Error states, destructive actions' },
];

const palette = [
  { name: 'Red', shades: [{s:'50',h:'#FEF2F2'},{s:'100',h:'#FEE2E2'},{s:'200',h:'#FECACA'},{s:'300',h:'#FCA5A5'},{s:'400',h:'#F87171'},{s:'500',h:'#ED1B36'},{s:'600',h:'#DC2626'},{s:'700',h:'#B91C1C'},{s:'800',h:'#991B1B'},{s:'900',h:'#7F1D1D'}] },
  { name: 'Blue', shades: [{s:'50',h:'#EFF6FF'},{s:'100',h:'#DBEAFE'},{s:'200',h:'#BFDBFE'},{s:'300',h:'#93C5FD'},{s:'400',h:'#60A5FA'},{s:'500',h:'#2396FB'},{s:'600',h:'#2563EB'},{s:'700',h:'#1D4ED8'},{s:'800',h:'#1E40AF'},{s:'900',h:'#1E3A8A'}] },
  { name: 'Green', shades: [{s:'50',h:'#F0FDF4'},{s:'100',h:'#DCFCE7'},{s:'200',h:'#BBF7D0'},{s:'300',h:'#86EFAC'},{s:'400',h:'#4ADE80'},{s:'500',h:'#1BA86E'},{s:'600',h:'#16A34A'},{s:'700',h:'#15803D'},{s:'800',h:'#166534'},{s:'900',h:'#14532D'}] },
  { name: 'Neutral', shades: [{s:'50',h:'#FAFAFA'},{s:'100',h:'#F5F5F5'},{s:'200',h:'#E5E5E5'},{s:'300',h:'#D4D4D4'},{s:'400',h:'#A3A3A3'},{s:'500',h:'#737373'},{s:'600',h:'#525252'},{s:'700',h:'#404040'},{s:'800',h:'#262626'},{s:'900',h:'#0D0D0D'}] },
];

function ColorSwatch({ hex, name, border }: { hex: string; name: string; border?: boolean }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border" style={{ borderColor: 'var(--color-outline)' }}>
      <div className="w-10 h-10 rounded-lg shrink-0" style={{ backgroundColor: hex, border: border ? '1px solid var(--color-outline)' : 'none' }} />
      <div>
        <div className="text-sm font-medium" style={{ color: 'var(--color-on-surface)' }}>{name}</div>
        <div className="text-xs font-mono" style={{ color: 'var(--color-on-surface-variant)' }}>{hex}</div>
      </div>
    </div>
  );
}

// --- Tab: Examples ---
function ExamplesTab() {
  return (
    <div className="mdx-content">
      <h2>Brand Colors</h2>
      <p>The core brand palette that defines TARMAC&apos;s visual identity.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {brandColors.map((c) => (
          <ColorSwatch key={c.token} hex={c.hex} name={c.name} border={c.hex === '#FFFFFF'} />
        ))}
      </div>

      <h2>Full Palette</h2>
      <p>Each color family spans 10 shades from 50 (lightest) to 900 (darkest). The 500 shade is the primary value.</p>
      {palette.map((color) => (
        <div key={color.name} className="mb-8">
          <h3>{color.name}</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {color.shades.map((shade) => (
              <div key={shade.s} className="text-center">
                <div className="w-full aspect-square rounded-lg mb-1" style={{ backgroundColor: shade.h, border: '1px solid var(--color-outline)' }} />
                <div className="text-[10px] font-medium" style={{ color: 'var(--color-on-surface)' }}>{shade.s}</div>
                <div className="text-[10px] font-mono" style={{ color: 'var(--color-on-surface-variant)' }}>{shade.h}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <h2>Semantic Tokens</h2>
      <p>Semantic tokens map raw colors to purpose-driven roles. Always use these in your UI code.</p>
      <table>
        <thead><tr><th>Category</th><th>Tokens</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Surface</td><td><code>color.surface.primary</code>, <code>color.surface.secondary</code></td><td>Background colors for containers, cards, pages</td></tr>
          <tr><td>Text</td><td><code>color.text.primary</code>, <code>color.text.secondary</code>, <code>color.text.disabled</code></td><td>Foreground colors for text content</td></tr>
          <tr><td>Icon</td><td><code>color.icon.primary</code>, <code>color.icon.secondary</code></td><td>Colors for iconography</td></tr>
          <tr><td>Border</td><td><code>color.border.default</code>, <code>color.border.focus</code></td><td>Stroke colors for outlines and dividers</td></tr>
        </tbody>
      </table>
    </div>
  );
}

// --- Tab: Usage ---
function UsageTab() {
  return (
    <div className="mdx-content">
      <h2>Color Architecture</h2>
      <Info>Always use semantic tokens in your UI code rather than raw hex values. Semantic tokens ensure your interfaces adapt correctly to themes and maintain consistent meaning across contexts.</Info>
      <p>TARMAC uses a 3-layer token system:</p>
      <ol>
        <li><strong>Core Tokens</strong> — Raw color values (hex codes). These are the palette.</li>
        <li><strong>Semantic Tokens</strong> — Purpose-driven aliases (e.g., <code>color.text.primary</code>).</li>
        <li><strong>Usage Tokens</strong> — Component-specific mappings (e.g., <code>button.background.primary</code>).</li>
      </ol>

      <h2>Principles</h2>
      <ul>
        <li><strong>Purposeful</strong> — Every color has a defined role and communicates meaning</li>
        <li><strong>Accessible</strong> — All color pairings meet WCAG 2.1 AA contrast requirements (4.5:1 for text, 3:1 for UI elements)</li>
        <li><strong>Systematic</strong> — A layered architecture that scales from brand to component level</li>
      </ul>

      <h2>Neutral Scale</h2>
      <table>
        <thead><tr><th>Token</th><th>Hex</th><th>Usage</th></tr></thead>
        <tbody>
          <tr><td>neutral.50</td><td><code>#FAFAFA</code></td><td>Subtle backgrounds</td></tr>
          <tr><td>neutral.100</td><td><code>#F5F5F5</code></td><td>Card backgrounds, hover states</td></tr>
          <tr><td>neutral.200</td><td><code>#E5E5E5</code></td><td>Borders, dividers</td></tr>
          <tr><td>neutral.300</td><td><code>#D4D4D4</code></td><td>Disabled borders</td></tr>
          <tr><td>neutral.400</td><td><code>#A3A3A3</code></td><td>Placeholder text</td></tr>
          <tr><td>neutral.500</td><td><code>#737373</code></td><td>Secondary text</td></tr>
          <tr><td>neutral.600</td><td><code>#525252</code></td><td>Icons, labels</td></tr>
          <tr><td>neutral.700</td><td><code>#404040</code></td><td>Body text</td></tr>
          <tr><td>neutral.800</td><td><code>#262626</code></td><td>Headings</td></tr>
          <tr><td>neutral.900</td><td><code>#0D0D0D</code></td><td>High-emphasis text</td></tr>
        </tbody>
      </table>

      <h2>Brand Color Usage</h2>
      <table>
        <thead><tr><th>Token</th><th>Name</th><th>Hex</th><th>Usage</th></tr></thead>
        <tbody>
          {brandColors.map((c) => (
            <tr key={c.token}><td>{c.token}</td><td>{c.name}</td><td><code>{c.hex}</code></td><td>{c.usage}</td></tr>
          ))}
        </tbody>
      </table>

      <h2>Do&apos;s &amp; Don&apos;ts</h2>
      <DoDont slug="colors"
        doItems={[
          "Use semantic tokens instead of raw hex values",
          "Ensure all text meets WCAG AA contrast ratios (4.5:1)",
          "Use brand red sparingly — only for primary actions and accents",
        ]}
        dontItems={[
          "Hardcode hex values in component styles",
          "Use color alone to convey meaning — pair with icons or text",
          "Mix core tokens and semantic tokens in the same component",
        ]}
      />
    </div>
  );
}

// --- Tab: Code ---
function CodeTab() {
  return (
    <div className="mdx-content">
      <h2>CSS Custom Properties</h2>
      <pre><code>{`:root {
  --color-brand-red: #ED1B36;
  --color-brand-blue: #2396FB;
  --color-brand-success: #1BA86E;
  --color-brand-warning: #CF9F02;
  --color-brand-error: #DC143C;
  --color-surface-primary: #FFFFFF;
  --color-surface-secondary: #F5F5F5;
  --color-text-primary: #0D0D0D;
  --color-text-secondary: #737373;
  --color-text-disabled: #A3A3A3;
  --color-border-default: #E5E5E5;
  --color-border-focus: #2396FB;
}`}</code></pre>

      <h2>JavaScript Constants</h2>
      <pre><code>{`import { colors } from '@tarmac/design-system/tokens';

// colors.brand.red → '#ED1B36'
// colors.neutral[500] → '#737373'
// colors.semantic.text.primary → '#0D0D0D'`}</code></pre>

      <h2>Tailwind Integration</h2>
      <pre><code>{`// tailwind.config.ts
import { tarmacColors } from '@tarmac/design-system/tailwind';

export default {
  theme: {
    extend: {
      colors: tarmacColors,
    },
  },
};`}</code></pre>

      <h2>Usage Example</h2>
      <pre><code>{`/* Using TARMAC color tokens as CSS custom properties */
.card {
  background-color: var(--color-surface-primary);
  border: 1px solid var(--color-border-default);
  color: var(--color-text-primary);
}

.button-primary {
  background-color: var(--color-brand-red);
  color: var(--color-text-inverse);
}`}</code></pre>
    </div>
  );
}

// --- Main Page ---
export default function ColorsPage() {
  const tabs = [
    { label: 'Examples', content: <ExamplesTab /> },
    { label: 'Usage', content: <UsageTab /> },
    { label: 'Code', content: <CodeTab /> },
    { label: 'Changelog', content: (
      <div className="mdx-content py-4">
        <p style={{ color: 'var(--color-on-surface-variant)' }}>No changelog entries yet. Updates will appear here as the color system evolves.</p>
      </div>
    )},
  ];

  return (
    <PageShell title="Colors" description="TARMAC's color system — a 3-layer architecture of Core, Semantic, and Usage tokens." tabs={tabs}>
      <ExamplesTab />
    </PageShell>
  );
}
