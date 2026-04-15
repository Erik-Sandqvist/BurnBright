import Header from './components/Header'

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
    <>
      <Header />
      <main className="relative isolate overflow-hidden px-4 pb-10 pt-4 text-[#f4e8ea] sm:px-6 lg:px-8 w-full">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(236,34,39,0.18),_transparent_32%),radial-gradient(circle_at_85%_20%,_rgba(11,18,56,0.72),_transparent_28%),linear-gradient(180deg,_#0e120c_0%,_#0b1238_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,black_48%,transparent_100%)]" />

        <section className="mx-auto w-full max-w-[1180px] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,18,12,0.88),rgba(11,18,56,0.64))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <h1 className="mt-3 text-5xl font-bold leading-[0.9] tracking-[-0.04em] text-[#f5ecec] sm:text-7xl lg:text-[8.75rem]">
                Burn Bright
              </h1>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#ec2227,#6e0e10)] px-5 py-3 text-sm font-medium text-[#fff1f2] shadow-[0_16px_30px_rgba(236,34,39,0.24)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(236,34,39,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f8d9dd]"
                  href="#manifesto"
                >
                  Enter the mood
                </a>
                <span className="text-xs uppercase tracking-[0.2em] text-white/68">
                  Designed to feel cinematic, nocturnal, and bold.
                </span>
              </div>
            </div>

            <div className="relative grid min-h-[360px] place-items-center lg:min-h-[460px]" aria-hidden="true">
              <div className="absolute right-10 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(236,34,39,0.95),rgba(110,14,16,0))] blur-[10px]" />
              <div className="absolute bottom-16 left-4 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(11,18,56,0.95),rgba(11,18,56,0))] blur-[10px]" />
              <div className="absolute bottom-3 left-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(110,14,16,0.85),rgba(110,14,16,0))] blur-[10px]" />
              <div className="relative z-10 grid min-h-[300px] w-full max-w-[360px] content-end gap-3 rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(14,18,12,0.18),rgba(14,18,12,0.72)),linear-gradient(135deg,rgba(236,34,39,0.14),rgba(11,18,56,0.78))] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_48px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <span className="text-[0.8rem] uppercase tracking-[0.24em] text-white/70">Adore You</span>
                <strong className="text-[clamp(2rem,4vw,3rem)] tracking-[-0.05em] text-[#fff8f8]">
                  Burn Bright
                </strong>
                <p className="m-0 text-white/72">Red heat against black glass.</p>
              </div>
            </div>
          </div>

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
    </>
  )
}

export default App
