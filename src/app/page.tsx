"use client";

import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import ExperienceSection from '@/components/experience-section'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ProjectsSection from '@/components/projects-section'
import SectionDivider from '@/components/section-divider'
import { ThemeToggle } from '@/components/theme-toggle'
import LoadingScreen from '@/components/LoadingScreen'  
import { useState } from 'react'

export default function Home() {

   const [loading, setLoading] = useState(true);

 return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <Header />
            <HeroSection />
            <AboutSection />
            <SectionDivider />
            <ExperienceSection />
            <SectionDivider />
            <ProjectsSection />
            <ContactSection />
          </div>

          {/* Desktop: Theme Toggle */}
          <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
        </>
      )}
    </>
  );
}
