export const siteNavLinks = [
  { label: 'SERVICES', href: '/services' },
  { label: 'PROJECTS', href: '/#projects' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'CONTACT US', href: '/contact' },
] as const

export const mobileNavLinks = [
  { label: 'HOME', href: '/' },
  ...siteNavLinks,
] as const

export const footerExplore = [
  { label: 'HOME', href: '/' },
  { label: 'SERVICES', href: '/services' },
  { label: 'PROJECTS', href: '/#projects' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'CONTACT US', href: '/contact' },
] as const
