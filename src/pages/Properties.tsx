import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { properties } from '../data/properties'
import PropertyCard from '../components/PropertyCard'

const types = ['All Types', 'Apartment', 'Single Family', 'Townhome', 'Condo'] as const
const bedOptions = ['Any Beds', 'Studio', '1+', '2+', '3+', '4+'] as const
const sortOptions = ['Price: Low to High', 'Price: High to Low', 'Newest'] as const

export default function Properties() {
  const [type, setType] = useState<(typeof types)[number]>('All Types')
  const [beds, setBeds] = useState<(typeof bedOptions)[number]>('Any Beds')
  const [maxPrice, setMaxPrice] = useState(3000)
  const [sort, setSort] = useState<(typeof sortOptions)[number]>('Price: Low to High')

  const filtered = useMemo(() => {
    let list = properties.filter((p) => p.price <= maxPrice)

    if (type !== 'All Types') {
      list = list.filter((p) => p.type === type)
    }

    if (beds !== 'Any Beds') {
      if (beds === 'Studio') {
        list = list.filter((p) => p.beds === 0)
      } else {
        const min = Number(beds.replace('+', ''))
        list = list.filter((p) => p.beds >= min)
      }
    }

    if (sort === 'Price: Low to High') {
      list = [...list].sort((a, b) => a.price - b.price)
    } else if (sort === 'Price: High to Low') {
      list = [...list].sort((a, b) => b.price - a.price)
    }

    return list
  }, [type, beds, maxPrice, sort])

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold text-brand-950 sm:text-4xl">Available Rentals</h1>
        <p className="mt-3 text-brand-950/60">
          Browse our current listings. New units are added as they become available — check back often.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-end gap-4 rounded-xl border border-brand-100 bg-sand-50 p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-brand-950/70">
          <SlidersHorizontal className="h-4 w-4" />
          Filter
        </div>

        <label className="flex flex-col gap-1 text-xs font-medium text-brand-950/60">
          Property Type
          <select
            value={type}
            onChange={(e) => setType(e.target.value as (typeof types)[number])}
            className="rounded-md border border-brand-200 bg-white px-3 py-2 text-sm text-brand-950"
          >
            {types.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-xs font-medium text-brand-950/60">
          Bedrooms
          <select
            value={beds}
            onChange={(e) => setBeds(e.target.value as (typeof bedOptions)[number])}
            className="rounded-md border border-brand-200 bg-white px-3 py-2 text-sm text-brand-950"
          >
            {bedOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-xs font-medium text-brand-950/60">
          Max Price: ${maxPrice.toLocaleString()}
          <input
            type="range"
            min={1000}
            max={3000}
            step={50}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-40 accent-brand-600"
          />
        </label>

        <label className="flex flex-col gap-1 text-xs font-medium text-brand-950/60">
          Sort By
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as (typeof sortOptions)[number])}
            className="rounded-md border border-brand-200 bg-white px-3 py-2 text-sm text-brand-950"
          >
            {sortOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-6 text-sm text-brand-950/60">
        {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-xl border border-dashed border-brand-200 p-12 text-center text-brand-950/60">
          No properties match your filters right now. Try widening your search.
        </div>
      )}
    </div>
  )
}
