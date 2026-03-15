"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function PhotoBreak({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return (
    <section
      ref={ref}
      className="relative w-full h-[45vh] md:h-[55vh] lg:h-[65vh] overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          visible ? "scale-100" : "scale-110"
        }`}
        sizes="100vw"
      />

      {/* Gradient overlays — top and bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/30" />

      {caption && (
        <div
          className={`absolute bottom-10 left-0 right-0 text-center transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.5em] text-white/50">
            {caption}
          </p>
        </div>
      )}
    </section>
  )
}
