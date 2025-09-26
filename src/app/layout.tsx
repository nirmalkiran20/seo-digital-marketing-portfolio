// src/app/layout.tsx
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { GTMProvider } from '@/components/GoogleTagManager'; // New GTM component
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import HomeButtons from '@/components/HomeButtons';

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Kiran Nirmal - Digital Marketing Specialist",
  description: "9+ Years of Experience in SEO, SEM, SMM, Google Ads, GA4, Looker Studio",
  keywords: [
    "Kiran", 
    "Portfolio", 
    "Digital Marketer", 
    "AI", 
    "Interactive", 
    "Memoji", 
    "Website Audit",
    "SEO"
  ],
  authors: [
    {
      name: "Kiran",
      url: "https://github.com/nirmalkiran20/",
    },
  ],
  creator: "Kiran",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    title: "Kiran Portfolio",
    description: "Interactive portfolio with an AI-powered Memoji that answers questions about me",
    siteName: "Kiran Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran Portfolio",
    description: "Interactive portfolio with an AI-powered Memoji that answers questions about me",
    creator: "@Kiran",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      }
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/favicon.ico?v=2",
  },
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        {/* GTM Provider - loads on all pages */}
        <GTMProvider />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <HomeButtons />
          {children}
          <Toaster />
        </ThemeProvider>
        
        <VercelAnalytics />
      </body>
    </html>
  );
}