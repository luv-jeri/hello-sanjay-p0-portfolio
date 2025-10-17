"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SITE_CONFIG } from "@/lib/constants"
import { copy } from "@/content/copy"

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
    alert(copy.contact.successMessage)
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
            {copy.contact.heading}
          </h1>
          <p className="text-xl text-foreground/70">
            {copy.contact.subheading}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>{copy.contact.infoTitle}</CardTitle>
                <CardDescription>
                  {copy.contact.infoDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-foreground/60" />
                  <div>
                    <p className="text-sm font-medium">{copy.contact.emailLabel}</p>
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
                    <p className="text-sm font-medium">{copy.contact.phoneLabel}</p>
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
                    <p className="text-sm font-medium">{copy.contact.locationLabel}</p>
                    <p className="text-sm text-foreground/70">
                      {SITE_CONFIG.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-foreground/60" />
                  <div>
                    <p className="text-sm font-medium">{copy.contact.timezoneLabel}</p>
                    <p className="text-sm text-foreground/70">
                      {SITE_CONFIG.timezone}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="text-lg">{copy.contact.quickActionsTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <a href="[ADD BOOKING LINK]">
                    <Calendar className="h-5 w-5" />
                    {copy.contact.bookTimeButton}
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/resume.pdf" download>
                    {copy.contact.requestResumeButton}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>{copy.contact.formTitle}</CardTitle>
              <CardDescription>
                {copy.contact.formDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {copy.contact.formNameLabel}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={copy.contact.formNamePlaceholder}
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {copy.contact.formEmailLabel}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={copy.contact.formEmailPlaceholder}
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    {copy.contact.formSubjectLabel}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder={copy.contact.formSubjectPlaceholder}
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {copy.contact.formMessageLabel}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={copy.contact.formMessagePlaceholder}
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
                    copy.contact.formSendingText
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      {copy.contact.formSubmitButton}
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
