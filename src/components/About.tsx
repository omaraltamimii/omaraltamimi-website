import { motion } from "framer-motion";
import Section from "./Section";
import { quickFacts, timeline } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="From Palestine to the heart of German engineering"
      subtitle="Building a career through engineering, resilience, and continuous growth."
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-ink-500">
            <div className="grid-bg-fine absolute inset-0 opacity-30" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, rgba(22,32,44,0.3) 0%, rgba(10,15,20,0.95) 100%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <span className="eyebrow">Portrait</span>
              <div>
                <p className="font-sans text-xl font-semibold text-bone-50">
                  Omar Al Tamimi
                </p>
                <p className="mt-1 text-sm text-bone-400">
                  Munich, Germany
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 card p-6">
            <p className="eyebrow mb-3">Mission</p>
            <p className="text-sm leading-relaxed text-bone-300">
              To become a Mechanical Product Development Engineer who builds
              innovative, well-engineered products — while helping other
              international students navigate the same path with clarity and
              confidence.
            </p>
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            <p className="eyebrow mb-4">Quick Facts</p>
            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-ink-500/70 bg-ink-500/30 sm:grid-cols-2">
              {quickFacts.map((f) => (
                <li
                  key={f.label}
                  className="flex items-center gap-3 bg-ink-700/60 px-4 py-3 text-sm text-bone-300"
                >
                  <span className="text-base">{f.icon}</span>
                  <span>{f.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="mt-8 card p-6"
          >
            <p className="eyebrow mb-3">Philosophy</p>
            <p className="text-sm leading-relaxed text-bone-300">
              Greatness is built through consistency, not shortcuts. Engineering
              is precision, patience and purpose — the same values I bring to
              every project, every collaboration, and every student I mentor.
            </p>
          </motion.div>

          <div className="mt-12">
            <p className="eyebrow mb-6">Journey</p>
            <Timeline />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Timeline() {
  return (
    <ol className="relative border-l border-ink-500/70 pl-6">
      {timeline.map((item, i) => (
        <motion.li
          key={item.date + item.title}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease, delay: i * 0.04 }}
          className="relative pb-8 last:pb-0"
        >
          <span className="absolute -left-[31px] top-1.5 flex h-3 w-3 items-center justify-center">
            <span className="h-3 w-3 rounded-full border border-accent bg-ink-900" />
            <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent/30" />
          </span>

          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <p className="font-mono text-xs text-accent">{item.date}</p>
            {item.tag && (
              <span className="rounded-full border border-ink-500 px-2.5 py-0.5 text-[10px] uppercase tracking-widest2 text-bone-400">
                {item.tag}
              </span>
            )}
          </div>
          <h3 className="mt-1.5 font-sans text-lg font-semibold tracking-tight text-bone-50">
            {item.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-bone-300">
            {item.body}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
