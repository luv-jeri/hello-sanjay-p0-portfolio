"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function HeroHighlight({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {children}
    </div>
  )
}

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block rounded-lg bg-gradient-to-r from-primary to-accent px-1 pb-1",
        className
      )}
    >
      {children}
    </motion.span>
  )
}
