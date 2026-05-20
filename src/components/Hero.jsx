
import { useEffect, useState } from 'react'
import FadeIn from './FadeIn'
import { assetUrl } from '../lib/utils'

function splitChars(text) {
  return text.split('').map((ch, i) => ({ ch, i }))
}

export default function Hero() {
  const title = 'Burn Bright'
  const chars = splitChars(title)
  const [loaded, setLoaded] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setLoaded(true)
  }, [])

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    setTilt({ x, y })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section
      className="relative isolate flex min-h-screen items-center justify-center bg-transparent"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="absolute inset-0 block h-screen w-screen object-cover transition-transform duration-200 ease-out will-change-transform motion-reduce:transform-none"
        src="img/redgirl.png"
        alt="Red girl portrait"
        style={{
          transform: `perspective(1200px) rotateX(${(-tilt.y * 6).toFixed(2)}deg) rotateY(${(
            tilt.x * 6
          ).toFixed(2)}deg) scale(1.02)`,
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] text-center">
        <FadeIn direction="down" delay={0}>
          <img
            src="img/logo.svg"
            alt="Burn Bright logo"
            className="mx-auto mb-6 block h-auto w-[clamp(300px,20vw,260px)] opacity-[0.98]"
          />
        </FadeIn>

        <FadeIn direction="up" delay={20}>
          <h1
            className="inline-block text-[clamp(3.5rem,12vw,9rem)] font-normal leading-[0.88] tracking-[0.04em] text-[#ec2227] antialiased [text-shadow:0_6px_18px_rgba(14,8,12,0.6),0_2px_6px_rgba(236,34,39,0.12)] [transform:translateZ(0)] animate-[pulse_6.5s_linear_infinite] motion-reduce:animate-none"
            style={{ fontFamily: '"above-the-sky-condensed","Adore You","Geist Variable",sans-serif', fontWeight: 400, fontStyle: 'normal' }}
            aria-label={title}
          >
            {chars.map(({ ch, i }) => (
              <span
                key={`c-${i}`}
                className={[
                  'inline-block transform-gpu transition-[opacity,transform] duration-700 ease-[cubic-bezier(.2,.9,.2,1)] will-change-[opacity,transform]',
                  loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[18px] scale-[0.995]',
                  ch === ' ' ? 'inline-block w-[0.5em]' : '',
                  'motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:scale-100',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ transitionDelay: `${i * 65}ms` }}
              >
                {ch}
              </span>
            ))}
          </h1>
        </FadeIn>

        <FadeIn direction="soft" delay={50}>
          <p className="mt-3 text-[1.05rem] tracking-[0.06em] text-white/75">
            Let Love burn in your way.
          </p>
        </FadeIn>

        <FadeIn direction="soft" delay={80}>
          <a
            className="mt-4 inline-block rounded-full bg-[linear-gradient(90deg,#ec2227,#f68a1f)] px-5 py-3 font-semibold text-white shadow-[0_14px_40px_rgba(236,34,39,0.18)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[3px] hover:shadow-[0_22px_56px_rgba(236,34,39,0.26)]"
            href="#manifesto"
          >
            Enter the mood
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
