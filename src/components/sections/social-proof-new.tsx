"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Sparkles, GraduationCap, Rocket, Heart } from "lucide-react"
import { copy } from "@/content/copy"
import { Marquee } from "@/components/ui/marquee"
import { NumberTicker } from "@/components/ui/number-ticker"
import Image from "next/image"
import { cn } from "@/lib/utils"

const companies = [
  { name: "HighLevel", logo: "/company_logo/goHighLevel.webp" },
  { name: "ReNew Power", logo: "/company_logo/ReNew.svg" },
  { name: "Haspr", logo: "/company_logo/haspr logo.svg" },
  { name: "Let's Upgrade", logo: "/company_logo/lets upgrade.png" },
  { name: "Newton School", logo: "/company_logo/newton.avif" },
  { name: "Coding Ninjas", logo: "/company_logo/conding ninjas.svg" },
  { name: "Zealie", logo: "/company_logo/zealie_logo.webp" },
]

const stats = [
  {
    icon: Sparkles,
    value: 7,
    suffix: "+",
    label: "Years Experience",
    description: "Building scalable products",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: GraduationCap,
    value: 200,
    suffix: "+",
    label: "Developers Trained",
    description: "MERN/MEAN stacks",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    value: 25,
    suffix: "+",
    label: "Projects Delivered",
    description: "From MVP to production",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Heart,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Quality first approach",
    color: "from-green-500 to-emerald-500",
  },
]

export function SocialProofNew() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-y border-foreground/10 bg-muted/30 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {copy.socialProof.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Building products that scale, training developers who deliver
          </p>
        </motion.div>

        {/* Company Logos Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Marquee pauseOnHover className="[--duration:40s]">
            {companies.map((company, idx) => (
              <div
                key={`${company.name}-${idx}`}
                className="group relative mx-8 flex h-24 w-44 items-center justify-center rounded-xl border border-foreground/10 bg-background/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-foreground/30 hover:bg-background/80 hover:shadow-lg"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />

                <div className="relative flex h-full w-full items-center justify-center">
                  {company.logo.endsWith('.svg') ||
                   company.logo.endsWith('.webp') ||
                   company.logo.endsWith('.png') ||
                   company.logo.endsWith('.avif') ? (
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={140}
                      height={70}
                      className="max-h-14 w-auto object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  ) : (
                    <span className="text-lg font-semibold text-foreground/40 transition-colors duration-300 group-hover:text-foreground/70">
                      {company.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </Marquee>
        </motion.div>

        {/* Animated Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + idx * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300",
                  "hover:border-primary/50 hover:shadow-md"
                )}
              >
                {/* Background Gradient on Hover */}
                <div className={cn(
                  "absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10",
                  `bg-gradient-to-br ${stat.color}`
                )} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className={cn(
                      "rounded-xl bg-gradient-to-br p-3",
                      stat.color
                    )}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="mb-2 text-center">
                    <div className="flex items-baseline justify-center">
                      <NumberTicker
                        value={stat.value}
                        direction="up"
                        delay={0.5 + idx * 0.1}
                        className={cn(
                          "bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl",
                          stat.color
                        )}
                      />
                      <span className={cn(
                        "ml-1 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent md:text-4xl",
                        stat.color
                      )}>
                        {stat.suffix}
                      </span>
                    </div>
                  </div>

                  {/* Label */}
                  <p className="mb-1 text-center text-sm font-semibold text-foreground">
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p className="text-center text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Optional: Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Want to work together?{" "}
            <a
              href="/contact"
              className="font-semibold text-primary hover:underline"
            >
              Let's connect
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
