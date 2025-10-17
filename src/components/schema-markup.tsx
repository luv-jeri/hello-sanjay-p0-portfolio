import { SITE_CONFIG } from "@/lib/constants"

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: SITE_CONFIG.title,
    email: `mailto:${SITE_CONFIG.email}`,
    telephone: SITE_CONFIG.phone,
    url: SITE_CONFIG.url,
    image: "[ADD DETAIL]",
    sameAs: [
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.github,
      SITE_CONFIG.social.youtube,
    ],
    worksFor: [
      { "@type": "Organization", name: "HighLevel" },
      { "@type": "Organization", name: "ReNew Power (Climate Connect Digital)" },
      { "@type": "Organization", name: "Haspr" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indore",
      addressCountry: "IN",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    url: SITE_CONFIG.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/search?q={query}`,
      "query-input": "required name=query",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What roles are you targeting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Senior Full-Stack Engineer/SDE III, staff-leaning frontend, or product-focused platform roles.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work remote?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. I work remote from Indore, India (IST, UTC+5:30).",
        },
      },
      {
        "@type": "Question",
        name: "What stacks do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "React/Next/TypeScript on the frontend; Node/Nest/Express APIs; Firebase/GCP and related services.",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
