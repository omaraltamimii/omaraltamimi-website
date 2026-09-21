import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { creatorServices, creatorStats, media, site } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Creator() {
  return (
    <Section
      id="work"
      eyebrow="Work With Me"
      title="Content That Moves."
      subtitle="Fitness, sports and lifestyle content for brands."
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease }}
        className="mb-10 max-w-2xl text-base leading-relaxed text-bone-200"
      >
        "I create short-form content around strength, calisthenics, training and
        athletic performance."
      </motion.p>

      {/* Services grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {creatorServices.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: (i % 3) * 0.08 }}
            className="card group p-6"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-sans text-base font-bold uppercase tracking-tight text-bone-50">
                {service.title}
              </h3>
              <ArrowUpRight
                size={16}
                className="text-bone-400 transition-colors duration-300 group-hover:text-accent"
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-bone-400">
              {service.body}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Video placeholder grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease }}
        className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
      >
        {media.creator.map((item, i) => (
          <div
            key={i}
            className="media-placeholder card group aspect-[9/16]"
          >
            <img
              src={item.src}
              alt={item.label}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-500 ease-eng group-hover:opacity-80 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2">
              <p className="font-mono text-[9px] uppercase tracking-widest2 text-bone-200">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Social proof */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease }}
        className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-ink-500/50 bg-ink-900/40 p-8 sm:grid-cols-3"
      >
        {creatorStats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-sans text-2xl font-bold tracking-tight text-bone-50 sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-bone-400">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease }}
        className="mt-10"
      >
        <a
          href={`mailto:${site.email}`}
          className="btn-primary"
        >
          Work With Omar <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </Section>
  );
}
