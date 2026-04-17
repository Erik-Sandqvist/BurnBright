import Header from './components/Header'
import DarkVeil from './components/DarkVeil'
import Hero from './components/Hero'

const storyCards = [
  {
    eyebrow: '01 / signal',
    title: 'Midnight tailoring with a pulse',
    text: 'Sharp silhouettes, heat-soaked shadows, and a visual rhythm built to feel like an after-hours poster.',
  },
  {
    eyebrow: '02 / texture',
    title: 'Raw gloss, smoke, and velvet contrast',
    text: 'The brand language leans into tactile mood boards, glassy highlights, and a dark red tension line.',
  },
  {
    eyebrow: '03 / attitude',
    title: 'Fashion as atmosphere, not inventory',
    text: 'Burn Bright is presented like a world you step into, with clothing acting as part of the set design.',
  },
]

const rituals = [
  'Limited color story',
  'Editorial composition',
  'After-dark energy',
  'Brand-first storytelling',
]

function App() {
  return (
    <div className="relative min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ width: '100vw', height: '100vh' }}
      >
        <DarkVeil
          hueShift={600}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.9}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>

      <div className="relative z-10 min-h-screen">
        <Header />
        <main className="relative overflow-hidden px-4 pb-10 pt-4 text-[#f4e8ea] sm:px-6 lg:px-8 w-full">

        <section className="mx-auto w-full max-w-[1180px] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,18,12,0.88),rgba(11,18,56,0.64))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-8">
          <Hero />

          <div className="mt-8 flex flex-wrap gap-3" aria-label="Brand rituals">
            {rituals.map((ritual) => (
              <span
                key={ritual}
                className="rounded-full border border-white/12 bg-[#0e120c]/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur-md"
              >
                {ritual}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1180px] py-10 sm:py-12" id="manifesto">
          <div className="mb-5 grid gap-2">
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#f5ecec] sm:text-5xl">
              Made to glow in low light
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {storyCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,56,0.72),rgba(14,18,12,0.8))] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)]"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[#ec2227]">
                  {card.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-[#f5ecec]">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-[62ch] text-base leading-7 text-white/78">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1180px] gap-5 pb-5 pt-4 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-white/65">Visual direction</p>
            <h2 id="visual" className="mt-2 text-3xl font-bold tracking-[-0.04em] text-[#f5ecec] sm:text-5xl">
              ec2227, 0e120c, 6e0e10, 0b1238
            </h2>
          </div>
          <p className="max-w-none text-base leading-7 text-white/78">
            The palette stays saturated and heavy, with deep shadows and a red accent that
            feels warm, dangerous, and carefully controlled.
          </p>
        </section>

        <footer className="mx-auto w-full max-w-[1180px] pb-2 pt-2" id="contact">
          <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/52">
            Burn Bright / a mood study for a fictional label.
          </p>
        </footer>

        </main>
      </div>
    </div>
  )
}

export default App
