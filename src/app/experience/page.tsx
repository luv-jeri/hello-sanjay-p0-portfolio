"use client"

import { Timeline } from "@/components/ui/timeline"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { Badge } from "@/components/ui/badge"

const experienceTimeline = [
  {
    title: "2024",
    content: (
      <div>
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-bold text-foreground md:text-2xl">
            SDE III / Senior Full-Stack Developer
          </h3>
          <p className="text-base font-semibold text-foreground/80 md:text-lg">
            HighLevel · Remote
          </p>
        </div>

        <p className="mb-8 text-xs font-normal text-foreground/70 md:text-sm">
          Turned two core product lines into modular, high-performing apps across web and mobile.
          Architected micro-frontends with Module Federation, built WYSIWYG Course Builder, and
          converted web platform to Capacitor mobile app.
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Module Federation</Badge>
          <Badge variant="secondary">Capacitor</Badge>
          <Badge variant="secondary">Firebase</Badge>
          <Badge variant="secondary">Canvas APIs</Badge>
        </div>

        {/* Key Achievements - Text List */}
        <div className="mb-8 space-y-3">
          <div className="flex items-start gap-2 text-xs text-foreground/70 md:text-sm">
            <span className="text-primary">✅</span>
            <div>
              <strong>Micro-frontends Architecture:</strong> Implemented Module Federation serving{" "}
              <PointerHighlight>
                <strong className="text-primary">10,000+ active users</strong>
              </PointerHighlight>
            </div>
          </div>

          <div className="flex items-start gap-2 text-xs text-foreground/70 md:text-sm">
            <span className="text-accent">✅</span>
            <div>
              <strong>WYSIWYG Course Builder:</strong> Real-time editing with responsive previews, reduced friction by{" "}
              <PointerHighlight>
                <strong className="text-accent">60%</strong>
              </PointerHighlight>
            </div>
          </div>

          <div className="flex items-start gap-2 text-xs text-foreground/70 md:text-sm">
            <span className="text-green-600">✅</span>
            <div>
              <strong>Web-to-Mobile:</strong> Capacitor conversion achieved{" "}
              <PointerHighlight>
                <strong className="text-green-600">40% lower</strong>
              </PointerHighlight>{" "}
              maintenance overhead
            </div>
          </div>

          <div className="flex items-start gap-2 text-xs text-foreground/70 md:text-sm">
            <span className="text-pink-500">✅</span>
            <div>
              <strong>Canvas Badge Builder:</strong> CSV bulk issuance with{" "}
              <PointerHighlight>
                <strong className="text-pink-500">3x improvement</strong>
              </PointerHighlight>{" "}
              in speed
            </div>
          </div>
          <div className="flex items-start gap-2 text-xs text-foreground/70 md:text-sm">
            <span className="text-purple-500">✅</span>
            <div>
              <strong>Accessibility & i18n:</strong> Multilingual subtitles, keyboard navigation, screen-reader support
            </div>
          </div>
        </div>

        {/* Images placeholder - Can be added later */}
        <div className="mt-6 text-xs text-foreground/50">
          [Project screenshots can be added here in 2x2 grid]
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-bold text-foreground md:text-2xl">
            SDE 3
          </h3>
          <p className="text-base font-semibold text-foreground/80 md:text-lg">
            ReNew Power (Climate Connect Digital) · Remote
          </p>
        </div>

        <p className="mb-8 text-xs font-normal text-foreground/70 md:text-sm">
          Delivered a large climate-tech platform with SSR, real-time data, and secure authentication.
          Built with React, Next.js, TypeScript, Firebase, and GCP, integrating real-time monitoring
          and scalable data flows.
        </p>

        <div className="mb-6">
          <div className="mb-4 flex items-start gap-2 text-xs text-foreground/70 md:text-sm">
            <span className="text-primary">✅</span>
            <div>
              <strong>SSR Implementation:</strong>{" "}
              <PointerHighlight>
                <strong className="text-primary">50% faster</strong>
              </PointerHighlight>{" "}
              first paint with Next.js
            </div>
          </div>
          <div className="mb-4 flex items-start gap-2 text-xs text-foreground/70 md:text-sm">
            <span className="text-green-600">✅</span>
            <div>
              <strong>Real-time Pipeline:</strong> Handling{" "}
              <PointerHighlight>
                <strong className="text-green-600">500+ concurrent users</strong>
              </PointerHighlight>
            </div>
          </div>
          <div className="flex items-start gap-2 text-xs text-foreground/70 md:text-sm">
            <span className="text-accent">✅</span>
            <div>
              <strong>Auth & Security:</strong> Reduced support tickets by{" "}
              <PointerHighlight>
                <strong className="text-accent">75%</strong>
              </PointerHighlight>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Firebase</Badge>
          <Badge variant="secondary">GCP</Badge>
          <Badge variant="secondary">Redux</Badge>
        </div>
      </div>
    ),
  },
  {
    title: "2018 - 2023",
    content: (
      <div>
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-bold text-foreground md:text-2xl">
            Senior Full-Stack Developer
          </h3>
          <p className="text-base font-semibold text-foreground/80 md:text-lg">
            Haspr · Indore, India
          </p>
        </div>

        <p className="mb-8 text-xs font-normal text-foreground/70 md:text-sm">
          Delivered multiple web applications; introduced Next.js, PWA patterns, and modern
          frontend practices. Owned both frontend and backend development.
        </p>

        <div className="mb-6 space-y-3">
          <div className="flex items-start gap-2 text-xs text-foreground/70 md:text-sm">
            <span className="text-primary">✅</span>
            <div>
              Shipped{" "}
              <PointerHighlight>
                <strong className="text-primary">15+ responsive apps</strong>
              </PointerHighlight>{" "}
              with maintainable architecture
            </div>
          </div>
          <div className="flex items-start gap-2 text-xs text-foreground/70 md:text-sm">
            <span className="text-accent">✅</span>
            <div>
              Introduced Next.js and PWA patterns for improved UX and performance
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">Node.js</Badge>
          <Badge variant="secondary">Express</Badge>
          <Badge variant="secondary">PWA</Badge>
        </div>
      </div>
    ),
  },
  {
    title: "2021 - 2022",
    content: (
      <div>
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-bold text-foreground md:text-2xl">
            Full-Stack Trainer (Part-time)
          </h3>
          <p className="text-base font-semibold text-foreground/80 md:text-lg">
            Let&apos;s Upgrade / Newton School / Coding Ninjas · Remote
          </p>
        </div>

        <p className="mb-4 text-xs font-normal text-foreground/70 md:text-sm">
          Taught advanced MERN/MEAN stack, JavaScript best practices, and SDLC. Ran live
          classes and seminars for aspiring developers.
        </p>

        <div className="mb-6">
          <div className="flex items-start gap-2 text-xs text-foreground/70 md:text-sm">
            <span className="text-green-600">✅</span>
            <div>
              Trained{" "}
              <PointerHighlight>
                <strong className="text-green-600">500+ students</strong>
              </PointerHighlight>{" "}
              who secured developer positions
            </div>
          </div>
          <div className="mt-3 flex items-start gap-2 text-xs text-foreground/70 md:text-sm">
            <span className="text-accent">✅</span>
            <div>
              Created comprehensive curriculum covering full-stack development lifecycle
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Teaching</Badge>
          <Badge variant="secondary">MERN Stack</Badge>
          <Badge variant="secondary">JavaScript</Badge>
          <Badge variant="secondary">Training</Badge>
        </div>
      </div>
    ),
  },
]

export default function ExperiencePage() {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={experienceTimeline} />
    </div>
  )
}
