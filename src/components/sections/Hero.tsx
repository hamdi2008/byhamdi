"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import AccentText from "@/components/ui/AccentText";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { hero } from "@/content/home";
import { externalLinkProps } from "@/lib/links";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const item = (delay: number): Variants => ({ hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }, visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] } } });

  return (
    <section
      id="top"
      className="relative z-[1] flex flex-col items-center bg-[radial-gradient(52%_60%_at_50%_45%,rgba(250,246,238,.95),rgba(250,246,238,0)_75%)] px-[clamp(20px,4vw,52px)] pt-[clamp(56px,10vw,128px)] pb-[clamp(40px,5vw,64px)] text-center font-grotesk text-bh-ink"
    >
      <motion.h1 initial="hidden" animate="visible" variants={item(0)} className="m-0 max-w-[15ch] text-[clamp(46px,8.4vw,112px)] leading-[.92] font-bold tracking-[-.05em] text-balance">
        <AccentText before={hero.headline.before} accent={hero.headline.accent} after={hero.headline.after} color="orange" />
      </motion.h1>
      <motion.p initial="hidden" animate="visible" variants={item(0.14)} className="m-0 mt-[clamp(20px,2.4vw,32px)] max-w-[44ch] text-[clamp(19px,1.9vw,26px)] leading-[1.35] font-medium tracking-[-.02em] text-balance text-[#1c1913]">
        {hero.supporting}
      </motion.p>
      <motion.div initial="hidden" animate="visible" variants={item(0.26)} className="mt-[clamp(32px,4vw,48px)] flex w-full flex-wrap justify-center gap-3">
        <Button href={hero.primaryCta.href} label={hero.primaryCta.label} size="hero" className="max-w-[330px] flex-[1_1_260px]" />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={item(0.4)} className="mt-[clamp(40px,6vw,80px)] flex flex-col items-center gap-3.5">
        <Eyebrow>{hero.products.eyebrow}</Eyebrow>
        <div className="flex flex-wrap justify-center gap-2">
          {hero.products.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              {...externalLinkProps(link.href)}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-bh-hairline-alt bg-bh-card/60 px-3.5 text-sm font-semibold text-bh-body no-underline transition-colors duration-200 hover:border-bh-orange/60 hover:text-bh-ink"
            >
              {link.label} <span aria-hidden="true" className="font-mono-bh text-[11px] text-bh-muted">↗</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
