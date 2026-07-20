import { NavLink } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import SocialIcon from './SocialIcon'
import { company } from '../data/company'

export default function Footer() {
  return (
    <footer className="border-t border-brand-900 bg-brand-950 text-brand-100">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-brand-200/80">{company.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              aria-label="Facebook"
            >
              <SocialIcon name="facebook" className="h-4 w-4" />
            </a>
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              aria-label="Instagram"
            >
              <SocialIcon name="instagram" className="h-4 w-4" />
            </a>
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <SocialIcon name="linkedin" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-brand-200/80">
            <li><NavLink to="/about" className="hover:text-white">About Us</NavLink></li>
            <li><NavLink to="/services" className="hover:text-white">Services</NavLink></li>
            <li><NavLink to="/properties" className="hover:text-white">Properties</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">For Owners &amp; Tenants</h3>
          <ul className="mt-4 space-y-2 text-sm text-brand-200/80">
            <li><NavLink to="/services" className="hover:text-white">Owner Services</NavLink></li>
            <li><NavLink to="/properties" className="hover:text-white">Find a Rental</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white">Maintenance Requests</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white">Pay Rent Online</NavLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-200/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{company.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} className="hover:text-white">
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="mx-auto max-w-6xl px-4 text-center text-xs text-brand-300/70 sm:px-6">
          © {new Date().getFullYear()} {company.name}. All rights reserved. Equal Housing Opportunity.
        </p>
      </div>
    </footer>
  )
}
