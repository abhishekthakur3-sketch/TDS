'use client';

import { useEffect, useState } from 'react';

interface Heading { id: string; text: string; level: number; }

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const els = document.querySelectorAll('.mdx-content h2, .mdx-content h3');
    const items: Heading[] = [];
    els.forEach((el) => {
      if (!el.id) el.id = el.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || '';
      items.push({ id: el.id, text: el.textContent || '', level: el.tagName === 'H2' ? 2 : 3 });
    });
    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveId(entry.target.id); }); },
      { rootMargin: '-80px 0px -70% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block fixed right-4 top-[72px] w-[200px] max-h-[calc(100vh-88px)] overflow-y-auto p-4">
      <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-on-surface-variant)' }}>
        On this page
      </p>
      <ul className="space-y-0.5">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              onClick={(e) => { e.preventDefault(); document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`block py-1 text-[12px] leading-snug transition-colors ${h.level === 3 ? 'pl-3' : ''}`}
              style={{
                color: activeId === h.id ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                fontWeight: activeId === h.id ? 600 : 400,
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
