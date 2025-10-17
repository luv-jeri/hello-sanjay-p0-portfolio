"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Compare({
  firstImage,
  secondImage,
  firstImageAlt = "First image",
  secondImageAlt = "Second image",
  className,
  firstImageClassName,
  secondImageClassName,
  initialSliderPercentage = 50,
  slideMode = "hover",
}: {
  firstImage: string
  secondImage: string
  firstImageAlt?: string
  secondImageAlt?: string
  className?: string
  firstImageClassName?: string
  secondImageClassName?: string
  initialSliderPercentage?: number
  slideMode?: "hover" | "drag"
}) {
  const [sliderPosition, setSliderPosition] = useState(initialSliderPercentage)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left
    const percent = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percent)))
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (slideMode === "hover" || isDragging) {
      const rect = e.currentTarget.getBoundingClientRect()
      handleMove(e.clientX, rect)
    }
  }

  const handleMouseDown = () => {
    if (slideMode === "drag") {
      setIsDragging(true)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div
      className={cn("group relative w-full overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Second Image (After) */}
      <div className="relative h-full w-full">
        <Image
          src={secondImage}
          alt={secondImageAlt}
          fill
          className={cn("object-cover", secondImageClassName)}
        />
      </div>

      {/* First Image (Before) with clip */}
      <div
        className="absolute inset-0 z-10 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <Image
          src={firstImage}
          alt={firstImageAlt}
          fill
          className={cn("object-cover", firstImageClassName)}
        />
      </div>

      {/* Slider */}
      <div
        className="absolute inset-y-0 z-20 w-1 cursor-ew-resize bg-gradient-to-b from-transparent via-foreground to-transparent"
        style={{
          left: `${sliderPosition}%`,
        }}
      >
        {/* Slider Handle */}
        <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-foreground bg-background shadow-xl">
          <div className="flex h-full w-full items-center justify-center">
            <svg
              className="h-4 w-4 text-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex justify-between p-4">
        <div className="rounded-md bg-background/80 px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
          Before
        </div>
        <div className="rounded-md bg-background/80 px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
          After
        </div>
      </div>
    </div>
  )
}
