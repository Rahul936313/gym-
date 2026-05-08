import { useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
import useInView from '../../hooks/useInView'
import useCountUp from '../../hooks/useCountUp'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

export default function StatCounter({
  label,
  value,
  suffix = '',
}: {
  label: string
  value: number
  suffix?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })
  const prefersReduced = usePrefersReducedMotion()

  const count = useCountUp({
    target: value,
    isActive: prefersReduced ? true : isInView,
    durationMs: 1100,
  })

  const display = useMemo(() => `${count}${suffix}`, [count, suffix])

  return (
    <motion.div
      ref={ref}
      className="glass relative overflow-hidden rounded-3xl p-6"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,42,42,0.22),transparent_55%)]" />
      <div className="relative">
        <div className="text-4xl font-black tracking-tight text-white">
          <span className="text-shadow">{display}</span>
        </div>
        <div className="mt-2 text-sm font-semibold tracking-wide text-white/60">{label}</div>
      </div>
    </motion.div>
  )
}

