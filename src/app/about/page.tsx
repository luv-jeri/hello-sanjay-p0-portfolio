import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Sanjay Kumar — Senior Full-stack Engineer",
  description: "Seven-plus years across SaaS, EdTech, EnergyTech; leadership at HighLevel; trainer and mentor.",
  keywords: ["software engineer bio", "senior frontend", "MERN", "MEAN", "mentoring", "accessibility"],
}

const workingPrinciples = [
  {
    title: "Communicate clearly. Partner with product/UI/QA/DevOps; drive alignment and unblock delivery",
    description: "Clear communication and tight collaboration across all teams to ensure smooth delivery.",
  },
  {
    title: "Own outcomes. Lead from architecture to release—web and mobile parity with Capacitor",
    description: "Full ownership from system design through production deployment, including mobile platforms.",
  },
  {
    title: "Raise the bar. Code reviews, modularization, caching, and rendering optimizations",
    description: "Continuous improvement through rigorous code quality practices and performance optimization.",
  },
  {
    title: "Mentor & teach. Instructor for MERN/MEAN; guide peers on complex stacks",
    description: "Share knowledge and mentor team members, having trained developers across multiple platforms.",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            About Me
          </h1>
          <p className="text-xl text-foreground/70">
            Senior full‑stack developer who ships complex products end‑to‑end
          </p>
        </div>

        {/* Technical Leader Profile */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Technical Leader</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I&apos;m a <strong>senior full-stack developer</strong> with 7+ years building and scaling web and mobile products
                across SaaS, EdTech, EnergyTech, and TravelTech. Today I lead frontend and full-stack initiatives at <strong>HighLevel</strong>,
                owning a next-gen Courses platform and a Canva-style credentials/badge builder—from greenfield architecture to production
                and mobile parity. I focus on micro-frontends (Module Federation), real-time WYSIWYG editors, accessibility, and performance.
              </p>
              <p>
                Earlier at <strong>ReNew Power (Climate Connect Digital)</strong>, I delivered a large-scale climate-tech platform with
                React, Next.js, TypeScript, Firebase, Node, and GCP, integrating real-time data, SSR, and secure auth. At <strong>Haspr</strong>,
                I drove full-stack delivery across modern stacks and mentored developers, while keeping pace with tools like Next.js and PWAs.
              </p>
              <p>
                I&apos;ve also trained new developers as a part-time instructor with <strong>Let&apos;s Upgrade, Newton School, and Coding Ninjas</strong>.
              </p>
              <p>
                I work <strong>product-first</strong>: clarify goals, model constraints, make architecture trade-offs, and ship. I integrate
                AI tools (Cursor/MCP/agents) to speed analysis, prototyping, and code quality reviews—without compromising safety. My toolkit
                includes React/Next.js, TypeScript, Node/Nest, Firebase/GCP, WebSockets, Canvas APIs, GSAP/Three.js, and Capacitor for web-to-mobile.
              </p>
              <p>
                If you need a lead who can partner with product, mentor peers, and deliver resilient systems—let&apos;s talk.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Concise Bio */}
        <section className="mb-16">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-2xl">Quick Overview</CardTitle>
              <CardDescription>The elevator pitch version</CardDescription>
            </CardHeader>
            <CardContent className="text-foreground/80 leading-relaxed">
              <p>
                Senior full-stack (SDE III) with 7+ years building React/Next.js/TypeScript/Node apps at scale. I currently
                lead Courses and a credentials/badge platform at HighLevel, including micro-frontends (Module Federation),
                real-time editors, accessibility, and web→mobile via Capacitor. Past work includes a climate-tech platform
                at ReNew Power with SSR, Firebase, and GCP. I&apos;ve mentored developers and taught MERN/MEAN as a part-time trainer.
                Comfortable across frontend, backend, and cloud with strong collaboration across product, QA, mobile, and DevOps.
                Open to senior frontend/full-stack roles. English/Hindi; based in Indore, India (remote-friendly).
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Working With Me */}
        <section>
          <h2 className="mb-6 text-3xl font-bold tracking-tight">
            Working with me
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {workingPrinciples.map((principle) => (
              <Card key={principle.title}>
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
