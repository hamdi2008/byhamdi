import AccentText from "@/components/ui/AccentText";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";
import Eyebrow from "@/components/ui/Eyebrow";
import { IconCheck } from "@/components/icons/ChannelIcons";
import { strategySession } from "@/content/home";

const chipBg: Record<"orange" | "purple", { background: string; boxShadow: string }> = {
  orange: {
    background: "linear-gradient(150deg,#ff8a5c,#ff6a3d)",
    boxShadow: "0 8px 16px -8px rgba(255,106,61,.6)",
  },
  purple: {
    background: "linear-gradient(150deg,#7c3acd,#5e2fb0)",
    boxShadow: "0 8px 16px -8px rgba(94,47,176,.6)",
  },
};

export default function StrategySessionSection() {
  return (
    <section
      id="book"
      className="relative z-[1] overflow-hidden px-[52px] pt-[70px] pb-21 font-grotesk text-bh-ink"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(250,246,238,.6),rgba(250,246,238,.3)_34%,rgba(250,246,238,.3)_66%,rgba(250,246,238,.6))]"
      />

      <div className="relative z-[1] mx-auto grid max-w-[1180px] grid-cols-[1.02fr_.98fr] items-center gap-[72px] max-[860px]:grid-cols-1 max-[860px]:gap-10">
        <Reveal>
          <h2 className="m-0 text-[clamp(34px,4.2vw,62px)] leading-[.96] font-bold tracking-[-.05em]">
            <AccentText before={strategySession.heading.before} accent={strategySession.heading.accent} after={strategySession.heading.after} color="purple" />
          </h2>
          <p className="mt-6 max-w-[22ch] text-[clamp(19px,1.9vw,26px)] leading-[1.28] font-semibold tracking-[-.02em] text-bh-ink-purple">
            {strategySession.intro}
          </p>
          <p className="mt-[18px] max-w-[44ch] text-[clamp(16px,1.35vw,19px)] leading-[1.6] font-medium text-bh-body">
            {strategySession.body}
          </p>
          <CTAButton href={strategySession.cta.href} label={strategySession.cta.label} size="md" className="mt-8" />
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-3xl border border-bh-hairline bg-bh-card/62 p-[clamp(28px,3vw,40px)] shadow-[0_34px_66px_-36px_rgba(94,47,176,.3)]">
            <Eyebrow>{strategySession.panelEyebrow}</Eyebrow>
            <div className="mt-[22px] flex flex-col">
              {strategySession.checklist.map((row, i) => (
                <div
                  key={row.text}
                  className={`ease-bh flex items-center gap-4 py-3.5 transition-transform duration-[250ms] hover:translate-x-1.5 ${i > 0 ? "border-t border-[#f0e9da]" : ""}`}
                >
                  <span
                    className="flex h-8 w-8 flex-none items-center justify-center rounded-[10px]"
                    style={chipBg[row.accent]}
                  >
                    <IconCheck />
                  </span>
                  <span className="text-[clamp(16px,1.4vw,20px)] font-semibold tracking-[-.02em] text-bh-ink-purple">
                    {row.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
