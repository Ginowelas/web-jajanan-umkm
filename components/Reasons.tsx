"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const reasons = [
  {
    title: "Fresh dibuat harian",
    text: "Produksi dijadwalkan sesuai pesanan agar tekstur dan aroma tetap terjaga."
  },
  {
    title: "Tanpa pengawet",
    text: "Mengandalkan bahan pilihan dan proses rumahan yang bersih."
  },
  {
    title: "Cocok untuk acara",
    text: "Kemasan rapi untuk arisan, hajatan, kantor, dan acara keluarga."
  },
  {
    title: "Bisa custom isi snack box",
    text: "Isi box bisa disesuaikan dengan budget, tema acara, dan stok harian."
  }
];

export function Reasons() {
  return (
    <section id="tentang" className="bg-cream px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Kenapa Pilih Kami?"
          title="Rasa rumahan dengan tampilan yang layak untuk acara premium"
          description="Kami menjaga rasa, kerapian kemasan, dan fleksibilitas pesanan untuk kebutuhan pribadi maupun acara besar."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              className="rounded-2xl border border-white/75 bg-white/70 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="mb-5 grid size-11 place-items-center rounded-xl bg-leaf text-base font-bold text-white">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-charcoal">{reason.title}</h3>
              <p className="mt-3 text-sm leading-6 text-cocoa">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
