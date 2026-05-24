import { AppImage } from '@/components/ui/AppImage'
import { projectRows, projects } from '@/data/projects'
import { MotionItem, MotionReveal } from '@/components/motion'

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="aspect-[361/306] w-full overflow-hidden rounded-[20px] bg-[#d9d9d9] lg:aspect-[740/431]">
      <AppImage src={src} alt={alt} className="block size-full object-cover" />
    </div>
  )
}

function ProjectCopy({
  title,
  description,
  className,
}: {
  title: string
  description: string
  className?: string
}) {
  return (
    <div className={className}>
      <h3 className="text-xl font-normal uppercase leading-tight lg:text-[30px]">
        {title}
      </h3>
      <p className="mt-2 text-sm font-light leading-relaxed lg:mt-3 lg:text-xl">
        {description}
      </p>
    </div>
  )
}

export function ProjectsGrid() {
  return (
    <section className="mx-auto max-w-[1728px] px-4 py-10 lg:px-[100px] lg:py-16">
      {/* Mobile — stacked image, title, description per project (Figma 1-815) */}
      <MotionReveal className="flex flex-col gap-8 lg:hidden" stagger={0.08}>
        {projects.map((project) => (
          <MotionItem key={project.title}>
            <article className="flex max-w-[361px] flex-col gap-4">
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectCopy title={project.title} description={project.description} />
            </article>
          </MotionItem>
        ))}
      </MotionReveal>

      {/* Desktop — paired images, then paired titles and descriptions (Figma 1-336) */}
      <MotionReveal className="hidden flex-col gap-12 lg:flex" stagger={0.08}>
        {projectRows.map((row) => (
          <MotionItem key={row[0].title}>
            <div className="grid grid-cols-2 gap-x-12">
              {row.map((project) => (
                <ProjectImage key={project.title} src={project.image} alt={project.title} />
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-12">
              {row.map((project) => (
                <ProjectCopy
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  className="max-w-[592px]"
                />
              ))}
            </div>
          </MotionItem>
        ))}
      </MotionReveal>
    </section>
  )
}
