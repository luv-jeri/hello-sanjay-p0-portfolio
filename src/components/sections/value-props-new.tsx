"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Briefcase, Users, Wrench, CheckCircle2, ArrowRight } from "lucide-react"
import { copy } from "@/content/copy"
import { cn } from "@/lib/utils"

const valueProps = [
  {
    icon: Briefcase,
    title: copy.valueProps.cto.title,
    items: [
      copy.valueProps.cto.item1,
      copy.valueProps.cto.item2,
      copy.valueProps.cto.item3,
    ],
    gradient: "from-blue-500 via-blue-600 to-cyan-500",
    iconColor: "text-blue-600 dark:text-blue-400",
    accentColor: "bg-blue-500",
  },
  {
    icon: Users,
    title: copy.valueProps.hr.title,
    items: [
      copy.valueProps.hr.item1,
      copy.valueProps.hr.item2,
      copy.valueProps.hr.item3,
    ],
    gradient: "from-purple-500 via-violet-600 to-pink-500",
    iconColor: "text-purple-600 dark:text-purple-400",
    accentColor: "bg-purple-500",
  },
  {
    icon: Wrench,
    title: copy.valueProps.em.title,
    items: [
      copy.valueProps.em.item1,
      copy.valueProps.em.item2,
      copy.valueProps.em.item3,
    ],
    gradient: "from-amber-500 via-orange-600 to-orange-500",
    iconColor: "text-orange-600 dark:text-orange-400",
    accentColor: "bg-orange-500",
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
    <section className="relative overflow-hidden border-y border-neutral-200/50 bg-neutral-50 py-20 dark:border-neutral-800/50 dark:bg-neutral-950 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-4xl">
            {copy.valueProps.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
            {copy.valueProps.subheading}
          </p>
        </motion.div>

        {/* Value Props Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3 md:gap-8"
        >
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon
            return (
              <motion.div
                key={prop.title}
                variants={item}
                className="group relative h-full overflow-hidden rounded-2xl border border-neutral-200/50 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-neutral-800/50 dark:bg-neutral-900 md:p-8"
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
              >
                {/* Top Accent Line */}
                <div className={cn(
                  "absolute left-0 top-0 h-1 w-full bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                  prop.gradient
                )} />

                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex rounded-xl bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-purple-500/10 p-4 dark:from-blue-500/20 dark:via-violet-500/20 dark:to-purple-500/20">
                    <Icon className={cn("h-12 w-12 md:h-14 md:w-14", prop.iconColor)} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-6 text-xl font-semibold leading-tight text-neutral-900 dark:text-neutral-50 md:text-2xl">
                  {prop.title}
                </h3>

                {/* Items */}
                <ul className="space-y-3">
                  {prop.items.map((itemText, itemIdx) => (
                    <motion.li
                      key={itemIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 + itemIdx * 0.1 }}
                      className="flex gap-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-400"
                    >
                      <CheckCircle2 className={cn("mt-0.5 h-5 w-5 shrink-0", prop.iconColor)} />
                      <span>{itemText}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Pulsing Indicator */}
                <div className="absolute bottom-6 right-6">
                  <div className={cn("relative h-3 w-3 rounded-full", prop.accentColor)}>
                    <motion.div
                      className={cn("absolute inset-0 rounded-full", prop.accentColor)}
                      animate={shouldReduceMotion ? {} : {
                        scale: [1, 2, 2],
                        opacity: [0.8, 0, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
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
          className="mt-12 text-center md:mt-16"
        >
          <p className="mb-4 text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
            Ready to bring technical excellence to your team?
          </p>
          <motion.a
            href="/contact"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-blue-600 transition-all hover:gap-3 dark:text-blue-400"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Let's talk
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
