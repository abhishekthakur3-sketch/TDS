'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';

type PreviewTheme = 'light' | 'dark';
type PreviewSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const sizeLabels: Record<PreviewSize, string> = {
  xs: 'XS (24px)', sm: 'SM (28px)', md: 'MD (36px)', lg: 'LG (44px)', xl: 'XL (48px)',
};

function PreviewControls({ size, setSize, theme, setTheme, sizes, extraControls }: {
  size: PreviewSize; setSize: (s: PreviewSize) => void;
  theme: PreviewTheme; setTheme: (t: PreviewTheme) => void;
  sizes?: PreviewSize[];
  extraControls?: React.ReactNode;
}) {
  const selectStyle: React.CSSProperties = {
    padding: '4px 8px', borderRadius: 6, fontSize: 12, border: '1px solid var(--color-outline)',
    background: 'var(--color-surface)', color: 'var(--color-on-surface)', cursor: 'pointer',
  };
  const availableSizes = sizes || ['xs', 'sm', 'md', 'lg', 'xl'] as PreviewSize[];
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
      <select value={size} onChange={e => setSize(e.target.value as PreviewSize)} style={selectStyle}>
        {availableSizes.map(s => <option key={s} value={s}>{sizeLabels[s]}</option>)}
      </select>
      <select value={theme} onChange={e => setTheme(e.target.value as PreviewTheme)} style={selectStyle}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      {extraControls}
    </div>
  );
}

export function ComponentExampleSection({ title, desc, children, sizes }: {
  title: string;
  desc: string;
  children: (props: { size: PreviewSize; theme: PreviewTheme }) => React.ReactNode;
  sizes?: PreviewSize[];
}) {
  const { theme: globalTheme } = useTheme();
  const [size, setSize] = useState<PreviewSize>('md');
  const [theme, setTheme] = useState<PreviewTheme>(globalTheme as PreviewTheme);

  useEffect(() => { setTheme(globalTheme as PreviewTheme); }, [globalTheme]);

  const bg = theme === 'dark' ? '#1A1A1A' : '#F5F5F5';

  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ color: 'var(--color-on-surface)', marginBottom: 4 }}>{title}</h3>
      <p style={{ color: 'var(--color-on-surface-variant)', fontSize: 14, marginBottom: 12 }}>{desc}</p>
      <PreviewControls size={size} setSize={setSize} theme={theme} setTheme={setTheme} sizes={sizes} />
      <div style={{ background: bg, borderRadius: 12, padding: 24, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        {children({ size, theme })}
      </div>
    </div>
  );
}

export { type PreviewSize, type PreviewTheme };
