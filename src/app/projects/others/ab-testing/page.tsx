import type { Metadata } from 'next';
import ABTestingContent from './ABTestingContent';

// 1. Define the unique Meta Title and Description
export const metadata: Metadata = {
  // UNIQUE META TITLE
  title: "Beyond AB Testing: E-commerce SEO and Optimization Audit", 
  
  // UNIQUE META DESCRIPTION
  description: 
    "A detailed SEO and CRO (Conversion Rate Optimization) audit for an e-commerce platform, focusing on advanced testing strategies beyond simple A/B tests to maximize visibility and revenue.",
  
  // Optional: Add specific keywords for this page
  keywords: [
    "advanced AB testing strategy", 
    "SEO audit e-commerce", 
    "CRO audit", 
    "conversion optimization", 
    "multivariate testing"
  ],
};

// 2. Render the Content Component
export default function ABTestingPageWrapper() {
  // This server component renders the interactive client component
  return <ABTestingContent />;
}
