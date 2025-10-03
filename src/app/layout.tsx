// src/app/layout.tsx
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import HomeButtons from "@/components/HomeButtons";
import Script from "next/script";
import "./globals.css";
import GTMPageView from "@/components/GTMPageView"; // 👈 add this

// Your GTM Container ID
const GTM_ID = "GTM-NRS4LF52";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://seo-digital-marketing-portfolio.vercel.app"),
  title: "Digital Marketing Portfolio ",
  description:
    "Professional SEO and Digital Marketing Specialist with 9.7+ years experience in SEO, SEM, SMM, Google Ads, GA4, and Looker Studio.",
  keywords: ["Kiran", "Portfolio", "Digital Marketer", "AI", "Interactive", "Memoji", "Website Audit", "SEO"],
  authors: [{ name: "Kiran", url: "https://github.com/nirmalkiran20/" }],
  creator: "Kiran Nirmal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seo-digital-marketing-portfolio.vercel.app/",
    title: "Kiran Portfolio",
    description: "Interactive portfolio with an Active Search Bar",
    siteName: "Digital Marketing Portfolio",
  },
  
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico?v=2",
    apple: "/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ GTM Script - high in head, before interactive */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>

      <body
        className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}
      >
        {/* ✅ GTM noscript - raw HTML */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        {/* ✅ Track SPA route changes */}
        <GTMPageView />

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
