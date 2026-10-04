const tones = {
  free: "bg-[#ece4f7] text-bh-purple",
  paid: "bg-[#ffe7dd] text-bh-orange-deep",
};

/** Small mono pill — "Free" (purple tint) or an optional/paid step (orange tint). */
export default function Tag({ children, tone = "free" }: { children: string; tone?: keyof typeof tones }) {
  return (
    <span className={`font-mono-bh rounded-full px-[9px] py-1 text-[10.5px] tracking-[.12em] uppercase ${tones[tone]}`}>
      {children}
    </span>
  );
}
