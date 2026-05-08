import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { site } from '../../content/site'

export default function LoadingScreen() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 900)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] grid place-items-center bg-black"
        >
          <div className="text-center">
            <div className="mx-auto h-16 w-16 animate-pulse rounded-2xl bg-red-500/15 ring-1 ring-red-500/30" />
            <div className="mt-4 text-sm font-semibold tracking-wide text-white/70">{site.brandName}</div>
            <div className="mt-2 text-xs font-bold tracking-[0.3em] text-red-400">LOADING</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

