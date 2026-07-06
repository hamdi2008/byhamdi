/** Flagship identity mark: gradient square + 3 orbiting community dots. */
export default function MarkMNMuslim() {
  return (
    <div className="relative h-[88px] w-[88px]">
      <div
        className="absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-[11px] shadow-[0_8px_18px_-8px_rgba(94,47,176,.6)]"
        style={{ background: "linear-gradient(150deg,#ff6a3d,#5e2fb0)" }}
      />
      <div className="absolute inset-0 [animation:bh-spin_17s_linear_infinite]">
        <span className="absolute top-px left-1/2 h-[11px] w-[11px] -ml-[5px] rounded-full bg-bh-orange" />
        <span className="absolute bottom-2 left-[7px] h-[9px] w-[9px] rounded-full bg-bh-purple" />
        <span className="absolute top-[29px] right-px h-2 w-2 rounded-full bg-bh-ink-purple" />
      </div>
    </div>
  );
}
