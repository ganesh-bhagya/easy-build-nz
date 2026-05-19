import { MotionItem, MotionReveal } from '@/components/motion'
import { images } from '@/lib/images'

export function AboutExperience() {
  return (
    <section className="mx-auto max-w-[1728px] px-4 py-10 lg:px-[100px] lg:py-16">
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[371px_1fr_371px] lg:items-stretch lg:gap-6">
        <MotionItem variant="slideInLeft" className="order-1 lg:order-none">
          <div className="aspect-[361/337] w-full max-w-[361px] overflow-hidden rounded-[20px] lg:aspect-[371/695] lg:max-w-none">
            <img
              src={images.aboutPage.experience[0]}
              alt=""
              className="block size-full object-cover"
            />
          </div>
        </MotionItem>

        <MotionReveal
          className="order-2 flex min-h-[340px] items-center justify-center rounded-[20px] bg-primary px-6 py-10 text-center text-primary-foreground lg:order-none lg:min-h-0 lg:px-10 lg:py-16"
          stagger={0.1}
        >
          <div>
            <MotionItem>
              <h2 className="text-[30px] font-normal uppercase lg:text-[40px]">
                Our Experience
              </h2>
            </MotionItem>
            <MotionItem>
              <p className="mx-auto mt-4 max-w-[304px] text-base leading-relaxed lg:mt-6 lg:max-w-[541px] lg:text-[30px]">
                From small repairs to full-scale renovations and commercial projects, our
                team has successfully completed a wide range of building work. Our diverse
                experience allows us to handle projects of all sizes with confidence and
                efficiency.
              </p>
            </MotionItem>
          </div>
        </MotionReveal>

        <MotionItem variant="slideInRight" className="order-3 lg:order-none">
          <div className="aspect-[361/337] w-full max-w-[361px] overflow-hidden rounded-[20px] lg:aspect-[371/695] lg:max-w-none">
            <img
              src={images.aboutPage.experience[1]}
              alt=""
              className="block size-full object-cover"
            />
          </div>
        </MotionItem>
      </div>
    </section>
  )
}
