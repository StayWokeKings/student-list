import { Handshake, Heart, ShieldCheck, Sparkles } from 'lucide-react'
import { company } from '../data/company'

const values = [
  {
    icon: Handshake,
    title: 'Integrity',
    description: 'We manage every property as if it were our own, with honest, transparent communication.',
  },
  {
    icon: Sparkles,
    title: 'Responsiveness',
    description: 'Maintenance requests, phone calls, and emails get answered quickly — no exceptions.',
  },
  {
    icon: ShieldCheck,
    title: 'Accountability',
    description: 'Clear reporting and open books, so owners always know exactly where their property stands.',
  },
  {
    icon: Heart,
    title: 'Community',
    description: 'We treat residents with respect and invest in the neighborhoods where our properties sit.',
  },
]

const team = [
  { name: 'Renee Castillo', role: 'Founder & Broker of Record', hue: 165 },
  { name: 'Devon Park', role: 'Director of Operations', hue: 30 },
  { name: 'Amara Okafor', role: 'Leasing Manager', hue: 260 },
  { name: 'Luis Fernandez', role: 'Maintenance Supervisor', hue: 200 },
]

export default function About() {
  return (
    <div>
      <section className="bg-brand-950 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
            About {company.name}
          </h1>
          <p className="mt-4 max-w-xl text-brand-100/80">
            Founded in {company.yearFounded}, we&apos;ve grown from managing a handful of homes to
            {' '}{company.unitsManaged.toLocaleString()}+ units across the region — without losing the
            personal, responsive service we started with.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-brand-950">Our Story</h2>
            <p className="mt-4 text-brand-950/70">
              {company.name} started in {company.yearFounded} when our founder, tired of watching
              self-managing landlords get burned by unreliable tenants and deferred maintenance, set out
              to build a management company that actually answers the phone.
            </p>
            <p className="mt-4 text-brand-950/70">
              Today our team manages single-family homes, condos, and apartment communities across the
              metro, but the mission hasn&apos;t changed: protect our owners&apos; investments and treat
              residents like neighbors, not tickets in a queue.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-brand-950">Our Mission</h2>
            <p className="mt-4 text-brand-950/70">
              To make property ownership genuinely passive — handling leasing, maintenance, and finances
              with the same care an owner would give their own home — while giving residents a place
              they&apos;re proud to live.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-brand-100 p-4">
                <p className="text-2xl font-semibold text-brand-700">{company.occupancyRate}%</p>
                <p className="text-sm text-brand-950/60">Average occupancy</p>
              </div>
              <div className="rounded-xl border border-brand-100 p-4">
                <p className="text-2xl font-semibold text-brand-700">{new Date().getFullYear() - company.yearFounded}+</p>
                <p className="text-sm text-brand-950/60">Years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-brand-950 sm:text-3xl">What We Value</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl border border-brand-100 bg-white p-6">
                <value.icon className="h-8 w-8 text-brand-600" strokeWidth={1.5} />
                <h3 className="mt-4 text-base font-semibold text-brand-950">{value.title}</h3>
                <p className="mt-2 text-sm text-brand-950/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-2xl font-semibold text-brand-950 sm:text-3xl">Meet the Team</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div
                className="mx-auto h-28 w-28 rounded-full"
                style={{
                  background: `linear-gradient(135deg, hsl(${member.hue} 45% 45%), hsl(${member.hue + 20} 55% 30%))`,
                }}
              />
              <h3 className="mt-4 text-sm font-semibold text-brand-950">{member.name}</h3>
              <p className="text-xs text-brand-950/60">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
