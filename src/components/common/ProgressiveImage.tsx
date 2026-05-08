import { useState } from 'react'

export default function ProgressiveImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className ?? ''}`}>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className={`absolute inset-0 h-full w-full scale-110 object-cover blur-2xl transition-opacity duration-500 ${
          loaded ? 'opacity-0' : 'opacity-60'
        }`}
      />

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`relative h-full w-full object-cover transition duration-500 ${
          loaded ? 'scale-100 opacity-100' : 'scale-[1.02] opacity-0'
        }`}
      />
    </div>
  )
}

