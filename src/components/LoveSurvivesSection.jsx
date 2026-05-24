import { useEffect, useRef } from 'react'
import { assetUrl } from '../lib/utils'

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)
const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
const ramp = (p, start, end, ease = easeOutCubic) => {
  if (p <= start) return 0
  if (p >= end) return 1
  return ease((p - start) / (end - start))
}

const seed = (n) => {
  const x = Math.sin(n * 9301 + 49297) * 233280
  return x - Math.floor(x)
}

const PARTICLES = Array.from({ length: 36 }, (_, i) => ({
  left: 12 + seed(i) * 76,
  startY: 65 + seed(i * 2 + 1) * 35,
  dx: (seed(i * 3) - 0.5) * 30,
  dur: 5 + seed(i * 5) * 6,
  delay: -seed(i * 7) * (5 + seed(i * 5) * 6),
  size: 2 + seed(i * 11) * 5,
}))


export default function LoveSurvivesSection() {
  const containerRef = useRef(null)
  // DOM refs for direct mutation
  const nightRef    = useRef(null)
  const dawnRef     = useRef(null)
  const sunRef      = useRef(null)
  const heatRef     = useRef(null)
  const flamesRef   = useRef(null)
  const logoWrapRef = useRef(null)
  const logoImgRef  = useRef(null)
  const particleEmberRefs = useRef([])
  const particleDawnRefs  = useRef([])
  const vignetteRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    let raf = 0
    let lastP = -1

    const tick = () => {
      raf = 0
      if (!container) return
      const rect = container.getBoundingClientRect()
      const total = container.offsetHeight - window.innerHeight
      const p = total > 0 ? Math.max(0, Math.min(1, -rect.top / total)) : 0
      if (Math.abs(p - lastP) < 0.0002) return
      lastP = p

      const ignite      = ramp(p, 0.00, 0.12)
      const burnStrong  = ramp(p, 0.06, 0.22)
      const dawnT       = ramp(p, 0.55, 0.92, easeInOutCubic)
      const dawnP       = ramp(p, 0.50, 0.85)
      const sunRise     = ramp(p, 0.55, 0.95, easeInOutCubic)
      const flameCool   = ramp(p, 0.55, 0.78)
      const embersStart = ramp(p, 0.10, 0.22)

      // Night sky
      if (nightRef.current) nightRef.current.style.opacity = 1 - dawnP * 0.85

      // Dawn sky
      if (dawnRef.current) dawnRef.current.style.opacity = dawnP

      // Sun
      if (sunRef.current) {
        const s = sunRef.current
        s.style.bottom    = `${-25 + sunRise * 38}%`
        s.style.transform = `translate(-50%, 0) scale(${0.85 + dawnT * 0.25})`
        s.style.opacity   = dawnT * 0.95
      }

      // Heat base
      if (heatRef.current) {
        const h = heatRef.current
        h.style.filter  = `blur(40px) hue-rotate(${dawnP * 18}deg) saturate(${1 - dawnP * 0.2})`
        h.style.opacity = ignite * 0.95 * (1 - dawnP * 0.4)
      }

      // Flames group opacity
      if (flamesRef.current) flamesRef.current.style.opacity = ignite * (1 - flameCool)

      // Logo
      if (logoWrapRef.current) {
        logoWrapRef.current.style.opacity   = 0.25 + burnStrong * 0.75
        logoWrapRef.current.style.transform = `translate(-50%, ${-50 + dawnT * 4}%) scale(${0.92 + burnStrong * 0.08 - dawnT * 0.06})`
      }
      if (logoImgRef.current) {
        const r = Math.round(236 + (247 - 236) * dawnT)
        const g = Math.round(34  + (192 - 34)  * dawnT)
        const b = Math.round(39  + (75  - 39)  * dawnT)
        const a1 = (0.95 - dawnT * 0.4).toFixed(2)
        const r2 = Math.round(246 + (255 - 246) * dawnT)
        const g2 = Math.round(138 + (220 - 138) * dawnT)
        const b2 = Math.round(31  + (140 - 31)  * dawnT)
        const a2 = (0.75 - dawnT * 0.3).toFixed(2)
        const r3 = Math.round(236 + (248 - 236) * dawnT)
        const g3 = Math.round(34  + (226 - 34)  * dawnT)
        const b3 = Math.round(39  + (168 - 39)  * dawnT)
        const a3 = (0.55 - dawnT * 0.2).toFixed(2)
        const bright = dawnT > 0.7 ? (dawnT - 0.7) * 0.3 : 0
        logoImgRef.current.style.filter = `brightness(${bright.toFixed(3)}) drop-shadow(0 0 ${8 + burnStrong * 8 - dawnT * 4}px rgba(${r},${g},${b},${a1})) drop-shadow(0 0 ${26 + burnStrong * 14}px rgba(${r2},${g2},${b2},${a2})) drop-shadow(0 0 ${60 + burnStrong * 22}px rgba(${r3},${g3},${b3},${a3}))`
      }

      // Particles
      const embersOp = embersStart * (1 - dawnP * 0.85)
      const dawnOp   = dawnT * 0.95
      for (let i = 0; i < particleEmberRefs.current.length; i++) {
        if (particleEmberRefs.current[i]) particleEmberRefs.current[i].style.opacity = embersOp
        if (particleDawnRefs.current[i])  particleDawnRefs.current[i].style.opacity  = dawnOp
      }

      // Vignette
      if (vignetteRef.current) vignetteRef.current.style.opacity = 1 - dawnP * 0.75
    }

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    tick()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes ls-particle-rise {
          0%   { transform: translate(0,0) scale(0.6); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.7; }
          100% { transform: translate(var(--dx), -110vh) scale(0); opacity: 0; }
        }
        @keyframes ls-heat-pulse {
          0%, 100% { transform: scale(1.0)  translateY(0);   opacity: 0.85; }
          50%      { transform: scale(1.08) translateY(-2%); opacity: 1.0;  }
        }
        @keyframes ls-flame-a {
          0%, 100% { transform: translateX(-50%) scale(1.00,1.00) skewX(0deg);   opacity: 0.95; }
          33%      { transform: translateX(-50%) scale(0.92,1.10) skewX(-3deg);  opacity: 1.00; }
          66%      { transform: translateX(-50%) scale(1.06,0.96) skewX(2.5deg); opacity: 0.92; }
        }
        @keyframes ls-flame-b {
          0%, 100% { transform: translateX(-50%) scale(0.95,1.05) skewX(4deg);  opacity: 0.85; }
          40%      { transform: translateX(-50%) scale(1.10,0.94) skewX(-5deg); opacity: 1.00; }
          75%      { transform: translateX(-50%) scale(0.90,1.08) skewX(2deg);  opacity: 0.80; }
        }
        @keyframes ls-flame-c {
          0%, 100% { transform: translateX(-50%) scale(1.04,0.96) skewX(-3deg); opacity: 0.85; }
          45%      { transform: translateX(-50%) scale(0.88,1.12) skewX(5deg);  opacity: 1.00; }
          80%      { transform: translateX(-50%) scale(1.00,1.00) skewX(-1deg); opacity: 0.78; }
        }
        @keyframes ls-flame-tip {
          0%, 100% { transform: translateX(-50%) scale(1.00,1.00) translateY(0);   opacity: 0.9; }
          50%      { transform: translateX(-50%) scale(1.15,0.85) translateY(-4%); opacity: 1.0; }
        }
      `}</style>

      <section ref={containerRef} style={{ height: '500vh', position: 'relative' }}>
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Night sky */}
          <div ref={nightRef} style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 110%, #1a0500 0%, #050100 38%, #000 80%)',
          }} />

          {/* Dawn sky */}
          <div ref={dawnRef} style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, #2a0e08 0%, #6e0e10 14%, #ec2227 32%, #ff9c68 55%, #f7c04b 78%, #feeadd 100%)',
            opacity: 0,
          }} />

          {/* Sun */}
          <div ref={sunRef} style={{
            position: 'absolute',
            left: '50%',
            bottom: '-25%',
            width: '38vmin', height: '38vmin',
            borderRadius: '50%',
            transform: 'translate(-50%, 0) scale(0.85)',
            background: 'radial-gradient(circle at 50% 50%, #fff7d6 0%, #ffe8a8 22%, #f8e2a8 42%, #f7c04b 62%, rgba(255,156,104,0) 86%)',
            filter: 'blur(2px)',
            mixBlendMode: 'screen',
            opacity: 0,
            pointerEvents: 'none',
          }} />

          {/* Heat base */}
          <div ref={heatRef} style={{
            position: 'absolute', left: '-10%', right: '-10%', bottom: '-30%',
            height: '90%',
            background: `
              radial-gradient(ellipse at 50% 80%, rgba(246,138,31,0.55), rgba(236,34,39,0.30) 28%, transparent 62%),
              radial-gradient(ellipse at 50% 100%, rgba(236,34,39,0.40), transparent 70%)
            `,
            filter: 'blur(40px)',
            mixBlendMode: 'screen',
            animation: 'ls-heat-pulse 3.4s ease-in-out infinite',
            opacity: 0,
            pointerEvents: 'none',
          }} />

          {/* Flames */}
          <div ref={flamesRef} style={{ opacity: 0 }}>
            {[
              { left: '48%', bottom: '-12%', w: '56vmin', h: '80vmin', blur: 28, anim: 'ls-flame-a', dur: '3.7s', delay: '0s' },
              { left: '36%', bottom: '-6%',  w: '32vmin', h: '56vmin', blur: 22, anim: 'ls-flame-b', dur: '4.3s', delay: '-1.1s' },
              { left: '62%', bottom: '-4%',  w: '30vmin', h: '52vmin', blur: 22, anim: 'ls-flame-c', dur: '3.1s', delay: '-0.5s' },
              { left: '50%', bottom:  '8%',  w: '22vmin', h: '36vmin', blur: 14, anim: 'ls-flame-tip', dur: '2.2s', delay: '0s' },
            ].map((f, i) => (
              <div key={i} style={{
                position: 'absolute', left: f.left, bottom: f.bottom,
                width: f.w, height: f.h,
                transformOrigin: 'center bottom',
                mixBlendMode: 'screen',
                filter: `blur(${f.blur}px)`,
                background: 'radial-gradient(ellipse at 50% 80%, rgba(255,210,120,0.95) 0%, rgba(246,138,31,0.85) 22%, rgba(236,34,39,0.60) 50%, rgba(110,14,16,0.20) 72%, transparent 92%)',
                animation: `${f.anim} ${f.dur} ease-in-out infinite`,
                animationDelay: f.delay,
                pointerEvents: 'none',
              }} />
            ))}
          </div>

          {/* Logo */}
          <div ref={logoWrapRef} style={{
            position: 'absolute',
            left: '50%', top: '50%',
            width: '50vmin', height: '50vmin',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: 0.25,
            transform: 'translate(-50%, -50%) scale(0.92)',
            pointerEvents: 'none',
          }}>
            <img
              ref={logoImgRef}
              src={assetUrl('img/logo.svg')}
              alt="Burn Bright"
              style={{ width: '78%', height: '78%', objectFit: 'contain' }}
            />
          </div>

          {/* Particles */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            {PARTICLES.map((pt, i) => (
              <span key={`e${i}`} ref={el => particleEmberRefs.current[i] = el} style={{
                position: 'absolute',
                left: `${pt.left}%`, top: `${pt.startY}%`,
                width: `${pt.size}px`, height: `${pt.size}px`,
                borderRadius: '50%',
                background: 'radial-gradient(circle, #ffd278 0%, #f68a1f 50%, transparent 80%)',
                boxShadow: '0 0 8px rgba(246,138,31,0.7)',
                opacity: 0,
                animationName: 'ls-particle-rise',
                animationDuration: `${pt.dur.toFixed(2)}s`,
                animationDelay: `${pt.delay.toFixed(2)}s`,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                mixBlendMode: 'screen',
                '--dx': `${pt.dx.toFixed(1)}vw`,
              }} />
            ))}
            {PARTICLES.map((pt, i) => (
              <span key={`d${i}`} ref={el => particleDawnRefs.current[i] = el} style={{
                position: 'absolute',
                left: `${pt.left}%`, top: `${pt.startY}%`,
                width: `${pt.size}px`, height: `${pt.size}px`,
                borderRadius: '50%',
                background: 'radial-gradient(circle, #fff0c8 0%, #f8e2a8 50%, transparent 80%)',
                boxShadow: '0 0 10px rgba(248,226,168,0.8)',
                opacity: 0,
                animationName: 'ls-particle-rise',
                animationDuration: `${pt.dur.toFixed(2)}s`,
                animationDelay: `${pt.delay.toFixed(2)}s`,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                mixBlendMode: 'screen',
                '--dx': `${pt.dx.toFixed(1)}vw`,
              }} />
            ))}
          </div>

          {/* Vignette */}
          <div ref={vignetteRef} style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.55) 78%, rgba(0,0,0,0.9) 100%)',
            pointerEvents: 'none',
          }} />

        </div>
      </section>
    </>
  )
}
