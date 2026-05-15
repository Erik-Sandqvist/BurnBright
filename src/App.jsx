import Header from './components/Header'
import DarkVeil from './components/DarkVeil'
import Hero from './components/Hero'
import FoldIn from './components/FoldIn'
import ProductsSection from './components/ProductsSection'

const rituals = [
  'Limited color story',
  'Editorial composition',
  'After-dark energy',
  'Brand-first storytelling',
]

function App() {
  return (
    <div className="relative min-h-screen bg-transparent font-sans text-[#f4e8ea] antialiased selection:bg-[rgba(236,34,39,0.35)] selection:text-[#fff1f2]">
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
        <main className="relative w-full">
        <Hero />
         <ProductsSection />
        <section className="relative left-1/2 right-1/2 mx-[-50vw] w-screen">
          <FoldIn>
            <img
              className="block h-screen w-screen object-cover"
              src="/img/redgirl.png"
              alt="Red girl portrait"
            />
          </FoldIn>
        </section>
        <section className="mx-auto w-3/5 rounded-[28px]">
          <section className="mx-auto rounded-[28px] overflow-hidden">
            <video
              className="w-full h-auto rounded-[28px]"
              muted
              autoPlay
              loop
            >
              <source src="/Main.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
         

          {/* <div className="mt-8 flex flex-wrap gap-3" aria-label="Brand rituals">
            {rituals.map((ritual) => (
              <span
                key={ritual}
                className="rounded-full border border-white/12 bg-[#0e120c]/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur-md"
              >
                {ritual}
              </span>
            ))}
          </div> */}
        </section>
       

       

        {/* <section className="mx-auto grid w-4/5 gap-5 pb-5 pt-4 lg:grid-cols-[1fr_0.8fr] lg:items-end">
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
        </section> */}
         <img
            className="mx-0-auto mx-auto block w-1/2 rounded-[28px] opacity-50 pointer-events-none"
            src="/img/logo.svg"
            alt=""
          />
           <img
            className=" right-0 top-0 mx-auto block h-full w-full object-cover rounded-[28px] pointer-events-none"
            src="/img/outside.jpg"
            alt=""
          />
          <section className="mx-auto w-2/5 rounded-[28px] overflow-hidden">
            <video
              className="w-full h-auto rounded-[28px]"
              muted
              autoPlay
              loop
            >
              <source src="/Main.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
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
