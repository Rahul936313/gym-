import { motion } from 'framer-motion'
import Reveal from '../common/Reveal'
import { FaDumbbell, FaPersonRunning, FaWind, FaHeartPulse } from 'react-icons/fa6'

const services = [
  {
    id: 'pt',
    title: 'Personal Coaching',
    desc: 'Form-first guidance, progressive programming, and measurable milestones.',
    icon: FaDumbbell,
  },
  {
    id: 'crossfit',
    title: 'Crossfit Energy',
    desc: 'WODs built for intensity with smart scaling and elite coaching.',
    icon: FaWind,
  },
  {
    id: 'cardio',
    title: 'Cardio Conditioning',
    desc: 'Endurance training and HIIT sessions tailored to your pace.',
    icon: FaPersonRunning,
  },
  {
    id: 'recovery',
    title: 'Recovery & Mobility',
    desc: 'Sweat smart: warm-ups, mobility work, and recovery protocols.',
    icon: FaHeartPulse,
  },
]

export default function ServicesSection() {
  return (
    <section className="px-4 py-16 sm:py-20 md:px-6 md:py-24" aria-label="Gym services">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div>
            <div className="text-xs font-bold tracking-widest text-white/50">SERVICES</div>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Gym Catalog</h2>
            <p className="mt-3 max-w-2xl text-sm text-white/65">
              Premium programs for strength, endurance, and high-energy training. (Placeholder services - replace as needed.)
            </p>
          </div>
        </Reveal>

        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              whileHover={{ y: -6 }}
              className="group glass relative overflow-hidden rounded-3xl p-6"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,42,42,0.25),transparent_55%)]" />
              </div>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-red-200">
                    <s.icon />
                  </div>
                  <div className="text-sm font-extrabold tracking-wide text-white/85">{s.title}</div>
                </div>
                <div className="mt-4 text-sm leading-relaxed text-white/65">{s.desc}</div>
                <div className="mt-5 text-xs font-extrabold tracking-widest text-red-200/80">
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

