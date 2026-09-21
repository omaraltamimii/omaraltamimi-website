import { motion } from "framer-motion";
import { about } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.24em] text-accent"
        >
          About
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="text-xl leading-relaxed text-bone-200 sm:text-2xl"
        >
          {about.text}
        </motion.p>
      </div>
    </section>
  );
}
