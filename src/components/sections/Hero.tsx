"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { hero } from "@/content/home";
import { externalLinkProps } from "@/lib/links";

const arrowColor = { orange: "text-bh-orange", purple: "text-bh-purple" };
const dotColor = { orange: "text-bh-orange", purple: "text-bh-purple" };

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const item = (delay: number): Variants => ({ hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }, visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] } } });

  return (
    <section
      id="top"
      className="relative z-[1] flex flex-col items-center bg-[radial-gradient(52%_60%_at_50%_45%,rgba(250,246,238,.95),rgba(250,246,238,0)_75%)] px-[clamp(20px,4vw,52px)] pt-[clamp(56px,10vw,128px)] pb-[clamp(40px,5vw,64px)] max-[900px]:pb-2 text-center font-grotesk text-bh-ink"
    >
      <motion.h1 initial="hidden" animate="visible" variants={item(0)} className="m-0 max-w-[15ch] text-[clamp(46px,8.4vw,112px)] leading-[.92] font-bold tracking-[-.05em] text-balance">
        <AccentText before={hero.headline.before} accent={hero.headline.accent} after={hero.headline.after} color="orange" />
      </motion.h1>
      <motion.div initial="hidden" animate="visible" variants={item(0.14)} className="mt-[clamp(20px,2.4vw,32px)] flex gap-[.5em] text-[clamp(20px,2.2vw,30px)] font-medium tracking-[-.025em] text-[#1c1913]">
        {hero.supporting.map((word) => (
          <span key={word.text}>
            {word.text}
            <span className={dotColor[word.accentColor]}>.</span>
          </span>
        ))}
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={item(0.26)} className="mt-[clamp(32px,4vw,48px)] flex w-full flex-wrap justify-center gap-3">
        <Button href={hero.primaryCta.href} label={hero.primaryCta.label} size="hero" className="max-w-[330px] flex-[1_1_260px]" />
        <Button href={hero.secondaryCta.href} label={hero.secondaryCta.label} variant="secondary" size="hero" className="max-w-[270px] flex-[1_1_220px]" />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={item(0.4)} className="mt-[clamp(48px,7vw,96px)] flex flex-col items-center gap-3.5">
        <Eyebrow>{hero.recentlyShipped.eyebrow}</Eyebrow>
        <div className="flex flex-wrap justify-center gap-2">
          {hero.recentlyShipped.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              {...externalLinkProps(link.href)}
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#e2dccf] bg-bh-card px-4 py-[9px] text-[15px] font-semibold text-bh-ink no-underline transition-colors duration-200 hover:border-bh-orange/60"
            >
              {link.label} <span aria-hidden="true" className={`font-mono-bh text-xs ${arrowColor[link.accent]}`}>↗</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
