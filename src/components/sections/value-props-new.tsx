"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Briefcase, Users, Wrench, CheckCircle2 } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { copy } from "@/content/copy"

const valueProps = [
  {
    icon: Briefcase,
    title: copy.valueProps.cto.title,
    items: [
      copy.valueProps.cto.item1,
      copy.valueProps.cto.item2,
      copy.valueProps.cto.item3,
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: copy.valueProps.hr.title,
    items: [
      copy.valueProps.hr.item1,
      copy.valueProps.hr.item2,
      copy.valueProps.hr.item3,
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Wrench,
    title: copy.valueProps.em.title,
    items: [
      copy.valueProps.em.item1,
      copy.valueProps.em.item2,
      copy.valueProps.em.item3,
    ],
    gradient: "from-amber-500 to-orange-500",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function ValuePropsNew() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-y border-foreground/10 bg-muted/30 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent" />

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
            {copy.valueProps.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/70">
            {copy.valueProps.subheading}
          </p>
        </motion.div>

        {/* Value Props Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon
            return (
              <motion.div key={prop.title} variants={item}>
                <GlassCard className="group h-full p-8">
                  {/* Icon */}
                  <motion.div
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${prop.gradient} p-0.5`}
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
                    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-background">
                      <Icon className={`h-8 w-8 bg-gradient-to-br ${prop.gradient} bg-clip-text text-transparent`} />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="mb-6 text-xl font-semibold leading-tight transition-colors duration-300 group-hover:text-foreground/90">
                    {prop.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-4">
                    {prop.items.map((itemText, itemIdx) => (
                      <motion.li
                        key={itemIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 + itemIdx * 0.1 }}
                        className="flex gap-3 text-sm text-foreground/70"
                      >
                        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 bg-gradient-to-br ${prop.gradient} bg-clip-text text-transparent`} />
                        <span className="leading-relaxed">{itemText}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Bottom Accent */}
                  <motion.div
                    className={`mt-8 h-1 rounded-full bg-gradient-to-r ${prop.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                  />
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-foreground/70">
            Ready to bring technical excellence to your team?
          </p>
          <motion.a
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 text-lg font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all hover:gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Let's talk
            <svg
              className="h-5 w-5 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

