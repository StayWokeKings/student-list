import { Building2 } from 'lucide-react'
import { company } from '../data/company'

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`flex items-center gap-2 font-semibold tracking-tight ${light ? 'text-white' : 'text-brand-900'}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-600 text-white">
        <Building2 className="h-5 w-5" strokeWidth={2} />
      </span>
      <span className="text-lg">{company.shortName}</span>
    </span>
  )
}
