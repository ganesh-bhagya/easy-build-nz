import { cn } from '@/lib/cn'

type SliderNavProps = {
  onPrev: () => void
  onNext: () => void
  prevLabel?: string
  nextLabel?: string
  prevDisabled?: boolean
  nextDisabled?: boolean
  className?: string
}

const btnClass =
  'flex size-[55px] items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40'

export function SliderNav({
  onPrev,
  onNext,
  prevLabel = 'Previous slide',
  nextLabel = 'Next slide',
  prevDisabled = false,
  nextDisabled = false,
  className,
}: SliderNavProps) {
  return (
    <div className={cn('flex gap-3', className)}>
      <button
        type="button"
        onClick={onPrev}
        disabled={prevDisabled}
        aria-label={prevLabel}
        className={btnClass}
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        aria-label={nextLabel}
        className={btnClass}
      >
        <ChevronRight />
      </button>
    </div>
  )
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
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
