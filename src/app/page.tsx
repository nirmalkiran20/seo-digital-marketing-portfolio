// src/app/page.tsx
import HomeContent from "./HomeContent"; // client component
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Digital Marketing Portfolio - Kiran Nirmal",
  description:
    "Welcome to my SEO & Digital Marketing Portfolio. Explore 9.7+ years experience in SEO, SEM, PPC, GA4, and analytics.",
  keywords: ["Kiran Nirmal", "SEO Portfolio", "Digital Marketing", "GA4", "Analytics"],
  openGraph: {
    title: "Kiran Nirmal - Digital Marketing Portfolio",
    description:
      "Explore my SEO, PPC, and digital marketing projects with proven results.",
    url: "https://seo-digital-marketing-portfolio.vercel.app/",
    type: "website",
    images: [
      {
        url: "/myphoto5.png",
        width: 1200,
        height: 630,
        alt: "Kiran Nirmal Portfolio",
      },
    ],
  },
};

export default function HomePage() {
  return <HomeContent />;
}
