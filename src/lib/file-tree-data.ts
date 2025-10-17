import { FileTreeNode } from "@/types/file-tree"
import { projects } from "./projects-data"

// ============================================================================
// PROJECTS FILE TREE DATA
// ============================================================================

export const projectsFileTree: FileTreeNode = {
  type: "folder",
  id: "projects",
  name: "projects",
  path: "/projects",
  children: projects
    .filter((p) => p.featured) // Only show featured projects in tree
    .map((project) => ({
      type: "folder" as const,
      id: project.id,
      name: project.id,
      path: `/projects/${project.id}`,
      children: [
        {
          type: "file" as const,
          id: `${project.id}-readme`,
          name: "README.md",
          path: `/projects/${project.id}/README.md`,
          ext: "md" as const,
          preview: {
            type: "project" as const,
            projectId: project.id,
          },
          action: {
            kind: "route" as const,
            href: "/projects",
          },
        },
        {
          type: "file" as const,
          id: `${project.id}-architecture`,
          name: "architecture.mdx",
          path: `/projects/${project.id}/architecture.mdx`,
          ext: "mdx" as const,
          preview: {
            type: "markdown" as const,
            content: project.architecture,
          },
        },
        {
          type: "file" as const,
          id: `${project.id}-results`,
          name: "results.json",
          path: `/projects/${project.id}/results.json`,
          ext: "json" as const,
          preview: {
            type: "json" as const,
            data: {
              results: project.results,
              context: project.context,
              nextSteps: project.nextSteps,
            },
          },
        },
        ...(project.demoUrl || project.liveUrl
          ? [
              {
                type: "file" as const,
                id: `${project.id}-demo`,
                name: "demo.url",
                path: `/projects/${project.id}/demo.url`,
                ext: "url" as const,
                action: {
                  kind: "link" as const,
                  href: (project.demoUrl || project.liveUrl) as string,
                  external: true,
                },
              },
            ]
          : []),
        ...(project.githubUrl
          ? [
              {
                type: "file" as const,
                id: `${project.id}-github`,
                name: "github.url",
                path: `/projects/${project.id}/github.url`,
                ext: "url" as const,
                action: {
                  kind: "link" as const,
                  href: project.githubUrl,
                  external: true,
                },
              },
            ]
          : []),
      ],
    })),
}

// ============================================================================
// SKILLS FILE TREE DATA
// ============================================================================

export const skillsFileTree: FileTreeNode = {
  type: "folder",
  id: "skills",
  name: "skills",
  path: "/skills",
  children: [
    {
      type: "folder",
      id: "frontend",
      name: "frontend",
      path: "/skills/frontend",
      children: [
        {
          type: "file",
          id: "frontend-react",
          name: "react.json",
          path: "/skills/frontend/react.json",
          ext: "json",
          preview: {
            type: "skill",
            category: "frontend",
            skillName: "React",
          },
        },
        {
          type: "file",
          id: "frontend-nextjs",
          name: "nextjs.json",
          path: "/skills/frontend/nextjs.json",
          ext: "json",
          preview: {
            type: "skill",
            category: "frontend",
            skillName: "Next.js",
          },
        },
        {
          type: "file",
          id: "frontend-typescript",
          name: "typescript.json",
          path: "/skills/frontend/typescript.json",
          ext: "json",
          preview: {
            type: "skill",
            category: "frontend",
            skillName: "TypeScript",
          },
        },
      ],
    },
    {
      type: "folder",
      id: "backend",
      name: "backend",
      path: "/skills/backend",
      children: [
        {
          type: "file",
          id: "backend-nodejs",
          name: "nodejs.json",
          path: "/skills/backend/nodejs.json",
          ext: "json",
          preview: {
            type: "skill",
            category: "backend",
            skillName: "Node.js",
          },
        },
        {
          type: "file",
          id: "backend-nestjs",
          name: "nestjs.json",
          path: "/skills/backend/nestjs.json",
          ext: "json",
          preview: {
            type: "skill",
            category: "backend",
            skillName: "Nest.js",
          },
        },
      ],
    },
    {
      type: "folder",
      id: "cloud",
      name: "cloud",
      path: "/skills/cloud",
      children: [
        {
          type: "file",
          id: "cloud-firebase",
          name: "firebase.json",
          path: "/skills/cloud/firebase.json",
          ext: "json",
          preview: {
            type: "skill",
            category: "cloud",
            skillName: "Firebase",
          },
        },
        {
          type: "file",
          id: "cloud-gcp",
          name: "gcp.json",
          path: "/skills/cloud/gcp.json",
          ext: "json",
          preview: {
            type: "skill",
            category: "cloud",
            skillName: "GCP",
          },
        },
      ],
    },
  ],
}

// ============================================================================
// CONTACT FILE TREE DATA
// ============================================================================

export const contactFileTree: FileTreeNode = {
  type: "folder",
  id: "contact",
  name: "contact",
  path: "/contact",
  children: [
    {
      type: "file",
      id: "contact-booking",
      name: "booking.url",
      path: "/contact/booking.url",
      ext: "url",
      preview: {
        type: "contact",
        method: "booking",
      },
      action: {
        kind: "link",
        href: "[ADD BOOKING LINK]",
        external: true,
      },
    },
    {
      type: "file",
      id: "contact-email",
      name: "email.url",
      path: "/contact/email.url",
      ext: "url",
      preview: {
        type: "contact",
        method: "email",
      },
      action: {
        kind: "mailto",
        email: "hellosanjaygautam@gmail.com",
      },
    },
    {
      type: "file",
      id: "contact-linkedin",
      name: "linkedin.url",
      path: "/contact/linkedin.url",
      ext: "url",
      preview: {
        type: "contact",
        method: "linkedin",
      },
      action: {
        kind: "link",
        href: "https://www.linkedin.com/in/luv-jeri",
        external: true,
      },
    },
    {
      type: "file",
      id: "contact-github",
      name: "github.url",
      path: "/contact/github.url",
      ext: "url",
      preview: {
        type: "contact",
        method: "github",
      },
      action: {
        kind: "link",
        href: "[ADD GITHUB LINK]",
        external: true,
      },
    },
  ],
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

// Find a node by ID in the tree
export const findNodeById = (
  tree: FileTreeNode,
  id: string
): FileTreeNode | null => {
  if (tree.id === id) return tree

  if (tree.type === "folder") {
    for (const child of tree.children) {
      const found = findNodeById(child, id)
      if (found) return found
    }
  }

  return null
}

// Find a node by path in the tree
export const findNodeByPath = (
  tree: FileTreeNode,
  path: string
): FileTreeNode | null => {
  if (tree.path === path) return tree

  if (tree.type === "folder") {
    for (const child of tree.children) {
      const found = findNodeByPath(child, path)
      if (found) return found
    }
  }

  return null
}

// Get all file IDs from a tree
export const getAllFileIds = (tree: FileTreeNode): string[] => {
  if (tree.type === "file") return [tree.id]

  return tree.children.flatMap(getAllFileIds)
}

// Get all folder IDs from a tree
export const getAllFolderIds = (tree: FileTreeNode): string[] => {
  if (tree.type === "file") return []

  return [tree.id, ...tree.children.flatMap(getAllFolderIds)]
}
