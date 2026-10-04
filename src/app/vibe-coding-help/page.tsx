import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Section, { sectionHeading } from "@/components/ui/Section";
import Steps from "@/components/ui/Steps";
import TextLink from "@/components/ui/TextLink";
import { IconCheck } from "@/components/icons/IconCheck";
import { blockers, featuredBlocker, fit, howItWorks, intro, notes, scope, vibeService } from "@/content/vibe";

const pageUrl = "https://byhamdi.com/vibe-coding-help";
const requestUrl = vibeService.requestUrl;

export const metadata: Metadata = {
  title: "Vibe Coding Help Session",
  description:
    "Get hands-on help with an AI-built product when you're stuck on deployment, setup, integrations, features, errors, or figuring out what comes next. $99 for 60–90 minutes.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Vibe Coding Help Session — By Hamdi",
    description:
      "A $99, 60–90 minute hands-on session with Hamdi Mohamud Hassan for people building with Claude, ChatGPT, Cursor, or other AI tools who are stuck on a specific blocker.",
    url: pageUrl,
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}/#service`,
  name: "Vibe Coding Help Session",
  url: pageUrl,
  description:
    vibeService.description,
  provider: {
    "@type": "Person",
    "@id": "https://byhamdi.com/#hamdi",
    name: "Hamdi Mohamud Hassan",
    url: "https://byhamdi.com",
  },
  areaServed: "Online",
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "USD",
    url: pageUrl,
    availability: "https://schema.org/InStock",
  },
  potentialAction: {
    "@type": "ApplyAction",
    name: "Request Vibe Coding Help",
    target: {
      "@type": "EntryPoint",
      urlTemplate: requestUrl,
      actionPlatform: "https://schema.org/DesktopWebPlatform",
    },
    description:
      "Submit what you built and where you are stuck for Hamdi to review. Submitting this request does not charge you or book a session.",
  },
};

const stats = [
  ["$99", "Per session"],
  ["60–90", "Minutes"],
  ["1-on-1", "With Hamdi"],
];

const requestExample = [
  ["What you're building", "A booking app for my studio…"],
  ["What you're building with", "Claude, ChatGPT, Cursor, Supabase, Vercel…"],
  ["Where you're stuck", "It works on my laptop but the deployed version won't log anyone in."],
];

const shipped = [
  { label: "MNHalal", href: "https://www.mnhalal.com/", color: "orange" as const },
  { label: "MNMuslim", href: "https://www.mnmuslim.com/", color: "purple" as const },
  { label: "Life in Views", href: "https://lifeinviews.com", color: "purple" as const },
  { label: "MN Somali", href: "https://www.mnsomalis.com/", color: "purple" as const },
];

const checkChip = {
  orange: "bg-[linear-gradient(150deg,#ff8a5c,#ff6a3d)] shadow-[0_8px_16px_-8px_rgba(255,106,61,.6)]",
  purple: "bg-[linear-gradient(150deg,#7c3acd,#5e2fb0)] shadow-[0_8px_16px_-8px_rgba(94,47,176,.6)]",
};

const proseText = "m-0 text-[clamp(16px,1.4vw,19px)] leading-[1.65] font-medium text-bh-body";

