import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

/**
 * Renders an `<a target="_blank">` with the security + accessibility defaults
 * this site applies to every outbound link: `rel="noopener noreferrer"` to
 * close tab-nabbing and an `sr-only` "opens in a new tab" hint for screen
 * reader users. `className` is forwarded so callers can theme the link.
 */
export function ExternalLink({ href, children, className, ...rest }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
