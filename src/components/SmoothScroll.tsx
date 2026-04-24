'use client';

import { useEffect, useRef } from 'react';

export function SmoothScroll() {
  const current = useRef(0);
  const target = useRef(0);
  const cleanupRef = useRef<(() => void) | null>(null);
  const ease = 0.18;

  useEffect(() => {
    // Smooth scroll disabled — it interferes with fixed positioning
    // of sidebar and header due to CSS transform on parent wrapper.
    // Native scroll with CSS scroll-behavior: smooth is used instead.
  }, []);

  return null;
}
