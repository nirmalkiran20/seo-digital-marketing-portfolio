'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { GA_MEASUREMENT_ID, pageview, event } from '@/lib/gtag';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track pageviews
  useEffect(() => {
    const url = window.location.pathname + window.location.search;
    pageview(url);
  }, [pathname, searchParams]);

  // Track scroll 50%
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercent > 50) {
        event("scroll_50_percent", { page_path: window.location.pathname });
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track all button and link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!target.closest("button") && !target.closest("a")) return;

      const el = target.closest("button, a") as HTMLElement;
      if (!el) return;

      const label = el.innerText || el.getAttribute("aria-label") || el.id || "unknown";

      event("button_click", {
        button_text: label,
        page_path: window.location.pathname,
        tag_name: el.tagName,
      });
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        id="gtag-lib"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
