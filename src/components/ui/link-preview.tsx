"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"

export function LinkPreview({
  children,
  url,
  className,
}: {
  children: React.ReactNode
  url: string
  className?: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative inline-block">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        <ExternalLink className="ml-1 inline-block h-3 w-3 opacity-50" />
      </a>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-0 z-50 mb-2 w-80 rounded-lg border border-foreground/10 bg-background p-4 shadow-xl"
          >
            <div className="mb-2 flex items-start justify-between">
              <h4 className="text-sm font-semibold">{url.replace(/^https?:\/\//, "")}</h4>
              <ExternalLink className="h-4 w-4 text-foreground/50" />
            </div>
            <p className="text-xs text-foreground/70">
              Click to open in a new tab
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
