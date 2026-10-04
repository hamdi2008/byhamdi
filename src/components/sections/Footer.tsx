import Link from "next/link";
import Wordmark from "@/components/ui/Wordmark";
import MonoTagline from "@/components/ui/MonoTagline";
import { footerNav, footer } from "@/content/site";
import { externalLinkProps } from "@/lib/links";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-[1] border-t border-bh-hairline-alt bg-bh-band px-[clamp(20px,4vw,52px)] pt-[clamp(48px,6vw,72px)] pb-8 font-grotesk text-bh-ink">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10">
        {/* Two columns on mobile; from md the four link columns spread edge to edge. */}
        <div className="grid grid-cols-2 gap-x-7 gap-y-8 md:grid-cols-[repeat(4,auto)] md:justify-between">
          <div className="col-span-full flex flex-wrap items-end justify-between gap-x-10 gap-y-4 border-b border-bh-hairline-alt pb-8">
            <div className="flex flex-col gap-3">
              <Wordmark size="footer" />
              <p className="m-0 max-w-[34ch] text-[15px] leading-[1.5] font-medium text-[#5a544a]">{footer.description}</p>
            </div>
            <MonoTagline className="text-xs tracking-[.2em] text-bh-muted" />
          </div>
          <FooterColumn title="Services" links={footerNav.services} />
          <FooterColumn title="Products" links={footerNav.products} />
          <FooterColumn title="Explore" links={footerNav.explore} />
          <FooterColumn title="Connect" links={footerNav.connect} />
        </div>
        <div className="font-mono-bh flex flex-wrap justify-between gap-3 border-t border-bh-hairline-alt pt-5 text-xs tracking-[.06em] text-bh-muted">
          <span>{footer.copyright}</span>
          <span>
            {footer.madeIn} <span className="text-bh-orange">◉</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono-bh mb-2 text-[11px] tracking-[.2em] text-bh-muted uppercase">{title}</span>
      {links.map((link) => (
        <Link key={link.label} href={link.href} {...externalLinkProps(link.href)} className="py-1.5 text-[15px] font-semibold text-[#2a2620] no-underline transition-colors duration-200 hover:text-bh-orange">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
