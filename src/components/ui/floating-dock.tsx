"use client"

import { cn } from "@/lib/utils"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef, useState } from "react"

export type FloatingDockItem = {
  title: string
  icon: React.ReactNode
  href: string
  external?: boolean
}

export function FloatingDock({
  items,
  className,
  desktopClassName,
  mobileClassName,
}: {
  items: FloatingDockItem[]
  className?: string
  desktopClassName?: string
  mobileClassName?: string
}) {
  return (
    <>
      <FloatingDockDesktop items={items} className={cn(desktopClassName, className)} />
      <FloatingDockMobile items={items} className={cn(mobileClassName, className)} />
    </>
  )
}

function FloatingDockMobile({
  items,
  className,
}: {
  items: FloatingDockItem[]
  className?: string
}) {
  return (
    <div className={cn("fixed bottom-4 right-4 block md:hidden", className)}>
      <div className="flex flex-col gap-2 rounded-2xl border border-foreground/10 bg-background/80 p-2 backdrop-blur-sm">
        {items.map((item) => {
          const linkClassName = "flex h-12 w-12 items-center justify-center rounded-xl bg-muted transition-colors hover:bg-muted/80"

          if (item.external) {
            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
                aria-label={item.title}
              >
                {item.icon}
              </a>
            )
          }

          return (
            <Link
              key={item.title}
              href={item.href}
              className={linkClassName}
              aria-label={item.title}
            >
              {item.icon}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function FloatingDockDesktop({
  items,
  className,
}: {
  items: FloatingDockItem[]
  className?: string
}) {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl border border-foreground/10 bg-background/80 px-4 pb-3 backdrop-blur-sm",
        className
      )}
    >
      {items.map((item) => (
        <FloatingDockIcon
          mouseX={mouseX}
          key={item.title}
          title={item.title}
          icon={item.icon}
          href={item.href}
          external={item.external}
        />
      ))}
    </motion.div>
  )
}

function FloatingDockIcon({
  mouseX,
  title,
  icon,
  href,
  external,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>
  title: string
  icon: React.ReactNode
  href: string
  external?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  const [isHovered, setIsHovered] = useState(false)

  const content = (
    <motion.div
      ref={ref}
      style={{ width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex aspect-square items-center justify-center rounded-full bg-muted"
    >
      {icon}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 2, x: "-50%" }}
          className="absolute -top-8 left-1/2 w-fit whitespace-pre rounded-md border border-foreground/10 bg-background px-2 py-0.5 text-xs text-foreground"
        >
          {title}
        </motion.div>
      )}
    </motion.div>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return <Link href={href}>{content}</Link>
}

export { FloatingDockDesktop, FloatingDockMobile }
