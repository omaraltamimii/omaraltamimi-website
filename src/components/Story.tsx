import { motion } from "framer-motion";
import Section from "./Section";
import { story } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Story() {
  return (
    <Section
      id="story"
      eyebrow="Who Is Omar"
      title="Who Is Omar Al Tamimi?"
      subtitle="A story of survival, resilience, and the decision to build a different life."
    >
      <div className="mx-auto max-w-3xl">
        {story.map((block, i) => {
          if (block.type === "heading") {
            return (
              <motion.h3
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease }}
                className="mt-14 mb-6 font-sans text-2xl font-semibold tracking-tight text-bone-50 first:mt-0 sm:text-3xl"
              >
                {block.text}
              </motion.h3>
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
                className="my-8 border-l-2 border-accent pl-6 font-sans text-xl font-medium leading-relaxed text-bone-50 sm:text-2xl"
              >
                {block.text}
              </motion.blockquote>
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
