import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Bath, BedDouble, Check, MapPin, Ruler } from 'lucide-react'
import { getPropertyById } from '../data/properties'
import PropertyImage from '../components/PropertyImage'
import { company } from '../data/company'

export default function PropertyDetail() {
  const { id } = useParams()
  const property = id ? getPropertyById(id) : undefined

  if (!property) {
    return <Navigate to="/properties" replace />
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Link to="/properties" className="flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-800">
        <ArrowLeft className="h-4 w-4" />
        Back to all properties
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-2">
            <PropertyImage property={property} className="col-span-2 h-72 rounded-xl sm:h-96" />
            <PropertyImage property={property} className="h-32 rounded-xl sm:h-40" />
            <PropertyImage property={property} className="h-32 rounded-xl sm:h-40" />
          </div>

          <div className="mt-8 flex flex-wrap items-start justify-between gap-4 border-b border-brand-100 pb-6">
            <div>
              <h1 className="text-2xl font-semibold text-brand-950 sm:text-3xl">{property.name}</h1>
              <p className="mt-2 flex items-center gap-1.5 text-brand-950/60">
                <MapPin className="h-4 w-4" />
                {property.address}, {property.neighborhood}
              </p>
            </div>
            <p className="text-2xl font-semibold text-brand-700">
              ${property.price.toLocaleString()}<span className="text-sm font-normal text-brand-950/50">/mo</span>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-8 text-sm text-brand-950/70">
            <span className="flex items-center gap-2">
              <BedDouble className="h-5 w-5 text-brand-600" />
              {property.beds === 0 ? 'Studio' : `${property.beds} Bedrooms`}
            </span>
            <span className="flex items-center gap-2">
              <Bath className="h-5 w-5 text-brand-600" />
              {property.baths} Bathrooms
            </span>
            <span className="flex items-center gap-2">
              <Ruler className="h-5 w-5 text-brand-600" />
              {property.sqft.toLocaleString()} sqft
            </span>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-brand-950">About this property</h2>
            <p className="mt-3 text-brand-950/70">{property.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-brand-950">Amenities</h2>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {property.amenities.map((amenity) => (
                <li key={amenity} className="flex items-center gap-2 text-sm text-brand-950/70">
                  <Check className="h-4 w-4 shrink-0 text-brand-600" />
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="h-fit rounded-xl border border-brand-100 bg-sand-50 p-6">
          <p className="text-sm font-semibold text-brand-950">
            {property.available === 'Now' ? 'Available Now' : `Available ${property.available}`}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-brand-950">Schedule a Tour</h3>
          <p className="mt-1 text-sm text-brand-950/60">
            Fill out the form and our leasing team will follow up within one business day.
          </p>

          <form
            className="mt-5 flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <input
              required
              type="text"
              placeholder="Full name"
              className="rounded-md border border-brand-200 bg-white px-3 py-2 text-sm text-brand-950 placeholder:text-brand-950/40"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              className="rounded-md border border-brand-200 bg-white px-3 py-2 text-sm text-brand-950 placeholder:text-brand-950/40"
            />
            <input
              required
              type="tel"
              placeholder="Phone number"
              className="rounded-md border border-brand-200 bg-white px-3 py-2 text-sm text-brand-950 placeholder:text-brand-950/40"
            />
            <textarea
              rows={3}
              placeholder="What days/times work for a tour?"
              className="rounded-md border border-brand-200 bg-white px-3 py-2 text-sm text-brand-950 placeholder:text-brand-950/40"
            />
            <button
              type="submit"
              className="mt-1 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Request a Tour
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-brand-950/50">
            Or call the leasing office at{' '}
            <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} className="font-medium text-brand-700">
              {company.phone}
            </a>
          </p>
        </aside>
      </div>
    </div>
  )
}
