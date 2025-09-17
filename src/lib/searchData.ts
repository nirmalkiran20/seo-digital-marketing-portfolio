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
        'Digital Marketing Specialist with SEO, SEM, SMM, Google Ads, GA4, and Looker Studio',
    },
    {
      title: 'Projects',
      path: '/projects',
      type: 'Page',
      category: 'Work',
      content:
        'SEO campaigns, Google Ads, optimization, YouTube, and social media marketing',
    },
    {
      title: 'Skills',
      path: '/skills',
      type: 'Page',
      category: 'Expertise',
      content:
        'SEO strategy, Google Ads, GA4 analytics, Looker Studio, keyword research, technical SEO, content strategy, SEM',
    },
    {
      title: 'Blog',
      path: '/blog',
      type: 'Page',
      category: 'Articles',
      content:
        'Digital marketing insights, SEO case studies, Google Ads tips, and more',
    },
    {
      title: 'Contact',
      path: '/contact',
      type: 'Page',
      category: 'Contact',
      content: 'Get in touch via email, LinkedIn collaboration.',
    },
  ];

  const projects: BaseItem[] = [
    {
      title: 'E-commerce Audit',
      path: '/projects',
      type: 'Project',
      category: 'SEO',
      content:
        'Increased organic traffic by 50%, technical SEO, optimization',
    },
    {
      title: 'Google Ads Performance Campaign',
      path: '/projects',
      type: 'Project',
      category: 'Paid Ads',
      content:
        'Reduced CPA by 45%, improved ROAS, landing page testing',
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
