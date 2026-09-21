import { motion } from "framer-motion";
import Section from "./Section";
import { muscleUpProgression, site } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function MuscleUpJourney() {
  return (
    <Section
      id="muscle-up"
      eyebrow="The Next Objective"
      title="The Next Objective."
    >
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Large number display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="lg:col-span-5 flex flex-col items-center justify-center rounded-2xl border border-ink-500/50 bg-ink-900/40 py-16"
        >
          <p className="eyebrow mb-4">Road to</p>
          <p className="font-sans text-7xl font-bold tracking-tightest text-accent sm:text-8xl md:text-9xl">
            {site.muscleUpGoal}
          </p>
          <p className="mt-4 font-sans text-xl font-bold uppercase tracking-widest2 text-bone-50">
            Muscle-Ups
          </p>
          <p className="mt-2 text-sm text-bone-400">
            Current: {site.muscleUpCurrent} consecutive rep{site.muscleUpCurrent !== 1 ? "s" : ""}
          </p>
        </motion.div>

        {/* Progression */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease }}
            className="text-lg leading-relaxed text-bone-200"
          >
            From the first muscle-up to 10 consecutive reps.
          </motion.p>

          <div className="mt-10 flex items-center gap-2 sm:gap-4">
            {muscleUpProgression.map((num, i) => {
              const reached = site.muscleUpCurrent >= num;
              const isLast = i === muscleUpProgression.length - 1;
              return (
                <div key={num} className="flex flex-1 items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-colors duration-300 sm:h-16 sm:w-16 ${
                        reached
                          ? "border-accent bg-accent/10"
                          : "border-ink-500 bg-ink-800/50"
                      }`}
                    >
                      <span
                        className={`font-sans text-xl font-bold sm:text-2xl ${
                          reached ? "text-accent" : "text-bone-400"
                        }`}
                      >
                        {num}
                      </span>
                    </div>
                  </motion.div>
                  {!isLast && (
                    <div className="flex-1 mx-1 h-px bg-ink-500 sm:mx-2">
                      <div
                        className="h-full bg-accent transition-all duration-500"
                        style={{
                          width: reached ? "100%" : "0%",
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: 0.3 }}
            className="mt-10 text-sm leading-relaxed text-bone-400"
          >
            An ongoing challenge. Not about being the best — about being better
            than yesterday. Each rep is earned, not given.
          </motion.p>
        </div>
      </div>
    </Section>
  );
}
