import { motion } from "framer-motion";
import { Mail, Instagram, ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { site } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch."
      subtitle="Fitness · Sports · UGC · Collaborations"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease }}
        className="mb-8 max-w-xl text-base leading-relaxed text-bone-200"
      >
        Interested in working together? Send an email or reach out on Instagram.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease }}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <a href={`mailto:${site.email}`} className="btn-primary">
          <Mail size={16} /> {site.email}
        </a>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          <Instagram size={16} /> Instagram <ArrowUpRight size={14} />
        </a>
      </motion.div>
    </Section>
  );
}
