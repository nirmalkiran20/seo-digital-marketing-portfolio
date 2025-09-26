{/*'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { GA_MEASUREMENT_ID, pageview, event } from '@/lib/gtag';

export default function Analytics() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 🎯 GLOBAL PAGE VIEW TRACKING
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !isClient) return;
    
    const trackPageView = () => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        pageview(pathname);
        console.log('GA4: Page view tracked for', pathname);
      } else if (typeof window !== 'undefined') {
        setTimeout(trackPageView, 100);
      }
    };

    trackPageView();
  }, [pathname, isClient]);

  // 🎯 GLOBAL SCROLL DEPTH TRACKING
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !isClient) return;

    let maxScrollDepth = 0;
    let hasTracked50 = false;
    let hasTracked75 = false;
    let hasTracked90 = false;

    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      
      const scrollPercent = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        
        if (scrollPercent >= 50 && !hasTracked50) {
          hasTracked50 = true;
          event('scroll_depth', { 
            depth: '50%',
            page_path: pathname 
          });
          console.log('GA4: 50% scroll tracked on', pathname);
        } else if (scrollPercent >= 75 && !hasTracked75) {
          hasTracked75 = true;
          event('scroll_depth', { 
            depth: '75%',
            page_path: pathname 
          });
          console.log('GA4: 75% scroll tracked on', pathname);
        } else if (scrollPercent >= 90 && !hasTracked90) {
          hasTracked90 = true;
          event('scroll_depth', { 
            depth: '90%',
            page_path: pathname 
          });
          console.log('GA4: 90% scroll tracked on', pathname);
        }
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 300);
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
      return () => window.removeEventListener('scroll', debouncedHandleScroll);
    }
  }, [pathname, isClient]);

  // 🎯 GLOBAL BUTTON/LINK CLICK TRACKING
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !isClient) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickedElement = target.closest('button, a, [role="button"]') as HTMLElement;
      
      if (!clickedElement) return;

      const text = clickedElement.innerText?.trim() || 
                   clickedElement.getAttribute('aria-label') || 
                   clickedElement.getAttribute('title') ||
                   clickedElement.id ||
                   'Unknown';

      const href = clickedElement.getAttribute('href');
      const isDownload = clickedElement.hasAttribute('download') || 
                        href?.includes('.pdf') || 
                        href?.includes('.pptx') ||
                        href?.includes('.docx');

      if (isDownload) {
        const fileName = href?.split('/').pop() || text;
        event('file_download', {
          file_name: fileName,
          link_text: text,
          page_path: pathname,
        });
        console.log('GA4: Download tracked:', fileName, 'from', pathname);
      } else {
        event('click', {
          link_text: text,
          link_url: href || 'no-url',
          element_type: clickedElement.tagName.toLowerCase(),
          page_path: pathname,
        });
        console.log('GA4: Click tracked:', text, 'on', pathname);
      }
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [pathname, isClient]);

  if (!isClient || !GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('GA4: gtag.js loaded successfully');
        }}
      />
      
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: false
            });
            console.log('GA4: Initialized with ID ${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}

function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
*/}