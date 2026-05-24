import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

function parseStatValue(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!match) {
    return { number: 0, suffix: value }
  }

  return { number: Number(match[1]), suffix: match[2] }
}

type CountUpProps = {
  value: string
  className?: string
  duration?: number
}

export function CountUp({ value, className, duration = 1.8 }: CountUpProps) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const { number, suffix } = parseStatValue(value)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(value)
      return
    }

    if (!isInView) return

    setDisplay(`0${suffix}`)

    const controls = animate(0, number, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(`${Math.round(latest)}${suffix}`),
    })

    return () => controls.stop()
  }, [duration, isInView, number, prefersReducedMotion, suffix, value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
