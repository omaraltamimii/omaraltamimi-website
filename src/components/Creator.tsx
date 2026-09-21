import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { creatorServices, site } from "../data/site";

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

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease }}
        className="mt-10"
      >
        <a href={`mailto:${site.email}`} className="btn-primary">
          Work With Omar <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </Section>
  );
}
