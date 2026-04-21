'use client';

import { MdxProvider } from '@/components/MdxProvider';
import { PageFooter } from '@/components/PageFooter';
import { TableOfContents } from '@/components/TableOfContents';

export function PageShell({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <TableOfContents />
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 animate-fade-in">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-neutral-900 dark:text-neutral-50">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
        <div className="mdx-content">
          <MdxProvider>{children}</MdxProvider>
        </div>
      </div>
      <PageFooter />
    </>
  );
}
