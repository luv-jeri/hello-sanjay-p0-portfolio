export const SITE_CONFIG = {
  name: "Sanjay Kumar",
  title: "Senior Full-Stack & Frontend Engineer",
  description: "SDE III building scalable React/Next.js/Node apps with micro-frontends, SSR, real-time, and web→mobile via Capacitor.",
  url: "https://hellosanjay.com",
  email: "hellosanjaygautam@gmail.com",
  phone: "+91-7000122621",
  location: "Indore, India",
  timezone: "IST (UTC+5:30)",
  education: "B.Tech, RGPV",
  social: {
    linkedin: "https://www.linkedin.com/in/luv-jeri",
    github: "https://github.com/luv-jeri",
    youtube: "[ADD YOUTUBE LINK]",
  },
} as const

// ============================================================================
// NAVIGATION STRUCTURE WITH GROUPING
// ============================================================================

export type NavItem = {
  name: string
  href: string
}

export type NavGroup = {
  name: string
  items: NavItem[]
}

export type NavItemOrGroup = NavItem | NavGroup

// Type guard to check if item is a group
export const isNavGroup = (item: NavItemOrGroup): item is NavGroup => {
  return 'items' in item
}

// Main navigation items (primary routes)
export const MAIN_NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
]

// Resources group (secondary routes)
export const RESOURCES_NAV_GROUP: NavGroup = {
  name: "Resources",
  items: [
    { name: "Documentation", href: "/docs" },
    { name: "Projects Explorer", href: "/projects-explorer" },
    { name: "Services", href: "/services" },
    { name: "Writing & Speaking", href: "/writing" },
  ],
}

// Complete navigation structure
export const NAVIGATION_STRUCTURE: NavItemOrGroup[] = [
  ...MAIN_NAV_ITEMS,
  RESOURCES_NAV_GROUP,
]

// Flat list for backward compatibility
export const NAVIGATION_ITEMS = [
  ...MAIN_NAV_ITEMS,
  ...RESOURCES_NAV_GROUP.items,
] as const

export const SKILLS = {
  frontend: [
    "React", "Next.js", "TypeScript", "React Native", "Vue", "Angular",
    "Redux", "Pinia", "Vuex", "Tailwind CSS", "SCSS/LESS/SASS",
    "Canvas APIs", "GSAP", "Three.js", "WebSockets", "Socket.io"
  ],
  backend: [
    "Node.js", "Express", "Nest.js", "REST APIs", "GraphQL",
    "Authentication/Authorization", "RBAC", "Redis",
    "PostgreSQL", "MySQL", "MongoDB"
  ],
  cloud: [
    "Firebase (Realtime DB, Firestore, Auth)", "Google Cloud Platform (GCP)",
    "Linode", "DigitalOcean", "Module Federation", "Capacitor",
    "Micro-frontends", "CI/CD"
  ],
  other: [
    "Zod", "OOP", "Agile", "AI Tools (Cursor/MCP/Agents)",
    "Performance Profiling", "Accessibility (a11y)", "i18n"
  ]
} as const

export const COMPANIES = [
  { name: "HighLevel", logo: "/logos/highlevel.svg" },
  { name: "ReNew Power", logo: "/logos/renew.svg" },
  { name: "Climate Connect Digital", logo: "/logos/climate-connect.svg" },
  { name: "Haspr", logo: "/logos/haspr.svg" },
  { name: "Let's Upgrade", logo: "/logos/letsupgrade.svg" },
  { name: "Newton School", logo: "/logos/newton.svg" },
  { name: "Coding Ninjas", logo: "/logos/codingninjas.svg" },
] as const
