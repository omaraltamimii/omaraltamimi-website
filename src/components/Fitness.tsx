import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { fitnessCategories, media, site } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Fitness() {
  return (
    <Section
      id="fitness"
      title="Strength Is the Journey."
      subtitle='“I train to become stronger, more athletic and more capable. My current focus is strength training, calisthenics and athletic skill development.”'
    >
      {/* Categories */}
      <div className="mb-10 flex flex-wrap gap-2">
        {fitnessCategories.map((cat) => (
          <span
            key={cat}
            className="rounded-full border border-ink-500/60 bg-ink-800/50 px-3 py-1.5 text-xs text-bone-300"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Gallery */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {media.fitness.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease, delay: (i % 3) * 0.08 }}
            className={`card group relative overflow-hidden ${
              i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="media-placeholder aspect-[4/5] w-full">
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-eng group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-accent">
                {item.category}
              </p>
              <h3 className="mt-1 font-sans text-lg font-bold uppercase tracking-tight text-bone-50">
                {item.label}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Instagram CTA */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease }}
        className="mt-10"
      >
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          View Instagram <Instagram size={16} /> <ArrowUpRight size={14} />
        </a>
      </motion.div>
    </Section>
  );
}
