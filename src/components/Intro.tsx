import { motion } from "framer-motion";
import Section from "./Section";
import { pillars } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Intro() {
  return (
    <Section
      id="intro"
      title="Built in Two Worlds."
      subtitle="Engineering is my academic path. Strength and calisthenics are my athletic passion. Content creation connects both worlds."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            className="card group p-8"
          >
            <p className="font-mono text-2xl font-bold text-accent">{p.number}</p>
            <h3 className="mt-4 font-sans text-xl font-bold uppercase tracking-tight text-bone-50">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-bone-400">
              {p.body}
            </p>
            <div className="mt-6 h-px w-full bg-ink-500 transition-all duration-500 ease-eng group-hover:w-0" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
