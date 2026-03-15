"use client"

import { useEffect, useRef, useState, useCallback } from "react"

const stages = [
  { name: "Egg", description: "Potential. Beginning. The unseen origin.", icon: "M20 33 A13 13 0 1 1 20 7 A13 13 0 1 1 20 33" },
  { name: "Caterpillar", description: "Growth. Consumption. Learning the ground.", icon: "M5 20 Q10 12, 16 20 Q22 28, 28 20 Q34 12, 36 20" },
  { name: "Cocoon", description: "Withdrawal. Stillness. Deep restructuring.", icon: "M13 33 Q20 5, 27 33 Z" },
  { name: "Metamorphosis", description: "Transformation. The invisible becoming.", icon: "M8 20 L20 8 L32 20 L20 32 Z" },
  { name: "Butterfly", description: "Emergence. Flight. Integration.", icon: "M20 18 C15 10, 5 7, 7 16 C9 22, 15 23, 20 18 M20 18 C25 10, 35 7, 33 16 C31 22, 25 23, 20 18 M20 18 L20 30" },
]

const COUNT = stages.length
const TRAVEL_MS = 600
const PAUSE_MS = 600
const STEP_MS = TRAVEL_MS + PAUSE_MS // 1200ms per icon

// Animation phases: "paused" (dot at icon, ring glows) → "traveling" (dot moves to next)
type Phase = "paused" | "traveling" | "resetting"

export function StageDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [iconCenters, setIconCenters] = useState<number[]>([])
  const [isMd, setIsMd] = useState(false)

  const [activeIcon, setActiveIcon] = useState(0)
  const [dotTarget, setDotTarget] = useState(0) // index the dot is at/moving toward
  const [phase, setPhase] = useState<Phase>("paused")

  // Measure icon center X positions relative to container
  const measure = useCallback(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()
    const els = container.querySelectorAll<HTMLElement>("[data-stage-icon]")
    const centers: number[] = []
    els.forEach((el) => {
      const r = el.getBoundingClientRect()
      centers.push(r.left + r.width / 2 - containerRect.left)
    })
    setIconCenters(centers)
    setIsMd(window.innerWidth >= 768)
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [measure])

  // Main animation loop
  useEffect(() => {
    if (iconCenters.length === 0 || !isMd) return

    let current = 0
    let timer: ReturnType<typeof setTimeout>

    const loop = () => {
      // Phase 1: Pause at current icon — ring glows
      setActiveIcon(current)
      setDotTarget(current)
      setPhase("paused")

      timer = setTimeout(() => {
        const next = (current + 1) % COUNT

        if (next === 0) {
          // Wrapping: fade dot out, then reset to icon 0
          setPhase("resetting")
          setActiveIcon(-1)

          timer = setTimeout(() => {
            current = 0
            setDotTarget(0)
            setPhase("paused")
            // Small delay before starting the loop again
            timer = setTimeout(loop, 100)
          }, TRAVEL_MS)
        } else {
          // Phase 2: Travel to next icon
          setPhase("traveling")
          setDotTarget(next)
          setActiveIcon(-1)

          timer = setTimeout(() => {
            current = next
            loop()
          }, TRAVEL_MS)
        }
      }, PAUSE_MS)
    }

    loop()
    return () => clearTimeout(timer)
  }, [iconCenters, isMd])

  const dotX = iconCenters[dotTarget] ?? 0

  return (
    <div ref={containerRef} className="relative mt-24">
      {/* Static connector line */}
      <div className="absolute top-[44px] left-[10%] right-[10%] hidden md:block">
        <div className="h-px w-full bg-butterfly-teal/15" />
      </div>

      {/* Traveling dot */}
      {isMd && iconCenters.length > 0 && (
        <div
          className="absolute top-[44px] -translate-y-1/2 -translate-x-1/2 z-20 hidden md:block pointer-events-none"
          style={{
            left: dotX,
            transition:
              phase === "traveling"
                ? `left ${TRAVEL_MS}ms cubic-bezier(0.45, 0, 0.55, 1)`
                : phase === "resetting"
                  ? `opacity ${TRAVEL_MS * 0.6}ms ease`
                  : "none",
            opacity: phase === "resetting" ? 0 : 1,
          }}
        >
          <div className="h-[6px] w-[6px] rounded-full bg-butterfly-teal shadow-[0_0_8px_3px_hsla(174,52%,36%,0.4)]" />
        </div>
      )}

      {/* Stage icons */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-6">
        {stages.map((stage, i) => {
          const isActive = activeIcon === i

          return (
            <div key={stage.name} className="flex flex-col items-center text-center">
              <div
                data-stage-icon
                className="relative flex h-[88px] w-[88px] items-center justify-center"
              >
                {/* Ring — lights up when active */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: isActive
                      ? "1.5px solid hsl(174, 52%, 36%)"
                      : "1px solid hsla(174, 52%, 36%, 0.15)",
                    boxShadow: isActive
                      ? "0 0 16px 4px hsla(174, 52%, 36%, 0.2)"
                      : "none",
                    transition: "all 0.4s ease",
                  }}
                />

                {/* Icon SVG */}
                <svg
                  viewBox="0 0 40 40"
                  className="relative z-10 h-10 w-10"
                  style={{
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.4s ease",
                  }}
                >
                  <path
                    d={stage.icon}
                    fill="hsl(174,52%,36%)"
                    fillOpacity={isActive ? "0.3" : "0.15"}
                    stroke="hsl(174,52%,36%)"
                    strokeWidth="1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    style={{ transition: "fill-opacity 0.4s ease" }}
                  />
                </svg>
              </div>

              <span className="mt-5 text-[10px] font-medium tracking-[0.3em] text-muted-foreground/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-lg text-foreground">{stage.name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                {stage.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
