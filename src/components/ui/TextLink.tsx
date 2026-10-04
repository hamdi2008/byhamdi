import Link from "next/link";
import type { ReactNode } from "react";
import { externalLinkProps } from "@/lib/links";

const colors = {
  orange: "text-bh-orange-deep",
  purple: "text-bh-purple",
};

/** Tertiary underlined link — product outlinks, inline mentions, directory links. */
export default function TextLink({
  href,
  children,
  color = "purple",
  ariaLabel,
  className = "",
}: {
  href: string;
  children: ReactNode;
  color?: keyof typeof colors;
  ariaLabel?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      {...externalLinkProps(href)}
      className={`border-b-[1.5px] border-current font-bold no-underline transition-colors duration-200 hover:text-bh-orange ${colors[color]} ${className}`}
    >
      {children}
    </Link>
  );
}
