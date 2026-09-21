import { motion } from "framer-motion";
import Section from "./Section";
import { journeyItems } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Journey() {
  return (
    <Section
      id="journey"
      title="Document the Process."
      subtitle='“I document what I actually do.”'
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {journeyItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: (i % 5) * 0.06 }}
            className="card group p-6"
          >
            <div className="mb-4 h-px w-8 bg-accent transition-all duration-300 ease-eng group-hover:w-16" />
            <h3 className="font-sans text-sm font-bold uppercase tracking-tight text-bone-50">
              {item.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-bone-400">
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
