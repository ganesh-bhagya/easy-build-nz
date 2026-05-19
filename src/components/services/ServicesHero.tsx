import { motion, useReducedMotion } from 'framer-motion'
import { images } from '@/lib/images'
import { defaultTransition, fadeInUp, getStaggerContainer } from '@/components/motion'

export function ServicesHero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative min-h-[674px] w-full overflow-hidden lg:min-h-[794px]">
      <motion.img
        src={images.servicesPage.heroMobile}
        alt=""
        className="absolute left-1/2 top-0 h-full w-[199%] max-w-none -translate-x-[40%] object-cover lg:hidden"
        initial={prefersReducedMotion ? false : { scale: 1.06 }}
        animate={prefersReducedMotion ? undefined : { scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.img
        src={images.servicesPage.hero}
        alt=""
        className="absolute inset-0 hidden size-full object-cover lg:block"
        initial={prefersReducedMotion ? false : { scale: 1.06 }}
        animate={prefersReducedMotion ? undefined : { scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-black/43" aria-hidden />

      <motion.div
        className="relative mx-auto flex min-h-[674px] max-w-[1728px] flex-col justify-end px-4 pb-10 pt-24 lg:min-h-[794px] lg:px-[100px] lg:pb-16 lg:pt-32"
        initial="hidden"
        animate="visible"
        variants={getStaggerContainer(0.12, 0.1)}
      >
        <motion.h1
          className="max-w-[292px] text-[40px] font-semibold leading-tight text-white lg:max-w-none lg:text-[70px]"
          variants={fadeInUp}
          transition={defaultTransition}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="mt-2 max-w-[292px] text-sm text-white lg:mt-5 lg:max-w-[663px] lg:text-[25px]"
          variants={fadeInUp}
          transition={defaultTransition}
        >
          Reliable, high-quality building solutions tailored to meet your needs — from
          small repairs to complete transformations.
        </motion.p>
      </motion.div>
    </section>
  )
}
