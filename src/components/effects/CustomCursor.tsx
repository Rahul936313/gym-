import { useEffect, useMemo, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 500, damping: 35 })
  const sy = useSpring(y, { stiffness: 500, damping: 35 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    setEnabled(fine.matches)
    const onChange = () => setEnabled(fine.matches)
    fine.addEventListener('change', onChange)
    return () => fine.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [enabled, x, y])

  const variants = useMemo(
    () => ({
      default: { width: 12, height: 12, opacity: 0.9 },
      hover: { width: 36, height: 36, opacity: 0.2 },
    }),
    [],
  )

  useEffect(() => {
    if (!enabled) return

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement | null
      const hoverable = !!target?.closest('a,button,[role="button"],input,textarea,select,label')
      setHovering(hoverable)
    }
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOver)
    return () => {
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOver)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] rounded-full border border-red-500/40 bg-red-500/10 shadow-[0_0_40px_rgba(255,42,42,0.25)] backdrop-blur-sm"
      style={{
        translateX: '-50%',
        translateY: '-50%',
        x: sx,
        y: sy,
      }}
      variants={variants}
      initial="default"
      animate={hovering ? 'hover' : 'default'}
    />
  )
}

