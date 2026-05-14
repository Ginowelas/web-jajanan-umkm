"use client";

import { motion } from "framer-motion";
import { whatsappUrl } from "@/data/menu";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
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
          <span className="grid size-10 place-items-center rounded-xl bg-leaf text-sm font-bold text-white shadow-glow">
            JP
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
            className="relative rounded-full border border-cocoa/10 bg-white px-4 py-2 text-sm font-semibold text-cocoa shadow-sm transition hover:-translate-y-0.5 hover:border-leaf hover:text-leaf"
          >
            Keranjang
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
            className="hidden rounded-full bg-charcoal px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-leaf sm:inline-flex"
          >
            WhatsApp
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
