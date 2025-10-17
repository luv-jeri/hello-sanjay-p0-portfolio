"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function FocusCards({
  cards,
}: {
  cards: {
    title: string
    description: string
    icon?: React.ReactNode
    content?: React.ReactNode
  }[]
}) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={cn(
            "relative overflow-hidden rounded-3xl bg-muted transition-all duration-300",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
          )}
        >
          <div className="relative z-10 p-8">
            {card.icon && (
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                {card.icon}
              </div>
            )}
            <h3 className="mb-2 text-2xl font-bold">{card.title}</h3>
            <p className="text-sm text-foreground/70">{card.description}</p>
            {card.content && <div className="mt-4">{card.content}</div>}
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent opacity-0 transition-opacity duration-300"
            animate={{
              opacity: hovered === index ? 1 : 0,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
