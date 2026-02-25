'use client'

import { useSectionInView } from '@/hooks/use-section-in-view'
import { projectsData } from '@/lib/data'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Icons } from './icons'
import SectionHeading from './section-heading'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
}

type ProjectCardProps = {
  data: (typeof projectsData)[number]
  index: number
}

function ProjectCard({ data, index }: ProjectCardProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const isRestricted = data.links.preview.trim().toLowerCase() === 'restricted'

  const setPosition = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="group relative isolate flex flex-col rounded border p-4 cursor-pointer overflow-hidden"
      onMouseEnter={(e) => {
        setIsHovering(true)
        setPosition(e)
      }}
      onMouseMove={setPosition}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="overflow-hidden rounded"
      >
        <Link
          href={data.links.github}
          aria-label={data.title}
          target="_blank"
          className="block"
        >
          {data.image ? (
            <Image
              src={data.image}
              alt={data.title}
              width={1200}
              height={675}
              className="pointer-events-none mx-auto h-56 w-full object-cover object-top"
            />
          ) : (
            <video
              src={data.video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-56 w-full object-cover object-top"
            />
          )}
        </Link>
      </div>
      {isRestricted ? (
        <Button
          variant="destructive"
          className={`absolute z-20 transition-opacity duration-150 ${
            isHovering ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            left: mouse.x,
            top: mouse.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          Restricted to Visit due to company policies
        </Button>
      ) : (
        <Button
          asChild
          variant="outline"
          className={`absolute z-20 bg-background/90 transition-opacity duration-150 ${
            isHovering ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            left: mouse.x,
            top: mouse.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Link
            href={data.links.preview !== '#' ? data.links.preview : data.links.github}
            target="_blank"
          >
            Visit Site <Icons.preview className="size-4" />
          </Link>
        </Button>
      )}
      <h3 className="mt-4 text-xl font-medium">
        <Link href={`/projects/${data.slug}`} className="hover:underline underline-offset-4">
          {data.title}
        </Link>
      </h3>
      <p className="text-muted-foreground mb-4 mt-1">{data.description}</p>
      <div className="flex flex-wrap gap-2">
        {data.technologies.map((tech) => (
          <Badge key={tech} variant={'outline'} size={'lg'}>
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const { ref } = useSectionInView('Projects')

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="My Projects"
          content="Projects I worked on. Each of them containing its own case study."
        />
      </motion.div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projectsData.map((data, index) => (
          <ProjectCard key={data.title} data={data} index={index} />
        ))}
      </div>
    </section>
  )
}
