import type { Metadata } from 'next';
import InhouseVSAbencyContent from './InhouseVSAbencyContent';

// 1. Define the unique Meta Title and Description
export const metadata: Metadata = {
  // UNIQUE META TITLE
  title: "In-House vs. Agency: Strategic Marketing Team Structure", 
  
  // UNIQUE META DESCRIPTION
  description: 
    "A comparison and analysis of the pros and cons of building an in-house marketing team versus hiring a dedicated marketing agency for long-term growth and campaign execution.",
  
  // Optional: Add specific keywords for this page
  keywords: [
    "in-house vs agency marketing", 
    "marketing team structure", 
    "agency comparison", 
    "marketing strategy outsourcing", 
    "internal marketing"
  ],
};

// 2. Render the Content Component
export default function InhouseVSAbencyPageWrapper() {
  // This server component renders the interactive client component
  return <InhouseVSAbencyContent />;
}
