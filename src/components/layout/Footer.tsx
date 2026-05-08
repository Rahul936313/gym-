import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { site } from '../../content/site'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold tracking-wide text-white/90">INFINITYX FITNESS</div>
            <p className="mt-2 text-sm text-white/60">
              Strong body. Strong mind. Limitless life.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-sm font-semibold text-white/85">Quick Links</div>
            <Link to="/" className="text-sm text-white/60 hover:text-white">
              Home
            </Link>
            <Link to="/contact" className="text-sm text-white/60 hover:text-white">
              Contact
            </Link>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/85">Social</div>
            <div className="mt-3 flex items-center gap-3">
              <a
                href={site.instagramUrl}
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-red-400 hover:border-red-500/30"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-red-400 hover:border-red-500/30"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-red-400 hover:border-red-500/30"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-white/45">
          © {new Date().getFullYear()} InfinityX Fitness. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

