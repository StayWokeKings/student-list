import { useState } from 'react'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { company } from '../data/company'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold text-brand-950 sm:text-4xl">Get in Touch</h1>
        <p className="mt-3 text-brand-950/60">
          Whether you&apos;re an owner looking for a free rental analysis or a resident with a question,
          we&apos;d love to hear from you.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <div className="rounded-xl border border-brand-100 p-6">
            <h2 className="text-sm font-semibold text-brand-950">Contact Info</h2>
            <ul className="mt-4 space-y-4 text-sm text-brand-950/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                {company.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-600" />
                <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} className="hover:text-brand-700">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-600" />
                <a href={`mailto:${company.email}`} className="hover:text-brand-700">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                {company.hours}
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-brand-100 bg-sand-50 p-6">
            <h2 className="text-sm font-semibold text-brand-950">Maintenance Emergency?</h2>
            <p className="mt-2 text-sm text-brand-950/60">
              Current residents with an urgent maintenance issue can reach our 24/7 line directly.
            </p>
            <a
              href={`tel:${company.emergencyPhone.replace(/[^\d+]/g, '')}`}
              className="mt-3 inline-block text-sm font-semibold text-brand-700"
            >
              {company.emergencyPhone}
            </a>
          </div>

          <div className="h-48 rounded-xl border border-brand-100 bg-brand-50" aria-hidden="true">
            <div className="flex h-full items-center justify-center gap-2 text-sm text-brand-950/50">
              <MapPin className="h-4 w-4" />
              Map placeholder
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-xl border border-brand-100 p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Send className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold text-brand-950">Thanks for reaching out!</h2>
                <p className="max-w-sm text-sm text-brand-950/60">
                  Our team will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-950/70">
                  Full Name
                  <input
                    required
                    type="text"
                    className="rounded-md border border-brand-200 px-3 py-2.5 text-sm text-brand-950 placeholder:text-brand-950/40"
                    placeholder="Jane Smith"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-950/70">
                  Email
                  <input
                    required
                    type="email"
                    className="rounded-md border border-brand-200 px-3 py-2.5 text-sm text-brand-950 placeholder:text-brand-950/40"
                    placeholder="jane@example.com"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-950/70">
                  Phone
                  <input
                    type="tel"
                    className="rounded-md border border-brand-200 px-3 py-2.5 text-sm text-brand-950 placeholder:text-brand-950/40"
                    placeholder="(555) 123-4567"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-950/70">
                  I am a...
                  <select className="rounded-md border border-brand-200 px-3 py-2.5 text-sm text-brand-950">
                    <option>Property Owner</option>
                    <option>Prospective Resident</option>
                    <option>Current Resident</option>
                    <option>Vendor</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-950/70 sm:col-span-2">
                  Message
                  <textarea
                    required
                    rows={5}
                    className="rounded-md border border-brand-200 px-3 py-2.5 text-sm text-brand-950 placeholder:text-brand-950/40"
                    placeholder="Tell us a bit about what you need..."
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 sm:col-span-2"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
