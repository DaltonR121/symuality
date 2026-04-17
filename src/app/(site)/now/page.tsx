import type { Metadata } from "next";
import { ExternalLink } from "@/components/external-link";

export const metadata: Metadata = {
  title: "Now",
  description: "What Ryan is currently working on, playing, and thinking about.",
};

const LAST_UPDATED = new Date(2026, 2, 15);
const STALE_AFTER_DAYS = 90;

/**
 * Format the `LAST_UPDATED` date as a human-readable month-year string.
 * Used for both the on-page label and the `<time>` element.
 */
function formatMonthYear(date: Date): string {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

/** Return whole days elapsed since `date`, clamped to zero. */
function daysSince(date: Date): number {
  return Math.max(0, Math.floor((Date.now() - date.getTime()) / 86_400_000));
}

/** The /now convention is about currency; flag when the page has gone cold. */
export default function NowPage() {
  const days = daysSince(LAST_UPDATED);
  const stale = days > STALE_AFTER_DAYS;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-stone dark:prose-invert max-w-none">
        <h1>What I&apos;m Doing Now</h1>
        <p className="not-prose text-sm text-stone-500 dark:text-stone-400">
          Updated{" "}
          <time dateTime={LAST_UPDATED.toISOString().slice(0, 10)}>
            {formatMonthYear(LAST_UPDATED)}
          </time>{" "}
          &middot; Churchville, VA
        </p>
        {stale ? (
          <p className="not-prose mt-3 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200">
            Heads up: this page hasn&apos;t been refreshed in over{" "}
            {STALE_AFTER_DAYS} days, so some of it may be out of date.
          </p>
        ) : null}

        <h2>Family</h2>
        <ul>
          <li>Jessica is baking, gardening, and making Target runs</li>
          <li>Mason is about to earn his Yellow belt in karate</li>
          <li>Pikachu (ball python) is doing ball python things</li>
        </ul>

        <h2>Working On</h2>
        <ul>
          <li>Full-time frontend software engineering (the day job)</li>
          <li>
            Building and maintaining client websites through{" "}
            <ExternalLink href="https://mosaicridge.com">
              Mosaic Ridge
            </ExternalLink>
          </li>
          <li>
            Building open source developer tools (first one:{" "}
            <ExternalLink href="https://github.com/DaltonR121/stint">
              stint
            </ExternalLink>
            )
          </li>
          <li>This site</li>
        </ul>

        <h2>The Project Car</h2>
        <p>
          1992 Chevy S10 pickup with a 5-speed transmission and 2.5L Iron Duke
          motor. I bought it to be a daily driver and it needed new timing
          gears. The more I looked around after getting it home, the more I
          just couldn&apos;t stand the shape it&apos;s in. It&apos;s turning
          into a full restoration. I&apos;ll be documenting the process on{" "}
          <ExternalLink href="https://www.youtube.com/channel/UCTKTWU21iCtx02T-v5OsHsA">
            YouTube
          </ExternalLink>
          .
        </p>

        <h2>Playing</h2>
        <ul>
          <li>
            Rocket League (always). Hanging around Diamond in most competitive
            modes. Dropshot &gt; Snow Day and that is the hill I will die on.{" "}
            <ExternalLink href="https://rocketleague.tracker.network/rocket-league/profile/epic/Symuality/overview">
              Check my stats
            </ExternalLink>
            .
          </li>
          <li>Fortnite (because Mason makes me)</li>
        </ul>

        <hr />
        <p className="text-sm text-stone-500 dark:text-stone-400">
          This is a{" "}
          <ExternalLink href="https://nownownow.com/about">
            /now page
          </ExternalLink>
          . If you have your own site, you should make one too.
        </p>
      </article>
    </div>
  );
}
