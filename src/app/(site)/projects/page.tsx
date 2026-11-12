import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things Ryan has built. Software, websites, and open source tools.",
};

const projects = [
  {
    name: "Mosaic Ridge",
    description:
      "My web development agency in the Shenandoah Valley. I build and maintain websites for small businesses, with a personal touch instead of a ticket system.",
    url: "https://mosaicridge.com",
    tag: "Business",
  },
  {
    name: "Risky Rides",
    description:
      "Buy, sell, and trade cheap project cars and parts. Everything is listed under $5,000.",
    url: "https://www.riskyrides.com",
    tag: "Side Project",
  },
  {
    name: "RyanDalton.dev",
    description: "My professional portfolio site.",
    url: "https://ryandalton.dev",
    tag: "Personal",
  },
  {
    name: "stint",
    description:
      "An open source developer tool I started because I wanted to solve a workflow problem I kept hitting. Early days, public on GitHub, not ready for daily use yet.",
    url: "https://github.com/DaltonR121/stint",
    tag: "Open Source",
  },
  {
    name: "Symuality",
    description:
      "This site. A personal homepage built with Next.js and Keystatic.",
    url: "https://github.com/DaltonR121/symuality",
    tag: "Personal",
  },
];

/** Index of projects worth linking to; each card is a single external link. */
export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Projects
      </h1>
      <p className="mt-2 text-muted">
        Things I&apos;ve built, am building, or maintain.
      </p>

      <div className="mt-8 space-y-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} (${project.tag}), opens in a new tab`}
            className="group block rounded-lg border border-border p-5 transition-colors hover:border-border-strong hover:bg-surface-hover"
          >
            <div className="flex items-start justify-between">
              <h2 className="font-semibold text-foreground group-hover:text-muted-foreground">
                {project.name}
              </h2>
              <span
                aria-hidden="true"
                className="rounded-full bg-chip-bg px-2.5 py-0.5 text-xs font-medium text-chip-fg"
              >
                {project.tag}
              </span>
            </div>
            <p className="mt-1 text-sm text-subtle">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
