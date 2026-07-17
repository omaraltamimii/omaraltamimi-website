import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Github, Mail, Send, Check } from 'lucide-react'
import { Section, SectionHeader } from './Section'
import { SOCIALS } from '../data/site'

const SOCIAL_LINKS = [
  { label: 'Instagram', href: SOCIALS.instagram, icon: Instagram },
  { label: 'LinkedIn', href: SOCIALS.linkedin, icon: Linkedin },
  { label: 'GitHub', href: SOCIALS.github, icon: Github },
  { label: 'Email', href: SOCIALS.email, icon: Mail },
]

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <Section id="contact">
      <div className="container-lux section-pad">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Let's build
              <br className="hidden md:block" /> something meaningful.
            </>
          }
          description="Engineering projects, collaborations, mentoring or business — reach out and let's talk."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Socials */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-4"
          >
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl glass p-5 transition-all duration-300 hover:border-ember/40 hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ember/10 text-ember transition-colors group-hover:bg-ember/20">
                    <s.icon size={18} />
                  </span>
                  <span className="text-white">{s.label}</span>
                </span>
                <span className="text-xs text-muted transition-colors group-hover:text-ember">
                  Connect →
                </span>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            onSubmit={submit}
            className="rounded-3xl glass-strong p-7 md:p-8"
          >
            <div className="grid gap-5">
              <div>
                <label className="eyebrow mb-2 block">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none transition-colors placeholder:text-muted/60 focus:border-ember/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="eyebrow mb-2 block">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none transition-colors placeholder:text-muted/60 focus:border-ember/50"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="eyebrow mb-2 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white outline-none transition-colors placeholder:text-muted/60 focus:border-ember/50"
                  placeholder="Tell me about your project or question..."
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="btn-ember disabled:opacity-70"
              >
                {sent ? (
                  <>
                    Message sent <Check size={16} />
                  </>
                ) : (
                  <>
                    Send message <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </Section>
  )
}
