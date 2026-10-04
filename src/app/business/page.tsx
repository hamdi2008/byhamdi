import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import MonoTagline from "@/components/ui/MonoTagline";
import Section, { sectionHeading } from "@/components/ui/Section";
import Steps, { type Step } from "@/components/ui/Steps";
import TextLink from "@/components/ui/TextLink";
import Wordmark from "@/components/ui/Wordmark";
import { externalLinkProps } from "@/lib/links";

const pageUrl = "https://byhamdi.com/business";
const reviewUrl = "https://forms.gle/aJuBMpbNd7JY6JHbA";

export const metadata: Metadata = {
  title: "Digital Presence & AI Readiness",
  description: "Clean up your business online, improve how customers and search engines find and understand you, and prepare your business for AI-powered discovery.",
  alternates: { canonical: pageUrl },
  openGraph: { title: "Digital Presence & AI Readiness — By Hamdi", description: "Business digital presence cleanup, website and search improvements, customer action fixes, and AI readiness from Hamdi Mohamud Hassan.", url: pageUrl, type: "website" },
};

const mnhalal = "https://www.mnhalal.com/";
const mnmuslim = "https://www.mnmuslim.com/";

const questionSteps = [
  ["Find", "Show up when someone looks for what you offer."],
  ["Understand", "Make it clear what you do, where, and when."],
  ["Act", "Make it easy to call, order, book, or visit."],
];

const problems = [
  ["Different details in different places", "Your website, Google, and a directory each list slightly different hours, phone numbers, or addresses."],
  ["An outdated website", "Old menus or prices, a location that moved, or a page that hasn't been touched in years."],
  ["Services that aren't clearly explained", "People can't tell exactly what you offer, who it's for, or whether you serve their area."],
  ["A scattered online presence", "Forgotten profiles, duplicate listings, and links that lead nowhere."],
  ["No clear next step", "Visitors can't easily call, order, book, get directions, or reach the right person."],
  ["Information that's hard to understand online", "Important details about what you offer, where you operate, or how customers can take action aren't clearly presented."],
];

const reviewAreas = [
  ["Presence", "Is your business represented accurately online?"],
  ["Website", "Can people quickly understand what your business does?"],
  ["Discovery", "Is there a solid foundation for being found through search?"],
  ["Information", "Are your services, location, contact details, offerings, and next steps clear and easy to get to?"],
  ["AI readiness", "Where it makes sense for your business, is your information organized so newer AI-powered search tools can understand it?"],
];

const reviewQuestions = [
  "What's already working?",
  "What information is missing, inconsistent, or hard to find?",
  "What should be fixed first?",
  "Are there real opportunities to improve how you show up in search or AI tools?",
];

const process: Step[] = [
  { title: "Review", body: "You fill out a short form about your business. I look at your public online presence.", tag: { label: "Free", tone: "free" } },
  { title: "Findings", body: "I share what's already working and what's missing, inconsistent, or hard to find.", tag: { label: "Free", tone: "free" } },
  { title: "Priorities", body: "I tell you what I'd fix first, and why.", tag: { label: "Free", tone: "free" } },
  { title: "Fix", body: "If there's work worth doing and I can help, I'll give you a quote. You decide whether to go ahead.", tag: { label: "Only if you choose", tone: "paid" } },
];

const directoryLinks = [
  { label: "List a halal food business on MNHalal ↗", href: "https://www.mnhalal.com/submit", color: "orange" as const },
  { label: "List a business or service on MNMuslim ↗", href: "https://mnmuslim.com/submit", color: "purple" as const },
];

const instagram = [
  { handle: "@mnhalalfood", href: "https://www.instagram.com/mnhalalfood/", color: "text-bh-orange-deep", description: "Helping people discover halal food in Minnesota while giving local halal food businesses another way to reach customers." },
  { handle: "@mnmuslimbusinesses", href: "https://www.instagram.com/mnmuslimbusinesses/", color: "text-bh-purple", description: "Helping people discover Muslim businesses and service providers in Minnesota while giving those businesses another way to reach the local community." },
  { handle: "@mnmuslimevents", href: "https://www.instagram.com/mnmuslimevents/", color: "text-bh-purple", description: "Helping people discover Muslim events across Minnesota while giving organizers another way to reach the community." },
];

const pad = (i: number) => String(i + 1).padStart(2, "0");
const bodyText = "m-0 text-[17px] leading-[1.65] font-medium text-bh-body";
const proseText = "m-0 text-[clamp(16px,1.4vw,19px)] leading-[1.65] font-medium text-bh-body";
const note = "m-0 text-sm leading-[1.55] font-medium text-bh-muted";
const formCta = "self-start max-sm:self-stretch";
const splitHeader = "grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-x-16 gap-y-4";

