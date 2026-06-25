export type ContactFormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  turnstileToken?: string
}

type ContactResponse = {
  success?: boolean
  message?: string
  error?: string
}

const apiBase = import.meta.env.VITE_API_URL ?? ''

export async function submitContactForm(data: ContactFormData) {
  const response = await fetch(`${apiBase}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const body = (await response.json()) as ContactResponse

  if (!response.ok) {
    throw new Error(body.error || 'Something went wrong. Please try again.')
  }

  return body
}
