import Link from "next/link";

type CTAButtonProps = {
  href: string;
  label: string;
  size?: "lg" | "md";
  className?: string;
};

const sizes = {
  lg: "text-[clamp(17px,1.35vw,20px)] px-9 py-[22px] gap-3.5",
  md: "text-[clamp(16px,1.3vw,19px)] px-[34px] py-5 gap-3.5",
};

/** Primary orange pill CTA — used for the hero and strategy session book-a-session actions. */
export default function CTAButton({ href, label, size = "lg", className = "" }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`group ease-bh inline-flex items-center rounded-full bg-bh-orange font-grotesk font-bold text-white no-underline shadow-[0_20px_38px_-14px_rgba(255,106,61,.75)] transition-[transform,box-shadow] duration-[220ms] hover:-translate-y-[3px] hover:shadow-[0_28px_48px_-14px_rgba(255,106,61,.85)] active:translate-y-[-1px] active:scale-[.985] ${sizes[size]} ${className}`}
    >
      {label}
      <span
        aria-hidden="true"
        className="ease-bh font-mono-bh inline-block transition-transform duration-[250ms] group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
