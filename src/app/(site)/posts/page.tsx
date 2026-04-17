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
      <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
        Posts
      </h1>
      <p className="mt-2 text-stone-600 dark:text-stone-400">
        Thoughts on faith, code, and life. Updated when I have something to say.
      </p>

      <div className="mt-8">
        {sortedPosts.length === 0 ? (
          <p className="text-stone-500 dark:text-stone-400">
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
                    className="text-sm text-stone-500 dark:text-stone-400"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mt-1 text-lg font-semibold text-stone-900 group-hover:text-stone-600 dark:text-stone-100 dark:group-hover:text-stone-300">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="mt-1 text-stone-600 dark:text-stone-400">
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
