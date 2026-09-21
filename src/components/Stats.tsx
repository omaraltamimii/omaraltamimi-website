import { motion } from "framer-motion";
import { stats } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Stats() {
  return (
    <section className="border-y border-ink-500/50 bg-ink-900/50 py-16">
      <div className="container-wide">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-sans text-3xl font-bold tracking-tight text-bone-50 sm:text-4xl md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-widest2 text-bone-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
