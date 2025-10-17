import { ProjectsExplorer } from "@/components/file-tree"

export const metadata = {
  title: "Projects Explorer",
  description: "Browse my projects like a GitHub repository with an interactive file tree.",
}

export default function ProjectsExplorerPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Header */}
      <div className="mb-8 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Projects Explorer
        </h1>
        <p className="text-lg text-muted-foreground">
          Browse my projects like a GitHub repository. Click on files to view case studies,
          architecture details, and results.
        </p>
      </div>

      {/* Projects Explorer */}
      <ProjectsExplorer />

      {/* Hint */}
      <div className="mt-8 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Tip:</strong> You can also use the terminal (press{" "}
          <kbd className="px-1.5 py-0.5 bg-background rounded text-xs font-mono border border-border">
            ~
          </kbd>
          ) and type <code className="text-emerald-600 dark:text-emerald-400">open projects/courses</code> to
          navigate to a specific project.
        </p>
      </div>
    </div>
  )
}
