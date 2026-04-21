'use client';

import { PageShell } from '@/components/PageShell';
import { StorybookEmbed } from '@/components/mdx';

// Map component slugs to their Storybook story paths
const storybookPaths: Record<string, string> = {
  avatar: 'tarmac-tds-avatar--playground',
  button: 'tarmac-tds-button--playground',
  checkbox: 'tarmac-tds-checkbox--playground',
  radio: 'tarmac-tds-radio--playground',
  input: 'tarmac-tds-input-field--playground',
  'input-area': 'tarmac-tds-text-area--playground',
  dropdown: 'tarmac-tds-dropdown--list-playground',
  search: 'tarmac-tds-search-dropdown--playground',
  rating: 'tarmac-tds-rating--playground',
  'file-upload': 'atoms-upload--playground',
  'date-time-picker': 'tarmac-tds-datepicker--playground',
  'dialog-box': 'tarmac-tds-dialog-box--playground',
  popups: 'tarmac-tds-popup--playground',
  cards: 'tarmac-tds-card--card-playground',
  badge: 'tarmac-tds-badge--playground',
  pills: 'tarmac-tds-pill--playground',
  alert: 'tarmac-tds-alert--playground',
  'progress-bar': 'tarmac-tds-progressbar--playground-with-text',
  snackbar: 'tarmac-tds-snackbar--playground',
  tabs: 'tarmac-tds-chip--playground',
  breadcrumbs: 'tarmac-tds-breadcrumbs--playground',
  toggle: 'tarmac-tds-toggle--playground',
  links: 'tarmac-tds-link--playground',
  slider: 'tarmac-tds-slider--playground',
  spinner: 'tarmac-tds-spinner--playground',
  pagination: 'tarmac-tds-pagination--playground',
  tooltip: 'tarmac-tds-tooltip--ct-as-playground',
  'otp-fields': 'tarmac-tds-otp-fields--playground',
  tags: 'tarmac-tds-chip--playground',
};

interface ComponentPageProps {
  name: string;
  description: string;
  slug?: string;
  children?: React.ReactNode;
}

export function ComponentPage({ name, description, slug, children }: ComponentPageProps) {
  const storyPath = slug ? storybookPaths[slug] : undefined;
  const sbBase = 'https://tarmac-storybook-dev.pntrzz.com/storybook';
  const sbUrl = storyPath
    ? `${sbBase}/sb/iframe.html?id=${storyPath}&viewMode=story`
    : undefined;

  const fullStorybookUrl = storyPath
    ? `https://tarmac-storybook-dev.pntrzz.com/storybook/?path=/story/${storyPath}`
    : 'https://tarmac-storybook-dev.pntrzz.com/storybook/';

  return (
    <PageShell title={name} description={description}>
      {sbUrl && (
        <>
          <h2>Live Demo</h2>
          <StorybookEmbed
            url={sbUrl}
            storybookUrl={fullStorybookUrl}
            height={420}
            title={`${name} — TARMAC Storybook`}
          />
        </>
      )}
      {children}
    </PageShell>
  );
}
