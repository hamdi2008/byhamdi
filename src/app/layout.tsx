import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Instrument_Serif } from "next/font/google";
import ConstellationField from "@/components/field/ConstellationField";
import "./globals.css";

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
  title: "By Hamdi — Building useful AI-powered products.",
  description:
    "By Hamdi is a one-person studio building useful AI-powered products in Minnesota. Build. Learn. Share.",
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
        <ConstellationField />
        {children}
      </body>
    </html>
  );
}
