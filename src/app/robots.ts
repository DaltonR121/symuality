import type { MetadataRoute } from "next";

/**
 * App Router robots.txt. Allows general crawling, points search engines to
 * the sitemap, and blocks the Keystatic admin surface (also hard-disabled in
 * production, but belt-and-suspenders).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/keystatic/", "/api/"],
      },
    ],
    sitemap: "https://www.symuality.com/sitemap.xml",
    host: "https://www.symuality.com",
  };
}
