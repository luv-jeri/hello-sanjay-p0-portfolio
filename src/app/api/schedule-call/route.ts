import { Resend } from 'resend'
import { NextResponse } from 'next/server'

// Lazy initialize to avoid build-time errors
let resend: Resend | null = null

const getResendClient = () => {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

// ============================================================================
// TYPES
// ============================================================================

type ScheduleCallData = {
  name: string
  email: string
  phone?: string
  preferredTime?: string
  description: string
  honeypot?: string
}

// ============================================================================
// VALIDATION
// ============================================================================

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const sanitizeInput = (input: string): string => {
  // Basic HTML/script tag removal
  return input.replace(/<[^>]*>/g, '').trim()
}

// ============================================================================
// POST HANDLER
// ============================================================================

export async function POST(request: Request) {
  try {
    const body = await request.json() as ScheduleCallData

    // Spam check: honeypot
    if (body.honeypot) {
      console.warn('[Schedule Call API] Honeypot triggered')
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      )
    }

    // Validate required fields
    if (!body.name?.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    if (!body.email?.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (!body.description?.trim()) {
      return NextResponse.json(
        { error: 'Description is required' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const name = sanitizeInput(body.name)
    const email = sanitizeInput(body.email)
    const phone = body.phone ? sanitizeInput(body.phone) : ''
    const preferredTime = body.preferredTime ? sanitizeInput(body.preferredTime) : ''
    const description = sanitizeInput(body.description)

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('[Schedule Call API] RESEND_API_KEY not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Get Resend client
    const resendClient = getResendClient()
    if (!resendClient) {
      console.error('[Schedule Call API] Failed to initialize Resend client')
      return NextResponse.json(
        { error: 'Email service not available' },
        { status: 500 }
      )
    }

    // Send email using Resend
    const { data, error } = await resendClient.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use verified domain in production
      to: ['hellosanjaygautam@gmail.com'],
      replyTo: email,
      subject: 'Schedule a Call Request',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Schedule a Call Request</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">📞 Schedule a Call Request</h1>
            </div>

            <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
              <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="margin-top: 0; color: #f5576c; font-size: 20px;">Contact Details</h2>

                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #495057; width: 150px;">Name:</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #495057;">Email:</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                      <a href="mailto:${email}" style="color: #f5576c; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  ${phone ? `
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #495057;">Phone:</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                      <a href="tel:${phone}" style="color: #f5576c; text-decoration: none;">${phone}</a>
                    </td>
                  </tr>
                  ` : ''}
                  ${preferredTime ? `
                  <tr>
                    <td style="padding: 12px 0; font-weight: 600; color: #495057;">Preferred Time:</td>
                    <td style="padding: 12px 0; color: #212529;">${preferredTime}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>

              <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="margin-top: 0; color: #f5576c; font-size: 20px;">Brief Description</h2>
                <p style="margin: 0; white-space: pre-wrap; color: #212529; line-height: 1.8;">${description}</p>
              </div>

              <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 4px;">
                <p style="margin: 0; font-size: 14px; color: #495057;">
                  <strong>💡 Next Steps:</strong><br>
                  1. Reply to ${email} to confirm a time<br>
                  ${phone ? `2. Or call ${phone} directly<br>` : ''}
                  ${phone ? '3' : '2'}. Send a calendar invite with meeting details
                </p>
              </div>
            </div>

            <div style="margin-top: 20px; text-align: center; color: #6c757d; font-size: 12px;">
              <p>This email was sent from your portfolio contact form at hellosanjay.com</p>
            </div>
          </body>
        </html>
      `,
      text: `
Schedule a Call Request

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${preferredTime ? `Preferred Time: ${preferredTime}` : ''}

Description:
${description}

---
Reply to: ${email}
${phone ? `Or call: ${phone}` : ''}
      `.trim(),
    })

    if (error) {
      console.error('[Schedule Call API] Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('[Schedule Call API] Email sent successfully:', data?.id)

    return NextResponse.json(
      {
        success: true,
        message: 'Call request sent successfully',
        id: data?.id
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('[Schedule Call API] Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
