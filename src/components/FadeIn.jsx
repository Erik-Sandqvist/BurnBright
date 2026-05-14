import { useEffect, useRef, useState } from 'react'

export default function FadeIn({
  children,
  className = '',
  rootMargin = '-18% 0px -18% 0px',
  threshold = 0.15,
  direction = 'up',
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

  return (
    <div
      ref={ref}
      data-inview={inView ? 'true' : 'false'}
      className={[
        'group transition-[opacity,transform] duration-700 ease-[cubic-bezier(.2,.9,.2,1)] will-change-[opacity,transform] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100',
        direction === 'down' && '-translate-y-[22px]',
        direction === 'up' && 'translate-y-[22px]',
        direction === 'soft' && 'translate-y-[8px] scale-[0.98]',
        inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
