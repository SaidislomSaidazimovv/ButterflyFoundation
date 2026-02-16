"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ButterflySymbol } from "@/components/butterfly-symbol"
import { useState } from "react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="relative bg-foreground py-32 md:py-48 overflow-hidden">
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Butterfly watermark */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.015]">
        <ButterflySymbol className="h-[600px] w-[600px]" animated={false} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-16">
        <div className="grid gap-20 md:grid-cols-12">
          {/* Left — Info */}
          <div className="md:col-span-5">
            <ScrollReveal>
              <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-butterfly-teal/40" />
                <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-butterfly-teal">
                  Contact
                </p>
              </div>
              <h2 className="mt-8 font-serif text-4xl text-primary-foreground md:text-5xl">Geneva</h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-14 flex flex-col gap-8">
                <div className="flex items-start gap-5">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-shrink-0" fill="none" stroke="hsl(174,52%,36%)" strokeWidth="1.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <div>
                    <p className="text-sm leading-relaxed text-primary-foreground/50">The Butterfly Foundation</p>
                    <p className="text-sm leading-relaxed text-primary-foreground/50">Geneva, Switzerland</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-shrink-0" fill="none" stroke="hsl(174,52%,36%)" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                  <p className="text-sm text-primary-foreground/50">info@thebutterflyfoundation.org</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="mt-20 border-t border-primary-foreground/10 pt-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-primary-foreground/25">
                  Selective. Private. Institutional.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Form */}
          <div className="md:col-span-7">
            <ScrollReveal delay={100}>
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-primary-foreground/30">
                Strategic Inquiry
              </p>
            </ScrollReveal>

            <form className="mt-10 flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              {[
                { name: "name", label: "Name", type: "text", placeholder: "Name" },
                { name: "organization", label: "Organization", type: "text", placeholder: "Organization" },
                { name: "email", label: "Email", type: "email", placeholder: "Email" },
              ].map((field, i) => (
                <ScrollReveal key={field.name} delay={200 + i * 80}>
                  <div className="group relative">
                    <label htmlFor={`contact-${field.name}`} className="sr-only">{field.label}</label>
                    <input
                      id={`contact-${field.name}`}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formState[field.name as keyof typeof formState]}
                      onChange={handleChange}
                      className="w-full border-b border-primary-foreground/15 bg-transparent pb-4 text-sm text-primary-foreground placeholder:text-primary-foreground/25 focus:border-butterfly-teal focus:outline-none transition-colors duration-400"
                    />
                    {/* Animated underline */}
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-butterfly-teal transition-all duration-500 group-focus-within:w-full" />
                  </div>
                </ScrollReveal>
              ))}

              <ScrollReveal delay={450}>
                <div className="group relative">
                  <label htmlFor="contact-message" className="sr-only">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Your inquiry"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full resize-none border-b border-primary-foreground/15 bg-transparent pb-4 text-sm text-primary-foreground placeholder:text-primary-foreground/25 focus:border-butterfly-teal focus:outline-none transition-colors duration-400"
                  />
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-butterfly-teal transition-all duration-500 group-focus-within:w-full" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={550}>
                <button
                  type="submit"
                  className="group mt-4 relative self-start overflow-hidden border border-primary-foreground/20 px-12 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-primary-foreground transition-all duration-500"
                >
                  <span className="absolute inset-0 bg-butterfly-teal translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                  <span className="relative z-10">Submit Inquiry</span>
                </button>
              </ScrollReveal>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
