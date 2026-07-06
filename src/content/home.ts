// Homepage copy — source of truth for section content.
// Mirrors content/homepage-content.md in the design handoff. Edit copy here;
// do not hardcode strings in components.

import { taglineWords } from "./site";

export const hero = {
  headline: {
    before: "Building ",
    accent: "useful",
    after: " AI-powered products.",
  },
  supporting: taglineWords,
  primaryCta: { label: "Book an AI MVP Strategy Session", href: "#book" },
  recentlyShipped: {
    eyebrow: "Recently shipped",
    links: [
      { label: "MNMuslim", href: "#mnmuslim", accent: "orange" as const },
      { label: "MNHalal", href: "#mnhalal", accent: "purple" as const },
      {
        label: "MNMuslim Services",
        href: "#mnmuslim-services",
        accent: "orange" as const,
      },
    ],
  },
};

export type ProductId = "mnmuslim" | "mnhalal" | "mnmuslim-services";

export const productsSection = {
  eyebrow: null,
  heading: { before: "Products I've ", accent: "Built", after: "" },
  supporting: "Building useful AI-powered products.",
  items: [
    {
      id: "mnmuslim" as ProductId,
      plainName: "MNMuslim",
      name: { before: "MNMuslim", accent: "", after: "" },
      description:
        "Discover Muslim services, halal food, businesses, and community resources.",
      // TODO: replace with the real MNMuslim URL before launch.
      href: "#",
      accent: "orange" as const,
      medallionTint: "purple" as const,
      side: "left" as const,
      flagship: true,
    },
    {
      id: "mnhalal" as ProductId,
      plainName: "MNHalal",
      name: { before: "MNHalal", accent: "", after: "" },
      description:
        "Discover halal restaurants, cafés, bakeries, and markets across Minnesota.",
      // TODO: replace with the real MNHalal URL before launch.
      href: "#",
      accent: "orange" as const,
      medallionTint: "orange" as const,
      side: "right" as const,
      flagship: false,
    },
    {
      id: "mnmuslim-services" as ProductId,
      plainName: "MNMuslim Services",
      name: { before: "MNMuslim ", accent: "Services", after: "" },
      description:
        "Find trusted Muslim professionals and local services across Minnesota.",
      // TODO: replace with the real MNMuslim Services URL before launch.
      href: "#",
      accent: "purple" as const,
      medallionTint: "purple" as const,
      side: "left" as const,
      flagship: false,
    },
  ],
};

export const strategySession = {
  heading: { before: "AI MVP Strategy ", accent: "Session", after: "." },
  intro: "Have an idea but not sure what to build first?",
  body: "This one-on-one session is designed to help you gain clarity before investing your time and energy. Together, we'll evaluate your idea, define a practical MVP, and create a plan you can confidently move forward with.",
  panelEyebrow: "You'll leave with",
  checklist: [
    { text: "A clearer product direction", accent: "orange" as const },
    { text: "A practical MVP plan", accent: "purple" as const },
    { text: "Recommended AI tools for your project", accent: "orange" as const },
    { text: "Clear next steps", accent: "purple" as const },
  ],
  cta: { label: "Book an AI MVP Strategy Session", href: "#contact" },
};

export const about = {
  eyebrow: "About",
  heading: "Hi, I'm Hamdi",
  lead: { before: "I love building ", accent: "useful", after: " products that solve real problems." },
  paragraphs: [
    "AI has completely changed the way I build. It allows me to turn ideas into working products faster than ever while continuously learning and improving along the way.",
    "Through By Hamdi, I share that journey openly and help founders build useful products with greater clarity and confidence.",
  ],
};

export const buildingInPublic = {
  eyebrow: "Building in public",
  heading: { before: "Follow the ", accent: "journey", after: "." },
  body: "Follow along as I build products, experiment with AI, share what I learn, and document the journey.",
  channels: [
    {
      id: "youtube" as const,
      name: "YouTube",
      description: "Build sessions and product breakdowns.",
      actionLabel: "Subscribe",
      arrow: "↗",
      // TODO: wire real YouTube URL before launch.
      href: "#",
      accent: "orange" as const,
      tinted: false,
    },
    {
      id: "github" as const,
      name: "GitHub",
      description: "Open code, experiments, works in progress.",
      actionLabel: "Follow",
      arrow: "↗",
      // TODO: wire real GitHub URL before launch.
      href: "#",
      accent: "purple" as const,
      tinted: false,
    },
    {
      id: "x" as const,
      name: "X",
      description: "Daily notes from the build.",
      actionLabel: "Follow",
      arrow: "↗",
      // TODO: wire real X handle before launch.
      href: "#",
      accent: "orange" as const,
      tinted: false,
    },
    {
      id: "newsletter" as const,
      name: "Newsletter",
      description: "The occasional deep dive, in your inbox.",
      actionLabel: "Join",
      arrow: "→",
      // TODO: wire real newsletter signup endpoint before launch.
      href: "#",
      accent: "purple" as const,
      tinted: true,
    },
  ],
};
