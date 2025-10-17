import type { Metadata } from "next"
import { Building2, Calendar, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Timeline } from "@/components/ui/timeline"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Experience — HighLevel, ReNew Power, Haspr",
  description: "Challenge → Action → Result outcomes from SDE III and prior roles, including SSR, real-time, and micro-frontends.",
  keywords: ["SDE III", "SSR", "Firebase", "GCP", "Module Federation", "performance optimization"],
}

type Achievement = {
  challenge: string
  action: string
  result: string
}

type Experience = {
  title: string
  company: string
  location: string
  period: string
  description: string
  achievements: Achievement[]
  tags: string[]
  logo?: string
}

const experiences: Experience[] = [
  {
    title: "SDE III — Senior Frontend/Full-stack Developer",
    company: "HighLevel",
    location: "Remote",
    period: "07/2024 – Present",
    description: "Modernized the product experience and modularized delivery across Courses and Credentials; enabled mobile parity.",
    logo: "/company_logo/goHighLevel.webp",
    achievements: [
      {
        challenge: "Build two new product lines with high customization and scale.",
        action: "Led end-to-end architecture; designed real-time WYSIWYG Course Builder and device previews.",
        result: "Faster iteration and better authoring UX. [ADD METRIC]",
      },
      {
        challenge: "Fragile monolith delivery.",
        action: "Implemented Module Federation for micro-frontends.",
        result: "Independently deployable modules and reduced coupling. [ADD METRIC]",
      },
      {
        challenge: "Branding and accessibility.",
        action: "Added theme customization, multi-language subtitles, keyboard navigation, screen-reader support.",
        result: "Improved accessibility and adoption. [ADD METRIC]",
      },
      {
        challenge: "Web-only surface.",
        action: "Converted platform to Capacitor mobile app.",
        result: "Cross-platform parity and increased engagement. [ADD METRIC]",
      },
      {
        challenge: "Delivery speed.",
        action: "Mentored peers, improved modularity/caching, and drove code reviews.",
        result: "Cleaner releases and performance gains. [ADD METRIC]",
      },
    ],
    tags: ["React", "TypeScript", "Module Federation", "Capacitor", "Firebase", "Canvas APIs", "Next.js"],
  },
  {
    title: "SDE 3 — Full-stack Developer",
    company: "ReNew Power (Climate Connect Digital)",
    location: "Remote",
    period: "03/2023 – 07/2024",
    description: "Brought SSR, TypeScript, and real-time data to a climate-tech platform.",
    logo: "/company_logo/ReNew.svg",
    achievements: [
      {
        challenge: "Slow initial loads.",
        action: "Implemented Next.js SSR.",
        result: "Faster first paint and better SEO. [ADD METRIC]",
      },
      {
        challenge: "Unreliable data sync.",
        action: "Integrated Firebase realtime APIs; structured state management.",
        result: "Consistent live data at scale. [ADD METRIC]",
      },
      {
        challenge: "Quality and safety.",
        action: "TypeScript, auth flows, and code reviews.",
        result: "Fewer regressions and safer releases. [ADD METRIC]",
      },
    ],
    tags: ["React", "Next.js", "TypeScript", "Firebase", "GCP", "Redux", "SSR", "Node.js"],
  },
  {
    title: "Senior Full-Stack Developer",
    company: "Haspr",
    location: "Indore, India",
    period: "09/2018 – 01/2023",
    description: "Delivered end-to-end web apps and adopted modern frameworks (Next.js, PWAs).",
    logo: "/company_logo/haspr logo.svg",
    achievements: [
      {
        challenge: "Fragmented UX.",
        action: "Owned front- and back-end integration with a developer-centric approach.",
        result: "Seamless experiences. [ADD METRIC]",
      },
      {
        challenge: "Evolving tools.",
        action: "Continuous learning and tech adoption.",
        result: "Upgraded capabilities and delivery speed. [ADD METRIC]",
      },
    ],
    tags: ["React", "Next.js", "Node.js", "Express", "PWA", "TypeScript", "MongoDB"],
  },
  {
    title: "Full-Stack Trainer (Part-time)",
    company: "Let's Upgrade / Newton School / Coding Ninjas",
    location: "Remote",
    period: "01/2021 – 01/2022",
    description: "Taught MERN/MEAN, JS best practices, SDLC; delivered live and offline sessions. [ADD LINK]",
    logo: "/company_logo/lets upgrade.png",
    achievements: [
      {
        challenge: "New developers needed practical, industry-ready skills.",
        action: "Designed curriculum and delivered hands-on training on MERN/MEAN stack, JavaScript best practices, and SDLC.",
        result: "Successfully trained developers with live classes and seminars; improved job placement rates.",
      },
    ],
    tags: ["Teaching", "MERN", "MEAN", "JavaScript", "Training", "Mentoring"],
  },
]

export default function ExperiencePage() {
  const timelineData = experiences.map((exp) => ({
    title: exp.period,
    content: (
      <div>
        {/* Company Header */}
        <div className="mb-6 rounded-lg border border-border/50 bg-muted/30 p-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="mb-2 text-2xl font-bold text-foreground">
                {exp.title}
              </h3>
              <div className="mb-2 flex items-center gap-2 text-base text-foreground/80">
                <Building2 className="h-4 w-4" />
                <span className="font-medium">{exp.company}</span>
                <span className="text-foreground/60">· {exp.location}</span>
              </div>
              <div className="mb-3 flex items-center gap-2 text-sm text-foreground/70">
                <Calendar className="h-4 w-4" />
                <span>{exp.period}</span>
              </div>
            </div>
            {/* Company Logo */}
            <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg border border-border bg-background p-2">
              {exp.logo ? (
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              ) : (
                <Building2 className="h-8 w-8 text-foreground/50" />
              )}
            </div>
          </div>

          <p className="mb-4 text-sm text-foreground/80 md:text-base">
            <strong>What I changed:</strong> {exp.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8 space-y-4">
          <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <Award className="h-5 w-5" />
            Key Achievements
          </h4>
          {exp.achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border/50 bg-background/50 p-4 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                  Challenge
                </span>
                <p className="mt-1 text-sm text-foreground/80">
                  {achievement.challenge}
                </p>
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                  Action
                </span>
                <p className="mt-1 text-sm text-foreground/80">
                  {achievement.action}
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                  Result
                </span>
                <p className="mt-1 text-sm text-foreground/80">
                  {achievement.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Images Grid - Dummy Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-32 overflow-hidden rounded-lg border border-border bg-muted md:h-44 lg:h-60">
            <div className="flex h-full w-full items-center justify-center text-sm text-foreground/50">
              Project Preview 1
            </div>
          </div>
          <div className="relative h-32 overflow-hidden rounded-lg border border-border bg-muted md:h-44 lg:h-60">
            <div className="flex h-full w-full items-center justify-center text-sm text-foreground/50">
              Project Preview 2
            </div>
          </div>
          <div className="relative h-32 overflow-hidden rounded-lg border border-border bg-muted md:h-44 lg:h-60">
            <div className="flex h-full w-full items-center justify-center text-sm text-foreground/50">
              Dashboard View
            </div>
          </div>
          <div className="relative h-32 overflow-hidden rounded-lg border border-border bg-muted md:h-44 lg:h-60">
            <div className="flex h-full w-full items-center justify-center text-sm text-foreground/50">
              Mobile App View
            </div>
          </div>
        </div>
      </div>
    ),
  }))

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={timelineData} />
    </div>
  )
}
