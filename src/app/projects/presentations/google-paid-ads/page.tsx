// src/app/projects/presentations/google-paid-ads/page.tsx ⬅️ Server Component for SEO

import type { Metadata } from 'next';
import GoogleAdsProjectContent from './GoogleAdsProjectContent'; // ⬅️ Imports the Client Component

// ✅ 1. Define the unique Meta Title and Description
export const metadata: Metadata = {
  // UNIQUE META TITLE
  title: "B2B Social Media Paid Ads Strategy Presentation | 2024 Trends", 
  
  // UNIQUE META DESCRIPTION
  description: 
    "A deep dive into B2B paid social media advertising strategies for 2024, covering key trends, platform best practices, and maximizing campaign ROI. View the presentation slides.",
  
  // Optional: Add specific keywords for this page
  keywords: [
    "B2B paid ads", 
    "social media strategy 2024", 
    "Google Ads B2B", 
    "paid advertising ROI", 
    "digital marketing presentation"
  ],
};

// ✅ 2. Render the Content Component
export default function GoogleAdsProjectPageWrapper() {
  // This server component renders the interactive client component
  return <GoogleAdsProjectContent />;
}
