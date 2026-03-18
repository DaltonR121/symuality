import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things Ryan has built — software, websites, and open source tools.",
};

const projects = [
  {
    name: "Mosaic Ridge",
    description: "Web development agency serving the Shenandoah Valley. Marketing site, admin CRM, and client websites.",
    url: "https://mosaicridge.com",
    tag: "Business",
  },
  {
    name: "stint",
    description: "An open source developer tool.",
    url: "https://github.com/DaltonR121/stint",
    tag: "Open Source",
  },
  {
    name: "Symuality",
    description: "This site. A personal homepage built with Next.js and Keystatic.",
    url: "https://github.com/DaltonR121/symuality",
    tag: "Personal",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
        Projects
      </h1>
      <p className="mt-2 text-stone-600 dark:text-stone-400">
        Things I&apos;ve built, am building, or maintain.
      </p>

      <div className="mt-8 space-y-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-stone-200 p-5 transition-colors hover:border-stone-300 hover:bg-stone-50 dark:border-stone-800 dark:hover:border-stone-700 dark:hover:bg-stone-900"
          >
            <div className="flex items-start justify-between">
              <h2 className="font-semibold text-stone-900 group-hover:text-stone-700 dark:text-stone-100 dark:group-hover:text-stone-300">
                {project.name}
              </h2>
              <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-400">
                {project.tag}
              </span>
            </div>
            <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
