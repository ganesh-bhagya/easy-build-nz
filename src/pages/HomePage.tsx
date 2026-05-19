import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { IntroSection } from '@/components/home/IntroSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { FeatureSection } from '@/components/home/FeatureSection'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { Testimonials } from '@/components/home/Testimonials'
import { CtaSection } from '@/components/home/CtaSection'
import { MotionPage } from '@/components/motion'

export function HomePage() {
  return (
    <>
      <Header />
      <MotionPage>
        <Hero />
        <IntroSection />
        <ServicesSection />
        <FeatureSection />
        <WhyChooseUs />
        <Testimonials />
        <CtaSection />
      </MotionPage>
      <Footer />
    </>
  )
}
