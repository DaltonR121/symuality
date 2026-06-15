import { createReader } from "@keystatic/core/reader";
import config from "../../keystatic.config";

/**
 * Shared Keystatic reader for blog content. Safe to import from any Server
 * Component; `@keystatic/core/reader` is a Node-only module and will not ship
 * to the client bundle.
 */
export const reader = createReader(process.cwd(), config);

type RawPost = NonNullable<
  Awaited<ReturnType<typeof reader.collections.posts.read>>
>;

/** A blog post with its slug merged in. */
export type Post = RawPost & { slug: string };

/**
 * Read every post in the Keystatic `posts` collection, merging the slug onto
 * each entry and filtering out any post that fails to read (e.g. missing file,
 * malformed frontmatter). Posts are returned in reverse-chronological order by
 * `date`.
 */
export async function listPosts(): Promise<Post[]> {
  const slugs = await reader.collections.posts.list();
  const readPromises = slugs.map(async (slug): Promise<Post | null> => {
    const post = await reader.collections.posts.read(slug);
    return post ? { slug, ...post } : null;
  });
  const posts = await Promise.all(readPromises);

  const valid: Post[] = posts.filter((post): post is Post => post !== null);
  valid.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return valid;
}
