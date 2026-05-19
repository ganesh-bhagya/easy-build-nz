import { motion, useReducedMotion } from 'framer-motion'
import { images } from '@/lib/images'
import { defaultTransition, fadeInUp, getStaggerContainer } from '@/components/motion'

export function AboutHero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative min-h-[674px] w-full overflow-hidden lg:min-h-[756px]">
      <motion.img
        src={images.aboutPage.hero}
        alt=""
        className="absolute left-1/2 top-0 h-full w-[113%] max-w-none -translate-x-[35%] object-cover lg:inset-0 lg:size-full lg:translate-x-0"
        initial={prefersReducedMotion ? false : { scale: 1.06 }}
        animate={prefersReducedMotion ? undefined : { scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-black/43" aria-hidden />

      <motion.div
        className="relative mx-auto flex min-h-[674px] max-w-[1728px] flex-col justify-end px-4 pb-10 pt-24 lg:min-h-[756px] lg:px-[100px] lg:pb-16 lg:pt-32"
        initial="hidden"
        animate="visible"
        variants={getStaggerContainer(0.12, 0.1)}
      >
        <motion.h1
          className="max-w-[220px] text-[40px] font-semibold leading-tight text-white lg:max-w-none lg:text-[70px]"
          variants={fadeInUp}
          transition={defaultTransition}
        >
          About Easy Build NZ
        </motion.h1>
        <motion.p
          className="mt-2 max-w-[297px] text-sm text-white lg:mt-5 lg:max-w-[573px] lg:text-[25px]"
          variants={fadeInUp}
          transition={defaultTransition}
        >
          Building better spaces with quality craftsmanship, trusted expertise, and a
          commitment to excellence.
        </motion.p>
      </motion.div>
    </section>
  )
}
