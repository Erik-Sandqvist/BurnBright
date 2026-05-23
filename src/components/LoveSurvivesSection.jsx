import { useEffect, useRef, useState } from 'react'
import { assetUrl, displayFontStyle } from '../lib/utils'

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

function useSectionProgress(ref) {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    const tick = () => {
      if (!ref.current) return
      const el = ref.current
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      const v = total > 0 ? Math.max(0, Math.min(1, -rect.top / total)) : 0
      setP(v)
      raf = 0
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
  }, [ref])
  return p
}

const PARTICLES = Array.from({ length: 36 }, (_, i) => ({
  left: 12 + seed(i) * 76,
  startY: 65 + seed(i * 2 + 1) * 35,
  dx: (seed(i * 3) - 0.5) * 30,
  dur: 5 + seed(i * 5) * 6,
  delay: -seed(i * 7) * (5 + seed(i * 5) * 6),
  size: 2 + seed(i * 11) * 5,
}))

function ParticleField({ embersOpacity, dawnOpacity }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {PARTICLES.map((pt, i) => (
        <span key={i} style={{
          position: 'absolute',
          left: `${pt.left}%`,
          top: `${pt.startY}%`,
          width: `${pt.size}px`,
          height: `${pt.size}px`,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #ffd278 0%, #f68a1f 50%, transparent 80%)',
          boxShadow: '0 0 8px rgba(246,138,31,0.7)',
          opacity: embersOpacity,
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
        <span key={`d${i}`} style={{
          position: 'absolute',
          left: `${pt.left}%`,
          top: `${pt.startY}%`,
          width: `${pt.size}px`,
          height: `${pt.size}px`,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #fff0c8 0%, #f8e2a8 50%, transparent 80%)',
          boxShadow: '0 0 10px rgba(248,226,168,0.8)',
          opacity: dawnOpacity,
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
  )
}

function Scene({ p }) {
  const ignite      = ramp(p, 0.00, 0.12)
  const burnStrong  = ramp(p, 0.06, 0.22)
  const dawnT       = ramp(p, 0.55, 0.92, easeInOutCubic)
  const dawnP       = ramp(p, 0.50, 0.85)
  const sunRise     = ramp(p, 0.55, 0.95, easeInOutCubic)
  const flameCool   = ramp(p, 0.55, 0.78)
  const embersStart = ramp(p, 0.10, 0.22)

  const logoFilter = `
    brightness(${dawnT > 0.7 ? (dawnT - 0.7) * 0.3 : 0})
    drop-shadow(0 0 ${8 + burnStrong * 8 - dawnT * 4}px rgba(${236 + (247 - 236) * dawnT}, ${34 + (192 - 34) * dawnT}, ${39 + (75 - 39) * dawnT}, ${0.95 - dawnT * 0.4}))
    drop-shadow(0 0 ${26 + burnStrong * 14}px rgba(${246 + (255 - 246) * dawnT}, ${138 + (220 - 138) * dawnT}, ${31 + (140 - 31) * dawnT}, ${0.75 - dawnT * 0.3}))
    drop-shadow(0 0 ${60 + burnStrong * 22}px rgba(${236 + (248 - 236) * dawnT}, ${34 + (226 - 34) * dawnT}, ${39 + (168 - 39) * dawnT}, ${0.55 - dawnT * 0.2}))
  `

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Night sky */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 110%, #1a0500 0%, #050100 38%, #000 80%)',
        opacity: 1 - dawnP * 0.85,
      }} />
      {/* Dawn sky */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, #2a0e08 0%, #6e0e10 14%, #ec2227 32%, #ff9c68 55%, #f7c04b 78%, #feeadd 100%)',
        opacity: dawnP,
      }} />

      {/* Sun */}
      <div style={{
        position: 'absolute',
        left: '50%',
        bottom: `${-25 + sunRise * 38}%`,
        width: '38vmin', height: '38vmin',
        borderRadius: '50%',
        transform: `translate(-50%, 0) scale(${0.85 + dawnT * 0.25})`,
        background: 'radial-gradient(circle at 50% 50%, #fff7d6 0%, #ffe8a8 22%, #f8e2a8 42%, #f7c04b 62%, rgba(255,156,104,0) 86%)',
        filter: 'blur(2px)',
        mixBlendMode: 'screen',
        opacity: dawnT * 0.95,
        pointerEvents: 'none',
      }} />

      {/* Heat base */}
      <div style={{
        position: 'absolute', left: '-10%', right: '-10%', bottom: '-30%',
        height: '90%',
        background: `
          radial-gradient(ellipse at 50% 80%, rgba(246,138,31,0.55), rgba(236,34,39,0.30) 28%, transparent 62%),
          radial-gradient(ellipse at 50% 100%, rgba(236,34,39,0.40), transparent 70%)
        `,
        filter: `blur(40px) hue-rotate(${dawnP * 18}deg) saturate(${1 - dawnP * 0.2})`,
        mixBlendMode: 'screen',
        animation: 'ls-heat-pulse 3.4s ease-in-out infinite',
        opacity: ignite * 0.95 * (1 - dawnP * 0.4),
        pointerEvents: 'none',
      }} />

      {/* Flames */}
      <div style={{ opacity: ignite * (1 - flameCool) }}>
        <div style={{
          position: 'absolute', left: '48%', bottom: '-12%',
          width: '56vmin', height: '80vmin',
          transformOrigin: 'center bottom',
          mixBlendMode: 'screen',
          filter: 'blur(28px)',
          background: 'radial-gradient(ellipse at 50% 80%, rgba(255,210,120,0.95) 0%, rgba(246,138,31,0.85) 22%, rgba(236,34,39,0.60) 50%, rgba(110,14,16,0.20) 72%, transparent 92%)',
          animation: 'ls-flame-a 3.7s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', left: '36%', bottom: '-6%',
          width: '32vmin', height: '56vmin',
          transformOrigin: 'center bottom',
          mixBlendMode: 'screen',
          filter: 'blur(22px)',
          background: 'radial-gradient(ellipse at 50% 80%, rgba(255,210,120,0.95) 0%, rgba(246,138,31,0.85) 22%, rgba(236,34,39,0.60) 50%, rgba(110,14,16,0.20) 72%, transparent 92%)',
          animation: 'ls-flame-b 4.3s ease-in-out infinite',
          animationDelay: '-1.1s',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', left: '62%', bottom: '-4%',
          width: '30vmin', height: '52vmin',
          transformOrigin: 'center bottom',
          mixBlendMode: 'screen',
          filter: 'blur(22px)',
          background: 'radial-gradient(ellipse at 50% 80%, rgba(255,210,120,0.95) 0%, rgba(246,138,31,0.85) 22%, rgba(236,34,39,0.60) 50%, rgba(110,14,16,0.20) 72%, transparent 92%)',
          animation: 'ls-flame-c 3.1s ease-in-out infinite',
          animationDelay: '-0.5s',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', left: '50%', bottom: '8%',
          width: '22vmin', height: '36vmin',
          transformOrigin: 'center bottom',
          mixBlendMode: 'screen',
          filter: 'blur(14px)',
          background: 'radial-gradient(ellipse at 50% 80%, rgba(255,210,120,0.95) 0%, rgba(246,138,31,0.85) 22%, rgba(236,34,39,0.60) 50%, rgba(110,14,16,0.20) 72%, transparent 92%)',
          animation: 'ls-flame-tip 2.2s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Logo */}
      <div style={{
        position: 'absolute',
        left: '50%', top: '50%',
        width: '50vmin', height: '50vmin',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: 0.25 + burnStrong * 0.75,
        transform: `translate(-50%, ${-50 + dawnT * 4}%) scale(${0.92 + burnStrong * 0.08 - dawnT * 0.06})`,
        pointerEvents: 'none',
      }}>
        <img
          src={assetUrl('img/logo.svg')}
          alt="Burn Bright"
          style={{
            width: '78%', height: '78%',
            objectFit: 'contain',
            filter: logoFilter,
          }}
        />
      </div>

      <ParticleField
        embersOpacity={embersStart * (1 - dawnP * 0.85)}
        dawnOpacity={dawnT * 0.95}
      />

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.55) 78%, rgba(0,0,0,0.9) 100%)',
        opacity: 1 - dawnP * 0.75,
        pointerEvents: 'none',
      }} />
    </div>
  )
}

