// Declare gtag function globally
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

// Check if gtag is available
const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Track pageview with proper error handling
export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID || !isGtagAvailable()) {
    console.warn('GA4: gtag not available or measurement ID missing');
    return;
  }
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    send_page_view: true,
  });
};

// Track custom events with validation
export const event = (name: string, params: Record<string, any> = {}) => {
  if (!GA_MEASUREMENT_ID || !isGtagAvailable()) {
    console.warn('GA4: gtag not available or measurement ID missing');
    return;
  }
  
  window.gtag('event', name, {
    ...params,
    send_to: GA_MEASUREMENT_ID,
  });
};
