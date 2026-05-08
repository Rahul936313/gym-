import { motion } from 'framer-motion'
import Reveal from '../common/Reveal'
import { trainerProfiles } from '../../content/gymData'
import { FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6'

function SocialIcon({ label }: { label: string }) {
  switch (label.toLowerCase()) {
    case 'instagram':
      return <FaInstagram />
    case 'youtube':
      return <FaYoutube />
    default:
      return <FaXTwitter />
  }
}

export default function TrainersSection() {
  return (
    <section id="trainers" className="px-4 py-16 sm:py-20 md:px-6 md:py-24" aria-label="Trainers">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div>
            <div className="text-xs font-bold tracking-widest text-white/50">TRAINERS</div>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Elite Coaching Staff</h2>
            <p className="mt-3 max-w-2xl text-sm text-white/65">
              Form-first coaching, disciplined programming, and premium athlete-level support.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 md:gap-6 grid-cols-1 md:grid-cols-3">
          {trainerProfiles.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,42,42,0.22),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold tracking-widest text-white/50">{t.role}</div>
                    <div className="mt-1 text-xl font-black tracking-tight text-white">{t.name}</div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-2 text-xs font-bold text-red-200">
                    {t.id.toUpperCase()}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-sm font-bold text-white/80">Specialties</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-extrabold text-white/70 transition-colors group-hover:text-white"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-5 flex items-center gap-3"
                >
                  {t.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 hover:border-red-500/30 hover:bg-red-500/15 hover:text-red-200 transition-colors"
                      aria-label={s.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SocialIcon label={s.label} />
                    </a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

