"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Calendar, Mail, ArrowRight, FileText } from "lucide-react"
import { copy } from "@/content/copy"
import { RetroGrid } from "@/components/ui/retro-grid"

export function CTANew() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-neutral-900 py-20 dark:bg-neutral-950 md:py-32">
      {/* Retro Grid Background */}
      <RetroGrid
        className="absolute inset-0"
        angle={65}
      />

      {/* Animated Gradient Orbs */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
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

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl"
        >
          {/* Main Content */}
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-flex"
            >
              <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm">
                <span className="mr-2">✨</span>
                Let's build something amazing together
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {copy.cta.heading}
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-10 text-lg text-neutral-300 md:text-xl"
            >
              {copy.cta.subheading}
            </motion.p>

            {/* CTA Buttons Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12 grid gap-4 sm:grid-cols-2 md:gap-6"
            >
              {/* Primary CTA - Schedule Call */}
              <a
                href="/contact"
                className="group relative overflow-hidden rounded-xl border border-blue-500/50 bg-blue-600 p-6 text-left shadow-lg transition-all hover:border-blue-400 hover:bg-blue-500 hover:shadow-xl"
              >
                <div className="relative z-10">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-white/20 p-2">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Schedule a Call</h3>
                  </div>
                  <p className="mb-4 text-sm text-blue-100">
                    Let's discuss your project requirements and explore how we can work together
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    Book a meeting
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={!shouldReduceMotion ? {
                    x: ["100%", "-100%"],
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </a>

              {/* Secondary CTA - Email */}
              <a
                href="mailto:hellosanjaygautam@gmail.com"
                className="group relative overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800/50 p-6 text-left backdrop-blur-sm transition-all hover:border-neutral-600 hover:bg-neutral-800 hover:shadow-xl"
              >
                <div className="relative z-10">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-neutral-700 p-2">
                      <Mail className="h-6 w-6 text-neutral-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Send an Email</h3>
                  </div>
                  <p className="mb-4 text-sm text-neutral-400">
                    Prefer email? Drop me a message and I'll get back to you within 24 hours
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-neutral-300">
                    hellosanjaygautam@gmail.com
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Extra Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400"
            >
              <a
                href="/projects"
                className="group inline-flex items-center gap-2 transition-colors hover:text-neutral-300"
              >
                <FileText className="h-4 w-4" />
                View case studies
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <span className="h-4 w-px bg-neutral-700" />

              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 transition-colors hover:text-neutral-300"
              >
                <FileText className="h-4 w-4" />
                Download résumé
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
