import type { Metadata } from "next"
import { Code2, Server, Cloud, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SKILLS } from "@/lib/constants"
import { copy } from "@/content/copy"

export const metadata: Metadata = {
  title: copy.seo.skills.title,
  description: copy.seo.skills.description,
  keywords: copy.seo.skills.keywords,
}

const skillCategories = [
  {
    icon: Code2,
    title: copy.skills.frontendTitle,
    description: copy.skills.frontendDescription,
    skills: SKILLS.frontend,
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Server,
    title: copy.skills.backendTitle,
    description: copy.skills.backendDescription,
    skills: SKILLS.backend,
    color: "text-green-600 dark:text-green-400",
  },
  {
    icon: Cloud,
    title: copy.skills.cloudTitle,
    description: copy.skills.cloudDescription,
    skills: SKILLS.cloud,
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Wrench,
    title: copy.skills.otherTitle,
    description: copy.skills.otherDescription,
    skills: SKILLS.other,
    color: "text-orange-600 dark:text-orange-400",
  },
]

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {copy.skills.heading}
          </h1>
          <p className="text-xl text-foreground/70">
            {copy.skills.subheading}
          </p>
        </div>

        {/* Tech Stack */}
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category) => (
              <Card key={category.title} className="overflow-hidden">
                <CardHeader>
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`rounded-lg bg-foreground/5 p-3 ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Senior Competencies */}
        <section>
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold tracking-tight">
              {copy.skills.competenciesHeading}
            </h2>
            <p className="text-lg text-foreground/70">
              {copy.skills.competenciesSubheading}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.values(copy.skills.competencies).map((competency, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {competency.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">
                    {competency.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
