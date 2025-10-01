// src/app/skills/page.tsx ⬅️ NEW FILE: Server Component for SEO

import type { Metadata } from 'next';
import SkillsContent from './SkillsContent'; // ⬅️ Imports the Client Component

// ✅ 1. Define the unique Meta Title and Description
export const metadata: Metadata = {
  // UNIQUE META TITLE (Highlight your primary skills)
  title: "SEO, GA4, Google Ads Skills & Certifications | Kiran Nirmal", 
  
  // UNIQUE META DESCRIPTION (Focus on the depth and tools)
  description: 
    "Explore my full stack of digital marketing skills, including 9.7+ years of expertise in SEO, GA4, Google Ads, Looker Studio, and top industry tools like Semrush and Ahrefs.",
  
  // Optional: Add specific keywords for this page
  keywords: [
    "Digital Marketing Skills", 
    "SEO Skills", 
    "GA4", 
    "Google Ads", 
    "Looker Studio", 
    "Semrush", 
    "Ahrefs"
  ],
};

// ✅ 2. Render the Content Component
export default function SkillsPageWrapper() {
  // This wrapper renders the interactive content component
  return <SkillsContent />;
}