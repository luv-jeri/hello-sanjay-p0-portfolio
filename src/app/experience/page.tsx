import type { Metadata } from "next"
import { Building2, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
}

const experiences: Experience[] = [
  {
    title: "SDE III — Senior Frontend/Full-stack Developer",
    company: "HighLevel",
    location: "Remote",
    period: "07/2024 – Present",
    description: "Modernized the product experience and modularized delivery across Courses and Credentials; enabled mobile parity.",
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
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Experience
          </h1>
          <p className="text-xl text-foreground/70">
            Impact by role using Challenge → Action → Result
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Vertical line for larger screens */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-foreground/10 md:left-4 md:block" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 hidden h-8 w-8 rounded-full border-4 border-background bg-foreground md:block" />

              <Card className="md:ml-16">
                <CardHeader>
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="mb-2 text-2xl">{exp.title}</CardTitle>
                      <CardDescription className="flex flex-col gap-1 text-base">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium text-foreground/80">
                            {exp.company}
                          </span>
                          <span className="text-foreground/60">· {exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </CardDescription>
                    </div>
                  </div>

                  <p className="mb-4 text-foreground/80">
                    <strong>What I changed:</strong> {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    {exp.achievements.map((achievement, achievementIdx) => (
                      <div
                        key={achievementIdx}
                        className="rounded-lg border border-foreground/10 bg-muted/30 p-4"
                      >
                        <div className="mb-2">
                          <span className="text-sm font-semibold text-foreground/70">
                            Challenge:
                          </span>
                          <p className="text-sm text-foreground/80">
                            {achievement.challenge}
                          </p>
                        </div>
                        <div className="mb-2">
                          <span className="text-sm font-semibold text-foreground/70">
                            Action:
                          </span>
                          <p className="text-sm text-foreground/80">
                            {achievement.action}
                          </p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-foreground/70">
                            Result:
                          </span>
                          <p className="text-sm text-foreground/80">
                            {achievement.result}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
