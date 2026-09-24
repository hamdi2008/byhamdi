// Homepage copy — source of truth for section content.
// Mirrors content/homepage-content.md in the design handoff. Edit copy here;
// do not hardcode strings in components.

import { taglineWords, products, socials } from "./site";

const googleFormLink = "https://forms.gle/nRzHwcCW9GF7JLrL8";

export const hero = {
  headline: {
    before: "Building ",
    accent: "useful",
    after: " AI-powered products.",
  },
  supporting: taglineWords,
  primaryCta: { label: "Get Vibe Coding Help", href: "/vibe-coding-help" },
  recentlyShipped: {
    eyebrow: "Recently shipped",
    links: products.map((p, i) => ({
      label: p.label,
      href: p.href,
      accent: (i % 2 === 0 ? "orange" : "purple") as "orange" | "purple",
    })),
  },
};

export type ProductId = "lifeinviews" | "mnsomalis" | "mnmuslim" | "mnhalal";

export const productsSection = {
  eyebrow: null,
  heading: { before: "Products I've ", accent: "Built", after: "" },
  supporting: "Building useful AI-powered products.",
  items: [
    {
      id: "lifeinviews" as ProductId,
      plainName: "Life in Views",
      name: { before: "Life in Views", accent: "", after: "" },
      description:
        "A personal operating system for organizing your priorities, tracking what matters, and reflecting on your progress.",
      href: "https://lifeinviews.com",
      accent: "purple" as const,
      medallionTint: "purple" as const,
      side: "left" as const,
      flagship: false,
    },
    {
      id: "mnsomalis" as ProductId,
      plainName: "MN Somali",
      name: { before: "MN Somali", accent: "", after: "" },
      description:
        "Discover data, context, and sourced information about Minnesota’s Somali community.",
      href: "https://www.mnsomalis.com/",
      accent: "purple" as const,
      medallionTint: "purple" as const,
      side: "right" as const,
      flagship: false,
    },
    {
      id: "mnmuslim" as ProductId,
      plainName: "MNMuslim",
      name: { before: "MNMuslim", accent: "", after: "" },
      description:
        "Discover Muslim services, halal food, businesses, and community resources.",
      href: "https://www.mnmuslim.com/",
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
      href: "https://www.mnhalal.com/",
      accent: "orange" as const,
      medallionTint: "orange" as const,
      side: "right" as const,
      flagship: false,
    },
  ],
};

export const vibeCodingHelp = {
  heading: { before: "Vibe Coding Help ", accent: "Session", after: "." },
  intro: "Built something with AI but stuck on what comes next?",
  body: [
    "If you've already started building with Claude, ChatGPT, Cursor, or another AI tool and reached a point where you're not sure what to do next, bring your project and your blocker.",
    "I'll review what you send before we meet to make sure it's something I can help with. If it is, we'll spend 60–90 minutes working through your specific blocker and toward a solution together.",
  ],
  price: { amount: "$99", duration: "60–90 minutes" },
  panelEyebrow: "You might be stuck on",
  checklist: [
    {
      title: "Getting your prototype out of the AI tool",
      description: "You've built something, but don't know how to take it further.",
      accent: "orange" as const,
    },
    {
      title: "Getting your product live",
      description: "You're trying to deploy or share what you've built outside the tool.",
      accent: "purple" as const,
    },
    {
      title: "Making something actually work",
      description: "A feature, connection, setup, or error is stopping you from moving forward.",
      accent: "orange" as const,
    },
    {
      title: "Figuring out what comes next",
      description: "You don't know what your product still needs, what can wait, or what you should tackle next.",
      accent: "purple" as const,
    },
  ],
  cta: { label: "Request Help", href: googleFormLink },
  helperText: "Tell me about your project first. You won't be charged or booked when submitting a request.",
};

export const about = {
  eyebrow: "About",
  heading: "Hi, I'm Hamdi",
  lead: { before: "I love building ", accent: "useful", after: " products that solve real problems." },
  paragraphs: [
    "AI has completely changed the way I build. It allows me to turn ideas into working products faster than ever while continuously learning and improving along the way.",
    "Through By Hamdi, I share what I'm building, what I'm learning, and what it actually takes to turn AI-built ideas into real products.",
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
      href: socials.youtube,
      accent: "orange" as const,
    },
    {
      id: "github" as const,
      name: "GitHub",
      description: "Open code, experiments, works in progress.",
      actionLabel: "Follow",
      arrow: "↗",
      href: socials.github,
      accent: "purple" as const,
    },
    {
      id: "x" as const,
      name: "X",
      description: "Daily notes from the build.",
      actionLabel: "Follow",
      arrow: "↗",
      href: socials.x,
      accent: "orange" as const,
    },
  ],
};
