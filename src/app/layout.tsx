import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono, Instrument_Serif } from "next/font/google";
import ConstellationField from "@/components/field/ConstellationField";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import "./globals.css";

const siteUrl = "https://byhamdi.com";
const title = "By Hamdi — Building useful AI-powered products.";
const description =
  "By Hamdi is the one-person AI product studio of Hamdi Mohamud Hassan, building useful AI-powered products in Minnesota. Build. Learn. Share.";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — By Hamdi",
  },
  description,
  keywords: [
    "By Hamdi",
    "Hamdi Mohamud Hassan",
    "Hamdi Hassan",
    "Vibe coding help",
    "AI product studio",
    "Minnesota AI",
    "MNMuslim",
    "MNHalal",
    "MN Somali",
  ],
  authors: [{ name: "Hamdi Mohamud Hassan", url: siteUrl }],
  creator: "Hamdi Mohamud Hassan",
  alternates: { canonical: siteUrl },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "By Hamdi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@hamdimahmuud",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#faf6ee",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#hamdi`,
      name: "Hamdi Mohamud Hassan",
      alternateName: ["Hamdi Hassan", "Hamdi Mohamud", "Hamdi"],
      url: siteUrl,
      sameAs: [
        "https://www.linkedin.com/in/hamdi-hassan-ai/",
        "https://github.com/hamdi2008",
        "https://x.com/hamdimahmuud",
        "https://www.youtube.com/@hamdimohamud08",
      ],
      worksFor: { "@id": `${siteUrl}/#by-hamdi` },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#by-hamdi`,
      name: "By Hamdi",
      url: siteUrl,
      description,
      founder: { "@id": `${siteUrl}/#hamdi` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "By Hamdi",
      url: siteUrl,
      description,
      publisher: { "@id": `${siteUrl}/#by-hamdi` },
      author: { "@id": `${siteUrl}/#hamdi` },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#vibe-coding-help`,
      name: "Vibe Coding Help Session",
      url: `${siteUrl}/#book`,
      description:
        "A 60–90 minute hands-on help session for people who have started building with AI and are stuck on a specific product, deployment, setup, feature, or technical blocker.",
      provider: { "@id": `${siteUrl}/#hamdi` },
      offers: {
        "@type": "Offer",
        price: "99",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/#book`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-bh-bg font-grotesk text-bh-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <GoogleAnalytics />
        <ConstellationField />
        {children}
      </body>
    </html>
  );
}
