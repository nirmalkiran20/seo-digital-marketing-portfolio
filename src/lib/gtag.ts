export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

// Track pageview
export const pageview = (url: string) => {
  if (!(window as any).gtag) return;
  (window as any).gtag("event", "page_view", { page_path: url });
};

// Track custom events (button clicks, downloads, scrolls)
export const event = (name: string, params: Record<string, any> = {}) => {
  if (!(window as any).gtag) return;
  (window as any).gtag("event", name, params);
};
