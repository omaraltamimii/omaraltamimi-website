import { motion } from "framer-motion";
import { Cog, Code, Layers, Cpu, Wrench, Building2 } from "lucide-react";
import type { ReactNode } from "react";
import Section from "./Section";
import { engineering, site } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

const icons: ReactNode[] = [
  <Cog size={18} />,
  <Layers size={18} />,
  <Cpu size={18} />,
  <Cog size={18} />,
  <Wrench size={18} />,
  <Building2 size={18} />,
];

export default function Engineering() {
  return (
    <Section
      id="engineering"
      title="Engineering × Athletics"
      subtitle={`${site.name} is a ${site.role} student based in Munich, combining technical problem-solving with physical performance and continuous development.`}
    >
      {/* Focus areas */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {engineering.focus.map((area, i) => (
          <motion.div
            key={area}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: (i % 3) * 0.08 }}
            className="card group flex items-center gap-4 p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-ink-500 text-bone-400 transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
              {icons[i % icons.length]}
            </div>
            <p className="font-sans text-sm font-bold uppercase tracking-tight text-bone-50">
              {area}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Experience + Tools */}
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="card p-7"
        >
          <p className="eyebrow mb-4">Industrial Experience</p>
          {engineering.experience.map((exp) => (
            <div key={exp.company} className="border-b border-ink-500/40 pb-4 last:border-0 last:pb-0">
              <p className="font-sans text-lg font-bold text-bone-50">{exp.company}</p>
              <p className="mt-1 text-sm text-bone-400">{exp.role}</p>
            </div>
          ))}
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease, delay: 0.08 }}
          className="card p-7"
        >
          <p className="eyebrow mb-4">Tools & Technologies</p>
          <div className="space-y-5">
            <ToolGroup label="CAD" items={engineering.tools.cad} icon={<Layers size={14} />} />
            <ToolGroup label="Embedded Systems" items={engineering.tools.embedded} icon={<Cpu size={14} />} />
            <ToolGroup label="Programming" items={engineering.tools.programming} icon={<Code size={14} />} />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function ToolGroup({ label, items, icon }: { label: string; items: string[]; icon: ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-bone-400">
        {icon}
        <p className="font-mono text-[11px] uppercase tracking-widest2">{label}</p>
      </div>
      <ul className="mt-2 flex flex-wrap gap-2">
        {items.map((it) => (
          <li
            key={it}
            className="rounded-md border border-ink-500/60 bg-ink-800/50 px-3 py-1.5 text-xs text-bone-300"
          >
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
