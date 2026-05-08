import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { site } from '../../content/site'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={false}
      animate={{ y: scrolled ? 0 : 0 }}
      className={`sticky top-0 z-50 border-b border-white/5 ${
        scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 neon-ring ring-1 ring-red-500/20 group-hover:ring-red-500/35">
              <span className="text-lg font-black tracking-tight text-red-500 group-hover:text-red-300">
                ∞
              </span>
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide text-white/90">INFINITY X FITNESS</div>
              <div className="text-[11px] font-medium text-white/50">{site.tagline}</div>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-red-400' : 'text-white/70 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-5 w-6">
            <span className={`absolute left-0 top-1 h-[2px] w-6 rounded ${open ? 'rotate-45 top-[11px]' : 'bg-white'}`} />
            <span className={`absolute left-0 top-[11px] h-[2px] w-6 rounded ${open ? 'opacity-0' : 'bg-white'}`} />
            <span className={`absolute left-0 top-4 h-[2px] w-6 rounded ${open ? '-rotate-45 top-[11px]' : 'bg-white'}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden md:hidden"
      >
        <div className="mx-auto max-w-7xl px-4 pb-4 md:px-6">
          <div className="mt-2 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive ? 'bg-red-500/15 text-red-300' : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}

