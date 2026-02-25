'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/lib/data'
import { cn } from '@/lib/utils'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  return (
    <div className="mt-10 flex w-full flex-wrap justify-center gap-10 px-5 sm:px-0 md:mt-14 lg:justify-between">
      {skillsData.map(({ name, icon, colorClass }, index) => (
        <motion.div
          key={name}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          <div
            className={cn(
              'text-muted-foreground/70 transition-all duration-200 hover:scale-110',
              '[&_svg]:transition-all [&_svg]:duration-200',
              colorClass,
            )}
          >
            {icon}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
