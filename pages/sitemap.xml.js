import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
  // Fetch dynamic routes from your API
  const baseUrl = 'https://stjosephchurchkahawasukari.org';
  
  // Static pages
  const staticPages = [
    { url: '/', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 },
    { url: '/community', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
    { url: '/welcome/bulletin', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { url: '/formation/cl', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { url: '/formation/cjpd', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { url: '/formation/yca', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { url: '/formation/charismatic', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { url: '/formation/ysc', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { url: '/formation/mantle', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { url: '/formation/cma', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { url: '/formation/cwa', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { url: '/formation/couples', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { url: '/formation/pioneer', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { url: '/formation/pmc', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
        // Add more static pages as needed
  ];

  // Convert to sitemap format
  const fields = staticPages.map((page) => ({
    loc: `${baseUrl}${page.url}`,
    lastmod: page.lastmod,
    changefreq: page.changefreq,
    priority: page.priority,
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
