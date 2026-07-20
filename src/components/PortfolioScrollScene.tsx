import { useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from 'motion/react'
import { ArrowRight, Home as HomeIcon } from 'lucide-react'
import { properties, type Property } from '../data/properties'
import { company } from '../data/company'

const slots: { x: number; y: number }[] = [
  { x: -30, y: -6 },
  { x: -10, y: -6 },
  { x: 10, y: -6 },
  { x: 30, y: -6 },
  { x: -30, y: 24 },
  { x: -10, y: 24 },
  { x: 10, y: 24 },
  { x: 30, y: 24 },
]

const scene = properties.slice(0, slots.length)

function nodeGradient(property: Property) {
  return `linear-gradient(135deg, hsl(${property.hue} 45% 40%), hsl(${property.hue + 25} 55% 26%))`
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
  const appearEnd = isHero ? 0.22 : appearStart + 0.16

  const heroX = useTransform(progress, [0, appearEnd], [0, slot.x])
  const heroY = useTransform(progress, [0, appearEnd], [0, slot.y])
  const heroXCalc = useTransform(heroX, (v) => `calc(-50% + ${v}vw)`)
  const heroYCalc = useTransform(heroY, (v) => `calc(-50% + ${v}vh)`)
  const scale = useTransform(
    progress,
    isHero ? [0, appearEnd] : [appearStart, appearEnd],
    isHero ? [2.6, 1] : [0.3, 1],
  )
  const opacity = useTransform(progress, isHero ? [0, 0.05] : [appearStart, appearEnd], isHero ? [1, 1] : [0, 1])

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 flex flex-col items-center"
      style={{
        x: isHero ? heroXCalc : `calc(-50% + ${slot.x}vw)`,
        y: isHero ? heroYCalc : `calc(-50% + ${slot.y}vh)`,
        scale,
        opacity,
      }}
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg sm:h-20 sm:w-20"
        style={{ background: nodeGradient(property) }}
      >
        <HomeIcon className="h-6 w-6 text-white sm:h-9 sm:w-9" strokeWidth={1.5} />
      </div>
      <div className="mt-2 hidden text-center sm:block">
        <p className="text-[11px] font-semibold text-white sm:text-xs">{property.name}</p>
        <p className="text-[10px] text-brand-200/70 sm:text-[11px]">${property.price.toLocaleString()}/mo</p>
      </div>
    </motion.div>
  )
}

function Caption({
  progress,
  input,
  children,
}: {
  progress: MotionValue<number>
  input: [number, number, number, number]
  children: ReactNode
}) {
  const opacity = useTransform(progress, input, [0, 1, 1, 0])
  const y = useTransform(progress, input, [16, 0, 0, -16])
  const pointerEvents = useTransform(opacity, (o) => (o > 0.5 ? 'auto' : 'none'))

  return (
    <motion.div
      style={{ opacity, y, pointerEvents }}
      className="absolute inset-x-0 top-28 px-4 text-center sm:top-32"
    >
      {children}
    </motion.div>
  )
}

function StaticPortfolioGrid() {
  return (
    <section className="bg-brand-950 py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">How it grows</p>
        <h2 className="mt-2 text-2xl font-semibold text-white sm:text-4xl">
          From one property to a full portfolio.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {scene.map((property) => (
            <div key={property.id} className="flex flex-col items-center">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
                style={{ background: nodeGradient(property) }}
              >
                <HomeIcon className="h-7 w-7 text-white" strokeWidth={1.5} />
              </div>
              <p className="mt-2 text-xs font-semibold text-white">{property.name}</p>
              <p className="text-[11px] text-brand-200/70">${property.price.toLocaleString()}/mo</p>
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

        <Caption progress={progress} input={[0, 0.04, 0.16, 0.24]}>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">How it grows</p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-4xl">It starts with one property.</h2>
        </Caption>

        <Caption progress={progress} input={[0.3, 0.4, 0.55, 0.63]}>
          <h2 className="text-2xl font-semibold text-white sm:text-4xl">Then another. And another.</h2>
        </Caption>

        <Caption progress={progress} input={[0.72, 0.82, 1, 1]}>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
            {company.unitsManaged.toLocaleString()}+ units managed
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-4xl">
            Soon, a full portfolio under one roof.
          </h2>
          <Link
            to="/properties"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-950 shadow-sm"
          >
            View all properties
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Caption>

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
