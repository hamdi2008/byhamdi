import AccentText from "@/components/ui/AccentText";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Wordmark from "@/components/ui/Wordmark";
import MonoTagline from "@/components/ui/MonoTagline";
import { about } from "@/content/home";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-[1] overflow-hidden px-[52px] pt-[70px] pb-21 font-grotesk text-bh-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(250,246,238,.6),rgba(250,246,238,.32)_40%,rgba(250,246,238,.32)_62%,rgba(250,246,238,.6))]"
      />

      <div className="relative z-[1] mx-auto max-w-[1180px]">
        <Reveal className="mx-auto max-w-[920px]">
          <div className="relative rounded-[32px] border border-bh-hairline bg-bh-card/55 p-[clamp(38px,5vw,72px)] shadow-[0_44px_90px_-50px_rgba(94,47,176,.28)]">
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[clamp(40px,5.4vw,76px)] leading-[.95] font-bold tracking-[-.05em]">
              {about.heading}
              <span className="text-bh-orange">.</span>
            </h2>
            <p className="mt-7 max-w-[20ch] text-[clamp(22px,2.5vw,34px)] leading-[1.26] font-medium tracking-[-.02em] text-bh-ink-purple">
              <AccentText before={about.lead.before} accent={about.lead.accent} after={about.lead.after} color="orange" />
            </p>
            <div className="mt-8 grid grid-cols-2 gap-[clamp(24px,3vw,44px)] max-[860px]:grid-cols-1">
              {about.paragraphs.map((p) => (
                <p key={p} className="m-0 text-[clamp(16px,1.35vw,19px)] leading-[1.62] font-medium text-[#5a544a]">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-[38px] flex flex-wrap items-center justify-between gap-4 border-t border-bh-hairline pt-[26px]">
              <Wordmark size="about" />
              <MonoTagline className="text-xs tracking-[.14em] text-bh-faint" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
