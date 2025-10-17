import type { Metadata } from "next"
import { Code2, Server, Cloud, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SKILLS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Skills",
  description: "Frontend, backend, cloud, and data skills with senior competencies.",
  keywords: ["TypeScript", "Module Federation", "SSR", "performance", "accessibility"],
}

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
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Skills & Tech Stack
          </h1>
          <p className="text-xl text-foreground/70">
            Technologies and competencies for modern full-stack development
          </p>
        </div>

        {/* Tech Stack */}
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category) => (
              <Card key={category.title} className="overflow-hidden">
                <CardHeader>
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`rounded-lg bg-foreground/5 p-3 ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Senior Competencies */}
        <section>
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold tracking-tight">
              Senior Competencies
            </h2>
            <p className="text-lg text-foreground/70">
              Beyond code: architectural thinking and strategic execution
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {competencies.map((competency) => (
              <Card key={competency.title}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {competency.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">
                    {competency.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
