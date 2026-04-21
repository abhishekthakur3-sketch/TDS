'use client';

import Link from 'next/link';
import {
  Palette, Type, Layout, Layers, Accessibility, BookOpen,
  ArrowRight, Sparkles, Zap, Shield, Box
} from 'lucide-react';

const sections = [
  {
    title: 'Foundations',
    desc: 'Colors, typography, spacing, grid, iconography — the building blocks.',
    icon: Palette,
    href: '/foundations/colors',
    color: 'bg-violet-500/10 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400',
  },
  {
    title: 'Components',
    desc: '43+ production-ready UI components with live Storybook demos.',
    icon: Box,
    href: '/components/button',
    color: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400',
  },
  {
    title: 'Patterns',
    desc: 'Layout and form composition patterns for consistent UIs.',
    icon: Layout,
    href: '/patterns/layout',
    color: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
  },
  {
    title: 'Accessibility',
    desc: 'WCAG guidelines, keyboard nav, screen readers, and testing.',
    icon: Accessibility,
    href: '/accessibility/overview',
    color: 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400',
  },
  {
    title: 'Getting Started',
    desc: 'Installation, quick start, and integration guides.',
    icon: BookOpen,
    href: '/getting-started/installation',
    color: 'bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400',
  },
  {
    title: 'Tokens',
    desc: 'Design tokens as CSS variables and JS constants.',
    icon: Layers,
    href: '/foundations/colors-implementation',
    color: 'bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400',
  },
];

const features = [
  {
    icon: Sparkles,
    title: 'Figma Library',
    desc: 'Complete component library with variants, auto-layout, and design tokens.',
  },
  {
    icon: Zap,
    title: 'React Components',
    desc: 'TypeScript-first with built-in accessibility and theming support.',
  },
  {
    icon: Shield,
    title: 'Accessible',
    desc: 'WCAG 2.1 AA compliant with keyboard navigation and screen reader support.',
  },
];

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tarmac-red/5 via-transparent to-blue-500/5 dark:from-tarmac-red/10 dark:to-blue-500/10" />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 pt-16 pb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-tarmac-red/10 dark:bg-tarmac-red/20 text-tarmac-red dark:text-red-400 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-tarmac-red animate-pulse" />
            v2.0 — Design System
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-neutral-900 dark:text-neutral-50 leading-[1.1]">
            Build consistent
            <br />
            <span className="bg-gradient-to-r from-tarmac-red to-tarmac-blue bg-clip-text text-transparent">
              Delhivery experiences
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed mb-10">
            TARMAC is the single source of truth for design decisions, UI components, and interaction patterns across Delhivery products.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about/overview"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-2xl text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-lg shadow-neutral-900/10"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/components/button"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-2xl text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Browse Components
            </Link>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 stagger-children">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-tarmac-red/10 dark:bg-tarmac-red/20 flex items-center justify-center shrink-0">
                  <f.icon size={20} className="text-tarmac-red dark:text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-neutral-900 dark:text-neutral-100">{f.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section cards */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">Explore the system</h2>
          <p className="text-neutral-500 dark:text-neutral-400">Everything you need to design and build with TARMAC.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {sections.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900/50 hover:shadow-lg hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50 transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center mb-4`}>
                <s.icon size={20} />
              </div>
              <h3 className="font-semibold text-base mb-1.5 text-neutral-900 dark:text-neutral-100 group-hover:text-tarmac-red dark:group-hover:text-red-400 transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.desc}</p>
              <ArrowRight
                size={16}
                className="absolute top-6 right-6 text-neutral-300 dark:text-neutral-700 group-hover:text-tarmac-red dark:group-hover:text-red-400 group-hover:translate-x-0.5 transition-all"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Quick start */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pb-20">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 p-8">
          <h3 className="font-bold text-lg mb-1 text-neutral-900 dark:text-neutral-100">Quick Start</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">Get up and running in under a minute.</p>
          <div className="space-y-3">
            <div className="rounded-2xl bg-neutral-950 dark:bg-neutral-900 border border-neutral-800 dark:border-neutral-700 p-5 overflow-x-auto">
              <code className="text-sm text-neutral-100 font-mono">npm install @tarmac/design-system</code>
            </div>
            <div className="rounded-2xl bg-neutral-950 dark:bg-neutral-900 border border-neutral-800 dark:border-neutral-700 p-5 overflow-x-auto">
              <pre className="text-sm text-neutral-100 font-mono leading-relaxed">{`import { Button } from '@tarmac/design-system';

<Button variant="primary">Get Started</Button>`}</pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
