"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SITE_CONFIG } from "@/lib/constants"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Implement form submission (EmailJS or API route)
    console.log("Form submitted:", formState)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setFormState({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
    alert("Thank you! I'll get back to you soon.")
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Let&apos;s Connect
          </h1>
          <p className="text-xl text-foreground/70">
            I&apos;m based in Indore (IST, UTC+5:30). I typically reply within 1 business day.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach me
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-foreground/60" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm text-foreground/70 hover:text-foreground"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-foreground/60" />
                  <div>
                    <p className="text-sm font-medium">Phone/WhatsApp</p>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-sm text-foreground/70 hover:text-foreground"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-foreground/60" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-foreground/70">
                      {SITE_CONFIG.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-foreground/60" />
                  <div>
                    <p className="text-sm font-medium">Timezone</p>
                    <p className="text-sm text-foreground/70">
                      {SITE_CONFIG.timezone}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <a href="[ADD BOOKING LINK]">
                    <Calendar className="h-5 w-5" />
                    Book time
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/resume.pdf" download>
                    Request résumé
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you shortly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or question..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
