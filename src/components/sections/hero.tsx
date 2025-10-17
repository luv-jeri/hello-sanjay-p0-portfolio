"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-4xl text-center"
      >
        <motion.div variants={item} className="mb-6">
          <span className="inline-block rounded-full bg-foreground/10 px-4 py-1.5 text-sm font-medium">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Build it. Ship it.{" "}
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Scale it.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-8 text-lg text-foreground/70 sm:text-xl md:text-2xl"
        >
          I lead modern web and mobile builds that scale and convert.
        </motion.p>

        <motion.p
          variants={item}
          className="mb-12 text-base text-foreground/60 md:text-lg"
        >
          Micro-frontends, SSR, and real-time UX without the drag.
          React, Next.js, TypeScript, Node, Firebase, GCP.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" asChild>
            <a href="/contact">
              <Calendar className="h-5 w-5" />
              Request an interview
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/projects">
              See case studies
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download className="h-5 w-5" />
              Download résumé
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
