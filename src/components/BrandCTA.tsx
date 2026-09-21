import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BrandCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="grid-bg-fine absolute inset-0 opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(217,98,31,0.08), transparent 70%)",
        }}
      />
      <div className="container-wide relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="font-sans text-4xl font-bold uppercase tracking-tightest text-bone-50 sm:text-5xl md:text-6xl"
        >
          Let's Create Something.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-bone-200"
        >
          "Looking for authentic fitness and sports content?"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-bone-400"
        >
          Available for UGC, fitness content, sportswear, product content and
          brand collaborations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href={`mailto:${site.email}`}
            className="btn-primary"
          >
            Start a Collaboration <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
