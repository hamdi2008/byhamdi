import { NextResponse } from "next/server";
import { aiSessions, howItWorks, sessionOptions } from "@/content/ai-sessions";

export function GET() {
  return NextResponse.json({
    id: "ai-sessions",
    name: aiSessions.name,
    provider: {
      name: "Hamdi Mohamud Hassan",
      brand: "By Hamdi",
      website: "https://byhamdi.com",
    },
    headline: aiSessions.headline,
    description: aiSessions.description,
    options: sessionOptions.map((option) => ({
      id: option.id,
      name: option.name,
      price: { amount: option.price, currency: "USD" },
      details: option.details,
      ...(option.note ? { note: option.note } : {}),
    })),
    note: aiSessions.optionsNote,
    process: howItWorks.map((step, i) => ({ step: i + 1, name: step.title, description: step.body })),
    request: {
      url: aiSessions.requestUrl,
      label: aiSessions.requestLabel,
      note: aiSessions.requestNote,
    },
    canonicalUrl: aiSessions.url,
  });
}
