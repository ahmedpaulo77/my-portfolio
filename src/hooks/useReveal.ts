import { useEffect, useRef } from 'react'

/** Adds .in to elements with .rv when they enter the viewport (CSS-driven reveal). */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const targets = root.querySelectorAll<HTMLElement>('.rv')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.15 },
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])
  return ref
}
