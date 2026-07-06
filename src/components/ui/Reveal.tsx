"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-reveal wrapper — matches the design's IntersectionObserver behavior
 * (threshold .16, rootMargin 0px 0px -8%, translateY 26px → 0 + fade).
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Delay in ms, matching the design's data-delay attribute. */
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -8% 0px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
