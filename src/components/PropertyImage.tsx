import { Building2, Home, Warehouse } from 'lucide-react'
import type { Property } from '../data/properties'

const icons = {
  Apartment: Building2,
  Condo: Building2,
  Townhome: Warehouse,
  'Single Family': Home,
}

export default function PropertyImage({
  property,
  className = '',
}: {
  property: Pick<Property, 'type' | 'hue'>
  className?: string
}) {
  const Icon = icons[property.type]
  const hue = property.hue
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 45% 32%), hsl(${hue + 25} 55% 20%))`,
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 60%, white 0, transparent 35%)',
        }}
      />
      <Icon className="relative h-10 w-10 text-white/70" strokeWidth={1.5} />
    </div>
  )
}
