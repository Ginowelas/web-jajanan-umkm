"use client";

import { motion } from "framer-motion";
import { CartIcon, WhatsAppIcon } from "@/components/Icons";
import { whatsappUrl } from "@/data/menu";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Custom", href: "#custom" },
  { label: "Paket", href: "#paket" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" }
];

type NavbarProps = {
  cartCount?: number;
  onCartOpen?: () => void;
};

export function Navbar({ cartCount = 0, onCartOpen }: NavbarProps) {
  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/70 bg-white/72 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white shadow-glow">
            <img
              src="/images/logo-warung-mak-menuk-header.png"
              alt="Logo Warung Mak Menuk"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="text-base font-semibold text-charcoal sm:text-lg">Warung Mak Menuk</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cocoa transition hover:text-leaf"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onCartOpen}
            aria-label="Buka keranjang"
            title="Keranjang"
            className="relative grid size-11 place-items-center rounded-full border border-cocoa/10 bg-white text-cocoa shadow-sm transition hover:-translate-y-0.5 hover:border-leaf hover:text-leaf"
          >
            <CartIcon className="size-5" />
            {cartCount > 0 ? (
              <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-leaf text-xs font-bold text-white">
                {cartCount}
              </span>
            ) : null}
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Pesan via WhatsApp"
            title="WhatsApp"
            className="hidden size-11 items-center justify-center rounded-full bg-charcoal text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-leaf sm:inline-flex"
          >
            <WhatsAppIcon className="size-5" />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
