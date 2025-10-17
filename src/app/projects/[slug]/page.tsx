import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ExternalLink, Calendar, Building2, Briefcase, CheckCircle2, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getProjectBySlug, projects } from "@/content/projects"
import { CtaLink } from "@/components/cta-link"

// ============================================================================
// GENERATE STATIC PARAMS
// ============================================================================

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

// ============================================================================
// GENERATE METADATA
// ============================================================================

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: project.seoTitle || `${project.title} – Sanjay Kumar`,
    description: project.seoDescription || project.summary,
    keywords: [...project.tags, ...project.stack, project.domain],
    openGraph: {
      title: project.seoTitle || project.title,
      description: project.seoDescription || project.summary,
      type: "article",
      images: project.heroImage
        ? [
            {
              url: project.heroImage,
              width: 1200,
              height: 630,
              alt: project.images?.[0]?.alt || `${project.title} preview`,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoTitle || project.title,
      description: project.seoDescription || project.summary,
    },
  }
}

// ============================================================================
// PROJECT DETAIL PAGE
// ============================================================================

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    author: {
      "@type": "Person",
      name: "Sanjay Kumar",
      jobTitle: "Senior Full-Stack Engineer (SDE III)",
    },
    dateCreated: project.dates.split("–")[0].trim(),
    keywords: [...project.tags, ...project.stack].join(", "),
    image: project.heroImage || project.images?.[0]?.src,
  }

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl">
          {/* Back Button */}
          <Button variant="ghost" size="sm" className="mb-8" asChild>
            <CtaLink href="/projects" aria-label="Back to Projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </CtaLink>
          </Button>

          {/* Hero Image */}
          {project.heroImage && (
            <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg bg-muted mb-8">
              <Image
                src={project.heroImage}
                alt={project.images?.[0]?.alt || `${project.title} hero image`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority
              />
            </div>
          )}

          {/* Header */}
          <header className="mb-12">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {project.featured && (
                <Badge variant="default">Featured</Badge>
              )}
              <Badge variant="outline">{project.domain}</Badge>
            </div>

            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              {project.summary}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground border-t border-b py-4">
              {project.company && (
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <span>{project.company}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>{project.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{project.dates}</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </header>

          {/* Main Content Grid */}
          <div className="space-y-12">
            {/* Challenge & Solution */}
            {(project.challenge || project.solution) && (
              <section className="grid gap-8 md:grid-cols-2">
                {project.challenge && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-bold">
                          1
                        </span>
                        Challenge
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-relaxed text-muted-foreground">
                        {project.challenge}
                      </p>
                    </CardContent>
                  </Card>
                )}

                {project.solution && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-bold">
                          2
                        </span>
                        Solution
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-relaxed text-muted-foreground">
                        {project.solution}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </section>
            )}

            {/* Context */}
            {project.context && (
              <section>
                <h2 className="mb-4 text-2xl font-bold">Context & Background</h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="leading-relaxed text-muted-foreground">
                      {project.context}
                    </p>
                  </CardContent>
                </Card>
              </section>
            )}

            {/* Key Contributions */}
            {project.contributions.length > 0 && (
              <section>
                <h2 className="mb-6 text-2xl font-bold">Key Contributions</h2>
                <div className="grid gap-4">
                  {project.contributions.map((contribution, idx) => (
                    <Card key={idx} className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                          <p className="leading-relaxed">{contribution}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Results & Impact */}
            {project.results.length > 0 && (
              <section>
                <h2 className="mb-6 text-2xl font-bold">Results & Impact</h2>
                <Card className="border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30">
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex gap-4">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 dark:bg-green-400 text-white dark:text-black text-xs font-bold shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="leading-relaxed text-green-900 dark:text-green-100">
                            {result}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>
            )}

            {/* Technical Architecture */}
            {project.architecture && (
              <section>
                <h2 className="mb-4 text-2xl font-bold">Technical Architecture</h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="leading-relaxed text-muted-foreground">
                      {project.architecture}
                    </p>
                  </CardContent>
                </Card>
              </section>
            )}

            {/* Next Steps */}
            {project.nextSteps && (
              <section>
                <h2 className="mb-4 text-2xl font-bold">What's Next</h2>
                <Card className="border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30">
                  <CardContent className="pt-6">
                    <p className="leading-relaxed text-blue-900 dark:text-blue-100">
                      {project.nextSteps}
                    </p>
                  </CardContent>
                </Card>
              </section>
            )}

            {/* Project Links */}
            {project.links.length > 0 && (
              <section>
                <h2 className="mb-6 text-2xl font-bold">Project Links</h2>
                <div className="flex flex-wrap gap-3">
                  {project.links
                    .filter((link) => link.href !== "[ADD LINK]")
                    .map((link, idx) => (
                      <Button
                        key={idx}
                        variant={idx === 0 ? "default" : "outline"}
                        size="lg"
                        asChild
                      >
                        <CtaLink
                          href={link.href}
                          aria-label={`${link.label} for ${project.title}`}
                        >
                          {link.kind === "demo" && <ExternalLink className="h-5 w-5" />}
                          {link.label}
                        </CtaLink>
                      </Button>
                    ))}
                </div>
              </section>
            )}
          </div>

          {/* Footer CTA */}
          <div className="mt-16 rounded-lg border bg-muted/30 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="mb-2 text-xl font-bold">Interested in similar work?</h3>
                <p className="text-muted-foreground">
                  I'm available for senior full-stack and frontend roles. Let's connect.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <CtaLink href="/contact">Get in Touch</CtaLink>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <CtaLink href="/projects">View All Projects</CtaLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
