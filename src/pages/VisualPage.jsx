import FadeIn from '../components/FadeIn'
import FoldIn from '../components/FoldIn'
import Marquee from '../components/Marquee'
import ParallaxImg from '../components/ParallaxImg'
import TiltCard from '../components/TiltCard'
import { assetUrl } from '../lib/utils'

const palette = [
  { hex: '#ec2227', name: 'The Red', label: 'EC2227', desc: 'Primary accent. The flare.' },
  { hex: '#6e0e10', name: 'Deep Ember', label: '6E0E10', desc: 'Shadow of the burn.' },
  { hex: '#0e120c', name: 'Void', label: '0E120C', desc: 'Background. Absolute dark.' },
  { hex: '#0b1238', name: 'Midnight', label: '0B1238', desc: 'The hour before dawn.' },
]

const chapters = [
  {
    num: '01',
    title: 'Origin',
    body: 'Burn Bright was born from the tension between restraint and intensity. Not a brand that shouts — one that smolders. Every silhouette is edited down to its essential form, then saturated with a color story that feels warm, dangerous, and carefully controlled.',
  },
  {
    num: '02',
    title: 'The Red',
    body: 'EC2227. It is not fashion red. It is the color of something alive — a flare at the edge of peripheral vision. The entire collection is built around the weight of this single accent. Everything else exists to make the red feel inevitable.',
  },
  {
    num: '03',
    title: 'The Edit',
    body: 'After dark, everything is a statement. The hoodie worn too heavy, the cap pulled too low — these are not mistakes. They are the language. Burn Bright dresses for the hour when everything else has gone quiet and what you wear is the only thing left speaking.',
  },
  {
    num: '04',
    title: 'The Mood',
    body: 'Limited. Saturated. Intentional. This is not a brand for all seasons. It is for the specific feeling of walking through a city at 1am with nowhere to be and everywhere to go. The collection is a mood study, not a product line.',
  },
]

export default function VisualPage() {
  return (
    <main className="relative w-full" id="visual">

      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden pb-16">
        <ParallaxImg
          src={assetUrl('img/outside.jpg')}
          alt="Burn Bright visual"
          className="absolute inset-0 h-full w-full object-cover"
          speed={0.18}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,6,6,0.92)_0%,rgba(6,6,6,0.3)_50%,transparent_100%)]" />
        <div className="relative z-10 mx-auto w-4/5 pb-4">
          <FadeIn direction="up" delay={0}>
            <p className="mb-4 text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
              The Visual Story
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={80}>
            <h1
              className="text-[clamp(4rem,13vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em] text-[#f5ecec]"
            >
              Behind<br />
              <span className="text-[#ec2227] [text-shadow:0_0_80px_rgba(236,34,39,0.5)]">the Burn.</span>
            </h1>
          </FadeIn>
          <FadeIn direction="soft" delay={180}>
            <p className="mt-6 max-w-[50ch] text-base leading-relaxed text-white/55">
              A brand built on four colors, one red, and the specific feeling of after-dark energy.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Marquee */}
      <Marquee text="ORIGIN · THE RED · THE EDIT · THE MOOD · FOUR COLORS · INTENTIONAL · SATURATED · LIMITED" speed={50} />

      {/* Chapter grid */}
      <section className="mx-auto w-4/5 py-24">
        <div className="grid gap-16 lg:gap-24">
          {chapters.map((ch, i) => (
            <div
              key={ch.num}
              className={`grid items-start gap-8 lg:grid-cols-[1fr_1.4fr] ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
            >
              <FadeIn direction={i % 2 === 0 ? 'left' : 'right'} className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <div>
                  <span className="text-[0.62rem] uppercase tracking-[0.3em] text-[#ec2227]/60">{ch.num}</span>
                  <h2 className="mt-2 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] tracking-[-0.04em] text-[#f5ecec]">
                    {ch.title}
                  </h2>
                </div>
              </FadeIn>
              <FadeIn direction={i % 2 === 0 ? 'right' : 'left'} delay={100} className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <p className="text-lg leading-8 text-white/55 lg:pt-6">
                  {ch.body}
                </p>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* Full-width image break */}
      <section className="relative left-1/2 right-1/2 mx-[-50vw] w-screen">
        <FoldIn>
          <img
            className="block h-screen w-screen object-cover"
            src={assetUrl('img/redgirl.png')}
            alt="Burn Bright editorial"
          />
        </FoldIn>
      </section>

      {/* Palette section */}
      <section className="mx-auto w-4/5 py-24">
        <FadeIn direction="up">
          <p className="mb-2 text-[0.68rem] uppercase tracking-[0.3em] text-white/35">Color story</p>
          <h2 className="mb-12 text-4xl font-bold tracking-[-0.04em] text-[#f5ecec] sm:text-6xl">
            Four colors.<br />No exceptions.
          </h2>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {palette.map((color, i) => (
            <FadeIn key={color.hex} direction="up" delay={i * 80}>
              <TiltCard>
                <div className="overflow-hidden rounded-[20px] border border-white/8 bg-[rgba(255,255,255,0.02)]">
                  <div
                    className="h-40 w-full"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="p-5">
                    <p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/35">{color.label}</p>
                    <p className="mt-1 text-lg font-bold tracking-[-0.02em] text-white">{color.name}</p>
                    <p className="mt-2 text-sm text-white/45">{color.desc}</p>
                  </div>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Large manifesto quote */}
      <section className="overflow-hidden py-28 text-center">
        <FadeIn direction="up">
          <p className="mb-6 text-[0.68rem] uppercase tracking-[0.3em] text-white/30">Manifesto</p>
        </FadeIn>
        <FadeIn direction="up" delay={80}>
          <blockquote className="mx-auto max-w-[16ch] text-[clamp(2.8rem,9vw,7rem)] font-bold leading-[0.88] tracking-[-0.04em] text-[#f5ecec]">
            "Burn bright or not at all."
          </blockquote>
        </FadeIn>
        <FadeIn direction="soft" delay={200}>
          <p className="mx-auto mt-10 max-w-[40ch] text-base leading-relaxed text-white/45">
            We do not make clothes for every occasion. We make a single statement, repeated
            across a limited run, until there is nothing left to say.
          </p>
        </FadeIn>
      </section>

      {/* Video */}
      <section className="mx-auto my-8 w-3/5">
        <FoldIn>
          <div className="overflow-hidden rounded-[28px] shadow-[0_40px_90px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.07)]">
            <video className="block w-full" muted autoPlay loop playsInline>
              <source src={assetUrl('Main.mp4')} type="video/mp4" />
            </video>
          </div>
        </FoldIn>
      </section>

      {/* Credits */}
      <section className="mx-auto w-4/5 py-20">
        <div className="grid gap-8 border-t border-white/8 pt-12 sm:grid-cols-3">
          {[
            { label: 'Direction', value: 'Burn Bright Studio' },
            { label: 'Year', value: 'MMXXVI' },
            { label: 'Edition', value: 'Limited — No Restock' },
          ].map((item, i) => (
            <FadeIn key={item.label} direction="up" delay={i * 70}>
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/30">{item.label}</p>
                <p className="mt-2 text-lg font-bold tracking-[-0.02em] text-white/80">{item.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <footer className="mx-auto w-4/5 pb-4 pt-2" id="contact">
        <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/30">
          Burn Bright / a mood study for a fictional label.
        </p>
      </footer>

    </main>
  )
}
