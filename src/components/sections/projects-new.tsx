"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
import { copy } from "@/content/copy"

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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
}

export function ProjectsNew() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {copy.featuredProjects.heading}
          </h2>
          <p className="max-w-2xl text-lg text-foreground/70">
            {copy.featuredProjects.subheading}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {copy.featuredProjects.projects.map((project, idx) => (
            <motion.div key={project.title} variants={item}>
              <Link href={project.href} className="group block h-full">
                <GlassCard className="h-full overflow-hidden p-0">
                  {/* Project Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                    {/* Hover Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      animate={
                        !shouldReduceMotion
                          ? {
                              background: [
                                "linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))",
                                "linear-gradient(to right, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))",
                                "linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
                              ],
                            }
                          : undefined
                      }
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold transition-colors duration-300 group-hover:text-foreground/90">
                      {project.title}
                    </h3>

                    <p className="mb-4 line-clamp-3 text-sm text-foreground/60">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-foreground/5 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-foreground/5 text-xs"
                        >
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Impact */}
                    <div className="mb-4 rounded-lg border border-foreground/10 bg-foreground/5 p-3">
                      <p className="text-xs font-medium text-foreground/60">
                        {copy.featuredProjects.impactLabel}
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground/80">
                        {project.impact}
                      </p>
                    </div>

                    {/* Link */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground/60 transition-colors group-hover:text-foreground/80">
                        {copy.featuredProjects.exploreButton}
                      </span>
                      <ArrowRight className="h-5 w-5 text-foreground/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground/80" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="group gap-2 border-foreground/20 backdrop-blur-sm hover:border-foreground/40"
            asChild
          >
            <Link href="/projects">
              {copy.featuredProjects.viewAllButton}
              <ExternalLink className="h-5 w-5 transition-transform group-hover:scale-110" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
