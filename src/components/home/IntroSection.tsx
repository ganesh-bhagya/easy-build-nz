import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { GalleryGrid } from '@/components/home/GalleryGrid'
import { GallerySlider } from '@/components/home/GallerySlider'
import { SectionLabel } from '@/components/home/SectionLabel'
import { MotionItem, MotionReveal, MotionSection } from '@/components/motion'

export function IntroSection() {
  return (
    <MotionSection id="about" className="py-12 lg:py-24">
      <MotionReveal className="mx-auto max-w-[1728px] px-4 lg:px-[100px]">
        <MotionItem>
          <SectionLabel>[ABOUT EASY BUILD]</SectionLabel>
        </MotionItem>
        <MotionItem className="mt-4 flex flex-col gap-6 lg:mt-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <h2 className="max-w-[329px] text-[30px] font-normal leading-tight lg:max-w-[591px] lg:text-[40px]">
            Your Trusted Building Partner in New Zealand
          </h2>
          <Link to="/about" className="w-fit shrink-0 self-start lg:mt-2">
            <Button size="sm">More About Us</Button>
          </Link>
        </MotionItem>
        <MotionItem>
          <p className="mt-4 max-w-[289px] text-sm font-light leading-relaxed lg:mt-8 lg:max-w-[851px] lg:text-xl">
            At Easy Build NZ, we specialize in delivering reliable, high-quality building
            and maintenance services tailored to your needs. Whether it’s a simple repair
            or a full renovation, our team is committed to making your experience smooth,
            stress-free, and efficient.
          </p>
        </MotionItem>
      </MotionReveal>

      <GalleryGrid className="mt-8" />
      <GallerySlider className="mt-12 hidden lg:block" />
    </MotionSection>
  )
}
