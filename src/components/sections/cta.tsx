"use client"

import { motion } from "framer-motion"
import { Calendar, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
import { copy } from "@/content/copy"

export function CTA() {
  return (
    <section className="border-t border-foreground/10 bg-foreground/5 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {copy.cta.heading}
          </h2>
          <p className="mb-8 text-lg text-foreground/70">
            {copy.cta.subheading}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#contact">
                <Calendar className="h-5 w-5" />
                {copy.cta.scheduleCall}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={`mailto:${SITE_CONFIG.email}`}>
                <Mail className="h-5 w-5" />
                {copy.cta.sendEmail}
              </a>
            </Button>
          </div>

          <div className="mt-8 text-sm text-foreground/60">
            <p>
              {SITE_CONFIG.location} · {SITE_CONFIG.timezone}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
