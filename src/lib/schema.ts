import z from 'zod'

export const contactFormSchema = z.object({
  email: z.email().min(1, { message: 'Email is required' }),
  message: z
    .string()
    .min(1, { message: 'Message is required' })
    .max(2000, { message: 'Message is too long' }),
  website: z.string().max(0).optional(),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>
