'use client'

// import type { Metadata } from "next"
import { useRef, useState } from "react"
import {
  Sparkles,
  TrendingUp,
  MapPin,
  Rocket,
  Code2,
  Dumbbell,
  Guitar,
  BookOpen,
  Target,
  Users,
  Zap,
  Globe,
  CheckCircle2,
} from "lucide-react"
import { copy } from "@/content/copy"
import { BlurFade } from "@/components/ui/blur-fade"
import { Marquee } from "@/components/ui/marquee"
import { ShineBorder } from "@/components/ui/shine-border"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { GRID_CONFIG } from "@/lib/grid-config"

// ============================================================================
// ADVANCED INTERACTIVE TILES
// ============================================================================

// 1. HERO TILE — Spotlight + Ripple + Shimmer
const HeroTile = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-background via-background to-muted/30",
        "shadow-lg hover:shadow-2xl transition-all duration-700 transform-gpu",
        GRID_CONFIG.tile.hero
      )}
    >
      {/* Spotlight that follows mouse */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
        }}
      />

      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-6 lg:p-8 overflow-y-auto">
        {/* Header with Avatar */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative group/avatar">
            {/* Ripple effect on hover */}
            <div className="absolute -inset-2 rounded-full bg-primary/20 opacity-0 group-hover/avatar:opacity-100 group-hover/avatar:animate-ping transition-opacity" />
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-primary/20 shadow-xl lg:h-24 lg:w-24 transform-gpu transition-transform duration-500 group-hover/avatar:scale-110">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-violet-500/10 to-transparent" />
              <Sparkles className="absolute inset-0 m-auto h-10 w-10 text-primary animate-pulse" />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                {copy.about.personal.name}
              </span>
            </h1>
            <p className="mt-1 text-base text-muted-foreground lg:text-lg">
              {copy.about.personal.title}
            </p>

            {/* Animated badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                { icon: Code2, label: "Frontend Lead" },
                { icon: Users, label: "Mentor" },
                { icon: Globe, label: "Remote" },
              ].map((badge, idx) => (
                <Badge
                  key={badge.label}
                  variant="secondary"
                  className={cn(
                    "gap-1.5 text-sm px-3 py-1 border border-primary/10",
                    "transition-all duration-300 hover:scale-110 hover:shadow-lg",
                    "hover:border-primary/30 transform-gpu opacity-0 animate-fade-in"
                  )}
                  style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "forwards" }}
                >
                  <badge.icon className="h-3.5 w-3.5" />
                  {badge.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Journey with staggered fade-in */}
        <div className="flex-1 space-y-4">
          {[
            copy.about.technicalLeaderContent.paragraph1,
            copy.about.technicalLeaderContent.paragraph2,
            copy.about.technicalLeaderContent.paragraph4,
          ].map((text, idx) => (
            <p
              key={idx}
              className="text-sm leading-relaxed text-muted-foreground lg:text-base opacity-0 animate-fade-in"
              style={{ animationDelay: `${idx * 200 + 300}ms`, animationFillMode: "forwards" }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom gradient vignette */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
  </div>
)
}

// 2. STATS TILE — Number Ticker + Particles
const StatsTile = () => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-card",
        "hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20",
        "transform-gpu hover:scale-[1.02]",
        GRID_CONFIG.tile.default
      )}
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Large watermark icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <TrendingUp className="h-40 w-40 text-primary/5 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 transform-gpu" />
      </div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center">
        <div className="space-y-2 transform transition-transform duration-500 group-hover:scale-110">
          <div className="text-6xl font-bold bg-gradient-to-br from-primary via-violet-500 to-primary bg-clip-text text-transparent">
            {copy.about.bentoCards.stats.name}
          </div>
          <div className="text-sm font-medium text-muted-foreground max-w-[200px]">
            {copy.about.bentoCards.stats.description.split(' ').slice(0, 6).join(' ')}
          </div>
        </div>
      </div>

      {/* Shine sweep on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
)
}

// 3. LOCATION TILE — Animated Beam + Dotted Pattern
const LocationTile = () => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-card",
        "hover:border-primary/50 transition-all duration-500 hover:shadow-xl",
        GRID_CONFIG.tile.default
      )}
    >
      {/* Dotted grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Animated beams from center */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[0, 90, 180, 270].map((angle, idx) => (
          <div
            key={angle}
            className="absolute top-1/2 left-1/2 h-0.5 w-0 bg-gradient-to-r from-primary/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-1000"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              transformOrigin: "left center",
              transitionDelay: `${idx * 100}ms`,
            }}
          />
        ))}
      </div>

      {/* Central pin with ripple */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          {/* Ripple rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-32 w-32 rounded-full border-2 border-primary/20 animate-ping" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-24 rounded-full border border-primary/10 animate-pulse [animation-delay:500ms]" />
          </div>

          <MapPin className="h-20 w-20 text-primary/10 transition-all duration-500 group-hover:text-primary/20 group-hover:scale-110" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-primary animate-ping" />
            <div className="absolute h-2 w-2 rounded-full bg-primary" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
        <div className="space-y-1 backdrop-blur-sm bg-background/80 rounded-lg p-3 border border-border/50">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-125" />
            <span className="text-xl font-bold">{copy.about.personal.location}</span>
          </div>
          <p className="text-sm text-muted-foreground">{copy.about.personal.timezone}</p>
          <p className="text-xs text-muted-foreground">{copy.about.bentoCards.location.description}</p>
        </div>
      </div>
    </div>
  )
}

// 4. HIGHLIGHTS TILE — Animated List with Cascade
const HighlightsTile = () => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-card",
        "hover:border-primary/50 transition-all duration-300 hover:shadow-xl",
        GRID_CONFIG.tile.default
      )}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <Rocket className="absolute -right-8 -top-8 h-40 w-40 rotate-12 text-primary transition-all duration-700 group-hover:rotate-45 group-hover:scale-110" />
      </div>

      {/* Gradient mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent_50%,#000_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-4">
        <div className="flex items-center gap-2 mb-3 transition-transform duration-300 group-hover:-translate-y-1">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Rocket className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="text-sm font-semibold">Recent Highlights</span>
        </div>

        <div className="flex-1 space-y-2 overflow-hidden">
          {copy.about.recentHighlights.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "flex items-start gap-2 rounded-lg border bg-card/95 backdrop-blur-sm p-2.5 shadow-sm",
                "transition-all duration-500 hover:bg-muted hover:scale-[1.02] hover:shadow-md",
                "transform-gpu opacity-0 translate-y-4 animate-fade-in-up"
              )}
              style={{
                animationDelay: `${idx * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <span className="text-lg flex-shrink-0 animate-bounce-subtle">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-xs truncate">{item.title}</div>
                <div className="text-[10px] text-muted-foreground line-clamp-2">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 5. TECH STACK TILE — Dual Marquee + Icon Cloud
const TechStackTile = () => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-card",
        "hover:border-primary/50 transition-all duration-500 hover:shadow-xl",
        GRID_CONFIG.tile.wide
      )}
    >
      {/* Icon cloud background (3D) */}
      <div className="absolute inset-0 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-full w-full transform-gpu transition-transform duration-1000 group-hover:scale-110">
            {copy.about.techStack.slice(0, 8).map((tech, idx) => (
              <div
                key={tech.name}
                className="absolute animate-orbit-slow"
                style={{
                  top: `${50 + 30 * Math.sin((idx / 8) * 2 * Math.PI)}%`,
                  left: `${50 + 30 * Math.cos((idx / 8) * 2 * Math.PI)}%`,
                  animationDelay: `${idx * 0.5}s`,
                }}
              >
                <Code2 className="h-4 w-4 text-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dual-layer marquee */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex flex-col justify-center gap-2">
        <Marquee pauseOnHover className="[--duration:40s] [mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]">
        {copy.about.techStack.map((tech) => (
          <Badge
            key={tech.name}
            variant="secondary"
              className="mx-2 px-3 py-1.5 text-xs font-medium whitespace-nowrap transform-gpu blur-[0.5px] hover:blur-none transition-all duration-300 hover:scale-110 border"
              style={{ borderColor: tech.color + '30' }}
            >
              <span className="inline-block h-2 w-2 rounded-full mr-1.5" style={{ backgroundColor: tech.color }} />
              {tech.name}
            </Badge>
          ))}
        </Marquee>

        {/* Second layer moving opposite direction */}
        <Marquee reverse pauseOnHover className="[--duration:35s] [mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]">
          {[...copy.about.techStack].reverse().map((tech) => (
            <Badge
              key={tech.name + '-reverse'}
              variant="outline"
              className="mx-2 px-3 py-1.5 text-xs font-medium whitespace-nowrap transform-gpu opacity-60 hover:opacity-100 transition-opacity"
          >
            {tech.name}
          </Badge>
        ))}
      </Marquee>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 p-6 transition-transform duration-300 group-hover:-translate-y-1">
        <div className="flex items-center gap-2 backdrop-blur-sm bg-background/80 rounded-lg px-3 py-2 border border-border/50 w-fit">
          <Code2 className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          <span className="text-sm font-semibold">Tech Stack</span>
        </div>
      </div>
    </div>
  )
}

// 6. PERSONAL TILE — 3D Tilt + Parallax
const PersonalTile = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setTilt({
      x: (y - 0.5) * 10,
      y: (x - 0.5) * -10,
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-card",
        "hover:border-primary/50 transition-all duration-300 hover:shadow-xl",
        GRID_CONFIG.tile.default
      )}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease-out",
      }}
    >
      {/* Parallax hobby images */}
      <div className="absolute inset-0 grid grid-cols-2 gap-2 p-3 overflow-hidden pointer-events-none">
        {[
          { icon: Dumbbell, name: "Gym", transform: 5 },
          { icon: Guitar, name: "Ukulele", transform: 8 },
        ].map((hobby, idx) => (
          <div
            key={hobby.name}
            className="relative overflow-hidden rounded-lg bg-muted/50 border transition-all duration-500 group-hover:bg-muted/70"
            style={{
              transform: `translateZ(${hobby.transform}px) scale(${1 - idx * 0.02})`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <hobby.icon
                className="h-12 w-12 text-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:text-primary/30"
                style={{
                  transform: idx === 0 ? `rotate(${tilt.y * 2}deg)` : `rotate(${-tilt.y * 2}deg)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content */}
      <div
        className="relative z-10 flex h-full flex-col justify-end p-6"
        style={{ transform: "translateZ(20px)" }}
      >
        <div className="backdrop-blur-sm bg-background/90 rounded-lg p-3 border border-border/50 space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
            <span className="text-sm font-semibold">Beyond Code</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {copy.about.personal.hobbies.gym.name} · {copy.about.personal.hobbies.ukulele.name}
          </p>
        </div>
      </div>
  </div>
)
}

// 7. TEACHING TILE — Shine Border + Pulse
const TeachingTile = () => {
      return (
        <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-card",
        "hover:border-primary/50 transition-all duration-300 hover:shadow-xl",
        GRID_CONFIG.tile.default
      )}
    >
      {/* Animated shine border */}
      <div className="absolute inset-0 pointer-events-none">
        <ShineBorder
          shineColor={["#f59e0b", "#f97316", "#fb923c"]}
          duration={8}
          borderWidth={2}
        />
      </div>

      {/* Gradient background pulse */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-50 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110 animate-pulse" />
      </div>

      {/* Orbiting icons on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[0, 120, 240].map((angle, idx) => (
          <div
            key={angle}
            className="absolute top-1/2 left-1/2 animate-orbit"
            style={{
              transformOrigin: `-40px 0`,
              animationDelay: `${idx * 0.3}s`,
            }}
          >
            <BookOpen className="h-4 w-4 text-amber-500" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
            <BookOpen className="h-4 w-4 text-amber-500 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="text-sm font-semibold">Teaching</span>
        </div>

        <div className="space-y-2">
          <div className="text-4xl font-bold text-amber-500 transition-all duration-500 group-hover:scale-110 group-hover:text-amber-400">
            200+
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Developers trained in MERN/MEAN stacks
          </p>
        </div>
  </div>
  </div>
)
}

// 8. PRINCIPLES TILE — Hover Border Gradient + Animated Icons
const PrinciplesTile = () => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-card",
        "hover:border-primary/50 transition-all duration-300 hover:shadow-xl",
        GRID_CONFIG.tile.default
      )}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-2xl transition-transform duration-700 group-hover:scale-150" />
        <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-2xl transition-transform duration-700 group-hover:scale-150 [transition-delay:200ms]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Target className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45" />
          </div>
          <span className="text-sm font-semibold">Principles</span>
  </div>

        <div className="space-y-2">
          <ul className="space-y-2 text-xs text-muted-foreground">
            {Object.values(copy.about.principles).slice(0, 3).map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-2 opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${i * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5 transition-transform duration-300 hover:scale-125" />
                <span className="leading-relaxed transition-colors hover:text-foreground">
                  {p.title}
                </span>
              </li>
            ))}
          </ul>
      </div>
    </div>
  </div>
)
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function AboutPage() {
  return (
    <div className="container relative mx-auto px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <BlurFade delay={0.1} inView>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              {copy.about.heading}
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground md:text-2xl">
              {copy.about.subheading}
            </p>
          </div>
        </BlurFade>

        {/* Bento Grid */}
        <BlurFade delay={0.2} inView>
          <div className={GRID_CONFIG.wrapper}>
            <HeroTile />
            <StatsTile />
            <LocationTile />
            <HighlightsTile />
            <TechStackTile />
            <PersonalTile />
            <TeachingTile />
            <PrinciplesTile />
          </div>
        </BlurFade>

        {/* Working Principles Expanded */}
        <div className="mt-16">
          <BlurFade delay={0.3} inView>
            <div id="principles" className="scroll-mt-16">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
              {copy.about.workingWithMeHeading}
            </h2>
              <div className="grid gap-6 sm:grid-cols-2">
              {Object.values(copy.about.principles).map((principle, idx) => (
                  <BlurFade key={idx} delay={0.4 + idx * 0.1} inView>
                    <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
                    <div className="mb-3 flex items-start gap-3">
                        <Zap className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-hover:scale-110" />
                      <h3 className="text-lg font-semibold leading-tight">
                        {principle.title}
                      </h3>
                    </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>
          </div>
      </div>
    </div>
  )
}
