"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function CometCard({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const rotateXValue = ((mouseY - height / 2) / height) * -20
    const rotateYValue = ((mouseX - width / 2) / width) * 20

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div className={cn("perspective-1000", containerClassName)}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative rounded-xl border border-foreground/10 bg-background shadow-lg transition-shadow hover:shadow-xl",
          className
        )}
      >
        <div
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  )
}

