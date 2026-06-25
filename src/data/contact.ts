export const contactInfo = {
  address: '327 Racecourse Road, Waverley, Invercargill, 9810, New Zealand',
  phone: '+64 20 445 0738',
  phoneHref: '+64204450738',
  email: 'contact@easybuildnz.co.nz',
} as const

export const contactFormFields = [
  { id: 'name', label: 'Name*', type: 'text', autoComplete: 'name' },
  { id: 'email', label: 'Email address*', type: 'email', autoComplete: 'email' },
  { id: 'phone', label: 'Contact number*', type: 'tel', autoComplete: 'tel' },
  { id: 'subject', label: 'Subject*', type: 'text', autoComplete: 'off' },
] as const
