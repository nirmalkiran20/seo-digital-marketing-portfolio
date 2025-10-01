// src/app/cv/page.tsx ⬅️ NEW FILE: Server Component for SEO

import type { Metadata } from 'next';
import CVContent from './CVContent'; // ⬅️ Imports the Client Component

// ✅ 1. Define the unique Meta Title and Description
export const metadata: Metadata = {
  // UNIQUE META TITLE
  title: "View & Download Professional Digital Marketing CV | Kiran Nirmal", 
  
  // UNIQUE META DESCRIPTION
  description: 
    "Preview and download my latest curriculum vitae (CV) detailing 9+ years of experience in SEO, Google Ads, GA4, and performance marketing strategy.",
  
  // Optional: Add specific keywords for this page
  keywords: [
    "Digital Marketing CV",
    "Digital Marketing CV sample", 
    "Kiran Nirmal resume", 
    "SEO resume", 
    "GA4 specialist CV", 
    "download CV"
  ],
};

// ✅ 2. Render the Content Component
export default function CVPageWrapper() {
  // This server component renders the interactive client component
  return <CVContent />;
}
