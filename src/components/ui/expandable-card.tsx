"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function ExpandableCard({
  title,
  description,
  expandedContent,
  icon,
  className,
}: {
  title: string
  description: string
  expandedContent: React.ReactNode
  icon?: React.ReactNode
  className?: string
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-foreground/10 bg-muted transition-all hover:shadow-lg",
        className
      )}
      layout
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {icon && <div className="mb-3">{icon}</div>}
            <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
            <p className="text-sm text-foreground/70">{description}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-5 w-5 text-foreground/50" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-foreground/10 p-6 pt-4">
              {expandedContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
