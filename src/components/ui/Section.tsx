import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  /** "band" is the alternate cream band with hairlines top and bottom. */
  tone?: "default" | "band";
  /** "top" drops the top padding when a section continues the one above it. */
  flush?: "top";
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

const toneClass = {
  default: "",
  band: "border-y border-bh-hairline bg-bh-band/85",
};

/** Page section with the shared horizontal gutter, vertical rhythm, and 1180px inner column. */
export default function Section({ id, tone = "default", flush, className = "", innerClassName = "", children }: SectionProps) {
  const padY = flush === "top" ? "pb-[clamp(64px,8vw,112px)]" : "py-[clamp(64px,8vw,112px)]";
  return (
    <section id={id} className={`relative z-[1] px-[clamp(20px,4vw,52px)] ${padY} ${toneClass[tone]} ${className}`}>
      <div className={`mx-auto max-w-[1180px] ${innerClassName}`}>{children}</div>
    </section>
  );
}

/** Standard h2 type used by section headers on every page. */
export const sectionHeading = "m-0 text-[clamp(32px,4.6vw,56px)] leading-none font-bold tracking-[-.045em] text-balance";
