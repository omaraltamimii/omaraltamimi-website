import { motion } from "framer-motion";
import { site } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: "url('/images/this_one_on_the_right_at_first.jpeg')", backgroundPosition: "center 70%" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ink-950/75"
      />

      <div className="relative z-10 max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.24em] text-accent"
        >
          {site.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="font-sans text-4xl font-bold uppercase leading-[1.05] tracking-tight text-bone-50 sm:text-5xl md:text-6xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          className="mt-5 font-sans text-base font-semibold uppercase tracking-[0.18em] text-bone-200 sm:text-lg"
        >
          {site.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.35 }}
          className="mt-2 text-sm text-bone-200"
        >
          {site.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
          className="mx-auto mt-8 max-w-md text-base leading-relaxed text-bone-100"
        >
          {site.intro}
        </motion.p>
      </div>
    </section>
  );
}
