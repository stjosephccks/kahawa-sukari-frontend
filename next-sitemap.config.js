/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Disable static sitemap generation since we're using a dynamic approach
  generate: false,
  siteUrl: 'https://stjosephchurchkahawasukari.org',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/server-sitemap.xml/' , '/admin*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
