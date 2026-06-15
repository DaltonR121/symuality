import type { Metadata } from "next";
import Link from "next/link";
import { listPosts } from "@/lib/keystatic";

export const metadata: Metadata = {
  title: "Posts",
  description: "Thoughts on faith, code, and life.",
};

export const dynamic = "force-static";

/**
 * Blog index route. Lists every post in the Keystatic `posts` collection in
 * reverse-chronological order. Malformed entries are skipped rather than
 * crashing the page — see `listPosts` in `src/lib/keystatic.ts`.
 */
export default async function PostsPage() {
  const sortedPosts = await listPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Posts
      </h1>
      <p className="mt-2 text-muted">
        Thoughts on faith, code, and life. Updated when I have something to say.
      </p>

      <div className="mt-8">
        {sortedPosts.length === 0 ? (
          <p className="text-subtle">
            Nothing here yet. Check back soon.
          </p>
        ) : (
          <div className="space-y-6">
            {sortedPosts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/posts/${post.slug}`}
                  className="group block"
                >
                  <time
                    dateTime={new Date(post.date).toISOString()}
                    className="text-sm text-subtle"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mt-1 text-lg font-semibold text-foreground group-hover:text-muted-foreground">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="mt-1 text-muted">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
