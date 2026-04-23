'use client';

import React from 'react';
import { PageShell } from '@/components/PageShell';
import { StorybookEmbed } from '@/components/mdx';

const storybookPaths: Record<string, string> = {
  accordion: 'atoms-collapse--default',
  alert: 'tarmac-tds-alert--playground',
  'audio-player': 'atoms-audioplayer--default',
  avatar: 'tarmac-tds-avatar--playground',
  badge: 'tarmac-tds-badge--playground',
  'bottom-sheet': 'tarmac-tds-bottomsheet--playground',
  breadcrumbs: 'tarmac-tds-breadcrumbs--playground',
  button: 'tarmac-tds-button--playground',
  cards: 'tarmac-tds-card--card-playground',
  checkbox: 'tarmac-tds-checkbox--playground',
  coachmarks: 'tarmac-tds-coachmarks--playground',
  'date-time-picker': 'tarmac-tds-datepicker--playground',
  'dialog-box': 'tarmac-tds-dialog-box--playground',
  dropdown: 'tarmac-tds-dropdown--list-playground',
  'file-upload': 'atoms-upload--playground',
  filter: 'tarmac-tds-filterdropdown--playground',
  footer: 'tarmac-tds-popupheaderfooter--footer-playground',
  header: 'tarmac-tds-popupheaderfooter--header-playground',
  input: 'tarmac-tds-input-field--playground',
  'input-area': 'tarmac-tds-text-area--playground',
  links: 'tarmac-tds-link--playground',
  list: 'tarmac-tds-table--playground',
  navigation: 'atoms-sidebar--default',
  'otp-fields': 'tarmac-tds-otp-fields--playground',
  pagination: 'tarmac-tds-pagination--playground',
  pills: 'tarmac-tds-pill--playground',
  popups: 'tarmac-tds-popup--playground',
  'progress-bar': 'tarmac-tds-progressbar--playground-with-text',
  radio: 'tarmac-tds-radio--playground',
  rating: 'tarmac-tds-rating--playground',
  scroll: 'tarmac-tds-scrollbar--playground',
  search: 'tarmac-tds-search-dropdown--playground',
  shimmer: 'tarmac-tds-spinner--playground',
  'side-drawer': 'tarmac-tds-side-drawer--playground',
  slider: 'tarmac-tds-slider--playground',
  snackbar: 'tarmac-tds-snackbar--playground',
  spinner: 'tarmac-tds-spinner--playground',
  'status-indicator': 'tarmac-tds-statusindicator--playground',
  stepper: 'atoms-steps--default',
  tabs: 'tarmac-tds-tabs-tabgroup--playground',
  tags: 'tarmac-tds-chip--playground',
  toggle: 'tarmac-tds-toggle--playground',
  tooltip: 'tarmac-tds-tooltip--playground',
};

// Headings that belong to each tab category
const designHeadings = ['variants', 'anatomy', 'states'];
const usageHeadings = ['usage guidelines', 'usage', 'accessibility'];
const codeHeadings = ['design tokens', 'developer handoff', 'code', 'implementation'];

function getHeadingText(child: React.ReactNode): string {
  if (!React.isValidElement(child)) return '';
  if (child.type === 'h2') {
    const text = typeof child.props.children === 'string' ? child.props.children : '';
    return text.toLowerCase();
  }
  return '';
}

function splitChildrenIntoTabs(children: React.ReactNode) {
  const childArray = React.Children.toArray(children);
  const design: React.ReactNode[] = [];
  const usage: React.ReactNode[] = [];
  const code: React.ReactNode[] = [];
  let currentBucket: React.ReactNode[] = design;

  for (const child of childArray) {
    const heading = getHeadingText(child);
    if (heading) {
      if (designHeadings.some(h => heading.includes(h))) currentBucket = design;
      else if (usageHeadings.some(h => heading.includes(h))) currentBucket = usage;
      else if (codeHeadings.some(h => heading.includes(h))) currentBucket = code;
    }
    currentBucket.push(child);
  }

  return { design, usage, code };
}

interface ComponentPageProps {
  name: string;
  description: string;
  slug?: string;
  children?: React.ReactNode;
}

export function ComponentPage({ name, description, slug, children }: ComponentPageProps) {
  const storyPath = slug ? storybookPaths[slug] : undefined;
  const sbUrl = storyPath
    ? `https://tarmac-storybook-dev.pntrzz.com/storybook/sb/iframe.html?id=${storyPath}&viewMode=story`
    : undefined;
  const fullStorybookUrl = storyPath
    ? `https://tarmac-storybook-dev.pntrzz.com/storybook/?path=/story/${storyPath}`
    : 'https://tarmac-storybook-dev.pntrzz.com/storybook/';

  const { design, usage, code } = splitChildrenIntoTabs(children);

  const tabs: { label: string; content: React.ReactNode }[] = [];

  if (sbUrl) {
    tabs.push({
      label: 'Examples',
      content: (
        <StorybookEmbed url={sbUrl} storybookUrl={fullStorybookUrl} height={420} title={`${name} — TARMAC Storybook`} />
      ),
    });
  }

  if (design.length > 0) tabs.push({ label: 'Design', content: <>{design}</> });
  if (usage.length > 0) tabs.push({ label: 'Usage', content: <>{usage}</> });
  if (code.length > 0) tabs.push({ label: 'Code', content: <>{code}</> });

  // Fallback: if no splitting happened, put everything in one tab
  if (tabs.length === 0 || (design.length === 0 && usage.length === 0 && code.length === 0)) {
    return (
      <PageShell title={name} description={description} tabs={sbUrl ? [tabs[0]] : undefined}>
        {children}
      </PageShell>
    );
  }

  return <PageShell title={name} description={description} tabs={tabs}>{children}</PageShell>;
}
