import { useEffect, useRef } from 'react'

export default function ParallaxImg({ src, alt = '', className = '', speed = 0.25 }) {
  const wrapRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    let raf
    const tick = () => {
      const wrap = wrapRef.current
      const img = imgRef.current
      if (!wrap || !img) return
      const rect = wrap.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const progress = (window.innerHeight / 2 - center) / window.innerHeight
      img.style.transform = `translateY(${(progress * speed * 200).toFixed(2)}px) scale(1.25)`
    }
    const onScroll = () => { raf = requestAnimationFrame(tick) }
    window.addEventListener('scroll', onScroll, { passive: true })
    tick()
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [speed])

  return (
    <div ref={wrapRef} className="overflow-hidden">
      <img ref={imgRef} src={src} alt={alt} className={className} style={{ willChange: 'transform' }} />
    </div>
  )
}
