"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import { AnimatedSlogan } from "@/components/animated-slogan"

export function HeroWithCursorEffect() {
  const heroRef = useRef<HTMLElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const targetPos = useRef({ x: 0, y: 0 })
  const currentPos = useRef({ x: 0, y: 0 })
  const isInsideRef = useRef(false)
  const isTouchDevice = useRef(false)

  useEffect(() => {
    // Detect touch device
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    const heroElement = heroRef.current
    const cursorElement = cursorRef.current
    if (!heroElement || !cursorElement || isTouchDevice.current) return

    let fadeOutTimeout: NodeJS.Timeout | null = null

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroElement.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Check if cursor is inside hero section
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        if (!isInsideRef.current) {
          isInsideRef.current = true
          cursorElement.style.transition = "opacity 0.3s ease-out"
          cursorElement.style.opacity = "1"
          if (fadeOutTimeout) {
            clearTimeout(fadeOutTimeout)
            fadeOutTimeout = null
          }
        }
        // Position glow slightly below cursor (60px offset)
        targetPos.current = { x, y: y - 100 }
      } else {
        if (isInsideRef.current) {
          isInsideRef.current = false
          startFadeOut()
        }
      }
    }

    const handleMouseLeave = () => {
      if (isInsideRef.current) {
        isInsideRef.current = false
        startFadeOut()
      }
    }

    const startFadeOut = () => {
      if (cursorElement && !fadeOutTimeout) {
        // Smooth fade-out over 2 seconds
        cursorElement.style.transition = "opacity 2s ease-out"
        cursorElement.style.opacity = "0"
      }
    }

    // Smooth animation loop with trailing effect
    const animate = () => {
      if (!cursorElement) return

      // Slower lerp (0.08) for more trailing/lagging effect
      const ease = 0.08
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease

      cursorElement.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`

      animationRef.current = requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", handleMouseMove)
    heroElement.addEventListener("mouseleave", handleMouseLeave)
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      heroElement.removeEventListener("mouseleave", handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (fadeOutTimeout) {
        clearTimeout(fadeOutTimeout)
      }
    }
  }, [])

  return (
    <section ref={heroRef} className="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-white">
      {/* Cursor Follow Effect - stays in background, desktop only */}
      <div
        ref={cursorRef}
        className="absolute pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 opacity-0 hidden md:block"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(79, 70, 229, 0.06) 25%, rgba(147, 51, 234, 0.04) 50%, transparent 75%)",
          filter: "blur(80px)",
          willChange: "transform, opacity",
        }}
      />

      {/* Existing background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-50 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-50 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium text-blue-700 shadow-sm opacity-0 animate-fade-in">
          <Rocket className="h-4 w-4" />
          <span>Deine digitale Zukunft startet hier</span>
        </div>
        <div className="opacity-0 animate-fade-in animate-delay-100">
          <AnimatedSlogan />
        </div>
        <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
          Hi, ich bin Ksawery – ausgebildeter Medientechniker und Webentwickler aus Österreich. Ich entwickle
          maßgeschneiderte Weblösungen mit modernen Technologien. WordPress oder individuelle Entwicklung, performant
          und ready für die Zukunft.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 opacity-0 animate-fade-in animate-delay-300">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white transition-all duration-300 hover:shadow-lg border-0"
          >
            <Link href="/kontakt">Kostenloses Erstgespräch</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="default"
            className="border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
          >
            <Link href="/preise">Preise ansehen</Link>
          </Button>
        </div>
        </div>
      </div>
    </section>
  )
}
