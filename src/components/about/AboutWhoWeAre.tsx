import { AppImage } from '@/components/ui/AppImage'
import { SectionLabel } from '@/components/home/SectionLabel'
import { MotionItem, MotionReveal } from '@/components/motion'
import { images } from '@/lib/images'

export function AboutWhoWeAre() {
  return (
    <section className="mx-auto max-w-[1728px] px-4 py-10 lg:px-[100px] lg:py-16">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="min-w-0 lg:max-w-[564px]">
          <MotionReveal stagger={0.1}>
            <MotionItem>
              <SectionLabel>[ABOUT EASY BUILD]</SectionLabel>
            </MotionItem>
            <MotionItem>
              <h2 className="mt-4 max-w-[180px] text-[30px] font-normal leading-tight lg:max-w-none lg:text-[40px]">
                Who We Are
              </h2>
            </MotionItem>
          </MotionReveal>

          <MotionReveal className="mt-6 flex flex-col gap-6 lg:mt-8" stagger={0.1}>
            <MotionItem>
              <p className="text-sm leading-relaxed lg:text-[25px]">
                <span className="font-semibold text-primary">Easy Build NZ</span>{' '}
                is a trusted building and maintenance company dedicated to delivering
                high-quality construction solutions across New Zealand. With years of
                hands-on experience, our team combines skill, reliability, and attention to
                detail to bring every project to life.
              </p>
            </MotionItem>
            <MotionItem>
              <p className="text-sm leading-relaxed lg:text-[25px]">
                We take pride in helping homeowners and businesses create spaces that are
                functional, modern, and built to last.
              </p>
            </MotionItem>
          </MotionReveal>
        </div>

        {/* Mobile — side-by-side pair + showcase (Figma 1-733) */}
        <MotionReveal className="mt-8 w-full max-w-[361px] lg:hidden" delayChildren={0.15}>
          <div className="flex justify-between">
            <MotionItem className="h-[327px] w-[174px] overflow-hidden rounded-[15px]">
              <AppImage
                src={images.aboutPage.whoWeAre.back}
                alt="Construction worker on roof with scaffolding"
                className="block size-full object-cover"
              />
            </MotionItem>
            <MotionItem className="h-[327px] w-[174px] overflow-hidden rounded-[15px]">
              <AppImage
                src={images.aboutPage.whoWeAre.front}
                alt="Easy Build NZ team members on site"
                className="block size-full object-cover"
              />
            </MotionItem>
          </div>
          <MotionItem className="mt-5 aspect-[361/322] w-full overflow-hidden rounded-[20px]">
            <AppImage
              src={images.aboutPage.values}
              alt="Modern home built by Easy Build NZ"
              className="block size-full object-cover"
            />
          </MotionItem>
        </MotionReveal>

        {/* Desktop — overlapping pair (Figma 1-271) */}
        <MotionReveal
          className="relative mt-8 hidden h-[645px] w-[839px] shrink-0 lg:mt-0 lg:block"
          delayChildren={0.15}
        >
          <MotionItem className="absolute inset-y-0 left-0 z-0 w-[400px] overflow-hidden rounded-[20px]">
            <AppImage
              src={images.aboutPage.whoWeAre.back}
              alt="Construction worker on roof with scaffolding"
              className="block size-full object-cover"
            />
          </MotionItem>
          <MotionItem className="absolute inset-y-0 right-0 z-10 w-[400px] overflow-hidden rounded-[20px]">
            <AppImage
              src={images.aboutPage.whoWeAre.front}
              alt="Easy Build NZ team members on site"
              className="block size-full object-cover"
            />
          </MotionItem>
        </MotionReveal>
      </div>
    </section>
  )
}
