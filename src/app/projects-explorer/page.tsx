"use client"

import * as React from "react"
import { Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ProjectsExplorer } from "@/components/file-tree"
import {
  getAllProjects,
  getAllDomains,
  getAllTags,
  getAllStack,
  filterProjects,
  type Project,
} from "@/content/projects"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { CtaLink } from "@/components/cta-link"

// ============================================================================
// PROJECTS EXPLORER PAGE - FILTERABLE/SEARCHABLE GRID + FILE TREE VIEW
// ============================================================================

type ViewMode = "grid" | "tree"

export default function ProjectsExplorerPage() {
  const [viewMode, setViewMode] = React.useState<ViewMode>("tree")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [domainFilter, setDomainFilter] = React.useState<string>("all")
  const [tagFilter, setTagFilter] = React.useState<string>("all")
  const [stackFilter, setStackFilter] = React.useState<string>("all")
  const [sortBy, setSortBy] = React.useState<"recent" | "alpha">("recent")

  // Filter projects based on active filters
  const filteredProjects = React.useMemo(() => {
    const filters = {
      domain: domainFilter,
      tag: tagFilter,
      stack: stackFilter,
      search: searchQuery || undefined,
    }

    let filtered = filterProjects(filters)

    // Sort
    if (sortBy === "alpha") {
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title))
    } else {
      // Recent (by order field, lower = more recent)
      filtered = filtered.sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
    }

    return filtered
  }, [searchQuery, domainFilter, tagFilter, stackFilter, sortBy])

  const hasActiveFilters = Boolean(
    searchQuery ||
    (domainFilter && domainFilter !== "all") ||
    (tagFilter && tagFilter !== "all") ||
    (stackFilter && stackFilter !== "all")
  )

  const clearFilters = () => {
    setSearchQuery("")
    setDomainFilter("all")
    setTagFilter("all")
    setStackFilter("all")
  }

  const allProjects = getAllProjects()

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Header */}
      <div className="mb-8 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Projects Explorer
        </h1>
        <p className="text-lg text-muted-foreground">
          Browse projects by file tree or explore the filterable grid below. Click files for case studies, architecture, and results.
        </p>
      </div>

      {/* View Mode Toggle */}
      <div className="mb-6 flex items-center gap-4">
        <div className="inline-flex rounded-lg border p-1">
          <button
            onClick={() => setViewMode("tree")}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors",
              viewMode === "tree"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            File Tree View
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors",
              viewMode === "grid"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Grid View
          </button>
        </div>

        {viewMode === "grid" && hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="h-4 w-4 mr-1" />
            Clear Filters
          </Button>
        )}
      </div>

      {/* Tree View */}
      {viewMode === "tree" && (
        <>
          <ProjectsExplorer />

          {/* Hint */}
          <div className="mt-8 rounded-lg border border-border bg-muted/30 p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Tip:</strong> You can also use the terminal (press{" "}
              <kbd className="px-1.5 py-0.5 bg-background rounded text-xs font-mono border border-border">
                ~
              </kbd>
              ) and type{" "}
              <code className="text-emerald-600 dark:text-emerald-400">open projects/courses</code> to
              navigate to a specific project.
            </p>
          </div>
        </>
      )}

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="space-y-6">
          {/* Filters & Search Bar */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filter & Search
              </CardTitle>
              <CardDescription>
                Narrow down projects by domain, tech stack, tags, or keyword search.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search projects by title, summary, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filter Row */}
              <div className="grid gap-4 md:grid-cols-4">
                {/* Domain Filter */}
                <Select value={domainFilter} onValueChange={setDomainFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Domains" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Domains</SelectItem>
                    {getAllDomains().map((domain) => (
                      <SelectItem key={domain} value={domain}>
                        {domain}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Tag Filter */}
                <Select value={tagFilter} onValueChange={setTagFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Tags" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Tags</SelectItem>
                    {getAllTags().map((tag) => (
                      <SelectItem key={tag} value={tag}>
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Tech Stack Filter */}
                <Select value={stackFilter} onValueChange={setStackFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Tech" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Tech</SelectItem>
                    {getAllStack().map((tech) => (
                      <SelectItem key={tech} value={tech}>
                        {tech}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Sort */}
                <Select value={sortBy} onValueChange={(value: string) => setSortBy(value as "recent" | "alpha")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="alpha">A → Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {searchQuery && (
                    <Badge variant="secondary" className="gap-1">
                      Search: {searchQuery}
                      <button
                        onClick={() => setSearchQuery("")}
                        className="ml-1 hover:text-foreground"
                        aria-label="Clear search"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {domainFilter && domainFilter !== "all" && (
                    <Badge variant="secondary" className="gap-1">
                      Domain: {domainFilter}
                      <button
                        onClick={() => setDomainFilter("all")}
                        className="ml-1 hover:text-foreground"
                        aria-label="Clear domain filter"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {tagFilter && tagFilter !== "all" && (
                    <Badge variant="secondary" className="gap-1">
                      Tag: {tagFilter}
                      <button
                        onClick={() => setTagFilter("all")}
                        className="ml-1 hover:text-foreground"
                        aria-label="Clear tag filter"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {stackFilter && stackFilter !== "all" && (
                    <Badge variant="secondary" className="gap-1">
                      Tech: {stackFilter}
                      <button
                        onClick={() => setStackFilter("all")}
                        className="ml-1 hover:text-foreground"
                        aria-label="Clear tech filter"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            Showing <strong className="text-foreground">{filteredProjects.length}</strong> of{" "}
            <strong className="text-foreground">{allProjects.length}</strong> projects
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">
                No projects match your filters. Try adjusting your criteria.
              </p>
              <Button variant="ghost" className="mt-4" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </Card>
          )}
        </div>
      )}
    </div>
  )
}

// ============================================================================
// PROJECT CARD COMPONENT (for Grid View)
// ============================================================================

type ProjectCardProps = {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="group flex flex-col overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-200 h-full">
      {/* Image */}
      {project.heroImage && (
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <Image
            src={project.heroImage}
            alt={project.images?.[0]?.alt || `${project.title} preview`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          {project.featured && (
            <div className="absolute top-2 right-2">
              <Badge>Featured</Badge>
            </div>
          )}
        </div>
      )}

      <CardHeader className="flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-xl line-clamp-2">{project.title}</CardTitle>
        </div>
        <CardDescription className="line-clamp-3">{project.summary}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Meta */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Badge variant="outline" className="text-xs">
            {project.domain}
          </Badge>
          <span>•</span>
          <span>{project.dates}</span>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.stack.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.stack.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="border-t pt-3">
        {project.detailHref ? (
          <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
            <CtaLink href={project.detailHref}>
              View Case Study
            </CtaLink>
          </Button>
        ) : project.links.length > 0 && project.links[0].href !== "[ADD LINK]" ? (
          <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
            <CtaLink href={project.links[0].href}>
              {project.links[0].label}
            </CtaLink>
          </Button>
        ) : (
          <Button variant="outline" size="sm" className="w-full" disabled>
            Coming Soon
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
