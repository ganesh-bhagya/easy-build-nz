import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactIntro } from '@/components/contact/ContactIntro'
import { ContactForm } from '@/components/contact/ContactForm'
import { MotionPage } from '@/components/motion'

export function ContactPage() {
  return (
    <>
      <Header />
      <MotionPage>
        <ContactHero />
        <ContactIntro />
        <ContactForm />
      </MotionPage>
      <Footer />
    </>
  )
}
