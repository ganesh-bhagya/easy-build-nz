import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { mobileNavLinks } from '@/data/home'
import { images } from '@/lib/images'
import {
  defaultTransition,
  fadeInUp,
  getStaggerContainer,
} from '@/components/motion'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, close])

  return (
    <>
      <button
        type="button"
        className="flex size-10 items-center justify-center text-foreground lg:hidden"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <HamburgerIcon />
      </button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[100] bg-surface lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <motion.button
                type="button"
                onClick={close}
                className="absolute right-[13px] top-5 flex size-10 items-center justify-center text-foreground"
                aria-label="Close menu"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.05, ...defaultTransition }}
              >
                <CloseIcon />
              </motion.button>

              <motion.div
                className="flex h-full flex-col items-center overflow-y-auto px-6 pb-10 pt-[34px]"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={getStaggerContainer(0.08, 0.12)}
              >
                <motion.div variants={fadeInUp} transition={defaultTransition}>
                  <img
                    src={images.mobileMenuLogo}
                    alt="Easy Build NZ"
                    className="h-[147px] w-[162px] object-contain"
                  />
                </motion.div>

                <nav
                  className="mt-6 flex flex-col items-center gap-[31px]"
                  aria-label="Mobile"
                >
                  {mobileNavLinks.map((link) => (
                    <motion.div
                      key={link.label}
                      variants={fadeInUp}
                      transition={defaultTransition}
                    >
                      <Link
                        to={link.href}
                        onClick={close}
                        className="text-base font-normal uppercase text-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  )
}

function HamburgerIcon() {
  return (
    <svg width="27" height="20" viewBox="0 0 27 20" fill="none" aria-hidden>
      <path
        d="M0 2h27M0 10h27M0 18h27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
