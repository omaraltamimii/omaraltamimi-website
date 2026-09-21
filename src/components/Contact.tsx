import { motion } from "framer-motion";
import { Mail, Instagram } from "lucide-react";
import Section from "./Section";
import { site } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Work With Omar."
      subtitle="Fitness · Sports · UGC · Collaborations"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease }}
        className="mb-10 max-w-xl text-base leading-relaxed text-bone-200"
      >
        "Interested in working together?"
      </motion.p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          href={`mailto:${site.email}`}
          className="card group flex flex-1 items-center gap-4 p-6"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-md border border-ink-500 text-bone-50 transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
            <Mail size={20} />
          </div>
          <div>
            <p className="eyebrow">Email Me</p>
            <p className="mt-1 text-sm text-bone-50">{site.email}</p>
          </div>
        </motion.a>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease, delay: 0.08 }}
          href={site.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="card group flex flex-1 items-center gap-4 p-6"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-md border border-ink-500 text-bone-50 transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
            <Instagram size={20} />
          </div>
          <div>
            <p className="eyebrow">Instagram</p>
            <p className="mt-1 text-sm text-bone-50">@omar.altamimii</p>
          </div>
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease, delay: 0.15 }}
        className="mt-6 flex flex-col gap-3 sm:flex-row"
      >
        <a href={`mailto:${site.email}`} className="btn-primary flex-1">
          Email Me
        </a>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost flex-1"
        >
          Instagram
        </a>
      </motion.div>
    </Section>
  );
}
