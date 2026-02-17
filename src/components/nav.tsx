import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/sym-logo.png"
            alt="Symuality"
            width={175}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/about"
            className="text-base font-semibold uppercase tracking-wide text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-base font-semibold uppercase tracking-wide text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Posts
          </Link>
        </div>
      </div>
    </nav>
  );
}
