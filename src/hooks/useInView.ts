import type { RefObject } from 'react'
import { useEffect, useState } from 'react'

export default function useInView<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options?: IntersectionObserverInit,
) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (!entry) return
      if (entry.isIntersecting) setIsInView(true)
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options])

  return isInView
}

