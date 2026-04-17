import type { MetadataRoute } from "next";
import { listPosts } from "@/lib/keystatic";

const BASE_URL = "https://www.symuality.com";

/**
 * App Router sitemap — emits the five static routes plus every blog post.
 * Posts are sourced from Keystatic at build time via `listPosts`, so newly
 * published posts appear in the sitemap on the next deploy without any
 * manual update.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await listPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/now`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/projects`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/posts`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : undefined,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
