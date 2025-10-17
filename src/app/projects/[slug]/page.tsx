import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SpotlightNew } from "@/components/ui/spotlight-new"
import { Compare } from "@/components/ui/compare"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/projects-data"

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: project.title,
    description: project.fullDescription,
    keywords: project.tags,
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  const hasHeroImage = ["highlevel-courses", "credentials-platform", "dmrv-platform"].includes(
    project.id
  )

  return (
    <div className="w-full">
      {/* Hero Section with Spotlight */}
      <div className="relative min-h-[60vh] overflow-hidden bg-background">
        <SpotlightNew
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(220, 100%, 75%, .12) 0, hsla(220, 100%, 65%, .04) 50%, hsla(220, 100%, 55%, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(260, 100%, 75%, .08) 0, hsla(260, 100%, 65%, .03) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 75%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)"
        />

        <div className="container relative z-10 mx-auto px-4 py-20">
          {/* Back Button */}
          <Button variant="ghost" className="mb-8" asChild>
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          {/* Hero Content */}
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mb-8 text-xl text-foreground/70">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Hero Image if available */}
          {hasHeroImage && (
            <div className="relative mx-auto mt-12 max-w-5xl">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-foreground/10 shadow-2xl">
                <Image
                  src={`/projects/${project.id}/hero.jpg`}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Overview */}
          <section>
            <h2 className="mb-4 text-3xl font-bold">Overview</h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              {project.fullDescription}
            </p>
          </section>

          {/* Context & Goals */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Context & Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-foreground/80">{project.context}</p>
              </CardContent>
            </Card>
          </section>

          {/* Role & Decisions */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">My Role & Key Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-foreground/80">{project.role}</p>
              </CardContent>
            </Card>
          </section>

          {/* Before/After for Credentials Platform */}
          {project.id === "credentials-platform" && (
            <section>
              <h2 className="mb-6 text-3xl font-bold">Impact Visualization</h2>
              <div className="overflow-hidden rounded-xl">
                <div className="h-[500px]">
                  <Compare
                    firstImage="/projects/credentials/before.jpg"
                    secondImage="/projects/credentials/after.jpg"
                    firstImageAlt="Before: Manual certificate creation process"
                    secondImageAlt="After: Automated canvas-based builder with analytics"
                    className="h-full w-full"
                    slideMode="hover"
                  />
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-foreground/60">
                Hover to compare: Manual workflow (left) vs. Automated builder with CSV bulk issuance (right)
              </p>
            </section>
          )}

          {/* Architecture & Tech */}
          <section>
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="text-2xl">Architecture & Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-foreground/80">{project.architecture}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Results */}
          <section>
            <Card className="border-green-500/20 bg-green-500/5">
              <CardHeader>
                <CardTitle className="text-2xl">Results & Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium leading-relaxed text-foreground">
                  {project.results}
                </p>
              </CardContent>
            </Card>
          </section>

          {/* What's Next */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">What&apos;s Next</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-foreground/80">{project.nextSteps}</p>
              </CardContent>
            </Card>
          </section>

          {/* Links */}
          {(project.liveUrl || project.githubUrl || project.demoUrl) && (
            <section className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button size="lg" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                    View Live Project
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="lg" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    View Source Code
                  </a>
                </Button>
              )}
              {project.demoUrl && (
                <Button variant="outline" size="lg" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                    Watch Demo
                  </a>
                </Button>
              )}
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
