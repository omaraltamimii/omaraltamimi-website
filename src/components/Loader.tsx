import { motion } from "framer-motion";

export default function Loader({ onDone }: { onDone: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => setTimeout(onDone, 1100)}
    >
      <div className="grid-bg-fine absolute inset-0 opacity-40" />
      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-40 origin-left bg-accent"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="eyebrow"
        >
          Omar Al Tamimi
        </motion.p>
      </div>
    </motion.div>
  );
}
