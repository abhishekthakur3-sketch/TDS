'use client';

import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */

export function ImagePlaceholder({ 
  label, 
  path, 
  height = 240,
  aspect,
}: { 
  label: string; 
  path: string; 
  height?: number;
  aspect?: string;
}) {
  const [failed, setFailed] = useState(false);

  // Try to load the actual image first
  if (!failed) {
    return (
      <div className="rounded-xl overflow-hidden mb-6" style={{ minHeight: '120px' }}>
        <img
          src={path}
          alt={label}
          onError={() => setFailed(true)}
          className="w-full rounded-xl"
          style={{ 
            height: aspect ? undefined : `${height}px`, 
            objectFit: 'cover',
            aspectRatio: aspect,
          }}
        />
      </div>
    );
  }

  // Fallback placeholder
  return (
    <div
      className="rounded-xl overflow-hidden mb-6 flex flex-col items-center justify-center gap-3"
      style={{
        background: 'var(--color-surface-container)',
        border: '1px dashed var(--color-outline)',
        height: aspect ? undefined : `${height}px`,
        aspectRatio: aspect,
        minHeight: '120px',
      }}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--color-outline-variant)' }}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <div className="text-center px-4">
        <p className="text-xs font-medium" style={{ color: 'var(--color-on-surface-variant)' }}>{label}</p>
        <p className="text-[10px] mt-1 font-mono" style={{ color: 'var(--color-outline-variant)' }}>{path}</p>
      </div>
    </div>
  );
}
