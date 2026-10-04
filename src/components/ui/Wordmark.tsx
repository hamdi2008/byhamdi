import Link from "next/link";
import { brand } from "@/content/site";

type WordmarkSize = "nav" | "navMobile" | "footer" | "inline";

const sizes: Record<WordmarkSize, { by: string; name: string; gap: string }> = {
  nav: { by: "text-[28px]", name: "text-[25px]", gap: "gap-[7px]" },
  navMobile: { by: "text-[25px]", name: "text-[22px]", gap: "gap-1.5" },
  footer: { by: "text-[30px]", name: "text-[27px]", gap: "gap-[7px]" },
  inline: { by: "text-2xl", name: "text-[21px]", gap: "gap-1.5" },
};

/** "By Hamdi." wordmark. Links home unless `asLink` is false. */
export default function Wordmark({
  size = "nav",
  asLink = true,
  className = "",
}: {
  size?: WordmarkSize;
  asLink?: boolean;
  className?: string;
}) {
  const s = sizes[size];
  const mark = (
    <>
      <span className={`font-serif-accent font-normal italic ${s.by} text-bh-purple`}>{brand.wordmarkPrefix}</span>
      <span className={`font-grotesk font-bold tracking-[-.055em] ${s.name} text-bh-ink-purple`}>{brand.wordmarkName}</span>
      <span className={`font-grotesk -ml-1 font-bold ${s.name} text-bh-orange`}>.</span>
    </>
  );
  const base = `inline-flex items-baseline ${s.gap} ${className}`;
  if (!asLink) return <div className={base}>{mark}</div>;
  return (
    <Link href="/" aria-label="By Hamdi — home" className={`${base} no-underline`}>
      {mark}
    </Link>
  );
}
