"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }))

  return (
    <div className={cn("flex flex-wrap justify-center space-x-2 my-8 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold", className)}>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              key={`char-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: idx * 0.5 + index * 0.05,
              }}
              className={cn("text-foreground", word.className)}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block h-12 w-1.5 rounded-sm bg-primary md:h-16 md:w-2",
          cursorClassName
        )}
      ></motion.span>
    </div>
  )
}
