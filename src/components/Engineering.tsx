import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { engineeringExperience, site } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Engineering({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen px-6 pt-28 pb-32">
      <div className="mx-auto max-w-2xl">
        <button
          onClick={onBack}
          className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-bone-400 transition-colors duration-200 hover:text-bone-50"
        >
          <ArrowLeft size={14} /> Back
        </button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-accent"
        >
          Engineering
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="font-sans text-3xl font-bold uppercase leading-[1.05] tracking-tight text-bone-50 sm:text-4xl"
        >
          Mechanical Engineering & Development
        </motion.h1>

        <div className="mt-12 space-y-12">
          {engineeringExperience.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            >
              <h2 className="font-sans text-lg font-semibold text-bone-50">
                {exp.title}
              </h2>
              <p className="mt-1 text-sm text-bone-400">{exp.summary}</p>
              <ul className="mt-4 space-y-2.5">
                {exp.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-bone-300">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="mt-16 border-t border-ink-500/40 pt-12 text-center"
        >
          <a href={`mailto:${site.email}`} className="btn-primary w-full sm:w-auto">
            Let's Work Together <ArrowUpRight size={16} />
          </a>
          <p className="mt-4 text-sm text-bone-400">{site.email}</p>
        </motion.div>
      </div>
    </div>
  );
}