function Beat({ p, scrollPosition, children }) {
  const dist = Math.abs(p - scrollPosition)
  const presence = Math.max(0, 1 - dist / 0.10)
  const eased = presence * presence * (3 - 2 * presence)
  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '0 8vw',
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '22ch',
        opacity: eased,
        transform: `translateY(${(1 - eased) * 24}px)`,
        transition: 'transform 50ms linear',
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        {children}
      </div>
    </div>
  )
}

const eyebrowStyle = {
  fontSize: '0.72rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.42em',
  marginBottom: '14px',
}
const quoteStyle = {
  ...displayFontStyle,
  fontSize: 'clamp(2.4rem, 7vw, 5rem)',
  lineHeight: 0.95,
}
const bodyStyle = {
  marginTop: '18px',
  fontSize: '1rem',
  lineHeight: 1.7,
  maxWidth: '36ch',
  marginLeft: 'auto',
  marginRight: 'auto',
}

export default function LoveSurvivesSection() {
  const containerRef = useRef(null)
  const p = useSectionProgress(containerRef)

  const isDark = p < 0.5
  const bone = '#f5ecec'
  const burgundy = '#3a1404'
  const textColor = isDark ? bone : burgundy
  const bodyColor = isDark ? 'rgba(255,255,255,0.65)' : 'rgba(58,20,4,0.75)'
  const eyeColor  = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(58,20,4,0.60)'
  const accentDark = `rgba(236,34,39,${0.85 + ramp(p, 0.0, 0.2) * 0.15})`

  return (
    <>
      {/* Keyframe animations injected once */}
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
          <Scene p={p} />

          {/* Scroll beats — all stacked at same position, each fades in/out by scroll progress */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
            <Beat p={p} scrollPosition={0.07}>
              <div style={{ ...eyebrowStyle, color: eyeColor }}>After dark</div>
              <div style={{ ...quoteStyle, color: textColor }}>
                Some loves<br />smolder.
              </div>
              <div style={{ ...bodyStyle, color: bodyColor }}>
                Scroll down. Let the night start.
              </div>
            </Beat>

            <Beat p={p} scrollPosition={0.30}>
              <div style={{ ...eyebrowStyle, color: accentDark }}>The Burn</div>
              <div style={{ ...quoteStyle, color: bone }}>
                Ours<br />
                <span style={{ color: '#ec2227', textShadow: '0 0 60px rgba(236,34,39,0.5)' }}>burns.</span>
              </div>
            </Beat>

            <Beat p={p} scrollPosition={0.50}>
              <div style={{ ...eyebrowStyle, color: 'rgba(255,255,255,0.55)' }}>Held in the dark</div>
              <div style={{ ...quoteStyle, fontSize: 'clamp(2rem,5vw,3.4rem)', color: bone }}>
                "Let Love burn<br />in your way."
              </div>
            </Beat>

            <Beat p={p} scrollPosition={0.72}>
              <div style={{ ...eyebrowStyle, color: 'rgba(58,20,4,0.65)', letterSpacing: '0.5em' }}>First light</div>
              <div style={{ ...quoteStyle, color: burgundy }}>
                The sun<br />finds us.
              </div>
            </Beat>

            <Beat p={p} scrollPosition={0.93}>
              <div style={{ ...eyebrowStyle, color: 'rgba(58,20,4,0.55)', letterSpacing: '0.5em' }}>Burn Bright · MMXXVI</div>
              <div style={{ ...quoteStyle, fontSize: 'clamp(2.4rem,8vw,5.4rem)', color: burgundy }}>
                Love survives<br />the night.
              </div>
              <div style={{ ...bodyStyle, color: 'rgba(58,20,4,0.70)' }}>
                A mood study for a fictional label.
              </div>
            </Beat>
          </div>

          {/* Scroll cue */}
          <div style={{
            position: 'absolute', bottom: '4vh', left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            pointerEvents: 'none',
            fontSize: '10px', fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.42em',
            color: 'rgba(255,255,255,0.45)',
            animation: 'ls-cue-bounce 2.2s ease-in-out infinite',
            opacity: Math.max(0, 1 - p * 12),
          }}>
            Scroll ↓
          </div>
          <style>{`
            @keyframes ls-cue-bounce {
              0%, 100% { transform: translate(-50%,0); opacity:0.6; }
              50%      { transform: translate(-50%,6px); opacity:1.0; }
            }
          `}</style>
        </div>
      </section>
    </>
  )
}
