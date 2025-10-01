// src/app/projects/videos/element-visibility/page.tsx ⬅️ Server Component for SEO

import type { Metadata } from 'next';
import ElementVisibilityContent from './ElementVisibilityContent'; // ⬅️ Imports the Client Component

// ✅ 1. Define the unique Meta Title and Description
export const metadata: Metadata = {
  // UNIQUE META TITLE
  title: "Element Visibility Tracking in GTM | Optimizing Engagement with GTM", 
  
  // UNIQUE META DESCRIPTION
  description: 
    "A deep-dive video tutorial explaining how to set up Element Visibility triggers in Google Tag Manager (GTM) to track when key website elements, like banners or forms, come into view.",
  
  // Optional: Add specific keywords for this page
  keywords: [
    "GTM Element Visibility", 
    "Google Tag Manager tracking", 
    "engagement optimization", 
    "ad viewability tracking", 
    "scroll tracking GTM",
    "video tutorial"
  ],
};

// ✅ 2. Render the Content Component
export default function ElementVisibilityPageWrapper() {
  // This server component renders the interactive client component
  return <ElementVisibilityContent />;
}
