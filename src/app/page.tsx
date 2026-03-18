import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {/* Intro */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            Hey, I&apos;m Ryan.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Software engineer by day. Builder of things by nature. I wrench on
            cars, tinker with my homelab, play way too much Rocket League, and
            occasionally roll a decent game at the bowling alley. I also run a small web
            development agency called{" "}
            <a
              href="https://mosaicridge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 underline underline-offset-2 hover:text-stone-700 dark:text-stone-200 dark:hover:text-stone-300"
            >
              Mosaic Ridge
            </a>{" "}
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
            <ExternalLink href="https://github.com/DaltonR121" label="GitHub" />
            <ExternalLink href="https://mosaicridge.com" label="Mosaic Ridge" />
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <h3 className="font-semibold text-stone-900 group-hover:text-stone-700 dark:text-stone-100 dark:group-hover:text-stone-300">
        {title}
      </h3>
      <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
        {description}
      </p>
    </Link>
  );
}

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-stone-600 underline underline-offset-2 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200"
    >
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
