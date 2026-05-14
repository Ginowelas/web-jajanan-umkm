"use client";

import { motion } from "framer-motion";
import { whatsappUrl } from "@/data/menu";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" }
];

export function Navbar() {
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
          <span className="text-base font-semibold text-charcoal sm:text-lg">Jajanan Pagi</span>
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
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-charcoal px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-leaf"
        >
          WhatsApp
        </a>
      </nav>
    </motion.header>
  );
}
