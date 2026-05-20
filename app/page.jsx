"use client"

import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { TechStackSection } from '@/components/tech-stack-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { ProcessSection } from '@/components/process-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FaqSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Floating Gradient Orbs */}
        <div 
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[128px] opacity-30"
          style={{ background: 'radial-gradient(circle, #00F5FF 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-3/4 -right-32 w-96 h-96 rounded-full blur-[128px] opacity-20"
          style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10"
          style={{ background: 'radial-gradient(circle, #FF4ECD 0%, transparent 70%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechStackSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
