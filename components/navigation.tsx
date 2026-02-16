"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ButterflySymbol } from "@/components/butterfly-symbol"

const navLinks = [
  { label: "Framework", href: "#framework" },
  { label: "Global Month", href: "#butterfly-month" },
  { label: "Governance", href: "#institutional-model" },
  { label: "The Accord", href: "#accord" },
  { label: "The Index", href: "#index" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_20px_-6px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3 text-foreground transition-opacity hover:opacity-80">
          {/* <ButterflySymbol className="h-7 w-7" animated={false} /> */}

          <Image
  src="/ONETOPIA_Logo_Symbol_Black.png"
  alt="The Butterfly Foundation Logo"
  width={28}
  height={28}
  className="h-7 w-7 object-contain"
/>

          <span className="font-serif text-[15px] tracking-wide">The Butterfly Foundation</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="line-reveal relative pb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        >
          <span className={`block h-px w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[400px] border-b border-border" : "max-h-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl px-6 py-8">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
