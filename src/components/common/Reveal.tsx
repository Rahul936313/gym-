import type { ReactNode } from 'react'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import useInView from '../../hooks/useInView'

export default function Reveal({
  children,
  className,
  delayMs = 0,
}: {
  children: ReactNode
  className?: string
  delayMs?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: delayMs / 1000 }}
    >
      {children}
    </motion.div>
  )
}

