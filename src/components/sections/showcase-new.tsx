"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Network,
  Zap,
  Smartphone,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { ShowcaseBento } from "@/components/ui/showcase-bento";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import { SparklesText } from "@/components/ui/sparkles-text";
import { RetroGrid } from "@/components/ui/retro-grid";

export function ShowcaseNew() {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-white py-20 dark:bg-neutral-950 md:py-32"
    >
      {/* Retro Grid Background */}
      <RetroGrid
        className="absolute inset-0 opacity-[0.15]"
        angle={65}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-50 md:text-4xl">
            Expertise in Motion
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
            Full-stack engineering with a focus on scalable architecture, performance, and developer
            experience
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div variants={sectionVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <ShowcaseBento>
            {/* 1. Architecture & Systems Design - spans 2 cols on lg */}
            <ShowcaseCard
              icon={Network}
              title="Architecture & Systems Design"
              description="Micro-frontends, module federation, distributed state, and scalable component libraries."
              chips={["Module Federation", "Micro-FE", "Design Systems"]}
              layoutSpan="lg:col-span-2"
              className="relative"
            >
              {/* Pulsing node animation */}
              <div className="absolute right-6 top-6 h-3 w-3 rounded-full bg-blue-500">
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-400"
                  animate={shouldReduceMotion ? {} : {
                    scale: [1, 2, 2],
                    opacity: [0.8, 0, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </div>
            </ShowcaseCard>

            {/* 2. Performance Engineering */}
            <ShowcaseCard
              icon={Zap}
              title="Performance Engineering"
              description="Sub-second FMP, code splitting, lazy loading, and real-time optimization metrics."
              chips={["SSR/SSG", "Web Vitals", "Lighthouse 100"]}
              className="relative overflow-hidden"
            >
              {/* Speed line sweep */}
              <motion.div
                className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-yellow-400 to-transparent"
                animate={shouldReduceMotion ? {} : {
                  x: [0, 400],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              />
            </ShowcaseCard>

            {/* 3. Real-time & Mobile-First */}
            <ShowcaseCard
              icon={Smartphone}
              title="Real-time & Mobile-First"
              description="WebSocket integrations, responsive layouts, touch optimization, and offline-first PWAs."
              chips={["WebSockets", "PWA", "Touch UX"]}
              className="relative"
            >
              <motion.div
                className="absolute right-8 top-8"
                animate={shouldReduceMotion ? {} : {
                  rotate: [0, -2, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Smartphone className="h-8 w-8 text-neutral-300 dark:text-neutral-700" />
              </motion.div>
            </ShowcaseCard>

            {/* 4. AI-Assisted Development */}
            <ShowcaseCard
              icon={Sparkles}
              title={
                <SparklesText sparklesCount={8} colors={{ first: "#3b82f6", second: "#a855f7" }}>
                  AI-Assisted Development
                </SparklesText>
              }
              description="Code generation, intelligent refactoring, and AI-powered testing workflows."
              chips={["Copilot", "v0", "Cursor"]}
            />

            {/* 5. Teaching & Enablement */}
            <ShowcaseCard
              icon={GraduationCap}
              title="Teaching & Enablement"
              description="Workshops, technical writing, code reviews, and mentoring junior to senior engineers."
              chips={["Workshops", "Docs", "Mentoring"]}
              href="/writing"
              className="group relative overflow-hidden"
            >
              {/* Confetti dots on hover */}
              <div className="pointer-events-none absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-2 w-2 rounded-full bg-violet-400"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 20}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={shouldReduceMotion ? {} : {
                      opacity: [0, 0.8, 0],
                      scale: [0, 1.2, 0],
                      y: [0, -20, -40],
                    }}
                    transition={{
                      duration: 1.2,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            </ShowcaseCard>

          </ShowcaseBento>
        </motion.div>
      </div>
    </section>
  );
}
