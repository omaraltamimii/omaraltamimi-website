import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import { useInView } from 'framer-motion'

type CountUpResult<E extends HTMLElement = HTMLDivElement> = {
  value: number
  ref: RefObject<E>
}

export function useCountUp<E extends HTMLElement = HTMLDivElement>(
  target: number,
  duration = 2000,
  start = true,
): CountUpResult<E> {
  const [value, setValue] = useState(0)
  const ref = useRef<E>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const active = start && inView

  useEffect(() => {
    if (!active) return
    let raf = 0
    const startT = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - startT) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return { value, ref }
}
