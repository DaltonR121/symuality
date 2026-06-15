/**
 * Convert human heading text into a URL-safe fragment identifier. Handles
 * apostrophes, punctuation, repeated whitespace, and leading/trailing dashes.
 * Not meant as a general-purpose slugifier — just stable enough to build
 * in-page TOC anchors against hand-authored h2 labels.
 */
export function slugify(heading: string): string {
  return heading
    .toLowerCase()
    .replaceAll(/['’]/g, "")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
