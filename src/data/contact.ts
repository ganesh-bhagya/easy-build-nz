export const contactInfo = {
  location: 'New Zealand',
  phone: '+64 XXX XXX XXX',
  email: 'info@easybuildnz.co.nz',
} as const

export const contactFormFields = [
  { id: 'name', label: 'Name*', type: 'text', autoComplete: 'name' },
  { id: 'email', label: 'Email address*', type: 'email', autoComplete: 'email' },
  { id: 'phone', label: 'Contact number*', type: 'tel', autoComplete: 'tel' },
  { id: 'subject', label: 'Subject*', type: 'text', autoComplete: 'off' },
] as const
