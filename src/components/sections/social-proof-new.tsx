"use client"

import { motion } from "framer-motion"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Marquee } from "@/components/ui/marquee"
import { DotPattern } from "@/components/ui/dot-pattern"

const companies: Array<{
  name: string
  role: string
  period: string
  logo: string
}> = [
  { name: "HighLevel", role: "SDE 3 Developer", period: "2024–Present", logo: "/company_logo/goHighLevel.webp" },
  { name: "ReNew Power", role: "Lead Frontend Developer", period: "2023–2024", logo: "/company_logo/ReNew.svg" },
  { name: "Haspr", role: "Senior Developer Fullstack", period: "2018–2022", logo: "/company_logo/haspr logo.svg" },
  { name: "Newton School", role: "MERN Stack Instructor", period: "2022–2023", logo: "/company_logo/newton.avif" },
  { name: "Coding Ninjas", role: "Teaching Assistant", period: "2021–2022", logo: "/company_logo/conding ninjas.svg" },
  { name: "Let's Upgrade", role: "Technical Trainer", period: "2020–2021", logo: "/company_logo/lets upgrade.png" },
  { name: "Zealie", role: "Frontend Developer", period: "2019–2020", logo: "/company_logo/zealie_logo.webp" },
]

// Split companies into two rows for dual marquee effect
const firstRow = companies.slice(0, 4)
const secondRow = companies.slice(4)

const CompanyCard = ({ company }: { company: typeof companies[0] }) => {
  return (
    <div className="group relative mx-4 flex items-center gap-6 rounded-2xl border border-neutral-200/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl dark:border-neutral-800/50 dark:bg-neutral-900/80 md:mx-6 md:gap-8 md:p-8">
      {/* Subtle gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

      {/* Logo */}
      <div className="relative flex h-16 w-32 shrink-0 items-center justify-center rounded-xl bg-white p-3 shadow-sm dark:bg-white md:h-20 md:w-40 md:p-4">
        <img
          src={company.logo}
          alt={company.name}
          className="h-full w-full object-contain transition-transform group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col">
        <span className="whitespace-nowrap text-3xl font-black tracking-tight text-neutral-900 dark:text-neutral-50 md:text-4xl lg:text-5xl">
          {company.name}
        </span>
        <span className="mt-1 whitespace-nowrap text-lg font-semibold text-neutral-600 dark:text-neutral-400 md:text-xl lg:text-2xl">
          {company.role}
        </span>
        <span className="mt-0.5 whitespace-nowrap text-sm font-medium text-neutral-500 dark:text-neutral-500 md:text-base lg:text-lg">
          {company.period}
        </span>
      </div>
    </div>
  )
}

export function SocialProofNew() {
  // const _shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-y border-neutral-200/50 bg-white py-16 dark:border-neutral-800/50 dark:bg-neutral-950 md:py-24">
      {/* Dot Pattern Background */}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="opacity-30 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl space-y-12 text-center md:space-y-16"
        >

          {/* Main Stats - Giant Numbers */}
          <div>
            <div className="mb-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="mb-2 flex items-baseline justify-center">
                  <NumberTicker
                    value={7}
                    direction="up"
                    delay={0.3}
                    className="text-6xl font-bold text-neutral-900 dark:text-neutral-50 md:text-7xl lg:text-8xl"
                  />
                  <span className="ml-1 text-5xl font-bold text-neutral-900 dark:text-neutral-50 md:text-6xl lg:text-7xl">
                    +
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 md:text-sm">
                  Years
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="mb-2 flex items-baseline justify-center">
                  <NumberTicker
                    value={200}
                    direction="up"
                    delay={0.4}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-6xl font-bold text-transparent dark:from-purple-400 dark:to-pink-400 md:text-7xl lg:text-8xl"
                  />
                  <span className="ml-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent dark:from-purple-400 dark:to-pink-400 md:text-6xl lg:text-7xl">
                    +
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 md:text-sm">
                  Developers
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="mb-2 flex items-baseline justify-center">
                  <NumberTicker
                    value={25}
                    direction="up"
                    delay={0.5}
                    className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-6xl font-bold text-transparent dark:from-orange-400 dark:to-red-400 md:text-7xl lg:text-8xl"
                  />
                  <span className="ml-1 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-5xl font-bold text-transparent dark:from-orange-400 dark:to-red-400 md:text-6xl lg:text-7xl">
                    +
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 md:text-sm">
                  Projects
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="mb-2 flex items-baseline justify-center">
                  <NumberTicker
                    value={200}
                    direction="up"
                    delay={0.6}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-6xl font-bold text-transparent dark:from-green-400 dark:to-emerald-400 md:text-7xl lg:text-8xl"
                  />
                  <span className="ml-1 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-5xl font-bold text-transparent dark:from-green-400 dark:to-emerald-400 md:text-6xl lg:text-7xl">
                    K+
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 md:text-sm">
                  Daily Users
                </p>
              </motion.div>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Dual Marquee - Companies with 3D Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative mt-12 md:mt-16"
      >
        <div className="relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden [perspective:1000px]">
          <div
            className="flex w-full flex-col gap-4"
            style={{
              transform: "rotateX(10deg) rotateY(0deg) rotateZ(0deg)",
            }}
          >
            {/* First Row - Forward */}
            <Marquee pauseOnHover className="[--duration:60s]">
              {firstRow.map((company) => (
                <CompanyCard key={`${company.name}-1`} company={company} />
              ))}
            </Marquee>

            {/* Second Row - Reverse */}
            <Marquee reverse pauseOnHover className="[--duration:50s]">
              {secondRow.map((company) => (
                <CompanyCard key={`${company.name}-2`} company={company} />
              ))}
            </Marquee>
          </div>

          {/* Gradient Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-neutral-950"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-neutral-950"></div>
        </div>

        {/* Training Text Below Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="text-2xl font-bold text-neutral-700 dark:text-neutral-300 md:text-3xl lg:text-4xl">
            Plus trained{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent dark:from-purple-400 dark:via-pink-400 dark:to-orange-400">
              200+ developers
            </span>{" "}
            across these platforms
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
