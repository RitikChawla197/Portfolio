import { navLinks } from '@/lib/data'

export type SectionName = (typeof navLinks)[number]['name']

export type Project = {
  slug: string
  video?: string
  image?: string
  title: string
  description: string
  role: string
  duration: string
  highlights: string[]
  technologies: string[]
  links: {
    preview: string
    github: string
    githubApi: string
  }
}

export type Experience = {
  title: string
  company: string
  logo?: string
  description: string
  period: string
  technologies: string[]
}

export type NavName = 'Home' | 'About' | 'Experience' | 'Projects' | 'Contact'

export type NavLink = {
  name: NavName
  href: string
}

export type Skill = {
  name: string
  icon: React.ReactNode
  colorClass?: string
}

