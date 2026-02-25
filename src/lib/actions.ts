'use server'

import { Resend } from 'resend'
import { env } from '@/env.mjs'
import { siteConfig } from './site-config'
import { contactFormSchema, ContactFormSchema } from './schema'

const resend = new Resend(env.RESEND_API_KEY)

export const sendEmailAction = async (values: ContactFormSchema) => {
  try {
    const parsed = contactFormSchema.safeParse(values)
    if (!parsed.success) {
      return {
        error: 'Invalid form data.',
      }
    }

    // Honeypot field for basic bot filtering.
    if (parsed.data.website) {
      return {
        data: 'Email sent successfully!',
      }
    }

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: siteConfig.contact.email,
      subject: 'Message from contact form | Portfolio',
      replyTo: parsed.data.email,
      text: `email: ${parsed.data.email}\nmessage: ${parsed.data.message}`,
    })
    return {
      data: 'Email sent successfully!',
    }
  } catch {
    return {
      error: `Something went wrong!`,
    }
  }
}
