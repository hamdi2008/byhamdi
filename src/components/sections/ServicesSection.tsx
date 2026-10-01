import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const services = [
  {
    eyebrow: "For AI builders",
    title: "Vibe Coding Help",
    description: "Built something with AI and got stuck? Get 1-on-1 help getting your AI-built product working and live.",
    meta: "$99 · 60–90 minutes",
    label: "Request Help",
    href: "/vibe-coding-help",
  },
  {
    eyebrow: "For businesses",
    title: "Digital Presence & AI Readiness",
    description: "Is your business showing up correctly online? I help businesses fix problems across their website and online presence, improve their search foundation, and prepare for discovery through AI.",
    meta: "Start with a free Business Presence Review",
    label: "Learn More",
    href: "/business",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-[1] px-6 pt-[70px] pb-21 font-grotesk text-bh-ink sm:px-[52px]">
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-5 text-[clamp(34px,4.2vw,62px)] leading-[.96] font-bold tracking-[-.05em]">Ways I Can Help.</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 100}>
              <article className="h-full rounded-3xl border border-bh-hairline bg-bh-card/62 p-[clamp(28px,3vw,40px)] shadow-[0_34px_66px_-40px_rgba(94,47,176,.25)]">
                <Eyebrow>{service.eyebrow}</Eyebrow>
                <h3 className="mt-5 text-[clamp(26px,3vw,38px)] leading-[1] font-bold tracking-[-.04em] text-bh-ink-purple">{service.title}</h3>
                <p className="mt-5 max-w-[48ch] text-[17px] leading-[1.65] font-medium text-bh-body">{service.description}</p>
                <p className="mt-5 text-sm font-bold text-bh-muted">{service.meta}</p>
                <Link href={service.href} className="mt-6 inline-block rounded-full bg-bh-purple px-6 py-3 text-sm font-bold text-white no-underline transition-transform duration-200 hover:-translate-y-0.5">{service.label} →</Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
