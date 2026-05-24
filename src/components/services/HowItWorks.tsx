import { AppImage } from '@/components/ui/AppImage'
import { howItWorksSteps } from '@/data/services'
import { MotionItem, MotionReveal } from '@/components/motion'

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-[1728px] px-4 py-10 lg:px-[100px] lg:py-16">
      <MotionReveal stagger={0.1}>
        <MotionItem>
          <h2 className="text-[30px] font-normal lg:text-[40px]">HOW IT WORKS</h2>
        </MotionItem>
        <MotionItem>
          <p className="mt-3 max-w-[307px] text-sm font-light leading-relaxed lg:mt-6 lg:max-w-[575px] lg:text-xl">
            A simple and efficient process designed to make your building experience smooth
            and stress-free from start to finish.
          </p>
        </MotionItem>
      </MotionReveal>

      <MotionReveal
        className="mt-6 flex flex-col gap-5 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-8"
        stagger={0.1}
        delayChildren={0.05}
      >
        {howItWorksSteps.map((step) => (
          <MotionItem key={step.step}>
            <article className="flex min-h-[370px] flex-col overflow-hidden rounded-[20px] bg-[#e2e2e2] lg:relative lg:min-h-[506px]">
              <div className="flex flex-col gap-2 px-[23px] pb-4 pt-6 lg:absolute lg:inset-y-0 lg:left-0 lg:max-w-[calc(100%-386px)] lg:justify-center lg:gap-0 lg:px-9 lg:py-8">
                <span
                  className="mb-2 flex size-[53px] items-center justify-center rounded-full bg-primary text-[32px] font-medium leading-none text-primary-foreground lg:mb-6 lg:size-[90px] lg:text-[50px]"
                  aria-hidden
                >
                  {step.step}
                </span>
                <h3 className="text-lg font-medium lg:text-[25px]">{step.title}</h3>
                <p className="max-w-[298px] text-sm font-light leading-relaxed lg:mt-4 lg:max-w-[276px] lg:text-xl">
                  {step.description}
                </p>
              </div>

              <div className="mx-[23px] mb-[23px] mt-auto h-[162px] shrink-0 overflow-hidden rounded-[20px] lg:absolute lg:inset-y-[25px] lg:right-[25px] lg:mx-0 lg:mb-0 lg:mt-0 lg:h-auto lg:w-[361px]">
                <AppImage
                  src={step.image}
                  alt=""
                  className="block size-full object-cover"
                />
              </div>
            </article>
          </MotionItem>
        ))}
      </MotionReveal>
    </section>
  )
}
