import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[60] h-1 w-full bg-white/5">
      <motion.div className="h-1 origin-left bg-red-500" style={{ scaleX }} />
    </div>
  )
}

