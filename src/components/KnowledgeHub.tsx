import { motion } from "framer-motion";
import { Download, BookOpen } from "lucide-react";
import Section from "./Section";
import { knowledgeHub } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function KnowledgeHub() {
  return (
    <Section
      id="knowledge"
      eyebrow="Knowledge Hub"
      title="Engineering, Germany, and growth — shared openly"
      subtitle="Topics I write about, plus free resources I'm building for engineering students and international students in Germany."
    >
      <div className="grid gap-5 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease }}
          className="card p-7 lg:col-span-7"
        >
          <div className="flex items-center gap-2 text-bone-400">
            <BookOpen size={18} />
            <p className="eyebrow">Topics</p>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2">
            {knowledgeHub.topics.map((t) => (
              <li
                key={t}
                className="rounded-md border border-ink-500/70 bg-ink-800/50 px-3 py-1.5 text-sm text-bone-300"
              >
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-bone-400">
            Articles and notes coming soon — CAD, product development, and
            life as an international engineering student in Germany.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease, delay: 0.08 }}
          className="card p-7 lg:col-span-5"
        >
          <div className="flex items-center gap-2 text-bone-400">
            <Download size={18} />
            <p className="eyebrow">Free Resources</p>
          </div>
          <ul className="mt-5 divide-y divide-ink-500/60">
            {knowledgeHub.downloads.map((d) => (
              <li
                key={d}
                className="flex items-center justify-between py-2.5 text-sm text-bone-300"
              >
                <span>{d}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-400">
                  Soon
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
