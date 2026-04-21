'use client';

import { MdxProvider } from '@/components/MdxProvider';
import { TableOfContents } from '@/components/TableOfContents';
import { PageFooter } from '@/components/PageFooter';
import ButtonContent from './content.mdx';

export default function ButtonPage() {
  return (
    <>
      <TableOfContents />
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 animate-fade-in">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-neutral-900 dark:text-neutral-50">
            Button
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
            Buttons trigger actions and enable user interactions throughout the interface.
          </p>
        </div>
        <div className="mdx-content">
          <MdxProvider><ButtonContent /></MdxProvider>
        </div>
      </div>
      <PageFooter />
    </>
  );
}
