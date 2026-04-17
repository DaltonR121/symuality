import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";
import { listPosts } from "@/lib/keystatic";

describe("sitemap", () => {
  it("includes the five canonical static routes", async () => {
    const entries = await sitemap();
    const urls = entries.map((entry) => entry.url);
    expect(urls).toContain("https://www.symuality.com/");
    expect(urls).toContain("https://www.symuality.com/about");
    expect(urls).toContain("https://www.symuality.com/now");
    expect(urls).toContain("https://www.symuality.com/projects");
    expect(urls).toContain("https://www.symuality.com/posts");
  });

  it("includes every post from listPosts", async () => {
    const [entries, posts] = await Promise.all([sitemap(), listPosts()]);
    const urls = entries.map((entry) => entry.url);
    for (const post of posts) {
      expect(urls).toContain(`https://www.symuality.com/posts/${post.slug}`);
    }
  });

  it("emits absolute HTTPS URLs only", async () => {
    const entries = await sitemap();
    for (const entry of entries) {
      expect(entry.url.startsWith("https://www.symuality.com")).toBe(true);
    }
  });
});
