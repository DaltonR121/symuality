import Nav from "@/components/nav";

/**
 * Shared shell for every public route: skip link, sitewide nav, the `<main>`
 * landmark (targeted by the skip link), and the footer. Keystatic admin
 * routes live outside this layout and don't inherit it.
 */
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="flex-1">
        {children}
      </main>
      <footer className="border-t border-border py-8 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-subtle">
            &copy; {new Date().getFullYear()} Symuality
          </p>
          <p className="mt-3 text-xs text-subtle">
            A personal homepage. Not a brand. Not a funnel. Just a guy on the internet.
          </p>
        </div>
      </footer>
    </div>
  );
}
