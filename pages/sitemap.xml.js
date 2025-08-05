import { getServerSideSitemap } from 'next-sitemap';

// Define your static pages with their configurations
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/community', changefreq: 'weekly', priority: 0.8 },
  { url: '/welcome/bulletin', changefreq: 'weekly', priority: 0.7 },
  { url: '/liturgy', changefreq: 'weekly', priority: 0.8 },
  { url: '/liturgy/choir', changefreq: 'weekly', priority: 0.7 },
  { url: '/liturgy/altar', changefreq: 'weekly', priority: 0.7 },
  { url: '/sacraments/annointing', changefreq: 'weekly', priority: 0.7 },
];

export const getServerSideProps = async (ctx) => {
  try {
    const baseUrl ='http://localhost:3000' 
    //'https://stjosephchurchkahawasukari.org';
    const currentDate = new Date().toISOString();
    
    // Create fields array with proper formatting
    const fields = pages.map((page) => ({
      loc: `${baseUrl}${page.url}`,
      lastmod: currentDate,
      changefreq: page.changefreq,
      priority: page.priority,
    }));

    // Return the sitemap with the fields
    return getServerSideSitemap(ctx, fields);
  } catch (e) {
    console.error('Error generating sitemap:', e);
    return {
      notFound: true,
    };
  }
};

// Default export to prevent next.js errors
export default function Sitemap() {}