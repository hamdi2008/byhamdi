// Homepage copy — source of truth for section content.
import { taglineWords, socials } from "./site";

export const hero = {
  headline: { before: "Building ", accent: "useful", after: " AI-powered products." },
  supporting: taglineWords,
  primaryCta: { label: "Digital Presence & AI Help", href: "/business" },
  secondaryCta: { label: "Vibe Coding Help", href: "/vibe-coding-help" },
  recentlyShipped: {
    eyebrow: "Recently shipped",
    links: [
      { label: "MNHalal", href: "https://www.mnhalal.com/", accent: "purple" as const },
      { label: "MNMuslim", href: "https://www.mnmuslim.com/", accent: "orange" as const },
      { label: "Life in Views", href: "https://lifeinviews.com", accent: "orange" as const },
      { label: "MN Somali", href: "https://www.mnsomalis.com/", accent: "purple" as const },
    ],
  },
};

export const services = {
  eyebrow: "Services",
  heading: { before: "Ways I Can ", accent: "Help", after: "." },
  business: {
    eyebrow: "For businesses",
    title: "Digital Presence & AI Readiness",
    description: "Is your business showing up correctly online? I help businesses fix problems across their website and online presence, improve their search foundation, and prepare for discovery through AI.",
    cta: { label: "Learn More", href: "/business" },
    meta: "Start with a free Business Presence Review",
  },
  vibe: {
    eyebrow: "For people building with AI",
    title: "Vibe Coding Help",
    description: "Built something with AI and got stuck? Get 1-on-1 help getting your AI-built product working and live.",
    cta: { label: "Request Help", href: "/vibe-coding-help" },
    meta: "$99 · 60–90 minutes",
  },
};

export type ProductId = "lifeinviews" | "mnsomalis" | "mnmuslim" | "mnhalal";
export const productsSection = {
  heading: { before: "Products I've ", accent: "Built", after: "" },
  supporting: "Building useful AI-powered products.",
  items: [
    { id: "mnhalal" as ProductId, name: "MNHalal", description: "Discover halal restaurants, markets, caterers, food businesses, and more across Minnesota.", href: "https://www.mnhalal.com/", accent: "orange" as const, medallionTint: "orange" as const },
    { id: "mnmuslim" as ProductId, name: "MNMuslim", description: "Discover Muslim businesses, services, organizations, events, and community resources across Minnesota.", href: "https://www.mnmuslim.com/", accent: "orange" as const, medallionTint: "purple" as const },
    { id: "lifeinviews" as ProductId, name: "Life in Views", description: "A personal operating system for organizing your priorities, tracking what matters, and reflecting on your progress.", href: "https://lifeinviews.com", accent: "purple" as const, medallionTint: "purple" as const },
    { id: "mnsomalis" as ProductId, name: "MN Somali", description: "Discover data, context, and sourced information about Minnesota’s Somali community.", href: "https://www.mnsomalis.com/", accent: "purple" as const, medallionTint: "purple" as const },
  ],
};

export const about = {
  eyebrow: "About", heading: "Hi, I'm Hamdi", lead: { before: "I love building ", accent: "useful", after: " products that solve real problems." },
  paragraphs: ["AI has completely changed the way I build. It allows me to turn ideas into working products faster than ever while continuously learning and improving along the way.", "Through By Hamdi, I share what I'm building, what I'm learning, and what it actually takes to turn AI-built ideas into real products."],
};

export const buildingInPublic = {
  eyebrow: "Building in public",
  heading: { before: "Follow the ", accent: "journey", after: "." },
  body: "Follow along as I build products, work with businesses, experiment with AI, share what I learn, and document what happens along the way.",
  channels: [
    { id: "youtube" as const, name: "YouTube", description: "Builder diaries, product breakdowns, and what I'm learning along the way.", actionLabel: "Subscribe", arrow: "↗", href: socials.youtube, accent: "orange" as const },
    { id: "github" as const, name: "GitHub", description: "Open code, experiments, and works in progress.", actionLabel: "Follow", arrow: "↗", href: socials.github, accent: "purple" as const },
    { id: "x" as const, name: "X", description: "Daily notes from what I'm building, testing, and learning.", actionLabel: "Follow", arrow: "↗", href: socials.x, accent: "orange" as const },
  ],
};