export default function VibeCodingHelpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Nav />
      <main className="relative z-[1] font-grotesk text-bh-ink">
        <section id="vibe-hero" className="px-[clamp(20px,4vw,52px)] pt-[clamp(40px,8vw,104px)] pb-[clamp(56px,7vw,96px)]">
          <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-center gap-[clamp(36px,5vw,80px)]">
            <div className="flex flex-col gap-5">
              <Eyebrow>1-on-1 help</Eyebrow>
              <h1 className="m-0 max-w-[11ch] text-[clamp(46px,7vw,92px)] leading-[.92] font-bold tracking-[-.055em]">
                <AccentText before="Vibe Coding " accent="Help" after="." color="orange" />
              </h1>
              <p className="mt-1 mb-0 max-w-[24ch] text-[clamp(22px,2.3vw,30px)] leading-[1.2] font-semibold tracking-[-.025em] text-bh-ink-purple">{intro.question}</p>
              <p className="m-0 max-w-[46ch] text-[17px] leading-[1.65] font-medium text-bh-body">{intro.body}</p>
              <dl className="m-0 mt-1.5 grid grid-cols-3 items-stretch self-start overflow-hidden rounded-[18px] border border-[#e0d6c2] bg-bh-card max-sm:self-stretch">
                {stats.map(([value, label], i) => (
                  <div key={label} className={`flex min-w-0 flex-col-reverse justify-end gap-0.5 px-[clamp(14px,2vw,22px)] py-3.5 ${i > 0 ? "border-l border-[#e0d6c2]" : ""}`}>
                    <dt className="font-mono-bh text-[10.5px] tracking-[.16em] text-bh-muted uppercase">{label}</dt>
                    <dd className="m-0 text-[clamp(22px,2.4vw,30px)] leading-none font-bold tracking-[-.04em] whitespace-nowrap text-bh-ink-purple">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-1.5 flex flex-col gap-3">
                <Button href={requestUrl} label={vibeService.requestLabel} size="xl" className="self-start max-sm:self-stretch" />
                <p className="m-0 max-w-[44ch] text-sm leading-[1.55] font-medium text-bh-muted">{notes.request}</p>
              </div>
            </div>
            {/* Illustrative preview of what the request form asks — not a live form. */}
            <div className="relative flex flex-col gap-[18px] rounded-[28px] border border-bh-hairline bg-bh-card p-[clamp(24px,3vw,36px)] shadow-[0_34px_66px_-36px_rgba(94,47,176,.3)]">
              <div className="flex items-center justify-between gap-3">
                <Eyebrow>Your request</Eyebrow>
                <span className="font-mono-bh rounded-full bg-[#ece4f7] px-[9px] py-1 text-[10.5px] tracking-[.12em] text-bh-purple uppercase">No charge to send</span>
              </div>
              {requestExample.map(([label, example]) => (
                <div key={label} className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-bh-ink-purple">{label}</span>
                  <div className="min-h-[46px] rounded-xl border-[1.5px] border-dashed border-[#ddd3bf] bg-bh-bg px-3.5 py-3 text-[14.5px] leading-[1.45] font-medium text-[#8a8274]">{example}</div>
                </div>
              ))}
              <p className="m-0 border-t border-bh-hairline pt-3.5 text-sm leading-[1.5] font-medium text-[#5a544a]">I read every request before anything is scheduled.</p>
            </div>
          </div>
        </section>

        <Section id="vibe-blockers" tone="band" innerClassName="flex flex-col gap-[clamp(28px,4vw,44px)]">
          <div className="flex flex-col gap-4">
            <Eyebrow>Common blockers</Eyebrow>
            <h2 className={sectionHeading}>
              <AccentText before="Stuck on something " accent="like this" after="?" color="purple" />
            </h2>
          </div>
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
            <li className="inline-flex items-center gap-2.5 rounded-full border border-bh-ink-purple bg-bh-ink-purple px-5 py-3 text-[clamp(16px,1.5vw,18px)] leading-[1.3] font-bold text-bh-bg">
              <span aria-hidden="true" className="h-[7px] w-[7px] flex-none rounded-full bg-bh-orange-light" />
              “{featuredBlocker}”
            </li>
            {blockers.map((blocker, i) => (
              <li key={blocker} className="inline-flex items-center gap-2.5 rounded-full border border-[#e0d6c2] bg-bh-card px-[18px] py-3 text-[clamp(15px,1.4vw,17px)] leading-[1.3] font-semibold text-bh-ink-purple">
                <span aria-hidden="true" className={`h-[7px] w-[7px] flex-none rounded-full ${i % 2 === 0 ? "bg-bh-orange" : "bg-bh-purple"}`} />
                {blocker}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="vibe-who" innerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(28px,5vw,72px)]">
          <div className="flex flex-col gap-4">
            <Eyebrow>Who this is for</Eyebrow>
            <h2 className={`${sectionHeading} max-w-[14ch]`}>
              <AccentText before="You don't need to call yourself a " accent="developer" after="." color="orange" />
            </h2>
          </div>
          <ul className="m-0 flex list-none flex-col p-0">
            {fit.map((line, i) => (
              <li key={line} className={`flex items-start gap-4 py-4 ${i > 0 ? "border-t border-bh-hairline" : ""}`}>
                <span aria-hidden="true" className={`mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-[9px] ${checkChip[i % 2 === 0 ? "orange" : "purple"]}`}>
                  <IconCheck />
                </span>
                <span className="text-[clamp(17px,1.6vw,20px)] leading-[1.4] font-semibold tracking-[-.015em] text-bh-ink-purple">{line}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="vibe-how" flush="top" innerClassName="flex flex-col gap-[clamp(28px,4vw,44px)] border-t border-bh-hairline pt-[clamp(48px,6vw,80px)]">
          <div className="flex flex-col gap-4">
            <Eyebrow>How it works</Eyebrow>
            <h2 className={sectionHeading}>
              <AccentText before="Request. Review. " accent="Work together" after="." color="purple" />
            </h2>
          </div>
          <Steps steps={howItWorks} />
          <p className="m-0 max-w-[70ch] text-[15px] leading-[1.6] font-medium text-[#5a544a]">{notes.session}</p>
        </Section>

        <Section id="vibe-scope" flush="top" innerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-3.5">
          <div className="flex flex-col gap-3 rounded-3xl border border-t-4 border-bh-hairline border-t-bh-orange bg-bh-card p-[clamp(24px,3vw,36px)]">
            <span className="font-mono-bh text-xs font-bold tracking-[.2em] text-bh-orange-deep uppercase">This is</span>
            <p className="m-0 text-[clamp(20px,2vw,24px)] leading-[1.3] font-semibold tracking-[-.02em] text-bh-ink-purple">{scope.is}</p>
          </div>
          <div className="flex flex-col gap-3 rounded-3xl border border-[#e0d6c2] p-[clamp(24px,3vw,36px)]">
            <span className="font-mono-bh text-xs font-bold tracking-[.2em] text-bh-muted uppercase">This isn&apos;t</span>
            <p className="m-0 text-[clamp(20px,2vw,24px)] leading-[1.3] font-semibold tracking-[-.02em] text-bh-body">{scope.isNot}</p>
          </div>
        </Section>

        <Section id="vibe-why" tone="band" innerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(24px,5vw,72px)]">
          <div className="flex flex-col gap-4">
            <Eyebrow>Why Hamdi</Eyebrow>
            <h2 className={`${sectionHeading} max-w-[14ch]`}>
              <AccentText before="Help from someone who's " accent="building" after=" too." color="purple" />
            </h2>
          </div>
          <div className="flex flex-col gap-[18px] pt-[clamp(0px,3vw,40px)]">
            <p className={proseText}>{notes.whyHamdi}</p>
            <p className={proseText}>So the help is hands-on. We look at your actual project and work through it together.</p>
            <div className="mt-1.5 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-[#e0d6c2] pt-[18px]">
              <Eyebrow className="w-full text-[11px] tracking-[.2em]">Things I&apos;ve shipped</Eyebrow>
              {shipped.map((product) => (
                <TextLink key={product.href} href={product.href} color={product.color} className="pb-0.5 text-[15px]">
                  {product.label} ↗
                </TextLink>
              ))}
            </div>
          </div>
        </Section>

        <Section id="vibe-cta" innerClassName="flex flex-col items-center gap-[18px] rounded-[32px] bg-bh-ink-purple px-[clamp(24px,6vw,80px)] py-[clamp(36px,6vw,88px)] text-center text-bh-bg">
          <Eyebrow tone="dark">Vibe Coding Help</Eyebrow>
          <h2 className="m-0 max-w-[16ch] text-[clamp(34px,5vw,60px)] leading-none font-bold tracking-[-.045em] text-balance">
            <AccentText before="Already building and " accent="stuck" after="?" color="orange-light" />
          </h2>
          <p className="m-0 max-w-[40ch] text-[clamp(17px,1.6vw,20px)] leading-[1.55] font-medium text-[#d9d1e6]">Tell me what you&apos;re working on and where you&apos;re stuck.</p>
          <span className="text-lg font-bold">$99 · 60–90 minutes</span>
          <div className="mt-2 flex w-full flex-col items-center gap-3">
            <Button href={requestUrl} label={vibeService.requestLabel} size="xl" />
            <p className="m-0 max-w-[44ch] text-sm leading-[1.55] font-medium text-[#c4b9d6]">{notes.request}</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
