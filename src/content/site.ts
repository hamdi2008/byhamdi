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
  // TODO: confirm real contact email before launch (see README launch gaps).
  email: "hello@byhamdi.com",
  ctaLabel: "Contact",
};

export const nav = {
  contact: { label: "Contact", href: "#contact" },
};

export const socials = {
  // TODO: wire real URLs/handles before launch (see README launch gaps).
  youtube: "#",
  github: "#",
  x: "#",
  newsletter: "#",
};

export const footerNav = {
  explore: [
    { label: "Products", href: "#bh-products" },
    { label: "Strategy Session", href: "#book" },
    { label: "About", href: "#about" },
    { label: "Building in public", href: "#building" },
  ],
  products: [
    { label: "MNMuslim", href: "#" },
    { label: "MNHalal", href: "#" },
    { label: "MNMuslim Services", href: "#" },
  ],
  connect: [
    { label: "X / Twitter", href: socials.x },
    { label: "GitHub", href: socials.github },
    { label: "Email", href: `mailto:${contact.email}` },
  ],
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} By Hamdi`,
  madeIn: "Made in Minnesota",
};
