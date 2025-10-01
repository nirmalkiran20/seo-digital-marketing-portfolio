// src/app/projects/presentations/analytics-dashboard/page.tsx ⬅️ Server Component for SEO

import type { Metadata } from 'next';
import AnalyticsDashboardContent from './AnalyticsDashboardContent'; // ⬅️ Imports the Client Component

// ✅ 1. Define the unique Meta Title and Description
export const metadata: Metadata = {
  // UNIQUE META TITLE
  title: "Risk Strategies Through Real-Time Analytics PPT | Project Showcase", 
  
  // UNIQUE META DESCRIPTION
  description: 
    "Presentation on how to leverage real-time analytics dashboards to predict, prevent, and respond to emerging business and security risks in digital environments. Download the full PPT.",
  
  // Optional: Add specific keywords for this page
  keywords: [
    "Real-time analytics", 
    "risk management", 
    "data visualization", 
    "digital strategy", 
    "performance dashboard",
    "Analytics Dashboard"
  ],
};

// ✅ 2. Render the Content Component
export default function AnalyticsDashboardPageWrapper() {
  // This server component renders the interactive client component
  return <AnalyticsDashboardContent />;
}
