/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://marliozen.fr",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/"] },
    ],
  },
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/mentions-legales", "/confidentialite"],
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/association"),
    await config.transform(config, "/evenements"),
    await config.transform(config, "/adherer"),
    await config.transform(config, "/partenaires"),
    await config.transform(config, "/contact"),
  ],
}

module.exports = config
