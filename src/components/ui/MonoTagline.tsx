import { taglineWords } from "@/content/site";

const dotColor: Record<"orange" | "purple", string> = {
  orange: "text-bh-orange",
  purple: "text-bh-purple",
};

/** "Build. Learn. Share." mono line — reused across About and the footer. */
export default function MonoTagline({ className = "" }: { className?: string }) {
  return (
    <span className={`font-mono-bh uppercase ${className}`}>
      {taglineWords.map((word, i) => (
        <span key={word.text}>
          {word.text}
          <span className={dotColor[word.accentColor]}>.</span>
          {i < taglineWords.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
