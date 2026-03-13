import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/landing/hero"
import { ProblemSection } from "@/components/landing/problem"
import { SolutionSection } from "@/components/landing/solution"
import { FeaturesSection } from "@/components/landing/features"
import { HowItWorksSection } from "@/components/landing/how-it-works"
import { ForProvidersSection } from "@/components/landing/for-providers"
import { TestimonialsSection } from "@/components/landing/testimonials"
import { PricingSection } from "@/components/landing/pricing-section"
import { FaqSection } from "@/components/landing/faq"
import { CtaSection } from "@/components/landing/cta"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ForProvidersSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
