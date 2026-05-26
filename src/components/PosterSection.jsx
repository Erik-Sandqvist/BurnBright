import FadeIn from './FadeIn'
import { assetUrl, headingFontStyle } from '../lib/utils'

const defaultAnnotations = [
  {
    index: '01',
    label: 'Info',
    body: 'A magazine cover from the early stages of the project. ',
  },
  {
    index: '02',
    label: 'The mark',
    body: 'Created as a visual anchor for the brand.',
  },
  {
    index: '03',
    label: 'Heat field',
    body: 'A texture generated from a heat simulation.',
  }
]

export default function PosterSection({
  sectionLabel = 'Poster No. 1',
  title = 'The Posters.',
  imagePath = 'img/poster1.jpg',
  imageAlt = 'Burn Bright Poster — Let the love Burn in your Way',
  secondaryImagePath,
  secondaryImageAlt = '',
  annotations = defaultAnnotations,
  details = 'Medium — Digital print · Format — 212500 x 18750 px ',
  imagesOnly = false,
}) {
  if (imagesOnly) {
    return (
      <section className="mx-auto w-4/5 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn direction="left">
            <div className="group relative overflow-hidden rounded-[20px] shadow-[0_40px_90px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]">
              <img
                src={assetUrl(imagePath)}
                alt={imageAlt}
                className="block w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </FadeIn>

          {secondaryImagePath ? (
            <FadeIn direction="right" delay={80}>
              <div className="group relative overflow-hidden rounded-[20px] shadow-[0_40px_90px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]">
                <img
                  src={assetUrl(secondaryImagePath)}
                  alt={secondaryImageAlt || imageAlt}
                  className="block w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </FadeIn>
          ) : null}
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto w-4/5 py-24">
      <FadeIn direction="up">
        <p className="mb-2 text-[0.68rem] uppercase tracking-[0.3em] text-white/35">{sectionLabel}</p>
        <h2
          className="mb-16 text-4xl font-bold tracking-[-0.04em] text-[#f5ecec] sm:text-6xl"
          style={headingFontStyle}
        >
          {title}
        </h2>
      </FadeIn>

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">

        {/* Poster image */}
        <FadeIn direction="left">
          <div className="group relative overflow-hidden rounded-[20px] shadow-[0_40px_90px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]">
            <img
              src={assetUrl(imagePath)}
              alt={imageAlt}
              className="block w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </FadeIn>

        {/* Annotation list */}
        <div className="lg:pt-2">
          <div className="divide-y divide-white/8">
            {annotations.map((note, i) => (
              <FadeIn key={note.index} direction="right" delay={i * 90}>
                <div className="py-8">
                  <div className="mb-3 flex items-baseline gap-4">
                    <span className="text-[0.58rem] uppercase tracking-[0.35em] text-[#ec2227]/60">
                      {note.index}
                    </span>
                    <span className="text-[0.72rem] uppercase tracking-[0.28em] text-white/50">
                      {note.label}
                    </span>
                  </div>
                  <p className="text-base leading-[1.75] text-white/55">
                    {note.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {secondaryImagePath ? (
            <FadeIn direction="up" delay={annotations.length * 90 + 30}>
              <div className="mt-10 overflow-hidden rounded-[18px] border border-white/8 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                <img
                  src={assetUrl(secondaryImagePath)}
                  alt={secondaryImageAlt || imageAlt}
                  className="block w-full object-cover"
                />
              </div>
            </FadeIn>
          ) : null}

          <FadeIn direction="up" delay={annotations.length * 90 + 60}>
            <div className="mt-10 border-t border-white/8 pt-8">
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/25">
                {details}
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}
