import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AboutHero } from '@/components/about/AboutHero'
import { AboutStats } from '@/components/about/AboutStats'
import { AboutWhoWeAre } from '@/components/about/AboutWhoWeAre'
import { AboutValues } from '@/components/about/AboutValues'
import { AboutExperience } from '@/components/about/AboutExperience'
import { AboutCta } from '@/components/about/AboutCta'
import { MotionPage } from '@/components/motion'

export function AboutPage() {
  return (
    <>
      <Header />
      <MotionPage>
        <AboutHero />
        <AboutStats />
        <AboutWhoWeAre />
        <AboutValues />
        <AboutExperience />
        <AboutCta />
      </MotionPage>
      <Footer />
    </>
  )
}
