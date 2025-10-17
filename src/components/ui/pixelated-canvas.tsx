"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function PixelatedCanvas({
  src,
  width = 400,
  height = 400,
  cellSize = 8,
  distortionRadius = 100,
  className,
}: {
  src: string
  width?: number
  height?: number
  cellSize?: number
  distortionRadius?: number
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = src
    imageRef.current = img

    img.onload = () => {
      canvas.width = width
      canvas.height = height
      drawPixelated()
    }

    const drawPixelated = () => {
      if (!imageRef.current || !ctx) return

      ctx.clearRect(0, 0, width, height)
      ctx.drawImage(imageRef.current, 0, 0, width, height)

      const imageData = ctx.getImageData(0, 0, width, height)
      const pixels = imageData.data

      ctx.clearRect(0, 0, width, height)

      for (let y = 0; y < height; y += cellSize) {
        for (let x = 0; x < width; x += cellSize) {
          const pixelIndexPosition = (x + y * width) * 4

          const r = pixels[pixelIndexPosition]
          const g = pixels[pixelIndexPosition + 1]
          const b = pixels[pixelIndexPosition + 2]
          const a = pixels[pixelIndexPosition + 3]

          // Calculate distance from mouse
          const dx = x - mouseRef.current.x
          const dy = y - mouseRef.current.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          let currentCellSize = cellSize

          // Apply distortion based on distance from mouse
          if (distance < distortionRadius) {
            const distortionFactor = 1 - distance / distortionRadius
            currentCellSize = cellSize * (1 + distortionFactor * 2)
          }

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a / 255})`
          ctx.fillRect(x, y, currentCellSize, currentCellSize)
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const scaleX = width / rect.width
      const scaleY = height / rect.height

      mouseRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      }
      drawPixelated()
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
      drawPixelated()
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // Initial draw
    if (img.complete) {
      drawPixelated()
    }

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [src, width, height, cellSize, distortionRadius])

  return (
    <canvas
      ref={canvasRef}
      className={cn("cursor-pointer", className)}
      style={{
        width: "100%",
        height: "100%",
        maxWidth: `${width}px`,
        maxHeight: `${height}px`,
      }}
    />
  )
}

