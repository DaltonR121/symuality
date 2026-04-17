import Link from "next/link";
import { ExternalLink } from "@/components/external-link";

/** Homepage. Personal intro plus an index of the site's four sub-routes. */
export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {/* Intro */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            Hey, I&apos;m Ryan.
          </h1>
          <p className="mt-1 font-mono text-sm text-stone-500 dark:text-stone-400">
            online as Symuality (sim-you-al-ity)
          </p>
          <p className="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Software engineer, Army Reserves vet, follower of Christ, husband,
            and dad in the Shenandoah Valley. I wrench on cars, tinker with my
            homelab, play way too much Rocket League, and occasionally roll a
            decent game at the bowling alley. I also run a small web
            development agency called{" "}
            <ExternalLink
              href="https://mosaicridge.com"
              className="text-stone-900 underline underline-offset-2 hover:text-stone-700 dark:text-stone-200 dark:hover:text-stone-300"
            >
              Mosaic Ridge
            </ExternalLink>{" "}
            and I&apos;m currently restoring a &apos;92 Chevy S10.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            This is my corner of the internet. No algorithm, no analytics, no content
            strategy. Just a personal homepage like the ones people used to make.
          </p>
        </div>

        {/* Quick links */}
        <div className="grid gap-4 sm:grid-cols-2">
          <QuickLink
            href="/now"
            title="What I'm doing now"
            description="Current projects, interests, and what's on my mind."
          />
          <QuickLink
            href="/projects"
            title="Things I've built"
            description="Software, websites, and open source tools."
          />
          <QuickLink
            href="/posts"
            title="Writing"
            description="Thoughts on faith, code, and life."
          />
          <QuickLink
            href="/about"
            title="About me"
            description="The longer version of who I am."
          />
        </div>

        {/* Find me */}
        <div className="border-t border-stone-200 pt-8 dark:border-stone-800">
          <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500 dark:text-stone-400">
            Find me elsewhere
          </h2>
          <div className="mt-3 flex flex-wrap gap-4">
            <ExternalLink
              href="https://github.com/DaltonR121"
              className="text-sm text-stone-600 underline underline-offset-2 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200"
            >
              GitHub
            </ExternalLink>
            <ExternalLink
              href="https://x.com/Symuality"
              className="text-sm text-stone-600 underline underline-offset-2 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200"
            >
              X
            </ExternalLink>
            <ExternalLink
              href="https://www.youtube.com/channel/UCTKTWU21iCtx02T-v5OsHsA"
              className="text-sm text-stone-600 underline underline-offset-2 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200"
            >
              YouTube
            </ExternalLink>
            <ExternalLink
              href="https://rocketleague.tracker.network/rocket-league/profile/epic/Symuality/overview"
              className="text-sm text-stone-600 underline underline-offset-2 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200"
            >
              RL Tracker
            </ExternalLink>
            <ExternalLink
              href="https://ryandalton.dev"
              className="text-sm text-stone-600 underline underline-offset-2 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200"
            >
              Portfolio
            </ExternalLink>
            <ExternalLink
              href="https://mosaicridge.com"
              className="text-sm text-stone-600 underline underline-offset-2 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200"
            >
              Mosaic Ridge
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Card link to a top-level route; heading is an h2 to preserve document outline. */
function QuickLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-stone-200 p-5 transition-colors hover:border-stone-300 hover:bg-stone-50 dark:border-stone-800 dark:hover:border-stone-700 dark:hover:bg-stone-900"
    >
      <h2 className="font-semibold text-stone-900 group-hover:text-stone-700 dark:text-stone-100 dark:group-hover:text-stone-300">
        {title}
      </h2>
      <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
        {description}
      </p>
    </Link>
  );
}
