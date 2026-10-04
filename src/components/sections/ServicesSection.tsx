import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";
import { services } from "@/content/home";

const cardTitle = "m-0 text-[clamp(30px,3.6vw,46px)] leading-[.98] font-bold tracking-[-.045em]";
const cardBody = "m-0 text-[17px] leading-[1.65] font-medium";

export default function ServicesSection() {
  const { business, vibe } = services;
  return (
    <Section id="services" innerClassName="flex flex-col gap-[clamp(28px,3.5vw,44px)]">
      <div className="flex flex-col gap-4">
        <Eyebrow>{services.eyebrow}</Eyebrow>
        <h2 className="m-0 text-[clamp(36px,5vw,62px)] leading-[.96] font-bold tracking-[-.05em]">
          <AccentText {...services.heading} color="purple" />
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-[18px]">
        {/* Featured: the business service leads. */}
        <article className="flex flex-col gap-[18px] rounded-[28px] bg-bh-ink-purple p-[clamp(28px,3.6vw,48px)] text-bh-bg shadow-[0_40px_70px_-40px_rgba(36,26,51,.7)]">
          <Eyebrow tone="dark">{business.eyebrow}</Eyebrow>
          <h3 className={`${cardTitle} max-w-[14ch]`}>{business.title}</h3>
          <p className={`${cardBody} max-w-[50ch] text-[#d9d1e6]`}>{business.description}</p>
          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3.5 pt-3">
            <Button href={business.cta.href} label={business.cta.label} size="md" />
            <span className="text-sm font-semibold text-[#c4b9d6]">{business.meta}</span>
          </div>
        </article>
        <article className="flex flex-col gap-[18px] rounded-[28px] border border-bh-hairline bg-bh-card p-[clamp(28px,3.6vw,48px)]">
          <Eyebrow>{vibe.eyebrow}</Eyebrow>
          <h3 className={`${cardTitle} text-bh-ink-purple`}>{vibe.title}</h3>
          <p className={`${cardBody} max-w-[44ch] text-bh-body`}>{vibe.description}</p>
          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3.5 pt-3">
            <Button href={vibe.cta.href} label={vibe.cta.label} variant="secondary" size="md" />
            <span className="text-sm font-bold text-bh-ink-purple">{vibe.meta}</span>
          </div>
        </article>
      </div>
    </Section>
  );
}
