import { cn } from '@/lib/cn'

type SectionLabelProps = {
  children: string
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'text-xs font-normal uppercase tracking-wide lg:text-lg',
        className,
      )}
    >
      {children}
    </p>
  )
}
