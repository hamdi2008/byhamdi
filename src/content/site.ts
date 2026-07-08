// Site-wide config shared across the current homepage and future pages
// (products, writing, newsletter, services). Edit copy here, not in components.

export const brand = {
  name: "By Hamdi",
  wordmarkPrefix: "By",
  wordmarkName: "Hamdi",
  description:
    "A one-person studio building useful AI-powered products in Minnesota.",
};

export const taglineWords = [
  { text: "Build", accentColor: "orange" as const },
  { text: "Learn", accentColor: "purple" as const },
  { text: "Share", accentColor: "orange" as const },
];

export const contact = {
  email: "hamdi2008@gmail.com",
  ctaLabel: "Contact",
};

export const nav = {
  contact: { label: "Contact", href: `mailto:${contact.email}` },
};

export const socials = {
  youtube: "https://www.youtube.com/@hamdimohamud08",
  github: "https://github.com/hamdi2008",
  x: "https://x.com/hamdimahmuud",
};

export const products = [
  { label: "MN Somali", href: "https://www.mnsomalis.com/" },
  { label: "MNMuslim", href: "https://www.mnmuslim.com/" },
  { label: "MNHalal", href: "https://www.mnhalal.com/" },
];

export const footerNav = {
  explore: [
    { label: "Products", href: "#bh-products" },
    { label: "Strategy Session", href: "#book" },
    { label: "About", href: "#about" },
    { label: "Building in public", href: "#building" },
  ],
  products,
  connect: [
    { label: "X", href: socials.x },
    { label: "GitHub", href: socials.github },
    { label: "Contact", href: `mailto:${contact.email}` },
  ],
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} By Hamdi`,
  madeIn: "Made in Minnesota",
};
