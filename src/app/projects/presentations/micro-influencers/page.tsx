// src/app/projects/presentations/micro-influencers/page.tsx ⬅️ Server Component for SEO

import type { Metadata } from 'next';
import MicroInfluencersContent from './MicroInfluencersContent'; // ⬅️ Imports the Client Component

// ✅ 1. Define the unique Meta Title and Description
export const metadata: Metadata = {
  // UNIQUE META TITLE
  title: "Micro-Influencers for B2B Marketing | Strategy Presentation", 
  
  // UNIQUE META DESCRIPTION
  description: 
    "Presentation on why micro-influencers are the secret weapon for B2B marketing, focusing on niche audience trust, engagement, and generating qualified leads.",
  
  // Optional: Add specific keywords for this page
  keywords: [
    "micro-influencer strategy", 
    "B2B influencer marketing", 
    "niche marketing", 
    "digital marketing presentation", 
    "qualified leads"
  ],
};

// ✅ 2. Render the Content Component
export default function MicroInfluencersPageWrapper() {
  // This server component renders the interactive client component
  return <MicroInfluencersContent />;
}
