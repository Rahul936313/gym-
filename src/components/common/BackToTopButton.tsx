import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 10, scale: visible ? 1 : 0.95 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-6 right-4 sm:right-6 z-[70] rounded-2xl border border-white/10 bg-red-500/15 px-3.5 py-2.5 sm:px-3 sm:py-2 text-xs font-bold text-red-200 shadow-[0_0_0_1px_rgba(255,42,42,0.25),0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-md min-h-[44px] sm:min-h-auto flex items-center justify-center"
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      TOP
    </motion.button>
  )
}

