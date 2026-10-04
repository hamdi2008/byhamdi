import Link from "next/link";
import AccentText from "@/components/ui/AccentText";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";
import { buildingInPublic } from "@/content/home";
import { externalLinkProps } from "@/lib/links";

const accent = {
  orange: { action: "text-bh-orange-deep", hover: "hover:border-bh-orange" },
  purple: { action: "text-bh-purple", hover: "hover:border-bh-purple" },
};

export default function BuildingInPublicSection() {
  return (
    <Section id="building" flush="top" innerClassName="flex flex-col gap-[clamp(24px,3vw,40px)] border-t border-bh-hairline pt-[clamp(48px,6vw,80px)]">
      <div className="flex flex-wrap items-end justify-between gap-x-[60px] gap-y-4">
        <div className="flex flex-col gap-4">
          <Eyebrow>{buildingInPublic.eyebrow}</Eyebrow>
          <h2 className="m-0 text-[clamp(34px,4.6vw,58px)] leading-[.96] font-bold tracking-[-.05em]">
            <AccentText {...buildingInPublic.heading} color="purple" />
          </h2>
        </div>
        <p className="m-0 max-w-[44ch] text-[17px] leading-[1.55] font-medium text-bh-body">{buildingInPublic.body}</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-3.5">
        {buildingInPublic.channels.map((channel) => (
          <Link
            key={channel.id}
            href={channel.href}
            {...externalLinkProps(channel.href)}
            className={`flex flex-col gap-2.5 rounded-[22px] border border-bh-hairline bg-bh-card p-6 text-bh-ink no-underline transition-colors duration-200 ${accent[channel.accent].hover}`}
          >
            <b className="text-xl tracking-[-.02em]">{channel.name}</b>
            <span className="text-[15px] leading-[1.55] font-medium text-bh-body">{channel.description}</span>
            <span className={`mt-1.5 text-sm font-bold ${accent[channel.accent].action}`}>
              {channel.actionLabel} {channel.arrow}
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
