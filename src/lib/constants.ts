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
    github: "[ADD GITHUB LINK]",
    youtube: "[ADD YOUTUBE LINK]",
  },
} as const

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
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
