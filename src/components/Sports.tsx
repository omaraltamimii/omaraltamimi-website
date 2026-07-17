import { motion } from 'framer-motion'
import { Dumbbell, Activity, Footprints, Wind, Mountain, Heart } from 'lucide-react'
import { Section, SectionHeader } from './Section'
import { useCountUp } from '../hooks/useCountUp'

const SPORTS = [
  { label: 'Calisthenics', icon: Activity },
  { label: 'Strength Training', icon: Dumbbell },
  { label: 'Gym', icon: Dumbbell },
  { label: 'Running', icon: Footprints },
  { label: 'Mobility', icon: Wind },
  { label: 'Outdoor Activities', icon: Mountain },
  { label: 'Athletic Performance', icon: Activity },
  { label: 'Recovery', icon: Heart },
]

const STATS = [
  { value: 6, suffix: '+', label: 'Years of training' },
  { value: 5, suffix: 'x', label: 'Sessions per week' },
  { value: 100, suffix: '%', label: 'Consistency mindset' },
  { value: 7, suffix: 'd', label: 'Discipline, every week' },
]

const MINDSET = ['Discipline', 'Consistency', 'Mindset']

function Stat({
  value,
  suffix,
  label,
}: {
  value: number
  suffix: string
  label: string
}) {
  const { value: v, ref } = useCountUp<HTMLDivElement>(value)
  return (
    <div ref={ref} className="rounded-2xl glass p-6 text-center">
      <p className="font-display text-4xl text-white md:text-5xl">
        {Math.round(v)}
        <span className="text-ember">{suffix}</span>
      </p>
      <p className="mt-2 text-xs uppercase tracking-wide2 text-muted">{label}</p>
    </div>
  )
}

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Sports() {
  return (
    <Section id="sports">
      <div className="container-lux section-pad">
        <SectionHeader
          eyebrow="Sports"
          title={
            <>
              Built through
              <br className="hidden md:block" /> discipline and motion.
            </>
          }
          description="Athletic performance is a system. Train consistently, recover intelligently, and let discipline compound."
        />

        {/* Stats */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Stat {...s} />
            </motion.div>
          ))}
        </div>

        {/* Sports grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SPORTS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group flex items-center gap-3 rounded-2xl glass p-5 transition-all duration-300 hover:border-ember/40 hover:-translate-y-1"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ember/10 text-ember transition-colors group-hover:bg-ember/20">
                <s.icon size={18} />
              </span>
              <span className="text-sm text-white/90">{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Mindset */}
        <motion.div
          variants={card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl glass p-6"
        >
          <span className="eyebrow text-ember">Mindset</span>
          {MINDSET.map((m) => (
            <span
              key={m}
              className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-sm text-white"
            >
              {m}
            </span>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
