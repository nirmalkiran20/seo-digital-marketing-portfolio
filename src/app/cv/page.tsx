'use client';

import Image from 'next/image';
import { ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FluidCursor from '@/components/FluidCursor';

const topElementVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { type: 'ease', duration: 0.8 } },
};

export default function CVPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16">
      {/* Fluid Cursor Behind */}
      <FluidCursor />

      {/* Back Navigation */}
      <div className="fixed top-3 left-3 z-50">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 rounded-full border bg-white/30 px-2 py-1 
                    text-xs font-medium text-black shadow-md backdrop-blur-lg transition 
                    hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
        ><ArrowLeft size={16} />
        <Image 
            src="/home.gif" 
            alt="Home" 
            width={16} 
            height={16} 
            unoptimized
          />
        </Link>
      </div>

      {/* Download CV Button (Top Right) */}
      <div className="fixed top-3 right-3 z-50">
        <motion.a
          href="/CV_2025.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 rounded-full border bg-white/30 px-3 py-1
                     text-xs font-medium text-black shadow-md backdrop-blur-lg transition
                     hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
        >
          <Download size={16} /> Download
        </motion.a>
      </div>

      {/* Heading */}
      <motion.div
        className="mt-7 mb-7 text-center"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-5xl font-bold">My CV</h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300 max-w-lg mx-auto">
          Preview my CV below or download a copy.
        </p>
      </motion.div>

      {/* CV Preview using vertically scrollable Images */}
<div className="w-full max-w-4xl h-[50vh] overflow-y-auto overflow-x-hidden snap-y snap-mandatory flex flex-col gap-6 py-4 px-2 rounded-2xl shadow-lg border bg-white/70 dark:bg-neutral-800/70 backdrop-blur-lg scroll-smooth">
  {['CV_page1.png', 'CV_page2.png', 'CV_page3.png'].map((img, index) => (
    <motion.div
      key={index}
      className="flex-shrink-0 w-full h-auto snap-start rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Image
        src={`/${img}`}
        alt={`CV Page ${index + 1}`}
        width={1400}  // original width
        height={2000} // original height
        className="w-full h-auto object-contain"
      />
    </motion.div>
  ))}
</div>

      {/* Download CV Button (Bottom) */}
      <motion.div
        className="mt-4 relative z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.a
          href="/CV_2025.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 
                     text-white font-medium shadow-md transition hover:bg-blue-700"
        >
          <Download size={18} /> Download CV
        </motion.a>
      </motion.div>
    </div>
  );
}
