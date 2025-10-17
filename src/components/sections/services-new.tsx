"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  Code2,
  Smartphone,
  Layers,
  Zap,
  Database,
  Globe,
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Next.js, Vue 3, TypeScript — building modern, responsive, and performant user interfaces.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layers,
    title: "Micro-frontends",
    description: "Module Federation architecture for scalable, independently deployable frontend modules.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Web to Mobile",
    description: "Convert web apps to mobile with Capacitor — achieving cross-platform parity without duplication.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Core Web Vitals, SSR, lazy loading, code splitting — delivering 60fps experiences at scale.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "Node.js, Nest.js, Firebase, GCP — building robust server-side architectures and APIs.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "Full-Stack Solutions",
    description: "End-to-end ownership from architecture to deployment — web and mobile parity included.",
    gradient: "from-indigo-500 to-violet-500",
  },
]

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
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
}

export function ServicesNew() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            What I{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Build
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/70">
            Modern full-stack solutions with a focus on performance, scalability, and developer experience
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} variants={item}>
                <GlassCard className="group h-full p-8">
                  {/* Icon with Gradient */}
                  <motion.div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} p-0.5`}
                    whileHover={
                      !shouldReduceMotion
                        ? {
                            scale: 1.1,
                            rotate: 5,
                          }
                        : undefined
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-background">
                      <Icon className={`h-6 w-6 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-semibold transition-colors duration-300 group-hover:text-foreground/90">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/60">
                    {service.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className={`mt-6 h-1 rounded-full bg-gradient-to-r ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

