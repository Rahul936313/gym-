import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { fitnessQuotes } from '../../content/gymData'

export default function QuotesSection() {
  const quotes = useMemo(() => fitnessQuotes, [])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = window.setInterval(() => setIndex((i) => (i + 1) % quotes.length), 4200)
    return () => window.clearInterval(t)
  }, [quotes.length])

  const current = quotes[index]

  return (
    <section className="relative px-4 py-16 sm:py-20 md:px-6 md:py-24" aria-label="Motivational quotes">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,42,42,0.18),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(192,192,192,0.14),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/60" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-bold tracking-widest text-white/50">MOTIVATION</div>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Train with conviction</h2>
            <p className="mt-3 max-w-md text-sm text-white/65">
              Fast fades. Strong words. Keep pushing until your discipline becomes your identity.
            </p>
          </div>

          <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-7 md:p-10">
            <div className="absolute -top-24 right-10 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,42,42,0.28),transparent_60%)]" />
            <div className="relative">
              <div className="text-sm font-extrabold tracking-widest text-red-200/90">QUOTE OF THE MOMENT</div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="mt-5 text-2xl font-black leading-tight tracking-tight"
                >
                  “{current}”
                </motion.p>
              </AnimatePresence>

              <div className="mt-6 flex items-center justify-between gap-3 text-xs font-bold text-white/55">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  INFINITYX ENERGY
                </div>
                <div>
                  {index + 1}/{quotes.length}
                </div>
              </div>

              <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-red-500"
                  initial={{ width: '15%' }}
                  animate={{ width: `${((index + 1) / quotes.length) * 100}%` }}
                  transition={{ duration: 0.35 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

