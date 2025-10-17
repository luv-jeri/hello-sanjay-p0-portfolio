"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar, Download, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LampContainer } from "@/components/ui/lamp"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import { MovingBorder } from "@/components/ui/moving-border"

export function Hero() {
  const words = [
    { text: "Build", className: "text-cyan-500" },
    { text: "it.", className: "text-foreground" },
    { text: "Ship", className: "text-purple-500" },
    { text: "it.", className: "text-foreground" },
    { text: "Scale", className: "text-pink-500" },
    { text: "it.", className: "text-foreground" },
  ]

  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-50 mx-auto max-w-5xl text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 text-sm font-medium backdrop-blur-sm shadow-lg shadow-cyan-500/20"
        >
          <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
          <span>Available for new opportunities</span>
        </motion.div>

        {/* Typewriter Heading */}
        <TypewriterEffect words={words} />

        {/* Subheading with Highlight - MUCH BIGGER */}
        <HeroHighlight>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="mx-auto mt-12 max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground/90 leading-tight"
          >
            I design, build, and ship{" "}
            <Highlight className="text-foreground font-bold">
              revenue-critical platforms
            </Highlight>{" "}
            from concept to production.
          </motion.h2>
        </HeroHighlight>

        {/* Description - BIGGER */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mx-auto mt-8 max-w-3xl text-lg sm:text-xl md:text-2xl text-foreground/70 leading-relaxed"
        >
          Full-stack execution with <strong className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-bold">TypeScript</strong>, <strong className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">React/Next.js</strong>, and{" "}
          <strong className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-bold">Firebase/GCP</strong>. From editor-grade UIs to micro-frontends, I deliver production outcomes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MovingBorder duration={3000} className="px-6 py-3">
            <Link href="/contact" className="flex items-center gap-2 text-sm font-semibold">
              <Calendar className="h-5 w-5" />
              Schedule a Call
            </Link>
          </MovingBorder>

          <Button variant="outline" size="lg" className="group" asChild>
            <Link href="/projects">
              <Zap className="h-5 w-5" />
              View Case Studies
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button variant="ghost" size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        {/* Stats - BIGGER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="mt-20 grid grid-cols-3 gap-12 border-t border-foreground/10 pt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="rounded-xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent p-4 transition-all hover:shadow-xl hover:shadow-cyan-500/20"
          >
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl mb-2">7+</div>
            <div className="text-base md:text-lg text-foreground/60">Years Experience</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="rounded-xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent p-4 transition-all hover:shadow-xl hover:shadow-purple-500/20"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl mb-2">50+</div>
            <div className="text-base md:text-lg text-foreground/60">Projects Delivered</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="rounded-xl bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-transparent p-4 transition-all hover:shadow-xl hover:shadow-emerald-500/20"
          >
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl mb-2">10k+</div>
            <div className="text-base md:text-lg text-foreground/60">Users Impacted</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </LampContainer>
  )
}
