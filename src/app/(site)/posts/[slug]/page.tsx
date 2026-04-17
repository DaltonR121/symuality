import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import { reader } from "@/lib/keystatic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";
export const dynamicParams = false;

/**
 * Enumerate every post slug at build time so Next.js can prerender each post
 * as static HTML. Paired with `dynamicParams = false`, this rejects any slug
 * not known at build — eliminating a path-traversal surface on arbitrary
 * user input passed to the Keystatic reader.
 */
export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();
  return slugs.map((slug) => ({ slug }));
}

/** Per-post `<head>` metadata driven by the post's frontmatter. */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const url = `/posts/${slug}`;
  const tags = post.tags ? [...post.tags] : [];

  return {
    title: post.title,
    description: post.excerpt || undefined,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt || undefined,
      publishedTime: new Date(post.date).toISOString(),
      authors: ["Ryan Dalton"],
      tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || undefined,
    },
  };
}

/** Render a single blog post via Markdoc's React renderer (safe by default). */
export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);

  if (!post) {
    notFound();
  }

  const { node } = await post.content();
  const transformed = Markdoc.transform(node);
  const renderable = Markdoc.renderers.react(transformed, React);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || undefined,
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Ryan Dalton",
      url: "https://www.symuality.com/about",
    },
    mainEntityOfPage: `https://www.symuality.com/posts/${slug}`,
    keywords: post.tags?.length ? post.tags.join(", ") : undefined,
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article>
        <header className="mb-8">
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
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          {post.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-chip-bg px-2.5 py-0.5 text-xs font-medium text-chip-fg"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </header>

        <div className="prose prose-stone dark:prose-invert max-w-none">
          {renderable}
        </div>
      </article>

    </div>
  );
}
