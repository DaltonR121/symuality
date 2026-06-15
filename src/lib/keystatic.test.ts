import { describe, expect, it } from "vitest";
import { listPosts } from "./keystatic";

describe("listPosts", () => {
  it("returns every `.mdoc` file under src/content/posts", async () => {
    const posts = await listPosts();
    expect(posts.length).toBeGreaterThan(0);
    for (const post of posts) {
      expect(post.slug).toBeTypeOf("string");
      expect(post.slug.length).toBeGreaterThan(0);
      expect(post.title).toBeTypeOf("string");
      expect(post.date).toBeTypeOf("string");
    }
  });

  it("sorts posts in reverse-chronological order", async () => {
    const posts = await listPosts();
    for (let i = 1; i < posts.length; i++) {
      const prev = new Date(posts[i - 1].date).getTime();
      const curr = new Date(posts[i].date).getTime();
      expect(prev).toBeGreaterThanOrEqual(curr);
    }
  });
});
