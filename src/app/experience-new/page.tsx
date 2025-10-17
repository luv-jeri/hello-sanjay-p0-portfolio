"use client"

import { Timeline } from "@/components/ui/timeline"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, MapPin } from "lucide-react"

const experienceTimeline = [
  {
    title: "2024 - Present",
    content: (
      <div className="space-y-6">
        <div>
          <div className="mb-4 flex items-start gap-3">
            <Building2 className="mt-1 h-5 w-5 text-foreground/60" />
            <div>
              <h3 className="text-2xl font-bold">SDE III / Senior Full‑Stack Developer</h3>
              <p className="text-lg text-foreground/80">HighLevel</p>
              <div className="mt-1 flex items-center gap-2 text-sm text-foreground/60">
                <MapPin className="h-4 w-4" />
                <span>Remote</span>
              </div>
            </div>
          </div>

          <p className="mb-6 text-foreground/70">
            <strong>What I changed:</strong> Turned two core product lines into modular, high‑performing apps across web and mobile.
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Module Federation</Badge>
            <Badge>Capacitor</Badge>
            <Badge>Firebase</Badge>
            <Badge>Canvas APIs</Badge>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="space-y-4">
          <Card className="border-blue-500/20 bg-blue-500/5">
            <CardHeader>
              <CardTitle className="text-lg">Micro-frontends Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-foreground/70">
                <strong>Challenge:</strong> Fragmented UI and slower iteration across large codebases.
              </p>
              <p className="text-sm text-foreground/70">
                <strong>Action:</strong> Implemented micro‑frontends with Module Federation; broke features into independently deployable modules.
              </p>
              <PointerHighlight>
                <p className="text-sm font-medium text-foreground">
                  <strong>Result:</strong> Faster iteration cycles and safer releases. Serving <strong className="text-blue-600 dark:text-blue-400">10,000+ active users</strong>.
                </p>
              </PointerHighlight>
            </CardContent>
          </Card>

          <Card className="border-purple-500/20 bg-purple-500/5">
            <CardHeader>
              <CardTitle className="text-lg">WYSIWYG Course Builder</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-foreground/70">
                <strong>Challenge:</strong> Course authoring needed rich, real‑time editing and device previews.
              </p>
              <p className="text-sm text-foreground/70">
                <strong>Action:</strong> Built a WYSIWYG Course Builder + Preview with responsive emulation.
              </p>
              <PointerHighlight>
                <p className="text-sm font-medium text-foreground">
                  <strong>Result:</strong> Reduced authoring friction by <strong className="text-purple-600 dark:text-purple-400">60%</strong>; higher engagement.
                </p>
              </PointerHighlight>
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-green-500/5">
            <CardHeader>
              <CardTitle className="text-lg">Web-to-Mobile Conversion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-foreground/70">
                <strong>Challenge:</strong> Brand parity across devices without rewriting stacks.
              </p>
              <p className="text-sm text-foreground/70">
                <strong>Action:</strong> Converted the web platform into a Capacitor‑based mobile app with feature parity.
              </p>
              <PointerHighlight>
                <p className="text-sm font-medium text-foreground">
                  <strong>Result:</strong> Single codebase across platforms; <strong className="text-green-600 dark:text-green-400">40% lower</strong> maintenance overhead.
                </p>
              </PointerHighlight>
            </CardContent>
          </Card>

          <Card className="border-orange-500/20 bg-orange-500/5">
            <CardHeader>
              <CardTitle className="text-lg">Canvas Badge Builder</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-foreground/70">
                <strong>Challenge:</strong> Visual credentials lacked customization and automation.
              </p>
              <p className="text-sm text-foreground/70">
                <strong>Action:</strong> Shipped a Canvas‑style Badge Builder with CSV bulk issuance and analytics.
              </p>
              <PointerHighlight>
                <p className="text-sm font-medium text-foreground">
                  <strong>Result:</strong> Faster credential programs; <strong className="text-orange-600 dark:text-orange-400">3x improvement</strong> in issuance speed.
                </p>
              </PointerHighlight>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    title: "2023 - 2024",
    content: (
      <div className="space-y-6">
        <div>
          <div className="mb-4 flex items-start gap-3">
            <Building2 className="mt-1 h-5 w-5 text-foreground/60" />
            <div>
              <h3 className="text-2xl font-bold">SDE 3</h3>
              <p className="text-lg text-foreground/80">ReNew Power (Climate Connect Digital)</p>
              <div className="mt-1 flex items-center gap-2 text-sm text-foreground/60">
                <MapPin className="h-4 w-4" />
                <span>Remote</span>
              </div>
            </div>
          </div>

          <p className="mb-6 text-foreground/70">
            <strong>What I changed:</strong> Delivered a large climate‑tech platform with SSR, real‑time data, and secure auth.
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Firebase</Badge>
            <Badge>GCP</Badge>
            <Badge>Redux</Badge>
            <Badge>SSR</Badge>
          </div>
        </div>

        <div className="space-y-4">
          <Card className="border-blue-500/20 bg-blue-500/5">
            <CardHeader>
              <CardTitle className="text-lg">SSR Implementation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-foreground/70">
                <strong>Challenge:</strong> Large initial load and SEO needs.
              </p>
              <p className="text-sm text-foreground/70">
                <strong>Action:</strong> Next.js SSR, modular React components, TypeScript + Zod for safety.
              </p>
              <PointerHighlight>
                <p className="text-sm font-medium text-foreground">
                  <strong>Result:</strong> <strong className="text-blue-600 dark:text-blue-400">50% faster</strong> first paint and better reliability.
                </p>
              </PointerHighlight>
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-green-500/5">
            <CardHeader>
              <CardTitle className="text-lg">Real-time Data Pipeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-foreground/70">
                <strong>Challenge:</strong> Real‑time monitoring and data integrity.
              </p>
              <p className="text-sm text-foreground/70">
                <strong>Action:</strong> Firebase realtime APIs, optimized data storage/retrieval, Redux state.
              </p>
              <PointerHighlight>
                <p className="text-sm font-medium text-foreground">
                  <strong>Result:</strong> Live updates with stable performance; handling <strong className="text-green-600 dark:text-green-400">500+ concurrent</strong> users.
                </p>
              </PointerHighlight>
            </CardContent>
          </Card>

          <Card className="border-purple-500/20 bg-purple-500/5">
            <CardHeader>
              <CardTitle className="text-lg">Authentication & Authorization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-foreground/70">
                <strong>Challenge:</strong> Secure access across roles.
              </p>
              <p className="text-sm text-foreground/70">
                <strong>Action:</strong> Implemented auth & authorization using Firebase and RBAC patterns.
              </p>
              <PointerHighlight>
                <p className="text-sm font-medium text-foreground">
                  <strong>Result:</strong> Reduced access issues and support tickets by <strong className="text-purple-600 dark:text-purple-400">75%</strong>.
                </p>
              </PointerHighlight>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    title: "2018 - 2023",
    content: (
      <div className="space-y-6">
        <div>
          <div className="mb-4 flex items-start gap-3">
            <Building2 className="mt-1 h-5 w-5 text-foreground/60" />
            <div>
              <h3 className="text-2xl font-bold">Senior Full‑Stack Developer</h3>
              <p className="text-lg text-foreground/80">Haspr</p>
              <div className="mt-1 flex items-center gap-2 text-sm text-foreground/60">
                <MapPin className="h-4 w-4" />
                <span>Indore, India</span>
              </div>
            </div>
          </div>

          <p className="mb-6 text-foreground/70">
            <strong>What I changed:</strong> Delivered multiple web apps; introduced Next.js, PWA patterns, and modern frontend practices.
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>Node.js</Badge>
            <Badge>Express</Badge>
            <Badge>PWA</Badge>
            <Badge>TypeScript</Badge>
          </div>
        </div>

        <Card className="border-blue-500/20 bg-blue-500/5">
          <CardContent className="pt-6 space-y-2">
            <PointerHighlight>
              <p className="text-sm font-medium text-foreground">
                Planned milestones, owned both frontend and backend, and shipped <strong className="text-blue-600 dark:text-blue-400">15+ responsive</strong>, maintainable apps. Adopted new tech (Next.js, PWA) to improve UX and performance.
              </p>
            </PointerHighlight>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    title: "2021 - 2022",
    content: (
      <div className="space-y-6">
        <div>
          <div className="mb-4 flex items-start gap-3">
            <Building2 className="mt-1 h-5 w-5 text-foreground/60" />
            <div>
              <h3 className="text-2xl font-bold">Full‑Stack Trainer (Part‑time)</h3>
              <p className="text-lg text-foreground/80">Let&apos;s Upgrade / Newton School / Coding Ninjas</p>
              <div className="mt-1 flex items-center gap-2 text-sm text-foreground/60">
                <MapPin className="h-4 w-4" />
                <span>Remote</span>
              </div>
            </div>
          </div>

          <p className="mb-6 text-foreground/70">
            <strong>What I changed:</strong> Taught advanced MERN/MEAN, JS best practices, and SDLC; ran live classes/seminars.
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            <Badge>Teaching</Badge>
            <Badge>MERN</Badge>
            <Badge>MEAN</Badge>
            <Badge>JavaScript</Badge>
            <Badge>Training</Badge>
          </div>
        </div>

        <Card className="border-green-500/20 bg-green-500/5">
          <CardContent className="pt-6 space-y-2">
            <PointerHighlight>
              <p className="text-sm font-medium text-foreground">
                Trained <strong className="text-green-600 dark:text-green-400">500+ students</strong> who went on to secure developer positions at top companies. Created comprehensive curriculum covering full-stack development lifecycle.
              </p>
            </PointerHighlight>
          </CardContent>
        </Card>
      </div>
    ),
  },
]

export default function ExperiencePage() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Experience
          </h1>
          <p className="text-xl text-foreground/70">
            Impact by role using Challenge → Action → Result
          </p>
        </div>
      </div>

      {/* Timeline */}
      <Timeline data={experienceTimeline} />
    </div>
  )
}
