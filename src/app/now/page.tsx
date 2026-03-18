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

        <h2>Working On</h2>
        <ul>
          <li>Building and maintaining client websites through <a href="https://mosaicridge.com" target="_blank" rel="noopener noreferrer">Mosaic Ridge</a></li>
          <li>Full-time frontend software engineering</li>
          <li>Building open source developer tools &mdash; first one is <a href="https://github.com/DaltonR121/stint" target="_blank" rel="noopener noreferrer">stint</a></li>
          <li>This site</li>
        </ul>

        <h2>Playing</h2>
        <ul>
          <li>Rocket League (always)</li>
        </ul>

        <h2>Interested In</h2>
        <ul>
          <li>PC hardware and building rigs</li>
          <li>Wrenching on cars</li>
          <li>Home improvement projects</li>
          <li>Bowling</li>
        </ul>

        <h2>Reading / Studying</h2>
        <ul>
          <li>The Bible &mdash; daily study</li>
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
