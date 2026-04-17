import { describe, expect, it } from "vitest";
import { GET } from "./feed.xml/route";
import { listPosts } from "@/lib/keystatic";

describe("feed.xml GET", () => {
  it("responds with application/rss+xml and a well-formed envelope", async () => {
    const response = await GET();
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("application/rss+xml");
    const body = await response.text();
    expect(body.startsWith('<?xml version="1.0"')).toBe(true);
    expect(body).toContain("<rss version=\"2.0\"");
    expect(body).toContain("</rss>");
    expect(body).toContain("<channel>");
    expect(body).toContain("https://www.symuality.com");
  });

  it("emits one <item> per post with a permalink guid", async () => {
    const [response, posts] = await Promise.all([GET(), listPosts()]);
    const body = await response.text();
    const itemCount = (body.match(/<item>/g) ?? []).length;
    expect(itemCount).toBe(posts.length);
    for (const post of posts) {
      expect(body).toContain(`https://www.symuality.com/posts/${post.slug}`);
    }
  });

  it("escapes XML-special characters in post titles and excerpts", async () => {
    const response = await GET();
    const body = await response.text();
    expect(body).not.toMatch(/<title>[^<]*&[^amp;lt;gt;quot;apos;][^<]*<\/title>/);
  });
});
