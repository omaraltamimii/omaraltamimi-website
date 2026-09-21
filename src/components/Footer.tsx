import { Mail, Instagram } from "lucide-react";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-500/50 py-16">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-sans text-lg font-bold uppercase tracking-widest2 text-bone-50">
              {site.name}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest2 text-accent">
              {site.heroTagline}
            </p>
            <p className="mt-2 text-sm text-bone-400">
              {site.location}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${site.email}`}
              className="btn-ghost"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-ink-500/40 pt-6 text-xs text-bone-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="font-mono uppercase tracking-widest2">Engineering × Strength × Calisthenics</p>
        </div>
      </div>
    </footer>
  );
}
