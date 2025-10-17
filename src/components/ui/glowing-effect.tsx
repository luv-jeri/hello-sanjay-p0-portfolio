"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function GlowingEffect({
  children,
  className,
  glowColor = "rgb(59, 130, 246)", // blue-500
  glowSize = 200,
}: {
  children: React.ReactNode
  className?: string
  glowColor?: string
  glowSize?: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      container.style.setProperty("--mouse-x", `${x}px`)
      container.style.setProperty("--mouse-y", `${y}px`)
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("group relative", className)}
      style={
        {
          "--glow-color": glowColor,
          "--glow-size": `${glowSize}px`,
        } as React.CSSProperties
      }
    >
      <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur transition-opacity duration-500 group-hover:opacity-75" />
      <div className="relative">{children}</div>
    </div>
  )
}

export function GlowingBorder({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("group relative rounded-xl", className)}>
      <div className="absolute -inset-0.5 animate-pulse rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
      <div className="relative">{children}</div>
    </div>
  )
}

