"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/now", label: "Now" },
  { href: "/projects", label: "Projects" },
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-stone-200 dark:border-stone-800">
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
        <div className="flex items-center gap-6">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-stone-900 dark:text-stone-100"
                    : "text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
