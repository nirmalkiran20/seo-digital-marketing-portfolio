import type { Metadata } from 'next';
import FutureOfABMContent from './FutureOfABMContent';

// 1. Define the unique Meta Title and Description
export const metadata: Metadata = {
  // UNIQUE META TITLE
  title: "The Future of ABM: Strategy, Automation, and ROI Maximization", 
  
  // UNIQUE META DESCRIPTION
  description: 
    "A strategic analysis of the next generation of Account-Based Marketing (ABM), covering emerging technologies, data-driven targeting, and optimization techniques for B2B campaigns.",
  
  // Optional: Add specific keywords for this page
  keywords: [
    "Future of ABM", 
    "Account-Based Marketing trends", 
    "ABM automation", 
    "B2B campaign optimization", 
    "ABM strategy"
  ],
};

// 2. Render the Content Component
export default function FutureOfABMPageWrapper() {
  // This server component renders the interactive client component
  return <FutureOfABMContent />;
}
