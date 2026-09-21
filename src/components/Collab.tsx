import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";
import { site } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Collab() {
  return (
    <section id="collab" className="px-6 py-32">
      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.24em] text-accent"
        >
          Collaborations
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="font-sans text-3xl font-bold uppercase tracking-tight text-bone-50 sm:text-4xl"
        >
          Open for Collaborations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="mx-auto mt-6 max-w-md text-base leading-relaxed text-bone-300"
        >
          Open to fitness, sports, lifestyle and UGC collaborations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <a href={`mailto:${site.email}`} className="btn-primary w-full sm:w-auto">
            Let's Work Together
          </a>
          <p className="text-sm text-bone-400">{site.email}</p>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost w-full sm:w-auto"
          >
            <Instagram size={16} /> Instagram <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
