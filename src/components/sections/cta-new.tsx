"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Calendar, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { copy } from "@/content/copy"

export function CTANew() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />

      {/* Animated Orbs */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </>
      )}

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl"
        >
          {/* Glass Container */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              animate={
                !shouldReduceMotion
                  ? {
                      x: ["100%", "-100%"],
                    }
                  : undefined
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10 p-12 text-center md:p-16">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4 text-4xl font-bold tracking-tight md:text-5xl"
              >
                {copy.cta.heading}
              </motion.h2>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-10 text-lg text-foreground/70 md:text-xl"
              >
                {copy.cta.subheading}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <HoverBorderGradient containerClassName="rounded-lg" duration={1}>
                  <Button size="lg" className="gap-2" asChild>
                    <a href="/contact" className="group">
                      <Calendar className="h-5 w-5 transition-transform group-hover:scale-110" />
                      {copy.cta.scheduleCall}
                    </a>
                  </Button>
                </HoverBorderGradient>

                <Button
                  variant="outline"
                  size="lg"
                  className="group gap-2 border-foreground/20 backdrop-blur-sm hover:border-foreground/40"
                  asChild
                >
                  <a href="mailto:hellosanjaygautam@gmail.com">
                    <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
                    {copy.cta.sendEmail}
                  </a>
                </Button>
              </motion.div>

              {/* Extra Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/60"
              >
                <a
                  href="/projects"
                  className="group inline-flex items-center gap-2 transition-colors hover:text-foreground/80"
                >
                  View case studies
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="h-4 w-px bg-foreground/20" />
                <a
                  href="/resume.pdf"
                  download
                  className="group inline-flex items-center gap-2 transition-colors hover:text-foreground/80"
                >
                  Download résumé
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
