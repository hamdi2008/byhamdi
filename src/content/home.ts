// Homepage copy — source of truth for section content.
import { aiSessions } from "./ai-sessions";
import { productLinks, productUrls } from "./site";

export const hero = {
  headline: { before: "Building ", accent: "useful", after: " AI-powered products." },
  supporting: "I build products, share what I learn, and help others use AI to bring their own ideas to life.",
  primaryCta: { label: "AI Sessions with Hamdi", href: "/ai-sessions" },
  products: { eyebrow: "Products I've Built", links: productLinks },
};

export const services = {
  eyebrow: aiSessions.name,
  description: "Personalized, hands-on guidance to help you solve problems, create things, and learn to use AI independently.",
  learnMore: { label: "Learn More", href: "/ai-sessions" },
};

export type ProductId = "lifeinviews" | "mnsomalis" | "mnmuslim" | "mnhalal";
export const productsSection = {
  heading: { before: "Products I've ", accent: "Built", after: "" },
  featured: {
    id: "fursahhouse",
    name: "Fursah House",
    logo: "/brand/fursah-house-avatar-cream.svg",
    tagline: "Where founders and opportunities meet.",
    description: "Discover founders, projects, and opportunities to connect, collaborate, and support one another.",
    href: productUrls.fursahhouse,
  },
  items: [
    { id: "mnhalal" as ProductId, name: "MNHalal", description: "Discover halal restaurants, markets, caterers, food businesses, and more across Minnesota.", href: productUrls.mnhalal, accent: "orange" as const, medallionTint: "orange" as const },
    { id: "mnmuslim" as ProductId, name: "MNMuslim", description: "Discover Muslim businesses, services, organizations, events, and community resources across Minnesota.", href: productUrls.mnmuslim, accent: "orange" as const, medallionTint: "purple" as const },
    { id: "lifeinviews" as ProductId, name: "Life in Views", description: "A personal operating system for organizing your priorities, tracking what matters, and reflecting on your progress.", href: productUrls.lifeinviews, accent: "purple" as const, medallionTint: "purple" as const },
    { id: "mnsomalis" as ProductId, name: "MN Somali", description: "Discover data, context, and sourced information about Minnesota’s Somali community.", href: productUrls.mnsomalis, accent: "purple" as const, medallionTint: "purple" as const },
  ],
};

export const about = {
  eyebrow: "About", heading: "Hi, I'm Hamdi", lead: { before: "I build ", accent: "useful", after: " digital products, experiment with new tools, and share what I learn along the way." },
  paragraphs: ["I'm a self-taught builder who believes you don't have to know everything before you start. I went from teaching myself to code and building websites to launching my own products, using AI and other tools to turn ideas into things people can actually use.", "Through By Hamdi, I share what I'm building and learning, while helping others use technology to solve problems and create things for themselves."],
};
