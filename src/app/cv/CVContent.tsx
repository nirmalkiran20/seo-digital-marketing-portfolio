// src/app/cv/page.tsx
'use client';

// Try relative import if absolute import fails
import { trackDownload, trackEvent, trackCVEngagement } from '../../lib/gtm';
import Image from 'next/image';
import { ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FluidCursor from '@/components/FluidCursor';
import { useEffect, useState } from 'react';

const topElementVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { type: 'ease', duration: 0.8 } },
};

export default function CVContent() {
  const [viewStartTime, setViewStartTime] = useState<number>(0);
  
  useEffect(() => {
    const startTime = Date.now();
    setViewStartTime(startTime);
    
    // Track CV page view with GTM
    trackEvent('cv_page_view', {
      page_path: '/cv',
      content_type: 'portfolio_cv',
      timestamp: startTime
    });

    // Track time spent on page when component unmounts
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 5) { // Only track meaningful engagement
        trackCVEngagement('time_spent', {
          duration_seconds: timeSpent,
          engagement_level: timeSpent > 30 ? 'high' : 'medium'
        });
      }
    };
  }, []);

  const handleDownload = () => {
    trackDownload('CV_2025.pdf', 'pdf');
    
    // Additional conversion tracking
    trackEvent('cv_download_conversion', {
      conversion_type: 'cv_download',
      file_name: 'CV_2025.pdf',
      page_path: '/cv',
      time_before_download: Math.round((Date.now() - viewStartTime) / 1000)
    });
  };

  const handleBackNavigation = () => {
    trackEvent('navigation', {
      navigation_type: 'back_to_home',
      from_page: '/cv',
      to_page: '/',
      time_on_page: Math.round((Date.now() - viewStartTime) / 1000)
    });
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16">
      {/* Fluid Cursor Behind */}
      <FluidCursor />

      {/* Back Navigation with GTM Tracking */}
      <div className="fixed top-3 left-3 z-50">
        <Link 
          href="/"
          data-gtm="nav-back-home"
          onClick={handleBackNavigation}
          className="inline-flex items-center gap-1 rounded-full border bg-white/30 px-2 py-1 
                    text-sm font-medium text-black shadow-md backdrop-blur-lg transition 
                    hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
        >
          <ArrowLeft size={16} />
          <Image 
            src="/home.gif" 
            alt="Home" 
            width={18} 
            height={18} 
            unoptimized
          />
        </Link>
      </div>

      {/* Enhanced Download CV Button with GTM */}
      <div className="fixed top-3 right-3 z-50">
        <motion.a
          href="/CV_2025.pdf"
          download="Kiran_Nirmal_CV_2025.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 rounded-full border bg-white/30 px-3 py-1
                     text-sm font-medium text-black shadow-md backdrop-blur-lg transition
                     hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
          onClick={handleDownload}
          onMouseEnter={() => {
            trackEvent('cv_download_interest', {
              interaction_type: 'hover',
              page_path: '/cv'
            });
          }}
        >
          <Download size={18} /> Download
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

      {/* CV Preview with Scroll Tracking */}
      <div className="cv-scroll-container w-full max-w-4xl h-[50vh] overflow-y-auto overflow-x-hidden snap-y snap-mandatory flex flex-col gap-6 py-4 px-2 rounded-2xl shadow-lg border bg-white/70 dark:bg-neutral-800/70 backdrop-blur-lg scroll-smooth">
        {['CV_page1.png'].map((img, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-full h-auto snap-start rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onViewportEnter={() => {
              trackEvent('cv_page_view', {
                cv_page_number: index + 1,
                page_path: '/cv',
                content_type: 'cv_image_preview'
              });
            }}
          >
            <Image
              src={`/${img}`}
              alt={`CV Page ${index + 1}`}
              width={1400}
              height={2000}
              className="w-full h-auto object-contain"
              onLoad={() => {
                trackEvent('cv_image_load', {
                  image_name: img,
                  page_number: index + 1,
                  page_path: '/cv'
                });
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
