'use client';

import { storybookDocsMap, getDocsIframeUrl, getDocsStorybookUrl } from '@/components/storybookVariants';

/**
 * Embeds the Storybook docs page for a component — shows ALL variants
 * with their titles, descriptions, and canvases automatically.
 */
export function StorybookVariantViewer({ slug }: { slug: string }) {
  const entry = storybookDocsMap[slug];
  if (!entry) return null;

  const iframeUrl = getDocsIframeUrl(entry.docsId);
  const storybookUrl = getDocsStorybookUrl(entry.docsId);

  return (
    <div className="rounded-xl overflow-hidden border mb-8" style={{ borderColor: 'var(--color-outline)' }}>
      <iframe
        src={iframeUrl}
        style={{ width: '100%', height: '800px', border: 'none', background: '#fff' }}
        title={`${slug} — All Variants`}
        allow="clipboard-write"
      />
      <div
        className="flex items-center justify-between px-5 py-3 border-t"
        style={{
          background: 'var(--color-surface-container)',
          borderColor: 'var(--color-outline)',
        }}
      >
        <span className="text-xs" style={{ color: 'var(--color-on-surface-variant)' }}>
          All variants · Scroll to see more
        </span>
        <a
          href={storybookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium px-2 py-1 rounded transition-colors flex items-center gap-1.5 shrink-0 hover:underline"
          style={{ color: 'var(--color-on-surface-variant)' }}
        >
          Open in Storybook
          <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
