import { FaInstagram, FaPhone, FaLocationDot } from 'react-icons/fa6'
import Reveal from '../common/Reveal'
import MapEmbedSection from './MapEmbedSection'
import { site } from '../../content/site'

const ContactSection = () => {
return ( <section
   id="contact"
   className="px-4 py-16 md:px-6 md:py-24"
   aria-label="Contact"
 > <div className="mx-auto max-w-7xl"> <Reveal> <div> <div className="text-xs font-bold tracking-widest text-white/50">
CONTACT </div>

```
        <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
          Let’s talk your next transformation
        </h2>

        <p className="mt-3 max-w-2xl text-sm text-white/65">
          Premium coaching, elite energy. Send a message and we’ll reply
          with a training plan suggestion.
        </p>
      </div>
    </Reveal>

    <div className="mt-10 grid gap-8 lg:grid-cols-5 lg:items-start">
      <div className="lg:col-span-2">
        <div className="glass rounded-3xl p-6 md:p-7">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(255,42,42,0.65)]" />

            <div className="text-sm font-extrabold tracking-wide text-red-200/90">
              CONTACT INFO
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center gap-3">
                <FaPhone className="text-red-300" />

                <div>
                  <div className="text-xs font-bold text-white/55">
                    Phone
                  </div>

                  <div className="mt-1 text-sm font-black">
                    {site.phone}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center gap-3">
                <FaLocationDot className="text-red-300" />

                <div>
                  <div className="text-xs font-bold text-white/55">
                    Address
                  </div>

                  <div className="mt-1 text-sm font-black">
                    {site.address}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center gap-3">
                <FaInstagram className="text-red-300" />

                <div>
                  <div className="text-xs font-bold text-white/55">
                    Instagram
                  </div>

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
        <div className="glass rounded-3xl overflow-hidden">
          <MapEmbedSection />
        </div>
      </div>
    </div>
  </div>
</section>
```

)
}

export default ContactSection
