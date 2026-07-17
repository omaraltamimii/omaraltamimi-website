import { motion } from 'framer-motion'
import { Section, SectionHeader } from './Section'

const FOCUS = [
  'Engineering',
  'Entrepreneurship',
  'Technology',
  'Sports',
  'Leadership',
  'Innovation',
  'Productivity',
  'Content Creation',
  'Personal Development',
  'Discipline',
]

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function PersonalBrand() {
  return (
    <Section id="brand">
      <div className="container-lux section-pad">
        <SectionHeader
          eyebrow="Personal Brand"
          title={
            <>
              A brand built on
              <br className="hidden md:block" /> substance, not noise.
            </>
          }
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="text-lg leading-relaxed text-white/90">
              The personal brand lives at the intersection of engineering,
              entrepreneurship, technology and athletic discipline — expressed
              through content, products and real-world results.
            </p>
            <div className="mt-8 rounded-2xl glass p-6">
              <p className="eyebrow text-ember">Mission</p>
              <p className="mt-3 text-base leading-relaxed text-white/90">
                Helping ambitious people become better through engineering
                thinking, entrepreneurship, disciplined living and continuous
                learning.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-wrap gap-3"
          >
            {FOCUS.map((f, i) => (
              <motion.span
                key={f}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/90 transition-all duration-300 hover:border-ember/40 hover:bg-ember/[0.06] hover:-translate-y-0.5"
              >
                {f}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
