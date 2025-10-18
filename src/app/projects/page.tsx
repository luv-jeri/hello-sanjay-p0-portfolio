'use client'

import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { ExternalLink, ArrowUpRight, Calendar, Building2, Sparkles } from "lucide-react"
import { getFeaturedProjects, getNonFeaturedProjects } from "@/content/projects"
import { copy } from "@/content/copy"
import { CtaLink } from "@/components/cta-link"
import { BlurFade } from "@/components/ui/blur-fade"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { cn } from "@/lib/utils"

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

// ============================================================================
// PROJECTS PAGE COMPONENT
// ============================================================================

export default function ProjectsPage() {
  const featuredProjects = getFeaturedProjects()
  const otherProjects = getNonFeaturedProjects()

  return (
    <div className="relative overflow-hidden">
      {/* Ambient Background Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute -bottom-40 right-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl animate-pulse [animation-delay:4s]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Hero Section */}
          <BlurFade delay={0.1} inView>
            <section className="py-16 md:py-24 lg:py-32">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-5xl space-y-8"
              >
                {/* Overline */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0 }}
                >
                  <div className="inline-flex items-center gap-3 rounded-full border border-border/50 bg-card/50 px-4 py-2 backdrop-blur-sm">
                    <Sparkles className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium uppercase tracking-wider text-foreground/80">
                      Selected Work
                    </span>
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.15 }}
                  className="space-y-4"
                >
                  <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                    <span className="block bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                      Projects<span className="text-red-500">.</span>
                    </span>
                  </h1>
                  <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl max-w-3xl">
                    Meaningful work — crafted with precision, performance, and creativity.
                    From concept to production, each project tells a story of problem-solving and impact.
                  </p>
                </motion.div>
              </motion.div>
            </section>
          </BlurFade>

          {/* Featured Projects - Typography-First Editorial Layout */}
          <section className="space-y-32 md:space-y-48 pb-32">
            {featuredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0

              return (
                <BlurFade key={project.slug} delay={0.2 + idx * 0.1} inView>
                  <motion.article
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="relative"
                  >
                    {/* Project Layout Grid */}
                    <div className={cn(
                      "grid gap-12 lg:gap-20 items-center",
                      isEven ? "lg:grid-cols-[1.2fr_1fr]" : "lg:grid-cols-[1fr_1.2fr]"
                    )}>
                      {/* Text Content */}
                      <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
                        className={cn(
                          "space-y-8",
                          isEven ? "order-1" : "order-2"
                        )}
                      >
                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                          {project.company && (
                            <div className="flex items-center gap-2">
                              <Building2 className="h-4 w-4" />
                              <span className="font-medium">{project.company}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{project.dates}</span>
                          </div>
                          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs font-medium uppercase tracking-wider">
                            {project.domain}
                          </span>
                        </div>

                        {/* Project Title */}
                        <div className="space-y-3">
                          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            <span className="bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text">
                              {project.title}
                            </span>
                          </h2>
                          <div className="relative h-1 w-20">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-transparent blur-sm" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-transparent" />
                          </div>
                        </div>

                        {/* Role */}
                        <p className="text-base font-medium text-muted-foreground uppercase tracking-wider">
                          {project.role}
                        </p>

                        {/* Summary */}
                        <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
                          {project.summary}
                        </p>

                        {/* Challenge & Solution */}
                        {(project.challenge || project.solution) && (
                          <div className="space-y-6 pt-4">
                            {project.challenge && (
                              <div className="space-y-2">
                                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                  Challenge
                                </h3>
                                <p className="text-base leading-relaxed text-foreground/80">
                                  {project.challenge}
                                </p>
                              </div>
                            )}
                            {project.solution && (
                              <div className="space-y-2">
                                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                  Solution
                                </h3>
                                <p className="text-base leading-relaxed text-foreground/80">
                                  {project.solution}
                                </p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-3 pt-2">
                          {project.stack.slice(0, 6).map((tech, techIdx) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: techIdx * 0.05 }}
                              className="text-sm font-medium text-muted-foreground/90 uppercase tracking-wider"
                            >
                              {tech}
                              {techIdx < Math.min(project.stack.length, 6) - 1 && (
                                <span className="ml-3 text-muted-foreground/40">·</span>
                              )}
                            </motion.span>
                          ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                          {project.detailHref && (
                            <CtaLink
                              href={project.detailHref}
                              className="group inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                            >
                              View Case Study
                              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </CtaLink>
                          )}
                          {project.links
                            .filter((link) => link.href !== "[ADD LINK]")
                            .slice(0, 1)
                            .map((link) => (
                              <CtaLink
                                key={link.label}
                                href={link.href}
                                className="group inline-flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                              >
                                {link.label}
                                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </CtaLink>
                            ))}
                        </div>
                      </motion.div>

                      {/* Image */}
                      <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
                        className={cn(
                          "relative group",
                          isEven ? "order-2" : "order-1"
                        )}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                          {/* Progressive Blur Overlay */}
                          <ProgressiveBlur
                            intensity={0.15}
                            direction="radial"
                            className="z-10"
                          />

                          {/* Image */}
                          {project.heroImage && (
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                              className="relative h-full w-full"
                            >
                              <Image
                                src={project.heroImage}
                                alt={project.images?.[0]?.alt || `${project.title} showcase`}
                                fill
                                className="object-cover transition-all duration-700 group-hover:brightness-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                                priority={idx < 2}
                              />
                            </motion.div>
                          )}

                          {/* Gradient Overlay on Hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
                      </motion.div>
                    </div>

                    {/* Key Results (if available) */}
                    {project.results.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
                        className="mt-12 max-w-3xl"
                      >
                        <div className="space-y-4">
                          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            Impact & Results
                          </h3>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {project.results.slice(0, 4).map((result, resultIdx) => (
                              <motion.div
                                key={resultIdx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: resultIdx * 0.1 }}
                                className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                                <span>{result}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.article>
                </BlurFade>
              )
            })}
          </section>

          {/* Other Projects - Minimal Typography List */}
          {otherProjects.length > 0 && (
            <BlurFade delay={0.3} inView>
              <section className="pb-32">
                <div className="space-y-16">
                  {/* Section Header */}
                  <div className="space-y-4">
                    <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                      More Projects<span className="text-blue-500">.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                      Additional work across mobile development, SaaS platforms, and creative web experiences.
                    </p>
                  </div>

                  {/* Projects List */}
                  <div className="space-y-12">
                    {otherProjects.map((project, idx) => (
                      <motion.article
                        key={project.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="group relative border-b border-border/50 pb-12 last:border-0"
                      >
                        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:gap-16">
                          {/* Content */}
                          <div className="space-y-6">
                            {/* Title */}
                            <div className="space-y-2">
                              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                                {project.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                                <span className="font-medium">{project.domain}</span>
                                <span className="text-muted-foreground/60">·</span>
                                <span>{project.dates}</span>
                              </div>
                            </div>

                            {/* Summary */}
                            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                              {project.summary}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                              {project.tags.slice(0, 5).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Links */}
                            <div className="flex flex-wrap items-center gap-6">
                              {project.detailHref && (
                                <CtaLink
                                  href={project.detailHref}
                                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                  View Details
                                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </CtaLink>
                              )}
                              {project.links
                                .filter((link) => link.href !== "[ADD LINK]")
                                .slice(0, 2)
                                .map((link) => (
                                  <CtaLink
                                    key={link.label}
                                    href={link.href}
                                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                                  >
                                    {link.label}
                                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                  </CtaLink>
                                ))}
                            </div>
                          </div>

                          {/* Image (Thumbnail) */}
                          {project.heroImage && (
                            <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-xl">
                              <Image
                                src={project.heroImage}
                                alt={project.images?.[0]?.alt || `${project.title} thumbnail`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 400px"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                          )}
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </section>
            </BlurFade>
          )}

          {/* CTA Section */}
          <BlurFade delay={0.4} inView>
            <section className="relative py-24 md:py-32">
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-12 md:p-16 text-center">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-cyan-500/5" />

                <div className="relative z-10 mx-auto max-w-2xl space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                    Let's Build Something Great
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    I'm available for senior full-stack and frontend roles.
                    Let's discuss how I can help bring your next project to life.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <CtaLink
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                    >
                      Get in Touch
                      <ArrowUpRight className="h-4 w-4" />
                    </CtaLink>
                    <CtaLink
                      href={copy.about.personal.linkedin}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/50 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background"
                    >
                      View LinkedIn
                      <ExternalLink className="h-4 w-4" />
                    </CtaLink>
                  </div>
                </div>
              </div>
            </section>
          </BlurFade>
        </div>
      </div>
    </div>
  )
}
