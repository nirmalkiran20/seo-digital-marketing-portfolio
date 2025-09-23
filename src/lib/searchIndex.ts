import Fuse from 'fuse.js';
import { getAllPosts } from '@/lib/markdown';

export type SearchItem = {
  id: string;
  title: string;
  path: string;
  type: 'Page' | 'Project' | 'Blog';
  category?: string;
  tags?: string[];
  excerpt?: string;
};

function staticPages(): SearchItem[] {
  return [
    { id: 'page:me', title: 'About Me', path: '/me', type: 'Page', tags: ['about','profile'] },
    { id: 'page:projects', title: 'Projects', path: '/projects', type: 'Page', tags: ['work','portfolio'] },
    { id: 'page:skills', title: 'Skills', path: '/skills', type: 'Page', tags: ['expertise'] },
    { id: 'page:blog', title: 'Blog', path: '/blog', type: 'Page', tags: ['articles'] },
    { id: 'page:contact', title: 'Contact', path: '/contact', type: 'Page', tags: ['connect'] },
  ];
}

function projects(): SearchItem[] {
  return [
    { id: 'proj:google-paid-ads', title: 'Google Ads Performance Campaign', path: '/projects/presentations/google-paid-ads', type: 'Project', category: 'Paid Ads',
      excerpt: 'Reduced CPA by 45%, improved ROAS, landing page testing', tags: ['ads','pmax','google'] },
    { id: 'proj:micro-influencers', title: 'Micro Influencers', path: '/projects/presentations/micro-influencers', type: 'Project', category: 'Digital Marketing',
      excerpt: 'How niche voices drive trust, engagement, and qualified leads', tags: ['influencers','b2b'] },
    { id: 'proj:analytics-dashboard', title: 'Analytics Dashboard', path: '/projects/presentations/analytics-dashboard', type: 'Project', category: 'Analytics',
      excerpt: 'Real-time dashboards and tracking implementations', tags: ['analytics','ga4'] },
    { id: 'proj:data-thresholds', title: 'Data Thresholds in GA4', path: '/projects/videos/data-thresholds', type: 'Project', category: 'Video Marketing',
      excerpt: 'Video campaign exploring GA4 thresholds', tags: ['ga4','video'] },
    { id: 'proj:data-layer', title: 'Data Layer in GTM', path: '/projects/videos/data-layer', type: 'Project', category: 'Video Marketing',
      excerpt: 'Implementing scalable GTM data layers', tags: ['gtm','tracking'] },
    { id: 'proj:element-visibility', title: 'Element Visibility in GTM', path: '/projects/videos/element-visibility', type: 'Project', category: 'Video Marketing',
      excerpt: 'Tracking element visibility events in GTM', tags: ['gtm','events'] },
    { id: 'proj:ab-testing', title: 'Beyond AB Testing', path: '/projects/others/ab-testing', type: 'Project', category: 'Marketing Strategy',
      excerpt: 'Advanced testing methodologies for marketing performance', tags: ['ab-test','experiments'] },
    { id: 'proj:in-house-vs-agency', title: 'In-House vs. Agency', path: '/projects/others/in-house-vs-agency', type: 'Project', category: 'Agency Strategy',
      excerpt: 'Comparative study between in-house teams and agencies', tags: ['agency','strategy'] },
    { id: 'proj:future-of-abm', title: 'The Future of ABM', path: '/projects/others/future-of-abm', type: 'Project', category: 'Account-Based Marketing',
      excerpt: 'Evolving trends and strategies in ABM', tags: ['abm','b2b'] },
  ];
}

function blogs(): SearchItem[] {
  const posts = getAllPosts(); // assumes returns metadata incl. slug,title,excerpt,category
  return posts.map((p: any) => ({
    id: `blog:${p.slug}`,
    title: p.title,
    path: `/blog/${p.slug}`,
    type: 'Blog',
    category: p.category,
    excerpt: p.excerpt,
    tags: p.tags ?? (p.category ? [p.category] : []),
  }));
}

export function buildItems(): SearchItem[] {
  return [...staticPages(), ...projects(), ...blogs()];
}

export function createFuse(items: SearchItem[]) {
  return new Fuse(items, {
    threshold: 0.34,
    ignoreLocation: true,
    includeScore: true,
    keys: [
      { name: 'title', weight: 0.6 },
      { name: 'excerpt', weight: 0.3 },
      { name: 'category', weight: 0.2 },
      { name: 'tags', weight: 0.2 },
      { name: 'type', weight: 0.1 },
    ],
  });
}


