import { ArrowUp } from "lucide-react";
import { nav, site } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-500/60 py-12">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-sm tracking-widest2 text-bone-50">
              OAT<span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-bone-400">
              {site.role} · {site.location}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="link-underline text-xs uppercase tracking-widest2"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="#home"
            className="flex items-center gap-2 rounded-md border border-ink-500 px-4 py-2 text-xs text-bone-300 transition-colors duration-300 hover:border-bone-400/60 hover:text-bone-50"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-ink-500/60 pt-6 text-xs text-bone-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Omar Al Tamimi. All rights reserved.</p>
          <p className="font-mono">Engineered with precision · Munich</p>
        </div>
      </div>
    </footer>
  );
}
