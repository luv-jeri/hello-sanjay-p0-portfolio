"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const valueProps = [
  {
    icon: Briefcase,
    title: "For CTO/CXO",
    items: [
      "Architecture that balances speed, safety, and scale—micro-frontends, SSR, web→mobile with Capacitor, and performance budgets",
      "Module Federation for independently deployable modules and reduced coupling",
      "End-to-end ownership from architecture to production and mobile parity",
    ],
  },
  {
    icon: Users,
    title: "For HR/Recruiter",
    items: [
      "Senior full-stack (React/Next.js/TypeScript/Node/GCP/Firebase), SDE III ownership, cross-team delivery",
      "Education & credentialing domain expertise with 7+ years across SaaS, EdTech, EnergyTech",
      "English/Hindi fluent; mentored developers and taught MERN/MEAN as part-time trainer",
    ],
  },
  {
    icon: Wrench,
    title: "For Engineering Manager",
    items: [
      "Own the lifecycle—scoping, building, testing, releasing, mentoring, and iterating with UI/UX, QA, backend, and DevOps",
      "Real-time WYSIWYG editors, Canvas-based Badge Builder, and accessibility (keyboard navigation, screen readers)",
      "AI-assisted workflows (Cursor/MCP/agents) for faster, safer delivery without compromising quality",
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function ValueProps() {
  return (
    <section className="border-t border-foreground/10 bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Why work with me
          </h2>
          <p className="text-lg text-foreground/70">
            Tailored value for every stakeholder
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {valueProps.map((prop) => (
            <motion.div key={prop.title} variants={item}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-foreground/5">
                    <prop.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{prop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {prop.items.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-foreground/70">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
