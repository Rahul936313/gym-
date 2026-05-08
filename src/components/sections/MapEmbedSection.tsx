import { site } from '../../content/site'
import { motion } from 'framer-motion'

export default function MapEmbedSection() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapQuery)}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.25 }}
      className="glass overflow-hidden rounded-3xl"
    >
      <div className="border-b border-white/10 px-6 py-5">
        <div className="text-xs font-bold tracking-widest text-white/50">LOCATION</div>
        <div className="mt-2 text-lg font-black tracking-tight">{site.address}</div>
        <div className="mt-2 text-sm text-white/65">Visit us for elite strength training and crossfit energy.</div>
      </div>

      <div className="relative">
        <iframe
          title="Gym location"
          src={site.googleMapsEmbedUrl}
          loading="lazy"
          className="h-[280px] w-full border-0 md:h-[340px]"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      </div>

      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <div className="text-sm font-bold text-white/70">Ready to train here?</div>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-extrabold text-white/80 hover:bg-white/10 hover:border-red-500/30 transition-colors"
        >
          Get Directions
        </a>
      </div>
    </motion.div>
  )
}

