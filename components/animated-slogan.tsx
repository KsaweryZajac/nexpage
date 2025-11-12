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
    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-balance">
      <span className="text-foreground">
        Webdesign, das
        <br />
        {" "}
      </span>
      <span
        className={`bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent animate-gradient transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {words[currentIndex]}
      </span>
    </h1>
  )
}
