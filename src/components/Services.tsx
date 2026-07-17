import { motion } from 'framer-motion'
import { Cog, GraduationCap, Dumbbell, ArrowRight } from 'lucide-react'
import { Section, SectionHeader } from './Section'

const GROUPS = [
  {
    icon: Cog,
    title: 'Engineering Services',
    items: [
      'CAD Design',
      'Mechanical Design',
      'Engineering Consulting',
      'Technical Documentation',
      'Prototype Development',
      'Automation Concepts',
      'Engineering Support',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Studying Services',
    items: [
      'Engineering Mentoring',
      'Study Planning',
      'German University Guidance',
      'Engineering Productivity',
      'Student Coaching',
      'Career Advice',
      'Exam Preparation',
    ],
  },
  {
    icon: Dumbbell,
    title: 'Training Plans',
    items: [
      'Strength Training Programs',
      'Calisthenics Programs',
      'Beginner Programs',
      'Intermediate Programs',
      'Advanced Programs',
      'Personal Coaching',
      'Nutrition Basics',
      'Habit Building',
      'Lifestyle Coaching',
    ],
  },
]

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <Section id="services">
      <div className="container-lux section-pad">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              Ways to
              <br className="hidden md:block" /> work with me.
            </>
          }
          description="Engineering work, student mentoring and training programs — each built with the same disciplined, systems-level thinking."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {GROUPS.map((g, i) => (
            <motion.div
              key={g.title}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:border-ember/30 hover:-translate-y-1"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-ember/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 text-ember">
                  <g.icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-2xl text-white">
                  {g.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-white"
                    >
                      <span className="h-1 w-1 rounded-full bg-ember" />
                      {it}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="mt-7 inline-flex items-center gap-2 text-sm text-ember transition-colors hover:text-ember-300"
                >
                  Enquire
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
