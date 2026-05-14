import { whatsappUrl } from "@/data/menu";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Pesan via WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-leaf text-sm font-bold text-white shadow-glow transition hover:-translate-y-1 hover:scale-105 hover:bg-charcoal"
    >
      WA
    </a>
  );
}
