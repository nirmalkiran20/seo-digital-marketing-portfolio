// FILE: src/lib/searchData.ts
'use client';

import Fuse from 'fuse.js';

type BaseItem = {
  title: string;
  path: string;
  content?: string;
  category?: string;
  type: 'Page' | 'Project' | 'Blog';
};

let fuse: Fuse<BaseItem> | null = null;
let loaded = false;

// Optional: inline a few blog items or switch to a static JSON import later
const inlineBlogs: BaseItem[] = [
  {
    title: 'GA4 Migration Checklist',
    path: 'https://seo-digital-marketing-portfolio.vercel.app/blog/ga4-attribution-models-explained',
    type: 'Blog',
    category: 'Analytics',
    content: 'Event mapping, conversions, audiences, Looker Studio templates',
  },
  {
    title: 'Scaling Google Ads with PMax',
    path: 'https://seo-digital-marketing-portfolio.vercel.app/blog/google-ads-performance-max-guide',
    type: 'Blog',
    category: 'Paid Ads',
    content: 'Asset groups, audience signals, budget pacing, ROAS stability',
  },
];

async function loadIndexOnce() {
  if (loaded) return;

const staticPages: BaseItem[] = [
  {
    title: 'About Me',
    path: '/me',
    type: 'Page',
    category: 'About',
    content:
      'Digital Marketing Specialist with SEO, SEM, SMM, Google Ads, GA4, and Looker Studio.',
  },
  {
    title: 'Projects',
    path: '/projects',
    type: 'Page',
    category: 'Work',
    content:
      'AB Testing, SEO campaigns, Google Ads, optimization, YouTube, and social media marketing.',
  },
  {
    title: 'Skills',
    path: '/skills',
    type: 'Page',
    category: 'Expertise',
    content:
      'Content, Google Ads, GA4 analytics, Looker Studio, keyword research, technical SEO, content strategy, SEM.',
  },
  {
    title: 'Blog',
    path: '/blog',
    type: 'Page',
    category: 'Articles',
    content:
      'Digital marketing insights, SEO case studies, Google Ads tips, and more.',
  },
  {
    title: 'Contact',
    path: '/contact',
    type: 'Page',
    category: 'Contact',
    content: 'Get in touch via email, LinkedIn collaboration.',
  },
  {
    title: 'CV',
    path: '/cv',
    type: 'Page',
    category: 'About',
    content:
      'Comprehensive CV with 9+ years experience in Digital Marketing, SEO, SEM, SMM, Google Ads, GA4, and Looker Studio. Contains detailed career history, skills, certifications, and accomplishments.',
  },
];

const projects: BaseItem[] = [
  {
    title: 'Google Ads Performance Campaign',
    path: '/projects/presentations/google-paid-ads',
    type: 'Project',
    category: 'Paid Ads',
    content: 'Reduced CPA by 45%, improved ROAS, landing page A/B testing.',
  },
  {
    title: 'Micro Influencers',
    path: '/projects/presentations/micro-influencers',
    type: 'Project',
    category: 'Digital Marketing',
    content: 'How niche voices drive trust, engagement, and qualified leads in modern B2B marketing.',
  },
  {
    title: 'Analytics Dashboard',
    path: '/projects/presentations/analytics-dashboard',
    type: 'Project',
    category: 'Analytics',
    content: 'Dashboard and tracking implementations for real-time marketing insights.',
  },
  {
    title: 'Data Thresholds in GA4',
    path: '/projects/videos/data-thresholds',
    type: 'Project',
    category: 'Video Marketing',
    content: 'Video campaigns showcasing proven tactics to attract, engage, and convert high-value clients.',
  },
  {
    title: 'Data Layer in GTM',
    path: '/projects/videos/data-layer',
    type: 'Project',
    category: 'Video Marketing',
    content: 'Implementing scalable GTM data layers for advanced tracking.',
  },
  {
    title: 'Element Visibility in GTM',
    path: '/projects/videos/element-visibility',
    type: 'Project',
    category: 'Video Marketing',
    content: 'Tracking element visibility events for better engagement analysis.',
  },
  {
    title: 'Beyond AB Testing',
    path: '/projects/others/ab-testing',
    type: 'Project',
    category: 'Marketing Strategy',
    content: 'Advanced testing methodologies to drive marketing performance improvements.',
  },
  {
    title: 'In-House vs. Agency',
    path: '/projects/others/in-house-vs-agency',
    type: 'Project',
    category: 'Agency Strategy',
    content: 'Comparative study on benefits and challenges between in-house teams and agencies.',
  },
  {
    title: 'The Future of ABM',
    path: '/projects/others/future-of-abm',
    type: 'Project',
    category: 'Account-Based Marketing',
    content: 'Insights into the evolving trends and strategies in Account-Based Marketing.',
  },
];

  const dataset = [...staticPages, ...projects, ...inlineBlogs];

  fuse = new Fuse(dataset, {
    threshold: 0.34,
    ignoreLocation: true,
    keys: [
      { name: 'title', weight: 0.6 },
      { name: 'content', weight: 0.3 },
      { name: 'category', weight: 0.2 },
      { name: 'type', weight: 0.1 },
    ],
  });
  loaded = true;
}

export async function searchContent(query: string, limit = 50) {
  if (!query.trim()) return [];
  await loadIndexOnce();
  const results = fuse!.search(query);
  return results.slice(0, limit).map((r) => ({
    title: r.item.title,
    path: r.item.path,
    category: r.item.category,
    snippet: r.item.content ?? '', // ✅ full content always
  }));
}
