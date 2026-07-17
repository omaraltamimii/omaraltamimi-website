import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Section, SectionHeader } from './Section'

const CATEGORIES = [
  'Engineering',
  'Automation',
  'Technology',
  'Entrepreneurship',
  'Student Life',
  'Studying in Germany',
  'Fitness',
  'Calisthenics',
  'Leadership',
  'Productivity',
  'Self Improvement',
  'Personal Branding',
  'Career',
]

const POSTS = [
  {
    category: 'Studying in Germany',
    title: 'Moving to Germany as an engineering student',
    excerpt:
      'What I learned moving to Germany in 2019 — language, discipline and building a new life from zero.',
    read: '6 min',
  },
  {
    category: 'Engineering',
    title: 'Engineering thinking as a founder advantage',
    excerpt:
      'How production & automation engineering shapes the way I build companies and products.',
    read: '5 min',
  },
  {
    category: 'Calisthenics',
    title: 'Discipline compounds: training for the long game',
    excerpt:
      'Why calisthenics, consistency and recovery beat intensity over years — not weeks.',
    read: '4 min',
  },
  {
    category: 'Entrepreneurship',
    title: 'Building WolvesMacht from engineering principles',
    excerpt:
      'The systems-level thinking behind a premium performance apparel brand.',
    read: '7 min',
  },
]

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Blog() {
  return (
    <Section id="blog">
      <div className="container-lux section-pad">
        <SectionHeader
          eyebrow="Blog"
          title={
            <>
              Notes on building,
              <br className="hidden md:block" /> learning and discipline.
            </>
          }
          description="Writing on engineering, entrepreneurship, studying in Germany, fitness and personal growth."
        />

        {/* Categories */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {CATEGORIES.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="cursor-default rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-xs text-muted transition-colors hover:border-ember/40 hover:text-white"
            >
              {c}
            </motion.span>
          ))}
        </div>

        {/* Posts */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {POSTS.map((p, i) => (
            <motion.article
              key={p.title}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 2) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:border-ember/30 hover:-translate-y-1"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-ember/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wide2 text-ember">
                    {p.category}
                  </span>
                  <span className="text-xs text-muted">{p.read}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl leading-snug text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-ember transition-colors group-hover:text-ember-300">
                  Read article
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}
