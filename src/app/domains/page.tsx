import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Section, { sectionHeading } from "@/components/ui/Section";
import Steps from "@/components/ui/Steps";
import { communityDomains, domainsPage, offerHref, offerSteps } from "@/content/domains";

const pageUrl = domainsPage.url;

export const metadata: Metadata = {
  title: domainsPage.name,
  description: `${domainsPage.headline} Community domains mnsomali.com, mnsomalis.com and mnmuslim.com, sold only to buyers who will serve the community.`,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `${domainsPage.name} — By Hamdi`,
    description: domainsPage.intro,
    url: pageUrl,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "By Hamdi — Building useful AI-powered products." }],
  },
};

export default function DomainsPage() {
  return (
    <>
      <Nav />
      <main className="relative z-[1] font-grotesk text-bh-ink">
        <section id="domains-hero" className="px-[clamp(20px,4vw,52px)] pt-[clamp(40px,8vw,104px)] pb-[clamp(56px,7vw,96px)]">
          <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-end gap-[clamp(28px,5vw,80px)]">
            <div className="flex flex-col gap-5">
              <Eyebrow>{domainsPage.name}</Eyebrow>
              <h1 className="m-0 max-w-[13ch] text-[clamp(44px,6.2vw,80px)] leading-[.94] font-bold tracking-[-.055em]">
                <AccentText before="Good names for people building " accent="good things" after="." color="orange" />
              </h1>
            </div>
            <p className="m-0 max-w-[50ch] text-[clamp(17px,1.5vw,20px)] leading-[1.5] font-medium text-bh-body">{domainsPage.intro}</p>
          </div>
        </section>

        <Section id="domains-community" tone="band" innerClassName="flex flex-col gap-[clamp(28px,4vw,44px)]">
          <div className="flex flex-col gap-4">
            <Eyebrow>Community domains</Eyebrow>
            <h2 className={sectionHeading}>
              <AccentText before="Only to someone who'll " accent="serve the community" after="." color="purple" />
            </h2>
            <p className="m-0 max-w-[62ch] text-[clamp(17px,1.5vw,19px)] leading-[1.55] font-medium text-bh-body">{domainsPage.communityNote}</p>
          </div>
          <DomainGrid />
          <Steps steps={offerSteps} rail />
        </Section>

      </main>
      <Footer />
    </>
  );
}

function DomainGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-3.5">
      {communityDomains.map((domain) => (
        <article key={domain.name} className="flex flex-col gap-5 rounded-3xl border border-t-4 border-bh-hairline border-t-bh-orange bg-bh-card p-[clamp(22px,2.6vw,32px)]">
          <div className="flex flex-col gap-2">
            <h3 className="m-0 text-[clamp(24px,2.4vw,30px)] leading-[1.1] font-bold tracking-[-.035em] break-all text-bh-ink-purple">{domain.name}</h3>
            <span className="font-mono-bh text-xs tracking-[.14em] text-bh-muted uppercase">Make an offer</span>
          </div>
          <p className="m-0 text-[16px] leading-[1.55] font-medium text-bh-body">{domain.blurb}</p>
          <div className="mt-auto">
            <Button href={offerHref(domain.name)} label="Make an offer" size="md" className="max-sm:w-full" />
          </div>
        </article>
      ))}
    </div>
  );
}
