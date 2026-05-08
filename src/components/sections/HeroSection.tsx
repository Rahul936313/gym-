import { motion, useScroll, useTransform } from 'framer-motion'
import ParticlesCanvas from '../effects/ParticlesCanvas'
import { scrollToId } from '../../utils/scrollToId'
import { galleryItems } from '../../content/gallery'
import { site } from '../../content/site'
import heroImage from '../../assets/optimized/gym-4.webp'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 900], [0, 120])
  const bgScale = useTransform(scrollY, [0, 900], [1, 1.07])

  const title = 'BREAK YOUR LIMITS'
  const words = title.split(' ')

  const bgAccent = galleryItems[0]?.image

  return (
    <section className="relative min-h-[92svh] overflow-hidden" aria-label="Hero">
      <ParticlesCanvas />

      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: bgY,
          scale: bgScale,
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black"
      />

      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,42,42,0.22),transparent_60%)]"
      />

      <div
        aria-hidden="true"
        className="absolute right-[-200px] top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-20 sm:pt-24 md:px-6 md:pb-16 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 md:items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold tracking-widest text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_22px_rgba(255,42,42,0.6)]" />
              INFINITY X FITNESS
            </div>

            <h1 className="mt-4 sm:mt-5 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              <span className="block text-shadow">
                {words.map((w, i) => (
                  <motion.span
                    key={`${w}-${i}`}
                    className="mr-2 inline-block"
                    initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.55, delay: 0.08 * i }}
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-white/70">
              {`A place where strength meets dedication and every rep brings you closer to a stronger, healthier, better you.`}
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center">
              <motion.button
                type="button"
                className="neon-ring inline-flex items-center justify-center rounded-2xl border border-red-500/35 bg-red-500/10 px-5 sm:px-6 py-3 sm:py-3 text-sm sm:text-sm font-extrabold text-red-200 shadow-[0_0_40px_rgba(255,42,42,0.18)] backdrop-blur-md h-12 sm:h-auto min-h-[44px]"
                onClick={() => scrollToId('membership')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative">
                  <span className="absolute -inset-1 animate-pulse rounded-2xl bg-red-500/10" />
                  <span className="relative">JOIN NOW</span>
                </span>
              </motion.button>

              <motion.button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 sm:px-6 py-3 sm:py-3 text-sm sm:text-sm font-extrabold text-white/80 backdrop-blur-md h-12 sm:h-auto min-h-[44px]"
                onClick={() => scrollToId('gallery')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Gym
              </motion.button>
            </div>

            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold text-white/55">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Build Strength
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/60" />
                Transform Life
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              className="glass rounded-3xl p-4 sm:p-5 md:p-6"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="flex items-center justify-between gap-2 sm:gap-3">
                <div className="text-xs sm:text-sm font-bold tracking-wide text-white/80">INFINITYX FOCUS</div>
                <div className="rounded-full border border-white/10 bg-white/5 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold text-red-200">
                  UNISEX GYM
                </div>
              </div>

              <div className="mt-3 sm:mt-4 grid gap-2 sm:gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-3 sm:p-3">
                  <div className="text-xs font-bold text-white/60">Intensity</div>
                  <div className="mt-1 text-xl sm:text-2xl font-black text-white">
                    9<span className="text-red-400">/10</span>
                  </div>
                </div>
                <div
                  className="rounded-2xl border border-white/10 bg-black/30 p-3 sm:p-3"
                  style={{
                    backgroundImage: bgAccent ? `url(${bgAccent})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="text-xs font-bold text-white/60">Progress</div>
                  <div className="mt-1 text-xl sm:text-2xl font-black text-white">
                    +<span className="text-[#c0c0c0]">999</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-4">
                <div className="text-xs font-bold text-white/60">{site.tagline}</div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 bg-red-500/70 shadow-[0_0_25px_rgba(255,42,42,0.5)]" />
                </div>
                <div className="mt-2 text-xs font-semibold text-white/60">
                  Modern Equipment • Expert Trainers • Hygienic Environment
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

