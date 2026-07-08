import Link from "next/link";
import type { ReactNode } from "react";

type Accent = "orange" | "purple";

const iconChipBg: Record<Accent, string> = {
  orange: "bg-bh-orange/12",
  purple: "bg-bh-purple/12",
};

const hoverBorder: Record<Accent, string> = {
  orange: "hover:border-bh-orange/50 hover:shadow-[0_22px_42px_-24px_rgba(255,106,61,.55)]",
  purple: "hover:border-bh-purple/50 hover:shadow-[0_22px_42px_-24px_rgba(94,47,176,.5)]",
};

const actionColor: Record<Accent, string> = {
  orange: "text-bh-orange",
  purple: "text-bh-purple",
};

export default function ChannelCard({
  href,
  icon,
  name,
  description,
  actionLabel,
  arrow,
  accent,
  className = "",
}: {
  href: string;
  icon: ReactNode;
  name: string;
  description: string;
  actionLabel: string;
  arrow: string;
  accent: Accent;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`ease-bh group flex flex-col gap-4 rounded-[22px] border border-bh-hairline bg-bh-card/55 p-[26px] text-bh-ink-purple no-underline transition-[transform,border-color,box-shadow,background-color] duration-[240ms] hover:-translate-y-[3px] hover:bg-white ${hoverBorder[accent]} ${className}`}
    >
      <span className={`flex h-12 w-12 flex-none items-center justify-center rounded-[14px] ${iconChipBg[accent]}`}>
        {icon}
      </span>
      <div className="flex flex-col gap-1.5">
        <span className="text-[clamp(19px,1.6vw,22px)] font-bold tracking-[-.03em]">{name}</span>
        <span className="text-sm leading-[1.5] font-medium text-bh-muted">{description}</span>
      </div>
      <span className={`font-mono-bh mt-auto inline-flex items-center gap-1.5 text-xs tracking-[.06em] ${actionColor[accent]}`}>
        {actionLabel}{" "}
        <span className="ease-bh inline-block transition-transform duration-[250ms] group-hover:translate-x-[3px] group-hover:-translate-y-0.5">
          {arrow}
        </span>
      </span>
    </Link>
  );
}
