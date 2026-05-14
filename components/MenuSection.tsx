"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import type { CartState } from "@/components/HomeClient";
import { categories, formatPrice, menuItems, type MenuCategory } from "@/data/menu";

type MenuSectionProps = {
  cart: CartState;
  onAddItem: (productId: string) => void;
  onDecreaseItem: (productId: string) => void;
  onOpenCart: () => void;
};

export function MenuSection({ cart, onAddItem, onDecreaseItem, onOpenCart }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Semua");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    return menuItems.filter((item) => {
      const categoryMatch = activeCategory === "Semua" || item.category === activeCategory;
      const queryMatch =
        !keyword ||
        item.name.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword);

      return categoryMatch && queryMatch;
    });
  }, [activeCategory, query]);

  return (
    <section id="menu" className="bg-white px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Mana Menu Favoritmu?"
          title="Pilih jajanan, masukkan keranjang, checkout langsung ke WhatsApp"
          description="Harga otomatis dihitung dan detail pesanan akan tersusun rapi saat dikirim ke WhatsApp."
        />

        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-cream-deep bg-cream/45 p-4 shadow-soft backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-leaf text-white shadow-glow"
                    : "bg-white text-cocoa hover:text-leaf"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari menu disini"
              className="min-h-11 rounded-full border border-cocoa/10 bg-white px-5 text-sm text-charcoal outline-none transition placeholder:text-cocoa/55 focus:border-leaf sm:w-64"
            />
            <button
              type="button"
              onClick={onOpenCart}
              className="rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-leaf"
            >
              Lihat Pesananmu Disini
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item, index) => {
            const quantity = cart[item.id] ?? 0;

            return (
              <motion.article
                key={item.id}
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                className="group overflow-hidden rounded-2xl border border-cream-deep/70 bg-cream/35 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-glow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {item.badge ? (
                    <span className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-xs font-bold text-leaf shadow-sm backdrop-blur">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase text-leaf">{item.category}</p>
                      <h3 className="text-xl font-semibold text-charcoal">{item.name}</h3>
                    </div>
                    <p className="shrink-0 rounded-full bg-leaf-soft px-3 py-1 text-xs font-bold text-leaf">
                      {formatPrice(item.priceValue)}
                    </p>
                  </div>
                  <p className="min-h-24 text-sm leading-6 text-cocoa">{item.description}</p>
                  <div className="mt-4 flex items-center justify-between gap-3 text-xs font-semibold text-cocoa">
                    <span>{item.minOrder ?? "Bisa masuk snack box"}</span>
                    <span>/ {item.unit}</span>
                  </div>

                  {quantity > 0 ? (
                    <div className="mt-5 grid grid-cols-[auto_1fr_auto] items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onDecreaseItem(item.id)}
                        className="grid size-11 place-items-center rounded-full bg-white text-lg font-semibold text-cocoa shadow-sm transition hover:bg-leaf hover:text-white"
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={onOpenCart}
                        className="rounded-full bg-leaf px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-charcoal"
                      >
                        {quantity} di Keranjang
                      </button>
                      <button
                        type="button"
                        onClick={() => onAddItem(item.id)}
                        className="grid size-11 place-items-center rounded-full bg-white text-lg font-semibold text-cocoa shadow-sm transition hover:bg-leaf hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onAddItem(item.id)}
                      className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-leaf shadow-sm transition hover:scale-[1.02] hover:bg-leaf hover:text-white"
                    >
                      Tambah ke Keranjang
                    </button>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {filteredItems.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-cream-deep bg-cream p-8 text-center shadow-soft">
            <p className="text-lg font-semibold text-charcoal">Menu tidak ditemukan</p>
            <p className="mt-2 text-sm text-cocoa">Coba gunakan kata kunci atau kategori lain.</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
