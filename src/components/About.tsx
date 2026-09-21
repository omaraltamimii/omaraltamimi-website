import { motion } from "framer-motion";
import Section from "./Section";
import { about, site, media } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <Section
      id="about"
      title="More Than Fitness."
    >
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-ink-500">
            <img
              src={media.heroImage}
              alt="Omar Al Tamimi"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(8,9,11,0.1) 0%, rgba(8,9,11,0.5) 60%, rgba(8,9,11,0.95) 100%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <span className="eyebrow">Portrait</span>
              <div>
                <p className="font-sans text-xl font-bold text-bone-50">
                  {site.name}
                </p>
                <p className="mt-1 text-sm text-bone-400">{site.location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className={`mb-5 leading-relaxed ${
                i === 0 ? "text-lg text-bone-50" : "text-base text-bone-300"
              }`}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </Section>
  );
}
