"use client";

import Image from "next/image"
import React, { useEffect } from "react"
import StatusDot from "../BlinkingDot.tsx/BlinkingDot"
import RingButton from "../RingButton"
import { GitHubIcon } from "@/app/icons/Githubicon"
import { CircleArrowRight, Lock, Play } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "../ui/button";
import ProjectAnimations from "../ProjectAnimations"
import type { ProjectAnimation } from "@/helpers/constants"

type ProjectStatus = "live" | "building" | "discontinued"

type ProjectCardProps = {
  image?: string
  video?: string
  title: string
  description: string
  status?: ProjectStatus
  liveLink?: string
  githubLink?: string
  projectBg?: string
  tech?: string[]
  badge?: string
  restricted?: boolean
  animations?: ProjectAnimation[]
}

const statusColorMap: Record<ProjectStatus, "green" | "yellow" | "red"> = {
  live: "green",
  building: "yellow",
  discontinued: "red",
}

const ProjectCard = ({
  image,
  video,
  title,
  description,
  status = "live",
  liveLink,
  githubLink,
  projectBg,
  tech = [],
  badge,
  restricted = false,
  animations = [],
}: ProjectCardProps) => {

  const color = statusColorMap[status]
  const [githubStar, setGithubStar] = React.useState<number>(0);
  const [showAnims, setShowAnims] = React.useState<boolean>(false);

   const fetchStars = async (repo: string): Promise<number> => {
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}`);
      if (!res.ok) return 0;
      const data = await res.json();
      return typeof data.stargazers_count === "number" ? data.stargazers_count : 0;
    } catch (err) {
      console.error("Error fetching stars:", err);
      return 0;
    }
  };

  useEffect(() => {
    if (githubLink) {
      fetchStars( githubLink.replace("https://github.com/", "") ).then(setGithubStar);
    }
  },[githubLink])

  const hasLinks = Boolean(liveLink || githubLink)

  return (
    <div className="h-full group bg-[#09090B] border border-neutral-800 ring-1 rounded-lg ring-neutral-900 hover:ring-neutral-800 transition duration-300 ring-offset-4 ring-offset-black flex flex-col">

      <div className={`relative w-full ${video ? "h-52" : "md:h-52"} rounded-t-lg overflow-hidden bg-neutral-900`}>
        {badge && (
          <div className="absolute top-2 left-2 z-20">
            <span className="rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white/80 backdrop-blur-sm">
              {badge}
            </span>
          </div>
        )}
        {githubStar > 0 && (
          <div className="absolute top-2 right-2 z-20">
            <Button variant="primary" size="sm" className="flex items-center gap-1 bg-transparent hover:bg-transparent">
              <GitHubIcon />
              <span className="text-white">{githubStar}</span>
            </Button>
          </div>
        )}

        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <Image
              src={projectBg || image || ""}
              alt="background"
              fill
              className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-600"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 30 }}
              whileHover={{ opacity: 1, y: 20 }}
              transition={{ duration: 0.2 }}
              className="flex justify-center items-center"
            >
              <Image
                src={image || ""}
                alt={title}
                width={340}
                height={120}
                className="relative z-10 object-contain mt-6 rounded-t-lg border border-neutral-600"
              />
            </motion.div>
          </>
        )}
      </div>

      <div className="p-2 flex flex-1 flex-col">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-base md:text-xl font-semibold font-space-grotesk mb-2">
            {title}
          </h3>

          <div className="flex gap-2 items-center text-sm">
            <StatusDot color={color} />
            {status}
          </div>
        </div>

        <p className="text-[14px] md:text-base text-gray-400 mb-4 px-2 flex-1">
          {description}
        </p>

        {tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 px-2 mb-4">
            {tech.map((t) => (
              <span
                key={t}
                className="text-[10px] md:text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-col gap-2 p-2">
          {animations.length > 0 && (
            <button
              type="button"
              onClick={() => setShowAnims(true)}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:border-white/30 hover:bg-white/10"
            >
              <Play className="h-3.5 w-3.5" />
              Preview features
            </button>
          )}

          {hasLinks ? (
            <div className={`grid ${liveLink && githubLink ? "grid-cols-2" : "grid-cols-1"} gap-4`}>
              {liveLink && (
                <RingButton
                  text="View Live"
                  icon={CircleArrowRight}
                  href={liveLink}
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              )}

              {githubLink && (
                <RingButton
                  text="Github"
                  icon={GitHubIcon}
                  href={githubLink}
                  size="sm"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              )}
            </div>
          ) : restricted ? (
            <div className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
              <Lock className="h-3.5 w-3.5" />
              Private · Internal project
            </div>
          ) : null}
        </div>
      </div>

      <ProjectAnimations
        open={showAnims}
        onClose={() => setShowAnims(false)}
        heading={title}
        animations={animations}
        liveHref={liveLink}
      />
    </div>
  )
}

export default ProjectCard
