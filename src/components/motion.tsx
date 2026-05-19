import type { HTMLMotionProps, Variants } from 'framer-motion'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/cn'

export const easeOut = [0.22, 1, 0.36, 1] as const

export const defaultTransition = {
  duration: 0.55,
  ease: easeOut,
} as const

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0 },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0 },
}

export type MotionVariantName =
  | 'fadeInUp'
  | 'fadeIn'
  | 'scaleIn'
  | 'slideInLeft'
  | 'slideInRight'

const variantMap = {
  fadeInUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
} as const

export function getStaggerContainer(
  stagger = 0.1,
  delayChildren = 0,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  }
}

export const staggerContainer = getStaggerContainer(0.1)

const defaultViewport = { once: true, margin: '-80px' as const }

type MotionSectionProps = HTMLMotionProps<'section'> & {
  delay?: number
}

export function MotionSection({
  children,
  className,
  delay = 0,
  ...props
}: MotionSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={defaultViewport}
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  )
}

type MotionRevealProps = HTMLMotionProps<'div'> & {
  stagger?: number
  delayChildren?: number
  once?: boolean
}

export function MotionReveal({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0,
  once = true,
  ...props
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={{ once, margin: '-60px' }}
      variants={getStaggerContainer(stagger, delayChildren)}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type MotionItemProps = HTMLMotionProps<'div'> & {
  variant?: MotionVariantName
}

export function MotionItem({
  children,
  className,
  variant = 'fadeInUp',
  ...props
}: MotionItemProps) {
  return (
    <motion.div
      variants={variantMap[variant]}
      transition={defaultTransition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type MotionPageProps = HTMLMotionProps<'main'>

export function MotionPage({ children, className, ...props }: MotionPageProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.main
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1 }}
      transition={{ duration: 0.4, ease: easeOut }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.main>
  )
}
