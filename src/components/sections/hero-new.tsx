"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextShimmer } from "@/components/ui/text-shimmer"
import { RetroGrid } from "@/components/ui/retro-grid"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { TerminalHint } from "@/components/terminal"
import { copy } from "@/content/copy"
import { cn } from "@/lib/utils"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as any, // Custom easing for smooth motion
    }
  },
}

// const floatingAnimation = {
//   y: [0, -20, 0],
//   transition: {
//     duration: 3,
//     repeat: Infinity,
//     ease: "easeInOut" as any,
//   },
// }

export function HeroNew() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20 md:pt-24">
      {/* Retro Grid Background */}
      <RetroGrid
        className={cn(
          "absolute inset-0 z-0 opacity-70",
          shouldReduceMotion && "[&>div]:!animate-none opacity-40"
        )}
      />

      {/* Subtle radial gradient overlay for text contrast */}
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,transparent_0%,hsl(var(--background)/0.8)_100%)]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-5xl text-center"
        >
          {/* Floating Badge with Animated Gradient */}
          <motion.div variants={item} className="mb-8 flex justify-center">
            <div className="inline-flex">
              <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                <span
                  className={cn(
                    "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                  )}
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitClipPath: "padding-box",
                  }}
                />
                {/* <Sparkles className="mr-2 h-4 w-4 relative z-10" /> */}
                <AnimatedGradientText className="text-sm font-medium">

                 🚀 | {copy.hero.badge}
                </AnimatedGradientText>
              </div>
            </div>
          </motion.div>

          {/* Main Heading with Shimmer */}
          <motion.div variants={item}>
            <h1 className="mb-8 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="inline-block">{copy.hero.titlePart1}</span>
              <br />
              <TextShimmer
                as="span"
                className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                duration={3}
              >
                {copy.hero.titlePart2}
              </TextShimmer>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="mb-6 text-xl text-foreground/80 sm:text-2xl md:text-3xl"
          >
            {copy.hero.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={item}
            className="mx-auto mb-12 max-w-3xl text-base text-foreground/60 md:text-lg"
          >
            {copy.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <HoverBorderGradient containerClassName="rounded-lg" duration={1}>
              <Button size="lg" className="gap-2" asChild>
                <a href="/contact" className="group">
                  <Calendar className="h-5 w-5 transition-transform group-hover:scale-110" />
                  {copy.cta.requestInterview}
                </a>
              </Button>
            </HoverBorderGradient>

            <Button
              variant="outline"
              size="lg"
              className="group gap-2 border-foreground/20 backdrop-blur-sm hover:border-foreground/40"
              asChild
            >
              <a href="/projects">
                {copy.cta.seeCaseStudies}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="group gap-2"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                {copy.cta.downloadResume}
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          {!shouldReduceMotion && (
            <motion.div
              variants={item}
              className="mt-20"
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto h-8 w-5 rounded-full border-2 border-foreground/20 p-1"
              >
                <motion.div
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-2 w-2 rounded-full bg-foreground/40"
                />
              </motion.div>
            </motion.div>
          )}

          {/* Terminal Hint */}
          <motion.div variants={item} className="mt-8">
            <TerminalHint className="opacity-60 hover:opacity-100" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
