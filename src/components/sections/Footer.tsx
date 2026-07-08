import Link from "next/link";
import Wordmark from "@/components/ui/Wordmark";
import MonoTagline from "@/components/ui/MonoTagline";
import { brand, footerNav, footer } from "@/content/site";
import { externalLinkProps } from "@/lib/links";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-[1] overflow-hidden px-[52px] pt-16 pb-10 font-grotesk text-bh-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(250,246,238,.5),rgba(250,246,238,.82)_60%,#f4eee2)]"
      />

      <div className="relative z-[1] mx-auto max-w-[1180px]">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 py-2 pb-10 max-[860px]:grid-cols-2">
          <div>
            <Wordmark size="footer" />
            <p className="mt-4 max-w-[26ch] text-sm leading-[1.5] font-medium text-bh-muted">
              {brand.description}
            </p>
            <MonoTagline className="mt-4 text-[11px] tracking-[.2em] text-bh-faint" />
          </div>

          <FooterColumn title="Explore" links={footerNav.explore} hoverColor="orange" />
          <FooterColumn title="Products" links={footerNav.products} hoverColor="purple" />
          <FooterColumn title="Connect" links={footerNav.connect} hoverColor="orange" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-bh-hairline-alt pt-[22px]">
          <span className="font-mono-bh text-xs tracking-[.06em] text-bh-faint">{footer.copyright}</span>
          <span className="font-mono-bh text-xs tracking-[.06em] text-bh-faint">
            {footer.madeIn} <span className="text-bh-orange">◉</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  hoverColor,
}: {
  title: string;
  links: { label: string; href: string }[];
  hoverColor: "orange" | "purple";
}) {
  const hoverClass = hoverColor === "orange" ? "hover:text-bh-orange" : "hover:text-bh-purple";
  return (
    <div className="flex flex-col gap-3">
      <div className="font-mono-bh mb-0.5 text-[11px] tracking-[.2em] text-bh-faint uppercase">{title}</div>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          {...externalLinkProps(link.href)}
          className={`font-grotesk text-[15px] font-semibold text-[#2a2620] no-underline transition-colors duration-200 ${hoverClass}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
