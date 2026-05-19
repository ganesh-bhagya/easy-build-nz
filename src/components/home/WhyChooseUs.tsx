import { useState } from 'react'
import { motion } from 'framer-motion'
import { whyChooseItems } from '@/data/home'
import {
  MotionItem,
  MotionReveal,
  MotionSection,
  defaultTransition,
} from '@/components/motion'
import { images } from '@/lib/images'
import { cn } from '@/lib/cn'

export function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <MotionSection className="mx-auto max-w-[1728px] px-4 py-12 lg:px-[100px] lg:py-24">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-16">
        <MotionItem variant="slideInLeft" className="lg:col-span-1">
          <div className="aspect-[358/403] w-full overflow-hidden rounded-[20px] lg:aspect-[759/860]">
            <img
              src={images.whyChoose}
              alt="Modern property with swimming pool and contemporary architecture"
              className="size-full object-cover"
            />
          </div>
        </MotionItem>

        <MotionReveal className="lg:col-span-1" stagger={0.1}>
          <MotionItem>
            <h2 className="text-[30px] font-normal uppercase lg:text-[40px]">
              Why Choose Easy Build NZ?
            </h2>
          </MotionItem>
          <div className="mt-6 flex flex-col gap-4 lg:mt-8">
            {whyChooseItems.map((item, index) => {
              const isActive = index === activeIndex
              return (
                <MotionItem key={item.title}>
                  <motion.button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    layout
                    transition={defaultTransition}
                    className={cn(
                      'w-full rounded-[20px] border px-[23px] py-5 text-left transition-colors lg:px-6 lg:py-6',
                      isActive
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border-muted bg-surface text-foreground hover:border-primary/30',
                    )}
                  >
                    <h3 className="text-lg font-normal uppercase lg:text-[30px]">
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        'mt-2 text-sm uppercase leading-relaxed lg:mt-3 lg:text-lg',
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
    </MotionSection>
  )
}
