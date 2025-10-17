"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Mail, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { MovingBorder } from "@/components/ui/moving-border"
import { Highlight } from "@/components/ui/hero-highlight"
import { SITE_CONFIG } from "@/lib/constants"

export function CTA() {
  return (
    <section className="border-t border-foreground/10 bg-gradient-to-b from-background via-muted/30 to-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <CardSpotlight spotlightColor="rgba(139, 92, 246, 0.15)">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium"
              >
                <Sparkles className="h-4 w-4 text-accent" />
                <span>Let&apos;s Collaborate</span>
              </motion.div>

              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                Let&apos;s build{" "}
                <Highlight className="text-foreground">
                  something great
                </Highlight>
              </h2>

              <p className="mb-8 text-lg text-foreground/70 md:text-xl">
                I respond fast and keep things simple. Choose what works for you.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <MovingBorder duration={3000} className="px-8 py-4">
                  <Link href="/contact" className="flex items-center gap-2 text-sm font-semibold">
                    <Calendar className="h-5 w-5" />
                    Schedule a Call
                  </Link>
                </MovingBorder>

                <Button variant="outline" size="lg" className="group" asChild>
                  <a href={`mailto:${SITE_CONFIG.email}`}>
                    <Mail className="h-5 w-5" />
                    Send an Email
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              <div className="mt-8 text-sm text-foreground/60">
                <p>
                  {SITE_CONFIG.location} · {SITE_CONFIG.timezone}
                </p>
                <p className="mt-2">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </CardSpotlight>
        </motion.div>
      </div>
    </section>
  )
}
