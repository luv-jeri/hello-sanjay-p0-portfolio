"use client"

import { motion, useReducedMotion } from "framer-motion"
import { copy } from "@/content/copy"
import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const companies = [
  { name: "HighLevel", logo: "/company_logo/goHighLevel.webp" },
  { name: "ReNew Power", logo: "/company_logo/ReNew.svg" },
  { name: "Haspr", logo: "/company_logo/haspr logo.svg" },
  { name: "Let's Upgrade", logo: "/company_logo/lets upgrade.png" },
  { name: "Newton School", logo: "/company_logo/newton.avif" },
  { name: "Coding Ninjas", logo: "/company_logo/conding ninjas.svg" },
  { name: "Zealie", logo: "/company_logo/zealie_logo.webp" },
]

export function SocialProofNew() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-y border-foreground/10 bg-muted/30 py-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-foreground/60">
            {copy.socialProof.heading}
          </p>
        </motion.div>

        {/* Marquee with Company Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Marquee pauseOnHover className="[--duration:40s]">
            {companies.map((company, idx) => (
              <div
                key={`${company.name}-${idx}`}
                className="group relative mx-8 flex h-20 w-40 items-center justify-center rounded-lg border border-foreground/10 bg-background/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-foreground/30 hover:bg-background/80 hover:shadow-lg"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />

                <div className="relative flex h-full w-full items-center justify-center">
                  {company.logo.endsWith('.svg') || company.logo.endsWith('.webp') || company.logo.endsWith('.png') || company.logo.endsWith('.avif') ? (
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={120}
                      height={60}
                      className="max-h-12 w-auto object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            { value: "7+", label: "Years Experience" },
            { value: "200+", label: "Developers Trained" },
            { value: "15+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
