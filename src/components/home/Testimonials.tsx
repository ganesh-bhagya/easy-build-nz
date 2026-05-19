import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '@/data/home'
import { SectionLabel } from '@/components/home/SectionLabel'
import {
  MotionItem,
  MotionReveal,
  MotionSection,
  defaultTransition,
} from '@/components/motion'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const goPrev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const goNext = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  return (
    <MotionSection className="mx-auto max-w-[1728px] px-4 py-12 lg:px-[100px] lg:py-24">
      <div className="rounded-[20px] bg-surface p-6 lg:bg-transparent lg:p-0">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:rounded-[20px] lg:bg-surface lg:p-12">
          <MotionReveal>
            <MotionItem>
              <SectionLabel>[TESTIMONIAL]</SectionLabel>
            </MotionItem>
            <MotionItem>
              <h2 className="mt-4 max-w-[251px] text-[30px] capitalize leading-tight lg:max-w-none lg:text-[50px]">
                What Our Clients Are Saying
              </h2>
            </MotionItem>
            <MotionItem>
              <p className="mt-4 max-w-[325px] text-sm text-muted-foreground lg:mt-6 lg:text-lg">
                We take pride in delivering quality work and reliable service, earning
                the trust of homeowners and businesses across New Zealand.
              </p>
            </MotionItem>
          </MotionReveal>

          <MotionItem variant="scaleIn">
            <div className="relative rounded-[20px] bg-surface p-6 shadow-[0_1px_4px_rgba(0,0,0,0.25)] lg:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={defaultTransition}
                >
                  <div className="flex items-start gap-2 lg:block">
                    <span
                      className="text-4xl font-serif leading-none text-primary lg:text-6xl"
                      aria-hidden
                    >
                      “
                    </span>
                    <blockquote className="text-base leading-relaxed lg:mt-2 lg:text-[25px]">
                      {current.quote}
                    </blockquote>
                  </div>
                  <div className="mt-6 flex flex-col items-center gap-2 lg:mt-8 lg:flex-row lg:items-center lg:gap-4">
                    <img
                      src={current.avatar}
                      alt=""
                      className="size-[51px] rounded-full object-cover lg:size-[83px]"
                    />
                    <div className="text-center lg:text-left">
                      <p className="text-base capitalize lg:text-xl">{current.name}</p>
                      <p className="text-sm capitalize text-muted-foreground lg:text-lg">
                        {current.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="mt-6 flex justify-center gap-3 lg:mt-8 lg:justify-end">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90 lg:size-[55px]"
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next testimonial"
                  className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90 lg:size-[55px]"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </MotionItem>
        </div>
      </div>
    </MotionSection>
  )
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
