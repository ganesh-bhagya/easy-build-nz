import { images } from '@/lib/images'

export const howItWorksSteps = [
  {
    step: 1,
    title: 'Request a Quote',
    description:
      'Tell us about your project and what you need. Our team is ready to assist you.',
    image: images.servicesPage.howItWorks[0],
  },
  {
    step: 2,
    title: 'Consultation & Planning',
    description:
      'We discuss your requirements, visit the site if needed, and create a clear plan.',
    image: images.servicesPage.howItWorks[1],
  },
  {
    step: 3,
    title: 'Build & Execute',
    description:
      'Our skilled team carries out the work with precision, quality, and care.',
    image: images.servicesPage.howItWorks[2],
  },
  {
    step: 4,
    title: 'Final Delivery',
    description:
      'We complete the project on time and ensure everything meets your expectations.',
    image: images.servicesPage.howItWorks[3],
  },
] as const
