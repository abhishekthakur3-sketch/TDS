'use client';

import { useState } from 'react';
import { StorybookEmbed } from '@/components/mdx';
import { storybookVariants, getIframeUrl, getStorybookUrl } from '@/components/storybookVariants';

/**
 * Renders Storybook story variants for a component.
 * Shows pill buttons to switch between variants — canvas-only view.
 */
export function StorybookVariantViewer({ slug }: { slug: string }) {
  const variants = storybookVariants[slug];
  const [selected, setSelected] = useState(0);

  if (!variants || variants.length === 0) return null;

  if (variants.length === 1) {
    return (
      <StorybookEmbed
        url={getIframeUrl(variants[0].id)}
        storybookUrl={getStorybookUrl(variants[0].id)}
        height={420}
        title={variants[0].label}
      />
    );
  }

  return (
    <div style={{ marginBottom: 32 }}>
      {/* Variant pills */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
        {variants.map((v, i) => (
          <button
            key={v.id}
            onClick={() => setSelected(i)}
            style={{
              padding: '5px 14px',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              border: selected === i ? 'none' : '1px solid var(--color-outline)',
              background: selected === i ? 'var(--color-primary)' : 'transparent',
              color: selected === i ? '#fff' : 'var(--color-on-surface-variant)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* Canvas-only Storybook embed */}
      <StorybookEmbed
        url={getIframeUrl(variants[selected].id)}
        storybookUrl={getStorybookUrl(variants[selected].id)}
        height={420}
        title={variants[selected].label}
      />
    </div>
  );
}
