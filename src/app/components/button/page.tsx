'use client';

import { MdxProvider } from '@/components/MdxProvider';
import { TableOfContents } from '@/components/TableOfContents';
import { PageFooter } from '@/components/PageFooter';
import ButtonContent from './content.mdx';

export default function ButtonPage() {
  return (
    <>
      <TableOfContents />
      <div
        className="py-10 px-8"
        style={{
          marginLeft: 'calc(var(--sidebar-width) + 32px)',
          marginRight: '240px',
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-3" style={{ color: 'var(--color-on-surface)' }}>
              Button
            </h1>
            <p style={{ color: 'var(--color-on-surface-variant)' }} className="text-lg">
              Buttons trigger actions and enable user interactions throughout the interface.
            </p>
          </div>
          <div className="mdx-content">
            <MdxProvider><ButtonContent /></MdxProvider>
          </div>
        </div>
      </div>
      <PageFooter />
    </>
  );
}
