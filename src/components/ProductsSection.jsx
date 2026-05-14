import FadeIn from './FadeIn'

const fallbackProducts = [
  {
    id: 'bb-fallback-1',
    name: 'Burn Mark Hoodie',
    price: '1290 SEK',
    description: 'Heavyweight hoodie with a sharp, editorial silhouette and a warm red wash.',
    imageUrl: null,
  },
  {
    id: 'bb-fallback-2',
    name: 'Ashline Tee',
    price: '590 SEK',
    description: 'Clean-cut tee with a soft feel, built for layered after-dark looks.',
    imageUrl: null,
  },
  {
    id: 'bb-fallback-3',
    name: 'Ember Cap',
    price: '390 SEK',
    description: 'Minimal cap with a low-profile fit and a Burn Bright finish.',
    imageUrl: null,
  },
]

export default function ProductsSection() {
  const items = fallbackProducts

  return (
    <section className="mx-auto w-4/5 py-10 sm:py-12" id="manifesto">
      <div className="mb-5 grid gap-2">
        <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#f5ecec] sm:text-5xl">Products</h2>
        <p className="text-sm text-white/70">Demo-produkter tills vidare.</p>
      </div>

      {items.length === 0 ? (
        <div className="rounded-[24px] border border-dashed border-white/18 bg-[linear-gradient(180deg,rgba(11,18,56,0.45),rgba(14,18,12,0.55))] p-6 text-sm text-white/70">
          Inga demo-produkter finns att visa just nu.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((product) => (
            <FadeIn key={product.id} className="fold-up" direction="up" delay={product.imageUrl ? 0 : 0}>
              <article className="card-bright rounded-[20px] p-6">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="mb-4 w-full h-48 object-cover rounded-lg"
                  />
                ) : null}
                <h3 className="mt-1 text-2xl font-bold tracking-[-0.04em] text-white">{product.name}</h3>
                {product.price ? (
                  <p className="mt-2 text-[0.8rem] uppercase tracking-[0.2em] brand-accent">{product.price}</p>
                ) : null}
                <p className="mt-4 max-w-[62ch] text-base leading-7 text-white/78">{product.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  )
}
