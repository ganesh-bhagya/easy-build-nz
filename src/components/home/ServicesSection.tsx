import { AppImage } from '@/components/ui/AppImage'
import { services } from '@/data/home'
import { SectionLabel } from '@/components/home/SectionLabel'
import { MotionItem, MotionReveal, MotionSection } from '@/components/motion'

export function ServicesSection() {
  return (
    <MotionSection
      id="services"
      className="mx-auto max-w-[1728px] px-4 py-12 lg:px-[100px] lg:py-24"
    >
      <MotionReveal>
        <MotionItem>
          <SectionLabel>[SERVICES]</SectionLabel>
        </MotionItem>
        <MotionItem>
          <h2 className="mt-4 text-[30px] font-normal lg:text-[40px]">Our Services</h2>
        </MotionItem>
        <MotionItem>
          <p className="mt-4 max-w-[338px] text-sm font-light lg:max-w-[513px] lg:text-xl">
            Comprehensive building solutions designed to transform, maintain, and elevate
            your space with quality craftsmanship and attention to detail.
          </p>
        </MotionItem>
      </MotionReveal>

      <MotionReveal
        className="mt-8 grid grid-cols-1 gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-8"
        stagger={0.08}
        delayChildren={0.05}
      >
        {services.map((service) => (
          <MotionItem key={service.title}>
            <article className="flex flex-col gap-5 lg:h-full lg:gap-3">
              <div className="aspect-[359/237] w-full shrink-0 overflow-hidden rounded-[20px] bg-[#d9d9d9] lg:aspect-[487/552]">
                <AppImage
                  src={service.image}
                  alt=""
                  className="block size-full object-cover"
                />
              </div>
              <div className="rounded-[20px] border border-border bg-surface px-[26px] py-5 lg:flex lg:min-h-[202px] lg:flex-1 lg:flex-col lg:justify-center lg:px-[30px] lg:py-6">
                <h3 className="text-xl font-medium uppercase lg:text-[25px]">
                  {service.title}
                </h3>
                <p className="mt-2 text-base font-normal leading-relaxed lg:mt-3 lg:text-lg">
                  {service.description}
                </p>
              </div>
            </article>
          </MotionItem>
        ))}
      </MotionReveal>
    </MotionSection>
  )
}
