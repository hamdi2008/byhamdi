export default function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono-bh inline-block text-[11px] tracking-[.22em] uppercase text-bh-faint ${className}`}
    >
      {children}
    </span>
  );
}
