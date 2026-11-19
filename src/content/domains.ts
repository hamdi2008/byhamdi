// Domains for sale — source of truth for the /domains page.
// Community domains are sold only through this page, after Hamdi reviews the buyer.

import { contact } from "./site";

export type DomainListing = {
  name: string;
  blurb: string;
};

export const domainsPage = {
  name: "Domains for sale",
  url: "https://byhamdi.com/domains",
  headline: "Good names for people building good things.",
  intro:
    "I have a few domains that carry the name of our community and that I'm no longer going to build on. I want them to go to someone who will use them well.",
  communityNote:
    "These are not listed on any marketplace. Send me an offer and tell me what you plan to build. I'll only pass them to someone who will use them to serve the Minnesota Somali and Muslim community.",
};

export const communityDomains: DomainListing[] = [
  { name: "mnsomali.com", blurb: "A clear, local name for a Minnesota Somali business, directory, media outlet, or organization." },
  { name: "mnsomalis.com", blurb: "A community name for Somali Minnesotans: news, events, resources, or a gathering place online." },
  { name: "mnmuslim.com", blurb: "A short, memorable name for a Minnesota Muslim organization, directory, or community resource." },
];

export const offerSteps = [
  { title: "Send an offer", body: "Email me with the domain you want and what you'd like to offer." },
  { title: "Tell me your plans", body: "Share who you are and what you plan to build with it." },
  { title: "I review", body: "I'll get back to you personally. A higher offer doesn't win on its own." },
  { title: "Transfer", body: "Once we agree, I'll transfer the domain to you through a secure escrow or registrar transfer." },
];

/** mailto link with the domain prefilled, asking for the details Hamdi needs to review the buyer. */
export function offerHref(domain: string) {
  const subject = `Offer for ${domain}`;
  const body = `Hi Hamdi,\n\nI'm interested in ${domain}.\n\nWho I am:\n\nWhat I plan to build with it:\n\nMy offer (USD):\n`;
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
