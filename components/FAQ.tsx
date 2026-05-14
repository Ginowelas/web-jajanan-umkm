"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/data/menu";

export function FAQ() {
  return (
    <section className="bg-cream px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang sering ditanyakan"
          description="Detail order bisa dikonfirmasi kembali melalui WhatsApp sebelum pesanan diproses."
        />

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.details
              key={item.question}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
              className="group rounded-2xl border border-white/75 bg-white/75 p-5 shadow-soft backdrop-blur"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-charcoal">
                {item.question}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-leaf-soft text-leaf transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 leading-7 text-cocoa">{item.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
