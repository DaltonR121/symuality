# Symuality

Ryan Dalton's personal homepage at [symuality.com](https://www.symuality.com).
A personal site in the old sense: no algorithm, no analytics, no content
calendar. That framing is load-bearing, not decoration - see "Editorial rules"
below before adding anything that would make it feel like a funnel.

Not to be confused with `products/mosaic-ridge`, which is the agency site. This
one is personal and lives under `DaltonR121`, not the Mosaic-Ridge org.

---

## Stack

Follows the global Next.js defaults in `/Projects/CLAUDE.md`. Deviations and
specifics:

- Next.js 16 (App Router), React 19, TypeScript strict, Tailwind CSS v4
- **Keystatic** as a file-based CMS for blog posts, in `local` storage mode
- **Markdoc** for post content, rendered through `Markdoc.renderers.react`
- Vitest (node environment) for tests
- Deployed on Vercel under the **personal team** (`daltonr121s-projects`),
  alongside `portfolio`. Not the Mosaic Ridge team.

### No environment variables

The project requires none. Keystatic is in `local` storage mode, so the CMS
reads and writes content files straight from the working tree in dev, and its
admin routes 404 in production. `.env.example` documents the four
`KEYSTATIC_GITHUB_*` variables that would be needed only if storage were ever
switched to `github` mode. Leave them commented out until that actually
happens.

---

## Structure

```
src/
  app/
    (site)/            public routes, share the nav/footer shell
      page.tsx         home
      about/           long-form bio, has an in-page TOC
      now/             what Ryan is currently doing
      projects/        things he has built
      posts/           index + [slug] post renderer
    keystatic/         CMS admin UI (dev only, 404s in prod)
    api/keystatic/     Keystatic API route
    feed.xml/          RSS
    robots.ts          + robots.test.ts
    sitemap.ts         + sitemap.test.ts
    layout.tsx         fonts, sitewide metadata, Person JSON-LD
    globals.css        Tailwind v4 CSS config + design tokens
    feed.test.ts       covers the feed.xml route handler
  components/          nav.tsx, external-link.tsx
  content/posts/*.mdoc Keystatic-managed post files (committed)
  lib/                 keystatic.ts, date.ts, slug.ts (each + a .test.ts)
```

Route groups matter here: `(site)` carries the skip link, nav, `<main>`
landmark and footer. Keystatic admin routes deliberately sit **outside** that
group so the CMS does not inherit the public chrome.

---

## Conventions specific to this project

### Design tokens, not raw Tailwind colors

`globals.css` defines a stone-family palette as CSS custom properties, exposed
to Tailwind via `@theme inline`. Use the semantic utilities (`text-muted`,
`bg-chip-bg`, `border-border-strong`, `text-subtle`) rather than reaching for
`stone-600` directly. Every token has a light and a dark value under
`prefers-color-scheme`, so a raw color will silently break dark mode.

### Accessibility is already wired in - keep it that way

The baseline is deliberate and easy to regress:

- Skip link to `#main` in the site layout
- `aria-current="page"` on the active nav link, `aria-expanded`/`aria-controls`
  on the mobile menu toggle
- Global `:focus-visible` outline and a `prefers-reduced-motion` block
- **Inline outbound links should go through `<ExternalLink>`**
  (`src/components/external-link.tsx`), which supplies
  `rel="noopener noreferrer"` plus an `sr-only` "opens in a new tab" hint.
  Prefer it over a hand-rolled `target="_blank"` anchor.

Two places currently bypass it, for different reasons:

- `(site)/projects/page.tsx` wraps whole cards in an anchor and announces the
  new tab through `aria-label` instead. That is deliberate: `ExternalLink`
  appends its hint as a trailing `sr-only` span, which does not compose with
  card content.
- `(site)/about/page.tsx` has one inline prose link to mosaicridge.com that
  carries `rel` but no new-tab announcement. That one is an inconsistency, not
  a decision - worth folding into `ExternalLink` next time the file is touched.

### Content lives in Keystatic, edited locally

Run `pnpm dev` and open `/keystatic` to write posts. Files land in
`src/content/posts/*.mdoc` and are committed like source. Reading posts from
app code goes through `listPosts()` in `src/lib/keystatic.ts`, which merges the
slug in, drops entries that fail to read, and sorts reverse-chronologically.
Do not call the reader directly from a page when `listPosts()` will do.

`sitemap.ts` derives post URLs from `listPosts()`, so a new post appears in the
sitemap on the next deploy with no manual edit. Per the global convention, post
`lastModified` comes from the post's own `date` field, never `new Date()`.

### Security headers are in `next.config.ts`

A full set (HSTS, CSP, `X-Frame-Options: DENY`, Permissions-Policy, and so on)
is applied to `/:path*`. The CSP currently needs `'unsafe-inline'` for both
script and style because of Next's inline runtime and Tailwind. If you add a
third-party embed, the CSP is the thing that will block it - widen it
deliberately and narrowly rather than loosening `default-src`.

### `@markdoc/markdoc` is pinned exactly at 0.5.7 - do not put a caret on it

Markdoc 0.5.8 narrowed `Schema.children` from `string[]` to `NodeType[]`.
Keystatic 0.5.x still bundles Markdoc **0.4.0**, so the `Node` returned by
`post.content()` stops being assignable to `Markdoc.transform()` and both
typecheck and build fail at `src/app/(site)/posts/[slug]/page.tsx`. A caret
range floats back onto the break on the next fresh resolve.

Dependabot will keep proposing the bump. It cannot be taken until Keystatic
ships a newer bundled Markdoc (0.6.x may fix it, but that upgrade deserves its
own PR with the render path actually exercised).

### No analytics, and that is on purpose

Unlike the client sites, this project has **no GA4, no Search Console
verification file, and no Vercel Analytics**. The home page and the RSS route
both say so in as many words. The global "analytics on client sites" section of
`/Projects/CLAUDE.md` does not apply here. Do not add tracking without Ryan
asking for it directly.

### Testing

Vitest, node environment, tests as `*.test.ts` siblings of the module under
test. Current coverage is the pure helpers (`date`, `slug`), the Keystatic
reader wrapper, and the three route handlers (`feed.xml`, `robots`, `sitemap`).
Test behavior through the exported function, not internals.

---

## Quality gate

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

After any dependency change, start from a clean frozen install first:

```bash
rm -rf node_modules && pnpm install --frozen-lockfile
```

This repo carries a substantial `pnpm.overrides` block (transitive security
pins: `minimatch`, `brace-expansion`, `js-yaml`, `postcss`, `lodash` and
others). Prefer targeted `pnpm update <pkg>` over a broad `pnpm update`, which
rewrites dependency ranges without touching `pnpm.overrides` and silently
desyncs the lockfile. Vercel installs with `--frozen-lockfile` and will fail
the deploy on the drift that a green local build did not catch.

---

## CI and branch protection

CI (`.github/workflows/ci.yml`) runs on **push to `main`** plus
`workflow_dispatch`, per the org-wide convention. This repo is public but has
no external contributors, so it is *not* the `stint` exception and should not
gain a `pull_request` trigger.

⚠️ **Known snag:** `main`'s branch protection requires the status check
`Lint, typecheck & build`, which only ever reports on push-to-main. A PR
therefore can never satisfy it and normal merges are blocked. Until the
protection rule is fixed, merges need `gh pr merge --admin`. The real gate is
the local run above.
