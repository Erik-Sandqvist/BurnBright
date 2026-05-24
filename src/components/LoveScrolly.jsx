import { useEffect, useMemo, useRef, useState } from 'react'
import { assetUrl, displayFontStyle } from '../lib/utils'

function lerp(a, b, t) {
  return a + (b - a) * t
}

function clamp(v, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v))
}

function ease(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

export default function LoveScrolly() {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const tick = () => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = rect.height - vh
      const p = clamp(-rect.top / Math.max(1, total))
      setProgress(p)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    tick()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const stars = useMemo(
    () =>
      Array.from({ length: 110 }, (_, i) => ({
        left: Math.random() * 100,
        top: Math.random() * 75,
        size: Math.random() * 1.8 + 0.4,
        delay: Math.random() * 6,
        duration: 2.4 + Math.random() * 3.6,
        bright: Math.random() > 0.85,
        key: i,
      })),
    [],
  )

  const shootingStars = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        top: 10 + Math.random() * 30,
        left: 5 + Math.random() * 60,
        delay: i * 5 + Math.random() * 4,
        key: i,
      })),
    [],
  )

  const e = ease(progress)

  // Sky color transitions: void → deep ember → heat → first light
  const skyTop = `rgb(${Math.round(lerp(2, 28, e))}, ${Math.round(lerp(2, 6, e))}, ${Math.round(lerp(8, 24, e))})`
  const skyMid = `rgb(${Math.round(lerp(8, 200, e))}, ${Math.round(lerp(6, 80, e))}, ${Math.round(lerp(20, 60, e))})`
  const skyBot = `rgb(${Math.round(lerp(20, 254, e))}, ${Math.round(lerp(8, 234, e))}, ${Math.round(lerp(24, 221, e))})`

  // Sun rises from below the viewport (130%) to behind logo (45%)
  const sunY = lerp(130, 45, e)
  const sunScale = lerp(0.6, 1.15, e)
  const sunOpacity = clamp(progress * 1.6)
  const starsOpacity = clamp(1 - progress * 1.9)
  const horizonOpacity = clamp((progress - 0.15) * 1.4)
  const moonOpacity = clamp(1 - progress * 2.3)

  // Logo glow grows as sun rises
  const glow1 = lerp(8, 70, e)
  const glow2 = lerp(0, 180, e)
  const logoBrightness = lerp(0.78, 1.05, e)

  // Text reveal
  const captionAt = clamp((progress - 0.55) / 0.3)
  const subAt = clamp((progress - 0.7) / 0.25)
  const introAt = clamp(1 - progress * 3)

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: '600vh' }}
      aria-label="Love rises with the light"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Sky gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${skyTop} 0%, ${skyMid} 60%, ${skyBot} 100%)`,
            transition: 'background 80ms linear',
          }}
        />

        {/* Stars layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: starsOpacity, transform: `translateY(${-progress * 30}px)` }}
        >
          {stars.map((s) => (
            <span
              key={s.key}
              className="absolute rounded-full bg-white"
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                boxShadow: s.bright ? '0 0 6px rgba(255,255,255,0.95)' : undefined,
                animation: `bb-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
              }}
            />
          ))}
          {shootingStars.map((sh) => (
            <span
              key={`sh-${sh.key}`}
              className="absolute"
              style={{
                top: `${sh.top}%`,
                left: `${sh.left}%`,
                width: '160px',
                height: '1px',
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0) 100%)',
                transform: 'rotate(-18deg)',
                animation: `bb-shoot 7s ease-in ${sh.delay}s infinite`,
                opacity: 0,
              }}
            />
          ))}
        </div>

        {/* Moon (fades out before sun rises) */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '14%',
            right: '14%',
            width: 'clamp(40px, 7vmin, 90px)',
            height: 'clamp(40px, 7vmin, 90px)',
            borderRadius: '50%',
            background:
              'radial-gradient(circle at 35% 35%, #fff 0%, #e9e3d8 55%, #b8aea0 100%)',
            boxShadow: '0 0 60px rgba(255, 245, 220, 0.55)',
            opacity: moonOpacity,
          }}
        />

        {/* Sun - large radial behind logo */}
        <div
          className="absolute left-1/2 pointer-events-none"
          style={{
            top: `${sunY}%`,
            transform: `translate(-50%, -50%) scale(${sunScale})`,
            width: '95vmin',
            height: '95vmin',
            borderRadius: '50%',
            background:
              'radial-gradient(circle at center, rgba(255,240,200,1) 0%, rgba(246,138,31,0.92) 22%, rgba(236,34,39,0.55) 46%, rgba(110,14,16,0) 72%)',
            filter: `blur(${lerp(28, 6, e)}px)`,
            opacity: sunOpacity,
            mixBlendMode: 'screen',
          }}
        />

        {/* Inner sun core (sharper) */}
        <div
          className="absolute left-1/2 pointer-events-none"
          style={{
            top: `${sunY}%`,
            transform: `translate(-50%, -50%)`,
            width: '38vmin',
            height: '38vmin',
            borderRadius: '50%',
            background:
              'radial-gradient(circle at center, rgba(255,255,240,1) 0%, rgba(255,210,120,0.85) 40%, rgba(246,138,31,0) 75%)',
            opacity: clamp((progress - 0.25) * 1.8),
            mixBlendMode: 'screen',
          }}
        />

        {/* Horizon haze */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: '42%',
            background:
              'linear-gradient(to top, rgba(246,138,31,0.55) 0%, rgba(236,34,39,0.18) 45%, rgba(0,0,0,0) 100%)',
            opacity: horizonOpacity,
            mixBlendMode: 'screen',
          }}
        />

        {/* God-rays */}
        <div
          className="absolute left-1/2 top-1/2 pointer-events-none"
          style={{
            width: '180vmax',
            height: '180vmax',
            transform: 'translate(-50%, -30%)',
            background:
              'conic-gradient(from 90deg at 50% 50%, rgba(255,220,160,0) 0deg, rgba(255,220,160,0.10) 8deg, rgba(255,220,160,0) 16deg, rgba(255,220,160,0) 30deg, rgba(255,220,160,0.07) 40deg, rgba(255,220,160,0) 50deg, rgba(255,220,160,0) 80deg, rgba(255,220,160,0.09) 92deg, rgba(255,220,160,0) 104deg, rgba(255,220,160,0) 140deg, rgba(255,220,160,0.08) 152deg, rgba(255,220,160,0) 164deg, rgba(255,220,160,0) 360deg)',
            opacity: clamp((progress - 0.45) * 1.6) * 0.7,
            mixBlendMode: 'screen',
            animation: 'bb-rays 30s linear infinite',
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)',
            opacity: 1 - progress * 0.4,
          }}
        />

        {/* Intro hint (top) — fades as scroll begins */}
        <div
          className="absolute left-1/2 top-[8vh] z-30 -translate-x-1/2 text-center pointer-events-none"
          style={{ opacity: introAt }}
        >
          <p className="text-[0.62rem] uppercase tracking-[0.5em] text-white/60">
            Scroll · Let the light rise
          </p>
          <div className="mx-auto mt-3 h-10 w-px bg-gradient-to-b from-white/70 to-transparent" />
        </div>

        {/* Logo - center, glowing */}
        <div className="relative z-20 flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center">
            <img
              src={assetUrl('img/logo.svg')}
              alt="Burn Bright"
              className="block w-[58vmin] max-w-[640px] select-none"
              draggable={false}
              style={{
                filter: `brightness(${logoBrightness}) drop-shadow(0 0 ${glow1}px rgba(255,180,90,${0.35 + e * 0.55})) drop-shadow(0 0 ${glow2}px rgba(236,34,39,${0.15 + e * 0.45}))`,
                transition: 'filter 120ms linear',
              }}
            />
          </div>
        </div>

        {/* Caption: emerges as the sun reveals */}
        <div className="absolute inset-x-0 bottom-[10vh] z-30 px-6 text-center pointer-events-none">
          <h2
            className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.88] tracking-[-0.04em] text-[#fff5e6]"
            style={{
              ...displayFontStyle,
              opacity: captionAt,
              transform: `translateY(${(1 - captionAt) * 36}px)`,
              textShadow:
                '0 0 40px rgba(255,200,120,0.45), 0 0 120px rgba(236,34,39,0.35)',
              transition: 'opacity 120ms linear, transform 120ms linear',
            }}
          >
            Love burns<br />
            <span className="text-[#ec2227]">brightest at dawn.</span>
          </h2>
          <p
            className="mx-auto mt-6 max-w-[44ch] text-sm leading-7 text-white/70 sm:text-base"
            style={{
              opacity: subAt,
              transform: `translateY(${(1 - subAt) * 18}px)`,
              transition: 'opacity 120ms linear, transform 120ms linear',
            }}
          >
            Through the void and the silence — kärlek överlever natten.
            What survives the dark is what we wear into the light.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes bb-twinkle {
          0%, 100% { opacity: 0.15; }
          50%      { opacity: 1; }
        }
        @keyframes bb-shoot {
          0%   { opacity: 0; transform: translate(0,0) rotate(-18deg); }
          5%   { opacity: 1; }
          12%  { opacity: 0; transform: translate(420px, 130px) rotate(-18deg); }
          100% { opacity: 0; transform: translate(420px, 130px) rotate(-18deg); }
        }
        @keyframes bb-rays {
          from { transform: translate(-50%, -30%) rotate(0deg); }
          to   { transform: translate(-50%, -30%) rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="bb-twinkle"], [style*="bb-shoot"], [style*="bb-rays"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
