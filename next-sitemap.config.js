/** @type {import('next-sitemap').IConfig} */
module.exports = {
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
