import { aboutFeaturedStat, aboutStats } from '@/data/about'
import { MotionItem, MotionReveal } from '@/components/motion'
import { CountUp } from '@/components/ui/CountUp'

export function AboutStats() {
  const [years, projects, satisfaction, commercial] = aboutStats

  return (
    <section className="mx-auto max-w-[1728px] px-4 py-10 lg:px-[100px] lg:py-16">
      {/* Mobile — Figma 1-733 */}
      <MotionReveal className="lg:hidden" stagger={0.06}>
        <MotionItem className="relative flex min-h-[162px]">
          <div className="flex-1 pl-12">
            <p className="text-[40px] leading-none">
              <CountUp value={aboutFeaturedStat.value} />
            </p>
            <p className="mt-2 text-xl leading-tight">{aboutFeaturedStat.label}</p>
          </div>
          <div
            className="absolute top-0 left-[48%] h-[162px] w-1 -translate-x-1/2 bg-[#d9d9d9]"
            aria-hidden
          />
          <div className="flex-1 pl-6 pt-6 text-[#4f4f4f]">
            <p className="text-[40px] leading-none">
              <CountUp value={years.value} />
            </p>
            <p className="mt-2 max-w-[7rem] text-xl leading-tight">{years.label}</p>
          </div>
        </MotionItem>

        <MotionItem className="mt-8 h-1.5 w-full bg-[#d9d9d9]" aria-hidden />

        <MotionItem className="relative mt-8">
          <div
            className="absolute top-0 left-1/2 h-[280px] w-1 -translate-x-1/2 bg-[#d9d9d9]"
            aria-hidden
          />
          <div className="grid grid-cols-2 gap-y-12 pb-4">
            <div className="text-[#4f4f4f]">
              <p className="text-[40px] leading-none">
                <CountUp value={projects.value} />
              </p>
              <p className="mt-2 max-w-[6.5rem] text-xl leading-tight">{projects.label}</p>
            </div>
            <div className="pl-4 text-[#4f4f4f]">
              <p className="text-[40px] leading-none">
                <CountUp value={satisfaction.value} />
              </p>
              <p className="mt-2 text-xl leading-tight">{satisfaction.label}</p>
            </div>
            <div className="col-span-2 relative pt-2">
              <div
                className="absolute top-0 right-[8%] left-[19%] h-1.5 bg-[#d9d9d9]"
                aria-hidden
              />
              <div className="flex gap-10 pt-10 text-[#4f4f4f]">
                <div>
                  <p className="text-[40px] leading-none">
                    <CountUp value={commercial.value} />
                  </p>
                  <p className="mt-2 max-w-[7.5rem] text-xl leading-tight">
                    {commercial.label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionItem>
      </MotionReveal>

      {/* Desktop — Figma 1-271 */}
      <MotionReveal className="hidden text-center lg:block">
        <MotionItem>
          <p className="text-6xl font-normal leading-none lg:text-[100px]">
            <CountUp value={aboutFeaturedStat.value} duration={2.2} />
          </p>
          <p className="mt-1 text-2xl lg:text-[50px]">{aboutFeaturedStat.label}</p>
        </MotionItem>
      </MotionReveal>

      <MotionReveal
        className="relative mt-10 hidden grid-cols-2 gap-x-6 gap-y-8 border-t border-[#d9d9d9] pt-10 lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[#d9d9d9]"
        stagger={0.08}
        delayChildren={0.1}
      >
        {aboutStats.map((stat, index) => (
          <MotionItem
            key={stat.label}
            className={`px-0 lg:px-8 ${index === 0 ? 'border-r border-[#d9d9d9] pr-6 lg:border-r' : ''} ${index === 1 ? 'pl-6 lg:pl-8' : ''}`}
          >
            <p className="text-5xl font-normal text-[#4f4f4f] lg:text-[80px]">
              <CountUp value={stat.value} />
            </p>
            <p className="mt-1 text-sm text-[#4f4f4f] lg:text-[30px]">{stat.label}</p>
          </MotionItem>
        ))}
      </MotionReveal>
    </section>
  )
}
