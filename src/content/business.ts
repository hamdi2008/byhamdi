// Digital Presence & AI Readiness — source of truth for the /business page
// and the /api/v1/services/digital-presence-ai-readiness response.

export const businessService = {
  name: "Digital Presence & AI Readiness",
  url: "https://byhamdi.com/business",
  reviewName: "Free Business Presence Review",
  reviewUrl: "https://forms.gle/aJuBMpbNd7JY6JHbA",
  /** Shared by the service API and the page's Service JSON-LD. */
  description:
    "Helps businesses make sure the information about them online is accurate, clear, and easy to act on for customers, search engines, and the AI tools people increasingly use to discover businesses. It starts with a free Business Presence Review across five areas (presence, website, discovery, information, and AI readiness), followed by free findings and priorities. Fixing anything is optional paid work, quoted separately.",
};

export const coreQuestion = "Can people, and the systems they use, find, understand, and act on accurate information about your business?";

export const goals = [
  { name: "Find", description: "Show up when someone looks for what you offer." },
  { name: "Understand", description: "Make it clear what you do, where, and when." },
  { name: "Act", description: "Make it easy to call, order, book, or visit." },
];

export const problems = [
  { title: "Different details in different places", description: "Your website, Google, and a directory each list slightly different hours, phone numbers, or addresses." },
  { title: "An outdated website", description: "Old menus or prices, a location that moved, or a page that hasn't been touched in years." },
  { title: "Services that aren't clearly explained", description: "People can't tell exactly what you offer, who it's for, or whether you serve their area." },
  { title: "A scattered online presence", description: "Forgotten profiles, duplicate listings, and links that lead nowhere." },
  { title: "No clear next step", description: "Visitors can't easily call, order, book, get directions, or reach the right person." },
  { title: "Information that's hard to understand online", description: "Important details about what you offer, where you operate, or how customers can take action aren't clearly presented." },
];

export const reviewAreas = [
  { name: "Presence", question: "Is your business represented accurately online?" },
  { name: "Website", question: "Can people quickly understand what your business does?" },
  { name: "Discovery", question: "Is there a solid foundation for being found through search?" },
  { name: "Information", question: "Are your services, location, contact details, offerings, and next steps clear and easy to get to?" },
  { name: "AI readiness", question: "Where it makes sense for your business, is your information organized so newer AI-powered search tools can understand it?" },
];

export const reviewQuestions = [
  "What's already working?",
  "What information is missing, inconsistent, or hard to find?",
  "What should be fixed first?",
  "Are there real opportunities to improve how you show up in search or AI tools?",
];

/** The four steps after a review request. Only the last is paid, and only if the business chooses it. */
export const process = [
  { title: "Review", body: "You fill out a short form about your business. I look at your public online presence.", paid: false },
  { title: "Findings", body: "I share what's already working and what's missing, inconsistent, or hard to find.", paid: false },
  { title: "Priorities", body: "I tell you what I'd fix first, and why.", paid: false },
  { title: "Fix", body: "If there's work worth doing and I can help, I'll give you a quote. You decide whether to go ahead.", paid: true },
];

export const notes = {
  review: "The review is free. If I find work I can help with, I'll explain what I recommend and give you a quote before any paid work begins.",
  assessment: "The review is an assessment, not the fixes themselves. Any implementation work is quoted separately, and only if you want it.",
  commitment: "Nothing beyond filling out the form. I'll look at your public online presence, share the most important things I find, and tell you what I'd recommend fixing. There's no obligation to purchase anything.",
  directoryListing: "For businesses listed on MNHalal or MNMuslim, the review can also help improve the accuracy and usefulness of their directory listing.",
  communityDiscovery: "I also run community discovery pages that help Minnesota Muslims find local food, businesses, services, and events.",
};

export const directories = [
  { name: "MNHalal", url: "https://www.mnhalal.com/", submitUrl: "https://www.mnhalal.com/submit", submitLabel: "List a halal food business on MNHalal", description: "Discover halal restaurants, markets, caterers, food businesses, and more across Minnesota." },
  { name: "MNMuslim", url: "https://www.mnmuslim.com/", submitUrl: "https://mnmuslim.com/submit", submitLabel: "List a business or service on MNMuslim", description: "Discover Muslim businesses, services, organizations, events, and community resources across Minnesota." },
];

export const instagram = [
  { handle: "@mnhalalfood", url: "https://www.instagram.com/mnhalalfood/", description: "Helping people discover halal food in Minnesota while giving local halal food businesses another way to reach customers." },
  { handle: "@mnmuslimbusinesses", url: "https://www.instagram.com/mnmuslimbusinesses/", description: "Helping people discover Muslim businesses and service providers in Minnesota while giving those businesses another way to reach the local community." },
  { handle: "@mnmuslimevents", url: "https://www.instagram.com/mnmuslimevents/", description: "Helping people discover Muslim events across Minnesota while giving organizers another way to reach the community." },
];
