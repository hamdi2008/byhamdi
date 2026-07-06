"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

type Variant = "orange-purple" | "purple-orange";

const stops: Record<Variant, { from: string; to: string; dot: string }> = {
  "orange-purple": { from: "#ff6a3d", to: "#5e2fb0", dot: "#5e2fb0" },
  "purple-orange": { from: "#5e2fb0", to: "#ff6a3d", dot: "#ff6a3d" },
};

/** Short gradient line stitching two homepage sections together. */
export default function ThreadConnector({ variant = "orange-purple" }: { variant?: Variant }) {
  const gradientId = useId();
  const reduceMotion = useReducedMotion();
  const { from, to, dot } = stops[variant];

  return (
    <div className="relative z-[1] flex justify-center py-0.5">
      <svg width="6" height="120" viewBox="0 0 6 120" style={{ overflow: "visible", display: "block" }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={from} />
            <stop offset="1" stopColor={to} />
          </linearGradient>
        </defs>
        <motion.line
          x1="3"
          y1="2"
          x2="3"
          y2="118"
          stroke={`url(#${gradientId})`}
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.3"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <circle cx="3" cy="118" r="3" fill={dot} opacity="0.45" />
      </svg>
    </div>
  );
}
