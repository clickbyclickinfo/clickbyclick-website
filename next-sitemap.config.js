/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://clickbyclick.cloud',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://clickbyclick.cloud/sitemap.xml',
    ],
  },
  exclude: [
    '/api/*',
    '/admin/*',
    '/_next/static/*',
  ],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  trailingSlash: false,
  autoLastmod: true,
};