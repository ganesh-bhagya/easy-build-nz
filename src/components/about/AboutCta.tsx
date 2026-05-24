import { Link } from 'react-router-dom'
import { AppImage } from '@/components/ui/AppImage'
import { Button } from '@/components/ui/Button'
import { MotionItem, MotionReveal } from '@/components/motion'
import { images } from '@/lib/images'

export function AboutCta() {
  return (
    <section className="mx-auto max-w-[1728px] px-4 py-10 lg:px-[100px] lg:pb-24">
      <MotionReveal
        className="relative mx-auto min-h-[624px] w-full max-w-[361px] overflow-hidden rounded-[20px] lg:mx-0 lg:max-w-none lg:aspect-[1528/624] lg:min-h-0"
        stagger={0.1}
      >
        <AppImage
          src={images.aboutPage.ctaMobile}
          alt=""
          className="absolute inset-0 size-full object-cover lg:hidden"
        />
        <AppImage
          src={images.aboutPage.cta}
          alt=""
          className="absolute inset-0 hidden size-full object-cover lg:block"
        />

        <div className="relative flex min-h-[624px] flex-col justify-center px-[30px] py-12 lg:min-h-0 lg:px-[123px] lg:py-16">
          <MotionItem>
            <h2 className="max-w-[294px] text-[30px] font-medium uppercase leading-tight text-primary lg:max-w-[414px] lg:text-[50px]">
              Ready to Start Your Project?
            </h2>
          </MotionItem>
          <MotionItem>
            <p className="mt-4 max-w-[242px] text-sm font-medium uppercase leading-relaxed text-primary lg:mt-6 lg:max-w-[524px] lg:text-xl">
              Let&apos;s bring your ideas to life with expert craftsmanship and reliable
              service.
            </p>
          </MotionItem>
          <MotionItem>
            <Link to="/contact" className="mt-6 inline-block lg:mt-8">
              <Button size="sm" className="h-[50px] w-[252px] lg:h-auto lg:w-fit">
                Get Your Free Quote Today
              </Button>
            </Link>
          </MotionItem>
        </div>
      </MotionReveal>
    </section>
  )
}
