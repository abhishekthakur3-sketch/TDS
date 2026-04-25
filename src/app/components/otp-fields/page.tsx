'use client';

import { MdxProvider } from '@/components/MdxProvider';
import { PageShell } from '@/components/PageShell';
import OTPFieldsContent from './content.mdx';

export default function OTPFieldsPage() {
  return (
    <PageShell title="OTP Fields" description="OTP fields provide individual input boxes for entering one-time passwords and verification codes.">
      <MdxProvider><OTPFieldsContent /></MdxProvider>
    </PageShell>
  );
}
