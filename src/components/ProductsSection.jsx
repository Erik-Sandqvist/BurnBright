import FadeIn from './FadeIn'
import TiltCard from './TiltCard'

const fallbackProducts = [
  {
    id: 'bb-fallback-1',
    name: 'Burn Mark Hoodie',
    price: '1290 SEK',
    description: 'Heavyweight hoodie with a sharp, editorial silhouette and a warm red wash.',
    imageUrl: 'img/blue-hoodie.png',
  },
  {
    id: 'bb-fallback-2',
    name: 'Ashline Tee',
    price: '590 SEK',
    description: 'Clean-cut tee with a soft feel, built for layered after-dark looks.',
    imageUrl: 'img/mock-black.jpg',
  },
  {
    id: 'bb-fallback-3',
    name: 'Ember Cap',
    price: '390 SEK',
    description: 'Minimal cap with a low-profile fit and a Burn Bright finish.',
    imageUrl: 'img/mock.jpg',
  },
]

export default function ProductsSection() {
  const items = fallbackProducts

  return (
    <section className="mx-auto w-4/5 py-14 sm:py-16" id="manifesto">
      <div className="mb-8 grid gap-2">
        <FadeIn direction="left">
          <p className="text-[0.68rem] uppercase tracking-[0.25em] text-white/40">Collection</p>
        </FadeIn>
        <FadeIn direction="left" delay={60}>
          <h2 className="text-4xl font-bold tracking-[-0.04em] text-[#f5ecec] sm:text-6xl">Products</h2>
        </FadeIn>
      </div>

      {items.length === 0 ? (
        <div className="rounded-[24px] border border-dashed border-white/18 bg-[linear-gradient(180deg,rgba(11,18,56,0.45),rgba(14,18,12,0.55))] p-6 text-sm text-white/70">
          Inga demo-produkter finns att visa just nu.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((product, idx) => (
            <FadeIn key={product.id} direction="up" delay={idx * 80}>
              <TiltCard className="h-full">
                <article className="h-full rounded-[20px] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),rgba(0,0,0,0.35))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.55)] backdrop-blur-sm">
                  {product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="mb-5 block h-52 w-full rounded-xl object-cover"
                    />
                  ) : null}
                  <h3 className="mt-1 text-2xl font-bold tracking-[-0.04em] text-white">{product.name}</h3>
                  {product.price ? (
                    <p className="mt-2 text-[0.75rem] uppercase tracking-[0.22em] text-[#ec2227]">{product.price}</p>
                  ) : null}
                  <p className="mt-4 text-sm leading-7 text-white/60">{product.description}</p>
                </article>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  )
}
