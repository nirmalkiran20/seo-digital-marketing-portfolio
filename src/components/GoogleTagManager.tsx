// src/components/GoogleTagManager.tsx
'use client';

import { GoogleTagManager } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

export function GTMProvider() {
  const pathname = usePathname();

  // Track page views on route change
  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: pathname,
        page_title: document.title
      });
      console.log('GTM: Page view tracked for', pathname);
    }
  }, [pathname]);

  if (!GTM_ID) {
    console.warn('GTM: No Container ID provided');
    return null;
  }

  return <GoogleTagManager gtmId={GTM_ID} />;
}
