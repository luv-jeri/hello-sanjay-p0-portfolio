"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

type SpotlightProps = {
  className?: string
  fill?: string
  size?: number
}

/**
 * Spotlight Component
 * Creates a beautiful spotlight effect that follows the cursor
 */
export function Spotlight({ className, fill = "rgba(255,255,255,0.1)", size = 600 }: SpotlightProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200 })
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className={cn("pointer-events-none fixed inset-0 z-30", className)}
      style={{
        background: `radial-gradient(${size}px circle at var(--mouse-x) var(--mouse-y), ${fill}, transparent 80%)`,
        // @ts-ignore
        "--mouse-x": smoothX,
        "--mouse-y": smoothY,
      }}
    />
  )
}

