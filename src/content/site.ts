// Site-wide config shared across the current homepage and future pages
// (products, writing, newsletter, services). Edit copy here, not in components.

export const brand = {
  name: "By Hamdi",
  wordmarkPrefix: "By",
  wordmarkName: "Hamdi",
  description: "A one-person studio building useful AI-powered products in Minnesota.",
};

export const taglineWords = [
  { text: "Build", accentColor: "orange" as const },
  { text: "Learn", accentColor: "purple" as const },
  { text: "Share", accentColor: "orange" as const },
];

export const contact = { email: "hello@byhamdi.com", ctaLabel: "Contact" };
export const nav = {
  links: [
    { label: "Products", href: "/#bh-products" },
    { label: "AI Sessions", href: "/ai-sessions" },
    { label: "About", href: "/#about" },
  ],
  contact: { label: "Contact", href: `mailto:${contact.email}` },
};

export const socials = {
  youtube: "https://www.youtube.com/@HamdiMohamudOfficial",
  github: "https://github.com/hamdi2008",
  x: "https://x.com/hamdimahmuud",
  instagram: "https://www.instagram.com/hamdimohamud_",
  linkedin: "https://www.linkedin.com/in/hamdi-hassan-ai/",
};

export const productUrls = {
  fursahhouse: "https://fursahhouse.com",
  mnhalal: "https://mnhalal.com",
  mnmuslim: "https://mnmuslim.com",
  lifeinviews: "https://lifeinviews.com",
  mnsomalis: "https://mnsomalis.com",
};

export const productLinks = [
  { label: "Fursah House", href: productUrls.fursahhouse },
  { label: "MNHalal", href: productUrls.mnhalal },
  { label: "MNMuslim", href: productUrls.mnmuslim },
  { label: "Life in Views", href: productUrls.lifeinviews },
  { label: "MN Somali", href: productUrls.mnsomalis },
];

export const footerNav = {
  products: productLinks,
  learn: [
    { label: "AI Sessions with Hamdi", href: "/ai-sessions" },
    { label: "YouTube", href: socials.youtube },
  ],
  follow: [
    { label: "X / Twitter", href: socials.x },
    { label: "Instagram", href: socials.instagram },
    { label: "GitHub", href: socials.github },
  ],
  connect: [
    { label: "Email", href: `mailto:${contact.email}` },
    { label: "LinkedIn", href: socials.linkedin },
  ],
};

export const footer = { description: "Building useful products. Sharing what I learn.", copyright: `© ${new Date().getFullYear()} By Hamdi`, madeIn: "Made in Minnesota" };
