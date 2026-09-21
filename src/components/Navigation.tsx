import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";

const ids = nav.map((n) => n.id);

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink-500/40 bg-ink-950/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        {nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setOpen(false)}
            className={`relative hidden py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-200 sm:block ${
              active === item.id ? "text-bone-50" : "text-bone-400 hover:text-bone-50"
            }`}
          >
            {item.label}
            {active === item.id && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-x-0 -bottom-px h-px bg-accent"
              />
            )}
          </a>
        ))}

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center text-bone-50 sm:hidden"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink-500/40 bg-ink-950/95 sm:hidden"
          >
            <div className="flex flex-col px-6 py-3">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-sm font-medium uppercase tracking-wider ${
                    active === item.id ? "text-accent" : "text-bone-300"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
