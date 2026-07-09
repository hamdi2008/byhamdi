"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import VisitLink from "@/components/ui/VisitLink";
import AccentText from "@/components/ui/AccentText";

type Accent = "orange" | "purple";

type ProductRowProps = {
  id: string;
  side: "left" | "right";
  delay: number;
  name: { before: string; accent: string; after: string };
  plainName: string;
  description: string;
  href: string;
  accent: Accent;
  medallionTint: Accent;
  mark: ReactNode;
  /** The flagship product gets a slightly larger name treatment. */
  flagship?: boolean;
};

const medallionShadow: Record<Accent, string> = {
  orange: "shadow-[0_20px_42px_-34px_rgba(255,106,61,.22)]",
  purple: "shadow-[0_20px_42px_-34px_rgba(94,47,176,.24)]",
};

const contentAlign: Record<"left" | "right", string> = {
  left: "col-start-1 max-[760px]:col-start-2 justify-self-end max-[760px]:justify-self-stretch items-end max-[760px]:items-stretch text-right max-[760px]:text-left",
  right: "col-start-3 max-[760px]:col-start-2 justify-self-start max-[760px]:justify-self-stretch items-start max-[760px]:items-stretch text-left",
};

// h3/p stretch to the column width so long product names wrap instead of
// overflowing (see contentAlign above), but the "Visit" link should stay
// sized to its own content — otherwise its underline stretches full-width.
const visitAlign: Record<"left" | "right", string> = {
  left: "self-end max-[760px]:self-start",
  right: "self-start",
};

export default function ProductRow({
  id,
  side,
  delay,
  name,
  plainName,
  description,
  href,
  accent,
  medallionTint,
  mark,
  flagship = false,
}: ProductRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const reduceMotion = useReducedMotion();

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !rowRef.current) return;
    const r = rowRef.current.getBoundingClientRect();
    const tx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const ty = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    setOffset({ x: tx * 8, y: ty * 7 });
    setActive(true);
  };

  const onMouseLeave = () => {
    setActive(false);
    setOffset({ x: 0, y: 0 });
  };

  const content = (
    <div className={`flex flex-col ${contentAlign[side]}`}>
      <h3
        className={
          flagship
            ? "m-0 text-[clamp(40px,4.8vw,66px)] leading-[.98] font-bold tracking-[-.04em] break-words"
            : "m-0 text-[clamp(38px,4.2vw,58px)] leading-none font-bold tracking-[-.04em] break-words"
        }
      >
        <AccentText before={name.before} accent={name.accent} after={name.after} color="purple" />
      </h3>
      <p className="mt-4 max-w-[34ch] text-[clamp(16px,1.4vw,20px)] leading-[1.5] font-medium text-bh-body">
        {description}
      </p>
      <VisitLink
        href={href}
        label="Visit"
        ariaLabel={`Visit ${plainName}`}
        accent={accent}
        className={visitAlign[side]}
      />
    </div>
  );

  const medallion = (
    <div
      className={`relative col-start-2 flex h-[clamp(132px,14vw,176px)] w-[clamp(132px,14vw,176px)] max-[760px]:col-start-1 items-center justify-center rounded-full border border-bh-hairline/45 bg-bh-card/46 ${medallionShadow[medallionTint]}`}
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.45)" }}
    >
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-full blur-[15px]"
        style={{
          background: `radial-gradient(circle, rgba(${medallionTint === "purple" ? "94,47,176" : "255,106,61"},.16), rgba(${medallionTint === "purple" ? "255,106,61" : "94,47,176"},.07) 55%, transparent 74%)`,
        }}
      />
      <motion.div
        animate={{ x: offset.x, y: offset.y }}
        transition={active ? { duration: 0.14, ease: "easeOut" } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[88px] w-[88px]"
      >
        {mark}
      </motion.div>
    </div>
  );

  return (
    <Reveal delay={delay}>
      <div
        id={id}
        ref={rowRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative grid scroll-mt-[90px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-[clamp(22px,3.4vw,56px)] max-[760px]:grid-cols-[auto_minmax(0,1fr)] max-[760px]:gap-x-[22px]"
      >
        {side === "left" ? (
          <>
            {content}
            {medallion}
          </>
        ) : (
          <>
            {medallion}
            {content}
          </>
        )}
      </div>
    </Reveal>
  );
}
