import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Eyebrow from "@/components/ui/Eyebrow";

const pageUrl = "https://byhamdi.com/business";
const reviewUrl = "https://forms.gle/aJuBMpbNd7JY6JHbA";

export const metadata: Metadata = {
  title: "Digital Presence & AI Readiness",
  description: "Clean up your business online, improve how customers and search engines find and understand you, and prepare your business for AI-powered discovery.",
  alternates: { canonical: pageUrl },
  openGraph: { title: "Digital Presence & AI Readiness — By Hamdi", description: "Business digital presence cleanup, website and search improvements, customer action fixes, and AI readiness from Hamdi Mohamud Hassan.", url: pageUrl, type: "website" },
};

const reviewAreas = [
  ["Digital presence", "Accuracy and consistency of the important information customers find about your business online."],
  ["Website", "Broken links, outdated information, confusing pages, and other problems that can get in a customer's way."],
  ["Search & SEO", "The foundation that helps search engines find, index, and understand your business."],
  ["Identity & trust", "Clear connections between your business, services, locations, official profiles, and the people behind it when relevant."],
  ["Customer actions", "Whether people can successfully call, order, book, visit, contact you, register, or request a quote."],
  ["AI & agent readiness", "Whether AI assistants can correctly understand your business and point people toward the right next step."],
];

const process = [
  ["1. Request a free review", "Tell me about your business through a short form."],
  ["2. I review your online presence", "I look for important problems and opportunities across your website, search presence, customer paths, and AI discovery."],
  ["3. You get the findings", "I explain the most important things I found and what I recommend fixing."],
  ["4. Decide if you want my help", "If I can help implement the improvements, I'll give you a project quote. There's no obligation to proceed."],
  ["5. I fix and retest", "If you move forward, I implement the agreed improvements and test the business again afterward."],
];

const structuredData = {
  "@context": "https://schema.org", "@type": "Service", "@id": `${pageUrl}/#service`, name: "Digital Presence & AI Readiness", url: pageUrl,
  description: "A business digital presence review and implementation service covering online information cleanup, website fixes, search and SEO foundations, identity and trust, customer action paths, and AI and agent readiness.",
  provider: { "@type": "Person", "@id": "https://byhamdi.com/#hamdi", name: "Hamdi Mohamud Hassan", url: "https://byhamdi.com" },
  areaServed: { "@type": "State", name: "Minnesota" },
  potentialAction: { "@type": "ApplyAction", name: "Request a Free Business Presence Review", target: { "@type": "EntryPoint", urlTemplate: reviewUrl, actionPlatform: "https://schema.org/DesktopWebPlatform" }, description: "Request a free review of the business's public online presence. A review request does not require or purchase paid work." },
};

