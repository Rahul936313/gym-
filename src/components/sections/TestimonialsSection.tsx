import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import Reveal from '../common/Reveal'
import { testimonials } from '../../content/gymData'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-4 py-16 sm:py-20 md:px-6 md:py-24" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div>
            <div className="text-xs font-bold tracking-widest text-white/50">TESTIMONIALS</div>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Clients Feel the Difference</h2>
          </div>
        </Reveal>

        <div className="mt-10">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop
            autoplay={{ delay: 3600, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={t.id}>
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.02 }}
                  className="glass h-full rounded-3xl p-7 md:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-bold text-white/85">{t.name}</div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0.9, opacity: 0.5 }}
                          animate={{ scale: i < t.rating ? 1.1 : 1, opacity: 1 }}
                          transition={{ duration: 0.25, delay: i * 0.02 }}
                          className={i < t.rating ? 'text-red-400' : 'text-white/20'}
                        >
                          <FaStar />
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 text-sm font-extrabold tracking-wide text-red-200/90">{t.title}</div>
                  <div className="mt-4 text-sm leading-relaxed text-white/70">{t.body}</div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

