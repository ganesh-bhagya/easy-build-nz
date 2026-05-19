import { images } from '@/lib/images'

export { siteNavLinks as navLinks, mobileNavLinks, footerExplore } from '@/data/navigation'

export const footerServices = [
  'Home Renovations',
  'Decking & Fencing',
  'Repairs & Maintenance',
  'Interior Improvements',
  'Exterior Works',
  'Commercial Projects',
] as const

export const services = [
  {
    title: 'Home Renovations',
    description:
      'Reimagine your living space with thoughtfully designed renovations that combine modern style, comfort, and functionality. From minor upgrades to full home transformations, we bring your vision to life.',
    image: images.services[0],
  },
  {
    title: 'Decking & Fencing',
    description:
      'Create beautiful and durable outdoor spaces with our expertly crafted decking and fencing solutions. Built to withstand the elements while enhancing the look and value of your property.',
    image: images.services[1],
  },
  {
    title: 'Repairs & Maintenance',
    description:
      'Keep your home running smoothly with reliable repair and maintenance services. We handle everything from small fixes to ongoing upkeep, ensuring long-lasting results and peace of mind.',
    image: images.services[2],
  },
  {
    title: 'Interior Improvements',
    description:
      'Upgrade your interiors with precision and care. Whether it’s kitchens, bathrooms, or living areas, we deliver high-quality finishes that enhance both aesthetics and usability.',
    image: images.services[3],
  },
  {
    title: 'Exterior Works',
    description:
      'Protect and improve your home’s exterior with our complete range of services, including roofing, painting, cladding, and more — all delivered with durability and attention to detail.',
    image: images.services[4],
  },
  {
    title: 'Commercial Projects',
    description:
      'Professional building solutions tailored for commercial spaces. We work efficiently to deliver functional, high-quality results that support your business operations.',
    image: images.services[5],
  },
  {
    title: 'Vinyl Flooring',
    description:
      'Enhance your interiors with durable and stylish vinyl flooring solutions. Designed for comfort, easy maintenance, and long-lasting performance in any space.',
    image: images.services[6],
  },
  {
    title: 'Tiling Services',
    description:
      'Achieve a clean and modern finish with expert tiling for floors, walls, kitchens, and bathrooms. Precision installation ensures both beauty and durability.',
    image: images.services[7],
  },
  {
    title: 'Property Maintenance Plans',
    description:
      'Keep your property in top condition with our scheduled maintenance plans. We provide regular inspections, repairs, and upkeep to ensure long-term durability and peace of mind.',
    image: images.services[8],
  },
] as const

export const whyChooseItems = [
  {
    title: 'Experienced & Professional Team',
    description: 'Years of experience delivering quality work with precision.',
  },
  {
    title: 'Transparent & Honest Pricing',
    description: 'Clear, upfront quotes with no hidden costs.',
  },
  {
    title: 'High-Quality Materials & Workmanship',
    description: 'Durable materials and reliable craftsmanship you can trust.',
  },
  {
    title: 'Customer Satisfaction Guaranteed',
    description: 'We ensure every result meets your expectations.',
  },
] as const

export const testimonials = [
  {
    quote:
      'Easy Build NZ did an amazing job on our home renovation. The team was professional, efficient, and delivered exactly what we wanted. The whole process was smooth and stress-free.',
    name: 'Sarah Williams',
    role: 'Homeowner, Auckland',
    avatar: images.testimonialAvatar,
  },
  {
    quote:
      'From decking to interior upgrades, every detail was handled with care. We couldn’t be happier with the finished result and would recommend them to anyone in New Zealand.',
    name: 'James Mitchell',
    role: 'Property Owner, Wellington',
    avatar: images.testimonialAvatar,
  },
] as const
