'use client'
import { useSectionInView } from '@/hooks/use-section-in-view'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icons } from './icons'
import { Button } from './ui/button'
import { GridPattern } from './ui/grid-pattern'

export default function HeroSection() {
  const { ref } = useSectionInView('Home')

  return (
    <section
      ref={ref}
      id="home"
      className="relative my-10 mb-60 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      <GridPattern
        width={80}
        height={120}
        squares={[
          [0, 3],
          [3, 1],
          [2, 0],
          [7, 2],
          [8, 3],
          [2, 4],
          [6, 4],
        ]}
        strokeDasharray={'4'}
        className={cn(
          'absolute inset-0',
          '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12',
          'opacity-70',
        )}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
      >
        <Link
          href={siteConfig.links.contactForm}
          className="flex items-center gap-3 rounded border px-3 py-1"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative flex size-2 rounded-full bg-green-400"></span>
          </span>
          <span className="text-sm">Available for work!</span>
        </Link>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        I'm a{' '}
        <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          Creative Software
        </span>{' '}
        developer crafting seamless, innovative digital experiences.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.08,
          duration: 0.4,
          ease: 'easeOut',
        }}
        className="text-muted-foreground max-w-xl"
      >
        You have a project in mind? Let's talk about it!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.12,
          duration: 0.4,
          ease: 'easeOut',
        }}
        className="flex flex-row gap-2 items-center"
      >
        <Button
          asChild
          size="lg"
          className="group transition-transform duration-200 hover:scale-105"
        >
          <Link href={siteConfig.links.contactForm}>
            Get in touch{' '}
            <Icons.arrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1.5" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="group hidden sm:flex transition-all duration-200 hover:scale-105 hover:shadow-md"
          asChild
        >
          <a href={siteConfig.links.cvPdf} download>
            Download Resume{' '}
            <Icons.download className="size-4 transition-transform duration-200 group-hover:translate-x-1.5" />
          </a>
        </Button>
        <Button
          variant="outline"
          className="group w-9 overflow-hidden px-0 transition-all duration-200 hover:w-28 hover:px-3 hover:scale-105"
          asChild
        >
          <Link
            href={siteConfig.links.linkedin}
            aria-label="Linkedin"
            target="_blank"
            className="flex items-center justify-center gap-0 transition-all duration-400 group-hover:gap-2"
          >
            <Icons.linkedin className="size-5 shrink-0 transition-transform duration-200 translate-x-1 group-hover:-translate-x-0.5" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm opacity-0 transition-all duration-200 group-hover:max-w-20 group-hover:opacity-100">
              LinkedIn
            </span>
          </Link>
        </Button>
        <Button
          variant="outline"
          className="group w-9 overflow-hidden px-0 transition-all duration-400 hover:w-26 hover:px-3 hover:scale-105"
          asChild
        >
          <Link
            href={siteConfig.links.github}
            aria-label="Github"
            target="_blank"
            className="flex items-center justify-center gap-0 transition-all duration-400 group-hover:gap-2"
          >
            <Icons.github className="size-5 shrink-0 transition-transform duration-200 translate-x-1 group-hover:-translate-x-0.5" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm opacity-0 transition-all duration-200 group-hover:max-w-16 group-hover:opacity-100">
              GitHub
            </span>
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}
