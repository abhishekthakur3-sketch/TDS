'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';

type AvatarSize = 's' | 'm' | 'l' | 'xl' | 'xxl';
type AvatarShape = 'circle' | 'square';
type AvatarTheme = 'light' | 'dark';

const sizeMap: Record<AvatarSize, number> = { s: 24, m: 28, l: 36, xl: 40, xxl: 48 };
const radiusMap: Record<AvatarShape, string> = { circle: '50%', square: '8px' };

const statusColors: Record<string, string> = {
  active: '#1BA86E', inactive: '#A3A3A3', idle: '#CF9F02',
  orange: '#F97316', cyan: '#06B6D4', purple: '#8B5CF6', pink: '#EC4899',
};

const bgColors = ['#ED1B36', '#2396FB', '#1BA86E', '#F97316', '#8B5CF6', '#EC4899', '#525252'];

function AvatarDemo({
  variant, shape, size, theme, status, label,
}: {
  variant: 'initials' | 'image' | 'icon' | 'numeric';
  shape: AvatarShape;
  size: AvatarSize;
  theme: AvatarTheme;
  status?: string;
  label: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [focused, setFocused] = useState(false);

  const px = sizeMap[size];
  const bg = theme === 'dark' ? '#1A1A1A' : '#F5F5F5';
  const surface = theme === 'dark' ? '#0D0D0D' : '#FFFFFF';
  const subtext = theme === 'dark' ? '#999' : '#666';
  const avatarBg = variant === 'image' ? undefined : bgColors[label.charCodeAt(0) % bgColors.length];
  const fontSize = Math.max(10, px * 0.4);

  const hoverScale = hovered ? 1.08 : 1;
  const pressScale = pressed ? 0.95 : 1;
  const scale = pressed ? pressScale : hoverScale;
  const focusRing = focused ? `0 0 0 2px ${surface}, 0 0 0 4px #2396FB` : 'none';
  const hoverShadow = hovered && !pressed ? `0 4px 12px rgba(0,0,0,${theme === 'dark' ? '0.4' : '0.15'})` : 'none';

  return (
    <div style={{ background: bg, borderRadius: 12, padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div
        style={{ position: 'relative', width: px, height: px, cursor: 'pointer' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false); }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        tabIndex={0}
        role="button"
        aria-label={label}
      >
        <div style={{
          width: px, height: px, borderRadius: radiusMap[shape],
          background: variant === 'image'
            ? `url(https://i.pravatar.cc/${px * 3}?u=${label}) center/cover`
            : avatarBg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize, fontWeight: 600, lineHeight: 1,
          border: `1px solid ${theme === 'dark' ? '#333' : '#E6E6E6'}`,
          transform: `scale(${scale})`,
          boxShadow: focused ? focusRing : hoverShadow,
          transition: 'transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease',
          opacity: hovered ? 0.92 : 1,
        }}>
          {variant === 'initials' && label.slice(0, 2).toUpperCase()}
          {variant === 'icon' && (
            <svg width={fontSize + 2} height={fontSize + 2} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          )}
          {variant === 'numeric' && '+3'}
        </div>
        {status && (
          <div style={{
            position: 'absolute', bottom: -1, right: -1,
            width: px >= 36 ? 12 : px >= 28 ? 10 : 8,
            height: px >= 36 ? 12 : px >= 28 ? 10 : 8,
            borderRadius: '50%',
            background: statusColors[status] || '#A3A3A3',
            border: `2px solid ${surface}`,
            transition: 'transform 0.15s ease',
            transform: `scale(${scale})`,
          }} />
        )}
      </div>
      <span style={{ fontSize: 11, color: subtext, textAlign: 'center', lineHeight: 1.3 }}>{label}</span>
      {status && (
        <span style={{
          fontSize: 10, color: statusColors[status] || '#A3A3A3', textAlign: 'center', lineHeight: 1.2,
          fontWeight: 500, textTransform: 'capitalize',
        }}>
          ● {status === 'orange' ? 'Busy' : status === 'cyan' ? 'Focus' : status === 'purple' ? 'Do not disturb' : status === 'pink' ? 'Custom' : status}
        </span>
      )}
    </div>
  );
}

function Controls({ size, setSize, shape, setShape, theme, setTheme }: {
  size: AvatarSize; setSize: (s: AvatarSize) => void;
  shape: AvatarShape; setShape: (s: AvatarShape) => void;
  theme: AvatarTheme; setTheme: (t: AvatarTheme) => void;
}) {
  const selectStyle: React.CSSProperties = {
    padding: '4px 8px', borderRadius: 6, fontSize: 12, border: '1px solid var(--color-outline)',
    background: 'var(--color-surface)', color: 'var(--color-on-surface)', cursor: 'pointer',
  };
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
      <select value={size} onChange={e => setSize(e.target.value as AvatarSize)} style={selectStyle}>
        {(['s','m','l','xl','xxl'] as AvatarSize[]).map(s => <option key={s} value={s}>{s.toUpperCase()} ({sizeMap[s]}px)</option>)}
      </select>
      <select value={shape} onChange={e => setShape(e.target.value as AvatarShape)} style={selectStyle}>
        <option value="circle">Circle</option>
        <option value="square">Square</option>
      </select>
      <select value={theme} onChange={e => setTheme(e.target.value as AvatarTheme)} style={selectStyle}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

export function AvatarExampleSection({ title, desc, variants, defaultShape }: {
  title: string;
  desc: string;
  variants: { variant: 'initials' | 'image' | 'icon' | 'numeric'; label: string; status?: string }[];
  defaultShape?: AvatarShape;
}) {
  const { theme: globalTheme } = useTheme();
  const [size, setSize] = useState<AvatarSize>('l');
  const [shape, setShape] = useState<AvatarShape>(defaultShape || 'circle');
  const [theme, setTheme] = useState<AvatarTheme>(globalTheme as AvatarTheme);

  useEffect(() => {
    setTheme(globalTheme as AvatarTheme);
  }, [globalTheme]);

  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ color: 'var(--color-on-surface)', marginBottom: 4 }}>{title}</h3>
      <p style={{ color: 'var(--color-on-surface-variant)', fontSize: 14, marginBottom: 12 }}>{desc}</p>
      <Controls size={size} setSize={setSize} shape={shape} setShape={setShape} theme={theme} setTheme={setTheme} />
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {variants.map((v, i) => (
          <AvatarDemo key={i} variant={v.variant} shape={shape} size={size} theme={theme} status={v.status} label={v.label} />
        ))}
      </div>
    </div>
  );
}
