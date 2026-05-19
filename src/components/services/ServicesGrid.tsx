import { services } from '@/data/home'
import { MotionItem, MotionReveal } from '@/components/motion'

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-[1728px] px-4 pb-10 lg:px-[100px] lg:pb-24">
      <MotionReveal
        className="flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-8"
        stagger={0.08}
        delayChildren={0.05}
      >
        {services.map((service, index) => (
          <MotionItem key={service.title} variant="fadeInUp">
            <article className="flex flex-col gap-5 lg:h-full lg:gap-3">
              <div
                className={`w-full shrink-0 overflow-hidden rounded-[20px] bg-[#d9d9d9] lg:aspect-[487/552] ${
                  index >= 2 ? 'aspect-[359/257]' : 'aspect-[359/237]'
                }`}
              >
                <img
                  src={service.image}
                  alt=""
                  className="block size-full object-cover"
                />
              </div>
              <div className="flex min-h-[186px] flex-col justify-center rounded-[20px] border border-border bg-surface px-[26px] py-5 lg:min-h-[202px] lg:flex-1 lg:px-[30px] lg:py-6">
                <h3 className="text-[20px] font-medium uppercase leading-tight lg:text-[25px]">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm font-normal leading-relaxed lg:mt-3 lg:text-lg">
                  {service.description}
                </p>
              </div>
            </article>
          </MotionItem>
        ))}
      </MotionReveal>
    </section>
  )
}
