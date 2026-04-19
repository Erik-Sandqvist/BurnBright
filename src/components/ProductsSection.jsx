import { useEffect, useMemo, useState } from 'react'


function getPropertyValue(properties, aliases) {
  if (!properties) return undefined

  if (Array.isArray(properties)) {
    const found = properties.find((property) => aliases.includes(property.alias))
    return found?.value
  }

  for (const alias of aliases) {
    if (properties[alias] !== undefined) return properties[alias]
  }

  return undefined
}

function normalizeProduct(node) {
  const name = getPropertyValue(node.properties, ['productName', 'name', 'title']) ?? node.name
  const priceRaw = getPropertyValue(node.properties, ['price', 'productPrice'])
  const description = getPropertyValue(node.properties, ['description', 'productDescription', 'summary'])
  const imageValue = getPropertyValue(node.properties, ['productImage', 'image'])
  const firstImage = Array.isArray(imageValue) ? imageValue[0] : imageValue

  const imageUrl =
    firstImage?.url ??
    firstImage?.mediaUrl ??
    firstImage?.src ??
    (typeof firstImage === 'string' ? firstImage : undefined)

  return {
    id: node.id ?? node.key ?? name,
    name: name ?? 'Untitled product',
    price: priceRaw !== undefined && priceRaw !== null && priceRaw !== '' ? `${priceRaw} SEK` : null,
    description:
      typeof description === 'string' && description.trim().length > 0
        ? description
        : 'Editorial piece from the Burn Bright line.',
    imageUrl,
  }
}

export default function ProductsSection() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const endpoint = useMemo(() => {
    return (
      import.meta.env.VITE_UMBRACO_PRODUCTS_ENDPOINT ??
      '/umbraco/delivery/api/v2/content?filter=contentType:product'
    )
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    async function loadProducts() {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(endpoint, {
          signal: controller.signal,
          headers: {
            Accept: 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }

        const data = await response.json()
        const rawProducts = data?.children?.items ?? data?.children ?? data?.items ?? []
        const normalized = rawProducts.map(normalizeProduct).filter((item) => item.name)
        setProducts(normalized)
      } catch (loadError) {
        if (loadError.name === 'AbortError') return
        setError('Kunde inte hämta produkter från Umbraco ännu.')
      } finally {
        setLoading(false)
      }
    }

    loadProducts()

    return () => controller.abort()
  }, [endpoint])

  const items = products.length > 0 ? products : !loading && !error ? fallbackProducts : []

  return (
    <section className="mx-auto w-4/5 py-10 sm:py-12" id="manifesto">
      <div className="mb-5 grid gap-2">
        <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#f5ecec] sm:text-5xl">Products</h2>
        <p className="text-sm text-white/70">
          {loading
            ? 'Laddar produkter...'
            : error || 'Kuraterat urval hämtat från Umbraco.'}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((product) => (
          <article
            key={product.id}
            className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,56,0.72),rgba(14,18,12,0.8))] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)]"
          >
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="mb-4  w-5/6 mx-auto rounded-xl object-cover"
              />
            ) : null}
            <h3 className="mt-1 text-2xl font-bold tracking-[-0.04em] text-[#f5ecec]">{product.name}</h3>
            {product.price ? <p className="mt-2 text-[0.8rem] uppercase tracking-[0.2em] text-[#ec2227]">{product.price}</p> : null}
            <p className="mt-4 max-w-[62ch] text-base leading-7 text-white/78">{product.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
