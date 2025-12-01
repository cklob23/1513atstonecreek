"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg
        bg-primary text-primary-foreground hover:bg-primary/90 transition
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  )
}
