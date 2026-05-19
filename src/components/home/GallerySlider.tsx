import { useCallback, useEffect, useMemo, useState, type CSSProperties } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { images } from '@/lib/images'
import { SliderNav } from '@/components/ui/SliderNav'
import { cn } from '@/lib/cn'

const GAP = 20

/** Matches Figma frame proportions (488×726) */
const SLIDE_WIDTH_LG = 488
const SLIDE_HEIGHT_LG = 726

/** Figma 17-636: gallery group at left -38px (bleed past content edge) */
const BLEED_LEFT_LG = 38
const PEEK_INSET_SM = 16

const gallerySlides = images.gallery.map((src, i) => ({
  src,
  alt: `Project showcase ${i + 1}`,
}))

const SLIDE_COUNT = gallerySlides.length

type GallerySliderProps = {
  className?: string
}

export function GallerySlider({ className }: GallerySliderProps) {
  const prefersReducedMotion = useReducedMotion()
  const [position, setPosition] = useState(SLIDE_COUNT)
  const [instant, setInstant] = useState(false)
  const [slideWidth, setSlideWidth] = useState(320)
  const [slideHeight, setSlideHeight] = useState(475)
  const [peekInset, setPeekInset] = useState(PEEK_INSET_SM)
  const [bleedLeft, setBleedLeft] = useState(0)

  const extendedSlides = useMemo(
    () => [...gallerySlides, ...gallerySlides, ...gallerySlides],
    [],
  )

  const activeIndex =
    ((position % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT

  useEffect(() => {
    const updateDimensions = () => {
      const isLg = window.matchMedia('(min-width: 1024px)').matches
      setPeekInset(isLg ? 0 : PEEK_INSET_SM)
      setBleedLeft(isLg ? BLEED_LEFT_LG : 0)

      if (isLg) {
        setSlideWidth(SLIDE_WIDTH_LG)
        setSlideHeight(
          Math.min(SLIDE_HEIGHT_LG, Math.round(window.innerHeight * 0.75)),
        )
        return
      }
      const isMd = window.matchMedia('(min-width: 640px)').matches
      const padding = 48
      const width = isMd
        ? Math.min(400, window.innerWidth - padding)
        : Math.min(320, window.innerWidth - padding)
      setSlideWidth(width)
      const proportional = Math.round(width * (SLIDE_HEIGHT_LG / SLIDE_WIDTH_LG))
      const maxHeight = Math.round(window.innerHeight * 0.75)
      setSlideHeight(Math.min(proportional, maxHeight))
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const normalizeAfterLoop = useCallback((pos: number) => {
    if (pos >= SLIDE_COUNT * 2) {
      setInstant(true)
      return pos - SLIDE_COUNT
    }
    if (pos < SLIDE_COUNT) {
      setInstant(true)
      return pos + SLIDE_COUNT
    }
    return pos
  }, [])

  useEffect(() => {
    if (!instant) return
    const id = requestAnimationFrame(() => setInstant(false))
    return () => cancelAnimationFrame(id)
  }, [instant])

  const goPrev = useCallback(() => {
    setPosition((p) => p - 1)
  }, [])

  const goNext = useCallback(() => {
    setPosition((p) => p + 1)
  }, [])

  const goTo = useCallback((index: number) => {
    setPosition(SLIDE_COUNT + index)
  }, [])

  const offset = position * (slideWidth + GAP)
  const translateX = peekInset - bleedLeft - offset

  const handleAnimationComplete = useCallback(() => {
    setPosition((p) => normalizeAfterLoop(p))
  }, [normalizeAfterLoop])

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    const step = slideWidth + GAP
    const delta = Math.round(-info.offset.x / step)
    if (delta === 0) return
    setPosition((p) => p + delta)
  }

  const transition = instant || prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 280, damping: 32 }

  return (
    <div className={cn('mx-auto w-full max-w-[1728px]', className)}>
      {/* Track: no horizontal padding — bleeds full section width (Figma 17-635) */}
      <div
        className={cn(
          'overflow-hidden',
          bleedLeft > 0 &&
            'w-[calc(100%+var(--gallery-bleed))] -ml-[var(--gallery-bleed)]',
        )}
        style={
          bleedLeft > 0
            ? ({ '--gallery-bleed': `${bleedLeft}px` } as CSSProperties)
            : undefined
        }
        aria-roledescription="carousel"
        aria-label="Project gallery"
      >
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          style={{ gap: GAP }}
          animate={{ x: translateX }}
          transition={transition}
          drag={prefersReducedMotion ? false : 'x'}
          dragElastic={0.12}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          onAnimationComplete={handleAnimationComplete}
        >
          {extendedSlides.map((slide, i) => (
            <div
              key={`${slide.src}-${i}`}
              role="group"
              aria-roledescription="slide"
              aria-hidden={i !== position}
              aria-label={`${(i % SLIDE_COUNT) + 1} of ${SLIDE_COUNT}`}
              className="shrink-0 overflow-hidden rounded-[20px]"
              style={{ width: slideWidth, height: slideHeight }}
            >
              <img
                src={slide.src}
                alt={i === position ? slide.alt : ''}
                className="size-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Controls align with text column padding */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 px-6 lg:px-[100px]">
        <div className="flex gap-2" role="tablist" aria-label="Gallery slides">
          {gallerySlides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                'h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                i === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-border',
              )}
            />
          ))}
        </div>
        <SliderNav
          onPrev={goPrev}
          onNext={goNext}
          prevLabel="Previous gallery image"
          nextLabel="Next gallery image"
        />
      </div>
    </div>
  )
}
