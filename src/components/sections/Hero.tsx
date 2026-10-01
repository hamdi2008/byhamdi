"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import Nav from "./Nav";
import AccentText from "@/components/ui/AccentText";
import CTAButton from "@/components/ui/CTAButton";
import Eyebrow from "@/components/ui/Eyebrow";
import { hero } from "@/content/home";
import { externalLinkProps } from "@/lib/links";

const accentBorderHover: Record<"orange" | "purple", string> = { orange: "hover:border-bh-orange/60 hover:shadow-[0_12px_24px_-14px_rgba(255,106,61,.6)]", purple: "hover:border-bh-purple/60 hover:shadow-[0_12px_24px_-14px_rgba(94,47,176,.55)]" };
const accentArrowColor: Record<"orange" | "purple", string> = { orange: "text-bh-orange", purple: "text-bh-purple" };
const dotColor: Record<"orange" | "purple", string> = { orange: "text-bh-orange", purple: "text-bh-purple" };

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const item = (delay: number): Variants => ({ hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }, visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] } } });

  return (
    <section id="top" className="relative z-[1] flex min-h-screen flex-col overflow-hidden bg-transparent font-grotesk text-bh-ink">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(52%_54%_at_50%_48%,rgba(250,246,238,.94)_0%,rgba(250,246,238,.7)_46%,rgba(250,246,238,0)_74%)]" />
      <Nav />
      <main className="relative z-[2] flex flex-1 flex-col items-center justify-center px-10 py-5 text-center">
        <motion.h1 initial="hidden" animate="visible" variants={item(0)} className="m-0 max-w-[15ch] text-[clamp(50px,7.4vw,120px)] leading-[.92] font-bold tracking-[-.05em]"><AccentText before={hero.headline.before} accent={hero.headline.accent} after={hero.headline.after} color="orange" /></motion.h1>
        <motion.div initial="hidden" animate="visible" variants={item(0.14)} className="mt-8 text-[clamp(23px,2.3vw,36px)] leading-[1.12] font-medium tracking-[-.025em] text-[#1c1913]">{hero.supporting.map((line) => <div key={line.text}>{line.text}<span className={dotColor[line.accentColor]}>.</span></div>)}</motion.div>
        <motion.div initial="hidden" animate="visible" variants={item(0.26)} className="mt-[46px] flex flex-wrap items-center justify-center gap-3">
          <CTAButton href={hero.primaryCta.href} label={hero.primaryCta.label} size="lg" />
          <Link href={hero.secondaryCta.href} className="ease-bh inline-flex items-center gap-3.5 rounded-full border-[1.5px] border-bh-purple bg-bh-card/70 px-9 py-[20px] font-grotesk text-[clamp(17px,1.35vw,20px)] font-bold text-bh-purple no-underline transition-[transform,box-shadow,background-color] duration-[220ms] hover:-translate-y-[3px] hover:bg-white hover:shadow-[0_20px_38px_-18px_rgba(94,47,176,.55)]">{hero.secondaryCta.label}<span className="font-mono-bh">→</span></Link>
        </motion.div>
      </main>
      <motion.div initial="hidden" animate="visible" variants={item(0.4)} className="relative z-[2] flex flex-none flex-col items-center gap-4 px-10 pb-11">
        <Eyebrow>{hero.recentlyShipped.eyebrow}</Eyebrow>
        <div className="flex flex-wrap items-center justify-center gap-2.5">{hero.recentlyShipped.links.map((link) => <Link key={link.href} href={link.href} {...externalLinkProps(link.href)} className={`ease-bh inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#e2dccf] bg-bh-card/60 px-[18px] py-[9px] font-grotesk text-base font-semibold text-bh-ink no-underline transition-[transform,border-color,box-shadow,background-color] duration-[220ms] hover:-translate-y-0.5 ${accentBorderHover[link.accent]}`}>{link.label} <span className={`font-mono-bh text-xs ${accentArrowColor[link.accent]}`}>↗</span></Link>)}</div>
      </motion.div>
    </section>
  );
}
