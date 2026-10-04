"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Wordmark from "@/components/ui/Wordmark";
import { nav } from "@/content/site";

/** Sticky site nav. Inline links at ≥900px; a "Menu" sheet below that. */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Menu links close the sheet on click (and each page mounts its own Nav); Escape closes it too.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav aria-label="Main" className="sticky top-0 z-40 border-b border-bh-hairline bg-bh-bg/[.94] font-grotesk backdrop-blur-[10px] min-[900px]:bg-bh-bg/[.88]">
      {/* Desktop */}
      <div className="flex items-center justify-between gap-6 px-[52px] py-[22px] max-[900px]:hidden">
        <Wordmark size="nav" />
        <div className="flex items-center gap-[34px]">
          {nav.links.map((link) => (
            <Link key={link.href} href={link.href} className="py-2.5 text-[15px] font-semibold text-bh-body no-underline transition-colors duration-200 hover:text-bh-orange">
              {link.label}
            </Link>
          ))}
          <Link href={nav.contact.href} className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-bh-ink-purple px-5 py-2.5 text-[15px] font-bold text-bh-ink-purple no-underline transition-colors duration-200 hover:bg-bh-ink-purple hover:text-bh-bg">
            {nav.contact.label}
            <span aria-hidden="true" className="font-mono-bh">→</span>
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="min-[900px]:hidden">
        <div className="flex items-center justify-between px-5 py-3.5">
          <Wordmark size="navMobile" />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border-[1.5px] border-bh-ink-purple bg-transparent px-[18px] text-[15px] font-bold text-bh-ink-purple"
          >
            {open ? "Close ×" : "Menu"}
          </button>
        </div>
        {open && (
          <div id="mobile-menu" className="flex flex-col border-t border-bh-hairline px-5 pt-1 pb-[18px]">
            {nav.links.map((link) => (
              <Link key={link.href} href={link.href} onClick={close} className="flex min-h-[52px] items-center justify-between border-b border-bh-hairline text-lg font-semibold text-bh-ink-purple no-underline">
                {link.label}
                <span aria-hidden="true" className="font-mono-bh text-[13px] text-bh-muted">↓</span>
              </Link>
            ))}
            <Link href={nav.contact.href} onClick={close} className="mt-4 flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-bh-ink-purple text-base font-bold text-bh-bg no-underline">
              {nav.contact.label}
              <span aria-hidden="true" className="font-mono-bh">→</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
