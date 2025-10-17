"use client"

import React, { useRef } from "react"
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { cn } from "@/lib/utils"

export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode
  duration?: number
  className?: string
  containerClassName?: string
  borderClassName?: string
  as?: React.ElementType
  [key: string]: unknown
}) {
  const pathRef = useRef<SVGRectElement>(null)
  const progress = useMotionValue<number>(0)

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength()
    if (length) {
      const pxPerMillisecond = length / duration
      progress.set((time * pxPerMillisecond) % length)
    }
  })

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x ?? 0
  )
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y ?? 0
  )

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`

  return (
    <div
      className={cn(
        "relative h-fit w-fit overflow-visible rounded-lg p-[1px]",
        containerClassName
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx="12"
          ry="12"
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        <div
          className={cn(
            "h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px]",
            borderClassName
          )}
        />
      </motion.div>
      <Component
        className={cn(
          "relative block h-full w-full rounded-lg bg-background antialiased",
          className
        )}
        {...otherProps}
      >
        {children}
      </Component>
    </div>
  )
}

