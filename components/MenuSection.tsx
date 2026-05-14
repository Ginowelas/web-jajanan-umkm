"use client";

import { motion } from "framer-motion";
import { menuItems, whatsappUrl } from "@/data/menu";
import { SectionHeading } from "@/components/SectionHeading";

export function MenuSection() {
  return (
    <section id="menu" className="bg-white px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Menu Favorit"
          title="Pilihan jajanan pasar yang siap masuk snack box"
          description="Semua foto masih placeholder dan bisa diganti dengan foto produk asli kapan saja."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              className="group overflow-hidden rounded-2xl border border-cream-deep/70 bg-cream/35 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-charcoal">{item.name}</h3>
                  <p className="shrink-0 rounded-full bg-leaf-soft px-3 py-1 text-xs font-bold text-leaf">
                    {item.price}
                  </p>
                </div>
                <p className="min-h-20 text-sm leading-6 text-cocoa">{item.description}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-leaf shadow-sm transition hover:scale-[1.02] hover:bg-leaf hover:text-white"
                >
                  Pesan Sekarang
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
