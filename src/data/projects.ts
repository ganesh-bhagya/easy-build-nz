import { images } from '@/lib/images'

export const projectsHero = {
  title: 'Our Projects',
  description:
    'Explore our completed projects and see how we bring ideas to life with quality craftsmanship and attention to detail.',
} as const

export const projects = [
  {
    title: 'Modern Home Renovation',
    description:
      'A complete transformation of a residential property with modern design, improved functionality, and high-quality finishes.',
    image: images.projectsPage.items[0],
  },
  {
    title: 'Outdoor Deck & Fence Installation',
    description:
      'Custom-built decking and fencing designed for durability and enhanced outdoor living.',
    image: images.projectsPage.items[1],
  },
  {
    title: 'Bathroom Renovation',
    description:
      'Stylish and functional bathroom upgrade with premium fittings and clean finishes.',
    image: images.projectsPage.items[2],
  },
  {
    title: 'Commercial Office Fit-Out',
    description: 'Efficient and professional workspace designed to meet business needs.',
    image: images.projectsPage.items[3],
  },
  {
    title: 'Exterior Painting Project',
    description:
      'Full exterior repaint to refresh and protect the property with long-lasting results.',
    image: images.projectsPage.items[4],
  },
  {
    title: 'Vinyl Flooring Installation',
    description:
      'Durable and stylish flooring solution installed for a modern interior finish.',
    image: images.projectsPage.items[5],
  },
] as const

export const projectRows = [
  [projects[0], projects[1]],
  [projects[2], projects[3]],
  [projects[4], projects[5]],
] as const
