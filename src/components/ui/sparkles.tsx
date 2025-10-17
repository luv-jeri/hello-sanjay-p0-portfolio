"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function SparklesCore({
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: {
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Only generate particles after component mounts to avoid hydration mismatch
  const particles = mounted
    ? Array.from({ length: particleDensity || 100 }, (_, i) => ({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * (maxSize || 3) + (minSize || 1),
        duration: Math.random() * 3 + 2,
      }))
    : []

  if (!mounted) {
    return (
      <div
        className={cn("absolute inset-0", className)}
        style={{ background: background || "transparent" }}
      />
    )
  }

  return (
    <div
      className={cn("absolute inset-0", className)}
      style={{ background: background || "transparent" }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particleColor || "white",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
