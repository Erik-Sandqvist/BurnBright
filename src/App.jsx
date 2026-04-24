import Header from './components/Header'
import DarkVeil from './components/DarkVeil'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'

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
  
        <section className="mx-auto w-4/5 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,18,12,0.88),rgba(11,18,56,0.64))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-8">
     
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
       

        <ProductsSection />

        <section className="mx-auto grid w-4/5 gap-5 pb-5 pt-4 lg:grid-cols-[1fr_0.8fr] lg:items-end">
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
         <img
            className="mx-0-auto mx-auto w-1/2 rounded-[28px] pointer-events-none opacity-50"
            src="/img/logo.svg"
            alt=""
          />

        <footer className="mx-auto w-4/5 pb-2 pt-2" id="contact">
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
