'use client';

import React from 'react';

export function Info({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 p-4 rounded-xl mb-6"
      style={{
        background: 'color-mix(in srgb, var(--color-secondary) 8%, transparent)',
        border: '1px solid color-mix(in srgb, var(--color-secondary) 20%, transparent)',
      }}
    >
      <span className="text-lg shrink-0">ℹ️</span>
      <div className="text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{children}</div>
    </div>
  );
}

export function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 p-4 rounded-xl mb-6"
      style={{
        background: 'color-mix(in srgb, var(--color-warning) 8%, transparent)',
        border: '1px solid color-mix(in srgb, var(--color-warning) 20%, transparent)',
      }}
    >
      <span className="text-lg shrink-0">⚠️</span>
      <div className="text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{children}</div>
    </div>
  );
}

export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 p-4 rounded-xl mb-6"
      style={{
        background: 'color-mix(in srgb, var(--color-success) 8%, transparent)',
        border: '1px solid color-mix(in srgb, var(--color-success) 20%, transparent)',
      }}
    >
      <span className="text-lg shrink-0">💡</span>
      <div className="text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{children}</div>
    </div>
  );
}

export function Card({ title, icon, children, href, color }: {
  title?: string; icon?: string; children?: React.ReactNode; href?: string; color?: string;
}) {
  const Wrapper = href ? 'a' : 'div';
  const props = href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {};
  return (
    <Wrapper
      {...(props as any)}
      className="block p-5 rounded-xl border transition-all hover:shadow-sm"
      style={{
        borderColor: 'var(--color-outline)',
        background: 'var(--color-surface)',
        cursor: href ? 'pointer' : 'default',
      }}
    >
      {title && (
        <div className="flex items-center gap-2 mb-2">
          {icon && <span className="text-lg">{icon}</span>}
          <h4 className="font-semibold text-sm" style={color ? { color } : { color: 'var(--color-on-surface)' }}>{title}</h4>
        </div>
      )}
      {children && <div className="text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{children}</div>}
    </Wrapper>
  );
}

export function CardGroup({ cols = 2, children }: { cols?: number; children: React.ReactNode }) {
  return (
    <div className="grid gap-4 mb-6" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
      {children}
    </div>
  );
}

export function Tabs({ children }: { children: React.ReactNode }) {
  const [active, setActive] = React.useState(0);
  const tabs = React.Children.toArray(children) as React.ReactElement[];

  return (
    <div className="mb-6">
      <div className="flex gap-1 border-b mb-4" style={{ borderColor: 'var(--color-outline)' }}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="px-4 py-2 text-sm font-medium border-b-2 transition-colors"
            style={{
              borderColor: i === active ? 'var(--color-primary)' : 'transparent',
              color: i === active ? 'var(--color-on-surface)' : 'var(--color-on-surface-variant)',
            }}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      {tabs[active]}
    </div>
  );
}

export function Tab({ children }: { title: string; children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function StorybookEmbed({ url, storybookUrl, height = 400, title = 'Component Demo' }: {
  url: string; storybookUrl?: string; height?: number; title?: string;
}) {
  const idMatch = url.match(/[?&]id=([^&]+)/);
  const storyId = idMatch ? idMatch[1] : '';
  const baseUrl = url.split('/sb/iframe.html')[0] || url.split('/iframe.html')[0];

  const fullUrl = storybookUrl || (storyId
    ? `${baseUrl}/?path=/story/${storyId}`
    : url);

  // Full Storybook UI with controls panel visible at bottom
  const embedUrl = storyId
    ? `${baseUrl}/?path=/story/${storyId}&panel=bottom&nav=false&shortcuts=false&addonPanel=storybook/controls/panel`
    : url;

  // Bare iframe URL for canvas-only view
  const canvasUrl = url;

  const [showControls, setShowControls] = React.useState(true);

  return (
    <div className="rounded-xl overflow-hidden border mb-8" style={{ borderColor: 'var(--color-outline)' }}>
      <iframe
        src={showControls ? embedUrl : canvasUrl}
        style={{ width: '100%', height: showControls ? `${Math.max(height, 520)}px` : `${height}px`, border: 'none', background: '#fff' }}
        title={title}
        allow="clipboard-write"
      />
      <div
        className="flex items-center justify-between px-5 py-3 border-t"
        style={{
          background: 'var(--color-surface-container)',
          borderColor: 'var(--color-outline)',
        }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowControls(!showControls)}
            className="text-xs font-medium px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5"
            style={{
              background: showControls ? 'var(--color-primary)' : 'transparent',
              color: showControls ? '#fff' : 'var(--color-on-surface-variant)',
              border: showControls ? 'none' : '1px solid var(--color-outline)',
              cursor: 'pointer',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 3v18M3 12h18M3 6h18M3 18h18" />
            </svg>
            {showControls ? 'Controls On' : 'Controls Off'}
          </button>
          <span className="text-xs hidden sm:inline" style={{ color: 'var(--color-on-surface-variant)' }}>
            {showControls ? 'Use the controls panel below to configure the component' : 'Canvas preview only'}
          </span>
        </div>
        <a
          href={fullUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium px-2 py-1 rounded transition-colors flex items-center gap-1.5 shrink-0 hover:underline"
          style={{
            color: 'var(--color-on-surface-variant)',
          }}
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

export function CodeGroup({ children }: { children: React.ReactNode }) {
  return <Tabs>{children}</Tabs>;
}

export function Accordion({ title, children }: { title: string; icon?: string; children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className="border rounded-xl mb-2 overflow-hidden"
      style={{ borderColor: 'var(--color-outline)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors"
        style={{ color: 'var(--color-on-surface)' }}
      >
        <span>{title}</span>
        <span className={`transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>
          {children}
        </div>
      )}
    </div>
  );
}

export function AccordionGroup({ children }: { children: React.ReactNode }) {
  return <div className="mb-6">{children}</div>;
}

export function DoDont({ doItems, dontItems, slug }: { doItems: string[]; dontItems: string[]; slug?: string }) {
  const maxLen = Math.max(doItems.length, dontItems.length);
  const pairs: Array<{ doItem?: string; dontItem?: string; idx: number }> = [];
  for (let i = 0; i < maxLen; i++) {
    pairs.push({ doItem: doItems[i], dontItem: dontItems[i], idx: i + 1 });
  }

  const ImgBlock = ({ path }: { path: string }) => {
    const [failed, setFailed] = React.useState(false);
    if (!failed) {
      return (
        <div style={{ background: 'var(--color-surface-container)', minHeight: '140px', borderBottom: '1px solid var(--color-outline)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={path} alt="" className="w-full object-cover" style={{ minHeight: '140px', maxHeight: '180px' }} onError={() => setFailed(true)} />
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center justify-center gap-1.5" style={{ background: 'var(--color-surface-container)', minHeight: '140px', borderBottom: '1px solid var(--color-outline)' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--color-outline-variant)' }}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
        </svg>
        <span className="text-[9px] font-mono px-2 text-center" style={{ color: 'var(--color-outline-variant)' }}>{path}</span>
      </div>
    );
  };

  return (
    <div className="space-y-4 mb-8">
      {pairs.map((pair) => (
        <div key={pair.idx} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pair.doItem ? (
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--color-outline)' }}>
              <ImgBlock path={`/assets/images/guidelines/${slug || 'component'}-do-${pair.idx}.png`} />
              <div style={{ borderTop: '3px solid #1BA86E' }}>
                <div className="px-4 pt-3 pb-1 flex items-center gap-2">
                  <span className="text-sm">✅</span>
                  <span className="text-sm font-bold" style={{ color: '#1BA86E' }}>Do</span>
                </div>
                <p className="px-4 pb-3 text-sm leading-relaxed" style={{ color: 'var(--color-on-surface-variant)' }}>{pair.doItem}</p>
              </div>
            </div>
          ) : <div />}
          {pair.dontItem ? (
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--color-outline)' }}>
              <ImgBlock path={`/assets/images/guidelines/${slug || 'component'}-dont-${pair.idx}.png`} />
              <div style={{ borderTop: '3px solid #DC143C' }}>
                <div className="px-4 pt-3 pb-1 flex items-center gap-2">
                  <span className="text-sm">❌</span>
                  <span className="text-sm font-bold" style={{ color: '#DC143C' }}>Don&apos;t</span>
                </div>
                <p className="px-4 pb-3 text-sm leading-relaxed" style={{ color: 'var(--color-on-surface-variant)' }}>{pair.dontItem}</p>
              </div>
            </div>
          ) : <div />}
        </div>
      ))}
    </div>
  );
}

export function Steps({ children }: { children: React.ReactNode }) {
  return <div className="mb-6 space-y-4">{children}</div>;
}

export function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
          style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}
        >
          •
        </div>
        <div className="w-px flex-1 mt-1" style={{ background: 'var(--color-outline)' }} />
      </div>
      <div className="pb-6">
        <h4 className="font-semibold text-sm mb-1" style={{ color: 'var(--color-on-surface)' }}>{title}</h4>
        <div className="text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{children}</div>
      </div>
    </div>
  );
}
