'use client';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import FluidCursor from '@/components/FluidCursor';

export default function AnalyticsDashboardPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <FluidCursor />

      {/* Back Navigation */}
      <div className="fixed top-3 left-3 z-50">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border bg-white/30 px-2 py-1 
                    text-xs font-medium text-black shadow-md backdrop-blur-lg transition 
                    hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
        >
          <ArrowLeft size={16} />
          <Image src="/home.gif" alt="Home" width={16} height={16} />
        </Link>
      </div>

      {/* Heading */}
      <motion.div
        className="mt-7 mb-7 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="inline-block px-3 py-1 
                text-3xl font-bold 
                rounded-4xl shadow-lg border 
                bg-white/70 dark:bg-neutral-800/70 
                backdrop-blur-lg">Risk Strategies Through Real-Time Analytics</h1>
        <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-300 max-w-lg mx-auto">
          Leveraging instant insights to predict, prevent, and respond to emerging threats.
        </p>
      </motion.div>

      {/* Project Preview using embedded PDF */}
<motion.iframe
  src="/Analytics-for-Risk.pdf"
  className="w-full max-w-4xl h-[75vh] overflow-y-auto overflow-x-hidden snap-y snap-mandatory flex flex-col gap-6 py-3 px-2 rounded-2xl shadow-lg border bg-white/70 dark:bg-neutral-800/70 backdrop-blur-lg scroll-smooth"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
/>
    </div>
  );
}
