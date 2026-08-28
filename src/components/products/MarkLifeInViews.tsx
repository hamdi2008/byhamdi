/** Life in Views identity mark: three ascending bars, pulsing in sequence — priorities tracked, progress reflected. */
export default function MarkLifeInViews() {
  return (
    <div className="relative flex h-[88px] w-[88px] items-end justify-center gap-[7px] pb-3.5">
      <span
        className="w-[11px] rounded-[4px] [animation:bh-sig_2.6s_ease-in-out_infinite]"
        style={{ height: 24, background: "linear-gradient(150deg,#ff8a5c,#ff6a3d)" }}
      />
      <span
        className="w-[11px] rounded-[4px] [animation:bh-sig_2.6s_ease-in-out_infinite_.8s]"
        style={{ height: 42, background: "linear-gradient(150deg,#7c3acd,#5e2fb0)" }}
      />
      <span
        className="w-[11px] rounded-[4px] shadow-[0_6px_14px_-6px_rgba(255,106,61,.6)] [animation:bh-sig_2.6s_ease-in-out_infinite_1.6s]"
        style={{ height: 58, background: "linear-gradient(150deg,#ff8a5c,#ff6a3d)" }}
      />
    </div>
  );
}
