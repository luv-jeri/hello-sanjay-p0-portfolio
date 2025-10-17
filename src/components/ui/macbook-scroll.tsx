"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export function MacbookScroll({
  src,
  title,
  badge,
  showGradient = true,
}: {
  src: string
  title?: string | React.ReactNode
  badge?: React.ReactNode
  showGradient?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true)
    }
  }, [])

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  )
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  )
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500])
  const rotate = useTransform(scrollYProgress, [0.1, 0.3], [-28, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <div
      ref={ref}
      className="relative flex min-h-[150vh] shrink-0 scale-[0.35] transform flex-col items-center justify-start py-0 sm:scale-50 md:scale-100 md:py-80"
    >
      <motion.div
        style={{
          scaleX,
          scaleY,
          translateY: translate,
          rotateX: rotate,
          opacity,
        }}
        className="relative mx-auto h-[30rem] w-full max-w-5xl"
      >
        {/* Lid */}
        <div className="relative h-full w-full">
          <Lid src={src} />
        </div>

        {/* Base */}
        <div className="absolute inset-x-0 bottom-0 z-40 h-2 w-full rounded-2xl bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800" />

        {/* Keyboard Base */}
        <div className="absolute inset-x-0 -bottom-12 z-40 h-14 w-full rounded-b-3xl bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-800 dark:to-gray-900">
          <div className="mx-auto h-0.5 w-1/3 bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600" />
        </div>
      </motion.div>

      {showGradient && (
        <div className="absolute inset-x-0 bottom-0 z-0 h-40 w-full scale-[1.3] rounded-full bg-gradient-to-t from-blue-500/20 via-transparent to-transparent blur-3xl" />
      )}

      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          {typeof title === "string" ? (
            <h2 className="text-4xl font-bold text-foreground">{title}</h2>
          ) : (
            title
          )}
          {badge && <div className="mt-4">{badge}</div>}
        </motion.div>
      )}
    </div>
  )
}

function Lid({ src }: { src: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      {/* Bezel */}
      <div className="absolute inset-0 rounded-2xl border-8 border-gray-300 dark:border-gray-700" />

      {/* Screen */}
      <div className="relative m-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] overflow-hidden rounded-lg bg-black">
        <Image
          src={src}
          alt="Macbook screen"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Screen Glare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
      </div>

      {/* Camera */}
      <div className="absolute left-1/2 top-4 h-2 w-2 -translate-x-1/2 rounded-full bg-gray-600" />
    </div>
  )
}
