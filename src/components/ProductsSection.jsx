import FadeIn from './FadeIn'
import TiltCard from './TiltCard'
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

const clothing = [
  {
    id: 'bb-fallback-1',
    name: 'Blue Hoodie',
    price: '499 SEK',
    description: 'Blue Hoodie',
    imageUrl: 'img/blue-hoodie.png',
  },
  {
    id: 'bb-fallback-2',
    name: 'Black Hoodie',
    price: '499 SEK',
    description: 'Black Hoodie',
    imageUrl: 'img/mock-black.jpg',
  },
  {   
    id: 'bb-fallback-3',
    name: 'Green Hoodie',
    price: '499 SEK',
    description: 'Green Hoodie',
    imageUrl: 'img/mock.jpg',
  },
]

const accessories = [
  {
    id: 'bb-fallback-4',
    name: 'Cap',
    price: '199 SEK',
    description: 'Unisex',
    imageUrl: 'img/cap.jpg',
  },
  {
    id: 'bb-fallback-5',
    name: 'Tote bag',
    price: '99 SEK',
    description: 'Unisex, 100% cotton canvas, 38x42 cm',
    imageUrl: 'img/tote mock.jpg',
  },
  {
    id: 'bb-fallback-6',
    name: 'White Hoodie special Edition',
    price: '699 SEK',
    description: 'Limited edition white hoodie',
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
        <CategoryBlock label="Clothing" items={clothing} baseDelay={0} />
          <BrushStrokeH className="h-[14px] flex-1" />
        <CategoryBlock label="Accessories" items={accessories} baseDelay={60} />
      </div>
    </section>
  )
}
