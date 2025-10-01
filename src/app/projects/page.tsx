// src/app/projects/page.tsx ⬅️ NEW FILE: Server Component for SEO

import type { Metadata } from 'next';
import ProjectsContent from './ProjectsContent'; // ⬅️ Imports the Client Component

// ✅ 1. Define the unique Meta Title and Description
export const metadata: Metadata = {
  // UNIQUE META TITLE
  title: "Digital Marketing Projects, Presentations & Case Studies | Kiran Nirmal", 
  
  // UNIQUE META DESCRIPTION
  description: 
    "View my portfolio of work, including thought leadership presentations on paid ads and micro-influencers, GA4 video tutorials, and analysis projects on CRO and ABM.",
  
  // Optional: Add specific keywords for this page
  keywords: [
    "Digital marketing portfolio", 
    "SEO presentations", 
    "GA4 videos", 
    "Paid Ads case studies", 
    "ABM projects",
    "Conversion Rate Optimization"
  ],
};

// ✅ 2. Render the Content Component
export default function ProjectsPageWrapper() {
  // This server component renders the interactive client component
  return <ProjectsContent />;
}
