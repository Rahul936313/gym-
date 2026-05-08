import { motion } from 'framer-motion'
import Reveal from '../common/Reveal'
import { membershipPlans } from '../../content/gymData'

export default function MembershipSection() {
  const planGroup = membershipPlans[0]
  if (!planGroup) return null

  return (
    <section id="membership" className="px-4 py-16 sm:py-20 md:px-6 md:py-24" aria-label="Membership plans">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-4 sm:gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold tracking-widest text-white/50">MEMBERSHIP</div>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Fee Catalogue</h2>
              <p className="mt-3 max-w-xl text-sm text-white/65">
                Straightforward pricing plans for InfinityX Fitness training programs.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 md:gap-6 grid-cols-1 md:grid-cols-3">
          {planGroup.plans.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              {p.mostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-red-500/40 bg-red-500/15 px-4 py-1 text-xs font-extrabold text-red-200 shadow-[0_0_40px_rgba(255,42,42,0.18)]">
                  MOST POPULAR
                </div>
              )}

              <div
                className={`glass h-full rounded-3xl p-6 ${
                  p.mostPopular ? 'neon-ring border border-red-500/30' : 'border border-white/10'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-bold text-white/85">{p.name}</div>
                    <div className="mt-1 text-xs font-semibold text-white/55">{p.note}</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-right">
                    <div className="text-2xl font-black tracking-tight text-white">
                      ₹{p.price}
                    </div>
                    <div className="mt-1 text-xs font-bold text-white/60">/ {planGroup.duration}</div>
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {p.features.map((f: string) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(255,42,42,0.35)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-6 w-full rounded-2xl px-5 py-3 text-sm font-extrabold transition-colors ${
                    p.mostPopular
                      ? 'bg-red-500/20 text-red-200 ring-1 ring-red-500/30 hover:bg-red-500/25'
                      : 'bg-white/5 text-white/80 ring-1 ring-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => {
                    const el = document.getElementById('contact')
                    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                >
                  Start Training
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

