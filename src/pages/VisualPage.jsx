import FadeIn from '../components/FadeIn'
import FoldIn from '../components/FoldIn'
import Marquee from '../components/Marquee'
import PosterSection from '../components/PosterSection'
import DomeGallery from '../components/DomeGallery'
import LoveScrolly from '../components/LoveScrolly'
import HorizontalScroll from '../components/HorizontalScroll'
import { assetUrl, headingFontStyle } from '../lib/utils'

function BrushStrokeH({ className = '' }) {
  return (
    <svg viewBox="0 0 560 14" preserveAspectRatio="none" fill="none" aria-hidden="true"
      className={`overflow-visible ${className}`}>
      <defs>
        <filter id="bbh" x="-2%" y="-200%" width="104%" height="500%">
          <feTurbulence type="fractalNoise" baseFrequency="0.78 0.38" numOctaves="4" seed="3" result="n"/>
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.8" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
      <path d="M2,7 C70,4 160,10 280,6 C400,3 480,9 558,6"
        stroke="#ec2227" strokeWidth="2.5" strokeLinecap="round" opacity="0.38" filter="url(#bbh)"/>
      <path d="M40,9 C130,6 250,11 360,8 C450,5 520,10 545,8"
        stroke="#ec2227" strokeWidth="1" strokeLinecap="round" opacity="0.18" filter="url(#bbh)"/>
      <path d="M2,5 C100,3 230,7 340,5 C450,3 515,7 558,5"
        stroke="#f68a1f" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" filter="url(#bbh)"/>
    </svg>
  )
}

function BrushStrokeV({ className = '' }) {
  return (
    <svg viewBox="0 0 14 560" preserveAspectRatio="none" fill="none" aria-hidden="true"
      className={`overflow-visible ${className}`}>
      <defs>
        <filter id="bbv" x="-200%" y="-2%" width="500%" height="104%">
          <feTurbulence type="fractalNoise" baseFrequency="0.38 0.78" numOctaves="4" seed="7" result="n"/>
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.8" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
      <path d="M7,2 C4,70 10,160 6,280 C3,400 9,480 6,558"
        stroke="#ec2227" strokeWidth="2" strokeLinecap="round" opacity="0.28" filter="url(#bbv)"/>
      <path d="M9,40 C6,130 11,250 8,370 C5,460 10,520 8,545"
        stroke="#ec2227" strokeWidth="0.8" strokeLinecap="round" opacity="0.13" filter="url(#bbv)"/>
      <path d="M5,20 C3,110 8,220 5,330 C3,430 7,500 5,555"
        stroke="#f68a1f" strokeWidth="0.7" strokeLinecap="round" opacity="0.1" filter="url(#bbv)"/>
    </svg>
  )
}

const palette = [
  { hex: '#ec2227', name: 'The Red',    label: 'EC2227', desc: 'Primary accent. The flare.' },
  { hex: '#6e0e10', name: 'Deep Ember', label: '6E0E10', desc: 'Shadow of the burn.' },
  { hex: '#f68a1f', name: 'Heat',       label: 'F68A1F', desc: 'The glow at the edge.' },
  { hex: '#020200', name: 'Void',       label: '020200', desc: 'Background. Absolute dark.' },
  { hex: '#feeadd', name: 'First Light',label: 'FEEADD', desc: 'The hour after dawn.' },
]

const typefaces = [
  {
    name: 'Above The Sky',
    weight: 'Condensed Cursivey',
    role: 'Display · Logotype',
    sample: 'Burn Bright',
    family: '"above-the-sky-condensed","Adore You","Geist Variable",sans-serif',
    fontWeight: 400,
    size: 'clamp(2.6rem, 7vw, 5.5rem)',
    tracking: '-0.02em',
    lineHeight: 1,
  },
  {
    name: 'Bahnschrift',
    weight: 'SemiBold',
    role: 'Headings · UI',
    sample: 'AFTER DARK',
    family: '"Bahnschrift","Inter","Geist Variable","Segoe UI",sans-serif',
    fontWeight: 600,
    size: 'clamp(2rem, 5.5vw, 4rem)',
    tracking: '0.04em',
    lineHeight: 1.05,
  },
  {
    name: 'Area Extended',
    weight: 'Medium',
    role: 'Body · Captions',
    sample: 'A mood study, not a product line.',
    family: '"Area Extended","Inter","Geist Variable",sans-serif',
    fontWeight: 500,
    size: 'clamp(1.25rem, 2.4vw, 2rem)',
    tracking: '0.06em',
    lineHeight: 1.4,
  },
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
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={assetUrl('img/sky.jpeg')}
        >
          <source src={assetUrl('happy.mp4')} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,6,6,0.65)_0%,rgba(6,6,6,0.15)_50%,transparent_100%)]" />
        {/* <img
          src={assetUrl('img/flower-red.svg')}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-20 z-10 w-20 opacity-55 mix-blend-screen blur-[0.2px] drop-shadow-[0_0_26px_rgba(236,34,39,0.32)] sm:right-8 sm:top-24 sm:w-28 lg:right-14 lg:top-28 lg:w-36"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        /> */}
        <div className="relative z-10 mx-auto w-4/5 pb-4">
          <FadeIn direction="up" delay={0}>
            <p className="mb-4 text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
              The Visual Story
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={80}>
            <h1
              className="text-[clamp(4rem,13vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em] text-[#f5ecec]"
              style={headingFontStyle}
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
          <FadeIn direction="left" delay={260}>
            <div className="mt-8 w-[min(100%,420px)]">
              <BrushStrokeH className="h-[14px] w-full" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Marquee */}
      <Marquee text="ORIGIN · THE RED · THE EDIT · THE MOOD · FOUR COLORS · INTENTIONAL · SATURATED · LIMITED" speed={50} />


      {/* Chapter grid */}
      <section className="mx-auto w-4/5 py-24">

        {/* Section header with horizontal brush stroke */}
        <FadeIn direction="left">
          <div className="mb-10 flex items-center gap-5">
            <p className="shrink-0 text-[0.62rem] uppercase tracking-[0.3em] text-[#ec2227]/55">The Story</p>
            <BrushStrokeH className="h-[14px] flex-1" />
          </div>
        </FadeIn>

        <div className="relative lg:pl-7">
          {/* Vertical brush stroke spanning full chapter grid */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-3 lg:block">
            <BrushStrokeV className="h-full w-full" />
          </div>

          <div className="grid gap-0">
            {chapters.map((ch, i) => (
              <div key={ch.num}>
                {/* Horizontal brush divider above each chapter */}
                <FadeIn direction="soft" delay={30}>
                  <div className="py-5">
                    <BrushStrokeH className="h-[14px] w-full" />
                  </div>
                </FadeIn>

                <div
                  className={`grid items-start gap-8 pb-16 lg:grid-cols-[1fr_1.4fr] ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
                >
                  <FadeIn direction={i % 2 === 0 ? 'left' : 'right'} className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                    <div>
                      <span className="text-[0.62rem] uppercase tracking-[0.3em] text-[#ec2227]/60">{ch.num}</span>
                      <h2 className="mt-2 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] tracking-[-0.04em] text-[#f5ecec]" style={headingFontStyle}>
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
              </div>
            ))}

            {/* Closing brush stroke */}
            <FadeIn direction="soft">
              <BrushStrokeH className="h-[14px] w-full" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="relative left-1/2 right-1/2 mx-[-50vw] w-screen">
        <FoldIn>
          <img
            className="block h-screen w-screen object-cover"
            src={assetUrl('img/tote mock.jpg')}
            alt="Burn Bright editorial"
          />
        </FoldIn>
      </section>

      {/* Palette section */}
      <section className="mx-auto w-4/5 py-24">
        <FadeIn direction="left">
          <div className="mb-4 flex items-center gap-5">
            <p className="shrink-0 text-[0.68rem] uppercase tracking-[0.3em] text-white/50">Color story</p>
            <BrushStrokeH className="h-[14px] flex-1" />
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={60}>
          <h2 className="mb-4 text-4xl font-bold tracking-[-0.04em] text-[#f5ecec] sm:text-6xl" style={headingFontStyle}>
            The colors of Love and Fire.
          </h2>
        </FadeIn>
        <FadeIn direction="left" delay={120}>
          <div className="mb-12">
            <BrushStrokeH className="h-[14px] w-[min(100%,380px)]" />
          </div>
        </FadeIn>
        <div className="relative lg:pl-7">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-3 lg:block">
            <BrushStrokeV className="h-full w-full" />
          </div>
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
                      style={headingFontStyle}
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
        </div>

        {/* Typography */}
        <div className="mt-32">
          <FadeIn direction="left">
            <div className="mb-4 flex items-center gap-5">
              <p className="shrink-0 text-[0.68rem] uppercase tracking-[0.3em] text-white/50">Typography</p>
              <BrushStrokeH className="h-[14px] flex-1" />
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={60}>
            <h2 className="mb-4 text-4xl font-bold tracking-[-0.04em] text-[#f5ecec] sm:text-6xl" style={headingFontStyle}>
              The language of Love and Fire
            </h2>
          </FadeIn>
          <FadeIn direction="left" delay={120}>
            <div className="mb-12">
              <BrushStrokeH className="h-[14px] w-[min(100%,340px)]" />
            </div>
          </FadeIn>
          <div>
            {typefaces.map((tf, i) => (
              <div key={tf.name}>
                <FadeIn direction="soft" delay={i * 30}>
                  <div className="py-4">
                    <BrushStrokeH className="h-[14px] w-full" />
                  </div>
                </FadeIn>
                <FadeIn direction="up" delay={i * 90}>
                  <div className="group grid gap-6 py-8 transition-all duration-500 sm:grid-cols-[1fr_2fr] sm:gap-10 sm:py-12">
                    {/* Meta */}
                    <div className="flex flex-col">
                      <span className="text-[0.62rem] uppercase tracking-[0.3em] text-[#ec2227]/60">
                        0{i + 1} · {tf.role}
                      </span>
                      <p
                        className="mt-3 text-2xl font-bold tracking-[-0.02em] text-[#f5ecec] sm:text-3xl"
                        style={headingFontStyle}
                      >
                        {tf.name}
                      </p>
                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                        {tf.weight}
                      </p>
                      <div className="mt-5 hidden sm:block w-[clamp(48px,8vw,96px)]">
                        <BrushStrokeH className="h-[10px] w-full opacity-70 transition-all duration-500 group-hover:opacity-100" />
                      </div>
                    </div>
                    {/* Sample */}
                    <div className="flex items-center">
                      <p
                        className="text-[#f5ecec] transition-colors duration-500 group-hover:text-white"
                        style={{
                          fontFamily: tf.family,
                          fontWeight: tf.fontWeight,
                          fontSize: tf.size,
                          letterSpacing: tf.tracking,
                          lineHeight: tf.lineHeight,
                          textShadow: '0 8px 32px rgba(0,0,0,0.55)',
                        }}
                      >
                        {tf.sample}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
            <FadeIn direction="soft">
              <div className="py-4">
                <BrushStrokeH className="h-[14px] w-full" />
              </div>
            </FadeIn>
          </div>

          {/* Alphabet ladder */}
          <FadeIn direction="up" delay={120}>
            <div className="mt-16 grid gap-4 sm:grid-cols-3">
              {typefaces.map((tf) => (
                <div
                  key={`${tf.name}-abc`}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <p className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-white/40">
                    {tf.name}
                  </p>
                  <p
                    className="break-all text-[#f5ecec]/85"
                    style={{
                      fontFamily: tf.family,
                      fontWeight: tf.fontWeight,
                      fontSize: 'clamp(1.4rem, 2.6vw, 2rem)',
                      letterSpacing: tf.tracking,
                      lineHeight: 1.1,
                    }}
                  >
                    Aa Bb Cc 0123
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

     <HorizontalScroll />

      {/* Editorial photo grid */}
      <section className="mx-auto w-4/5 py-24">
        <FadeIn direction="left">
          <div className="mb-4 flex items-center gap-5">
            <p className="shrink-0 text-[0.68rem] uppercase tracking-[0.3em] text-white/50">Editorial</p>
            <BrushStrokeH className="h-[14px] flex-1" />
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={60}>
          <h2 className="mb-4 text-4xl font-bold tracking-[-0.04em] text-[#f5ecec] sm:text-6xl" style={headingFontStyle}>
            The Object.<br />The Mark. The City.
          </h2>
        </FadeIn>
        <FadeIn direction="left" delay={120}>
          <div className="mb-10">
            <BrushStrokeH className="h-[14px] w-[min(100%,300px)]" />
          </div>
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
      <FadeIn direction="left">
        <div className="mx-auto w-4/5 pb-2 pt-8">
          <div className="flex items-center gap-5">
            <p className="shrink-0 text-[0.62rem] uppercase tracking-[0.3em] text-[#ec2227]/50">Poster No. 1</p>
            <BrushStrokeH className="h-[14px] flex-1" />
          </div>
        </div>
      </FadeIn>
      <PosterSection />
      <FadeIn direction="soft">
        <div className="mx-auto w-4/5 pt-4">
          <BrushStrokeH className="h-[14px] w-full" />
        </div>
      </FadeIn>

      {/* Dome Gallery - Interactive image gallery */}
      {/* <section className="relative w-full overflow-hidden bg-[#1a1420] py-32">
        <div className="mx-auto mb-12 w-4/5">
          
            <p className="mb-2 text-[0.68rem] uppercase tracking-[0.3em] text-white/50">Interactive Gallery</p>
            <h2 className="mb-4 text-4xl font-bold tracking-[-0.04em] text-[#f5ecec] sm:text-6xl" style={headingFontStyle}>
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
              <source src={assetUrl('Mainex.mp4')} type="video/mp4" />
            </video>
          </div>
        </FoldIn>
      </section>

      {/* Credits */}
      <section className="mx-auto w-4/5 py-20">
        <FadeIn direction="soft">
          <div className="mb-10">
            <BrushStrokeH className="h-[14px] w-full" />
          </div>
        </FadeIn>
        <div className="grid gap-8 pt-4 sm:grid-cols-3">
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

      <footer className="mx-auto w-4/5 pb-6 pt-2" id="contact">
        <FadeIn direction="soft">
          <div className="mb-4">
            <BrushStrokeH className="h-[14px] w-[min(100%,240px)]" />
          </div>
        </FadeIn>
        <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/30">
          Burn Bright / a mood study for a fictional label.
        </p>
      </footer>

    </main>
  )
}
