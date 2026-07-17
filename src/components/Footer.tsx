import { Instagram, Linkedin, Github, Mail } from 'lucide-react'
import { NAV_ITEMS, SOCIALS, FULL_TITLE } from '../data/site'

const SOCIAL_LINKS = [
  { label: 'Instagram', href: SOCIALS.instagram, icon: Instagram },
  { label: 'LinkedIn', href: SOCIALS.linkedin, icon: Linkedin },
  { label: 'GitHub', href: SOCIALS.github, icon: Github },
  { label: 'Email', href: SOCIALS.email, icon: Mail },
]

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/10 section-pad py-16">
      <div className="container-lux">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <button
              onClick={() => go('home')}
              className="font-display text-2xl font-semibold tracking-tight text-white"
            >
              Omar Al Tamimi<span className="text-ember">.</span>
            </button>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {FULL_TITLE}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Entrepreneur', 'Athlete', 'Creator'].map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-muted"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow mb-4">Navigation</p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {NAV_ITEMS.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => go(n.id)}
                    className="text-sm text-muted transition-colors hover:text-ember"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="eyebrow mb-4">Social</p>
            <div className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-white"
                >
                  <s.icon size={16} className="text-ember" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Omar Al Tamimi. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Designed & built with discipline in Munich.
          </p>
        </div>
      </div>
    </footer>
  )
}
