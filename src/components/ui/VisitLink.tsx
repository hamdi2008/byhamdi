import Link from "next/link";

type Accent = "orange" | "purple";

const borderHover: Record<Accent, string> = {
  orange: "hover:border-bh-orange hover:text-bh-orange",
  purple: "hover:border-bh-purple hover:text-bh-purple",
};

const arrowColor: Record<Accent, string> = {
  orange: "text-bh-orange",
  purple: "text-bh-purple",
};

/** "Visit →" underline link used on each product row. */
export default function VisitLink({
  href,
  label,
  ariaLabel,
  accent,
}: {
  href: string;
  label: string;
  ariaLabel: string;
  accent: Accent;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className={`group mt-[22px] inline-flex items-center gap-2.5 border-b-2 border-bh-ink/[.14] pb-1 font-grotesk text-base font-semibold text-bh-ink no-underline transition-colors duration-300 ${borderHover[accent]}`}
    >
      {label}
      <span
        aria-hidden="true"
        className={`ease-bh font-mono-bh inline-block transition-transform duration-300 group-hover:translate-x-1.5 ${arrowColor[accent]}`}
      >
        →
      </span>
    </Link>
  );
}
