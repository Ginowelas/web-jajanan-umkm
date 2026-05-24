"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@/components/Icons";
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
              <div className="mb-5 flex items-center gap-2">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <StarIcon key={starIndex} className="size-5" />
                  ))}
                </div>
                <span className="text-sm font-bold text-leaf">5/5</span>
              </div>
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
