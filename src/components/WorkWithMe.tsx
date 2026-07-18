import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { workWithMe } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function WorkWithMe() {
  return (
    <Section
      id="work"
      eyebrow="Work With Me"
      title="Engineering, mentoring, and collaboration"
      subtitle="Four ways we can work together — from CAD and product development to student mentoring, Germany guidance, and modeling."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {workWithMe.map((block, i) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease, delay: i * 0.07 }}
            className="card group relative flex flex-col p-7"
          >
            <div className="flex items-center justify-between">
              <p className="eyebrow">0{i + 1}</p>
              <ArrowUpRight
                size={18}
                className="text-bone-400 transition-colors duration-300 group-hover:text-accent"
              />
            </div>
            <h3 className="mt-3 font-sans text-2xl font-semibold tracking-tight text-bone-50">
              {block.title}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {block.items.map((it) => (
                <li
                  key={it}
                  className="rounded-md border border-ink-500/70 bg-ink-800/50 px-2.5 py-1 text-xs text-bone-300"
                >
                  {it}
                </li>
              ))}
            </ul>
            {block.note && (
              <p className="mt-5 border-t border-ink-500/60 pt-4 text-xs italic text-bone-400">
                {block.note}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
