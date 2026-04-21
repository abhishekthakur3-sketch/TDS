'use client';

export function TarmacLogoCompact({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="6" fill="#ED1B36" />
      <rect x="6" y="6" width="16" height="3.5" fill="#FFFFFF" />
      <rect x="6" y="6" width="3.5" height="16" fill="#FFFFFF" />
    </svg>
  );
}
