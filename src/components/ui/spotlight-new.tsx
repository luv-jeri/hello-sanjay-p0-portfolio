"use client"

import React from "react"
import { motion } from "framer-motion"

export function SpotlightNew({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: {
  gradientFirst?: string
  gradientSecond?: string
  gradientThird?: string
  translateY?: number
  width?: number
  height?: number
  smallWidth?: number
  duration?: number
  xOffset?: number
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Main Spotlight */}
      <motion.div
        initial={{ opacity: 0, left: "50%" }}
        animate={{
          opacity: [0, 0.5, 0.4],
          left: ["50%", "60%", "40%", "50%"],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: gradientFirst,
          width: `${width}px`,
          height: `${height}px`,
          transform: `translateX(-50%) translateY(${translateY}px)`,
        }}
        className="absolute top-0 blur-3xl"
      />

      {/* Second Spotlight */}
      <motion.div
        initial={{ opacity: 0, left: "30%" }}
        animate={{
          opacity: [0, 0.3, 0.2],
          left: ["30%", "20%", "35%", "30%"],
        }}
        transition={{
          duration: duration + 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          background: gradientSecond,
          width: `${smallWidth}px`,
          height: `${height}px`,
          transform: `translateX(-50%) translateY(${translateY}px)`,
        }}
        className="absolute top-0 blur-3xl"
      />

      {/* Third Spotlight */}
      <motion.div
        initial={{ opacity: 0, left: "70%" }}
        animate={{
          opacity: [0, 0.25, 0.15],
          left: ["70%", "80%", "65%", "70%"],
        }}
        transition={{
          duration: duration + 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          background: gradientThird,
          width: `${smallWidth}px`,
          height: `${height}px`,
          transform: `translateX(-50%) translateY(${translateY}px)`,
        }}
        className="absolute top-0 blur-3xl"
      />
    </div>
  )
}
