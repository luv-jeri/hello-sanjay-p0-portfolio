"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "HighLevel: Courses Platform",
    description: "Creator-led course + community builder with multimedia, quizzes, drip, payments, and CRM analytics. Real-time WYSIWYG Course Builder with device previews.",
    tags: ["React", "Next.js", "TypeScript", "Module Federation", "Capacitor"],
    impact: "Faster authoring and improved engagement",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    href: "/projects",
  },
  {
    title: "Credentials/Badge Platform",
    description: "Certifier/Canvas-style credentialing tool with visual editor, CSV bulk issuance, verification system, and analytics dashboard.",
    tags: ["React", "Canvas APIs", "TypeScript", "Module Federation"],
    impact: "Faster credential turnaround, better tracking",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    href: "/projects",
  },
  {
    title: "DMRV Web App",
    description: "Digital Measurement, Reporting & Verification for environmental data with secure real-time reporting and high-performance data views.",
    tags: ["Next.js", "TypeScript", "SSR", "Shadcn UI"],
    impact: "High-performance UI, reliable reporting",
    image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=600&fit=crop",
    href: "/projects",
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
              <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-foreground/80">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-foreground/80">
                    Impact: {project.impact}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={project.href}>
                      Explore projects
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
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
