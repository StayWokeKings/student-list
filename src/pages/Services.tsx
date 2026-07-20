import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeDollarSign,
  Camera,
  ClipboardCheck,
  FileText,
  Hammer,
  Headset,
  Scale,
  Search,
  Wallet,
} from 'lucide-react'

const ownerServices = [
  {
    icon: Camera,
    title: 'Marketing & Listing',
    description:
      'Professional photography, compelling listing copy, and syndication to Zillow, Apartments.com, and 20+ other rental sites.',
  },
  {
    icon: Search,
    title: 'Tenant Screening',
    description:
      'Credit, criminal, eviction, and income verification on every applicant, in full compliance with fair housing law.',
  },
  {
    icon: FileText,
    title: 'Lease Administration',
    description:
      'State-specific lease agreements, e-signatures, move-in/move-out inspections, and renewal management.',
  },
  {
    icon: Wallet,
    title: 'Rent Collection',
    description:
      'Online rent collection with automatic late-fee enforcement, so income shows up on time, every time.',
  },
  {
    icon: Hammer,
    title: 'Maintenance Coordination',
    description:
      'Vetted, licensed contractors handle repairs quickly, with every invoice itemized in your owner portal.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Financial Reporting',
    description:
      'Monthly statements, expense tracking, and 1099s at year-end. Export anything to CSV or PDF in one click.',
  },
]

const tenantServices = [
  {
    icon: Headset,
    title: '24/7 Maintenance Line',
    description: 'Emergencies handled any time, day or night — call or submit a request through the portal.',
  },
  {
    icon: ClipboardCheck,
    title: 'Online Resident Portal',
    description: 'Pay rent, view your lease, and track maintenance requests from your phone or computer.',
  },
  {
    icon: Scale,
    title: 'Fair, Transparent Leasing',
    description: 'Clear lease terms and responsive communication from application through move-out.',
  },
]

const process = [
  { step: '01', title: 'Free Property Consultation', description: 'We evaluate your property and local market to set the right rent price.' },
  { step: '02', title: 'Onboarding & Marketing', description: 'Photos, listing, and syndication go live — most units lease within 2–3 weeks.' },
  { step: '03', title: 'Screening & Leasing', description: 'We screen applicants and execute the lease so you don’t have to.' },
  { step: '04', title: 'Ongoing Management', description: 'Rent collection, maintenance, and reporting run on autopilot from there.' },
]

export default function Services() {
  return (
    <div>
      <section className="bg-brand-950 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">Our Services</h1>
          <p className="mt-4 max-w-xl text-brand-100/80">
            Full-service management for owners, and responsive support for residents — everything is
            handled under one roof.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-2xl font-semibold text-brand-950 sm:text-3xl">For Property Owners</h2>
        <p className="mt-2 max-w-2xl text-brand-950/60">
          Hand off the day-to-day and keep the returns. Cancel any time with 30 days&apos; notice.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ownerServices.map((service) => (
            <div key={service.title} className="rounded-xl border border-brand-100 p-6">
              <service.icon className="h-8 w-8 text-brand-600" strokeWidth={1.5} />
              <h3 className="mt-4 text-base font-semibold text-brand-950">{service.title}</h3>
              <p className="mt-2 text-sm text-brand-950/60">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-brand-950 sm:text-3xl">How It Works</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-4">
            {process.map((p) => (
              <div key={p.step}>
                <p className="text-sm font-semibold text-brand-400">{p.step}</p>
                <h3 className="mt-2 text-base font-semibold text-brand-950">{p.title}</h3>
                <p className="mt-2 text-sm text-brand-950/60">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-2xl font-semibold text-brand-950 sm:text-3xl">For Residents</h2>
        <p className="mt-2 max-w-2xl text-brand-950/60">
          Renting with {`Meridian`} means responsive support from the day you apply to the day you move out.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tenantServices.map((service) => (
            <div key={service.title} className="rounded-xl border border-brand-100 p-6">
              <service.icon className="h-8 w-8 text-brand-600" strokeWidth={1.5} />
              <h3 className="mt-4 text-base font-semibold text-brand-950">{service.title}</h3>
              <p className="mt-2 text-sm text-brand-950/60">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-700">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Curious what we&apos;d charge?</h2>
            <p className="mt-2 max-w-lg text-brand-100/80">Get a free, no-obligation rental analysis for your property.</p>
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
