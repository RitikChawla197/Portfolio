'use client'

import { useSectionInView } from '@/hooks/use-section-in-view'
import { siteConfig } from '@/lib/site-config'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeading from './section-heading'
import Skills from './skills'

export default function AboutSection() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I have been working with programming for over 3 years. My favorite
          part of coding is solving problems, and I love the feeling of finally
          figuring out a tricky challenge.
        </p>
        <p>
          I am open to job opportunities where I can contribute, learn, and
          grow. If you have a good opportunity that matches my skills and
          experience, then do not hesitate to{' '}
          <Link
            className="underline-offset-4 hover:underline"
            href={siteConfig.links.contactForm}
          >
            contact
          </Link>{' '}
          me.
        </p>
      </div>
      <Skills />
    </motion.section>
  )
}
