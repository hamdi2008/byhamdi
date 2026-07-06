/**
 * MNMuslim Services identity mark: 3 nodes connected by lines that pulse
 * in sequence. Node/line coordinates are a fixed hand-tuned layout, not
 * derived from a formula, so they're kept as literal positions.
 */
export default function MarkMNServices() {
  return (
    <div className="relative h-[88px] w-[88px]">
      <div
        className="absolute h-[1.6px] w-16 origin-left [animation:bh-sig_2.6s_ease-in-out_infinite]"
        style={{
          left: 44,
          top: 13,
          background: "linear-gradient(90deg,rgba(94,47,176,.7),rgba(255,106,61,.5))",
          transform: "rotate(116.6deg)",
        }}
      />
      <div
        className="absolute h-[1.6px] w-16 origin-left [animation:bh-sig_2.6s_ease-in-out_infinite_.8s]"
        style={{
          left: 44,
          top: 13,
          background: "linear-gradient(90deg,rgba(94,47,176,.7),rgba(94,47,176,.4))",
          transform: "rotate(63.4deg)",
        }}
      />
      <div
        className="absolute h-[1.6px] w-[58px] origin-left [animation:bh-sig_2.6s_ease-in-out_infinite_1.6s]"
        style={{
          left: 15,
          top: 69,
          background: "linear-gradient(90deg,rgba(255,106,61,.5),rgba(94,47,176,.6))",
        }}
      />
      <span
        className="absolute h-4 w-4 rounded-full border-[2.5px] border-white shadow-[0_4px_10px_-4px_rgba(94,47,176,.6)]"
        style={{ left: 44, top: 13, margin: "-8px 0 0 -8px", background: "linear-gradient(150deg,#5e2fb0,#7c3acd)" }}
      />
      <span
        className="absolute h-[14px] w-[14px] rounded-full border-[2.5px] border-white"
        style={{ left: 15, top: 69, margin: "-7px 0 0 -7px", background: "linear-gradient(150deg,#ff8a5c,#ff6a3d)" }}
      />
      <span
        className="absolute h-[13px] w-[13px] rounded-full border-[2.5px] border-white bg-bh-ink-purple"
        style={{ left: 73, top: 69, margin: "-6.5px 0 0 -6.5px" }}
      />
    </div>
  );
}
