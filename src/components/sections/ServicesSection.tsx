import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";
import { aiSessions, sessionOptions } from "@/content/ai-sessions";
import { services } from "@/content/home";

export default function ServicesSection() {
  return (
    <Section id="services">
      <article className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-[clamp(28px,5vw,72px)] rounded-[28px] bg-bh-ink-purple p-[clamp(28px,4.4vw,60px)] text-bh-bg shadow-[0_40px_70px_-40px_rgba(36,26,51,.7)]">
        <div className="flex flex-col gap-[18px]">
          <Eyebrow tone="dark">{services.eyebrow}</Eyebrow>
          <h2 className="m-0 max-w-[16ch] text-[clamp(32px,4vw,52px)] leading-[.98] font-bold tracking-[-.045em]">{aiSessions.headline}</h2>
          <p className="m-0 max-w-[46ch] text-[17px] leading-[1.6] font-medium text-[#d9d1e6]">{services.description}</p>
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <Button href={aiSessions.requestUrl} label={aiSessions.requestLabel} size="md" className="max-sm:w-full" />
            <Button href={services.learnMore.href} label={services.learnMore.label} variant="secondary" size="md" className="max-sm:w-full" />
          </div>
        </div>
        <ul className="m-0 flex list-none flex-col p-0">
          {sessionOptions.map((option, i) => (
            <li key={option.id} className={`flex items-center justify-between gap-5 py-5 ${i > 0 ? "border-t border-white/15" : ""}`}>
              <span className="text-[clamp(20px,2.2vw,28px)] leading-[1.15] font-bold tracking-[-.03em]">{option.name}</span>
              <span className="text-[clamp(34px,3.6vw,48px)] leading-none font-bold tracking-[-.05em] text-bh-orange-light">${option.price}</span>
            </li>
          ))}
        </ul>
      </article>
    </Section>
  );
}
