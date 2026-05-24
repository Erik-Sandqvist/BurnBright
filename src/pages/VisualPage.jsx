import FadeIn from '../components/FadeIn'
import FoldIn from '../components/FoldIn'
import Marquee from '../components/Marquee'
import ParallaxImg from '../components/ParallaxImg'
import PosterSection from '../components/PosterSection'
import DomeGallery from '../components/DomeGallery'
import LoveScrolly from '../components/LoveScrolly'
import { assetUrl, displayFontStyle } from '../lib/utils'

const palette = [
  { hex: '#ec2227', name: 'The Red',    label: 'EC2227', desc: 'Primary accent. The flare.' },
  { hex: '#6e0e10', name: 'Deep Ember', label: '6E0E10', desc: 'Shadow of the burn.' },
  { hex: '#f68a1f', name: 'Heat',       label: 'F68A1F', desc: 'The glow at the edge.' },
  { hex: '#020200', name: 'Void',       label: '020200', desc: 'Background. Absolute dark.' },
  { hex: '#feeadd', name: 'First Light',label: 'FEEADD', desc: 'The hour after dawn.' },
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

const galleryImages = [
  { src: assetUrl('img/mock-black.jpg'), alt: 'Black mock' },
  { src: assetUrl('img/mock.jpg'), alt: 'Mock product' },
  { src: assetUrl('img/nice mock.jpg'), alt: 'Mockup presentation' },
  { src: assetUrl('img/outside.jpg'), alt: 'Outdoor shot' },
  { src: assetUrl('img/poster1.jpg'), alt: 'Poster design' },
  { src: assetUrl('img/sky.jpeg'), alt: 'Sky backdrop' },
  { src: assetUrl('img/train.jpg'), alt: 'Train advertisement' },
  { src: assetUrl('img/wall.jpg'), alt: 'Wall installation' },
]

export default function VisualPage() {
  return (
    <main className="relative w-full" id="visual">

      {/* Hero */}
      <section className="relative flex min-h-screen items-start overflow-hidden pt-16">
        <ParallaxImg
          src={assetUrl('img/sky.jpeg')}
          alt="Burn Bright visual"
          className="absolute inset-0 h-full w-full object-cover"
          speed={0.18}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,6,6,0.65)_0%,rgba(6,6,6,0.15)_50%,transparent_100%)]" />
        <img
          src={assetUrl('img/flower-red.svg')}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-20 z-10 w-20 opacity-55 mix-blend-screen blur-[0.2px] drop-shadow-[0_0_26px_rgba(236,34,39,0.32)] sm:right-8 sm:top-24 sm:w-28 lg:right-14 lg:top-28 lg:w-36"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
        <div className="relative z-10 mx-auto w-4/5 pb-4">
          <FadeIn direction="up" delay={0}>
            <p className="mb-4 text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
              The Visual Story
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={80}>
            <h1
              className="text-[clamp(4rem,13vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em] text-[#f5ecec]"
              style={displayFontStyle}
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

      {/* Scrollytelling: night → dawn behind the logo */}
      <LoveScrolly />

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
                  <h2 className="mt-2 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] tracking-[-0.04em] text-[#f5ecec]" style={displayFontStyle}>
                    {ch.title}
                  </h2>
                </div>
              </FadeIn>
              <FadeIn direction={i % 2 === 0 ? 'right' : 'left'} delay={100} className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <p className="text-lg leading-8 text-white/70 lg:pt-6">
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
          <p className="mb-2 text-[0.68rem] uppercase tracking-[0.3em] text-white/50">Color story</p>
          <h2 className="mb-16 text-4xl font-bold tracking-[-0.04em] text-[#f5ecec] sm:text-6xl" style={displayFontStyle}>
            Five colors.<br />No exceptions.
          </h2>
        </FadeIn>
        <div className="divide-y divide-white/15 border-t border-white/15">
          {palette.map((color, i) => {
            return (
              <FadeIn key={color.hex} direction="up" delay={i * 70}>
                <div className="group flex items-center gap-8 py-6 transition-all duration-500 hover:gap-10 sm:gap-12 sm:py-8">
                  {/* Swatch */}
                  <div
                    className="h-16 w-24 shrink-0 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.55)] transition-all duration-500 group-hover:scale-105 sm:h-20 sm:w-32"
                    style={{ backgroundColor: color.hex }}
                  />
                  {/* Hex */}
                  <p
                    className="w-[9ch] shrink-0 font-mono text-2xl font-light tracking-tight text-white/60 transition-colors duration-300 group-hover:text-white/90 sm:text-4xl"
                  >
                    #{color.label}
                  </p>
                  {/* Divider line */}
                  <div className="hidden h-px flex-1 bg-white/10 sm:block" />
                  {/* Name + desc */}
                  <div className="flex flex-col items-end text-right">
                    <p
                      className="text-xl font-bold tracking-[-0.03em] text-[#f5ecec] sm:text-3xl"
                      style={displayFontStyle}
                    >
                      {color.name}
                    </p>
                    <p className="mt-1 hidden text-sm text-white/50 sm:block">
                      {color.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 mx-[-50vw] w-screen">
        <FoldIn>
          <img
            className="block h-screen w-screen object-cover"
            src={assetUrl('img/guty.jpg')}
            alt="Burn Bright editorial"
          />
        </FoldIn>
      </section>

      {/* Editorial photo grid */}
      <section className="mx-auto w-4/5 py-24">
        <FadeIn direction="up">
          <p className="mb-2 text-[0.68rem] uppercase tracking-[0.3em] text-white/50">Editorial</p>
          <h2 className="mb-12 text-4xl font-bold tracking-[-0.04em] text-[#f5ecec] sm:text-6xl" style={displayFontStyle}>
            The Object.<br />The Mark. The City.
          </h2>
        </FadeIn>
        <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr] lg:grid-rows-2">
          {/* Large product hero — spans both rows */}
          <FadeIn direction="left" className="lg:row-span-2">
            <div className="group relative overflow-hidden rounded-[20px]">
              <img
                src={assetUrl('img/nice mock.jpg')}
                alt="Burn Bright hoodie on stone"
                className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                style={{ minHeight: '420px' }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-6 text-[0.62rem] uppercase tracking-[0.3em] text-white/70">
                The Object
              </p>
            </div>
          </FadeIn>
          {/* Wall heart */}
          <FadeIn direction="right" delay={80}>
            <div className="group relative overflow-hidden rounded-[20px]">
              <img
                src={assetUrl('img/wall.jpg')}
                alt="Red heart on wall"
                className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                style={{ minHeight: '200px', maxHeight: '320px' }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-6 text-[0.62rem] uppercase tracking-[0.3em] text-white/70">
                The Mark
              </p>
            </div>
          </FadeIn>
          {/* Subway ad */}
          <FadeIn direction="right" delay={160}>
            <div className="group relative overflow-hidden rounded-[20px]">
              <img
                src={assetUrl('img/train.jpg')}
                alt="Burn Bright subway ad"
                className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                style={{ minHeight: '200px', maxHeight: '320px' }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-6 text-[0.62rem] uppercase tracking-[0.3em] text-white/70">
                The City
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Poster breakdown */}
      <PosterSection />

      {/* Dome Gallery - Interactive image gallery */}
      {/* <section className="relative w-full overflow-hidden bg-[#1a1420] py-32">
        <div className="mx-auto mb-12 w-4/5">
          
            <p className="mb-2 text-[0.68rem] uppercase tracking-[0.3em] text-white/50">Interactive Gallery</p>
            <h2 className="mb-4 text-4xl font-bold tracking-[-0.04em] text-[#f5ecec] sm:text-6xl" style={displayFontStyle}>
              The Visual<br />Archive
            </h2>
            <p className="mt-4 max-w-[50ch] text-base leading-relaxed text-white/70">
              Drag to explore. An immersive view of Burn Bright through every lens.
            </p>
          
        </div>
        <div className="relative h-[600px] w-full">
          <DomeGallery
            images={galleryImages}
            fit={0.75}
            minRadius={500}
            maxVerticalRotationDeg={0}
            segments={22}
            dragDampening={3}
            dragSensitivity={15}
            grayscale={false}
          />
        </div>
      </section> */}

  <LoveScrolly />

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
        <div className="grid gap-8 border-t border-white/15 pt-12 sm:grid-cols-3">
          {[
            { label: 'Direction', value: 'Burn Bright Studio' },
            { label: 'Year', value: 'MMXXVI' },
            { label: 'Edition', value: 'Limited — No Restock' },
          ].map((item, i) => (
            <FadeIn key={item.label} direction="up" delay={i * 70}>
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/45">{item.label}</p>
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
