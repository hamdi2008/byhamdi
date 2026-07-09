import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono, Instrument_Serif } from "next/font/google";
import ConstellationField from "@/components/field/ConstellationField";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import "./globals.css";

const siteUrl = "https://byhamdi.co";
const title = "By Hamdi — Building useful AI-powered products.";
const description =
  "By Hamdi is a one-person studio building useful AI-powered products in Minnesota. Build. Learn. Share.";

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
    "AI MVP strategy session",
    "AI product studio",
    "Minnesota AI",
    "MNMuslim",
    "MNHalal",
    "MN Somali",
  ],
  authors: [{ name: "Hamdi" }],
  creator: "Hamdi",
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
        <GoogleAnalytics />
        <ConstellationField />
        {children}
      </body>
    </html>
  );
}
