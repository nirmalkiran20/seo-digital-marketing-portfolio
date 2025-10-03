import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import { getAllCategories, getPostsByCategory } from '@/lib/markdown';
import FluidCursor from '@/components/FluidCursor';
import { Metadata } from 'next'

const categoryMetadata = {
  'analytics': {
    title: 'Analytics Articles',
    description: 'Expert insights on Google Analytics 4, attribution models, data analysis, and digital marketing analytics best practices.'
  },
  'cro': {
    title: 'Conversion Rate Optimization (CRO)', 
    description: 'Proven CRO strategies, landing page psychology, A/B testing guides, and conversion optimization techniques that boost results.'
  },
  'google-ads': {
    title: 'Google Ads & PPC',
    description: 'Google Ads Performance Max guides, PPC optimization strategies, and paid advertising best practices for better ROAS.'
  },
  'seo-strategy': {
    title: 'SEO Strategy & Techniques',
    description: 'Advanced SEO strategies, AI-driven content optimization, technical SEO, and search engine optimization best practices.'
  },
  'social-media': {
    title: 'Social Media Marketing',
    description: 'Social media ROI measurement, platform strategies, content marketing, and social advertising optimization techniques.'
  }
}

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const categoryData = categoryMetadata[category as keyof typeof categoryMetadata]
  
  if (!categoryData) {
    return {
      title: 'Category Not Found',
      description: 'The requested blog category could not be found.'
    }
  }

  return {
    title: `${categoryData.title} | Digital Marketing Blog`,
    description: categoryData.description,
    openGraph: {
      title: `${categoryData.title} | Digital Marketing Blog`,
      description: categoryData.description,
      type: 'website'
    }
  }
}

type Params = Promise<{ category: string }>;

export async function generateStaticParams() {
  const cats = getAllCategories();
  // Slugify categories for URLs: "Google Ads" -> "google-ads"
  const toSlug = (s: string) => s.trim().toLowerCase().replace(/\s+/g, '-');
  return cats.map((c) => ({ category: toSlug(c) }));
}

function unslugifyCategory(slug: string) {
  // "google-ads" -> "Google Ads"
  const name = slug.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
  return name
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ''))
    .join(' ');
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category } = await params;
  const pretty = unslugifyCategory(category);

  // Filter using original category names, case-insensitive match
  const posts = getPostsByCategory(pretty);

  return (
    <div className="relative flex min-h-screen flex-col px-4 pb-16 pt-24">
      <FluidCursor />
      
      {/* All Articles button moved to top left with absolute positioning */}
      <div className="fixed top-3 left-3 z-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full border bg-white/30 px-4 py-1.5 text-sm font-medium text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
        >
          <ArrowLeft size={16} />
          All Articles
        </Link>
      </div>

      <div className="mb-10">
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <Tag size={28} className="text-blue-600" />
          {pretty}
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          Articles categorized under "{pretty}".
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-neutral-500">No articles in this category yet.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border bg-white/70 dark:bg-neutral-800/50 backdrop-blur-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-neutral-500">
                  <Tag size={14} />
                  {post.category || 'Uncategorized'}
                  <span>•</span>
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                  <span>•</span>
                  <Clock size={14} />
                  {post.readTime}
                </div>
                <h3 className="text-lg font-semibold mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-2 text-white hover:text-black transition-colors font-medium text-sm"
                >
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
