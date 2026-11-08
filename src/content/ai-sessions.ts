// AI Sessions with Hamdi — source of truth for the /ai-sessions page, the homepage
// section, and the /api/v1/services/ai-sessions response.

// The approved description is split so the page can show the goals as a scannable list.
const descriptionLead = "Whether you want to";
const descriptionGoals = [
  "build your own website",
  "improve your resume",
  "create better content",
  "improve your YouTube videos",
  "automate repetitive tasks",
  "solve a specific problem",
];
const descriptionClose = "I'll guide you through using AI and the right tools so you can do it yourself.";

export const aiSessions = {
  name: "AI Sessions with Hamdi",
  url: "https://byhamdi.com/ai-sessions",
  headline: "Learn to use AI for something you actually want to do.",
  descriptionLead,
  descriptionGoals,
  descriptionClose,
  description: `${descriptionLead} ${descriptionGoals.slice(0, -1).join(", ")}, or ${descriptionGoals[descriptionGoals.length - 1]}, ${descriptionClose}`,
  requestUrl: "https://forms.gle/vhJnhreD4BKoeE1U9",
  requestLabel: "Request a Session",
  requestNote: "Submit your request first. I'll review your goal and contact you to discuss the next steps. No payment is required to submit.",
  optionsNote: "Both options are personalized and beginner-friendly.",
};

export const learningApproach = ["I show you", "We do it together", "You do it yourself"];

export const sessionOptions = [
  {
    id: "single-ai-session",
    name: "Single AI Session",
    price: 50,
    details: ["One 60-minute session", "Personalized, one-on-one", "For a focused task or learning goal"],
  },
  {
    id: "four-week-ai-learning",
    name: "4-Week AI Learning",
    price: 150,
    details: ["Four 60-minute sessions", "One session per week", "For larger projects or learning goals requiring practice over time"],
    note: "A one-time four-week package, not a recurring subscription.",
  },
];

export const howItWorks = [
  { title: "Request", body: "Tell me what you want to learn or accomplish." },
  { title: "Review", body: "I'll review your request and we'll agree on a learning goal." },
  { title: "Work together", body: "We'll work on it through personalized, hands-on sessions." },
  { title: "Practice", body: "You'll practice using the tools yourself so you can apply what you've learned independently." },
];
