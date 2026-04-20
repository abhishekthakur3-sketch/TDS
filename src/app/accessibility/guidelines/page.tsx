'use client';

import { MdxProvider } from '@/components/MdxProvider';
import PageContent from './content.mdx';

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="mdx-content">
        <MdxProvider>
          <PageContent />
        </MdxProvider>
      </div>
    </div>
  );
}
