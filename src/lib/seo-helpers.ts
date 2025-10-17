// ============================================================================
// SEO & SCHEMA HELPERS FOR PROJECTS
// ============================================================================

import { type Project } from "@/content/projects"
import { copy } from "@/content/copy"

// ============================================================================
// PROJECT SEO METADATA
// ============================================================================

export type ProjectSEOMetadata = {
  title: string
  description: string
  keywords: string[]
  openGraph: {
    title: string
    description: string
    type: string
    images: Array<{
      url: string
      width: number
      height: number
      alt: string
    }>
  }
  twitter: {
    card: string
    title: string
    description: string
    images?: string[]
  }
}

/**
 * Generate SEO metadata for a specific project
 */
export const getProjectSEO = (project: Project): ProjectSEOMetadata => {
  const title = project.seoTitle || `${project.title} – Sanjay Kumar`
  const description =
    project.seoDescription ||
    project.summary ||
    `${project.title}: ${project.role} at ${project.company || "Personal Project"}`

  const ogImage = project.heroImage || project.images?.[0]?.src || "/og-default.jpg"

  return {
    title,
    description,
    keywords: [
      ...project.tags,
      ...project.stack,
      project.domain,
      project.role,
      "case study",
      "portfolio",
    ],
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.images?.[0]?.alt || `${project.title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

// ============================================================================
// JSON-LD STRUCTURED DATA
// ============================================================================

/**
 * Generate JSON-LD structured data for a project
 * Use schema.org CreativeWork or SoftwareApplication
 */
export const getProjectJsonLd = (project: Project) => {
  const startDate = project.dates.split("–")[0].trim()
  const endDate = project.dates.split("–")[1]?.trim() || "Present"

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    author: {
      "@type": "Person",
      name: copy.about.personal.name,
      jobTitle: copy.about.personal.title,
      url: "https://www.hellosanjay.dev",
      sameAs: [copy.about.personal.linkedin, copy.about.personal.github],
    },
    dateCreated: startDate,
    dateModified: endDate === "Present" ? new Date().toISOString().split("T")[0] : endDate,
    keywords: [...project.tags, ...project.stack].join(", "),
    image: project.heroImage || project.images?.[0]?.src,
    ...(project.company && {
      publisher: {
        "@type": "Organization",
        name: project.company,
      },
    }),
    ...(project.links.length > 0 && {
      url: project.links.find((l) => l.href !== "[ADD LINK]")?.href,
    }),
  }
}

/**
 * Generate JSON-LD for SoftwareApplication (alternative for tech projects)
 */
export const getProjectSoftwareJsonLd = (project: Project) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.summary,
    applicationCategory: project.domain,
    operatingSystem: "Web, Cross-platform",
    creator: {
      "@type": "Person",
      name: copy.about.personal.name,
      jobTitle: copy.about.personal.title,
    },
    datePublished: project.dates.split("–")[0].trim(),
    softwareVersion: "1.0",
    inLanguage: "en",
    keywords: [...project.tags, ...project.stack].join(", "),
    image: project.heroImage || project.images?.[0]?.src,
    ...(project.links.length > 0 && {
      url: project.links.find((l) => l.href !== "[ADD LINK]")?.href,
    }),
  }
}

/**
 * Generate JSON-LD for a collection of projects (for /projects page)
 */
export const getProjectsCollectionJsonLd = (projects: Project[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects & Case Studies – Sanjay Kumar",
    description: copy.seo.projects.description,
    url: "https://www.hellosanjay.dev/projects",
    author: {
      "@type": "Person",
      name: copy.about.personal.name,
      jobTitle: copy.about.personal.title,
      url: "https://www.hellosanjay.dev",
    },
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      dateCreated: project.dates.split("–")[0].trim(),
      keywords: [...project.tags, ...project.stack].join(", "),
      image: project.heroImage || project.images?.[0]?.src,
    })),
  }
}

// ============================================================================
// BREADCRUMB JSON-LD
// ============================================================================

export const getProjectBreadcrumbJsonLd = (project: Project) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.hellosanjay.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://www.hellosanjay.dev/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://www.hellosanjay.dev/projects/${project.slug}`,
      },
    ],
  }
}

// ============================================================================
// SITEMAP HELPERS
// ============================================================================

export type SitemapEntry = {
  url: string
  lastModified: Date
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority: number
}

/**
 * Generate sitemap entries for all projects
 */
export const getProjectSitemapEntries = (projects: Project[]): SitemapEntry[] => {
  return projects.map((project) => ({
    url: `https://www.hellosanjay.dev/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: project.featured ? 0.9 : 0.7,
  }))
}

// ============================================================================
// SOCIAL SHARE HELPERS
// ============================================================================

/**
 * Generate social share URLs for a project
 */
export const getProjectShareUrls = (project: Project) => {
  const url = encodeURIComponent(`https://www.hellosanjay.dev/projects/${project.slug}`)
  const title = encodeURIComponent(project.title)
  const description = encodeURIComponent(project.summary)

  return {
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    email: `mailto:?subject=${title}&body=${description}%0A%0A${url}`,
    copyLink: `https://www.hellosanjay.dev/projects/${project.slug}`,
  }
}

// ============================================================================
// ALT TEXT VALIDATOR
// ============================================================================

/**
 * Validate alt text length (should be ≤125 chars per WCAG guidelines)
 */
export const validateAltText = (altText: string): { valid: boolean; message?: string } => {
  if (!altText || altText.trim().length === 0) {
    return { valid: false, message: "Alt text is required for accessibility" }
  }

  if (altText.length > 125) {
    return {
      valid: false,
      message: `Alt text is ${altText.length} chars (max 125). Consider shortening.`,
    }
  }

  return { valid: true }
}

/**
 * Validate all project images for alt text compliance
 */
export const validateProjectImages = (project: Project): Array<{ image: string; error: string }> => {
  const errors: Array<{ image: string; error: string }> = []

  project.images?.forEach((image, idx) => {
    const validation = validateAltText(image.alt)
    if (!validation.valid) {
      errors.push({
        image: `Image ${idx + 1} (${image.src})`,
        error: validation.message || "Invalid alt text",
      })
    }
  })

  return errors
}
