import { useEffect, useRef, useState } from 'react'

export default function FoldIn({
  children,
  className = '',
  rootMargin = '-18% 0px -18% 0px',
  threshold = 0.2,
  delay = 0,
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting)
        })
      },
      { root: null, rootMargin, threshold }
    )

    obs.observe(el)

    return () => obs.disconnect()
  }, [rootMargin, threshold])

  const transform = inView
    ? 'perspective(900px) translateY(0px) rotateX(0deg) scale(1)'
    : 'perspective(900px) translateY(26px) rotateX(18deg) scale(0.985)'

  return (
    <div
      ref={ref}
      className={[
        'transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(.2,.9,.2,1)] will-change-[opacity,transform]',
        'motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100',
        inView ? 'opacity-100' : 'opacity-0',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ transform, transformOrigin: 'center bottom', transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
