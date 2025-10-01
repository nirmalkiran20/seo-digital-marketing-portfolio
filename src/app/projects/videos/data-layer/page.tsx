// src/app/projects/videos/data-layer/page.tsx ⬅️ Server Component for SEO

import type { Metadata } from 'next';
import DataLayerContent from './DataLayerContent'; // ⬅️ Imports the Client Component

// ✅ 1. Define the unique Meta Title and Description
export const metadata: Metadata = {
  // UNIQUE META TITLE
  title: "Data Layer in GTM | How to Structure for Reliable Tag Management", 
  
  // UNIQUE META DESCRIPTION
  description: 
    "Watch this video tutorial explaining the purpose and structure of the Data Layer in Google Tag Manager (GTM) to ensure accurate and reliable web analytics and event tracking.",
  
  // Optional: Add specific keywords for this page
  keywords: [
    "GTM data layer structure", 
    "Google Tag Manager tutorial", 
    "web analytics", 
    "event tracking", 
    "tag management system",
    "video tutorial"
  ],
};

// ✅ 2. Render the Content Component
export default function DataLayerPageWrapper() {
  // This server component renders the interactive client component
  return <DataLayerContent />;
}
