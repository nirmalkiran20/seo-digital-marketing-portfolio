'use client';
import { ArrowLeft } from 'lucide-react';
import FluidCursor from '@/components/FluidCursor';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function MePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      {/* Fluid Cursor Background */}
      <FluidCursor />
  

{/* Back Navigation */}
<div className="fixed top-3 left-3 z-50">
  <Link 
    href="/"
    className="inline-flex items-center gap-2 rounded-full border bg-white/30 px-2 py-1 
              text-xs font-medium text-black shadow-md backdrop-blur-lg transition 
              hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
  ><ArrowLeft size={16} /><Image 
      src="/home.gif" 
      alt="Home" 
      width={25} 
      height={16} 
      unoptimized
    />
  </Link>
</div>

      {/* Main Content Card */}
      <motion.div
        className="relative z-10 mt-24 mb-12 w-full max-w-5xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 md:text-6xl lg:text-7xl">About Me</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Transforming businesses through data-driven digital marketing strategies
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/40 shadow-lg">
            <Image
              src="/myphoto1.png"
              alt="Kiran Nirmal"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl font-semibold">Digital Marketing Specialist</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            9+ Years of Experience • ROI-Focused • Data-Driven
          </p>
        </motion.div>

        {/* Two Column Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div variants={itemVariants} className="rounded-2xl border bg-white/30 p-6 backdrop-blur-lg dark:bg-neutral-800/30">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">My Story</h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              For nearly a decade, I've specialized in helping businesses achieve remarkable growth. My expertise covers the full digital marketing ecosystem, from strategic SEO and targeted advertising to comprehensive analytics, ensuring every campaign delivers measurable ROI.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              I'm particularly passionate about bridging the gap between technical strategy and creative execution. This means not only optimizing a website's backend for search engines but also crafting compelling content and running performance marketing campaigns that connect with the right audience. My work often involves technical SEO audits to boost organic visibility, followed by a data-driven approach to fine-tune advertising efforts. Ultimately, I focus on turning complex data into actionable insights that drive sustainable business growth.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-2xl border bg-white/30 p-6 backdrop-blur-lg dark:bg-neutral-800/30">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">Core Expertise</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                'SEO Strategy',
'Google Ads (PPC)',
'Social Media Marketing',
'GA4 Analytics & Reporting',
'Conversion Rate Optimization (CRO)',
'Performance Marketing',
'Technical SEO Audits',
'Content Marketing',
'Email Marketing',
'E-commerce Marketing',
'Project Management',
'Brand Development',
'Data Visualization',
'Customer Journey Mapping'
              ].map((skill) => (
                <div 
                  key={skill}
                  className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-lg px-3 py-2 
                             text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { value: '9.7+', label: 'Years Experience', color: 'text-blue-600' },
            { value: '20+', label: 'Campaigns Managed', color: 'text-green-600' },
            { value: '45%', label: 'Avg ROI Improvement', color: 'text-purple-600' }
          ].map((stat) => (
            <div 
              key={stat.label}
              className="text-center rounded-2xl border bg-white/30 p-6 backdrop-blur-lg dark:bg-neutral-800/30"
            >
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Philosophy */}
        <motion.div variants={itemVariants} className="text-center rounded-2xl border bg-white/30 p-8 mb-12 backdrop-blur-lg dark:bg-neutral-800/30">
          <h3 className="text-2xl font-semibold mb-4">My Philosophy</h3>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
            "Every click tells a story, every conversion reveals an opportunity. 
            I believe in letting data guide strategy while never forgetting that 
            behind every metric is a real person making real decisions."
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h3 className="text-2xl font-semibold">Let's Work Together</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 
                         text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </Link>
            <Link 
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 
                         font-medium hover:bg-neutral-100 transition-colors dark:border-neutral-700 dark:hover:bg-neutral-800"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}


