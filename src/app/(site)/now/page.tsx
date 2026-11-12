import type { Metadata } from "next";
import { ExternalLink } from "@/components/external-link";

export const metadata: Metadata = {
  title: "Now",
  description: "What Ryan is currently working on, playing, and thinking about.",
};

const LAST_UPDATED = new Date(2026, 10, 12);
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
        <p className="not-prose text-sm text-subtle">
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
          <li>
            Jessica is baking and selling her cookies and cupcakes as{" "}
            <ExternalLink href="https://www.hotoffhotchkiss.com">
              Hot Off Hotchkiss
            </ExternalLink>
          </li>
          <li>
            Mason traded karate for baseball and just wrapped his first season
            of Rookie ball. His team went 7-1 and he hit .692.
          </li>
          <li>
            Mason is also into Minecraft, Super Smash Bros, and music. His
            favorite song used to be Magnetic by Wage War. Now it&apos;s
            Believer by Imagine Dragons.
          </li>
          <li>Pikachu (ball python) is over a year old now and doing great</li>
        </ul>

        <h2>Church</h2>
        <ul>
          <li>
            We&apos;ve found a new church home locally and we&apos;re really
            happy to be involved there
          </li>
          <li>
            Mason goes to AWANA Club on Wednesday nights and loves it. He
            never misses unless a school event gets in the way.
          </li>
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
          <li>
            <ExternalLink href="https://www.riskyrides.com">
              Risky Rides
            </ExternalLink>
            , a place to buy, sell, and trade cheap project cars and parts
            (everything under $5,000)
          </li>
          <li>This site</li>
        </ul>

        <h2>On Hold</h2>
        <ul>
          <li>
            <strong>The S10.</strong> The &apos;92 Chevy S10 restoration
            didn&apos;t happen. It&apos;s being parted out and sold. I
            didn&apos;t have the budget to do it the way I wanted to.
          </li>
          <li>
            <strong>The homelab.</strong> I wasn&apos;t happy with my old
            setup, so it&apos;s gone. Someday I want to do it right: a bigger
            server with real 20TB drives and real redundancy. Until then, no
            homelab.
          </li>
        </ul>

        <h2>Playing</h2>
        <ul>
          <li>
            Rocket League (always). Still hanging around Diamond in most
            competitive modes. Dropshot &gt; Snow Day and that is the hill I will die on.{" "}
            <ExternalLink href="https://rocketleague.tracker.network/rocket-league/profile/epic/Symuality/overview">
              Check my stats
            </ExternalLink>
            .
          </li>
        </ul>

        <hr />
        <p className="text-sm text-subtle">
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
