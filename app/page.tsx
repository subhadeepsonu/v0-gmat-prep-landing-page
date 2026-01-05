"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import DashboardPreview from "@/components/dashboard-preview"
import FeaturesSection from "@/components/features-section"
import HowItWorks from "@/components/how-it-works"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <DashboardPreview />
      <FeaturesSection />
      <HowItWorks />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
