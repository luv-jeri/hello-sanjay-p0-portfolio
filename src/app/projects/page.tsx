import type { Metadata } from "next"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects-data"
import { copy } from "@/content/copy"

export const metadata: Metadata = {
  title: copy.seo.projects.title,
  description: copy.seo.projects.description,
  keywords: copy.seo.projects.keywords,
}

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {copy.projects.heading}
          </h1>
          <p className="text-xl text-foreground/70">
            {copy.projects.subheading}
          </p>
        </div>

        {/* Featured Projects - Case Studies */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">
            {copy.projects.featuredHeading}
          </h2>
          <div className="space-y-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                {project.image && (
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="mb-2 text-2xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {project.fullDescription}
                      </CardDescription>
                    </div>
                    <Badge className="shrink-0">{copy.projects.featuredBadge}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-semibold text-foreground/90">
                          {copy.projects.contextLabel}
                        </h4>
                        <p className="text-sm text-foreground/70">
                          {project.context}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold text-foreground/90">
                          {copy.projects.roleLabel}
                        </h4>
                        <p className="text-sm text-foreground/70">
                          {project.role}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-semibold text-foreground/90">
                          {copy.projects.architectureLabel}
                        </h4>
                        <p className="text-sm text-foreground/70">
                          {project.architecture}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold text-foreground/90">
                          {copy.projects.resultsLabel}
                        </h4>
                        <p className="text-sm font-medium text-foreground/80">
                          {project.results}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-foreground/10 bg-muted/30 p-4">
                    <h4 className="mb-2 text-sm font-semibold text-foreground/90">
                      {copy.projects.nextStepsLabel}
                    </h4>
                    <p className="text-sm text-foreground/70">
                      {project.nextSteps}
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="gap-2">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {copy.projects.liveDemoButton}
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        {copy.projects.sourceCodeButton}
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="mb-8 text-3xl font-bold tracking-tight">
            {copy.projects.moreProjectsHeading}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <Card key={project.id} className="flex flex-col overflow-hidden">
                {project.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.shortDescription}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-foreground/70">
                    {project.fullDescription}
                  </p>
                </CardContent>

                <CardFooter className="flex-wrap gap-2">
                  {project.liveUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {copy.projects.liveButton}
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        {copy.projects.codeButton}
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {copy.projects.demoButton}
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
