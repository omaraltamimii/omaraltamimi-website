import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    setEnabled(true)
    document.body.classList.add('custom-cursor-active')

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      const t = e.target as HTMLElement
      setHovering(
        !!t.closest('a, button, [data-cursor="hover"], input, textarea'),
      )
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] h-2 w-2 rounded-full bg-ember"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hovering ? 0.5 : 1 }}
        transition={{ type: 'spring', stiffness: 800, damping: 40, mass: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[89] h-9 w-9 rounded-full border border-ember/50"
        animate={{
          x: pos.x - 18,
          y: pos.y - 18,
          scale: hovering ? 1.8 : 1,
          opacity: hovering ? 0.9 : 0.5,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 22, mass: 0.5 }}
      />
    </>
  )
}
