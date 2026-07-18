import { motion } from "framer-motion";
import { Cog, Wrench, Code as Code2, Layers } from "lucide-react";
import Section from "./Section";
import { engineering } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Engineering() {
  return (
    <Section
      id="engineering"
      eyebrow="Engineering Studio"
      title="Industrial experience, built on precision"
      subtitle="Mechanical product development, CAD engineering and structural development — across industrial machinery and unmanned aircraft systems."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          {engineering.experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="card p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-xs text-accent">
                    {exp.company}
                  </p>
                  <h3 className="mt-1 font-sans text-lg font-semibold text-bone-50">
                    {exp.role}
                  </h3>
                </div>
                <Cog size={18} className="text-bone-400" />
              </div>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {exp.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-sm text-bone-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Block
            icon={<Layers size={18} />}
            title="Projects"
            items={engineering.projects}
          />
          <Block
            icon={<Code2 size={18} />}
            title="Software"
            items={engineering.software}
          />
          <Block
            icon={<Wrench size={18} />}
            title="Skills"
            items={engineering.skills}
          />
          <div className="card flex flex-col justify-between p-6">
            <p className="eyebrow">Gallery</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                "/images/Frame_1511.png",
                "/images/KronesOmar.jpg",
                "/images/WhatsApp_Image_2025-02-24_at_22.33.53.jpeg",
                "/images/Frame_1511.png",
                "/images/KronesOmar.jpg",
                "/images/WhatsApp_Image_2025-02-24_at_22.33.53.jpeg",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-md border border-ink-500/70"
                >
                  <img
                    src={src}
                    alt={`Engineering work ${i + 1}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(140deg, rgba(22,32,44,0.1), rgba(10,15,20,0.55))",
                    }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-bone-400">
              CAD renders, technical drawings and manufacturing — coming soon.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Block({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease }}
      className="card p-6"
    >
      <div className="flex items-center gap-2 text-bone-400">
        {icon}
        <p className="eyebrow">{title}</p>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((it) => (
          <li
            key={it}
            className="rounded-md border border-ink-500/70 bg-ink-800/60 px-2.5 py-1 text-xs text-bone-300"
          >
            {it}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
