import { NextResponse } from "next/server";
import { blockers, featuredBlocker, fit, howItWorks, intro, notes, scope, vibeService } from "@/content/vibe";

export function GET() {
  return NextResponse.json({
    id: "vibe-coding-help",
    name: vibeService.name,
    provider: {
      name: "Hamdi Mohamud Hassan",
      brand: "By Hamdi",
      website: "https://byhamdi.com",
    },
    description: vibeService.description,
    summary: `${intro.question} ${intro.body}`,
    audience:
      "People who have already started building something with AI tools like Claude, ChatGPT, or Cursor and have hit a specific blocker. You don't need to call yourself a developer.",
    goodFitIf: fit,
    format: vibeService.format,
    price: {
      amount: vibeService.price.amount,
      currency: vibeService.price.currency,
      unit: vibeService.price.unit,
    },
    duration: vibeService.duration,
    commonBlockers: [featuredBlocker, ...blockers],
    process: howItWorks.map((step, i) => ({ step: i + 1, name: step.title, description: step.body })),
    scope: { is: scope.is, isNot: scope.isNot, note: notes.session },
    request: {
      url: vibeService.requestUrl,
      label: vibeService.requestLabel,
      note: "Submitting a request doesn't book a session or charge you. Hamdi reviews every request for fit before anything is scheduled.",
    },
    canonicalUrl: vibeService.url,
  });
}
