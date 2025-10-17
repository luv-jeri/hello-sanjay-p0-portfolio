import type { Metadata } from "next"
import { Calendar, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Services",
  description: "Consulting services including architecture review, performance optimization, and Capacitor migration.",
  keywords: ["architecture review", "performance optimization", "Capacitor", "micro‑frontends"],
}

const services = [
  {
    title: "Architecture Review",
    duration: "1–2 weeks",
    description: "Comprehensive review of your frontend architecture with actionable recommendations.",
    deliverables: [
      "Micro‑frontend assessment and Module Federation recommendations",
      "SSR/caching strategy evaluation",
      "Auth and security review",
      "Performance budget recommendations",
      "Architecture Decision Records (ADRs)",
      "System diagrams and technical roadmap",
    ],
    tags: ["Architecture", "Consultation", "Strategic"],
    pricing: "From [ADD RATE]",
  },
  {
    title: "Frontend Modernization Sprint",
    duration: "2–4 weeks",
    description: "Upgrade your frontend stack with modern best practices and technologies.",
    deliverables: [
      "React/Next.js migration planning and execution",
      "TypeScript + Zod contract implementation",
      "Accessibility (a11y) upgrades and WCAG compliance",
      "Performance optimizations (Core Web Vitals)",
      "Component library modernization",
      "Testing strategy and implementation",
    ],
    tags: ["Development", "Migration", "Performance"],
    pricing: "From [ADD RATE]",
  },
  {
    title: "Web→Mobile Parity",
    duration: "3–6 weeks",
    description: "Convert your web application to mobile using Capacitor without duplicating stacks.",
    deliverables: [
      "Capacitor setup and configuration",
      "Feature parity assessment and implementation",
      "Offline-first strategy and caching",
      "Native bridge integrations",
      "App store release pipeline",
      "Performance optimization for mobile",
    ],
    tags: ["Mobile", "Capacitor", "Cross-platform"],
    pricing: "From [ADD RATE]",
  },
  {
    title: "Credentialing Platform Build",
    duration: "Custom (6+ weeks)",
    description: "Build a complete credentials/badge issuance platform from scratch.",
    deliverables: [
      "Canvas‑based credential editor",
      "CSV bulk issuance system",
      "Verification portal and QR codes",
      "Analytics dashboard",
      "Recipient management portal",
      "API integrations and webhooks",
    ],
    tags: ["Custom Build", "Full-stack", "SaaS"],
    pricing: "From [ADD RATE]",
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Consulting Services
          </h1>
          <p className="text-xl text-foreground/70">
            Strategic reviews, modernization sprints, and custom builds
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader>
                <div className="mb-3 flex items-start justify-between gap-4">
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <Badge variant="outline">{service.duration}</Badge>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <h4 className="mb-3 font-semibold text-foreground/90">
                  Deliverables
                </h4>
                <ul className="space-y-2">
                  {service.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-foreground/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-500" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex-col items-stretch gap-3 border-t pt-6">
                <div className="text-center">
                  <p className="text-lg font-bold">{service.pricing}</p>
                </div>
                <Button asChild>
                  <a href="#contact">
                    <Calendar className="h-5 w-5" />
                    Book a consult
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 rounded-xl border border-foreground/10 bg-muted/30 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Have a different project in mind?
          </h2>
          <p className="mb-6 text-foreground/70">
            Let&apos;s discuss your specific needs and create a custom engagement plan.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">
              <Calendar className="h-5 w-5" />
              Schedule a call
            </a>
          </Button>
        </section>
      </div>
    </div>
  )
}
