import { useEffect, useRef } from 'react'

/**
 * Custom cursor — enabled only for fine pointers with reduced-motion off.
 * Scales to a "View" badge over [data-cursor="view"] targets.
 */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = ref.current
    if (!fine || reduced || !el) return

    el.classList.add('on')
    let x = -100
    let y = -100
    let raf = 0
    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0
          el.style.transform = `translate(${x}px, ${y}px)`
        })
      }
    }
    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-cursor="view"]')
      el.classList.toggle('view', !!target)
      el.classList.toggle('view-big', !!target)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    return () => {
      el.classList.remove('on', 'view', 'view-big')
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <div ref={ref} className="cursor" aria-hidden="true">
      <span className="cursor-label">View</span>
    </div>
  )
}
