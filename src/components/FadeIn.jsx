import { useEffect, useRef, useState } from 'react'

export default function FadeIn({
  children,
  className = '',
  rootMargin = '-12% 0px -12% 0px',
  threshold = 0.12,
  direction = 'up',
  delay = 0,
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { root: null, rootMargin, threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin, threshold])

  const initial = {
    up: 'translate-y-[30px]',
    down: '-translate-y-[30px]',
    left: '-translate-x-[40px]',
    right: 'translate-x-[40px]',
    soft: 'translate-y-[10px] scale-[0.97]',
  }[direction] ?? 'translate-y-[30px]'

  return (
    <div
      ref={ref}
      className={[
        'transition-[opacity,transform] duration-900 ease-[cubic-bezier(.2,.9,.2,1)] will-change-[opacity,transform]',
        'motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100',
        inView ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 ${initial}`,
        className,
      ].filter(Boolean).join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
