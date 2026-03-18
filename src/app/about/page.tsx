import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Symuality and the person behind the screen.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-stone dark:prose-invert max-w-none">
        <h1>About</h1>

        <p className="mb-0">
          Welcome, I&apos;m Symuality.
        </p>
        <p className="not-prose text-lg italic text-stone-500 dark:text-stone-400">
          sim-you-al-ity
        </p>

        <h2>Behind the Screen</h2>
        <p>
          My name is Ryan Dalton. I&apos;m a full-time software engineer building a
          small business called{" "}
          <a
            href="https://mosaicridge.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mosaic Ridge
          </a>{" "}
          based out of Churchville, Virginia. If you&apos;d like to know
          more about my professional experiences, feel free to check
          out my{" "}
          <a
            href="https://ryandalton.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
          .
        </p>

        <h2>The Name</h2>
        <p>
          The name Symuality came from a short stint of soul searching and
          looking to establish a unique, online presence, whether gaming
          or otherwise. I&apos;ve always been interested in this idea of life
          being a &ldquo;Simulated Reality.&rdquo; I drew inspiration from
          that to combine the words but didn&apos;t like the way
          &ldquo;Simuality&rdquo; looked. I played with it a little more,
          landed on &ldquo;Symuality,&rdquo; and haven&apos;t looked back
          since. I was drawn to the name but didn&apos;t know fully why.
        </p>

        <h2>Found</h2>
        <p>
          My life before Christ, I think, can be best described as
          &ldquo;Casual Christianity&rdquo; or being a &ldquo;Comfort-zone
          Christian.&rdquo; I am excluding an angsty-teenage
          phase where I had more questions than answers about the world around
          me. I told myself things like &ldquo;God recognizes my effort to be
          a good person and that will be enough.&rdquo; I made myself believe
          things like &ldquo;Organized Churches are full of hypocrites that
          run wild until Church on Sunday where they go to feel good about
          themselves.&rdquo; I convinced myself that Church wasn&apos;t
          necessary. I was also guilty of using God like a vending
          machine. Prayers go in, hopefully my desired outcome comes out.
        </p>
        <p>
          If I started to doubt the validity of my own excuses, my next
          scapegoat was time. I have a family to provide for. I have a social
          life to maintain. I have hobbies for the sake of my sanity. God
          understands, right? He sees how much I have to juggle and knows my
          heart so that&apos;s enough, isn&apos;t it?
        </p>
        <p>
          Beyond all that, I think the sin I&apos;ve been most guilty of would
          be placing money above God. I believed that money was a number you
          could place on the amount of value you provide to society. No matter
          the number I saw in our bank account, it was never enough. My
          thoughts were always consumed with what I need to do to put myself in
          a position to make more.
        </p>
        <p>
          Lucky for me, there is a voice in the financial space who has a lot
          of reach. That man is Dave Ramsey. I wouldn&apos;t say Dave is how I
          found Jesus but he definitely helped push me in the right direction.
          I can&apos;t tell you how many times I&apos;ve heard him say,
          &ldquo;I met God on the way up, and I got to know him on the way
          down.&rdquo;
        </p>
        <p>
          After years of going through the motions, labeling myself a
          Christian, listening to Dave Ramsey, obsessing over money, and
          praying for the wrong reasons, my life just wasn&apos;t where I
          expected it to be. I had a loving wife, a beautiful son, a job that
          paid well, my health, and a roof over my head. Even with all that, I
          fell into a depression where I coped with reality by using video
          games as a distraction from everything around me. I would put on a
          happy face for friends and family by day and do my best to distract
          myself from facing life by night. Believe it or not, this is how I
          met Jesus.
        </p>
        <p>
          I met a gentleman named Roger while playing a game called Rocket
          League. As St. Francis of Assisi is often credited with saying,
          &ldquo;Preach the Gospel at all times; use words when
          necessary.&rdquo; Roger is the kind of guy where words are not
          necessary. He carries himself in a different way. There is no
          arrogance or superiority, it just always feels like pure, honest
          compassion. Even when his patience is wearing thin, his composure
          does not. I eventually found the courage to ask him about his faith.
          Since then, I&apos;ve spent hours asking him hard-hitting questions.
          We&apos;ve talked about everything from forgiveness to how we as
          Christians should navigate situations with the current social and pop
          culture issues going on in our country.
        </p>
        <p>
          Jesus had been there all along. Through every excuse, every
          distraction, every misguided prayer. On March 12, 2025, I made a
          decision to deeply study the Bible, to know the word of God, and to
          be a better Christian. That was the day I found Him.
        </p>

        <Image
          src="/baptism.png"
          alt="Ryan's baptism, June 2025"
          width={768}
          height={768}
          className="rounded-lg"
        />

        <p>
          In June of 2025, I was baptized, alongside my wife and step-dad.
          The level of clarity I&apos;ve experienced since that day has been
          incredible. My wife and I can look back and see God&apos;s Will
          being done, how He has been protecting and caring for us all along.
          We are so thankful to be part of a community that shares our values.
        </p>

        <h2>Full Circle</h2>
        <p>
          Finding Christ brought the name into focus. I had always been drawn
          to this idea of a &ldquo;simulated reality,&rdquo; but I had it
          backwards. This <em>is</em> a simulated reality. Not the kind built
          by machines or code, but one authored by God Himself. Every moment
          of this life has been pre-built and set into motion by God. It is
          His design, His will. And the name I thought I chose on a whim? God
          had been steering me toward it long before I ever understood why.
        </p>

        <blockquote>
          <p>
            Trust in the Lord with all your heart, and do not lean on your own
            understanding. In all your ways, acknowledge him, and he will make
            straight your paths.
          </p>
          <footer className="not-prose mt-2 text-sm text-stone-500 dark:text-stone-400">
            &ndash; Proverbs 3:5-6
          </footer>
        </blockquote>
      </article>
    </div>
  );
}
