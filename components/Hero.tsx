"use client";

import { motion } from "framer-motion";
import { whatsappUrl } from "@/data/menu";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-warm-radial px-4 pb-20 pt-32 sm:pt-36 lg:min-h-screen lg:pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={false}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-leaf/15 bg-white/70 px-4 py-2 text-sm font-semibold text-leaf shadow-soft backdrop-blur">
            Dibuat hangat untuk momen spesial
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-charcoal sm:text-6xl lg:text-7xl">
            Jajanan Pasar Tradisional, Fresh Setiap Hari
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cocoa sm:text-xl">
            Menerima pesanan snack box, arisan, hajatan, kantor, dan acara keluarga.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-leaf px-7 py-4 text-center text-base font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:scale-[1.02] hover:bg-charcoal"
            >
              Pesan via WhatsApp
            </a>
            <a
              href="#menu"
              className="rounded-full border border-cocoa/20 bg-white/70 px-7 py-4 text-center text-base font-semibold text-cocoa shadow-soft backdrop-blur transition hover:-translate-y-1 hover:scale-[1.02] hover:border-leaf hover:text-leaf"
            >
              Lihat Menu
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/45 p-3 shadow-soft backdrop-blur">
            <img
              src="/images/hero.png"
              alt="Pilihan jajanan pasar tradisional dalam tampah"
              className="h-[390px] w-full rounded-[1.5rem] object-cover sm:h-[520px]"
            />
          </div>
          <div className="absolute bottom-5 left-5 rounded-2xl border border-white/75 bg-white/76 p-4 shadow-soft backdrop-blur-xl">
            <p className="text-sm font-semibold text-charcoal">Snack box mulai</p>
            <p className="mt-1 text-2xl font-bold text-leaf">Rp18.000</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
