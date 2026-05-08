import { useEffect, useMemo, useRef } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  a: number
}

export default function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersReduced = usePrefersReducedMotion()

  const particleCount = useMemo(() => {
    if (prefersReduced) return 0
    return 60
  }, [prefersReduced])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const particles: Particle[] = []
    let raf = 0
    let w = 0
    let h = 0

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * window.devicePixelRatio)
      canvas.height = Math.floor(h * window.devicePixelRatio)
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)

      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.25,
          r: 0.8 + Math.random() * 1.8,
          a: 0.15 + Math.random() * 0.35,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // Neon glow
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
        g.addColorStop(0, `rgba(255,42,42,${p.a})`)
        g.addColorStop(1, 'rgba(255,42,42,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    raf = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [particleCount])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}

