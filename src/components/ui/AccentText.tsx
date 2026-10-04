type AccentColor = "orange" | "purple" | "orange-light";

type AccentTextProps = {
  before?: string;
  accent: string;
  after?: string;
  color?: AccentColor;
};

const colorClass: Record<AccentColor, string> = {
  orange: "text-bh-orange",
  purple: "text-bh-purple",
  "orange-light": "text-bh-orange-light",
};

/** Renders "{before}<i>{accent}</i>{after}" — the recurring italic-serif-accent-word pattern in headings. */
export default function AccentText({
  before = "",
  accent,
  after = "",
  color = "purple",
}: AccentTextProps) {
  return (
    <>
      {before}
      <span className={`font-serif-accent font-normal italic tracking-[-.01em] ${colorClass[color]}`}>
        {accent}
      </span>
      {after}
    </>
  );
}
