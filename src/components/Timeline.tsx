import { motion } from 'framer-motion'
import { Section, SectionHeader } from './Section'

type Entry = {
  year: string
  title: string
  points: string[]
  highlight?: boolean
}

const TIMELINE: Entry[] = [
  {
    year: '2018',
    title: 'Graduated from high school',
    points: [
      'Graduated with a German-equivalent Abitur grade of 1.8.',
      'Began learning German from scratch with the goal of studying engineering in Germany.',
    ],
  },
  {
    year: '2019',
    title: 'Moved to Germany',
    points: [
      'Received my German student visa and moved to Dortmund.',
      'Dedicated myself entirely to learning German, progressing all the way to C1 level.',
    ],
  },
  {
    year: '2020',
    title: 'The pandemic changed everything',
    points: [
      'Financial difficulties, unexpected emergencies and health challenges forced me to pause my studies and remain at home for several months.',
      'Worked full-time at Amazon as a warehouse associate, and evenings as a dishwasher in a restaurant.',
      'In December, successfully passed the DSH German language examination — university-level German proficiency.',
    ],
  },
  {
    year: '2021',
    title: 'Began studying engineering in Germany',
    points: [
      'Enrolled at RPTU Kaiserslautern in October — the only option allowing off-cycle admission.',
      'Many required courses were not offered every semester, forcing up to 15 examinations within a limited timeframe.',
      'Worked as Lieferando delivery driver, moving assistant, painter, cleaning assistant and restaurant waiter to finance my studies.',
      'Despite my efforts, earned only 5 ECTS during my first academic year.',
    ],
  },
  {
    year: '2022',
    title: 'A qualification crisis — and a solution',
    points: [
      'My foreign high school qualification was no longer recognized for new admissions in Germany.',
      'Instead of giving up, I searched for every possible solution.',
      'Discovered an old Uni-Assist evaluation confirming my 1.8 German-equivalent grade with a VPD issued for Hochschule München.',
      'After numerous discussions with university offices, I successfully secured admission to Hochschule München.',
    ],
  },
  {
    year: '2023',
    title: 'Production & Automation Engineering at HM',
    points: [
      'In October, I officially began studying Production & Automation Engineering at Hochschule München.',
      'Realized that mechanical engineering, product development and automation were exactly where my passion belonged.',
      'From this point onward, my academic performance improved significantly.',
    ],
    highlight: true,
  },
  {
    year: '2025',
    title: 'First engineering internship at KRONES AG',
    points: [
      'On 03 August 2025, I started my first engineering internship at KRONES AG.',
      'Joined the Mechanical Development department, contributing to the development of packaging machines.',
      'First professional engineering experience — confirmed my passion for mechanical product development.',
      'After completing the internship, received an offer to continue as a Working Student at KRONES.',
    ],
    highlight: true,
  },
  {
    year: '2026',
    title: 'Working Student at FlightLab',
    points: [
      'On 01 June 2026, I joined FlightLab as a Working Student in the Structural Development team.',
      'My work focuses on the structural development of unmanned aircraft systems (UAS), contributing to innovative aerospace engineering projects.',
      'Today, I continue building my career while combining engineering, entrepreneurship, technology and athletic performance.',
    ],
    highlight: true,
  },
]

export default function Timeline() {
  return (
    <Section id="timeline" className="pt-0">
      <div className="container-lux section-pad">
        <SectionHeader
          eyebrow="My Journey"
          title={
            <>
              My journey has
              <br className="hidden md:block" /> never been easy.
            </>
          }
          description="Every challenge shaped the person I am today. From learning German from scratch to building a career in engineering — a path defined by discipline, resilience and continuous growth."
        />

        <div className="relative mt-16 pl-6 md:pl-12">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-ember/60 via-white/10 to-transparent" />

          <div className="space-y-14">
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
                <span
                  className={`absolute -left-[1.55rem] top-2 h-3 w-3 rounded-full ring-4 ring-ink-base transition-transform duration-300 group-hover:scale-125 md:-left-[3.05rem] ${
                    entry.highlight ? 'bg-ember' : 'bg-ember/60'
                  }`}
                />

                <div className="flex flex-col gap-2 md:flex-row md:gap-8">
                  <span className="font-display text-3xl text-ember md:w-28 md:shrink-0">
                    {entry.year}
                  </span>
                  <div className="md:flex-1">
                    <h3 className="font-display text-xl text-white md:text-2xl">
                      {entry.title}
                    </h3>
                    <ul className="mt-3 space-y-2.5">
                      {entry.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted md:text-[15px]"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Looking ahead */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mt-16 overflow-hidden rounded-3xl glass-strong p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ember/10 via-transparent to-transparent" />
          <div className="relative">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-ember" />
              <span className="eyebrow text-ember">Looking Ahead</span>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              My mission is to build products, companies and technologies that
              create real value. I believe engineering is about solving
              meaningful problems. At the same time, I am building my own
              entrepreneurial ventures — including{' '}
              <span className="text-ember">WolvesMacht</span> — and documenting
              my journey to inspire others who are starting from nothing.
            </p>
            <p className="mt-6 font-display text-2xl text-white md:text-3xl">
              Discipline creates freedom.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
