import { motion } from 'framer-motion'
import { Section, SectionHeader } from './Section'
import { FULL_TITLE } from '../data/site'

const TRAITS = [
  'Final-Year Production & Automation Engineering Student',
  'Based in Munich, Germany',
  'Passionate about Engineering',
  'Entrepreneur',
  'Technology enthusiast',
  'Problem Solver',
  'Athlete',
  'Creator',
  'Lifelong learner',
  'Focused on self improvement',
]

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <Section id="about">
      <div className="container-lux section-pad">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              A discipline built on
              <br className="hidden md:block" /> engineering and ambition.
            </>
          }
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Portrait placeholder */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl glass"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ember/15 via-ink-card to-ink-base" />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 50% 30%, rgba(199,90,18,0.35), transparent 55%)',
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-display text-3xl text-white">Omar Al Tamimi</p>
              <p className="mt-2 text-sm text-muted">{FULL_TITLE}</p>
            </div>
            <motion.div
              className="absolute right-6 top-6 h-14 w-14 rounded-full border border-ember/30"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Identity + mission */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col justify-between gap-8"
          >
            <div>
              <p className="text-lg leading-relaxed text-white/90">
                I am a {FULL_TITLE.toLowerCase()} based in Munich, Germany,
                passionate about engineering, entrepreneurship and building
                meaningful businesses while inspiring others through
                discipline, innovation and continuous growth.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {TRAITS.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-muted transition-colors hover:border-ember/40 hover:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl glass p-6">
              <p className="eyebrow text-ember">Mission</p>
              <p className="mt-3 text-base leading-relaxed text-white/90">
                To combine engineering, entrepreneurship, technology and
                athletic performance into products, businesses and content that
                positively impact people's lives.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
