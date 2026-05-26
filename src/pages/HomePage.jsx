import { useEffect, useState } from 'react'
import FoldIn from '../components/FoldIn'
import FadeIn from '../components/FadeIn'
import ProductsSection from '../components/ProductsSection'
import Marquee from '../components/Marquee'
import ParallaxImg from '../components/ParallaxImg'
import HorizontalScroll from '../components/HorizontalScroll'
import BrushStrokeH from '../components/BrushStrokeH'
import Footer from '../components/Footer'
import { assetUrl, displayFontStyle, headingFontStyle } from '../lib/utils'

const manifesto = [
  { num: '01', line: 'Let Love Burn', sub: 'Interpret it in your way' },
  { num: '02', line: 'Love is everywhere', sub: 'Embrace it' },
  { num: '03', line: 'The Love Language', sub: "Spoken by Everyone" },
]

const afterDarkLines = ['Let', 'Your Love', 'Burn in your way']

function splitChars(text) {
  return text.split('').map((ch, i) => ({ ch, i }))
}

export default function HomePage() {
  const [loaded, setLoaded] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const title = 'Burn Bright'
  const chars = splitChars(title)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x, y })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <main className="relative w-full">

      {/* ─── HERO ─── */}
      <section
        className="relative isolate flex min-h-screen flex-col items-start justify-end overflow-hidden pb-24 pt-16"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="absolute inset-0 block h-full w-full object-cover transition-transform duration-200 ease-out will-change-transform motion-reduce:transform-none"
          src={assetUrl('img/redgirl.png')}
          alt=""
          aria-hidden="true"
          style={{
            transform: `perspective(1200px) rotateX(${(-tilt.y * 6).toFixed(2)}deg) rotateY(${(tilt.x * 6).toFixed(2)}deg) scale(1.02)`,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,2,0,0.9)_0%,rgba(2,2,0,0.25)_50%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,2,0,0.35)_0%,transparent_60%)]" />

        {/* <img
          src={assetUrl('img/flower-red.svg')}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-24 z-10 w-24 opacity-55 mix-blend-screen blur-[0.3px] drop-shadow-[0_0_28px_rgba(236,34,39,0.4)] sm:right-10 sm:w-32 lg:right-16 lg:w-40"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        /> */}

        <div className="relative z-10 mx-auto w-4/5">

          <h1
            className="mb-10 text-[clamp(4.5rem,15vw,12rem)] font-normal leading-[0.82] tracking-[-0.02em]"
            style={displayFontStyle}
            aria-label={title}
          >
            {chars.map(({ ch, i }) => (
              <span
                key={i}
                className={[
                  'inline-block transform-gpu transition-[opacity,transform] duration-700 ease-[cubic-bezier(.15,.9,.2,1)] will-change-[opacity,transform] text-[#feeadd]',
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[28px]',
                  ch === ' ' ? 'w-[0.3em]' : '',
                  'motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0',
                ].filter(Boolean).join(' ')}
                style={{ transitionDelay: `${60 + i * 52}ms` }}
              >
                {ch === ' ' ? ' ' : ch}
              </span>
            ))}
          </h1>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#manifesto"
                className="inline-block rounded-full bg-[linear-gradient(90deg,#ec2227,#f68a1f)] px-8 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_14px_40px_rgba(236,34,39,0.25)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[3px] hover:shadow-[0_22px_60px_rgba(236,34,39,0.38)]"
              >
                Pre-Order Now
              </a>
             
            </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
       <Marquee
        text="Fire · Love · Let it Burn · You · Me · Us · Burn Bright · "
        speed={36}
      />

  {/* ─── PRODUCTS ─── */}
      <ProductsSection />

      {/* ─── HORIZONTAL SCROLL ARCHIVE ─── */}
      <HorizontalScroll />
     

      {/* ─── MANIFESTO ─── */}
      <section className="mx-auto w-4/5 py-28 sm:py-40">
        <FadeIn direction="up">
          <p className="mb-16 text-[0.63rem] uppercase tracking-[0.42em] text-white/25">
            Manifesto
          </p>
        </FadeIn>
        <div className="">
          {manifesto.map((item, i) => (
            <div key={item.num}>
              <FadeIn direction="soft" delay={i * 60}>
                <div className="flex py-4 sm:py-5">
                  <BrushStrokeH className="h-[14px] flex-1" />
                </div>
              </FadeIn>
              <FadeIn key={item.num} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 90}>
                <div className="group grid grid-cols-[2rem_1fr] items-end gap-2 py-2 sm:grid-cols-[7rem_1fr] sm:gap-14 sm:py-16">
                  <span className="pb-1 font-mono text-[0.6rem] uppercase tracking-[0.32em] text-[#f68a1f]/45 transition-colors duration-400 group-hover:text-[#ec2227]/75">
                    {item.num}
                  </span>
                  <div>
                    <p
                      className="text-[clamp(2rem,4.8vw,4.2rem)] font-semibold leading-[0.92] tracking-[0.03em] text-[#feeadd] transition-colors duration-400 group-hover:text-white"
                      style={displayFontStyle}
                    >
                      {item.line}
                    </p>
                    <p
                      className="text-[clamp(2rem,4.8vw,4.2rem)] font-semibold leading-[0.92] tracking-[0.03em] text-[#f68a1f] transition-colors duration-400 group-hover:text-[#ec2227]/60"
                      style={displayFontStyle}
                    >
                      {item.sub}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
          <FadeIn direction="soft">
            <div className="flex py-4 sm:py-5">
              <BrushStrokeH className="h-[14px] flex-1" />
            </div>
          </FadeIn>
        </div>
      </section>

    

      {/* ─── EDITORIAL BREAK ─── */}
      <section className="relative left-1/2 right-1/2 mx-[-50vw] w-screen">
        <FoldIn>
          <img
            className="block h-screen w-screen object-cover"
            src={assetUrl('img/redguy.png')}
            alt="Burn Bright editorial"
          />
        </FoldIn>
      </section>

      {/* ─── AFTER DARK STATEMENT ─── */}
      <section className="relative overflow-hidden bg-[#020200] py-36 sm:py-52">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(110,14,16,0.45)_0%,transparent_68%)] blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[20vw] w-[20vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(246,138,31,0.08)_0%,transparent_70%)] blur-2xl" />

        <div className="relative z-10 mx-auto w-4/5 text-center">
          {afterDarkLines.map((line, i) => (
            <FadeIn key={line} direction="up" delay={i * 110}>
              <p
                className={[
                  'block text-[clamp(3rem,8.5vw,8rem)] font-semibold leading-[0.87] tracking-[0.03em]',
                  i % 2 === 0
                    ? 'text-[#feeadd] [text-shadow:0_0_100px_rgba(246,138,31,0.15)]'
                    : 'text-[#ec2227] [text-shadow:0_0_60px_rgba(236,34,39,0.6),0_0_130px_rgba(236,34,39,0.22)]',
                ].join(' ')}
                style={displayFontStyle}
              >
                {line}
              </p>
            </FadeIn>
          ))}

            <div className="mx-auto mt-14 mx-auto flex w-180">
              <BrushStrokeH className="h-[14px] flex-1" />
            </div>
        </div>
      </section>

      {/* ─── PARALLAX IMAGE ─── */}
      {/* <ParallaxImg
        src={assetUrl('img/outside.jpg')}
        alt="Burn Bright outside"
        className="block h-[75vh] w-full object-cover"
        speed={0.28}
      /> */}

      {/* ─── VIDEO ─── */}
      {/* <section className="mx-auto my-20 w-3/5">
        <FoldIn>
          <div className="overflow-hidden rounded-[28px] shadow-[0_40px_90px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)]">
            <video className="block w-full" muted autoPlay loop playsInline>
              <source src={assetUrl('Main.mp4')} type="video/mp4" />
            </video>
          </div>
        </FoldIn>
      </section> */}

      {/* ─── FLOATING LOGO OUTRO ─── */}
      <div className="py-16">
        <FadeIn direction="soft">
          <img
            className="pointer-events-none mx-auto block w-1/6 opacity-[0.27]"
            src={assetUrl('img/logo.svg')}
            alt="Burn Bright"
            style={{ animation: 'float 7s ease-in-out infinite' }}
          />
        </FadeIn>
      </div>

      <Footer variant="home" />
    </main>
  )
}
