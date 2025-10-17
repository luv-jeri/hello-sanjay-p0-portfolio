"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { copy } from "@/content/copy"

const valueProps = [
  {
    icon: Briefcase,
    title: copy.valueProps.cto.title,
    items: [
      copy.valueProps.cto.item1,
      copy.valueProps.cto.item2,
      copy.valueProps.cto.item3,
    ],
  },
  {
    icon: Users,
    title: copy.valueProps.hr.title,
    items: [
      copy.valueProps.hr.item1,
      copy.valueProps.hr.item2,
      copy.valueProps.hr.item3,
    ],
  },
  {
    icon: Wrench,
    title: copy.valueProps.em.title,
    items: [
      copy.valueProps.em.item1,
      copy.valueProps.em.item2,
      copy.valueProps.em.item3,
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
            {copy.valueProps.heading}
          </h2>
          <p className="text-lg text-foreground/70">
            {copy.valueProps.subheading}
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
