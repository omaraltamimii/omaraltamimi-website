import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { FULL_TITLE } from '../data/site'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const ROLES = ['Entrepreneur', 'Athlete', 'Creator']

const go = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center section-pad pt-28"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-lux"
      >
        <motion.div variants={item} className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-ember" />
          <span className="eyebrow">Munich, Germany</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="heading-display text-[3.5rem] leading-[0.95] text-white sm:text-7xl lg:text-8xl"
        >
          Omar Al Tamimi
        </motion.h1>

        <motion.div variants={item} className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
          {ROLES.map((r) => (
            <span
              key={r}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-xs uppercase tracking-wide2 text-muted"
            >
              {r}
            </span>
          ))}
        </motion.div>

        <motion.p
          variants={item}
          className="mt-4 text-sm uppercase tracking-wide2 text-ember"
        >
          {FULL_TITLE}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-2xl font-light leading-snug text-white/90 md:text-3xl lg:text-4xl"
        >
          Building at the intersection of{' '}
          <span className="gradient-text font-medium">engineering</span>,{' '}
          <span className="gradient-text font-medium">entrepreneurship</span>,{' '}
          <span className="gradient-text font-medium">technology</span> and{' '}
          <span className="gradient-text font-medium">human performance</span>.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          I am a {FULL_TITLE.toLowerCase()} based in Munich, Germany, passionate
          about engineering, entrepreneurship and building meaningful businesses
          while inspiring others through discipline, innovation and continuous
          growth.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
          <button onClick={() => go('about')} className="btn-ember">
            Explore My Journey
            <ArrowRight size={16} />
          </button>
          <button onClick={() => go('engineering')} className="btn-ghost">
            View My Work
          </button>
          <button onClick={() => go('services')} className="btn-ghost">
            Work With Me
          </button>
        </motion.div>
      </motion.div>

      {/* Premium hero image placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
        className="container-lux mt-16"
      >
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl glass">
          <div className="absolute inset-0 bg-gradient-to-br from-ember/20 via-ink-card to-ink-base" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 50%, rgba(199,90,18,0.4), transparent 50%), radial-gradient(circle at 80% 30%, rgba(199,90,18,0.2), transparent 40%)',
            }}
          />
          <div className="absolute inset-0 flex items-end p-8 md:p-12">
            <div>
              <p className="eyebrow text-ember-200">Featured</p>
              <p className="mt-2 max-w-md font-display text-2xl text-white md:text-3xl">
                Engineering thinking. Entrepreneurial drive. Athletic discipline.
              </p>
            </div>
          </div>
          <motion.div
            className="absolute right-8 top-8 h-20 w-20 rounded-full border border-ember/30"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => go('about')}
          className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-white"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-ultra">Scroll</span>
          <ArrowDown size={14} />
        </motion.button>
      </motion.div>
    </section>
  )
}
