import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink-500/40 px-6 py-12">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-sans text-sm font-bold uppercase tracking-[0.24em] text-bone-50">
          {site.name}
        </p>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
          {site.tagline}
        </p>
        <p className="mt-2 text-xs text-bone-400">{site.location}</p>
      </div>
    </footer>
  );
}
