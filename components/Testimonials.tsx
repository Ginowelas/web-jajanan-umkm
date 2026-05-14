"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/data/menu";

export function Testimonials() {
  return (
    <section className="bg-white px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimoni"
          title="Dipercaya untuk acara keluarga dan kebutuhan kantor"
          description="Rasa konsisten, kemasan rapi, dan komunikasi pesanan yang jelas."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              className="rounded-2xl border border-cream-deep bg-cream/45 p-6 shadow-soft"
            >
              <p className="mb-5 text-sm font-bold uppercase text-leaf">Rating 5/5</p>
              <blockquote className="text-base leading-7 text-charcoal">"{item.quote}"</blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold text-charcoal">{item.name}</p>
                <p className="mt-1 text-sm text-cocoa">{item.event}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
