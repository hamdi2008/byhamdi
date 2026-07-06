import Link from "next/link";
import { brand } from "@/content/site";

type WordmarkSize = "nav" | "footer" | "about";

const sizes: Record<WordmarkSize, { by: string; name: string }> = {
  nav: { by: "text-[29px]", name: "text-[26px]" },
  footer: { by: "text-[30px]", name: "text-[27px]" },
  about: { by: "text-[26px]", name: "text-[23px]" },
};

export default function Wordmark({
  size = "nav",
  className = "",
}: {
  size?: WordmarkSize;
  className?: string;
}) {
  const s = sizes[size];
  return (
    <Link
      href="#top"
      aria-label="By Hamdi — home"
      className={`group relative inline-flex items-baseline gap-2 pb-1.5 no-underline ${className}`}
    >
      <span className={`font-serif-accent font-normal italic ${s.by} text-bh-purple`}>
        {brand.wordmarkPrefix}
      </span>
      <span className={`font-grotesk font-bold tracking-[-.055em] ${s.name} text-bh-ink-purple`}>
        {brand.wordmarkName}
      </span>
      <span className={`font-grotesk font-bold -ml-1 ${s.name} text-bh-orange`}>.</span>
      <span
        aria-hidden="true"
        className="ease-bh absolute right-2 bottom-0 left-0 h-0.5 origin-right scale-x-0 bg-gradient-to-r from-bh-orange to-bh-purple transition-transform duration-[420ms] group-hover:origin-left group-hover:scale-x-100"
      />
    </Link>
  );
}
