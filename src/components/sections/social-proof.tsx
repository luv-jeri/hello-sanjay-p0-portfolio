"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const companies = [
  {
    name: "HighLevel",
    role: "SDE III - Core Products",
    logo: "/company_logo/goHighLevel.webp"
  },
  {
    name: "ReNew Power",
    role: "SDE 3 - Climate Tech",
    logo: "/company_logo/ReNew.svg"
  },
  {
    name: "Haspr",
    role: "Senior Full-Stack",
    logo: "/company_logo/haspr logo.svg"
  },
  {
    name: "Let's Upgrade",
    role: "Full-Stack Trainer",
    logo: "/company_logo/lets upgrade.png"
  },
  {
    name: "Newton School",
    role: "Technical Instructor",
    logo: "/company_logo/newton.avif"
  },
  {
    name: "Coding Ninjas",
    role: "Mentor & Trainer",
    logo: "/company_logo/conding ninjas.svg"
  },
]

export function SocialProof() {
  return (
    <section className="border-t border-foreground/10 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-8 text-sm font-medium uppercase tracking-wider text-foreground/60">
            Worked at / Built for / Trained with
          </p>

          {/* Infinite Scroll Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-infinite-scroll gap-12 py-8">
              {[...companies, ...companies].map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex min-w-[200px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-gradient-to-r from-cyan-500/20 to-purple-500/20 bg-gradient-to-br from-muted via-muted/50 to-muted p-6 shadow-lg transition-all hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  {company.logo ? (
                    <div className="relative h-16 w-40">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        fill
                        className="object-contain brightness-0 dark:brightness-100 dark:invert"
                      />
                    </div>
                  ) : (
                    <div className="text-xl font-bold text-foreground/80">
                      {company.name}
                    </div>
                  )}
                  <p className="text-xs text-foreground/60">{company.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