const structuredData = {
  "@context": "https://schema.org", "@type": "Service", "@id": `${pageUrl}/#service`, name: "Digital Presence & AI Readiness", url: pageUrl,
  description: "A business digital presence review and implementation service covering online information cleanup, website fixes, search and SEO foundations, identity and trust, customer action paths, and AI and agent readiness.",
  provider: { "@type": "Person", "@id": "https://byhamdi.com/#hamdi", name: "Hamdi Mohamud Hassan", url: "https://byhamdi.com" },
  areaServed: { "@type": "State", name: "Minnesota" },
  potentialAction: { "@type": "ApplyAction", name: "Request a Free Business Presence Review", target: { "@type": "EntryPoint", urlTemplate: reviewUrl, actionPlatform: "https://schema.org/DesktopWebPlatform" }, description: "Request a free review of the business's public online presence. A review request does not require or purchase paid work." },
};

export default function BusinessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Nav />
      <main className="relative z-[1] font-grotesk text-bh-ink">
        <section id="biz-hero" className="px-[clamp(20px,4vw,52px)] pt-[clamp(40px,8vw,104px)] pb-[clamp(56px,8vw,104px)]">
          <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-center gap-[clamp(36px,5vw,72px)]">
            <div className="flex flex-col gap-5">
              <Eyebrow>For businesses</Eyebrow>
              <h1 className="m-0 max-w-[13ch] text-[clamp(42px,6.4vw,84px)] leading-[.93] font-bold tracking-[-.055em]">
                <AccentText before="Digital Presence & AI " accent="Readiness" after="." color="purple" />
              </h1>
              <p className="mt-1 mb-0 max-w-[26ch] text-[clamp(21px,2.2vw,28px)] leading-[1.25] font-semibold tracking-[-.025em] text-bh-ink-purple">Your business is online. Can people find it, understand it, and take the next step?</p>
              <p className={`${bodyText} max-w-[54ch] leading-[1.68]`}>I help businesses make sure the information about them online is accurate, clear, and easy to act on. That matters for customers, search engines, and the AI tools people increasingly use to discover businesses.</p>
              <div className="mt-2 flex flex-col gap-3">
                <Button href={reviewUrl} label="Get a Free Business Presence Review" className={formCta} />
                <p className={`${note} max-w-[54ch]`}>The review is free. If I find work I can help with, I&apos;ll explain what I recommend and give you a quote before any paid work begins.</p>
              </div>
            </div>
            <div className="flex flex-col gap-[clamp(18px,2.4vw,26px)] rounded-[28px] bg-bh-ink-purple p-[clamp(26px,3.4vw,44px)] text-bh-bg shadow-[0_40px_70px_-40px_rgba(36,26,51,.7)]">
              <Eyebrow tone="dark">The question behind the review</Eyebrow>
              <p className="m-0 text-[clamp(22px,2.4vw,30px)] leading-[1.2] font-semibold tracking-[-.03em] text-pretty">
                <AccentText before="Can people, and the systems they use, find, understand, and act on " accent="accurate" after=" information about your business?" color="orange-light" />
              </p>
              <ol className="m-0 flex list-none flex-col p-0">
                {questionSteps.map(([title, description], i) => (
                  <li key={title} className={`grid grid-cols-[28px_minmax(0,1fr)] gap-x-3.5 gap-y-1 border-t border-bh-bg/[.14] pt-3.5 ${i < questionSteps.length - 1 ? "pb-3.5" : ""}`}>
                    <span className="font-mono-bh pt-[5px] text-xs text-bh-orange-light">{pad(i)}</span>
                    <b className="text-[19px] tracking-[-.02em]">{title}</b>
                    <span />
                    <span className="text-[15px] leading-[1.5] font-medium text-[#d9d1e6]">{description}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <Section id="biz-problem" tone="band" innerClassName="flex flex-col gap-[clamp(28px,4vw,52px)]">
          <div className={splitHeader}>
            <div className="flex flex-col gap-4">
              <Eyebrow>The problem</Eyebrow>
              <h2 className={`${sectionHeading} max-w-[16ch]`}>
                <AccentText before="Being online isn't the same as being " accent="easy to find" after="." color="purple" />
              </h2>
            </div>
            <p className={`${bodyText} max-w-[46ch]`}>Most of these are small and easy to miss from the inside. Customers notice them right away, and often just move on to the next business.</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-x-10">
            {problems.map(([title, description], i) => (
              <div key={title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3.5 gap-y-1.5 border-t border-[#e0d6c2] py-[22px]">
                <span aria-hidden="true" className={`mt-[9px] h-2 w-2 rounded-full ${i % 2 === 0 ? "bg-bh-orange" : "bg-bh-purple"}`} />
                <h3 className="m-0 text-[19px] leading-[1.3] font-bold tracking-[-.02em] text-bh-ink-purple">{title}</h3>
                <span />
                <p className="m-0 text-[15.5px] leading-[1.6] font-medium text-[#5a544a]">{description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="biz-areas" innerClassName="flex flex-col gap-[clamp(32px,4.5vw,56px)]">
          <div className={splitHeader}>
            <div className="flex flex-col gap-4">
              <Eyebrow>What I look at</Eyebrow>
              <h2 className={`${sectionHeading} max-w-[15ch]`}>
                <AccentText before="One connected picture of your business " accent="online" after="." color="purple" />
              </h2>
            </div>
            <p className={`${bodyText} max-w-[46ch]`}>These areas affect each other, so I look at them together. Not every business needs work in every area. The review shows where it actually matters for yours.</p>
          </div>
          {/* Horizontal track at ≥900px; vertical rail below. */}
          <div className="relative max-[900px]:pl-[34px]">
            <div aria-hidden="true" className="absolute top-[9px] right-[9px] left-[9px] h-[1.5px] bg-[linear-gradient(90deg,#ff6a3d,#c14a6e_60%,#5e2fb0)] opacity-35 max-[900px]:top-2.5 max-[900px]:right-auto max-[900px]:bottom-2.5 max-[900px]:h-auto max-[900px]:w-[1.5px] max-[900px]:bg-[linear-gradient(180deg,#ff6a3d,#c14a6e_60%,#5e2fb0)]" />
            <ol className="relative m-0 grid list-none gap-5 p-0 max-[900px]:gap-[26px] min-[900px]:grid-cols-5">
              {reviewAreas.map(([title, description], i) => {
                const purple = i >= 3;
                return (
                  <li key={title} className="relative flex flex-col gap-3 max-[900px]:gap-1.5">
                    <span aria-hidden="true" className={`flex h-[19px] w-[19px] items-center justify-center rounded-full border-2 bg-bh-bg max-[900px]:absolute max-[900px]:top-[3px] max-[900px]:-left-[34px] ${purple ? "border-bh-purple" : "border-bh-orange"}`}>
                      <span className={`h-[7px] w-[7px] rounded-full ${purple ? "bg-bh-purple" : "bg-bh-orange"}`} />
                    </span>
                    <div className="flex flex-col gap-3 max-[900px]:flex-row max-[900px]:items-baseline max-[900px]:gap-2.5">
                      <span className={`font-mono-bh text-xs min-[900px]:mt-2 ${purple ? "text-bh-purple" : "text-bh-orange"}`}>{pad(i)}</span>
                      <h3 className="m-0 text-[22px] font-bold tracking-[-.025em] text-bh-ink-purple max-[900px]:text-[21px]">{title}</h3>
                    </div>
                    <p className="m-0 text-[15.5px] leading-[1.55] font-medium text-[#5a544a]">{description}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </Section>

        <Section id="biz-review" flush="top" innerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(32px,5vw,72px)] rounded-[32px] border border-bh-hairline bg-bh-card p-[clamp(28px,5vw,72px)]">
          <div className="flex flex-col gap-[18px]">
            <Eyebrow>Start here</Eyebrow>
            <h2 className={sectionHeading}>
              <AccentText before="Start with a free " accent="review" after="." color="orange" />
            </h2>
            <p className={`${bodyText} max-w-[46ch]`}>Before recommending any work, I look at how your business currently shows up online and point out the problems and opportunities that actually matter.</p>
            <div className="mt-1.5 flex flex-col gap-3">
              <Button href={reviewUrl} label="Get a Free Business Presence Review" className={formCta} />
              <p className={`${note} max-w-[46ch]`}>The review is an assessment, not the fixes themselves. Any implementation work is quoted separately, and only if you want it.</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Eyebrow className="mb-2">The review helps answer</Eyebrow>
            {reviewQuestions.map((question, i) => (
              <div key={question} className="grid grid-cols-[32px_minmax(0,1fr)] items-baseline gap-3.5 border-t border-bh-hairline py-4">
                <span className={`font-mono-bh text-[13px] font-bold ${i === reviewQuestions.length - 1 ? "text-bh-purple" : "text-bh-orange"}`}>{pad(i)}</span>
                <span className="text-[clamp(18px,1.8vw,22px)] leading-[1.3] font-semibold tracking-[-.02em] text-bh-ink-purple">{question}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="biz-process" tone="band" innerClassName="flex flex-col gap-[clamp(32px,4.5vw,56px)]">
          <div className="flex flex-col gap-4">
            <Eyebrow>What happens after the review</Eyebrow>
            <h2 className={`${sectionHeading} max-w-[18ch]`}>
              <AccentText before="Clear steps. " accent="No obligation" after="." color="purple" />
            </h2>
          </div>
          <Steps steps={process} rail titleClassName="text-[26px]" />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-baseline gap-x-12 gap-y-3 border-t border-[#e0d6c2] pt-[clamp(22px,3vw,32px)]">
            <h3 className="m-0 text-[clamp(22px,2.4vw,28px)] font-bold tracking-[-.03em] text-bh-ink-purple">What you&apos;re committing to</h3>
            <p className="m-0 text-base leading-[1.65] font-medium text-bh-body">Nothing beyond filling out the form. I&apos;ll look at your public online presence, share the most important things I find, and tell you what I&apos;d recommend fixing. There&apos;s no obligation to purchase anything.</p>
          </div>
        </Section>

        <Section id="biz-why" innerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(24px,5vw,72px)]">
          <div className="flex flex-col gap-4">
            <Eyebrow>Why I&apos;m working on this</Eyebrow>
            <h2 className={`${sectionHeading} max-w-[14ch]`}>
              <AccentText before="Good businesses, " accent="scattered" after=" information." color="orange" />
            </h2>
          </div>
          <div className="flex flex-col gap-[18px] pt-[clamp(0px,3vw,40px)]">
            <p className={proseText}>
              Building products like <TextLink href={mnhalal} color="orange">MNHalal</TextLink> and <TextLink href={mnmuslim}>MNMuslim</TextLink> means I spend a lot of time with local business information. I keep seeing the same thing: businesses with genuinely useful services whose information online is incomplete, outdated, or spread across too many places.
            </p>
            <p className={proseText}>AI is changing how people discover businesses, but the fundamentals haven&apos;t changed. Your business information still needs to be accurate, clear, accessible, and easy to act on. That&apos;s where I start.</p>
            <p className={proseText}>
              For businesses listed on <TextLink href={mnhalal} color="orange">MNHalal</TextLink> or <TextLink href={mnmuslim}>MNMuslim</TextLink>, the review can also help improve the accuracy and usefulness of their directory listing.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2.5">
              {directoryLinks.map((link) => (
                <TextLink key={link.href} href={link.href} color={link.color} className="pb-0.5 text-[15px]">
                  {link.label}
                </TextLink>
              ))}
            </div>
            <div className="mt-1.5 flex flex-col gap-1 rounded-[20px] border border-bh-hairline bg-bh-band/70 p-[clamp(18px,2.4vw,24px)]">
              <Eyebrow className="text-[11px] tracking-[.2em]">Community discovery</Eyebrow>
              <p className="my-1.5 text-[15px] leading-[1.55] font-medium text-bh-body">I also run community discovery pages that help Minnesota Muslims find local food, businesses, services, and events.</p>
              {instagram.map((account) => (
                <a key={account.handle} href={account.href} {...externalLinkProps(account.href)} className="group flex flex-col gap-[3px] border-t border-[#e0d6c2] py-3 no-underline">
                  <span className={`flex items-center gap-2 text-base font-bold transition-colors duration-200 group-hover:text-bh-orange ${account.color}`}>
                    {account.handle}
                    <span aria-hidden="true" className="font-mono-bh text-xs">↗</span>
                  </span>
                  <span className="text-sm leading-[1.5] font-medium text-[#5a544a]">{account.description}</span>
                </a>
              ))}
            </div>
            <div className="mt-1.5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-bh-hairline pt-[18px]">
              <Wordmark size="inline" asLink={false} />
              <MonoTagline className="text-xs tracking-[.14em] text-bh-muted" />
            </div>
          </div>
        </Section>

        <Section id="biz-cta" flush="top" innerClassName="flex flex-col items-center gap-[18px] rounded-[32px] bg-bh-ink-purple px-[clamp(24px,6vw,80px)] py-[clamp(36px,6vw,88px)] text-center text-bh-bg">
          <Eyebrow tone="dark">Free Business Presence Review</Eyebrow>
          <h2 className="m-0 max-w-[16ch] text-[clamp(32px,5vw,60px)] leading-none font-bold tracking-[-.045em] text-balance">
            <AccentText before="How well does your business show up " accent="online" after="?" color="orange-light" />
          </h2>
          <p className="m-0 max-w-[44ch] text-[clamp(17px,1.6vw,20px)] leading-[1.55] font-medium text-[#d9d1e6]">Start with a free Business Presence Review.</p>
          <div className="mt-2.5 flex w-full flex-col items-center gap-3">
            <Button href={reviewUrl} label="Get a Free Business Presence Review" />
            <span className="text-sm font-medium text-[#c4b9d6]">No obligation to purchase anything.</span>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
