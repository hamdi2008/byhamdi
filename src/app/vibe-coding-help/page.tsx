import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import { vibeCodingHelp } from "@/content/home";

const pageUrl = "https://byhamdi.com/vibe-coding-help";
const requestUrl = vibeCodingHelp.cta.href;

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
    "A 60–90 minute hands-on help session for people who have started building with AI and are stuck on a specific product, deployment, setup, feature, integration, error, or next-step blocker.",
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
};

export default function VibeCodingHelpPage() {
  return (
    <main className="relative z-[1] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Nav />

      <section className="px-6 pt-12 pb-16 sm:px-[52px] sm:pt-20">
        <div className="mx-auto max-w-[980px]">
          <Eyebrow>1-on-1 help for AI builders</Eyebrow>
          <h1 className="mt-5 max-w-[13ch] text-[clamp(44px,7vw,84px)] leading-[.94] font-bold tracking-[-.055em] text-bh-ink">
            Vibe Coding Help Session.
          </h1>
          <p className="mt-7 max-w-[31ch] text-[clamp(21px,2.3vw,30px)] leading-[1.25] font-semibold tracking-[-.025em] text-bh-ink-purple">
            Built something with AI but stuck on what comes next?
          </p>
          <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.7] font-medium text-bh-body sm:text-[19px]">
            If you&apos;ve already started building with Claude, ChatGPT, Cursor, or another AI tool and reached a point where you&apos;re not sure what to do next, bring your project and your blocker. I&apos;ll review your request first, and if it&apos;s something I can help with, we&apos;ll work through it together.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={requestUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-bh-purple px-7 py-3.5 text-[15px] font-bold text-white no-underline transition-transform duration-200 hover:-translate-y-0.5"
            >
              Request Help
            </Link>
            <span className="text-[17px] font-bold text-bh-ink-purple">$99 · 60–90 minutes</span>
          </div>
          <p className="mt-3 text-sm font-medium text-bh-muted">
            You won&apos;t be charged or booked when you submit a request.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-[52px]">
        <div className="mx-auto grid max-w-[980px] gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-bh-hairline bg-bh-card/70 p-8">
            <Eyebrow>You might be stuck on</Eyebrow>
            <div className="mt-6 space-y-6">
              {vibeCodingHelp.checklist.map((item) => (
                <div key={item.title}>
                  <h2 className="text-xl font-bold tracking-[-.02em] text-bh-ink-purple">{item.title}</h2>
                  <p className="mt-1.5 leading-[1.6] font-medium text-bh-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-bh-hairline bg-bh-card/70 p-8">
            <Eyebrow>How it works</Eyebrow>
            <div className="mt-6 space-y-6 text-bh-body">
              <div>
                <h2 className="text-xl font-bold tracking-[-.02em] text-bh-ink-purple">1. Tell me what you built</h2>
                <p className="mt-1.5 leading-[1.6] font-medium">Send your project, the tools you used, and the specific problem that&apos;s blocking you.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-[-.02em] text-bh-ink-purple">2. I review the request</h2>
                <p className="mt-1.5 leading-[1.6] font-medium">I&apos;ll make sure the problem is a good fit before we schedule anything.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-[-.02em] text-bh-ink-purple">3. We work on the blocker</h2>
                <p className="mt-1.5 leading-[1.6] font-medium">If it&apos;s a fit, we&apos;ll spend 60–90 minutes working toward a practical solution together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center sm:px-[52px]">
        <div className="mx-auto max-w-[720px] rounded-3xl border border-bh-hairline bg-bh-card/70 p-8 sm:p-12">
          <Eyebrow>Bring the blocker</Eyebrow>
          <h2 className="mt-5 text-[clamp(30px,4vw,48px)] leading-[1] font-bold tracking-[-.045em] text-bh-ink">
            You don&apos;t need another tutorial. You need help getting unstuck.
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] leading-[1.65] font-medium text-bh-muted">
            Tell me what you&apos;re building and where you&apos;re stuck. I&apos;ll review it before we meet so we can focus the session on the problem that&apos;s actually stopping you.
          </p>
          <Link
            href={requestUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-full bg-bh-purple px-7 py-3.5 text-[15px] font-bold text-white no-underline transition-transform duration-200 hover:-translate-y-0.5"
          >
            Request Help
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
