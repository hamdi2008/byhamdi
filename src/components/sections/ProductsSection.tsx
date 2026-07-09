import AccentText from "@/components/ui/AccentText";
import ProductRow from "@/components/products/ProductRow";
import VerticalThread from "@/components/products/VerticalThread";
import MarkMNMuslim from "@/components/products/MarkMNMuslim";
import MarkMNHalal from "@/components/products/MarkMNHalal";
import MarkMNServices from "@/components/products/MarkMNServices";
import { productsSection, type ProductId } from "@/content/home";
import type { ReactNode } from "react";

const marks: Record<ProductId, ReactNode> = {
  mnsomalis: <MarkMNServices />,
  mnmuslim: <MarkMNMuslim />,
  mnhalal: <MarkMNHalal />,
};

export default function ProductsSection() {
  return (
    <section
      id="bh-products"
      className="relative z-[1] overflow-hidden bg-transparent px-6 pt-[88px] pb-24 font-grotesk text-bh-ink sm:px-[52px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(250,246,238,.5),rgba(250,246,238,.26)_30%,rgba(250,246,238,.26)_70%,rgba(250,246,238,.68))]"
      />

      <div className="relative z-[1] mx-auto max-w-[1180px]">
        <div className="mb-[46px] flex flex-wrap items-end justify-between gap-x-[60px] gap-y-[22px]">
          <h2 className="m-0 text-[clamp(38px,4.6vw,72px)] leading-[.94] font-bold tracking-[-.05em]">
            <AccentText before={productsSection.heading.before} accent={productsSection.heading.accent} color="purple" />
          </h2>
          <p className="m-0 mb-1.5 max-w-[24ch] text-[clamp(16px,1.3vw,20px)] leading-[1.4] font-medium text-bh-body">
            {productsSection.supporting}
          </p>
        </div>

        <div className="relative py-[30px] pb-3.5">
          <VerticalThread />
          <div className="relative z-[2] flex flex-col gap-[clamp(64px,7.5vw,120px)]">
            {productsSection.items.map((item, i) => (
              <ProductRow
                key={item.id}
                id={item.id}
                side={item.side}
                delay={i * 120}
                name={item.name}
                plainName={item.plainName}
                description={item.description}
                href={item.href}
                accent={item.accent}
                medallionTint={item.medallionTint}
                mark={marks[item.id]}
                flagship={item.flagship}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
