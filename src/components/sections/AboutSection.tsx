import AccentText from "@/components/ui/AccentText";
import Eyebrow from "@/components/ui/Eyebrow";
import MonoTagline from "@/components/ui/MonoTagline";
import Section from "@/components/ui/Section";
import { about } from "@/content/home";

export default function AboutSection() {
  return (
    <Section id="about" innerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(24px,5vw,72px)]">
      <div className="flex flex-col gap-4">
        <Eyebrow>{about.eyebrow}</Eyebrow>
        <h2 className="m-0 text-[clamp(40px,5.6vw,76px)] leading-[.95] font-bold tracking-[-.05em]">
          {about.heading}
          <span className="text-bh-orange">.</span>
        </h2>
        <p className="mt-2 mb-0 max-w-[20ch] text-[clamp(22px,2.5vw,32px)] leading-[1.25] font-medium tracking-[-.02em] text-bh-ink-purple">
          <AccentText {...about.lead} color="orange" />
        </p>
      </div>
      <div className="flex flex-col gap-[18px] pt-[clamp(0px,3vw,40px)]">
        {about.paragraphs.map((p) => (
          <p key={p} className="m-0 text-[clamp(16px,1.4vw,19px)] leading-[1.65] font-medium text-bh-body">
            {p}
          </p>
        ))}
        <MonoTagline className="mt-1.5 border-t border-bh-hairline pt-[18px] text-xs tracking-[.14em] text-bh-muted" />
      </div>
    </Section>
  );
}