export default function BusinessPage() {
  return (
    <main className="relative z-[1] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Nav />
      <section className="px-6 pt-12 pb-16 sm:px-[52px] sm:pt-20"><div className="mx-auto max-w-[980px]"><Eyebrow>For businesses</Eyebrow><h1 className="mt-5 max-w-[15ch] text-[clamp(44px,7vw,84px)] leading-[.94] font-bold tracking-[-.055em] text-bh-ink">Digital Presence & AI Readiness.</h1><p className="mt-7 max-w-[38ch] text-[clamp(21px,2.3vw,30px)] leading-[1.25] font-semibold tracking-[-.025em] text-bh-ink-purple">Clean up your business online and get ready for how customers discover businesses now and next.</p><p className="mt-5 max-w-[64ch] text-[17px] leading-[1.7] font-medium text-bh-body sm:text-[19px]">I help businesses fix important problems across their online presence, improve their search foundation, make customer actions clearer, and prepare for discovery through AI assistants.</p><Link href={reviewUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block rounded-full bg-bh-purple px-7 py-3.5 text-[15px] font-bold text-white no-underline transition-transform duration-200 hover:-translate-y-0.5">Request a Free Business Presence Review</Link><p className="mt-3 text-sm font-medium text-bh-muted">The review is free. If I find work I can help with, I'll explain what I recommend and give you a quote before any paid work begins.</p></div></section>

      <section className="px-6 py-16 sm:px-[52px]"><div className="mx-auto max-w-[980px]"><Eyebrow>Small online problems can cost real customers</Eyebrow><h2 className="mt-5 max-w-[18ch] text-[clamp(32px,4.5vw,54px)] leading-[1] font-bold tracking-[-.045em] text-bh-ink">Your business can be open while the internet tells customers something different.</h2><p className="mt-6 max-w-[65ch] text-[17px] leading-[1.7] font-medium text-bh-body">A dead website. An order button going to the wrong location. Different hours or phone numbers across the web. An old domain redirecting somewhere it shouldn't. Search engines showing outdated information. AI assistants unable to understand what your business actually offers. These are the kinds of problems I look for and help businesses fix.</p></div></section>

      <section className="px-6 py-16 sm:px-[52px]"><div className="mx-auto max-w-[980px]"><Eyebrow>What I review</Eyebrow><h2 className="mt-5 text-[clamp(32px,4.5vw,54px)] leading-[1] font-bold tracking-[-.045em] text-bh-ink">Your whole digital presence, not just AI.</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{reviewAreas.map(([title, description]) => <div key={title} className="rounded-3xl border border-bh-hairline bg-bh-card/70 p-7"><h3 className="text-xl font-bold tracking-[-.02em] text-bh-ink-purple">{title}</h3><p className="mt-2 leading-[1.6] font-medium text-bh-muted">{description}</p></div>)}</div><div className="mt-8 rounded-3xl border border-bh-hairline bg-bh-card/70 p-8"><Eyebrow>Agent-Ready Business framework</Eyebrow><p className="mt-4 text-[clamp(21px,2.4vw,30px)] font-bold tracking-[-.025em] text-bh-ink-purple">Discover → Understand → Trust → Act → Measure</p><p className="mt-3 max-w-[64ch] leading-[1.65] font-medium text-bh-muted">The goal is not to promise that an AI assistant will recommend your business. It's to give customers, search engines, and AI systems clearer, more trustworthy information about who you are, what you offer, and what someone can do next.</p></div></div></section>

      <section className="px-6 py-16 sm:px-[52px]"><div className="mx-auto max-w-[980px]"><Eyebrow>How it works</Eyebrow><div className="mt-7 grid gap-5 md:grid-cols-2">{process.map(([title, description]) => <div key={title} className="rounded-3xl border border-bh-hairline bg-bh-card/70 p-7"><h3 className="text-xl font-bold tracking-[-.02em] text-bh-ink-purple">{title}</h3><p className="mt-2 leading-[1.6] font-medium text-bh-muted">{description}</p></div>)}</div></div></section>

      <section className="px-6 py-16 sm:px-[52px]"><div className="mx-auto max-w-[980px]"><div className="rounded-3xl border border-bh-hairline bg-bh-card/70 p-8"><Eyebrow>Pricing</Eyebrow><h2 className="mt-5 text-3xl font-bold tracking-[-.035em] text-bh-ink">Every business is different.</h2><p className="mt-4 max-w-[65ch] leading-[1.65] font-medium text-bh-muted">Some businesses need a few targeted fixes. Others have larger website, search, identity, or customer-experience problems. I start with the free review, then recommend a scope and give you a price before any paid work begins.</p></div></div></section>

      <section className="px-6 py-20 sm:px-[52px]"><div className="mx-auto max-w-[980px]"><Eyebrow>For Minnesota Muslim businesses & halal food businesses</Eyebrow><h2 className="mt-5 max-w-[18ch] text-[clamp(32px,4.5vw,54px)] leading-[1] font-bold tracking-[-.045em] text-bh-ink">Fix your presence. Then help more people find you.</h2><p className="mt-6 max-w-[67ch] text-[17px] leading-[1.7] font-medium text-bh-body">I also run two Minnesota directories with different purposes: MNHalal helps people discover halal food businesses, while MNMuslim helps people discover Muslim businesses and service providers outside the food category. If your business fits one of those directories, it gives you another relevant place to be discovered beyond your own website and search presence.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-bh-hairline bg-bh-card/70 p-8"><h3 className="text-2xl font-bold tracking-[-.03em] text-bh-ink-purple">Get listed for free</h3><p className="mt-3 leading-[1.65] font-medium text-bh-muted"><strong>MNHalal is for halal food businesses</strong> such as restaurants, cafés, bakeries, food trucks, caterers, markets, and other halal food options. <strong>MNMuslim is for Muslim businesses and service providers outside the food category</strong>, such as professional services, education, health and wellness, home services, and other local services. Listings are free.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="https://www.mnhalal.com/submit" target="_blank" rel="noopener noreferrer" className="rounded-full bg-bh-purple px-5 py-2.5 text-sm font-bold text-white no-underline">List a halal food business on MNHalal →</Link><Link href="https://mnmuslim.com/submit" target="_blank" rel="noopener noreferrer" className="rounded-full border border-bh-purple px-5 py-2.5 text-sm font-bold text-bh-purple no-underline">List a business or service on MNMuslim →</Link></div></div>
          <div className="rounded-3xl border border-bh-hairline bg-bh-card/70 p-8"><h3 className="text-2xl font-bold tracking-[-.03em] text-bh-ink-purple">Improve your listing through the free review</h3><p className="mt-3 leading-[1.65] font-medium text-bh-muted">If you're already listed—or you add your business—the Business Presence Review can also help improve the information on your MNHalal or MNMuslim listing. Accurate services or food details, hours, contact information, descriptions, and working customer-action links make the listing more useful for people and give search and AI systems clearer information to understand.</p></div>
          <div className="rounded-3xl border border-bh-hairline bg-bh-card/70 p-8"><h3 className="text-2xl font-bold tracking-[-.03em] text-bh-ink-purple">Become Owner Verified — free</h3><p className="mt-3 leading-[1.65] font-medium text-bh-muted">Owner Verified means important listing information has been confirmed directly with the business owner or an authorized representative. It helps keep your listing accurate and up to date, gives customers more confidence in the information they're seeing, and gives MNHalal or MNMuslim stronger first-party information instead of relying only on what can be found elsewhere online.</p></div>
          <div className="rounded-3xl border border-bh-hairline bg-bh-card/70 p-8"><h3 className="text-2xl font-bold tracking-[-.03em] text-bh-ink-purple">More visibility when you want it</h3><p className="mt-3 leading-[1.65] font-medium text-bh-muted">Free listings and Owner Verification stay free. Optional paid visibility will include featured directory placement, Instagram promotion, and bundled visibility across the relevant platforms.</p></div>
        </div>
        <div className="mt-8 rounded-3xl border border-bh-hairline bg-bh-card/70 p-8 sm:p-10"><Eyebrow>Instagram discovery</Eyebrow><h3 className="mt-5 text-[clamp(27px,3.5vw,40px)] font-bold tracking-[-.04em] text-bh-ink">Reach the communities already looking for what you offer.</h3><p className="mt-4 max-w-[65ch] leading-[1.65] font-medium text-bh-muted">We also use dedicated Instagram pages to help Minnesota businesses reach the communities already looking for what they offer.</p><div className="mt-7 grid gap-5 md:grid-cols-3">
          <div><Link href="https://www.instagram.com/mnhalalfood/" target="_blank" rel="noopener noreferrer" className="font-bold text-bh-ink-purple no-underline hover:text-bh-orange">@mnhalalfood ↗</Link><p className="mt-2 text-sm leading-[1.6] font-medium text-bh-muted">Helping people discover halal food in Minnesota, while giving local halal food businesses another way to reach customers.</p></div>
          <div><Link href="https://www.instagram.com/mnmuslimbusinesses/" target="_blank" rel="noopener noreferrer" className="font-bold text-bh-ink-purple no-underline hover:text-bh-orange">@mnmuslimbusinesses ↗</Link><p className="mt-2 text-sm leading-[1.6] font-medium text-bh-muted">Helping people discover Muslim businesses and service providers in Minnesota, while giving those businesses another way to reach the local community.</p></div>
          <div><Link href="https://www.instagram.com/mnmuslimevents/" target="_blank" rel="noopener noreferrer" className="font-bold text-bh-ink-purple no-underline hover:text-bh-orange">@mnmuslimevents ↗</Link><p className="mt-2 text-sm leading-[1.6] font-medium text-bh-muted">Helping people find Muslim events across Minnesota and giving organizers another way to get their events in front of the community.</p></div>
        </div></div>
      </div></section>

      <section className="px-6 py-16 text-center sm:px-[52px]"><div className="mx-auto max-w-[760px] rounded-3xl border border-bh-hairline bg-bh-card/70 p-8 sm:p-12"><Eyebrow>Start with the review</Eyebrow><h2 className="mt-5 text-[clamp(30px,4vw,48px)] leading-[1] font-bold tracking-[-.045em] text-bh-ink">Not sure what's wrong with your online presence? That's what the review is for.</h2><p className="mx-auto mt-5 max-w-[55ch] leading-[1.65] font-medium text-bh-muted">I'll look at your public online presence, share the most important things I find, and tell you what I'd recommend fixing. There's no obligation to purchase anything.</p><Link href={reviewUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-block rounded-full bg-bh-purple px-7 py-3.5 text-[15px] font-bold text-white no-underline transition-transform duration-200 hover:-translate-y-0.5">Request a Free Business Presence Review</Link></div></section>
      <Footer />
    </main>
  );
}
