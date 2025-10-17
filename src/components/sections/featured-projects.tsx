"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Code2, Zap, Layers } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExpandableCard } from "@/components/ui/expandable-card"

const projects = [
  {
    title: "HighLevel: Courses Platform",
    description: "Real-time WYSIWYG Course Builder with responsive previews and mobile parity",
    tags: ["React", "TypeScript", "Module Federation", "Capacitor", "Firebase"],
    impact: "10,000+ active users",
    href: "/projects/highlevel-courses",
    icon: <Layers className="h-6 w-6 text-cyan-500" />,
    details: (
      <div className="space-y-3">
        <p className="text-sm text-foreground/70">
          <strong>Architecture:</strong> Module Federation micro-frontends for scalable team development
        </p>
        <p className="text-sm text-foreground/70">
          <strong>Key Features:</strong> Responsive device preview, multilingual subtitles, accessibility support
        </p>
        <p className="text-sm text-foreground/70">
          <strong>Impact:</strong> Reduced authoring friction by 60%, serving 10k+ users
        </p>
      </div>
    ),
  },
  {
    title: "Credentials/Badge Platform",
    description: "Canvas-style credential creator with bulk issuance and analytics",
    tags: ["React", "Canvas APIs", "TypeScript", "Analytics"],
    impact: "3x faster issuance",
    href: "/projects/credentials-platform",
    icon: <Code2 className="h-6 w-6 text-purple-500" />,
    details: (
      <div className="space-y-3">
        <p className="text-sm text-foreground/70">
          <strong>Technology:</strong> Canvas-based editor with CSV bulk upload system
        </p>
        <p className="text-sm text-foreground/70">
          <strong>Key Features:</strong> Drag-drop designer, QR verification, recipient portal
        </p>
        <p className="text-sm text-foreground/70">
          <strong>Impact:</strong> 3x improvement in credential issuance speed
        </p>
      </div>
    ),
  },
  {
    title: "DMRV Web App",
    description: "Environmental data measurement and reporting platform",
    tags: ["Next.js", "TypeScript", "SSR", "Shadcn UI"],
    impact: "Real-time reporting",
    href: "/projects/dmrv-platform",
    icon: <Zap className="h-6 w-6 text-emerald-500" />,
    details: (
      <div className="space-y-3">
        <p className="text-sm text-foreground/70">
          <strong>Platform:</strong> Digital Measurement, Reporting & Verification
        </p>
        <p className="text-sm text-foreground/70">
          <strong>Tech Stack:</strong> Next.js SSR, real-time APIs, secure access control
        </p>
        <p className="text-sm text-foreground/70">
          <strong>Impact:</strong> High-performance UI with enterprise security
        </p>
      </div>
    ),
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Selected Work
          </h2>
          <p className="text-lg text-foreground/70">
            In‑depth case studies with architecture, decisions, and results
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <ExpandableCard
                title={project.title}
                description={project.description}
                icon={project.icon}
                expandedContent={
                  <div className="space-y-4">
                    {project.details}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full" asChild>
                      <Link href={project.href}>
                        View Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                }
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">
              View all projects
              <ExternalLink className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
