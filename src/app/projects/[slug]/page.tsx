import { projectsData } from '@/lib/data'
import { siteConfig } from '@/lib/site-config'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{ slug: string }>
}

const getProjectBySlug = (slug: string) =>
  projectsData.find((project) => project.slug === slug)

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: `Project Not Found | ${siteConfig.name}`,
    }
  }

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      type: 'article',
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: project.image ? [project.image] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      images: project.image ? [project.image] : undefined,
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const isRestricted = project.links.preview.trim().toLowerCase() === 'restricted'
  const previewUrl =
    project.links.preview !== '#' && !isRestricted
      ? project.links.preview
      : project.links.github

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12">
      <div className="mb-6">
        <Link href="/#projects" className="text-sm underline-offset-4 hover:underline">
          Back to projects
        </Link>
      </div>

      <article className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold md:text-4xl">{project.title}</h1>
          <p className="text-muted-foreground">{project.description}</p>
        </header>

        <section className="overflow-hidden rounded-xl border">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={675}
              className="h-auto w-full object-cover"
            />
          ) : (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="h-auto w-full object-cover"
            />
          )}
        </section>

        <section className="grid gap-4 rounded-xl border p-4 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide">Role</h2>
            <p className="text-muted-foreground mt-1">{project.role}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide">Duration</h2>
            <p className="text-muted-foreground mt-1">{project.duration}</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Highlights</h2>
          <ul className="text-muted-foreground list-disc space-y-2 pl-5">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full border px-3 py-1 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="flex flex-wrap gap-3">
          {isRestricted ? (
            <span className="rounded-md bg-destructive px-4 py-2 text-sm font-medium text-white">
              Restricted due to company policies
            </span>
          ) : (
            <Link
              href={previewUrl}
              target="_blank"
              className="rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
            >
              Visit Live Site
            </Link>
          )}
          {project.links.github !== '#' && (
            <Link
              href={project.links.github}
              target="_blank"
              className="rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
            >
              View Source
            </Link>
          )}
        </section>
      </article>
    </main>
  )
}
