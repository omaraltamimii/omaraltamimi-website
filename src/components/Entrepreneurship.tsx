import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Section, SectionHeader } from './Section'

const PILLARS = [
  { label: 'Discipline', desc: 'Built on relentless consistency.' },
  { label: 'Strength', desc: 'Products that make people stronger.' },
  { label: 'Engineering thinking', desc: 'Systems-level design, applied to brand.' },
  { label: 'Elite performance', desc: 'For those who refuse average.' },
]

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Entrepreneurship() {
  return (
    <Section id="entrepreneurship">
      <div className="container-lux section-pad">
        <SectionHeader
          eyebrow="Entrepreneurship"
          title={
            <>
              Building
              <br className="hidden md:block" /> companies.
            </>
          }
          description="Turning engineering thinking and disciplined living into real businesses and brands."
        />

        {/* WolvesMacht showcase */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative mt-16 overflow-hidden rounded-3xl glass-strong"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ember/15 via-ink-card to-ink-base" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle at 80% 20%, rgba(199,90,18,0.3), transparent 45%), radial-gradient(circle at 10% 90%, rgba(199,90,18,0.15), transparent 50%)',
            }}
          />

          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-ember" />
                <span className="eyebrow text-ember">Featured Startup</span>
              </div>
              <h3 className="mt-4 font-display text-5xl tracking-tight text-white md:text-6xl">
                WolvesMacht
              </h3>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
                WolvesMacht is a premium performance apparel and lifestyle brand
                inspired by discipline, strength, engineering thinking and elite
                performance.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="eyebrow text-ember-200">Mission</p>
                <p className="mt-2 text-base text-white/90">
                  To create products that inspire people to become stronger
                  physically and mentally.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <button className="btn-ember">
                  Discover WolvesMacht
                  <ArrowUpRight size={16} />
                </button>
                <button className="btn-ghost">Coming Soon</button>
              </div>
            </div>

            {/* Brand mark placeholder */}
            <div className="relative aspect-square w-full max-w-sm justify-self-center">
              <div className="absolute inset-0 rounded-full border border-ember/20 animate-pulse-ring" />
              <motion.div
                className="absolute inset-6 rounded-full glass-strong flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-center">
                  <p className="font-display text-6xl font-bold tracking-tight text-white">
                    W
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-ultra text-ember">
                    WolvesMacht
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Pillars */}
          <div className="relative grid gap-px border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6"
              >
                <p className="font-display text-lg text-white">{p.label}</p>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future ventures */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-8 grid gap-5 sm:grid-cols-2"
        >
          <div className="rounded-2xl glass p-6">
            <p className="eyebrow">Venture 02</p>
            <p className="mt-2 font-display text-xl text-white">
              Future ventures
            </p>
            <p className="mt-2 text-sm text-muted">
              Room reserved for the next companies — products at the intersection
              of automation, software and human performance.
            </p>
          </div>
          <div className="rounded-2xl glass p-6">
            <p className="eyebrow">Venture 03</p>
            <p className="mt-2 font-display text-xl text-white">
              In development
            </p>
            <p className="mt-2 text-sm text-muted">
              New ideas in progress. Engineering, brand and content built to
              scale.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
