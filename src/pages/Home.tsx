import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ClipboardCheck,
  Hammer,
  LineChart,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react'
import { properties } from '../data/properties'
import { company } from '../data/company'
import PropertyCard from '../components/PropertyCard'

const stats = [
  { label: 'Units under management', value: `${company.unitsManaged.toLocaleString()}+` },
  { label: 'Property owners served', value: `${company.ownersServed}+` },
  { label: 'Average occupancy rate', value: `${company.occupancyRate}%` },
  { label: 'Years in business', value: `${new Date().getFullYear() - company.yearFounded}+` },
]

const features = [
  {
    icon: Users,
    title: 'Tenant Screening',
    description:
      'Thorough background, credit, and rental history checks to place reliable, long-term tenants in your property.',
  },
  {
    icon: Hammer,
    title: '24/7 Maintenance',
    description:
      'A trusted network of licensed vendors and an around-the-clock hotline keep small issues from becoming big ones.',
  },
  {
    icon: LineChart,
    title: 'Financial Reporting',
    description:
      'Monthly statements and year-end summaries delivered through your owner portal — always know where you stand.',
  },
  {
    icon: ShieldCheck,
    title: 'Legal Compliance',
    description:
      'We stay current on fair housing and landlord-tenant law so your property stays protected and compliant.',
  },
  {
    icon: ClipboardCheck,
    title: 'Marketing & Leasing',
    description:
      'Professional listings syndicated across major rental sites, paired with fast showings to minimize vacancy.',
  },
  {
    icon: Star,
    title: 'Owner Portal',
    description:
      'Track income, expenses, and maintenance history from one dashboard, any time, from any device.',
  },
]

const testimonials = [
  {
    quote:
      "Meridian filled our vacancy in under two weeks and handles every maintenance call without us lifting a finger. It's the first property manager we've fully trusted.",
    name: 'Diane R.',
    role: 'Property Owner, 6 units',
  },
  {
    quote:
      'Applying and moving in was seamless, and their maintenance team responded to a leak within hours. Genuinely responsive management.',
    name: 'Marcus T.',
    role: 'Resident, Riverside Commons',
  },
  {
    quote:
      "Transparent financial reporting and clear communication. We've grown our portfolio to 12 doors with Meridian managing all of it.",
    name: 'The Alvarez Family',
    role: 'Property Owners',
  },
]

export default function Home() {
  const featured = properties.filter((p) => p.featured)

  return (
    <div>
      <section className="relative overflow-hidden bg-brand-950">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, hsl(165 45% 32%) 0, transparent 45%), radial-gradient(circle at 85% 70%, hsl(200 55% 25%) 0, transparent 40%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-300">
            {company.name}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Property management that puts people first.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-brand-100/80">
            We manage {company.unitsManaged.toLocaleString()}+ homes and apartments for
            {' '}{company.ownersServed}+ owners across the region — handling leasing, maintenance,
            and finances so you don&apos;t have to.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-950 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Browse Rentals
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              I&apos;m a Property Owner
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-100">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-semibold text-brand-700">{stat.value}</p>
              <p className="mt-1 text-sm text-brand-950/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-brand-950 sm:text-3xl">Featured Rentals</h2>
            <p className="mt-2 text-brand-950/60">A few of our currently available homes.</p>
          </div>
          <Link to="/properties" className="flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800">
            View all properties
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-brand-950 sm:text-3xl">
              Full-service management, from lease-up to move-out
            </h2>
            <p className="mt-2 text-brand-950/60">
              Everything your property needs, handled by one accountable team.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-brand-100 bg-white p-6">
                <feature.icon className="h-8 w-8 text-brand-600" strokeWidth={1.5} />
                <h3 className="mt-4 text-base font-semibold text-brand-950">{feature.title}</h3>
                <p className="mt-2 text-sm text-brand-950/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-2xl font-semibold text-brand-950 sm:text-3xl">What people say</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col rounded-xl border border-brand-100 bg-white p-6">
              <div className="flex gap-0.5 text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm text-brand-950/70">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-brand-950">{t.name}</p>
              <p className="text-xs text-brand-950/50">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-700">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Ready to get more from your rental property?
            </h2>
            <p className="mt-2 max-w-lg text-brand-100/80">
              Get a free rental analysis and see how {company.shortName} can improve your returns.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
