import Reveal from '../common/Reveal'
import StatCounter from '../common/StatCounter'
import { site } from '../../content/site'

export default function AboutSection() {
  return (
    <section className="relative px-4 py-16 sm:py-20 md:px-6 md:py-24" aria-label="About">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-4 items-end justify-between sm:flex-row sm:gap-6">
            <div>
              <div className="text-xs font-bold tracking-widest text-white/50">ABOUT INFINITYX</div>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
                Elite coaching. Hard discipline. Real results.
              </h2>
            </div>
            <div className="hidden h-12 w-12 rounded-2xl bg-red-500/10 ring-1 ring-red-500/30 md:block" />
          </div>
        </Reveal>

        <div className="mt-8 sm:mt-10 grid gap-8 sm:gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-6">
            <Reveal delayMs={120}>
              <p className="text-white/70">
                {site.brandName} is built for people who want transformation with structure-strength training, crossfit energy,
                cardio conditioning, and coaches who correct your form like a pro.
              </p>
            </Reveal>

            <Reveal delayMs={220}>
              <div className="glass rounded-3xl p-6">
                <div className="text-sm font-bold text-white/85">Our Mission</div>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  Empower members to build resilient bodies and disciplined minds through high-quality training and
                  measurable progress.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={320}>
              <div className="glass rounded-3xl p-6">
                <div className="text-sm font-bold text-white/85">Our Vision</div>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  Become the world-class gym experience where every session feels premium, cinematic, and results-driven.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="col-span-1 sm:col-span-1">
                <StatCounter label="Members" value={2400} suffix="+" />
              </div>
              <div className="col-span-1 sm:col-span-1">
                <StatCounter label="Trainers" value={48} suffix="+" />
              </div>
              <div className="col-span-1 sm:col-span-1">
                <StatCounter label="Equipment" value={320} suffix="+" />
              </div>
              <div className="col-span-1 sm:col-span-1">
                <StatCounter label="Experience" value={10} suffix="Y" />
              </div>
            </div>

            <Reveal delayMs={240}>
              <div className="mt-2 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-bold text-white/85">Training Philosophy</div>
                <div className="mt-3 text-sm leading-relaxed text-white/65">
                  Strength first, cardio second, discipline always. Our coaches design programs around your goals—then
                  refine your execution until it becomes effortless power.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

