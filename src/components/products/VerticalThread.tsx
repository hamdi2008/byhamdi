"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Vertical gradient thread running through the products timeline, with a traveling glow dot. */
export default function VerticalThread() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="absolute top-11 bottom-11 left-1/2 z-0 -ml-px w-[1.5px] origin-top rounded-sm bg-gradient-to-b from-bh-orange via-[#c14a6e] to-bh-purple opacity-20 max-[760px]:left-[66px] max-[760px]:ml-0"
        initial={{ scaleY: reduceMotion ? 1 : 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 z-[1] -ml-[3px] h-1.5 w-1.5 rounded-full bg-bh-orange shadow-[0_0_7px_2px_rgba(255,106,61,.26)] [animation:bh-travel-y_9s_cubic-bezier(.55,0,.45,1)_infinite] max-[760px]:left-[66px] max-[760px]:ml-0"
      />
    </>
  );
}
