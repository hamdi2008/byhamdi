import Tag from "./Tag";

export type Step = { title: string; body: string; tag?: { label: string; tone: "free" | "paid" } };

const pad = (i: number) => String(i + 1).padStart(2, "0");

/**
 * Numbered process. Columns with an accent rule on top; the final step is purple.
 * With `rail`, it becomes a vertical numbered rail below 900px.
 */
export default function Steps({ steps, rail = false, titleClassName = "text-2xl" }: { steps: Step[]; rail?: boolean; titleClassName?: string }) {
  const last = steps.length - 1;
  return (
    <>
      <ol className={`m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-6 p-0 ${rail ? "max-[900px]:hidden" : ""}`}>
        {steps.map((step, i) => {
          const purple = i === last;
          return (
            <li key={step.title} className={`flex flex-col gap-2.5 border-t-2 pt-[18px] ${purple ? "border-bh-purple" : "border-bh-orange"}`}>
              <div className="flex items-center justify-between gap-2.5">
                <span className={`font-mono-bh text-[13px] font-bold ${purple ? "text-bh-purple" : "text-bh-orange"}`}>
                  {pad(i)}
                  {purple ? "" : " →"}
                </span>
                {step.tag && <Tag tone={step.tag.tone}>{step.tag.label}</Tag>}
              </div>
              <h3 className={`m-0 font-bold tracking-[-.035em] text-bh-ink-purple ${step.tag ? "mt-1" : ""} ${titleClassName}`}>{step.title}</h3>
              <p className="m-0 text-[15.5px] leading-[1.6] font-medium text-[#5a544a]">{step.body}</p>
            </li>
          );
        })}
      </ol>
      {rail && (
        <ol className="m-0 flex list-none flex-col p-0 min-[900px]:hidden">
          {steps.map((step, i) => {
            const purple = i === last;
            return (
              <li key={step.title} className="grid grid-cols-[44px_minmax(0,1fr)] gap-x-3.5">
                <div className="flex flex-col items-center">
                  <span className={`font-mono-bh flex h-11 w-11 flex-none items-center justify-center rounded-full border-2 bg-bh-card text-[13px] font-bold ${purple ? "border-bh-purple text-bh-purple" : "border-bh-orange text-bh-orange"}`}>{pad(i)}</span>
                  {!purple && <span aria-hidden="true" className="min-h-5 w-0.5 flex-1 bg-bh-orange opacity-30" />}
                </div>
                <div className={`flex flex-col gap-1.5 pt-2 ${purple ? "" : "pb-[26px]"}`}>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="m-0 text-[22px] font-bold tracking-[-.03em] text-bh-ink-purple">{step.title}</h3>
                    {step.tag && <Tag tone={step.tag.tone}>{step.tag.label}</Tag>}
                  </div>
                  <p className="m-0 text-[15.5px] leading-[1.6] font-medium text-[#5a544a]">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </>
  );
}
