/** MNHalal identity mark: center dot + two staggered expanding bloom rings. */
export default function MarkMNHalal() {
  return (
    <div className="relative flex h-[88px] w-[88px] items-center justify-center">
      <span className="absolute h-[62px] w-[62px] rounded-full border-2 border-bh-orange/60 [animation:bh-bloom_2.8s_ease-out_infinite]" />
      <span className="absolute h-[62px] w-[62px] rounded-full border-2 border-bh-orange/60 [animation:bh-bloom_2.8s_ease-out_infinite_1.4s]" />
      <span
        className="relative h-6 w-6 rounded-full shadow-[0_6px_14px_-6px_rgba(255,106,61,.7)]"
        style={{ background: "linear-gradient(150deg,#ff8a5c,#ff6a3d)" }}
      />
    </div>
  );
}
