import { Space_Grotesk } from 'next/font/google'

const fontSans = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const fonts = [fontSans.variable]
