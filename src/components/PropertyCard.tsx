import { Link } from 'react-router-dom'
import { BedDouble, Bath, Ruler, MapPin } from 'lucide-react'
import type { Property } from '../data/properties'
import PropertyImage from './PropertyImage'

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      to={`/properties/${property.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-brand-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative">
        <PropertyImage property={property} className="h-48 w-full" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-brand-700 shadow">
          {property.available === 'Now' ? 'Available Now' : `Available ${property.available}`}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-brand-950 group-hover:text-brand-700">
            {property.name}
          </h3>
          <span className="whitespace-nowrap text-base font-semibold text-brand-700">
            ${property.price.toLocaleString()}<span className="text-xs font-normal text-brand-950/50">/mo</span>
          </span>
        </div>
        <p className="flex items-center gap-1.5 text-sm text-brand-950/60">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          {property.neighborhood}
        </p>
        <div className="mt-auto flex items-center gap-4 border-t border-brand-100 pt-3 text-sm text-brand-950/70">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4" />
            {property.beds === 0 ? 'Studio' : `${property.beds} bd`}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4" />
            {property.baths} ba
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4" />
            {property.sqft.toLocaleString()} sqft
          </span>
        </div>
      </div>
    </Link>
  )
}
