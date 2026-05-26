import { useRef, useEffect, useState } from 'react'
import { assetUrl, headingFontStyle } from '../lib/utils'

const slides = [
  
  { src: 'img/wall.jpg',       label: 'The Mark',     num: '02' },
  { src: 'img/guty.jpg',       label: 'The Portrait', num: '03' },
  { src: 'img/train.jpg',      label: 'The City',     num: '04' },
  { src: 'img/tagshirtmock.jpg',    label: 'The Tag',   num: '05' },
  { src: 'img/cap.jpg',    label: 'Outside',   num: '06' },
  { src: 'img/nice mock.jpg',  label: 'The Object',   num: '07' },
  { src: 'img/sky.jpeg',       label: 'The Sky',      num: '01' },
]

export default function HorizontalScroll() {
  const outerRef = useRef(null)
  const trackRef = useRef(null)
  const [translateX, setTranslateX] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const compute = () => {
      if (!outerRef.current || !trackRef.current) return
      const rect = outerRef.current.getBoundingClientRect()
      const scrollable = outerRef.current.offsetHeight - window.innerHeight
      if (scrollable <= 0) return
      const scrolled = Math.max(0, -rect.top)
      const p = Math.min(1, scrolled / scrollable)
      const overflow = trackRef.current.scrollWidth - window.innerWidth
      setProgress(p)
      setTranslateX(-p * Math.max(0, overflow))
    }

    window.addEventListener('scroll', compute, { passive: true })
    window.addEventListener('resize', compute, { passive: true })
    compute()
    return () => {
      window.removeEventListener('scroll', compute)
      window.removeEventListener('resize', compute)
    }
  }, [])

  const currentSlide = Math.min(slides.length - 1, Math.round(progress * (slides.length - 1)))

  return (
    <div ref={outerRef} className="relative" style={{ height: '280vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[#020200]">

        {/* Header */}
        <div className="absolute left-0 right-0 top-0 z-10 flex items-end justify-between px-[10vw] py-8">
          <div>
            <p className="mb-1 text-[0.63rem] uppercase tracking-[0.42em] text-white/25">Archive</p>
            <p
              className="text-[clamp(1.6rem,3vw,2.6rem)] font-normal leading-none tracking-[-0.02em] text-[#feeadd]"
              style={headingFontStyle}
            >
              Some of the Visuals
            </p>
          </div>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/30">
            <span className="text-[#ec2227]">{String(currentSlide + 1).padStart(2, '0')}</span>
            {' / '}
            {String(slides.length).padStart(2, '0')}
          </p>
        </div>

        {/* Slide track */}
        <div
          ref={trackRef}
          className="flex h-full items-center gap-4 pl-[10vw] pr-[10vw] will-change-transform"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.num}
              className="relative shrink-0 overflow-hidden rounded-[18px]"
              style={{ width: 'clamp(240px, 36vw, 520px)', height: '68vh' }}
            >
              <img
                src={assetUrl(slide.src)}
                alt={slide.label}
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,2,0,0.65)_0%,transparent_55%)]" />
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                <p
                  className="text-xl font-normal tracking-[-0.01em] text-white"
                  style={headingFontStyle}
                >
                  {slide.label}
                </p>
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.28em] text-white/40">
                  {slide.num}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-10 left-[10vw] right-[10vw] z-10 h-px bg-white/10">
          <div
            className="h-full bg-[#ec2227]"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Scroll hint — only at start */}
        <div
          className="pointer-events-none absolute bottom-16 right-[10vw] z-10 flex items-center gap-3 transition-opacity duration-500"
          style={{ opacity: progress < 0.04 ? 0.45 : 0 }}
        >
          <p className="text-[0.58rem] uppercase tracking-[0.4em] text-white/60">Scroll</p>
          <div className="flex gap-1">
            <div className="h-px w-6 bg-white/40" />
            <div className="h-px w-3 bg-[#ec2227]/70" />
          </div>
        </div>

      </div>
    </div>
  )
}
