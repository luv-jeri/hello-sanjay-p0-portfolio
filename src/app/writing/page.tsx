import type { Metadata } from "next"
import { Book, Youtube, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LinkPreview } from "@/components/ui/link-preview"

export const metadata: Metadata = {
  title: "Writing & Speaking",
  description: "Training, talks, and articles on micro‑frontends, editors, and accessibility.",
  keywords: ["engineering talks", "training", "micro‑frontends article"],
}

const talks = [
  {
    title: "Full-Stack Development with MERN",
    platform: "Let's Upgrade",
    date: "2021",
    description: "Comprehensive training series on MERN stack development, covering MongoDB, Express, React, and Node.js",
    type: "Training Series",
    link: "[ADD YOUTUBE LINK]",
  },
  {
    title: "Advanced JavaScript & Modern Frameworks",
    platform: "Newton School",
    date: "2021",
    description: "Live seminars on advanced JavaScript concepts, modern frameworks, and best practices",
    type: "Seminar",
    link: "[ADD YOUTUBE LINK]",
  },
  {
    title: "Building Production-Ready Applications",
    platform: "Coding Ninjas",
    date: "2021-2022",
    description: "Workshop series on SDLC, testing, deployment, and maintaining production applications",
    type: "Workshop",
    link: "[ADD YOUTUBE LINK]",
  },
]

const articles = [
  {
    title: "Implementing Micro-frontends with Module Federation",
    description: "A deep dive into architecting scalable frontend applications using Module Federation in Webpack 5",
    topics: ["Micro-frontends", "Module Federation", "Architecture"],
    link: "[ADD LINK]",
  },
  {
    title: "Building Real-time WYSIWYG Editors",
    description: "Lessons learned from building production-grade WYSIWYG editors with React and TypeScript",
    topics: ["WYSIWYG", "React", "Real-time"],
    link: "[ADD LINK]",
  },
  {
    title: "Web to Mobile with Capacitor",
    description: "Complete guide to converting web applications to mobile apps without duplicating your stack",
    topics: ["Capacitor", "Mobile", "Cross-platform"],
    link: "[ADD LINK]",
  },
  {
    title: "Accessibility in Modern Web Applications",
    description: "Practical guide to implementing WCAG compliance, keyboard navigation, and screen reader support",
    topics: ["Accessibility", "a11y", "Best Practices"],
    link: "[ADD LINK]",
  },
]

const openSource = [
  {
    title: "Micro-frontend Boilerplate",
    description: "Starter template for Module Federation-based micro-frontends with TypeScript",
    link: "[ADD GITHUB LINK]",
  },
  {
    title: "Canvas Editor Utils",
    description: "Utility library for building canvas-based editors and credential builders",
    link: "[ADD GITHUB LINK]",
  },
  {
    title: "Firebase SSR Patterns",
    description: "Collection of patterns for implementing server-side rendering with Firebase",
    link: "[ADD GITHUB LINK]",
  },
]

export default function WritingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Writing & Speaking
          </h1>
          <p className="text-xl text-foreground/70">
            Sharing knowledge through training, talks, articles, and open source
          </p>
        </div>

        {/* Training & Talks */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <Youtube className="h-8 w-8" />
            <h2 className="text-3xl font-bold tracking-tight">
              Training & Talks
            </h2>
          </div>
          <div className="space-y-6">
            {talks.map((talk) => (
              <Card key={talk.title}>
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="mb-2">{talk.title}</CardTitle>
                      <CardDescription>
                        {talk.platform} · {talk.date}
                      </CardDescription>
                    </div>
                    <Badge>{talk.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-foreground/70">
                    {talk.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={talk.link} target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-4 w-4" />
                      Watch on YouTube
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <Book className="h-8 w-8" />
            <h2 className="text-3xl font-bold tracking-tight">
              Technical Articles
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <Card key={article.title}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    <LinkPreview url={article.link} className="hover:text-foreground/80">
                      {article.title}
                    </LinkPreview>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-foreground/70">
                    {article.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {article.topics.map((topic) => (
                      <Badge key={topic} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Open Source */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <Github className="h-8 w-8" />
            <h2 className="text-3xl font-bold tracking-tight">
              Open Source
            </h2>
          </div>
          <div className="space-y-4">
            {openSource.map((project) => (
              <Card key={project.title}>
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
