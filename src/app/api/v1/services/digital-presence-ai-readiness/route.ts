import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    id: "digital-presence-ai-readiness",
    name: "Digital Presence & AI Readiness",
    provider: { name: "Hamdi Mohamud Hassan", brand: "By Hamdi", website: "https://byhamdi.com" },
    description: "A business digital presence review and implementation service covering online information cleanup, website fixes, search and SEO foundations, identity and trust, customer action paths, and AI and agent readiness.",
    audience: "Businesses that want a cleaner, more accurate online presence and stronger foundations for customer, search-engine, and AI discovery.",
    review: {
      price: 0,
      currency: "USD",
      areas: ["digital presence", "website", "search and SEO", "identity and trust", "customer actions", "AI and agent readiness"],
      url: "https://forms.gle/aJuBMpbNd7JY6JHbA",
      note: "The Business Presence Review is free. If Hamdi identifies implementation work she can help with, she provides recommendations and a quote before any paid work begins. There is no obligation to purchase anything."
    },
    pricing: { model: "project quote after free review", note: "Paid implementation scope and price depend on the issues found and the work the business chooses to proceed with." },
    framework: ["Discover", "Understand", "Trust", "Act", "Measure"],
    canonicalUrl: "https://byhamdi.com/business"
  });
}
