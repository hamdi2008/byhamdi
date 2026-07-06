import AccentText from "@/components/ui/AccentText";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import ChannelCard from "@/components/building/ChannelCard";
import { IconYouTube, IconGitHub, IconX, IconNewsletter } from "@/components/icons/ChannelIcons";
import { buildingInPublic } from "@/content/home";
import type { ReactNode } from "react";

const icons: Record<(typeof buildingInPublic.channels)[number]["id"], ReactNode> = {
  youtube: <IconYouTube />,
  github: <IconGitHub />,
  x: <IconX />,
  newsletter: <IconNewsletter />,
};

export default function BuildingInPublicSection() {
  return (
    <section
      id="building"
      className="relative z-[1] overflow-hidden px-[52px] pt-[70px] pb-[90px] font-grotesk text-bh-ink"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(250,246,238,.6),rgba(250,246,238,.34)_40%,rgba(250,246,238,.34)_62%,rgba(250,246,238,.58))]"
      />

      <div className="relative z-[1] mx-auto grid max-w-[1180px] grid-cols-[.92fr_1.08fr] items-start gap-[66px] max-[860px]:grid-cols-1 max-[860px]:gap-10">
        <Reveal className="sticky top-[60px] max-[860px]:static">
          <Eyebrow>{buildingInPublic.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-[clamp(34px,4.2vw,62px)] leading-[.96] font-bold tracking-[-.05em]">
            <AccentText before={buildingInPublic.heading.before} accent={buildingInPublic.heading.accent} after={buildingInPublic.heading.after} color="purple" />
          </h2>
          <p className="mt-[22px] max-w-[36ch] text-[clamp(17px,1.4vw,21px)] leading-[1.5] font-medium text-bh-body">
            {buildingInPublic.body}
          </p>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-3.5 max-[860px]:grid-cols-1">
          {buildingInPublic.channels.map((channel) => (
            <ChannelCard
              key={channel.id}
              href={channel.href}
              icon={icons[channel.id]}
              name={channel.name}
              description={channel.description}
              actionLabel={channel.actionLabel}
              arrow={channel.arrow}
              accent={channel.accent}
              tinted={channel.tinted}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
