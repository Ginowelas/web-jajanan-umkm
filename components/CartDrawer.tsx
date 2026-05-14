"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { formatPrice, storeInfo, type MenuItem, whatsappNumber } from "@/data/menu";

export type CartLine = {
  item: MenuItem;
  quantity: number;
};

type CartDrawerProps = {
  cartLines: CartLine[];
  isOpen: boolean;
  onClose: () => void;
  onAddItem: (productId: string) => void;
  onDecreaseItem: (productId: string) => void;
  onRemoveItem: (productId: string) => void;
};

type CustomerForm = {
  name: string;
  phone: string;
  date: string;
  address: string;
  note: string;
};

const initialCustomer: CustomerForm = {
  name: "",
  phone: "",
  date: "",
  address: "",
  note: ""
};

function buildOrderUrl(cartLines: CartLine[], total: number, customer: CustomerForm) {
  const orderLines = cartLines
    .map((line, index) => {
      const subtotal = line.item.priceValue * line.quantity;
      return `${index + 1}. ${line.item.name} x ${line.quantity} ${line.item.unit} = ${formatPrice(subtotal)}`;
    })
    .join("\n");

  const customerLines = [
    customer.name ? `Nama: ${customer.name}` : "Nama:",
    customer.phone ? `No. HP: ${customer.phone}` : "No. HP:",
    customer.date ? `Tanggal acara/ambil: ${customer.date}` : "Tanggal acara/ambil:",
    customer.address ? `Alamat: ${customer.address}` : "Alamat lengkap:",
    customer.note ? `Catatan: ${customer.note}` : "Catatan:"
  ].join("\n");

  const message = `Halo ${storeInfo.name}, saya mau pesan:\n\n${orderLines}\n\nTotal estimasi: ${formatPrice(
    total
  )}\n\n${customerLines}`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function CartDrawer({
  cartLines,
  isOpen,
  onClose,
  onAddItem,
  onDecreaseItem,
  onRemoveItem
}: CartDrawerProps) {
  const [customer, setCustomer] = useState<CustomerForm>(initialCustomer);
  const total = cartLines.reduce((sum, line) => sum + line.item.priceValue * line.quantity, 0);
  const orderUrl = useMemo(() => buildOrderUrl(cartLines, total, customer), [cartLines, total, customer]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70]">
      <button
        aria-label="Tutup keranjang"
        className="absolute inset-0 bg-charcoal/45 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="absolute right-0 top-0 flex h-full w-full max-w-[460px] flex-col bg-cream shadow-soft"
      >
        <div className="border-b border-cocoa/10 bg-white/75 p-5 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase text-leaf">Keranjang</p>
              <h2 className="text-2xl font-semibold text-charcoal">Pesanan Anda</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="grid size-10 place-items-center rounded-full bg-charcoal text-lg font-semibold text-white transition hover:bg-leaf"
            >
              x
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {cartLines.length === 0 ? (
            <div className="rounded-2xl border border-cocoa/10 bg-white/70 p-6 text-center shadow-soft">
              <p className="text-lg font-semibold text-charcoal">Keranjang masih kosong</p>
              <p className="mt-2 text-sm leading-6 text-cocoa">Pilih jajanan favorit dari menu untuk mulai pesan.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartLines.map((line) => (
                <div key={line.item.id} className="rounded-2xl border border-cocoa/10 bg-white/80 p-4 shadow-soft">
                  <div className="flex gap-4">
                    <img
                      src={line.item.image}
                      alt={line.item.name}
                      className="size-20 rounded-xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-charcoal">{line.item.name}</h3>
                          <p className="mt-1 text-sm text-cocoa">
                            {formatPrice(line.item.priceValue)} / {line.item.unit}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(line.item.id)}
                          className="text-sm font-semibold text-cocoa transition hover:text-leaf"
                        >
                          Hapus
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center rounded-full border border-cocoa/10 bg-cream">
                          <button
                            type="button"
                            onClick={() => onDecreaseItem(line.item.id)}
                            className="grid size-9 place-items-center rounded-full font-semibold text-cocoa transition hover:bg-white hover:text-leaf"
                          >
                            -
                          </button>
                          <span className="min-w-8 text-center text-sm font-bold text-charcoal">{line.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onAddItem(line.item.id)}
                            className="grid size-9 place-items-center rounded-full font-semibold text-cocoa transition hover:bg-white hover:text-leaf"
                          >
                            +
                          </button>
                        </div>
                        <p className="font-semibold text-leaf">{formatPrice(line.item.priceValue * line.quantity)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-cocoa/10 bg-white/80 p-4 shadow-soft">
                <h3 className="font-semibold text-charcoal">Data pemesan</h3>
                <div className="mt-4 grid gap-3">
                  <input
                    value={customer.name}
                    onChange={(event) => setCustomer((current) => ({ ...current, name: event.target.value }))}
                    placeholder="Nama"
                    className="rounded-xl border border-cocoa/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-leaf"
                  />
                  <input
                    value={customer.phone}
                    onChange={(event) => setCustomer((current) => ({ ...current, phone: event.target.value }))}
                    placeholder="No. HP"
                    className="rounded-xl border border-cocoa/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-leaf"
                  />
                  <input
                    value={customer.date}
                    onChange={(event) => setCustomer((current) => ({ ...current, date: event.target.value }))}
                    placeholder="Tanggal acara / ambil"
                    className="rounded-xl border border-cocoa/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-leaf"
                  />
                  <textarea
                    value={customer.address}
                    onChange={(event) => setCustomer((current) => ({ ...current, address: event.target.value }))}
                    placeholder="Alamat"
                    rows={3}
                    className="resize-none rounded-xl border border-cocoa/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-leaf"
                  />
                  <textarea
                    value={customer.note}
                    onChange={(event) => setCustomer((current) => ({ ...current, note: event.target.value }))}
                    placeholder="Catatan tambahan"
                    rows={3}
                    className="resize-none rounded-xl border border-cocoa/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-leaf"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-cocoa/10 bg-white/80 p-5 backdrop-blur">
          <div className="mb-4 flex items-center justify-between text-lg font-semibold">
            <span className="text-charcoal">Total</span>
            <span className="text-leaf">{formatPrice(total)}</span>
          </div>
          <a
            href={cartLines.length ? orderUrl : "#menu"}
            target={cartLines.length ? "_blank" : undefined}
            rel={cartLines.length ? "noreferrer" : undefined}
            onClick={() => {
              if (!cartLines.length) {
                onClose();
              }
            }}
            className={`inline-flex w-full items-center justify-center rounded-full px-5 py-4 text-sm font-semibold shadow-glow transition hover:-translate-y-0.5 ${
              cartLines.length ? "bg-leaf text-white hover:bg-charcoal" : "bg-cocoa/10 text-cocoa hover:bg-white"
            }`}
          >
            {cartLines.length ? "Checkout via WhatsApp" : "Lihat Menu"}
          </a>
        </div>
      </motion.aside>
    </div>
  );
}
