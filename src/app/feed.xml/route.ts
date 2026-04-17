import { listPosts } from "@/lib/keystatic";

const BASE_URL = "https://www.symuality.com";
const FEED_TITLE = "Symuality — Ryan Dalton";
const FEED_DESCRIPTION = "Thoughts on faith, code, and life.";
const FEED_LANGUAGE = "en";

export const dynamic = "force-static";

/**
 * Escape XML-special characters in a string so it can be placed inside an RSS
 * element body without breaking the feed for picky readers.
 */
function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

/**
 * Serve the site's RSS 2.0 feed at /feed.xml. One `<item>` per blog post in
 * reverse-chronological order. Content is excerpt-only — readers who want the
 * full post follow the link, which keeps the feed small and lets the site
 * retain analytics-free discovery.
 */
export async function GET() {
  const posts = await listPosts();
  const now = new Date().toUTCString();

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${BASE_URL}/posts/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/posts/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt ?? "")}</description>
    </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${BASE_URL}</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>${FEED_LANGUAGE}</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
