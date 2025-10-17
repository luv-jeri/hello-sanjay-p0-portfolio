import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { copy } from "@/content/copy"

export const metadata: Metadata = {
  title: copy.seo.about.title,
  description: copy.seo.about.description,
  keywords: copy.seo.about.keywords,
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {copy.about.heading}
          </h1>
          <p className="text-xl text-foreground/70">
            {copy.about.subheading}
          </p>
        </div>

        {/* Technical Leader Profile */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{copy.about.technicalLeaderTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80 leading-relaxed">
              <p>{copy.about.technicalLeaderContent.paragraph1}</p>
              <p>{copy.about.technicalLeaderContent.paragraph2}</p>
              <p>{copy.about.technicalLeaderContent.paragraph3}</p>
              <p>{copy.about.technicalLeaderContent.paragraph4}</p>
              <p>{copy.about.technicalLeaderContent.paragraph5}</p>
            </CardContent>
          </Card>
        </section>

        {/* Concise Bio */}
        <section className="mb-16">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-2xl">{copy.about.quickOverviewTitle}</CardTitle>
              <CardDescription>{copy.about.quickOverviewDescription}</CardDescription>
            </CardHeader>
            <CardContent className="text-foreground/80 leading-relaxed">
              <p>{copy.about.quickOverviewContent}</p>
            </CardContent>
          </Card>
        </section>

        {/* Working With Me */}
        <section>
          <h2 className="mb-6 text-3xl font-bold tracking-tight">
            {copy.about.workingWithMeHeading}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {Object.values(copy.about.principles).map((principle, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="mb-2 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600 dark:text-green-500" />
                    <CardTitle className="text-lg leading-tight">
                      {principle.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">
                    {principle.description}
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
