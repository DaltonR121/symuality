"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/now", label: "Now" },
  { href: "/projects", label: "Projects" },
  { href: "/posts", label: "Writing" },
  { href: "/about", label: "About" },
];

/**
 * Sitewide top navigation. Logo links home with an accessible label (the
 * image itself is decorative). Renders a horizontal link row on `sm+` and a
 * hamburger-gated vertical menu on mobile. The active route is exposed to
 * assistive tech via `aria-current="page"`.
 */
export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  /** True when the given nav link matches the current route, including nested paths. */
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="border-b border-stone-200 dark:border-stone-800">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Symuality home"
          className="flex items-center rounded-sm py-1 -my-1"
        >
          <Image
            src="/sym-logo.png"
            alt=""
            width={175}
            height={50}
            sizes="175px"
            className="h-10 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-sm py-2 -my-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-stone-900 dark:text-stone-100"
                    : "text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-stone-600 hover:bg-stone-100 hover:text-stone-900 sm:hidden dark:text-stone-400 dark:hover:bg-stone-900 dark:hover:text-stone-100"
          aria-controls="mobile-nav"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-stone-200 sm:hidden dark:border-stone-800"
        >
          <div className="mx-auto flex max-w-3xl flex-col px-4 py-2 sm:px-6 lg:px-8">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-sm px-2 py-3 text-base font-medium ${
                    active
                      ? "text-stone-900 dark:text-stone-100"
                      : "text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
