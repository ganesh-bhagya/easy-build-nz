import type { ImgHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type AppImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  /** Above-the-fold / LCP images should set priority */
  priority?: boolean
}

export function AppImage({
  priority = false,
  loading,
  decoding,
  className,
  ...props
}: AppImageProps) {
  return (
    <img
      loading={priority ? 'eager' : (loading ?? 'lazy')}
      decoding={priority ? 'sync' : (decoding ?? 'async')}
      className={cn(className)}
      {...props}
    />
  )
}
