import type { Metadata } from "next"
import { Building2, Calendar, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Timeline } from "@/components/ui/timeline"
import Image from "next/image"
import { copy } from "@/content/copy"

export const metadata: Metadata = {
  title: copy.seo.experience.title,
  description: copy.seo.experience.description,
  keywords: copy.seo.experience.keywords,
}

export default function ExperiencePage() {
  const timelineData = copy.experience.experiences.map((exp) => ({
    title: exp.period,
    content: (
      <div key={exp.company}>
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
            <strong>{copy.experience.whatIChangedLabel}</strong> {exp.description}
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
            {copy.experience.achievementsHeading}
          </h4>
          {exp.achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border/50 bg-background/50 p-4 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                  {copy.experience.challengeLabel}
                </span>
                <p className="mt-1 text-sm text-foreground/80">
                  {achievement.challenge}
                </p>
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                  {copy.experience.actionLabel}
                </span>
                <p className="mt-1 text-sm text-foreground/80">
                  {achievement.action}
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                  {copy.experience.resultLabel}
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
              {copy.experience.projectPreview1}
            </div>
          </div>
          <div className="relative h-32 overflow-hidden rounded-lg border border-border bg-muted md:h-44 lg:h-60">
            <div className="flex h-full w-full items-center justify-center text-sm text-foreground/50">
              {copy.experience.projectPreview2}
            </div>
          </div>
          <div className="relative h-32 overflow-hidden rounded-lg border border-border bg-muted md:h-44 lg:h-60">
            <div className="flex h-full w-full items-center justify-center text-sm text-foreground/50">
              {copy.experience.dashboardView}
            </div>
          </div>
          <div className="relative h-32 overflow-hidden rounded-lg border border-border bg-muted md:h-44 lg:h-60">
            <div className="flex h-full w-full items-center justify-center text-sm text-foreground/50">
              {copy.experience.mobileAppView}
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
