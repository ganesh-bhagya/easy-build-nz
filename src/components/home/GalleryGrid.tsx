import { AppImage } from '@/components/ui/AppImage'
import { images } from '@/lib/images'
import { MotionItem, MotionReveal } from '@/components/motion'
import { cn } from '@/lib/cn'

type GalleryGridProps = {
  className?: string
}

/** Figma mobile 1-366: 2×2 gallery (192×334) */
export function GalleryGrid({ className }: GalleryGridProps) {
  return (
    <MotionReveal
      className={cn(
        'grid grid-cols-2 gap-2 px-4 sm:gap-3 lg:hidden',
        className,
      )}
      stagger={0.08}
      aria-label="Project gallery"
    >
      {images.gallery.map((src, i) => (
        <MotionItem key={src} variant="scaleIn">
          <div className="aspect-[192/334] overflow-hidden rounded-[20px] bg-[#d9d9d9]">
            <AppImage
              src={src}
              alt={`Project showcase ${i + 1}`}
              className="size-full object-cover"
            />
          </div>
        </MotionItem>
      ))}
    </MotionReveal>
  )
}
