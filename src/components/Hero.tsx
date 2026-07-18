import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="container-wide grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-6"
          >
            {site.role} · {site.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="font-sans text-4xl font-semibold leading-[1.02] tracking-tightest text-bone-50 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Omar Al Tamimi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-bone-300"
          >
            Production & Automation Engineering student in Munich. Mechanical
            product development, CAD engineering, structural development, and
            founder of WolvesMacht — building a career through engineering,
            resilience, and continuous growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#engineering" className="btn-primary">
              Engineering Portfolio <ArrowUpRight size={16} />
            </a>
            <a href="#work" className="btn-ghost">
              Work With Me
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink-500/60 pt-6"
          >
            {site.companies.map((c) => (
              <div key={c.name} className="flex flex-col">
                <span className="font-mono text-xs text-bone-50">{c.name}</span>
                <span className="text-[11px] text-bone-400">{c.role}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-ink-500"
          >
            <img
              src="/images/WhatsApp_Image_2025-02-24_at_22.33.53.jpeg"
              alt="Omar Al Tamimi portrait"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,15,20,0.1) 0%, rgba(10,15,20,0.55) 55%, rgba(10,15,20,0.92) 100%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex items-center justify-between">
                <span className="eyebrow">OAT / 2026</span>
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <div>
                <p className="font-mono text-xs text-bone-400">
                  Munich University of Applied Sciences
                </p>
                <p className="mt-1 font-sans text-2xl font-semibold tracking-tight text-bone-50">
                  Production & Automation Engineering
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-bone-400">
                  <div>
                    <p className="text-bone-50">KRONES AG</p>
                    <p>Mechanical Product Dev.</p>
                  </div>
                  <div>
                    <p className="text-bone-50">FlightLab</p>
                    <p>Structural Development</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col items-center gap-2 text-bone-400"
        >
          <span className="font-mono text-[10px] tracking-widest2">SCROLL</span>
          <div className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
