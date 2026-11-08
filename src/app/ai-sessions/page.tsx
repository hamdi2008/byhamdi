import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Section, { sectionHeading } from "@/components/ui/Section";
import Steps from "@/components/ui/Steps";
import { IconCheck } from "@/components/icons/IconCheck";
import { aiSessions, howItWorks, learningApproach, sessionOptions } from "@/content/ai-sessions";

const pageUrl = aiSessions.url;

export const metadata: Metadata = {
  title: aiSessions.name,
  description: `${aiSessions.headline} Personalized, beginner-friendly one-on-one sessions: $50 for a single session or $150 for four weeks.`,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `${aiSessions.name} — By Hamdi`,
    description: `${aiSessions.headline} Personalized, beginner-friendly one-on-one sessions with Hamdi Mohamud Hassan.`,
    url: pageUrl,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "By Hamdi — Building useful AI-powered products." }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}/#service`,
  name: aiSessions.name,
  url: pageUrl,
  description: aiSessions.description,
  provider: {
    "@type": "Person",
    "@id": "https://byhamdi.com/#hamdi",
    name: "Hamdi Mohamud Hassan",
    url: "https://byhamdi.com",
  },
  offers: sessionOptions.map((option) => ({
    "@type": "Offer",
    name: option.name,
    description: option.details.join(". "),
    price: String(option.price),
    priceCurrency: "USD",
    url: pageUrl,
  })),
  potentialAction: {
    "@type": "ApplyAction",
    name: aiSessions.requestLabel,
    target: {
      "@type": "EntryPoint",
      urlTemplate: aiSessions.requestUrl,
      actionPlatform: "https://schema.org/DesktopWebPlatform",
    },
    description: aiSessions.requestNote,
  },
};

const optionAccent = ["border-t-bh-orange", "border-t-bh-purple"];
const checkChip = [
  "bg-[linear-gradient(150deg,#ff8a5c,#ff6a3d)] shadow-[0_8px_16px_-8px_rgba(255,106,61,.6)]",
  "bg-[linear-gradient(150deg,#7c3acd,#5e2fb0)] shadow-[0_8px_16px_-8px_rgba(94,47,176,.6)]",
];

