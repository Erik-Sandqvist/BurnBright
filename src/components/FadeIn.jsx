import { useEffect, useRef } from 'react'

export default function FadeIn({
  children,
  className = '',
  rootMargin = '-18% 0px -18% 0px',
  threshold = 0.15,
  direction = 'up',
  delay = 0,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('in-view', entry.isIntersecting)
        })
      },
      { root: null, rootMargin, threshold }
    )

    obs.observe(el)

    return () => obs.disconnect()
  }, [rootMargin, threshold])

  return (
    <div
      ref={ref}
      className={`fade-in fade-in--${direction} ${className}`.trim()}
      style={{ '--fade-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}
