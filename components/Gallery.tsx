"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ImageLightbox } from "@/components/ImageLightbox";
import { galleryImages } from "@/data/menu";
import { SectionHeading } from "@/components/SectionHeading";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="bg-white px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Gallery"
          title="Tampilan hangat untuk meja acara dan hantaran"
          description="Gunakan area ini untuk foto snack box, proses produksi, atau dokumentasi pesanan pelanggan."
        />
        <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              className={`group overflow-hidden rounded-2xl shadow-soft ${
                index === 0 || index === 5 ? "lg:col-span-2" : ""
              } ${index === 1 ? "lg:row-span-2" : ""}`}
            >
              <button
                type="button"
                aria-label={`Perbesar gallery jajanan pasar ${index + 1}`}
                onClick={() =>
                  setSelectedImage({
                    src: image,
                    alt: `Gallery jajanan pasar ${index + 1}`
                  })
                }
                className="block h-full w-full cursor-zoom-in"
              >
                <img
                  src={image}
                  alt={`Gallery jajanan pasar ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <ImageLightbox
        alt={selectedImage?.alt ?? ""}
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        src={selectedImage?.src ?? ""}
      />
    </section>
  );
}
