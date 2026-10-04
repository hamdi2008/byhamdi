import Link from "next/link";
import { externalLinkProps, isExternalHref } from "@/lib/links";

type ButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  size?: keyof typeof sizes;
  className?: string;
};

// Both variants carry a 1.5px border so primary and secondary pills line up at the same size.
const variants = {
  primary: "border-[1.5px] border-transparent bg-bh-cta text-white shadow-[0_18px_34px_-16px_rgba(239,90,43,.8)] hover:text-white",
  secondary: "border-[1.5px] border-bh-purple bg-bh-card text-bh-purple hover:text-bh-purple",
};

const sizes = {
  /** Service cards. */
  md: "px-[26px] py-[15px] text-base",
  /** Homepage hero pair. */
  hero: "px-8 py-[18px] text-[clamp(16px,1.4vw,19px)]",
  /** Business Presence Review form CTAs. */
  lg: "min-h-[52px] px-[30px] py-[18px] text-[clamp(16px,1.4vw,18px)]",
  /** Vibe Coding Help request CTAs. */
  xl: "min-h-[52px] px-9 py-[18px] text-[clamp(17px,1.5vw,19px)]",
};

/**
 * Pill CTA. Primary is the page's main action (one per viewport); secondary is the
 * alternate path. External destinations open in a new tab and get a ↗ instead of →.
 */
export default function Button({ href, label, variant = "primary", size = "lg", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      {...externalLinkProps(href)}
      className={`ease-bh inline-flex items-center justify-center gap-3 rounded-full text-center font-grotesk font-bold no-underline transition-transform duration-[220ms] hover:-translate-y-0.5 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label}
      <span aria-hidden="true" className="font-mono-bh">
        {isExternalHref(href) ? "↗" : "→"}
      </span>
    </Link>
  );
}
