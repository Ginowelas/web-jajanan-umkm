"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

type ImageLightboxProps = {
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  src: string;
};

export function ImageLightbox({ alt, isOpen, onClose, src }: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center p-4 sm:p-8">
      <button
        type="button"
        aria-label="Tutup tampilan gambar"
        onClick={onClose}
        className="absolute inset-0 bg-charcoal/78 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="relative z-10 max-h-full max-w-5xl"
      >
        <button
          type="button"
          aria-label="Tutup gambar"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-charcoal text-lg font-semibold text-white shadow-soft transition hover:bg-leaf"
        >
          x
        </button>
        <img
          src={src}
          alt={alt}
          className="max-h-[82vh] max-w-full rounded-2xl border border-white/70 bg-white object-contain shadow-soft"
        />
      </motion.div>
    </div>
  );
}
