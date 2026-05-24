import { AppImage } from '@/components/ui/AppImage'
import { Button } from '@/components/ui/Button'
import { MotionItem, MotionReveal, MotionSection } from '@/components/motion'
import { images } from '@/lib/images'

export function CtaSection() {
  return (
    <MotionSection className="mx-auto max-w-[1728px] px-4 py-12 lg:px-[100px] lg:pb-24">
      <div className="relative min-h-[659px] w-full overflow-hidden rounded-[20px] lg:aspect-[1528/624] lg:min-h-0">
        <AppImage
          src={images.ctaBg}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <MotionReveal className="relative flex min-h-[659px] flex-col justify-start px-[30px] py-12 lg:min-h-0 lg:justify-center lg:px-[123px] lg:py-16">
          <MotionItem>
            <h2 className="max-w-[235px] text-[30px] font-medium uppercase leading-tight text-primary lg:max-w-md lg:text-[50px]">
              Ready to Start Your Project?
            </h2>
          </MotionItem>
          <MotionItem>
            <p className="mt-4 max-w-[227px] text-sm font-medium uppercase leading-relaxed text-primary lg:mt-6 lg:max-w-lg lg:text-xl">
              Let’s bring your ideas to life with expert craftsmanship and reliable
              service.
            </p>
          </MotionItem>
          <MotionItem>
            <Button size="sm" className="mt-6 w-fit lg:mt-8">
              Get Your Free Quote Today
            </Button>
          </MotionItem>
        </MotionReveal>
      </div>
    </MotionSection>
  )
}
