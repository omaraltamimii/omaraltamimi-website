import { motion } from 'framer-motion'
import { Section, SectionHeader } from './Section'

const TIMELINE = [
  {
    year: '2019',
    title: 'Moved to Germany',
    points: ['Learned German', 'Started building a new life'],
  },
  {
    year: '2020',
    title: 'Started Engineering studies',
    points: ['Focused on discipline', 'Fitness', 'Personal development'],
  },
  {
    year: '2021',
    title: 'Engineering education',
    points: ['Programming', 'CAD', 'Technical skills'],
  },
  {
    year: '2022',
    title: 'Engineering projects',
    points: ['Mechanical design', 'Automation', 'Product development'],
  },
  {
    year: '2023',
    title: 'Advanced engineering education',
    points: ['Embedded systems', 'Industrial engineering', 'Leadership'],
  },
  {
    year: '2024',
    title: 'Professional engineering projects',
    points: ['Content creation', 'Personal brand', 'Business development'],
  },
  {
    year: '2025',
    title: 'Engineering internship',
    points: ['Entrepreneurship', 'Growing personal brand', 'Professional experience'],
  },
  {
    year: 'Present',
    title: 'Building companies',
    points: ['Helping students', 'Helping businesses', 'Growing internationally'],
  },
]

export default function Timeline() {
  return (
    <Section id="timeline" className="pt-0">
      <div className="container-lux section-pad">
        <SectionHeader
          eyebrow="Timeline"
          title={
            <>
              The journey,
              <br className="hidden md:block" /> year by year.
            </>
          }
          description="From moving to a new country to building companies — a path shaped by discipline, learning and ambition."
        />

        <div className="relative mt-16 pl-6 md:pl-10">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-ember/60 via-white/10 to-transparent" />

          <div className="space-y-12">
            {TIMELINE.map((entry, i) => (
              <motion.div
                key={entry.year}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: 'easeOut' }}
                className="relative group"
              >
                {/* Node */}
                <span className="absolute -left-[1.55rem] top-2 h-3 w-3 rounded-full bg-ember ring-4 ring-ink-base transition-transform duration-300 group-hover:scale-125 md:-left-[2.55rem]" />

                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                  <span className="font-display text-3xl text-ember md:w-24 md:shrink-0">
                    {entry.year}
                  </span>
                  <div className="md:flex-1">
                    <h3 className="font-display text-xl text-white">
                      {entry.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {entry.points.map((p) => (
                        <span
                          key={p}
                          className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-muted"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
