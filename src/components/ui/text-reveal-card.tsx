"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function TextRevealCard({
  text,
  revealText,
  children,
  className,
}: {
  text: string
  revealText: string
  children?: React.ReactNode
  className?: string
}) {
  const [widthPercentage, setWidthPercentage] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const [left, setLeft] = useState(0)
  const [localWidth, setLocalWidth] = useState(0)
  const [isMouseOver, setIsMouseOver] = useState(false)

  useEffect(() => {
    if (cardRef.current) {
      const { left, width } = cardRef.current.getBoundingClientRect()
      setLeft(left)
      setLocalWidth(width)
    }
  }, [])

  const mouseMoveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()

    const { clientX } = event
    if (cardRef.current) {
      const relativeX = clientX - left
      setWidthPercentage((relativeX / localWidth) * 100)
    }
  }

  const mouseLeaveHandler = () => {
    setIsMouseOver(false)
    setWidthPercentage(0)
  }

  const mouseEnterHandler = () => {
    setIsMouseOver(true)
  }

  const rotateDeg = (widthPercentage - 50) * 0.1

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseMove={mouseMoveHandler}
      onMouseLeave={mouseLeaveHandler}
      ref={cardRef}
      className={cn(
        "relative w-full overflow-hidden rounded-lg border border-foreground/10 bg-background p-8",
        className
      )}
    >
      {children}

      <div className="relative flex h-40 items-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
          }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-20 flex items-center overflow-hidden bg-foreground text-background"
        >
          <p
            style={{
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
            }}
            className="py-10 text-base font-bold sm:text-[3rem]"
          >
            {text}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-50 h-40 w-[8px] bg-gradient-to-b from-transparent via-foreground to-transparent"
        />

        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text py-10 text-base font-bold text-transparent sm:text-[3rem]">
            {revealText}
          </p>
        </div>
      </div>
    </div>
  )
}

