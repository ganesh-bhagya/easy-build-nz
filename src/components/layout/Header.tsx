import { Link, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { navLinks } from '@/data/home'
import { images } from '@/lib/images'
import { MobileNav } from '@/components/layout/MobileNav'
import { defaultTransition } from '@/components/motion'
import { cn } from '@/lib/cn'

export function Header() {
  const prefersReducedMotion = useReducedMotion()
  const { pathname } = useLocation()

  return (
    <motion.header
      className="sticky top-0 z-50 bg-surface"
      initial={prefersReducedMotion ? false : { opacity: 0, y: -16 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={defaultTransition}
    >
      <div className="mx-auto flex h-[68px] max-w-[1728px] items-center justify-between px-[13px] lg:h-24 lg:px-[100px]">
        <Link to="/" className="shrink-0">
          <img
            src={images.logo}
            alt="Easy Build NZ"
            className="h-[75px] w-[149px] object-contain object-left lg:h-[72px] lg:w-auto lg:max-w-[301px]"
          />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={cn(
                'text-xl font-normal uppercase transition-colors hover:text-primary',
                (link.href === '/services' && pathname === '/services') ||
                (link.href === '/contact' && pathname === '/contact') ||
                (link.href === '/about' && pathname === '/about')
                  ? 'text-primary'
                  : 'text-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </motion.header>
  )
}
