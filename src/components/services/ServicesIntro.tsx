import { MotionItem, MotionReveal } from '@/components/motion'

export function ServicesIntro() {
  return (
    <section className="mx-auto max-w-[1728px] px-4 py-10 lg:px-[100px] lg:py-16">
      <MotionReveal className="text-center" stagger={0.12}>
        <MotionItem>
          <h2 className="mx-auto max-w-[273px] text-[30px] font-normal leading-tight lg:max-w-none lg:text-[40px]">
            Building Solutions You Can Trust
          </h2>
        </MotionItem>
        <MotionItem>
          <p className="mx-auto mt-5 max-w-[252px] text-sm font-light leading-relaxed lg:mt-8 lg:max-w-[796px] lg:text-xl">
            At Easy Build NZ, we offer a wide range of building, renovation, and maintenance
            services designed to make your life easier. Our experienced team is committed
            to delivering quality workmanship, reliable service, and results that exceed
            expectations.
          </p>
        </MotionItem>
      </MotionReveal>
    </section>
  )
}
