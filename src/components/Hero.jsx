
import FadeIn from './FadeIn'

function splitChars(text) {
  return text.split('').map((ch, i) => ({ ch, i }))
}

export default function Hero() {
  const title = 'Burn Bright'
  const chars = splitChars(title)

  return (
    <section className="hero">
      <div className="hero__inner">
        <FadeIn direction="down" delay={0}>
          <img src="/img/logo.svg" alt="Burn Bright logo" className="hero-logo mx-auto mb-6" />
        </FadeIn>

        <FadeIn direction="up" delay={20}>
          <h1 className="hero-title" aria-label={title}>
            {chars.map(({ ch, i }) => (
              <span
                key={`c-${i}`}
                className={`char ${ch === ' ' ? 'space' : ''}`}
                style={{ ['--delay']: `${i * 65}ms` }}
              >
                {ch}
              </span>
            ))}
          </h1>
        </FadeIn>

        <FadeIn direction="soft" delay={50}>
          <p className="hero-subtitle">Let Love burn in your way.</p>
        </FadeIn>

        <FadeIn direction="soft" delay={80}>
          <a className="hero-cta" href="#manifesto">Enter the mood</a>
        </FadeIn>
      </div>
    </section>
  )
}
