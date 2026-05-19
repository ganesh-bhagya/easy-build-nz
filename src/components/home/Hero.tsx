import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { images } from '@/lib/images'
import {
  defaultTransition,
  fadeInUp,
  getStaggerContainer,
} from '@/components/motion'

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative min-h-[calc(100svh-var(--header-height))] w-full overflow-hidden lg:max-h-[1040px]">
      <motion.img
        src={images.hero}
        alt=""
        className="absolute inset-0 size-full object-cover object-[46%_center] lg:object-center"
        initial={prefersReducedMotion ? false : { scale: 1.08 }}
        animate={prefersReducedMotion ? undefined : { scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute inset-0 bg-black/20"
        aria-hidden
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-var(--header-height))] max-w-[1728px] flex-col justify-start px-[22px] pb-36 pt-8 lg:min-h-[calc(100svh-var(--header-height))] lg:justify-center lg:px-[100px] lg:pb-28 lg:pt-6">
        <motion.div
          className="max-w-[358px] lg:max-w-[892px]"
          initial="hidden"
          animate="visible"
          variants={getStaggerContainer(0.12, 0.15)}
        >
          <motion.h1
            className="text-[40px] font-semibold leading-tight text-white lg:text-[70px]"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            Build, Renovate & Maintain Your Property with Ease
          </motion.h1>
          <motion.p
            className="mt-[25px] max-w-[358px] text-lg text-white lg:mt-5 lg:max-w-[689px] lg:text-[25px]"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            Trusted professionals for home improvements, repairs, and construction
            across New Zealand.
          </motion.p>
          <motion.div variants={fadeInUp} transition={defaultTransition}>
            <Button variant="secondary" size="sm" className="mt-[25px] lg:mt-5">
              Get a Free Quote
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.aside
        className="absolute bottom-8 right-4 z-10 flex w-[203px] flex-col items-center rounded-[10px] bg-trust-badge px-8 py-5 text-center text-white lg:right-[139px] lg:w-auto lg:px-10 lg:py-6 lg:text-left"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.95 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ ...defaultTransition, delay: 0.45 }}
      >
        <p className="text-lg lg:text-[25px]">Trusted by</p>
        <p className="text-[60px] font-medium leading-none lg:text-[70px]">500+</p>
        <p className="text-lg lg:text-[25px]">Happy Clients</p>
      </motion.aside>
    </section>
  )
}
