import AccentText from "@/components/ui/AccentText";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";
import Eyebrow from "@/components/ui/Eyebrow";
import { IconCheck } from "@/components/icons/ChannelIcons";
import { vibeCodingHelp } from "@/content/home";

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

export default function VibeCodingHelpSection() {
  return (
    <section
      id="book"
      className="relative z-[1] overflow-hidden px-6 pt-[70px] pb-21 font-grotesk text-bh-ink sm:px-[52px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(250,246,238,.6),rgba(250,246,238,.3)_34%,rgba(250,246,238,.3)_66%,rgba(250,246,238,.6))]"
      />

      <div className="relative z-[1] mx-auto grid max-w-[1180px] grid-cols-[1.02fr_.98fr] items-center gap-[72px] max-[860px]:grid-cols-1 max-[860px]:gap-10">
        <Reveal>
          <h2 className="m-0 text-[clamp(34px,4.2vw,62px)] leading-[.96] font-bold tracking-[-.05em]">
            <AccentText before={vibeCodingHelp.heading.before} accent={vibeCodingHelp.heading.accent} after={vibeCodingHelp.heading.after} color="purple" />
          </h2>
          <p className="mt-6 max-w-[24ch] text-[clamp(19px,1.9vw,26px)] leading-[1.28] font-semibold tracking-[-.02em] text-bh-ink-purple">
            {vibeCodingHelp.intro}
          </p>
          {vibeCodingHelp.body.map((paragraph, i) => (
            <p
              key={paragraph}
              className={`max-w-[46ch] text-[clamp(16px,1.35vw,19px)] leading-[1.6] font-medium text-bh-body ${i === 0 ? "mt-[18px]" : "mt-3.5"}`}
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-5 text-[clamp(18px,1.6vw,22px)] font-bold tracking-[-.01em] text-bh-ink-purple">
            {vibeCodingHelp.price.amount} <span className="font-normal text-bh-faint">·</span> {vibeCodingHelp.price.duration}
          </p>
          <CTAButton href={vibeCodingHelp.cta.href} label={vibeCodingHelp.cta.label} size="md" className="mt-6" />
          <p className="mt-3 max-w-[38ch] text-sm leading-[1.5] font-medium text-bh-muted">
            {vibeCodingHelp.helperText}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-3xl border border-bh-hairline bg-bh-card/62 p-[clamp(28px,3vw,40px)] shadow-[0_34px_66px_-36px_rgba(94,47,176,.3)]">
            <Eyebrow>{vibeCodingHelp.panelEyebrow}</Eyebrow>
            <div className="mt-[22px] flex flex-col">
              {vibeCodingHelp.checklist.map((row, i) => (
                <div
                  key={row.title}
                  className={`ease-bh flex items-start gap-4 py-3.5 transition-transform duration-[250ms] hover:translate-x-1.5 ${i > 0 ? "border-t border-[#f0e9da]" : ""}`}
                >
                  <span
                    className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-[10px]"
                    style={chipBg[row.accent]}
                  >
                    <IconCheck />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[clamp(16px,1.4vw,20px)] leading-[1.25] font-semibold tracking-[-.02em] text-bh-ink-purple">
                      {row.title}
                    </span>
                    <span className="text-sm leading-[1.45] font-medium text-bh-muted">{row.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
