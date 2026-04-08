import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What Ryan is currently working on, playing, and thinking about.",
};

export default function NowPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-stone dark:prose-invert max-w-none">
        <h1>What I&apos;m Doing Now</h1>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          Updated March 2026 &middot; Churchville, VA
        </p>

        <h2>Family</h2>
        <ul>
          <li>Jessica is baking, gardening, and making Target runs</li>
          <li>Mason is about to earn his Yellow belt in karate</li>
          <li>Pikachu (ball python) is doing ball python things</li>
        </ul>

        <h2>Working On</h2>
        <ul>
          <li>Full-time frontend software engineering (the day job)</li>
          <li>Building and maintaining client websites through <a href="https://mosaicridge.com" target="_blank" rel="noopener noreferrer">Mosaic Ridge</a></li>
          <li>Building open source developer tools (first one: <a href="https://github.com/DaltonR121/stint" target="_blank" rel="noopener noreferrer">stint</a>)</li>
          <li>This site</li>
        </ul>

        <h2>The Project Car</h2>
        <p>
          1992 Chevy S10 pickup with a 5-speed transmission and 2.5L Iron Duke
          motor. I bought it to be a daily driver and it needed new timing
          gears. The more I looked around after getting it home, the more I
          just couldn&apos;t stand the shape it&apos;s in. It&apos;s turning
          into a full restoration. I&apos;ll be documenting the process
          on{" "}
          <a href="https://www.youtube.com/channel/UCTKTWU21iCtx02T-v5OsHsA" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          .
        </p>

        <h2>Playing</h2>
        <ul>
          <li>Rocket League (always). Hanging around Diamond in most competitive modes. Dropshot &gt; Snow Day and that is the hill I will die on. <a href="https://rocketleague.tracker.network/rocket-league/profile/epic/Symuality/overview" target="_blank" rel="noopener noreferrer">Check my stats</a>.</li>
          <li>Fortnite (because Mason makes me)</li>
        </ul>

        <hr />
        <p className="text-sm text-stone-500 dark:text-stone-400">
          This is a{" "}
          <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">
            /now page
          </a>
          . If you have your own site, you should make one too.
        </p>
      </article>
    </div>
  );
}
