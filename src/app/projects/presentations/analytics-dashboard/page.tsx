'use client';
import { ArrowLeft, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import FluidCursor from '@/components/FluidCursor';

export default function AnalyticsDashboardPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <FluidCursor />

      {/* Back Navigation Home */}
      <div className="fixed top-3 right-3 z-50">
        <Link
          href="/"
          data-gtm="nav-back-home"
          className="inline-flex items-center gap-1 rounded-full border bg-white/30 px-2 py-1 
                    text-xs font-medium text-black shadow-md backdrop-blur-lg transition 
                    hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
        >
          <ArrowLeft size={16} />
          <Image src="/home.gif" alt="Home" width={16} height={16} unoptimized />
        </Link>
      </div>

      {/* Back button */}
            <div className="fixed top-3 left-3 z-50">
              <Link
                href="/projects"
                className="inline-flex items-center gap-1 rounded-full border
                 bg-white/30 px-2 py-1 text-xs font-medium
                  text-black shadow-md backdrop-blur-lg transition
                   hover:bg-white/60 dark:border-white dark:text-white
                    dark:hover:bg-neutral-800"
              >
                <ArrowLeft size={16} /> Back
              </Link>
            </div>

      {/* Heading */}
      <motion.div
        className="mt-5 mb-7 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="inline-block px-3 py-1 
                text-3xl font-bold 
                rounded-4xl shadow-lg border 
                bg-white/70 dark:bg-neutral-800/70 
                backdrop-blur-lg">Risk Strategies Through Real-Time Analytics</h1>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 max-w-lg mx-auto">
          Leveraging instant insights to predict, prevent, and respond to emerging threats.
        </p>
      </motion.div>

       {/* Project Preview using vertically scrollable images */}
<div className="w-full max-w-sm h-[50vh] overflow-y-auto overflow-x-hidden snap-y snap-mandatory flex flex-col gap-4 py-4 px-2 rounded-2xl shadow-lg border bg-white/70 dark:bg-neutral-800/70 backdrop-blur-lg scroll-smooth">
  {['AnalyticsforRisk1.png', 'AnalyticsforRisk2.png'].map((img, index) => (
    <motion.div
      key={index}
      className="flex-shrink-0 w-full h-full snap-start rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Image
        src={`/${img}`}
        alt={`Analytics Dashboard Slide ${index + 1}`}
        width={1400}
        height={2000}
        className="w-full h-full object-contain"
      />
    </motion.div>
  ))}
</div>

{/* Note + Download Button */}
<div className="mt-6 text-center z-50">
  <p className="mb-3 text-sm font-bold text-neutral-600 dark:text-neutral-300">
    For full insights, you can download the PPT
  </p>
  <motion.a
    href="/AnalyticsforRisk2025.pdf"
    download
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white text-sm font-medium shadow-md hover:bg-blue-700 transition"
  >
    <Download size={16} /> Download PPT
  </motion.a>
</div>
    </div>
  );
}