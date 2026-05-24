"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import {
  customOrderProducts,
  formatPrice,
  storeInfo,
  whatsappNumber,
  type CustomOrderProduct
} from "@/data/menu";

type CustomOrderForm = {
  productId: string;
  quantity: number;
  model: string;
  toppings: string[];
  eventDate: string;
  name: string;
  phone: string;
  request: string;
};

const firstProduct = customOrderProducts[0];

const initialForm: CustomOrderForm = {
  productId: firstProduct.id,
  quantity: firstProduct.minQuantity,
  model: firstProduct.models[0].label,
  toppings: [],
  eventDate: "",
  name: "",
  phone: "",
  request: ""
};

function buildCustomOrderUrl(product: CustomOrderProduct, form: CustomOrderForm, estimatedUnitPrice: number) {
  const selectedToppings = form.toppings.length ? form.toppings.join(", ") : "Belum dipilih";
  const estimatedTotal = estimatedUnitPrice * form.quantity;

  const message = `Halo ${storeInfo.name}, saya ingin pesan custom:

Produk: ${product.name}
Jumlah: ${form.quantity} ${product.unit}
Model/kemasan: ${form.model}
Tambahan/topping: ${selectedToppings}
Tanggal acara/ambil: ${form.eventDate || "-"}
Nama: ${form.name || "-"}
No. HP: ${form.phone || "-"}
Catatan custom: ${form.request || "-"}

Estimasi harga dari website: ${formatPrice(estimatedUnitPrice)} / ${product.unit}
Estimasi total: ${formatPrice(estimatedTotal)}

Mohon konfirmasi harga final, ketersediaan tanggal, dan detail customnya.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function CustomOrderSection() {
  const [form, setForm] = useState<CustomOrderForm>(initialForm);

  const selectedProduct = useMemo(() => {
    return customOrderProducts.find((product) => product.id === form.productId) ?? firstProduct;
  }, [form.productId]);

  const selectedModel = selectedProduct.models.find((model) => model.label === form.model) ?? selectedProduct.models[0];
  const selectedToppings = selectedProduct.toppings.filter((topping) => form.toppings.includes(topping.label));
  const toppingPrice = selectedToppings.reduce((total, topping) => total + topping.priceAdjustment, 0);
  const estimatedUnitPrice = selectedProduct.priceFrom + selectedModel.priceAdjustment + toppingPrice;
  const estimatedTotal = estimatedUnitPrice * form.quantity;
  const remainingQuantity = Math.max(0, selectedProduct.minQuantity - form.quantity);
  const hasMetMinimumOrder = form.quantity >= selectedProduct.minQuantity;
  const orderUrl = useMemo(
    () => buildCustomOrderUrl(selectedProduct, form, estimatedUnitPrice),
    [selectedProduct, form, estimatedUnitPrice]
  );

  function selectProduct(product: CustomOrderProduct) {
    setForm((current) => ({
      ...current,
      productId: product.id,
      quantity: Math.max(current.quantity, product.minQuantity),
      model: product.models[0].label,
      toppings: []
    }));
  }

  function updateQuantity(value: string) {
    const numericValue = Number(value.replace(/\D/g, ""));
    setForm((current) => ({
      ...current,
      quantity: Number.isFinite(numericValue) ? Math.max(0, Math.floor(numericValue)) : 0
    }));
  }

  function toggleTopping(label: string) {
    setForm((current) => ({
      ...current,
      toppings: current.toppings.includes(label)
        ? current.toppings.filter((item) => item !== label)
        : [...current.toppings, label]
    }));
  }

  return (
    <section id="custom" className="bg-white px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Bisa Pesan Custom Disini"
          title="Atur bentuk, isi, topping, dan budget sesuai selera"
          description="Untuk Nasi Box karakter dan Snack Box custom. Harga final tetap dikonfirmasi admin melalui WhatsApp."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.35fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {customOrderProducts.map((product, index) => {
              const isActive = product.id === selectedProduct.id;

              return (
                <motion.button
                  key={product.id}
                  type="button"
                  onClick={() => selectProduct(product)}
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                  className={`group overflow-hidden rounded-2xl border text-left shadow-soft transition hover:-translate-y-1 hover:shadow-glow ${
                    isActive ? "border-leaf bg-leaf-soft" : "border-cream-deep bg-cream/35"
                  }`}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-leaf shadow-sm backdrop-blur">
                      {product.badge}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase text-leaf">{product.category}</p>
                    <h3 className="mt-1 text-xl font-semibold text-charcoal">{product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-cocoa">{product.description}</p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-cocoa">Mulai {formatPrice(product.priceFrom)}</span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-leaf">
                        Min. {product.minQuantity} {product.unit}
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            initial={{ y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl border border-cream-deep bg-cream/50 p-5 shadow-soft backdrop-blur sm:p-6"
          >
            <div className="flex flex-col gap-4 border-b border-cocoa/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase text-leaf">Form Custom Order</p>
                <h3 className="mt-1 text-2xl font-semibold text-charcoal">{selectedProduct.name}</h3>
                <p className="mt-2 text-sm leading-6 text-cocoa">
                  Isi detailnya dulu ya, nanti pesan WhatsApp akan otomatis tersusun rapi.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-left shadow-soft sm:text-right">
                <p className="text-xs font-semibold uppercase text-cocoa">Estimasi Sekitar</p>
                <p className="text-xl font-bold text-leaf">{formatPrice(estimatedTotal)}</p>
                <p className="text-xs font-semibold text-cocoa">harga final</p>
              </div>
            </div>

            <div className="mt-5 grid gap-5">
              <div>
                <label className="text-sm font-semibold text-charcoal" htmlFor="custom-quantity">
                  Jumlah pesanan
                </label>
                <div className="mt-2 grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded-full bg-white p-2 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setForm((current) => ({ ...current, quantity: Math.max(0, current.quantity - 1) }))}
                    className="grid size-10 place-items-center rounded-full bg-cream text-lg font-semibold text-cocoa transition hover:bg-leaf hover:text-white"
                  >
                    -
                  </button>
                  <input
                    id="custom-quantity"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={form.quantity}
                    onChange={(event) => updateQuantity(event.target.value)}
                    className="min-w-0 bg-transparent text-center text-base font-bold text-charcoal outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setForm((current) => ({ ...current, quantity: current.quantity + 1 }))}
                    className="grid size-10 place-items-center rounded-full bg-cream text-lg font-semibold text-cocoa transition hover:bg-leaf hover:text-white"
                  >
                    +
                  </button>
                </div>
                <p className={`mt-2 text-sm font-semibold ${hasMetMinimumOrder ? "text-leaf" : "text-amber-800"}`}>
                  {hasMetMinimumOrder
                    ? `Minimal order terpenuhi untuk ${selectedProduct.name}.`
                    : `Minimal order ${selectedProduct.minQuantity} ${selectedProduct.unit}. Tambahkan ${remainingQuantity} ${selectedProduct.unit} lagi.`}
                </p>
              </div>

              <div>
                <label className="text-sm font-semibold text-charcoal" htmlFor="custom-model">
                  Pilih model / bentuk / kemasan
                </label>
                <select
                  id="custom-model"
                  value={form.model}
                  onChange={(event) => setForm((current) => ({ ...current, model: event.target.value }))}
                  className="mt-2 w-full rounded-xl border border-cocoa/10 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-leaf"
                >
                  {selectedProduct.models.map((model) => (
                    <option key={model.label} value={model.label}>
                      {model.label}
                      {model.priceAdjustment ? ` (+${formatPrice(model.priceAdjustment)} / ${selectedProduct.unit})` : ""}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <p className="text-sm font-semibold text-charcoal">Tambahan / topping</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {selectedProduct.toppings.map((topping) => (
                    <label
                      key={topping.label}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-cocoa/10 bg-white px-4 py-3 text-sm font-medium text-charcoal shadow-sm transition hover:border-leaf"
                    >
                      <input
                        type="checkbox"
                        checked={form.toppings.includes(topping.label)}
                        onChange={() => toggleTopping(topping.label)}
                        className="size-4 accent-leaf"
                      />
                      <span className="flex-1">{topping.label}</span>
                      <span className="text-xs font-semibold text-cocoa">+{formatPrice(topping.priceAdjustment)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Nama pemesan"
                  className="rounded-xl border border-cocoa/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-leaf"
                />
                <input
                  value={form.phone}
                  onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                  placeholder="Nomor WhatsApp"
                  className="rounded-xl border border-cocoa/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-leaf"
                />
                <input
                  value={form.eventDate}
                  onChange={(event) => setForm((current) => ({ ...current, eventDate: event.target.value }))}
                  placeholder="Tanggal acara / ambil"
                  className="rounded-xl border border-cocoa/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-leaf sm:col-span-2"
                />
                <textarea
                  value={form.request}
                  onChange={(event) => setForm((current) => ({ ...current, request: event.target.value }))}
                  placeholder="Catatan custom, contoh: bentuk karakter anak-anak, tidak pedas, lauk dipisah, tema ulang tahun."
                  rows={4}
                  className="resize-none rounded-xl border border-cocoa/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-leaf sm:col-span-2"
                />
              </div>

              <div className="rounded-2xl border border-cocoa/10 bg-white/80 p-4">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-semibold text-charcoal">Estimasi per {selectedProduct.unit}</span>
                  <span className="font-bold text-leaf">{formatPrice(estimatedUnitPrice)}</span>
                </div>
                <div className="mt-2 flex items-center justify-between gap-4 text-sm">
                  <span className="font-semibold text-charcoal">Estimasi total</span>
                  <span className="font-bold text-leaf">{formatPrice(estimatedTotal)}</span>
                </div>
                <p className="mt-3 text-xs leading-5 text-cocoa">
                  Harga ini estimasi dari pilihan di website. Admin akan konfirmasi ulang sesuai stok, bentuk, dan
                  tingkat detail custom ya.
                </p>
              </div>

              {hasMetMinimumOrder ? (
                <a
                  href={orderUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-leaf px-5 py-4 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-charcoal"
                >
                  Kirim Custom Order via WhatsApp
                </a>
              ) : (
                <button
                  type="button"
                  className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-full bg-cocoa/10 px-5 py-4 text-sm font-semibold text-cocoa shadow-glow"
                >
                  Minimal {selectedProduct.minQuantity} {selectedProduct.unit} untuk lanjut
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
