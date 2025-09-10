import { Analytics } from "@vercel/analytics/react"
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

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Digital Marketing Portfolio",
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
      url: "",
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

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          
        )}
        
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {/* Top-center quick buttons on all non-home pages.
- HomeButtons hides itself on "/" and hides the current page + Home elsewhere */}
<HomeButtons />
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}


