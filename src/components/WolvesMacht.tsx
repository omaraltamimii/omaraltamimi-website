import { motion } from "framer-motion";
import Section from "./Section";
import { wolvesmacht } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function WolvesMacht() {
  return (
    <Section
      id="wolvesmacht"
      eyebrow="WolvesMacht"
      title="The strength and presence of the wolves"
      subtitle="More than apparel — a community, a symbol of discipline, and a commitment to continuous growth."
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-2xl border border-ink-500 bg-ink-800/40 p-8">
            <div className="grid-bg-fine absolute inset-0 opacity-30" />
            <div className="relative flex flex-col items-center text-center">
              <div className="relative mb-6 h-28 w-28 overflow-hidden rounded-full border border-ink-500 bg-ink-900">
                <img
                  src="/images/WolvesMachtLogo.png"
                  alt="WolvesMacht logo"
                  className="absolute inset-0 h-full w-full object-contain p-1"
                  loading="lazy"
                />
              </div>
              <p className="font-mono text-xs text-accent">WolvesMacht</p>
              <p className="mt-6 font-sans text-4xl font-semibold leading-tight tracking-tight text-bone-50">
                {wolvesmacht.arabic}
              </p>
              <p className="mt-2 font-mono text-sm text-bone-300">
                {wolvesmacht.translit}
              </p>
              <p className="mt-4 text-sm text-bone-400">
                {wolvesmacht.meaning}
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-ink-500/60 pt-5">
                <span className="eyebrow">Founder</span>
                <span className="text-sm text-bone-50">Omar Al Tamimi</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="space-y-4">
            {wolvesmacht.story.map((p, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-bone-300 first:text-base first:text-bone-50"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {wolvesmacht.pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="card p-5"
              >
                <p className="font-mono text-xs text-accent">
                  0{i + 1}
                </p>
                <h4 className="mt-2 font-sans text-base font-semibold text-bone-50">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-bone-400">
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-16">
        <p className="eyebrow mb-6">Roadmap</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {wolvesmacht.roadmap.map((r, i) => (
            <motion.div
              key={r.phase}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.07 }}
              className="card relative p-6"
            >
              <p className="font-mono text-xs text-accent">{r.phase}</p>
              <h4 className="mt-2 font-sans text-lg font-semibold text-bone-50">
                {r.title}
              </h4>
              <p className="mt-2 text-sm text-bone-400">{r.body}</p>
              {i < wolvesmacht.roadmap.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-px w-4 translate-x-full bg-ink-500 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease }}
        className="mt-12 card flex flex-col items-start justify-between gap-5 p-7 sm:flex-row sm:items-center"
      >
        <div>
          <p className="eyebrow">Launch</p>
          <p className="mt-2 font-sans text-xl font-semibold text-bone-50">
            {wolvesmacht.launchDate}
          </p>
          <p className="mt-1 text-sm text-bone-400">
            {wolvesmacht.newsletter}
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-md items-center gap-2"
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="w-full rounded-md border border-ink-500 bg-ink-800/60 px-4 py-3 text-sm text-bone-50 placeholder:text-bone-400 focus:border-accent focus:outline-none"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Join the Pack
          </button>
        </form>
      </motion.div>
    </Section>
  );
}
