import Nav from "@/components/nav";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-stone-200 py-8 text-center dark:border-stone-800">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-stone-500 dark:text-stone-400">
            &copy; {new Date().getFullYear()} Symuality
          </p>
          <p className="mt-2 text-xs text-stone-400 dark:text-stone-500">
            A personal homepage. Not a brand. Not a funnel. Just a guy on the internet.
          </p>
        </div>
      </footer>
    </div>
  );
}
