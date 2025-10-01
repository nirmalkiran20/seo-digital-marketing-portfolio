// src/app/projects/videos/data-thresholds/page.tsx ⬅️ Server Component for SEO

import type { Metadata } from 'next';
import DataThresholdsContent from './DataThresholdsContent'; // ⬅️ Imports the Client Component

// ✅ 1. Define the unique Meta Title and Description
export const metadata: Metadata = {
  // UNIQUE META TITLE
  title: "GA4 Data Thresholds Explained | Google Analytics 4 Video Tutorial", 
  
  // UNIQUE META DESCRIPTION
  description: 
    "A clear explanation of data limitations, sampling, and thresholding in Google Analytics 4 (GA4). Learn why data might be hidden and how to access complete reports.",
  
  // Optional: Add specific keywords for this page
  keywords: [
    "GA4 data thresholds", 
    "Google Analytics 4 limitations", 
    "GA4 sampling", 
    "data privacy analytics", 
    "video tutorial GA4"
  ],
};

// ✅ 2. Render the Content Component
export default function DataThresholdsPageWrapper() {
  // This server component renders the interactive client component
  return <DataThresholdsContent />;
}
