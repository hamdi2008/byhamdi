import Image from "next/image";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import TextLink from "@/components/ui/TextLink";
import MarkMNMuslim from "@/components/products/MarkMNMuslim";
import MarkMNHalal from "@/components/products/MarkMNHalal";
import MarkMNServices from "@/components/products/MarkMNServices";
import MarkLifeInViews from "@/components/products/MarkLifeInViews";
import { productsSection, type ProductId } from "@/content/home";
import type { ReactNode } from "react";

const marks: Record<ProductId, ReactNode> = {
  lifeinviews: <MarkLifeInViews />,
  mnsomalis: <MarkMNServices />,
  mnmuslim: <MarkMNMuslim />,
  mnhalal: <MarkMNHalal />,
};

const medallionTint = {
  orange: "bg-[radial-gradient(circle_at_35%_30%,#fffdf7,#ffd9c9)]",
  purple: "bg-[radial-gradient(circle_at_35%_30%,#fffdf7,#e7dcf5)]",
};

export default function ProductsSection() {
  const { featured } = productsSection;
  return (
    <Section id="bh-products" tone="band" innerClassName="flex flex-col gap-[clamp(28px,4vw,52px)]">
      <h2 className="m-0 text-[clamp(36px,5vw,66px)] leading-[.94] font-bold tracking-[-.05em]">
        <AccentText {...productsSection.heading} color="purple" />
      </h2>
      <div className="flex flex-col gap-[clamp(10px,1.5vw,20px)]">
        <article id={featured.id} className="grid grid-cols-1 items-center gap-x-[clamp(28px,4vw,56px)] gap-y-6 rounded-[28px] border border-bh-hairline bg-bh-card p-[clamp(26px,4vw,56px)] shadow-[0_34px_66px_-36px_rgba(94,47,176,.3)] md:grid-cols-[auto_minmax(0,1fr)] lg:grid-cols-[auto_minmax(0,1fr)_auto]">
          <div aria-hidden="true" className="h-28 w-28 flex-none overflow-hidden rounded-full border border-bh-hairline md:h-[148px] md:w-[148px]">
            <Image src={featured.logo} alt="" width={148} height={148} unoptimized className="block h-full w-full" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="m-0 text-[clamp(40px,5.4vw,68px)] leading-[.95] font-bold tracking-[-.05em] text-bh-ink-purple">{featured.name}</h3>
            <p className="m-0 text-[clamp(24px,2.6vw,34px)] leading-[1.1]">
              <AccentText accent={featured.tagline} color="orange" />
            </p>
            <p className="m-0 mt-1 max-w-[48ch] text-[17px] leading-[1.6] font-medium text-bh-body">{featured.description}</p>
          </div>
          <Button href={featured.href} label={`Visit ${featured.name}`} variant="secondary" size="md" className="justify-self-start whitespace-nowrap max-sm:w-full md:col-start-2 lg:col-start-3 lg:row-start-1" />
        </article>
        <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {productsSection.items.map((item) => (
            <div key={item.id} id={item.id} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 border-b border-[#e0d6c2] py-[clamp(22px,3vw,36px)]">
              <div aria-hidden="true" className={`flex h-[76px] w-[76px] flex-none items-center justify-center overflow-hidden rounded-full border border-bh-hairline shadow-[inset_0_1px_0_rgba(255,255,255,.5)] ${medallionTint[item.medallionTint]}`}>
                <div className="relative h-[88px] w-[88px] flex-none scale-[.68]">{marks[item.id]}</div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="m-0 text-[clamp(26px,2.8vw,36px)] leading-none font-bold tracking-[-.04em]">{item.name}</h3>
                <p className="m-0 max-w-[42ch] text-base leading-[1.55] font-medium text-bh-body">{item.description}</p>
                <TextLink href={item.href} color={item.accent} ariaLabel={`Visit ${item.name}`} className="mt-1 self-start pb-0.5 text-[15px]">
                  Visit ↗
                </TextLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
