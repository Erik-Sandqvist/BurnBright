import FadeIn from './FadeIn'
import TiltCard from './TiltCard'
import { assetUrl, headingFontStyle } from '../lib/utils'

const clothing = [
  {
    id: 'bb-fallback-1',
    name: 'Burn Mark Hoodie',
    price: '499 SEK',
    description: 'Heavyweight hoodie with a sharp, editorial silhouette and a warm red wash.',
    imageUrl: 'img/blue-hoodie.png',
  },
  {
    id: 'bb-fallback-2',
    name: 'Ashline Tee',
    price: '499 SEK',
    description: 'Clean-cut tee with a soft feel, built for layered after-dark looks.',
    imageUrl: 'img/mock-black.jpg',
  },
  {
    id: 'bb-fallback-3',
    name: 'Ember Cap',
    price: '499 SEK',
    description: 'Minimal cap with a low-profile fit and a Burn Bright finish.',
    imageUrl: 'img/mock.jpg',
  },
]

const accessories = [
  {
    id: 'bb-fallback-4',
    name: 'Void Overshirt',
    price: '199 SEK',
    description: 'Oversized cut, washed-out ember finish. Worn open over nothing or layered tight.',
    imageUrl: 'img/cap.jpg',
  },
  {
    id: 'bb-fallback-5',
    name: 'Stone Mark Hoodie',
    price: '99 SEK',
    description: 'Same silhouette, different weight. Washed stone with a faded Burn Bright stamp.',
    imageUrl: 'img/tote mock.jpg',
  },
  {
    id: 'bb-fallback-6',
    name: 'Night Bomber',
    price: '1890 SEK',
    description: 'Satin shell, deep void lining. The piece you wear when the city goes quiet.',
    imageUrl: 'img/guty.jpg',
  },
]

function ProductCard({ product, idx }) {
  return (
    <FadeIn key={product.id} direction="up" delay={idx * 80}>
      <TiltCard className="h-full">
        <article className="h-full rounded-[20px] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),rgba(0,0,0,0.35))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.55)] backdrop-blur-sm">
          {product.imageUrl ? (
            <img
              src={assetUrl(product.imageUrl)}
              alt={product.name}
              className="mb-5 block h-52 w-full rounded-xl object-cover"
            />
          ) : null}
          <h3 className="mt-1 text-2xl font-bold tracking-[-0.04em] text-white" style={headingFontStyle}>{product.name}</h3>
          {product.price ? (
            <p className="mt-2 text-[0.75rem] uppercase tracking-[0.22em] text-[#ec2227]">{product.price}</p>
          ) : null}
          <p className="mt-4 text-sm leading-7 text-white/60">{product.description}</p>
        </article>
      </TiltCard>
    </FadeIn>
  )
}

function CategoryBlock({ label, items, baseDelay = 0 }) {
  return (
    <div>
      <FadeIn direction="left" delay={baseDelay}>
        <div className="mb-8 flex items-baseline gap-4">
          <h2 className="text-4xl font-bold tracking-[-0.04em] text-[#f5ecec] sm:text-6xl" style={headingFontStyle}>
            {label}
          </h2>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/30">
            {String(items.length).padStart(2, '0')} pieces
          </span>
        </div>
      </FadeIn>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((product, idx) => (
          <ProductCard key={product.id} product={product} idx={idx} />
        ))}
      </div>
    </div>
  )
}

export default function ProductsSection() {
  return (
    <section className="mx-auto w-4/5 py-14 sm:py-16" id="manifesto">
      <FadeIn direction="left">
        <p className="mb-16 text-[0.68rem] uppercase tracking-[0.25em] text-white/40">Collection</p>
      </FadeIn>

      <div className="flex flex-col gap-20">
        <CategoryBlock label="Kläder" items={clothing} baseDelay={0} />
        <div className="border-t border-white/[0.08]" />
        <CategoryBlock label="Accessoarer" items={accessories} baseDelay={60} />
      </div>
    </section>
  )
}
