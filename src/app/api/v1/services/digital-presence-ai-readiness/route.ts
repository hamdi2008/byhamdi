import { NextResponse } from "next/server";
import { businessService, coreQuestion, directories, goals, instagram, notes, problems, process, reviewAreas, reviewQuestions } from "@/content/business";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    id: "digital-presence-ai-readiness",
    name: businessService.name,
    provider: { name: "Hamdi Mohamud Hassan", brand: "By Hamdi", website: "https://byhamdi.com" },
    description: businessService.description,
    audience: "Businesses that are already online and want customers, search engines, and AI tools to find, understand, and act on accurate information about them.",
    coreQuestion,
    goals,
    commonProblems: problems,
    review: {
      name: businessService.reviewName,
      price: 0,
      currency: "USD",
      url: businessService.reviewUrl,
      areas: reviewAreas,
      answers: reviewQuestions,
      note: `${notes.review} ${notes.assessment}`,
    },
    process: process.map((step, i) => ({
      step: i + 1,
      name: step.title,
      description: step.body,
      cost: step.paid ? "Optional paid work, quoted separately. Only if the business chooses to proceed." : "Free",
    })),
    commitment: notes.commitment,
    pricing: {
      model: "Free review, findings, and priorities; optional implementation quoted per project",
      note: "Paid implementation scope and price depend on what the review finds and what the business chooses to fix. No fixed price list; nothing is charged for the review.",
    },
    relatedDirectories: {
      note: notes.directoryListing,
      directories: directories.map(({ name, url, submitUrl, description }) => ({ name, url, submitUrl, description })),
      communityDiscovery: { note: notes.communityDiscovery, instagram },
    },
    canonicalUrl: businessService.url,
  });
}
