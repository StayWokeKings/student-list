import { useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { properties, type Property } from '../data/properties'
import { company } from '../data/company'

const TILE_VW = 16

const slots: { x: number; y: number }[] = [
  { x: -33, y: -12 },
  { x: -11, y: -12 },
  { x: 11, y: -12 },
  { x: 33, y: -12 },
  { x: -33, y: 26 },
  { x: -11, y: 26 },
  { x: 11, y: 26 },
  { x: 33, y: 26 },
]

const scene = properties.slice(0, slots.length)

// Isometric house geometry, precomputed for a 30deg projection (shared by every tile — only fill colors vary).
const RIGHT_WALL = '50,50 62.99,57.5 62.99,39.5 50,32'
const LEFT_WALL = '50,50 37.01,57.5 37.01,39.5 50,32'
const ROOF_RIGHT = '50,32 62.99,39.5 50,16'
const ROOF_LEFT = '50,32 37.01,39.5 50,16'
const DOOR = '57.15,54.13 61.04,56.38 61.04,46.48 57.15,44.23'
const WINDOW = '47.4,51.5 43.51,53.75 43.51,46.55 47.4,44.3'
const YARD = '50,56 72.08,68.75 50,81.5 27.92,68.75'

function PropertyPhoto({ property }: { property: Property }) {
  const hue = property.hue
  const sky = `hsl(${hue} 42% 58%)`
  const skyDark = `hsl(${hue} 36% 30%)`
  const yard = `hsl(${hue + 50} 22% 24%)`
  const wallLit = `hsl(${hue} 12% 90%)`
  const wallShade = `hsl(${hue} 16% 68%)`
  const roofLit = `hsl(${hue + 12} 45% 34%)`
  const roofShade = `hsl(${hue + 12} 42% 20%)`
  const door = `hsl(${hue + 12} 35% 18%)`
  const glass = `hsl(${hue} 30% 85%)`
  const gradientId = `sky-${property.id}`
  const shadowId = `shadow-${property.id}`

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/10">
      <svg viewBox="0 0 100 75" className="h-full w-full" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={sky} />
            <stop offset="100%" stopColor={skyDark} />
          </linearGradient>
          <filter id={shadowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.6" />
          </filter>
        </defs>
        <rect width="100" height="75" fill={`url(#${gradientId})`} />
        <circle cx="82" cy="14" r="7" fill="white" opacity="0.15" />
        <circle cx="16" cy="10" r="4" fill="white" opacity="0.12" />

        <polygon points={YARD} fill={yard} />
        <ellipse cx="50" cy="59" rx="15" ry="4" fill="black" opacity="0.28" filter={`url(#${shadowId})`} />

        <polygon points={LEFT_WALL} fill={wallShade} />
        <polygon points={RIGHT_WALL} fill={wallLit} />
        <polygon points={ROOF_LEFT} fill={roofShade} />
        <polygon points={ROOF_RIGHT} fill={roofLit} />
        <polygon points={DOOR} fill={door} />
        <polygon points={WINDOW} fill={glass} opacity="0.85" />
      </svg>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent px-1.5 py-1 sm:p-3">
        <p className="truncate text-[8px] font-semibold leading-tight text-white sm:text-xs">{property.name}</p>
        <p className="hidden text-[11px] text-white/70 sm:block">${property.price.toLocaleString()}/mo</p>
      </div>
    </div>
  )
}

function Node({
  property,
  slot,
  index,
  progress,
  isHero,
}: {
  property: Property
  slot: { x: number; y: number }
  index: number
  progress: MotionValue<number>
  isHero: boolean
}) {
  const appearStart = isHero ? 0 : 0.06 + (index - 1) * 0.09
  const appearEnd = isHero ? 0.24 : appearStart + 0.16

  const heroX = useTransform(progress, [0, appearEnd], [0, slot.x])
  const heroY = useTransform(progress, [0, appearEnd], [0, slot.y])
  const heroXCalc = useTransform(heroX, (v) => `calc(-50% + ${v}vw)`)
  const heroYCalc = useTransform(heroY, (v) => `calc(-50% + ${v}vh)`)
  const scale = useTransform(
    progress,
    isHero ? [0, appearEnd] : [appearStart, appearEnd],
    isHero ? [3, 1] : [0.25, 1],
  )
  const opacity = useTransform(progress, isHero ? [0, 0.05] : [appearStart, appearEnd], isHero ? [1, 1] : [0, 1])

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 aspect-[4/3]"
      style={{
        width: `${TILE_VW}vw`,
        x: isHero ? heroXCalc : `calc(-50% + ${slot.x}vw)`,
        y: isHero ? heroYCalc : `calc(-50% + ${slot.y}vh)`,
        scale,
        opacity,
        zIndex: isHero ? 10 : 1,
      }}
    >
      <PropertyPhoto property={property} />
    </motion.div>
  )
}

function Caption({
  progress,
  input,
  children,
  className = '',
}: {
  progress: MotionValue<number>
  input: [number, number, number, number]
  children: ReactNode
  className?: string
}) {
  const opacity = useTransform(progress, input, [0, 1, 1, 0])
  const y = useTransform(progress, input, [16, 0, 0, -16])
  const pointerEvents = useTransform(opacity, (o) => (o > 0.5 ? 'auto' : 'none'))

  return (
    <motion.div
      style={{ opacity, y, pointerEvents }}
      className={`absolute inset-x-0 px-4 text-center ${className}`}
    >
      {children}
    </motion.div>
  )
}

function StaticPortfolioGrid() {
  return (
    <section className="bg-brand-950 py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">Our Portfolio</p>
        <h2 className="mt-2 text-2xl font-semibold text-white sm:text-4xl">
          One property. A whole portfolio, professionally managed.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {scene.map((property) => (
            <div key={property.id} className="aspect-[4/3]">
              <PropertyPhoto property={property} />
            </div>
          ))}
        </div>
        <Link
          to="/properties"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-950 shadow-sm"
        >
          View all properties
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

export default function PortfolioScrollScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 })

  const groundOpacity = useTransform(progress, [0.28, 0.42], [0, 1])

  if (prefersReducedMotion) {
    return <StaticPortfolioGrid />
  }

  return (
    <section ref={containerRef} className="relative bg-brand-950" style={{ height: '340vh' }}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, hsl(165 45% 25%) 0, transparent 45%), radial-gradient(circle at 80% 70%, hsl(200 55% 20%) 0, transparent 40%)',
          }}
        />

        <Caption progress={progress} input={[0, 0.03, 0.16, 0.22]} className="top-24 sm:top-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">Our Portfolio</p>
        </Caption>

        <Caption progress={progress} input={[0.3, 0.4, 0.55, 0.63]} className="top-24 sm:top-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">The Bigger Picture</p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-4xl">
            Zoom out, and it&apos;s part of a growing neighborhood.
          </h2>
        </Caption>

        <Caption progress={progress} input={[0.72, 0.82, 1, 1]} className="top-24 sm:top-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
            {company.unitsManaged.toLocaleString()}+ units managed
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-4xl">
            One property. A whole portfolio, professionally managed.
          </h2>
          <Link
            to="/properties"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-950 shadow-sm"
          >
            View all properties
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Caption>

        <motion.div
          style={{ opacity: groundOpacity }}
          className="absolute inset-x-[6%] bottom-[14%] h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />

        <div className="relative h-full w-full">
          {scene.map((property, index) => (
            <Node
              key={property.id}
              property={property}
              slot={slots[index]}
              index={index}
              progress={progress}
              isHero={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
