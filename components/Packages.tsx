"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { formatPrice, snackPackages, storeInfo, whatsappNumber } from "@/data/menu";

function buildPackageUrl(packageName: string) {
  const message = `Halo ${storeInfo.name}, saya tertarik pesan ${packageName}. Mohon info detail paket, minimal order, dan ketersediaan tanggal.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function Packages() {
  return (
    <section id="paket" className="bg-cream px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Paket Snack Box"
          title="Paket siap acara dengan isi yang bisa disesuaikan"
          description="Pilih paket awal sebagai gambaran budget, lalu konfirmasi final melalui WhatsApp."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {snackPackages.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.48, delay: index * 0.07, ease: "easeOut" }}
              className="rounded-2xl border border-white/75 bg-white/72 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-3 inline-flex rounded-full bg-leaf-soft px-3 py-1 text-xs font-bold text-leaf">
                    {item.badge}
                  </p>
                  <h3 className="text-2xl font-semibold text-charcoal">{item.name}</h3>
                </div>
                <p className="text-right text-lg font-bold text-leaf">
                  {formatPrice(item.priceValue)}
                  <span className="block text-xs font-semibold text-cocoa">/ box</span>
                </p>
              </div>
              <p className="mt-4 min-h-14 text-sm leading-6 text-cocoa">{item.description}</p>
              <div className="mt-6 space-y-3">
                {item.items.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm font-medium text-charcoal">
                    <span className="grid size-6 place-items-center rounded-full bg-leaf text-[10px] font-bold text-white">
                      OK
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href={buildPackageUrl(item.name)}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-leaf"
              >
                Tanya Paket Ini
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
