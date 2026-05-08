import { useEffect, useMemo, useState } from 'react'

export default function useCountUp({
  target,
  isActive,
  durationMs = 1200,
  start = 0,
}: {
  target: number
  isActive: boolean
  durationMs?: number
  start?: number
}) {
  const [value, setValue] = useState(start)

  const targetMemo = useMemo(() => target, [target])

  useEffect(() => {
    if (!isActive) return
    let raf = 0
    const startTs = performance.now()
    const from = start
    const to = targetMemo

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTs) / durationMs)
      // Smooth (easeOutCubic)
      const eased = 1 - Math.pow(1 - t, 3)
      const next = Math.round(from + (to - from) * eased)
      setValue(next)
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isActive, durationMs, start, targetMemo])

  return value
}

