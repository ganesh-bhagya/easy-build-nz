import { Button } from '@/components/ui/Button'
import { MotionItem, MotionReveal } from '@/components/motion'
import { images } from '@/lib/images'

export function ServicesCta() {
  return (
    <section className="mx-auto max-w-[1728px] px-4 py-10 lg:px-[100px] lg:pb-24 lg:pt-12">
      <MotionReveal
        className="relative aspect-[358/540] w-full overflow-hidden rounded-[20px] lg:aspect-[1528/540]"
        stagger={0.12}
        delayChildren={0.15}
      >
        <img
          src={images.servicesPage.cta}
          alt=""
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />

        <div className="relative flex size-full flex-col items-center justify-center gap-[25px] px-8 py-10 text-center lg:gap-6 lg:px-16 lg:py-12">
          <MotionItem variant="fadeIn">
            <h2 className="max-w-[294px] text-[30px] font-medium leading-tight text-white lg:max-w-none lg:text-[40px]">
              Need Help With Your Project?
            </h2>
          </MotionItem>
          <MotionItem variant="fadeIn">
            <p className="max-w-[263px] text-sm font-light leading-relaxed text-white lg:max-w-[563px] lg:text-xl">
              Get in touch with our team today and let&apos;s bring your ideas to life with
              expert building solutions.
            </p>
          </MotionItem>
          <MotionItem variant="fadeIn">
            <Button
              size="sm"
              className="h-[50px] min-w-[201px] px-7 text-base lg:h-[59px] lg:min-w-[268px] lg:px-10 lg:text-xl"
            >
              Get Your Free Quote
            </Button>
          </MotionItem>
        </div>
      </MotionReveal>
    </section>
  )
}
