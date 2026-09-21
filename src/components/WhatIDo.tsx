import { motion } from "framer-motion";
import { whatIDo } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function WhatIDo() {
  return (
    <section id="what" className="px-6 py-32">
      <div className="mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-10 font-mono text-xs uppercase tracking-[0.24em] text-accent"
        >
          What I Do
        </motion.p>

        <div className="divide-y divide-ink-500/40 border-y border-ink-500/40">
          {whatIDo.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              className="py-7"
            >
              <h3 className="font-sans text-lg font-semibold text-bone-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-400">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
