/**
 * Storybook docs page IDs for all TDS components.
 * The docs view shows ALL variants with titles automatically.
 */

const BASE = 'https://tarmac-storybook-dev.pntrzz.com/storybook';

export function getDocsIframeUrl(docsId: string) {
  return `${BASE}/sb/iframe.html?id=${docsId}&viewMode=docs`;
}

export function getDocsStorybookUrl(docsId: string) {
  return `${BASE}/?path=/docs/${docsId}`;
}

export function getStoryIframeUrl(storyId: string) {
  return `${BASE}/sb/iframe.html?id=${storyId}&viewMode=story`;
}

export function getStoryStorybookUrl(storyId: string) {
  return `${BASE}/?path=/story/${storyId}`;
}

/**
 * Maps component slug to its Storybook docs ID.
 * The docs view renders ALL stories/variants for that component.
 */
export const storybookDocsMap: Record<string, { docsId: string; storyId: string }> = {
  accordion:          { docsId: 'atoms-collapse--docs',                          storyId: 'atoms-collapse--default' },
  alert:              { docsId: 'tarmac-tds-alert--docs',                        storyId: 'tarmac-tds-alert--playground' },
  'audio-player':     { docsId: 'atoms-audioplayer--docs',                       storyId: 'atoms-audioplayer--default' },
  avatar:             { docsId: 'tarmac-tds-avatar--docs',                       storyId: 'tarmac-tds-avatar--playground' },
  'avatar-group':     { docsId: 'tarmac-tds-avatar--docs',                       storyId: 'tarmac-tds-avatar--playground' },
  badge:              { docsId: 'tarmac-tds-badge--docs',                        storyId: 'tarmac-tds-badge--playground' },
  'bottom-sheet':     { docsId: 'tarmac-tds-bottomsheet--docs',                  storyId: 'tarmac-tds-bottomsheet--playground' },
  breadcrumbs:        { docsId: 'tarmac-tds-breadcrumbs--docs',                  storyId: 'tarmac-tds-breadcrumbs--playground' },
  button:             { docsId: 'tarmac-tds-button--docs',                       storyId: 'tarmac-tds-button--playground' },
  cards:              { docsId: 'tarmac-tds-card--docs',                         storyId: 'tarmac-tds-card--card-playground' },
  checkbox:           { docsId: 'tarmac-tds-checkbox--docs',                     storyId: 'tarmac-tds-checkbox--playground' },
  coachmarks:         { docsId: 'tarmac-tds-coachmarks--docs',                   storyId: 'tarmac-tds-coachmarks--playground' },
  'date-time-picker': { docsId: 'tarmac-tds-datepicker--docs',                   storyId: 'tarmac-tds-datepicker--playground' },
  'dialog-box':       { docsId: 'tarmac-tds-dialog-box--docs',                   storyId: 'tarmac-tds-dialog-box--playground' },
  dropdown:           { docsId: 'tarmac-tds-dropdown--docs',                     storyId: 'tarmac-tds-dropdown--list-playground' },
  'file-upload':      { docsId: 'atoms-upload--docs',                            storyId: 'atoms-upload--playground' },
  filter:             { docsId: 'tarmac-tds-filterdropdown--docs',               storyId: 'tarmac-tds-filterdropdown--playground' },
  footer:             { docsId: 'tarmac-tds-popupheaderfooter--docs',            storyId: 'tarmac-tds-popupheaderfooter--footer-playground' },
  header:             { docsId: 'tarmac-tds-popupheaderfooter--docs',            storyId: 'tarmac-tds-popupheaderfooter--header-playground' },
  input:              { docsId: 'tarmac-tds-input-field--docs',                  storyId: 'tarmac-tds-input-field--playground' },
  'input-area':       { docsId: 'tarmac-tds-text-area--docs',                    storyId: 'tarmac-tds-text-area--playground' },
  links:              { docsId: 'tarmac-tds-link--docs',                         storyId: 'tarmac-tds-link--playground' },
  list:               { docsId: 'tarmac-tds-table--docs',                        storyId: 'tarmac-tds-table--playground' },
  navigation:         { docsId: 'atoms-sidebar--docs',                           storyId: 'atoms-sidebar--default' },
  'otp-fields':       { docsId: 'tarmac-tds-otp-fields--docs',                   storyId: 'tarmac-tds-otp-fields--playground' },
  pagination:         { docsId: 'tarmac-tds-pagination--docs',                   storyId: 'tarmac-tds-pagination--playground' },
  pills:              { docsId: 'tarmac-tds-pill--docs',                         storyId: 'tarmac-tds-pill--playground' },
  popups:             { docsId: 'tarmac-tds-popup--docs',                        storyId: 'tarmac-tds-popup--playground' },
  'progress-bar':     { docsId: 'tarmac-tds-progressbar--docs',                  storyId: 'tarmac-tds-progressbar--playground-with-text' },
  radio:              { docsId: 'tarmac-tds-radio--docs',                        storyId: 'tarmac-tds-radio--playground' },
  rating:             { docsId: 'tarmac-tds-rating--docs',                       storyId: 'tarmac-tds-rating--playground' },
  scroll:             { docsId: 'tarmac-tds-scrollbar--docs',                    storyId: 'tarmac-tds-scrollbar--playground' },
  search:             { docsId: 'tarmac-tds-search-dropdown--docs',              storyId: 'tarmac-tds-search-dropdown--playground' },
  shimmer:            { docsId: 'tarmac-tds-spinner--docs',                      storyId: 'tarmac-tds-spinner--playground' },
  'side-drawer':      { docsId: 'tarmac-tds-side-drawer--docs',                  storyId: 'tarmac-tds-side-drawer--playground' },
  slider:             { docsId: 'tarmac-tds-slider--docs',                       storyId: 'tarmac-tds-slider--playground' },
  snackbar:           { docsId: 'tarmac-tds-snackbar--docs',                     storyId: 'tarmac-tds-snackbar--playground' },
  spinner:            { docsId: 'tarmac-tds-spinner--docs',                      storyId: 'tarmac-tds-spinner--playground' },
  'status-indicator': { docsId: 'tarmac-tds-statusindicator--docs',              storyId: 'tarmac-tds-statusindicator--playground' },
  stepper:            { docsId: 'atoms-steps--docs',                             storyId: 'atoms-steps--default' },
  tabs:               { docsId: 'tarmac-tds-tabs-tabgroup--docs',                storyId: 'tarmac-tds-tabs-tabgroup--playground' },
  tags:               { docsId: 'tarmac-tds-chip--docs',                         storyId: 'tarmac-tds-chip--playground' },
  toggle:             { docsId: 'tarmac-tds-toggle--docs',                       storyId: 'tarmac-tds-toggle--playground' },
  tooltip:            { docsId: 'tarmac-tds-tooltip--docs',                      storyId: 'tarmac-tds-tooltip--playground' },
};