export default function AiSessionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Nav />
      <main className="relative z-[1] font-grotesk text-bh-ink">
        <section id="sessions-hero" className="px-[clamp(20px,4vw,52px)] pt-[clamp(40px,8vw,104px)] pb-[clamp(56px,7vw,96px)]">
          <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-end gap-[clamp(28px,5vw,80px)]">
            <div className="flex flex-col gap-5">
              <Eyebrow>{aiSessions.name}</Eyebrow>
              <h1 className="m-0 max-w-[13ch] text-[clamp(44px,6.2vw,80px)] leading-[.94] font-bold tracking-[-.055em]">
                <AccentText before="Learn to use AI for something you " accent="actually want to do" after="." color="orange" />
              </h1>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3 text-[clamp(17px,1.5vw,20px)] leading-[1.5] font-medium text-bh-body">
                <p className="m-0">{aiSessions.descriptionLead}</p>
                <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,255px),1fr))] gap-x-6 gap-y-2 p-0 text-[17px] font-semibold text-bh-ink-purple">
                  {aiSessions.descriptionGoals.map((goal, i) => (
                    <li key={goal} className="flex items-baseline gap-2.5">
                      <span aria-hidden="true" className={`h-[7px] w-[7px] flex-none translate-y-[-2px] rounded-full ${i % 2 === 0 ? "bg-bh-orange" : "bg-bh-purple"}`} />
                      <span>{i === aiSessions.descriptionGoals.length - 1 ? `or ${goal}` : goal}</span>
                    </li>
                  ))}
                </ul>
                <p className="m-0 max-w-[50ch]">{aiSessions.descriptionClose}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Button href={aiSessions.requestUrl} label={aiSessions.requestLabel} size="xl" className="self-start max-sm:self-stretch" />
                <p className="m-0 max-w-[44ch] text-sm max-sm:text-[15px] leading-[1.55] font-medium text-bh-muted">{aiSessions.requestNote}</p>
              </div>
            </div>
          </div>
        </section>

        <Section id="sessions-how" tone="band" innerClassName="flex flex-col gap-[clamp(28px,4vw,44px)]">
          <div className="flex flex-col gap-4">
            <Eyebrow>How it works</Eyebrow>
            <h2 className={sectionHeading}>
              <AccentText before="From request to " accent="doing it yourself" after="." color="purple" />
            </h2>
          </div>
          <Steps steps={howItWorks} rail />
          <p className="m-0 flex items-center gap-3 border-t border-[#e0d6c2] pt-[clamp(18px,2.4vw,28px)] text-[clamp(19px,2vw,26px)] leading-[1.25] font-semibold tracking-[-.025em] text-bh-ink-purple max-sm:flex-col max-sm:items-start max-sm:gap-1.5">
            {learningApproach.map((step, i) => {
              const last = i === learningApproach.length - 1;
              return (
                <span key={step} className="inline-flex items-center gap-3 max-sm:flex-col max-sm:items-start max-sm:gap-1.5">
                  {last ? `${step}.` : step}
                  {!last && (
                    <>
                      <span aria-hidden="true" className="font-mono-bh text-bh-orange max-sm:ml-1 max-sm:rotate-90">→</span>
                      <span className="sr-only">, then </span>
                    </>
                  )}
                </span>
              );
            })}
          </p>
        </Section>

        <Section id="sessions-options" innerClassName="flex flex-col gap-[clamp(28px,4vw,44px)]">
          <div className="flex flex-col gap-4">
            <Eyebrow>Session options</Eyebrow>
            <h2 className={sectionHeading}>
              <AccentText before="Choose what " accent="fits" after="." color="orange" />
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-3.5">
            {sessionOptions.map((option, i) => (
              <article key={option.id} className={`flex flex-col gap-6 rounded-3xl border border-t-4 border-bh-hairline bg-bh-card p-[clamp(24px,3vw,36px)] ${optionAccent[i]}`}>
                <div className="flex items-start justify-between gap-4 max-sm:flex-col max-sm:gap-3">
                  <h3 className="m-0 text-[clamp(24px,2.4vw,30px)] leading-[1.1] font-bold tracking-[-.035em] text-bh-ink-purple">{option.name}</h3>
                  <span className="text-[clamp(38px,4vw,52px)] leading-[.9] font-bold tracking-[-.05em] text-bh-ink-purple">${option.price}</span>
                </div>
                <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                  {option.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3.5">
                      <span aria-hidden="true" className={`mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-[9px] ${checkChip[i]}`}>
                        <IconCheck />
                      </span>
                      <span className="text-[17px] leading-[1.45] font-semibold tracking-[-.01em] text-bh-body">{detail}</span>
                    </li>
                  ))}
                </ul>
                {option.note && <p className="m-0 mt-auto border-t border-bh-hairline pt-4 text-[15px] leading-[1.5] font-medium text-bh-muted">{option.note}</p>}
              </article>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="m-0 text-[clamp(17px,1.6vw,20px)] leading-[1.4] font-semibold tracking-[-.015em] text-bh-ink-purple">{aiSessions.optionsNote}</p>
            <p className="m-0 max-w-[62ch] text-base leading-[1.55] font-medium text-bh-body">{aiSessions.requestNote}</p>
          </div>
        </Section>

        <Section id="sessions-cta" flush="top" innerClassName="flex flex-col items-center gap-[18px] rounded-[32px] bg-bh-ink-purple px-[clamp(24px,6vw,80px)] py-[clamp(36px,6vw,88px)] text-center text-bh-bg">
          <Eyebrow tone="dark">{aiSessions.name}</Eyebrow>
          <h2 className="m-0 max-w-[16ch] text-[clamp(34px,5vw,60px)] leading-none font-bold tracking-[-.045em] text-balance">
            <AccentText before="What do you want to " accent="accomplish" after="?" color="orange-light" />
          </h2>
          <p className="m-0 max-w-[46ch] text-[clamp(17px,1.6vw,20px)] leading-[1.55] font-medium text-[#d9d1e6]">Tell me what you&apos;d like to learn or accomplish, and I&apos;ll help you figure out how to get started.</p>
          <div className="mt-2 flex w-full flex-col items-center gap-3">
            <Button href={aiSessions.requestUrl} label={aiSessions.requestLabel} size="xl" className="max-sm:self-stretch" />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
