import { MotionItem, MotionReveal, MotionSection } from '@/components/motion'
import { images } from '@/lib/images'

export function FeatureSection() {
  return (
    <MotionSection className="mx-auto max-w-[1728px] px-4 py-12 lg:px-[100px] lg:py-24">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
        <MotionReveal>
          <MotionItem>
            <p className="text-[30px] font-normal uppercase leading-tight lg:text-[70px]">
              Building better spaces with trusted
            </p>
          </MotionItem>
          <MotionItem>
            <p className="mt-2 text-[30px] font-light uppercase leading-tight text-muted lg:mt-4 lg:text-[70px]">
              craftsmanship and modern expertise.
            </p>
          </MotionItem>
        </MotionReveal>
        <MotionItem variant="slideInRight">
          <div className="aspect-square w-full overflow-hidden rounded-[20px] lg:aspect-auto">
            <img
              src={images.featureHouse}
              alt="Modern home exterior"
              className="size-full object-cover lg:w-full"
            />
          </div>
        </MotionItem>
      </div>
    </MotionSection>
  )
}
