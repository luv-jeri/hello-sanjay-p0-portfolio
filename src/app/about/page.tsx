"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Users, Zap, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SpotlightNew } from "@/components/ui/spotlight-new"
import { FlipWords } from "@/components/ui/flip-words"
import { CometCard } from "@/components/ui/comet-card"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const roles = [
  "Technical Leader",
  "Full-Stack Developer",
  "Product Builder",
  "Team Mentor",
  "Problem Solver",
]

const experiences = [
  {
    logo: "/company_logo/goHighLevel.webp",
    title: "HighLevel",
    role: "SDE III / Senior Full-Stack",
    period: "2024 - Present",
    description: "Architected micro-frontends with Module Federation. Built WYSIWYG Course Builder and Canvas Badge Builder. Converted web to Capacitor mobile app.",
    tags: ["React", "TypeScript", "Module Federation", "Capacitor"],
    impact: "10,000+ users",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    logo: "/company_logo/ReNew.svg",
    title: "ReNew Power",
    role: "SDE 3 - Climate Tech",
    period: "2023 - 2024",
    description: "Built climate-tech platform with Next.js SSR, Firebase real-time data, and secure RBAC authentication.",
    tags: ["Next.js", "Firebase", "GCP", "SSR"],
    impact: "500+ concurrent users",
    color: "from-green-500/20 to-green-600/10",
  },
  {
    logo: "/company_logo/haspr logo.svg",
    title: "Haspr",
    role: "Senior Full-Stack",
    period: "2018 - 2023",
    description: "Delivered 15+ web applications. Introduced Next.js, PWA patterns, and modern frontend practices.",
    tags: ["React", "Node.js", "PWA"],
    impact: "15+ apps shipped",
    color: "from-purple-500/20 to-purple-600/10",
  },
]

const workingPrinciples = [
  {
    quote: "Clear written docs, async updates, and crisp demos",
    name: "Communication",
    title: "Documentation-first approach",
    icon: <CheckCircle2 className="h-5 w-5 text-primary" />,
  },
  {
    quote: "Owns outcomes: scopes, delivers, and de-risks releases",
    name: "Ownership",
    title: "End-to-end responsibility",
    icon: <Award className="h-5 w-5 text-accent" />,
  },
  {
    quote: "Reliable on code quality: TypeScript, reviews, testing",
    name: "Quality",
    title: "Type-safe, tested, reviewed",
    icon: <Zap className="h-5 w-5 text-green-600" />,
  },
  {
    quote: "Product sense: UX polish, accessibility, performance budgets",
    name: "User Focus",
    title: "Performance and accessibility",
    icon: <Users className="h-5 w-5 text-pink-500" />,
  },
]

export default function AboutPage() {
  return (
    <div className="relative w-full overflow-hidden">
      <SpotlightNew
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(260, 100%, 75%, .12) 0, hsla(260, 100%, 65%, .04) 50%, hsla(260, 100%, 55%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(220, 100%, 75%, .08) 0, hsla(220, 100%, 65%, .03) 80%, transparent 100%)"
        translateY={-300}
        duration={9}
      />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section with Flip Words */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium"
            >
              <Users className="h-4 w-4 text-accent" />
              <span>7+ Years of Impact</span>
            </motion.div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              I&apos;m a{" "}
              <FlipWords words={roles} className="text-primary" duration={2500} />
            </h1>

            <p className="mx-auto max-w-3xl text-lg text-foreground/70 md:text-xl">
              Senior full-stack developer who ships complex products end-to-end.
              From architecture to production, I deliver results.
            </p>
          </motion.div>

          {/* Experience Cards - 3D Effect */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="mb-12 text-center text-3xl font-bold">
              Where I&apos;ve Made Impact
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <CometCard className="h-full">
                    <div className="flex h-[500px] w-full flex-col rounded-2xl border border-foreground/10 bg-muted p-6">
                      {/* Logo */}
                      <div className="mb-4 flex h-16 items-center justify-center rounded-xl bg-background p-3">
                        <div className="relative h-12 w-full">
                          <Image
                            src={exp.logo}
                            alt={`${exp.title} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col">
                        <h3 className="mb-2 text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="mb-1 text-sm font-medium text-foreground/80">
                          {exp.role}
                        </p>
                        <p className="mb-4 text-xs text-foreground/60">
                          {exp.period}
                        </p>

                        <p className="mb-4 flex-1 text-sm text-foreground/70">
                          {exp.description}
                        </p>

                        {/* Tags */}
                        <div className="mb-4 flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Impact - Always at bottom */}
                        <div className="mt-auto">
                          <div className={`rounded-lg bg-gradient-to-r ${exp.color} p-3 text-center`}>
                            <p className="text-sm font-semibold text-foreground">
                              Impact: {exp.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CometCard>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Bio Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-20"
          >
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">
                  Technical Leader & Product Builder
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  At <strong className="text-primary">HighLevel</strong>, I lead frontend and full-stack work on two core lines:
                  a next-gen Courses platform and a Canvas-style credentials/badge builder. I architected a real-time
                  WYSIWYG Course Builder, introduced Module Federation for micro-frontends, and converted the web
                  platform into a Capacitor-based mobile app for feature parity across devices.
                </p>
                <p>
                  Previously at <strong className="text-green-600">ReNew Power (Climate Connect Digital)</strong>,
                  I built climate-tech applications with React, Next.js (SSR), TypeScript, Firebase, and GCP,
                  integrating real-time data, authentication/authorization, and scalable data flows.
                </p>
                <p>
                  I care about user experience, performance, and accessibility. My recent work includes multilingual
                  subtitle support, keyboard navigation, and screen-reader compatibility, alongside caching,
                  modularization, and rendering optimizations.
                </p>
                <p>
                  I&apos;m also a believer in AI-assisted development (Cursor/MCP/Agents) to raise code quality and speed,
                  and I&apos;ve mentored developers as a Full-Stack Trainer (Let&apos;s Upgrade, Newton School, Coding Ninjas).
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Badge className="bg-primary text-primary-foreground">7+ Years</Badge>
                  <Badge className="bg-accent text-accent-foreground">50+ Projects</Badge>
                  <Badge className="bg-green-600 text-white">10k+ Users</Badge>
                  <Badge className="bg-pink-500 text-white">Indore, India</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Working Principles - Infinite Moving Cards */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-20"
          >
            <h2 className="mb-8 text-center text-3xl font-bold">
              Working With Me
            </h2>
            <p className="mb-8 text-center text-lg text-foreground/70">
              My approach to collaboration and delivery
            </p>
            <InfiniteMovingCards
              items={workingPrinciples}
              direction="left"
              speed="slow"
            />
          </motion.section>

          {/* Quick Stats Grid */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-2 text-4xl font-bold text-primary">3</div>
                <div className="text-sm text-foreground/60">Major Companies</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-2 text-4xl font-bold text-accent">2</div>
                <div className="text-sm text-foreground/60">Core Products Led</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-2 text-4xl font-bold text-green-600">500+</div>
                <div className="text-sm text-foreground/60">Students Trained</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-2 text-4xl font-bold text-pink-500">100%</div>
                <div className="text-sm text-foreground/60">Remote Work</div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
