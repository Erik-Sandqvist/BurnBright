import Hero from '../components/Hero'
import FoldIn from '../components/FoldIn'
import FadeIn from '../components/FadeIn'
import ProductsSection from '../components/ProductsSection'
import Marquee from '../components/Marquee'
import ParallaxImg from '../components/ParallaxImg'

export default function HomePage() {
  return (
    <main className="relative w-full">

      <Hero />

      <Marquee text="BURN BRIGHT · AFTER DARK ENERGY · LIMITED COLOR STORY · EDIT THE NIGHT · A MOOD STUDY" />

      <ProductsSection />

      {/* Statement section */}
      <section className="overflow-hidden py-28 text-center">
        <FadeIn direction="up">
          <h2 className="text-[clamp(3rem,11vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.05em] text-[#f5ecec]">
            After dark.<br />
            <span className="text-[#ec2227] [text-shadow:0_0_60px_rgba(236,34,39,0.4)]">On fire.</span>
          </h2>
        </FadeIn>
        <FadeIn direction="soft" delay={130}>
          <p className="mx-auto mt-8 max-w-[42ch] text-base leading-relaxed text-white/50">
            Every piece is a limited statement — saturated with intention, built for the night.
          </p>
        </FadeIn>
      </section>

      {/* Full-width image with FoldIn reveal */}
      <section className="relative left-1/2 right-1/2 mx-[-50vw] w-screen">
        <FoldIn>
          <img
            className="block h-screen w-screen object-cover"
            src="img/redgirl.png"
            alt="Red girl portrait"
          />
        </FoldIn>
      </section>

      {/* Video — premium framed */}
      <section className="mx-auto my-16 w-3/5">
        <FoldIn>
          <div className="overflow-hidden rounded-[28px] shadow-[0_40px_90px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.07)]">
            <video className="block w-full" muted autoPlay loop playsInline>
              <source src="Main.mp4" type="video/mp4" />
            </video>
          </div>
        </FoldIn>
      </section>

      {/* Floating logo */}
      <div className="py-10">
        <FadeIn direction="soft">
          <img
            className="pointer-events-none mx-auto block w-1/2 opacity-30"
            src="img/logo.svg"
            alt=""
            style={{ animation: 'float 7s ease-in-out infinite' }}
          />
        </FadeIn>
      </div>

      {/* Outside image with parallax */}
      <ParallaxImg
        src="img/outside.jpg"
        alt=""
        className="block h-[75vh] w-full object-cover"
        speed={0.28}
      />

      {/* Small video */}
      <section className="mx-auto my-12 w-2/5">
        <FadeIn direction="up">
          <div className="overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
            <video className="block w-full" muted autoPlay loop playsInline>
              <source src="Main.mp4" type="video/mp4" />
            </video>
          </div>
        </FadeIn>
      </section>

      <footer className="mx-auto w-4/5 pb-4 pt-2" id="contact">
        <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/40">
          Burn Bright / a mood study for a fictional label.
        </p>
      </footer>

    </main>
  )
}
