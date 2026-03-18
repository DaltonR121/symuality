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
          <li>Building open source developer tools &mdash; first one is <a href="https://github.com/DaltonR121/stint" target="_blank" rel="noopener noreferrer">stint</a></li>
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
          <li>Rocket League (always) &mdash; hanging around Diamond in most competitive modes. Dropshot &gt; Snow Day and that is the hill I will die on.</li>
          <li>Fortnite (because Mason makes me)</li>
        </ul>

        <h2>Other Interests</h2>
        <ul>
          <li>Homelabbing &mdash; running TrueNAS on a mini-PC and tinkering with it</li>
          <li>Home improvement &mdash; the never-ending list (draining the water tank, outlets with open grounds, leaky bathtub spout...)</li>
          <li>Bowling &mdash; probably joining a league this spring with a buddy. I used to average around 180-200 when I bowled in a league about 15 years ago.</li>
          <li>Bible study (daily)</li>
        </ul>

        <h2>The Rig</h2>
        <p>
          Built around 2018 and gradually upgraded since. Hoping it lasts a bit
          longer before I have to jump off the retired AM4 chipset.
        </p>
        <ul>
          <li><strong>CPU:</strong> AMD Ryzen 9 3900X (12 cores / 24 threads)</li>
          <li><strong>RAM:</strong> 32 GB DDR4</li>
          <li><strong>GPU:</strong> AMD Radeon RX 6800 XT (Navi 21)</li>
          <li><strong>OS:</strong> Linux (btw) / Windows 11 (for Rocket League)</li>
        </ul>

        <h2>Go-To Orders</h2>
        <p>I have a go-to order at every restaurant. Name anywhere and I could tell you this very moment what I&apos;d be ordering.</p>
        <ul>
          <li><strong>Taco Bell:</strong> Chicken Quesadilla combo</li>
          <li><strong>Domino&apos;s:</strong> Pepperoni, sausage, and jalape&ntilde;os</li>
          <li><strong>Subway:</strong> Italian BMT on Italian Herbs &amp; Cheese, pepperjack, tomatoes, honey mustard</li>
          <li><strong>Burger King:</strong> Double Whopper with cheese, no lettuce, no pickle, no onion, cut in half with &ldquo;halfsies&rdquo; (half fries, half onion rings)</li>
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
