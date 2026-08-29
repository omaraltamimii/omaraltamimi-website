import { motion } from "framer-motion";
import Section from "./Section";
import { story } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Story() {
  return (
    <Section
      id="story"
      eyebrow="Who Is Omar"
      title="The Journey"
      subtitle="From survival mode to building mode — the story of Omar Al Tamimi."
    >
      <div className="mx-auto max-w-3xl">
        {story.map((block, i) => {
          if (block.type === "chapter") {
            return (
              <motion.h3
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease }}
                className="mt-16 mb-2 font-sans text-2xl font-semibold uppercase tracking-tight text-bone-50 first:mt-0 sm:text-3xl"
              >
                {block.text}
              </motion.h3>
            );
          }

          if (block.type === "subheading") {
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease }}
                className="mb-8 font-mono text-sm tracking-wide text-accent"
              >
                {block.text}
              </motion.p>
            );
          }

          if (block.type === "divider") {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8 }}
                className="my-12 flex items-center justify-center gap-4"
              >
                <span className="h-px w-16 bg-ink-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                <span className="h-px w-16 bg-ink-500" />
              </motion.div>
            );
          }

          if (block.type === "quote") {
            return (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease }}
                className="my-6 border-l-2 border-accent pl-6 font-sans text-lg font-medium leading-relaxed text-bone-50 sm:text-xl"
              >
                {block.text}
              </motion.blockquote>
            );
          }

          if (block.type === "bold") {
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease }}
                className="mb-5 text-base font-semibold leading-[1.8] text-bone-50 sm:text-lg"
              >
                {block.text}
              </motion.p>
            );
          }

          return (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease }}
              className="mb-5 text-base leading-[1.8] text-bone-300 sm:text-lg"
            >
              {block.text}
            </motion.p>
          );
        })}
      </div>
    </Section>
  );
}
