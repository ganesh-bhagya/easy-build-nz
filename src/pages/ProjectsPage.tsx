import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProjectsHero } from '@/components/projects/ProjectsHero'
import { ProjectsGrid } from '@/components/projects/ProjectsGrid'
import { MotionPage } from '@/components/motion'

export function ProjectsPage() {
  return (
    <>
      <Header />
      <MotionPage>
        <ProjectsHero />
        <ProjectsGrid />
      </MotionPage>
      <Footer />
    </>
  )
}
