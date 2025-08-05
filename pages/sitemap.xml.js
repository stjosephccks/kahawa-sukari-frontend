// Alternative manual approach without next-sitemap dependency

// Define your static pages with their configurations
const pages = [
  // Home and main pages
  { loc: '/', changefreq: 'daily', priority: 1.0 },
  { loc: '/welcome', changefreq: 'weekly', priority: 0.9 },
  { loc: '/welcome/bulletin', changefreq: 'weekly', priority: 0.8 },
  
  // Community pages
  { loc: '/community', changefreq: 'weekly', priority: 0.8 },
  { loc: '/community/charity', changefreq: 'weekly', priority: 0.7 },
  { loc: '/community/jumuiya', changefreq: 'weekly', priority: 0.7 },
  
  // Liturgy pages
  { loc: '/liturgy', changefreq: 'weekly', priority: 0.9 },
  { loc: '/liturgy/choir', changefreq: 'weekly', priority: 0.7 },
  { loc: '/liturgy/altar', changefreq: 'weekly', priority: 0.7 },
  
  // Sacraments
  { loc: '/sacraments/baptism', changefreq: 'monthly', priority: 0.8 },
  { loc: '/sacraments/confirmation', changefreq: 'monthly', priority: 0.8 },
  { loc: '/sacraments/eucharist', changefreq: 'weekly', priority: 0.9 },
  { loc: '/sacraments/penance', changefreq: 'weekly', priority: 0.8 },
  { loc: '/sacraments/annointing', changefreq: 'monthly', priority: 0.7 },
  { loc: '/sacraments/rcia', changefreq: 'monthly', priority: 0.7 },
  { loc: '/sacraments/rcic', changefreq: 'monthly', priority: 0.7 },
  { loc: '/sacraments/orders', changefreq: 'monthly', priority: 0.7 },
  { loc: '/sacraments/matrimony', changefreq: 'monthly', priority: 0.8 },
  
  // Formations
  { loc: '/formation', changefreq: 'weekly', priority: 0.8 },
  { loc: '/formation/cma', changefreq: 'weekly', priority: 0.7 },
  { loc: '/formation/cwa', changefreq: 'weekly', priority: 0.7 },
  { loc: '/formation/ysc', changefreq: 'weekly', priority: 0.7 },
  { loc: '/formation/mym', changefreq: 'weekly', priority: 0.7 },
  { loc: '/formation/cjpd', changefreq: 'weekly', priority: 0.7 },
  { loc: '/formation/pmc', changefreq: 'weekly', priority: 0.7 },
  { loc: '/formation/cl', changefreq: 'weekly', priority: 0.7 },
  { loc: '/formation/couples', changefreq: 'weekly', priority: 0.7 },
];

function generateSiteMap(baseUrl, pages) {
  const currentDate = new Date().toISOString();
  
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
         return `
       <url>
           <loc>${baseUrl}${page.loc}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>${page.changefreq}</changefreq>
           <priority>${page.priority}</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export const getServerSideProps = async ({ res }) => {
  // Use environment variable for base URL or fallback to production URL
  const baseUrl = 'https://stjosephchurchkahawasukari.org';

  // Generate the XML sitemap
  const sitemap = generateSiteMap(baseUrl, pages);

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
  
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}