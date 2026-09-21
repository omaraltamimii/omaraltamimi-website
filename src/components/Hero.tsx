import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { site, media } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Cinematic background image */}
      <div className="absolute inset-0">
        <motion.img
          src={media.heroImage}
          alt="Omar Al Tamimi training"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,9,11,0.5) 0%, rgba(8,9,11,0.7) 50%, rgba(8,9,11,0.95) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,9,11,0.85) 0%, rgba(8,9,11,0.3) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-6"
          >
            {site.role} · {site.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="font-sans text-5xl font-bold uppercase leading-[0.95] tracking-tightest text-bone-50 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Omar Al Tamimi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="mt-6 font-sans text-lg font-semibold uppercase tracking-widest2 text-accent sm:text-xl"
          >
            Engineering × Strength × Calisthenics
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-3 text-base text-bone-200 sm:text-lg"
          >
            Production & Automation Engineering (Mechatronics)
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="text-base text-bone-200 sm:text-lg"
          >
            {site.location} · Road to {site.muscleUpGoal} Muscle-Ups
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#work" className="btn-primary">
              Work With Me <ArrowUpRight size={16} />
            </a>
            <a href="#fitness" className="btn-ghost">
              Explore My Journey
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-bone-400">
          <span className="font-mono text-[10px] uppercase tracking-widest2">Scroll</span>
          <ArrowDown size={14} className="animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
