// src/app/contact/page.tsx ⬅️ NEW FILE: Server Component for SEO

import type { Metadata } from 'next';
import ContactContent from './ContactContent'; // ⬅️ Imports the Client Component

// ✅ 1. Define the unique Meta Title and Description
export const metadata: Metadata = {
  // UNIQUE META TITLE
  title: "Contact | Digital Marketing Strategy & Collaboration", 
  
  // UNIQUE META DESCRIPTION
  description: 
    "I am Kiran and Connect with Me for digital marketing projects, job opportunities, or partnership inquiries via email or LinkedIn.",
  
  // Optional: Add specific keywords for this page
  keywords: [
    "Contact digital marketer", 
    "Kiran Nirmal email", 
    "LinkedIn profile", 
    "hire digital strategist"
  ],
};

// ✅ 2. Render the Content Component
export default function ContactPageWrapper() {
  // This server component renders the interactive client component
  return <ContactContent />;
}
