import type { Metadata } from "next"
import Image from "next/image"
import { ExternalLink, Briefcase, Calendar, Building2, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getFeaturedProjects, getNonFeaturedProjects } from "@/content/projects"
import { copy } from "@/content/copy"
import { CtaLink } from "@/components/cta-link"

// ============================================================================
// SEO METADATA
// ============================================================================

export const metadata: Metadata = {
  title: copy.seo.projects.title,
  description: copy.seo.projects.description,
  keywords: copy.seo.projects.keywords,
  openGraph: {
    title: copy.seo.projects.title,
    description: copy.seo.projects.description,
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Sanjay Kumar - Projects & Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: copy.seo.projects.title,
    description: copy.seo.projects.description,
  },
}

// ============================================================================
// JSON-LD STRUCTURED DATA
// ============================================================================

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects & Case Studies",
  description: copy.seo.projects.description,
  author: {
    "@type": "Person",
    name: copy.about.personal.name,
    jobTitle: copy.about.personal.title,
    url: "https://www.hellosanjay.dev",
  },
  hasPart: getFeaturedProjects().map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    dateCreated: project.dates.split("–")[0].trim(),
    keywords: project.tags.join(", "),
  })),
}

// ============================================================================
// PROJECTS PAGE COMPONENT
// ============================================================================

export default function ProjectsPage() {
  const featuredProjects = getFeaturedProjects()
  const otherProjects = getNonFeaturedProjects()

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              {copy.projects.heading}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {copy.projects.subheading}
            </p>
          </div>

          {/* Featured Projects - Case Studies */}
          <section className="mb-20">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">
              {copy.projects.featuredHeading}
            </h2>
            <div className="space-y-12">
              {featuredProjects.map((project) => (
                <Card key={project.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Hero Image */}
                  {project.heroImage && (
                    <div className="relative h-64 md:h-80 w-full overflow-hidden bg-muted">
                      <Image
                        src={project.heroImage}
                        alt={project.images?.[0]?.alt || `${project.title} hero image`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                        priority={project.order === 1}
                      />
                    </div>
                  )}

                  <CardHeader>
                    {/* Title & Badge */}
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="mb-2 text-2xl md:text-3xl">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base md:text-lg">
                          {project.summary}
                        </CardDescription>
                      </div>
                      <Badge className="shrink-0" variant="default">
                        {copy.projects.featuredBadge}
                      </Badge>
                    </div>

                    {/* Meta Info Row */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground border-t border-b py-3 my-4">
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

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 8).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.stack.length > 8 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.stack.length - 8} more
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Challenge → Solution Grid */}
                    {(project.challenge || project.solution) && (
                      <div className="grid gap-6 md:grid-cols-2">
                        {project.challenge && (
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                              Challenge
                            </h4>
                            <p className="text-sm leading-relaxed">
                              {project.challenge}
                            </p>
                          </div>
                        )}
                        {project.solution && (
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                              Solution
                            </h4>
                            <p className="text-sm leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Key Contributions */}
                    {project.contributions.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                          Key Contributions
                        </h4>
                        <ul className="space-y-2">
                          {project.contributions.slice(0, 5).map((contribution, idx) => (
                            <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                              <span>{contribution}</span>
                            </li>
                          ))}
                        </ul>
                        {project.contributions.length > 5 && (
                          <p className="text-sm text-muted-foreground">
                            + {project.contributions.length - 5} more contributions
                          </p>
                        )}
                      </div>
                    )}

                    {/* Results */}
                    {project.results.length > 0 && (
                      <div className="rounded-lg border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 p-4">
                        <h4 className="mb-3 font-semibold text-sm uppercase tracking-wide text-green-900 dark:text-green-100">
                          Results & Impact
                        </h4>
                        <ul className="space-y-2">
                          {project.results.slice(0, 4).map((result, idx) => (
                            <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                              <span className="text-green-900 dark:text-green-100">
                                {result}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Architecture (Optional) */}
                    {project.architecture && (
                      <details className="group">
                        <summary className="cursor-pointer font-semibold text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors">
                          Technical Architecture ▸
                        </summary>
                        <p className="mt-2 text-sm leading-relaxed pl-4 border-l-2">
                          {project.architecture}
                        </p>
                      </details>
                    )}
                  </CardContent>

                  {/* Footer: CTAs */}
                  <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
                    {/* Internal Case Study Link */}
                    {project.detailHref && (
                      <Button variant="default" size="sm" asChild>
                        <CtaLink
                          href={project.detailHref}
                          aria-label={`View case study for ${project.title}`}
                        >
                          Case Study
                        </CtaLink>
                      </Button>
                    )}

                    {/* External Links (Demo, Documentation, etc.) - No GitHub */}
                    {project.links
                      .filter((link) => link.href !== "[ADD LINK]")
                      .map((link, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          size="sm"
                          asChild
                        >
                          <CtaLink
                            href={link.href}
                            aria-label={`${link.label} for ${project.title}`}
                          >
                            {link.kind === "demo" && <ExternalLink className="h-4 w-4" />}
                            {link.label}
                          </CtaLink>
                        </Button>
                      ))}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Other Projects - Compact Grid */}
          {otherProjects.length > 0 && (
            <section>
              <h2 className="mb-8 text-3xl font-bold tracking-tight">
                {copy.projects.moreProjectsHeading}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project) => (
                  <Card
                    key={project.slug}
                    className="flex flex-col overflow-hidden hover:shadow-md transition-shadow h-full"
                  >
                    {/* Image */}
                    {project.heroImage && (
                      <div className="relative h-48 w-full overflow-hidden bg-muted">
                        <Image
                          src={project.heroImage}
                          alt={project.images?.[0]?.alt || `${project.title} preview`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <CardHeader className="flex-1">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {project.summary}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      {/* Meta */}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{project.dates}</span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tags.length - 4}
                          </Badge>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter className="flex flex-wrap gap-2 border-t pt-3">
                      {/* Internal Case Study Link */}
                      {project.detailHref && (
                        <Button variant="ghost" size="sm" asChild className="flex-1">
                          <CtaLink
                            href={project.detailHref}
                            aria-label={`View case study for ${project.title}`}
                          >
                            Case Study
                          </CtaLink>
                        </Button>
                      )}

                      {/* External Links - No GitHub */}
                      {project.links
                        .filter((link) => link.href !== "[ADD LINK]")
                        .slice(0, 2)
                        .map((link, idx) => (
                          <Button
                            key={idx}
                            variant="ghost"
                            size="sm"
                            asChild
                            className="flex-1"
                          >
                            <CtaLink
                              href={link.href}
                              aria-label={`${link.label} for ${project.title}`}
                            >
                              {link.kind === "demo" && <ExternalLink className="h-4 w-4" />}
                              <span className="truncate">{link.label}</span>
                            </CtaLink>
                          </Button>
                        ))}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* CTA Footer */}
          <div className="mt-16 rounded-lg border bg-muted/30 p-8 text-center">
            <h3 className="mb-2 text-2xl font-bold">Interested in working together?</h3>
            <p className="mb-6 text-muted-foreground">
              I'm available for senior full-stack and frontend roles. Let's build something great.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <CtaLink href="/contact">Get in Touch</CtaLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <CtaLink href={copy.about.personal.linkedin}>
                  View LinkedIn
                </CtaLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
