"use client"

import { useEffect, useState } from "react"

export function AnimatedSlogan() {
  const words = ["begeistert", "inspiriert", "überzeugt", "beeindruckt"]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsVisible(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl text-balance mb-2">
      <span className="text-foreground">
  Webdesign, das
</span>

<div className="mt-3">
  <span
    className={`bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient transition-opacity duration-500 ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}
  >
    {words[currentIndex]}
  </span>
</div>

    </h1>
  )
}
