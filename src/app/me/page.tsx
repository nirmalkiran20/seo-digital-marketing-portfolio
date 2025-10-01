// src/app/me/page.tsx ⬅️ NEW FILE: Server Component for SEO and Routing

import type { Metadata } from 'next';
import MeContent from './MeContent'; // ⬅️ Imports the renamed Client Component

// ✅ 1. Define the unique Meta Title and Description
export const metadata: Metadata = {
  // UNIQUE META TITLE (Use keywords like 'About', 'Experience', 'Specialist')
  title: "About Me as a Digital Marketing Expert", 
  
  // UNIQUE META DESCRIPTION (Summarize your story, skills, and value)
  description: 
    "Learn about my 9+ years of experience in data-driven SEO strategy, Google Ads, GA4 analytics, and performance marketing. View my core expertise and philosophy.",
  
  // Optional: Add specific keywords for this page
  keywords: ["Kiran Nirmal", "Digital Marketing Specialist", "SEO Consultant","SEO","About Me", "My Story"],
  
  // Optional: You can also specify unique OpenGraph tags here if you want
};

// ✅ 2. Render the Content Component
export default function MePageWrapper() {
  // This function is the default component for the /me route.
  // It simply renders your interactive content component.
  return <MeContent />;
}