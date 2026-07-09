import Wordmark from "@/components/ui/Wordmark";
import ContactButton from "@/components/ui/ContactButton";
import { nav } from "@/content/site";

export default function Nav() {
  return (
    <nav className="relative z-[3] flex flex-none items-center justify-between px-6 py-[34px] sm:px-[52px]">
      <Wordmark size="nav" />
      <ContactButton href={nav.contact.href} label={nav.contact.label} />
    </nav>
  );
}
