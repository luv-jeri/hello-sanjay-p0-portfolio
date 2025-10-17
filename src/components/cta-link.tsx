import Link from "next/link"
import * as React from "react"

// ============================================================================
// CTA LINK HELPER — Internal vs External Link Routing
// ============================================================================
// Automatically determines whether to use Next.js Link or external anchor
// based on the href pattern

type CtaLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  "aria-label"?: string
}

export function CtaLink({ href, children, className, "aria-label": ariaLabel }: CtaLinkProps) {
  const isExternal = /^https?:\/\//.test(href)

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}
