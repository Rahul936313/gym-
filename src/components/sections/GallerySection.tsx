import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../common/Reveal'
import ProgressiveImage from '../common/ProgressiveImage'
import type { GalleryCategory } from '../../content/gallery'
import { galleryItems } from '../../content/gallery'

const categories: GalleryCategory[] = ['All', 'Cardio', 'Strength', 'Workout Area']

type Selected = (typeof galleryItems)[number] | null

export default function GallerySection() {
  const [active, setActive] = useState<GalleryCategory>('All')
  const [selected, setSelected] = useState<Selected>(null)

  const filtered = useMemo(() => {
    if (active === 'All') return galleryItems
    return galleryItems.filter((i) => i.category === active)
  }, [active])

  return (
    <section id="gallery" className="px-4 py-16 sm:py-20 md:px-6 md:py-24" aria-label="Gym gallery">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-4 md:gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold tracking-widest text-white/50">GYM GALLERY</div>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Cinematic Spaces</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={`rounded-full border px-4 py-2 text-xs font-extrabold tracking-wide backdrop-blur-md transition-colors ${
                    active === cat
                      ? 'border-red-500/40 bg-red-500/15 text-red-200 shadow-[0_0_40px_rgba(255,42,42,0.18)]'
                      : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mt-10 columns-1 gap-4 md:columns-2 lg:columns-3">
            {filtered.map((item, idx) => (
              <motion.button
                key={item.id}
                type="button"
                className="mb-4 w-full break-inside-avoid rounded-3xl text-left"
                onClick={() => setSelected(item)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: Math.min(idx * 0.02, 0.25) }}
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30">
                  <ProgressiveImage
                    src={item.image}
                    alt={item.title}
                    className="h-[220px] w-full transition-transform duration-300 will-change-transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-xs font-bold tracking-wide text-white/80">{item.category}</div>
                    <div className="mt-1 text-sm font-black text-white">{item.title}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.fullImage}
                alt={selected.title}
                className="h-auto max-h-[70vh] w-full object-cover"
                loading="eager"
              />
              <div className="absolute left-3 right-3 top-3 sm:left-4 sm:right-4 sm:top-4 flex items-center justify-between gap-2">
                <div className="rounded-full border border-white/10 bg-black/40 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold text-white/80 backdrop-blur-md">
                  {selected.category}
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-extrabold text-white/80 hover:bg-white/10 min-h-[44px] sm:min-h-auto"
                >
                  Close
                </button>
              </div>
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                <div className="text-lg sm:text-xl font-black text-white">{selected.title}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

