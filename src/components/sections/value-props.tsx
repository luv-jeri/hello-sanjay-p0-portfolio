"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const valueProps = [
  {
    icon: Briefcase,
    title: "For CTO/CXO",
    color: "from-cyan-500 to-blue-600",
    shadowColor: "shadow-cyan-500/30",
    iconBg: "bg-gradient-to-br from-cyan-500/20 to-blue-600/20",
    iconColor: "text-cyan-500",
    items: [
      "De‑risk delivery with owned product lifecycles from greenfield to production",
      "Micro‑frontend architecture and Module Federation for scalable teams",
      "Convert web to mobile (Capacitor) without duplicating stacks",
    ],
  },
  {
    icon: Users,
    title: "For HR/Recruiter",
    color: "from-purple-500 to-pink-600",
    shadowColor: "shadow-purple-500/30",
    iconBg: "bg-gradient-to-br from-purple-500/20 to-pink-600/20",
    iconColor: "text-purple-500",
    items: [
      "7+ years; MERN/MEAN; React/Next/TypeScript/Node/Firebase/GCP; SSR; auth; real‑time",
      "Experience across SaaS, EdTech, EnergyTech, TravelTech",
      "English/Hindi; team collaboration, code reviews, mentoring",
    ],
  },
  {
    icon: Wrench,
    title: "For Engineering Manager",
    color: "from-emerald-500 to-teal-600",
    shadowColor: "shadow-emerald-500/30",
    iconBg: "bg-gradient-to-br from-emerald-500/20 to-teal-600/20",
    iconColor: "text-emerald-500",
    items: [
      "Built WYSIWYG editors, Canvas‑based Badge Builder, and threaded commenting",
      "SSR with Next.js, performance optimizations, accessibility upgrades",
      "Strong DX: TypeScript, Zod, modularization, caching, CI/CD",
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
              <Card className={`group h-full border-2 transition-all hover:border-transparent hover:shadow-2xl ${prop.shadowColor}`}>
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${prop.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
                <CardHeader className="relative">
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${prop.iconBg} shadow-lg`}>
                    <prop.icon className={`h-7 w-7 ${prop.iconColor}`} />
                  </div>
                  <CardTitle className="bg-gradient-to-r bg-clip-text text-transparent from-foreground to-foreground/70">
                    {prop.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3">
                    {prop.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-foreground/70">
                        <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br ${prop.color}`} />
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
