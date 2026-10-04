// Vibe Coding Help — source of truth for the /vibe-coding-help page
// and the /api/v1/services/vibe-coding-help response.

export const vibeService = {
  name: "Vibe Coding Help Session",
  url: "https://byhamdi.com/vibe-coding-help",
  requestUrl: "https://forms.gle/nRzHwcCW9GF7JLrL8",
  requestLabel: "Request Help",
  price: { amount: 99, currency: "USD", label: "$99", unit: "per session" },
  duration: "60–90 minutes",
  format: "1-on-1 session with Hamdi, online",
  /** Shared by the service API and the page's Service JSON-LD. */
  description:
    "1-on-1 help for people who built something with AI and got stuck: a 60–90 minute session working through the blocker that's keeping an AI-built product from moving forward. Requests are reviewed for fit before anything is scheduled.",
};

export const intro = {
  question: "Built something with AI and got stuck?",
  body: "Get 1-on-1 help working through the blocker that's keeping your AI-built product from moving forward.",
};

/** Shown first and emphasized on the page. */
export const featuredBlocker = "I don't know what to do next";

export const blockers = [
  "Deployment",
  "GitHub & repositories",
  "Vercel & hosting",
  "Supabase & databases",
  "Authentication",
  "Domains & DNS",
  "Email setup",
  "Payments",
  "APIs & integrations",
  "Bugs & broken flows",
  "Understanding what the AI-generated code is doing",
];

export const fit = [
  "You've already started building something.",
  "You're using AI tools like Claude, ChatGPT, or Cursor to help you build.",
  "You've hit a specific blocker, or the next step is confusing.",
  "You want to work through it together, not hand the whole project off.",
];

export const howItWorks = [
  { title: "Request", body: "Send your project and describe the blocker. Nothing is booked or charged yet." },
  { title: "I review", body: "I read your request first to make sure a session is a reasonable fit for the problem." },
  { title: "We work together", body: "If it's a fit, we arrange a time. Then we spend 60–90 minutes working through the blocker together." },
];

export const scope = {
  is: "Focused, hands-on help with a product you've already started.",
  isNot: "A full product build, a long-term development contract, or a general coding course.",
};

export const notes = {
  request: "Submitting a request doesn't book a session or charge you. I review it first.",
  session: "Some problems can't be fully solved in a single session. The goal is to work through your blocker together and leave you with a clear next step.",
  whyHamdi: "I build and ship my own AI-powered products. Along the way I keep working through the same practical problems: deployment, databases, auth, integrations, domains, payments, and getting an AI-generated app from prototype to something real and usable.",
};
