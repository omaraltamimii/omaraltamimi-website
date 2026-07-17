import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-base"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute h-24 w-24 rounded-full border border-ember/30 animate-pulse-ring" />
            <motion.span
              className="absolute h-16 w-16 rounded-full border-2 border-ember/50 border-t-ember"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.1, ease: 'linear' }}
            />
            <span className="font-display text-2xl font-semibold tracking-tight text-white">
              OAT
            </span>
          </div>
          <motion.p
            className="mt-8 text-xs uppercase tracking-ultra text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Omar Al Tamimi
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
