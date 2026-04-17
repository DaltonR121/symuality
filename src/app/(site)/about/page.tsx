import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Symuality and the person behind the screen.",
};

/**
 * Return the number of full years elapsed between `date` and today, correctly
 * accounting for whether this year's anniversary has already occurred.
 */
function fullYearsSince(date: Date): number {
  const today = new Date();
  let years = today.getFullYear() - date.getFullYear();
  const monthDiff = today.getMonth() - date.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
    years--;
  }
  return years;
}

export default function AboutPage() {
  const masonAge = fullYearsSince(new Date(2019, 4, 30));
  const marriedYears = fullYearsSince(new Date(2016, 9, 16));

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
          My name is Ryan Dalton. I&apos;m a full-time software engineer, the
          founder of a small web development agency called{" "}
          <a
            href="https://mosaicridge.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mosaic Ridge
          </a>
          , and a husband and dad living in Churchville, Virginia.
        </p>
        <p>
          Jessica and I got married on October 16, 2016 on the San Antonio
          Riverwalk. It was a small wedding with only close friends and family.
          Fun fact: we spent $500 getting married and
          here we are {marriedYears} years later.
        </p>

        <Image
          src="/wedding-collage.webp"
          alt="Ryan and Jessica's wedding on the San Antonio Riverwalk, October 2016"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 768px"
          priority
          className="rounded-lg"
        />

        <p>
          Jessica is a stay-at-home mom
          who enjoys baking, gardening, coffee, Target, Netflix, and Amazon. She
          claims to be an introvert but I&apos;m secretly convinced she&apos;s
          just an extremely shy, anxiety-filled extrovert. We joke that
          she&apos;s a golden retriever because she enjoys nothing more than a
          good drive.
        </p>
        <p>
          Our son Mason is {masonAge} and is all energy. He loves karate, shooting
          hoops in the driveway, passing football, making dad play Fortnite, and
          helping me wrench on the project car. He also has a pet ball python
          named Pikachu.
        </p>

        <h2>The Long Way Around</h2>
        <p>
          I grew up in Morgantown, West Virginia and drove tractor trailer for
          ten years because it&apos;s what I watched my dad do my whole life.
          There&apos;s still a passion for trucks, but it doesn&apos;t pay well
          enough unless you&apos;re an owner/operator, and at that point
          it&apos;s not a job, it&apos;s a lifestyle. I hauled casing for
          drilling rigs, mining shields for coal mines, lumber, and saltwater
          and drilling fluids.
        </p>
        <p>
          I remember eating lunch with my high school drumline instructor,
          Mr. Welker, and his fianc&eacute;e (we called her &ldquo;MAW&rdquo;
          (Miss Almost Welker). They told us about not wanting to be
          stuck in the same cycle as the rest of their family, where their
          parents were from their hometown, and their grandparents, and their
          grandparents&apos; parents. That always stuck with me. I wanted to
          see different places.
        </p>
        <p>
          Jessica and I love Bryan-College Station, Texas. It&apos;s my
          favorite place on Earth and where Mason was born in May 2019. We
          moved back to the Northeast so he could grow up knowing his family,
          spent about four years in Toms River, New Jersey, and landed in
          Churchville, Virginia in March 2025. We intend to stay here at least
          until Mason graduates high school. This may be the last stop for us
          forever. It may not. Time will tell. Fun fact: we live right next
          door to my mom and step-dad. It&apos;s a blessing for Mason and we
          couldn&apos;t be happier about it.
        </p>
        <p>
          I also served in the U.S. Army Reserves as a 12C (Bridge Crewmember)
          from 2009 to 2017. Basic training was at Fort Leonard Wood, Missouri
          (&ldquo;Fort Lost in the Woods&rdquo;) in early 2010. I was with the
          459th Engineering Unit out of Bridgeport, West Virginia, with summer
          training at Fort McCoy, Wisconsin or Fort Chaffee, Arkansas. I never
          had the opportunity to serve overseas, but I always felt a pull to do
          my duty for my country.
        </p>

        <h2>Trucks, Cars, and Code</h2>
        <p>
          I started wrenching on big trucks before cars. My dad never wanted the
          blue-collar lifestyle for me and kept me away from his truck garage
          when I was young. He claims he wanted me to get a job pushing a pen.
          Funny story: by 19, I was exactly where he didn&apos;t want me
          to be: in a truck.
        </p>
        <p>
          We spent a few months restoring an old 2000 Kenworth with a Cat 6NZ
          motor and 13-speed transmission back to road-worthy together. It made
          for a fantastic memory and I ran that truck for a little over two
          years. I&apos;ve probably spent more time wrenching on trucks than
          cars, but it all feels a lot like coding. You take a problem, break it
          down into smaller chunks, and work through those chunks until it&apos;s
          solved. Checking fuses is basically the
          dropping-print-statements of the automotive world.
        </p>

        <Image
          src="/kenworth-restoration.webp"
          alt="2000 Kenworth restoration, before and after, restored with dad"
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 768px"
          className="rounded-lg"
        />

        <h2>How I Got Into Code</h2>
        <p>
          Web development interested me as early as middle school. We learned a
          tiny bit of HTML in 7th grade computer class and I thought it was the
          coolest thing since sliced bread. Save it as &ldquo;.html&rdquo;,
          double-click it, it opens in the browser. I played with Yahoo
          GeoCities and Adobe Dreamweaver way back when.
        </p>
        <p>
          As I got older, I always assumed college was a barrier to entry. I
          honestly figured web development had reached a point where it was all
          WYSIWYG until I learned it might be a viable career without a
          degree and there were bootcamps designed to get you there. I enrolled
          in App Academy in 2021, a six-month program. A lot of bootcamps drop
          you straight into React hoping you can write enough JSX to get hired.
          App Academy spent the first twelve weeks on foundational JavaScript
          and actually preparing your technical skills. That made a huge
          difference.
        </p>
        <p>
          My first professional role was as a federal government contractor,
          building applications where security and reliability weren&apos;t
          optional. From there I moved into enterprise software development.
          Coding has become a lifestyle for me, but at least I&apos;m not stuck
          away from home on major holidays and family birthdays anymore.
        </p>

        <h2>The Name</h2>
        <p>
          Symuality came from a stint of soul searching and wanting to establish
          a unique online presence, whether for gaming or otherwise. I&apos;ve
          always been interested in this idea of life being a &ldquo;Simulated
          Reality.&rdquo; I drew inspiration from that to combine the words but
          didn&apos;t like the way &ldquo;Simuality&rdquo; looked. I played
          with it a little more, landed on &ldquo;Symuality,&rdquo; and
          haven&apos;t looked back since. I was drawn to the name but
          didn&apos;t know fully why.
        </p>

        <h2>Found</h2>
        <p>
          My life before Christ can best be described as &ldquo;Casual
          Christianity&rdquo; or being a &ldquo;Comfort-zone Christian.&rdquo;
          I&apos;m excluding an angsty teenage phase where I had more questions
          than answers about the world around me. I told myself things
          like &ldquo;God recognizes my effort to be a good person and that
          will be enough.&rdquo; I convinced myself that organized churches
          were full of hypocrites who run wild until Sunday when they go to
          feel good about themselves. I convinced myself Church wasn&apos;t
          necessary. I was also guilty of using God like a vending
          machine. Prayers go in, hopefully my desired outcome comes out.
        </p>
        <p>
          If I started to doubt my own excuses, my next scapegoat was time. I
          have a family to provide for. I have a social life to maintain. I
          have hobbies for the sake of my sanity. God understands, right? He
          sees how much I have to juggle and knows my heart, so that&apos;s
          enough... isn&apos;t it?
        </p>
        <p>
          Beyond all that, the sin I&apos;ve been most guilty of would be
          placing money above God. I believed that money was a number you
          could place on the amount of value you provide to society. No matter
          the number I saw in our bank account, it was never enough. My
          thoughts were always consumed with what I needed to do to make more.
        </p>
        <p>
          Lucky for me, there is a voice in the financial space who has a lot
          of reach: Dave Ramsey. I wouldn&apos;t say Dave is how I found Jesus,
          but he definitely helped push me in the right direction. I can&apos;t
          tell you how many times I&apos;ve heard him say, &ldquo;I met God on
          the way up, and I got to know him on the way down.&rdquo;
        </p>
        <p>
          After years of going through the motions, labeling myself a
          Christian, listening to Dave Ramsey, obsessing over money, and
          praying for the wrong reasons, my life just wasn&apos;t where I
          expected it to be. I had a loving wife, a beautiful son, a job that
          paid well, my health, and a roof over my head. Even with all that, I
          fell into a depression where I coped by using video games as a
          distraction from everything around me. Happy face for friends and
          family by day, doing my best to avoid facing life by night. Believe
          it or not, this is how I met Jesus.
        </p>
        <p>
          I met a gentleman named Roger while playing Rocket League. As
          St. Francis of Assisi is often credited with saying, &ldquo;Preach
          the Gospel at all times; use words when necessary.&rdquo; Roger is
          the kind of guy where words aren&apos;t necessary. He carries himself
          differently. No arrogance, no superiority, just pure, honest
          compassion. Even when his patience is wearing thin, his composure
          holds. I eventually found the courage to ask him about his faith.
          Since then, I&apos;ve spent hours asking him hard-hitting questions
          about everything from forgiveness to how we as Christians should
          navigate the social and cultural issues of our time.
        </p>
        <p>
          Jesus had been there all along. Through every excuse, every
          distraction, every misguided prayer. On March 12, 2025, I made a
          decision to deeply study the Bible, to know the word of God, and to
          be a better Christian. That was the day I found Him.
        </p>

        <Image
          src="/baptism.webp"
          alt="Ryan's baptism, June 2025"
          width={768}
          height={768}
          sizes="(max-width: 768px) 100vw, 768px"
          className="rounded-lg"
        />

        <p>
          In June of 2025, I was baptized alongside my wife and step-dad. The
          clarity I&apos;ve experienced since that day has been incredible. My
          wife and I can look back and see God&apos;s will being done,
          how He&apos;s been protecting and caring for us all along. We&apos;re
          so thankful to be part of a community that shares our values.
        </p>

        <h2>Full Circle</h2>
        <p>
          Finding Christ brought the name into focus. I had always been drawn
          to this idea of a &ldquo;simulated reality,&rdquo; but I had it
          backwards. This <em>is</em> a simulated reality. Not the kind
          built by machines or code, but one authored by God Himself. Every
          moment of this life has been pre-built and set into motion by Him.
          It&apos;s His design, His will. And the name I thought I chose on a
          whim? God had been steering me toward it long before I ever
          understood why.
        </p>

        <h2>Other Interests</h2>
        <ul>
          <li>Homelabbing. Running TrueNAS on a mini-PC and tinkering with it.</li>
          <li>Home improvement. The never-ending list.</li>
          <li>Bowling. I used to average around 180-200 when I bowled in a league about 15 years ago.</li>
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
          <li><strong>OS:</strong> Linux (btw). Ubuntu to Debian back to Ubuntu. Would love to be an Arch bro but I&apos;m not sure I&apos;m cool enough. Dual booting Windows 11 for Rocket League.</li>
        </ul>

        <h2>Go-To Orders</h2>
        <p>I have a go-to order at every restaurant. Name anywhere and I could tell you this very moment what I&apos;d be ordering.</p>
        <ul>
          <li><strong>Taco Bell:</strong> Chicken Quesadilla combo</li>
          <li><strong>Domino&apos;s:</strong> Pepperoni, sausage, and jalape&ntilde;os</li>
          <li><strong>Subway:</strong> Italian BMT on Italian Herbs &amp; Cheese, pepperjack, tomatoes, honey mustard</li>
          <li><strong>Burger King:</strong> Double Whopper with cheese, no lettuce, no pickle, no onion, cut in half with &ldquo;halfsies&rdquo; (half fries, half onion rings)</li>
        </ul>

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
