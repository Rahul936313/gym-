import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaInstagram, FaPhone, FaLocationDot } from 'react-icons/fa6'
import Reveal from '../common/Reveal'
import MapEmbedSection from './MapEmbedSection'
import { site } from '../../content/site'
import { scrollToId } from '../../utils/scrollToId'

type FormState = {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined) ?? site.emailjsServiceId
  const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined) ?? site.emailjsTemplateId
  const publicKey =
    (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined) ?? site.emailjsPublicKey

  const canSend = useMemo(() => {
    if (!form.name.trim()) return false
    if (!form.email.trim() || !form.email.includes('@')) return false
    if (!form.message.trim()) return false
    if (status === 'sending') return false
    return true
  }, [form.email, form.message, form.name, status])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSend) return
    setStatus('sending')
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
          message: form.message,
          to_email: site.email,
        },
        publicKey,
      )
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', message: '' })
      // Friendly UX: keep the user on the same section.
      scrollToId('contact')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-4 py-16 md:px-6 md:py-24" aria-label="Contact">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div>
            <div className="text-xs font-bold tracking-widest text-white/50">CONTACT</div>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Let’s talk your next transformation
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/65">
              Premium coaching, elite energy. Send a message and we’ll reply with a training plan suggestion.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <div className="glass rounded-3xl p-6 md:p-7">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(255,42,42,0.65)]" />
                <div className="text-sm font-extrabold tracking-wide text-red-200/90">CONTACT INFO</div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-red-300" />
                    <div>
                      <div className="text-xs font-bold text-white/55">Phone</div>
                      <div className="mt-1 text-sm font-black">{site.phone}</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-3">
                    <FaLocationDot className="text-red-300" />
                    <div>
                      <div className="text-xs font-bold text-white/55">Address</div>
                      <div className="mt-1 text-sm font-black">{site.address}</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-3">
                    <FaInstagram className="text-red-300" />
                    <div>
                      <div className="text-xs font-bold text-white/55">Instagram</div>
                      <a
                        href={site.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-block text-sm font-black text-red-200 hover:text-red-300"
                      >
                        {site.instagramUrl.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass rounded-3xl p-6 md:p-7">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  <label className="block">
                    <div className="text-xs font-bold text-white/55">NAME</div>
                    <input
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-red-500/40 min-h-[44px] sm:min-h-auto"
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label className="block">
                    <div className="text-xs font-bold text-white/55">EMAIL</div>
                    <input
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      type="email"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-red-500/40 min-h-[44px] sm:min-h-auto"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>

                <label className="block">
                  <div className="text-xs font-bold text-white/55">PHONE (optional)</div>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    type="tel"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-red-500/40 min-h-[44px] sm:min-h-auto"
                    placeholder="+91..."
                  />
                </label>

                <label className="block">
                  <div className="text-xs font-bold text-white/55">MESSAGE</div>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="mt-2 min-h-[120px] w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-red-500/40"
                    placeholder="Tell us your goals (fat loss, strength, endurance...)"
                    required
                  />
                </label>

                <motion.button
                  type="submit"
                  disabled={!canSend}
                  whileHover={canSend ? { scale: 1.02 } : undefined}
                  whileTap={canSend ? { scale: 0.99 } : undefined}
                  className="neon-ring w-full rounded-3xl bg-red-500/15 px-5 sm:px-6 py-3 sm:py-4 text-sm font-extrabold text-red-200 ring-1 ring-red-500/30 disabled:opacity-60 min-h-[44px] sm:min-h-auto"
                >
                  <span className="relative">
                    <span className="absolute -inset-1 animate-pulse rounded-3xl bg-red-500/10" />
                    <span className="relative">
                      {status === 'sending' ? 'SENDING...' : status === 'sent' ? 'MESSAGE SENT ✓' : status === 'error' ? 'TRY AGAIN' : 'SEND MESSAGE'}
                    </span>
                  </span>
                </motion.button>

                <div className="text-xs text-white/50">
                  EmailJS setup required. Add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` in your `.env.local`.
                </div>
              </form>
            </div>

            <div className="mt-6">
              <MapEmbedSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

