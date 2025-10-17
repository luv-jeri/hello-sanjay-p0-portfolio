import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Highlighter } from "@/components/ui/highlighter"
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
            Senior{" "}
            <Highlighter action="circle" color="#87CEFA" animationDuration={800}>
              full‑stack developer
            </Highlighter>{" "}
            who ships{" "}
            <Highlighter action="underline" color="#FF9800">
              complex products end‑to‑end
            </Highlighter>
          </p>
        </div>

        {/* Technical Leader Profile */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{copy.about.technicalLeaderTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I'm a senior full-stack developer with{" "}
                <Highlighter action="highlight" color="#FFD700" isView>
                  7+ years
                </Highlighter>{" "}
                building and scaling web and mobile products across SaaS, EdTech, EnergyTech, and TravelTech. Today I lead frontend and full-stack initiatives at{" "}
                <Highlighter action="underline" color="#4CAF50">
                  HighLevel
                </Highlighter>
                , owning a next-gen Courses platform and a Canva-style credentials/badge builder—from greenfield architecture to production and mobile parity. I focus on{" "}
                <Highlighter action="highlight" color="#87CEFA" isView>
                  micro-frontends (Module Federation)
                </Highlighter>
                , real-time WYSIWYG editors, accessibility, and performance.
              </p>
              <p>{copy.about.technicalLeaderContent.paragraph2}</p>
              <p>{copy.about.technicalLeaderContent.paragraph3}</p>
              <p>
                I work{" "}
                <Highlighter action="highlight" color="#FFD700" isView>
                  product-first
                </Highlighter>
                : clarify goals, model constraints, make architecture trade-offs, and ship. I integrate{" "}
                <Highlighter action="underline" color="#FF9800">
                  AI tools (Cursor/MCP/agents)
                </Highlighter>{" "}
                to speed analysis, prototyping, and code quality reviews—without compromising safety. My toolkit includes React/Next.js, TypeScript, Node/Nest, Firebase/GCP, WebSockets, Canvas APIs, GSAP/Three.js, and Capacitor for web-to-mobile.
              </p>
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
              <p>
                Senior full-stack (SDE III) with{" "}
                <Highlighter action="underline" color="#87CEFA" isView>
                  7+ years
                </Highlighter>{" "}
                building React/Next.js/TypeScript/Node apps at scale. I currently lead Courses and a credentials/badge platform at HighLevel, including micro-frontends (Module Federation), real-time editors, accessibility, and web→mobile via Capacitor. Past work includes a climate-tech platform at ReNew Power with SSR, Firebase, and GCP. I've{" "}
                <Highlighter action="underline" color="#FF9800">
                  mentored developers and taught MERN/MEAN
                </Highlighter>{" "}
                as a part-time trainer. Comfortable across frontend, backend, and cloud with strong collaboration across product, QA, mobile, and DevOps. Open to senior frontend/full-stack roles. English/Hindi; based in Indore, India (remote-friendly).
              </p>
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
