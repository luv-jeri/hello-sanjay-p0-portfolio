import type { Metadata } from "next"
import { Book, Youtube, Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { copy } from "@/content/copy"

export const metadata: Metadata = {
  title: copy.seo.writing.title,
  description: copy.seo.writing.description,
  keywords: copy.seo.writing.keywords,
}

export default function WritingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {copy.writing.heading}
          </h1>
          <p className="text-xl text-foreground/70">
            {copy.writing.subheading}
          </p>
        </div>

        {/* Training & Talks */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <Youtube className="h-8 w-8" />
            <h2 className="text-3xl font-bold tracking-tight">
              {copy.writing.talksHeading}
            </h2>
          </div>
          <div className="space-y-6">
            {copy.writing.talks.map((talk) => (
              <Card key={talk.title}>
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="mb-2">{talk.title}</CardTitle>
                      <CardDescription>
                        {talk.platform} · {talk.date}
                      </CardDescription>
                    </div>
                    <Badge>{talk.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-foreground/70">
                    {talk.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={talk.link} target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-4 w-4" />
                      {copy.writing.watchButton}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <Book className="h-8 w-8" />
            <h2 className="text-3xl font-bold tracking-tight">
              {copy.writing.articlesHeading}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {copy.writing.articles.map((article) => (
              <Card key={article.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-foreground/70">
                    {article.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {article.topics.map((topic) => (
                      <Badge key={topic} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      {copy.writing.readArticleButton}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Open Source */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <Github className="h-8 w-8" />
            <h2 className="text-3xl font-bold tracking-tight">
              {copy.writing.openSourceHeading}
            </h2>
          </div>
          <div className="space-y-4">
            {copy.writing.openSource.map((project) => (
              <Card key={project.title}>
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        {copy.writing.viewGithubButton}
                      </a>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
