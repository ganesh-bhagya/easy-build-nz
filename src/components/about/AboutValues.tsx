import { useState } from 'react'
import { motion } from 'framer-motion'
import { aboutValues } from '@/data/about'
import { MotionItem, MotionReveal, defaultTransition } from '@/components/motion'
import { images } from '@/lib/images'
import { cn } from '@/lib/cn'

export function AboutValues() {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <section className="mx-auto max-w-[1728px] px-4 py-10 lg:px-[100px] lg:py-16">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
        <MotionItem variant="slideInLeft" className="hidden lg:block">
          <div className="aspect-[689/954] w-full overflow-hidden rounded-[20px]">
            <img
              src={images.aboutPage.values}
              alt=""
              className="block size-full object-cover"
            />
          </div>
        </MotionItem>

        <MotionReveal stagger={0.08}>
          <MotionItem>
            <h2 className="max-w-[206px] text-[30px] font-normal uppercase lg:max-w-none lg:text-[40px]">
              Our Values
            </h2>
          </MotionItem>
          <div className="mt-6 flex flex-col gap-4 lg:mt-8">
            {aboutValues.map((item, index) => {
              const isActive = index === activeIndex
              return (
                <MotionItem key={item.title}>
                  <motion.button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    layout
                    transition={defaultTransition}
                    className={cn(
                      'min-h-[140px] w-full rounded-[20px] border px-[25px] py-5 text-left transition-colors lg:min-h-[162px] lg:px-8 lg:py-6',
                      isActive
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-[#c8c8c8] bg-surface text-foreground hover:border-primary/30',
                    )}
                  >
                    <h3 className="text-xl font-normal uppercase lg:text-[30px]">
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        'mt-2 text-xs uppercase leading-relaxed lg:mt-3 lg:text-lg',
                        isActive ? 'opacity-95' : 'text-muted-foreground',
                      )}
                    >
                      {item.description}
                    </p>
                  </motion.button>
                </MotionItem>
              )
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
