import AccentText from "@/components/ui/AccentText";
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
  return (
    <Section id="bh-products" tone="band" innerClassName="flex flex-col gap-[clamp(28px,4vw,52px)]">
      <div className="flex flex-wrap items-end justify-between gap-x-[60px] gap-y-4">
        <h2 className="m-0 text-[clamp(36px,5vw,66px)] leading-[.94] font-bold tracking-[-.05em]">
          <AccentText {...productsSection.heading} color="purple" />
        </h2>
        <p className="m-0 text-[clamp(16px,1.4vw,19px)] leading-[1.4] font-medium text-bh-body">{productsSection.supporting}</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-x-12 border-t border-[#e0d6c2]">
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
    </Section>
  );
}
