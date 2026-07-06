import Link from "next/link";

/** Purple outline pill used in the nav — fills solid purple on hover. */
export default function ContactButton({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group ease-bh inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-bh-purple/50 bg-white px-6 py-[11px] font-grotesk text-[15px] font-semibold text-bh-purple-deep no-underline shadow-[0_10px_22px_-12px_rgba(94,47,176,.55)] transition-[transform,box-shadow,background-color,color,border-color] duration-[220ms] hover:-translate-y-0.5 hover:border-bh-purple hover:bg-bh-purple hover:text-white hover:shadow-[0_16px_32px_-12px_rgba(94,47,176,.72)] active:translate-y-[-1px] active:scale-[.985] ${className}`}
    >
      {label}
      <span
        aria-hidden="true"
        className="ease-bh font-mono-bh inline-block text-[13px] transition-transform duration-[250ms] group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
