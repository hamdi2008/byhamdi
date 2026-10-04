const tones = {
  default: "text-bh-muted",
  dark: "text-bh-orange-light",
};

export default function Eyebrow({
  children,
  tone = "default",
  className = "",
}: {
  children: React.ReactNode;
  /** "dark" for eyebrows sitting on the ink-purple featured card and CTA bands. */
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span className={`font-mono-bh inline-block text-xs tracking-[.22em] uppercase ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}
