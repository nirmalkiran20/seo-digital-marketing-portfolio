import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Eye } from 'lucide-react';
import { getAllPostSlugs, getPostBySlug } from '@/lib/markdown';
import { MotionDiv } from '@/components/Motion';
import FluidCursor from '@/components/FluidCursor'; // 👈 cursor background
import { Metadata } from 'next'

const blogPostsMetadata = {
  'social-media-roi-2025': {
    title: 'Social Media ROI: Measuring What Actually Matters in 2025',
    description: 'Learn to measure social media ROI beyond vanity metrics. Focus on CAC, CLV, attribution models, and business outcomes that drive growth.',
    category: 'Social Media'
  },
  'future-of-seo-ai-driven-content': {
    title: 'The Future of SEO: AI-Driven Content Strategies That Actually Work', 
    description: 'Discover how AI is reshaping SEO in 2025. Learn intent-based clustering, automated content briefs, and AI-driven ranking strategies.',
    category: 'SEO Strategy'
  },
  'cro-landing-page-psychology': {
    title: 'Landing Page Psychology: 5 Cognitive Biases That Boost Conversions',
    description: 'Apply behavioral science to boost conversions. Learn anchoring, social proof, scarcity, loss aversion, and authority biases.',
    category: 'CRO'
  },
  'google-ads-performance-max-guide': {
    title: 'Google Ads Performance Max: Complete Optimization Guide',
    description: 'Master Performance Max campaigns with step-by-step setup, bidding strategies, asset optimization, and audience signal best practices.',
    category: 'Google Ads'
  },
  'ga4-attribution-models-explained': {
    title: 'GA4 Attribution Models: Which One Actually Drives Results?',
    description: 'Compare GA4 attribution models and choose the right one for your business. Understand data-driven attribution and conversion paths.',
    category: 'Analytics'
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const postData = blogPostsMetadata[slug as keyof typeof blogPostsMetadata]
  
  if (!postData) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${postData.title} | Digital Marketing Blog`,
    description: postData.description,
    openGraph: {
      title: postData.title,
      description: postData.description,
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.description
    }
  }
}

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = await getPostBySlug(slug);
  if (!article) return null;

  return (
    <div className="relative min-h-screen bg-transparent">
      {/* Fluid cursor background */}
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
                href="/blog"
                className="inline-flex items-center gap-1 rounded-full border
                 bg-white/30 px-2 py-1 text-xs font-medium
                  text-black shadow-md backdrop-blur-lg transition
                   hover:bg-white/60 dark:border-white dark:text-white
                    dark:hover:bg-neutral-800"
              >
                <ArrowLeft size={16} /> Blog
              </Link>
            </div>

      {/* Header with motion */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-96 overflow-hidden"
      >
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4 text-white drop-shadow-[0_0_6px_#3b82f6]">
              <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Eye size={14} /> {article.views} views</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold 
             text-white dark:text-sky-400 
             leading-tight mb-4 
             drop-shadow-[0_0_10px_#3b82f6]">
              {article.title}
            </h1>
          </div>
        </div>
      </MotionDiv>

      {/* Content inside glass card */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="rounded-2xl border bg-white/70 dark:bg-neutral-800/50 backdrop-blur-lg shadow-lg p-8">
          <div
  className="prose prose-lg max-w-none dark:prose-invert 
             prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline 
             dark:prose-a:text-blue-400"
  dangerouslySetInnerHTML={{ __html: article.content }}
/>
        </div>
      </div>
    </div>
  );
}