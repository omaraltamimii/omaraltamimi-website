import { motion } from 'framer-motion'
import { Cpu, Boxes, Wrench, Layers, Code as Code2, CircuitBoard, Factory, FileText, PenTool, Gauge } from 'lucide-react'
import { Section, SectionHeader } from './Section'
import { FULL_TITLE } from '../data/site'

const SKILLS = [
  { label: 'CAD', icon: Boxes },
  { label: 'Automation', icon: CircuitBoard },
  { label: 'Mechanical Design', icon: Wrench },
  { label: 'Product Development', icon: Layers },
  { label: 'Programming', icon: Code2 },
  { label: 'Embedded Systems', icon: Cpu },
  { label: 'Automation Technology', icon: Gauge },
  { label: 'Industrial Engineering', icon: Factory },
  { label: 'Manufacturing', icon: Layers },
  { label: 'Rapid Prototyping', icon: PenTool },
  { label: 'Engineering Documentation', icon: FileText },
]

const WORKFLOW = [
  'Research & analysis',
  'Concept & ideation',
  'CAD modelling',
  'Simulation & validation',
  'Prototyping',
  'Testing & iteration',
  'Documentation',
  'Production handoff',
]

const PROJECTS = [
  {
    title: 'Mechanical Design',
    tag: 'Design',
    desc: 'Precision mechanical assemblies engineered for performance, manufacturability and reliability.',
  },
  {
    title: 'Automation System',
    tag: 'Automation',
    desc: 'Automated control systems integrating sensors, actuators and programmable logic for industrial workflows.',
  },
  {
    title: 'CAD Product Design',
    tag: 'CAD',
    desc: 'End-to-end product design in CAD — from concept sketches to validated, production-ready models.',
  },
  {
    title: 'Embedded System',
    tag: 'Embedded',
    desc: 'Microcontroller-based embedded systems bridging hardware and software for real-time control.',
  },
  {
    title: 'Engineering Documentation',
    tag: 'Docs',
    desc: 'Technical documentation, drawings and specifications that make engineering reproducible.',
  },
  {
    title: 'Manufacturing Optimization',
    tag: 'Manufacturing',
    desc: 'Process optimization reducing cycle time, waste and cost across production lines.',
  },
  {
    title: 'Future Projects',
    tag: 'Coming soon',
    desc: 'A pipeline of ventures at the intersection of automation, product and entrepreneurship.',
  },
]

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Engineering() {
  return (
    <Section id="engineering">
      <div className="container-lux section-pad">
        <SectionHeader
          eyebrow="Engineering"
          title={
            <>
              Production & Automation
              <br className="hidden md:block" /> Engineering.
            </>
          }
          description="A rigorous engineering foundation from Hochschule München (HM), applied to real products, automation systems and industrial problems."
        />

        {/* Status row */}
        <motion.div
          variants={card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          <div className="rounded-2xl glass p-6">
            <p className="eyebrow">Status</p>
            <p className="mt-2 font-display text-xl text-white">{FULL_TITLE}</p>
          </div>
          <div className="rounded-2xl glass p-6">
            <p className="eyebrow">University</p>
            <p className="mt-2 font-display text-xl text-white">
              Hochschule München (HM)
            </p>
          </div>
          <div className="rounded-2xl glass p-6">
            <p className="eyebrow">Expected Graduation</p>
            <p className="mt-2 font-display text-xl text-ember">2026</p>
          </div>
        </motion.div>

        {/* Skills */}
        <div className="mt-14">
          <p className="eyebrow mb-5">Engineering Skills</p>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((s, i) => (
              <motion.div
                key={s.label}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 transition-all duration-300 hover:border-ember/40 hover:bg-ember/[0.06] hover:-translate-y-0.5"
              >
                <s.icon size={16} className="text-ember" />
                <span className="text-sm text-white/90">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-14">
          <p className="eyebrow mb-5">Engineering Workflow</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW.map((step, i) => (
              <motion.div
                key={step}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-xl glass p-4"
              >
                <span className="font-display text-sm text-ember">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-1 text-sm text-white/90">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Portfolio / Projects */}
        <div className="mt-16">
          <p className="eyebrow mb-5">Engineering Portfolio</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.title}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: (i % 3) * 0.06 }}
                className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:border-ember/30 hover:-translate-y-1"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ember/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <span className="text-[10px] uppercase tracking-wide2 text-ember">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
