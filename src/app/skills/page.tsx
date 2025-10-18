'use client'

import { motion, type Variants } from "framer-motion"
import { Sparkles } from "lucide-react"
import { SKILLS } from "@/lib/constants"
import { copy } from "@/content/copy"
import { BlurFade } from "@/components/ui/blur-fade"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { CTANew } from "@/components/sections/cta-new"
import { cn } from "@/lib/utils"

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// ============================================================================
// SKILL SECTION DATA
// ============================================================================

const skillSections = [
  {
    title: copy.skills.frontendTitle,
    description: copy.skills.frontendDescription,
    skills: SKILLS.frontend,
  },
  {
    title: copy.skills.backendTitle,
    description: copy.skills.backendDescription,
    skills: SKILLS.backend,
  },
  {
    title: copy.skills.cloudTitle,
    description: copy.skills.cloudDescription,
    skills: SKILLS.cloud,
  },
  {
    title: copy.skills.otherTitle,
    description: copy.skills.otherDescription,
    skills: SKILLS.other,
  },
] as const

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function SkillsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <ProgressiveBlur
          className="absolute inset-0"
          intensity={0.2}
          direction="radial"
        />
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl animate-pulse [animation-delay:4s]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <BlurFade delay={0.1} inView>
            <section className="py-16 md:py-24 lg:py-32">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
              >
                {/* Overline */}
                <motion.div variants={fadeInUp} custom={0}>
                  <div className="inline-flex items-center gap-3 rounded-full border border-border/50 bg-card/50 px-4 py-2 backdrop-blur-sm">
                    <Sparkles className="h-4 w-4 text-violet-500" />
                    <span className="text-sm font-medium uppercase tracking-wider text-foreground/80">
                      Technical Expertise
                    </span>
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div className="space-y-4">
                  <motion.h1
                    variants={fadeInUp}
                    custom={1}
                    className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
                  >
                    <span className="block bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                      Skills & Expertise<span className="text-violet-500">.</span>
                    </span>
                  </motion.h1>

                  <motion.p
                    variants={fadeInUp}
                    custom={1.5}
                    className="max-w-3xl text-xl text-muted-foreground md:text-2xl"
                  >
                    A collection of technical disciplines and creative proficiencies built across
                    years of full-stack engineering — from frontend architecture to cloud infrastructure.
                  </motion.p>
                </motion.div>
              </motion.div>
            </section>
          </BlurFade>

          {/* Technical Skills - Editorial Layout */}
          <BlurFade delay={0.3} inView>
            <section className="py-16 md:py-20">
              <div className="space-y-24 md:space-y-32">
                {skillSections.map((section, sectionIdx) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: sectionIdx * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
                    className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16"
                  >
                    {/* Section Header */}
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                          {section.title}
                        </h2>
                        <div className="relative h-1 w-16">
                          <div className={cn(
                            "absolute inset-0 blur-sm",
                            sectionIdx === 0 && "bg-gradient-to-r from-blue-500 to-transparent",
                            sectionIdx === 1 && "bg-gradient-to-r from-green-500 to-transparent",
                            sectionIdx === 2 && "bg-gradient-to-r from-violet-500 to-transparent",
                            sectionIdx === 3 && "bg-gradient-to-r from-orange-500 to-transparent",
                          )} />
                          <div className={cn(
                            "absolute inset-0",
                            sectionIdx === 0 && "bg-gradient-to-r from-blue-500 to-transparent",
                            sectionIdx === 1 && "bg-gradient-to-r from-green-500 to-transparent",
                            sectionIdx === 2 && "bg-gradient-to-r from-violet-500 to-transparent",
                            sectionIdx === 3 && "bg-gradient-to-r from-orange-500 to-transparent",
                          )} />
                        </div>
                      </div>
                      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                        {section.description}
                      </p>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-3">
                      {section.skills.map((skill, skillIdx) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIdx * 0.05, duration: 0.4 }}
                          className="group relative border-l-2 border-border/30 pl-6 py-2 transition-all duration-300 hover:border-primary/60"
                        >
                          {/* Decorative Dot */}
                          <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary/40 transition-all duration-300 group-hover:bg-primary group-hover:scale-150" />

                          {/* Skill Name */}
                          <span className="text-base font-medium text-foreground/90 transition-colors duration-300 group-hover:text-foreground md:text-lg">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </BlurFade>

          {/* Senior Competencies - Multi-Column Typography */}
          <BlurFade delay={0.5} inView>
            <section className="relative py-16 md:py-24">
              <div className="space-y-16">
                {/* Section Header */}
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                    {copy.skills.competenciesHeading}
                  </h2>
                  <div className="relative h-1 w-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-violet-500 to-transparent blur-sm" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-violet-500 to-transparent" />
                  </div>
                  <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
                    {copy.skills.competenciesSubheading}
                  </p>
                </div>

                {/* Competencies Grid */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                  {Object.values(copy.skills.competencies).map((competency, idx) => (
                    <motion.article
                      key={competency.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="group space-y-4"
                    >
                      {/* Number Badge */}
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                        <span className="text-lg font-bold">{idx + 1}</span>
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                          {competency.title}
                        </h3>
                        <p className="text-base leading-relaxed text-muted-foreground">
                          {competency.description}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </section>
          </BlurFade>

          {/* Philosophy Quote */}
          <BlurFade delay={0.6} inView>
            <section className="relative py-16 md:py-24">
              <div className="relative">
                {/* Quote marks decoration */}
                <div className="absolute -left-4 -top-4 text-8xl font-serif text-primary/10 md:-left-8 md:text-9xl">
                  &ldquo;
                </div>
                <div className="absolute -right-4 -bottom-4 text-8xl font-serif text-primary/10 md:-right-8 md:text-9xl">
                  &rdquo;
                </div>

                <blockquote className="relative space-y-6">
                  <p className="text-2xl font-light italic leading-relaxed text-foreground/90 md:text-3xl lg:text-4xl">
                    The best code is not the cleverest —
                    it's the code that communicates intent clearly,
                    scales gracefully, and empowers the team.
                  </p>
                  <footer className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="h-px w-8 bg-primary/50" />
                    <span>Engineering philosophy</span>
                  </footer>
                </blockquote>
              </div>
            </section>
          </BlurFade>
        </div>
      </div>

      {/* CTA Section */}
      <CTANew />
    </div>
  )
}
