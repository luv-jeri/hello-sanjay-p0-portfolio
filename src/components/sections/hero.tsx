"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { copy } from "@/content/copy"

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
            {copy.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {copy.hero.titlePart1}{" "}
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {copy.hero.titlePart2}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-8 text-lg text-foreground/70 sm:text-xl md:text-2xl"
        >
          {copy.hero.subtitle}
        </motion.p>

        <motion.p
          variants={item}
          className="mb-12 text-base text-foreground/60 md:text-lg"
        >
          {copy.hero.description}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" asChild>
            <a href="/contact">
              <Calendar className="h-5 w-5" />
              {copy.cta.requestInterview}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/projects">
              {copy.cta.seeCaseStudies}
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download className="h-5 w-5" />
              {copy.cta.downloadResume}
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
