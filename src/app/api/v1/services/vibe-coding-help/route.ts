import { NextResponse } from "next/server";
import { vibeCodingHelp } from "@/content/home";

const serviceUrl = "https://byhamdi.com/vibe-coding-help";

export function GET() {
  return NextResponse.json({
    id: "vibe-coding-help",
    name: "Vibe Coding Help Session",
    provider: {
      name: "Hamdi Mohamud Hassan",
      brand: "By Hamdi",
      website: "https://byhamdi.com",
    },
    description:
      "Hands-on help for people who have already started building with AI and are stuck on a specific product blocker.",
    audience:
      "People building with Claude, ChatGPT, Cursor, or another AI tool who need help getting their product unstuck.",
    format: "1-on-1 remote session",
    price: {
      amount: 99,
      currency: "USD",
    },
    duration: vibeCodingHelp.price.duration,
    canHelpWith: vibeCodingHelp.checklist.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    process: [
      "Tell me what you built, the tools you used, and the specific problem blocking you.",
      "I review the request to make sure the problem is a good fit before scheduling anything.",
      "If it is a fit, we spend 60–90 minutes working toward a practical solution together.",
    ],
    request: {
      url: vibeCodingHelp.cta.href,
      label: vibeCodingHelp.cta.label,
      note: "Submitting a request does not charge or book the client.",
    },
    canonicalUrl: serviceUrl,
  });
}
