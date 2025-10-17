"use client"

import { motion } from "framer-motion"
import { Code2, Server, Cloud, Wrench, Zap, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FocusCards } from "@/components/ui/focus-cards"
import { SpotlightNew } from "@/components/ui/spotlight-new"
import { SKILLS } from "@/lib/constants"

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    description: "Building interactive, accessible, and performant user interfaces",
    skills: SKILLS.frontend,
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Designing scalable APIs and robust server-side architectures",
    skills: SKILLS.backend,
    color: "text-green-600 dark:text-green-400",
  },
  {
    icon: Cloud,
    title: "Cloud/Infra/DevOps",
    description: "Deploying and managing applications at scale",
    skills: SKILLS.cloud,
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Wrench,
    title: "Data & Other",
    description: "Additional tools and methodologies for modern development",
    skills: SKILLS.other,
    color: "text-orange-600 dark:text-orange-400",
  },
]

const competencies = [
  {
    title: "Architecture for Modular Scale",
    description: "Micro‑frontends with Module Federation, shared libraries, and independent deployability",
  },
  {
    title: "Performance Budgets",
    description: "Core Web Vitals optimization, lazy loading, code splitting, and efficient rendering",
  },
  {
    title: "SSR & Caching Strategy",
    description: "Server-side rendering with Next.js, intelligent caching, and data fetching patterns",
  },
  {
    title: "Security & Auth",
    description: "Secure authentication flows, RBAC, authorization patterns, and data protection",
  },
  {
    title: "Accessibility (a11y)",
    description: "WCAG compliance, keyboard navigation, screen readers, and inclusive design",
  },
  {
    title: "Cross‑Platform Parity",
    description: "Web-to-mobile with Capacitor, feature parity, and shared codebases",
  },
]

export default function SkillsPage() {
  const focusCardsData = skillCategories.map((category) => ({
    title: category.title,
    description: category.description,
    icon: <category.icon className={`h-8 w-8 ${category.color}`} />,
    content: (
      <div className="mt-4 flex flex-wrap gap-2">
        {category.skills.slice(0, 6).map((skill) => (
          <Badge key={skill} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
        {category.skills.length > 6 && (
          <Badge variant="outline" className="text-xs">
            +{category.skills.length - 6} more
          </Badge>
        )}
      </div>
    ),
  }))

  return (
    <div className="relative w-full overflow-hidden">
      <SpotlightNew
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(220, 100%, 75%, .08) 0, hsla(220, 100%, 65%, .03) 50%, hsla(220, 100%, 55%, 0) 80%)"
        translateY={-200}
      />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium">
                <Zap className="mr-2 inline-block h-4 w-4" />
                Technical Expertise
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              Skills & Tech Stack
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-foreground/70"
            >
              7+ years of full-stack mastery across modern web technologies
            </motion.p>
          </div>

          {/* Focus Cards - Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="mb-8 text-2xl font-bold">Core Technologies</h2>
            <FocusCards cards={focusCardsData} />
          </motion.section>

          {/* Senior Competencies */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="mb-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium"
              >
                <Trophy className="h-4 w-4 text-accent" />
                <span>Senior-Level Expertise</span>
              </motion.div>
              <h2 className="mb-2 text-3xl font-bold tracking-tight">
                Beyond Code
              </h2>
              <p className="text-lg text-foreground/70">
                Architectural thinking and strategic execution
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {competencies.map((competency, index) => (
                <motion.div
                  key={competency.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Card className="group h-full transition-all hover:shadow-xl hover:border-primary/30">
                    <CardHeader>
                      <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {competency.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/70">
                        {competency.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
