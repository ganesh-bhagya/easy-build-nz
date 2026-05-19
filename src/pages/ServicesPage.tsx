import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ServicesHero } from '@/components/services/ServicesHero'
import { ServicesIntro } from '@/components/services/ServicesIntro'
import { ServicesGrid } from '@/components/services/ServicesGrid'
import { HowItWorks } from '@/components/services/HowItWorks'
import { ServicesCta } from '@/components/services/ServicesCta'
import { MotionPage } from '@/components/motion'

export function ServicesPage() {
  return (
    <>
      <Header />
      <MotionPage>
        <ServicesHero />
        <ServicesIntro />
        <ServicesGrid />
        <HowItWorks />
        <ServicesCta />
      </MotionPage>
      <Footer />
    </>
  )
}
