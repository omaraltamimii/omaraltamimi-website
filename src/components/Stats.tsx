import { motion } from "framer-motion";
import { athleticStats, contentReach } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

type Stat = { value: string; label: string };

function StatRow({ items, delay = 0 }: { items: Stat[]; delay?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-ink-500/40 border border-ink-500/40">
      {items.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease, delay: delay + i * 0.08 }}
          className="bg-ink-950/60 px-6 py-8 flex flex-col items-center justify-center text-center"
        >
          <span className="font-sans text-3xl font-bold text-bone-50 sm:text-4xl">
            {stat.value}
          </span>
          <span className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-bone-400">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="px-6 py-32">
      <div className="mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-10 font-mono text-xs uppercase tracking-[0.24em] text-accent"
        >
          Athletic Stats
        </motion.p>

        <StatRow items={athleticStats} />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease, delay: 0.3 }}
          className="mt-16 mb-10 font-mono text-xs uppercase tracking-[0.24em] text-accent"
        >
          Content Reach
        </motion.p>

        <div className="grid grid-cols-1 border border-ink-500/40 bg-ink-500/40">
          {contentReach.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="bg-ink-950/60 px-6 py-10 flex flex-col items-center justify-center text-center"
            >
              <span className="font-sans text-4xl font-bold text-bone-50 sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-bone-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
