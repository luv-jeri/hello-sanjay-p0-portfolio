"use client"

import { motion } from "framer-motion"

const companies = [
  "HighLevel",
  "ReNew Power",
  "Climate Connect Digital",
  "Haspr",
  "Let's Upgrade",
  "Newton School",
  "Coding Ninjas",
  "B.Tech, RGPV",
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
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companies.map((company) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-lg font-semibold text-foreground/40 transition-colors hover:text-foreground/70"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
