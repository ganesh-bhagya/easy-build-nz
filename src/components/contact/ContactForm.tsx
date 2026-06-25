import { useRef, useState, type FormEvent } from 'react'
import { contactFormFields } from '@/data/contact'
import { submitContactForm } from '@/lib/contact-api'
import { Button } from '@/components/ui/Button'
import { MotionItem, MotionReveal } from '@/components/motion'
import {
  isTurnstileEnabled,
  TurnstileWidget,
  type TurnstileHandle,
} from '@/components/contact/TurnstileWidget'
import { cn } from '@/lib/cn'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const turnstileRef = useRef<TurnstileHandle>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isTurnstileEnabled && !turnstileToken) {
      setStatus('error')
      setFeedback('Please complete the security check before sending.')
      return
    }

    setStatus('submitting')
    setFeedback('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const result = await submitContactForm({
        name: String(formData.get('name') ?? ''),
        email: String(formData.get('email') ?? ''),
        phone: String(formData.get('phone') ?? ''),
        subject: String(formData.get('subject') ?? ''),
        message: String(formData.get('message') ?? ''),
        turnstileToken: turnstileToken ?? undefined,
      })

      setStatus('success')
      setFeedback(result.message ?? 'Thank you. We will get back to you soon.')
      form.reset()
      setTurnstileToken(null)
      turnstileRef.current?.reset()
    } catch (error) {
      setStatus('error')
      setFeedback(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      )
      turnstileRef.current?.reset()
      setTurnstileToken(null)
    }
  }

  const submitDisabled =
    status === 'submitting' || (isTurnstileEnabled && !turnstileToken)

  return (
    <section className="mx-auto max-w-[1728px] px-4 pb-12 lg:px-[100px] lg:pb-24">
      <MotionReveal
        className="mx-auto w-full max-w-[987px] rounded-[20px] border border-[#aeaeae] bg-surface px-5 py-12 lg:rounded-[30px] lg:px-[139px] lg:py-[88px]"
        stagger={0.08}
        delayChildren={0.1}
      >
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-10 lg:gap-[98px]">
          <div className="flex w-full max-w-[816px] flex-col gap-8 lg:gap-10">
            {contactFormFields.map((field) => (
              <MotionItem key={field.id}>
                <label htmlFor={field.id} className="block text-base font-light lg:text-[25px]">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  required
                  disabled={status === 'submitting'}
                  autoComplete={field.autoComplete}
                  className="mt-3 w-full border-0 border-b border-[#aeaeae] bg-transparent py-3 text-base outline-none transition-colors focus:border-primary disabled:opacity-60"
                />
              </MotionItem>
            ))}
            <MotionItem>
              <label htmlFor="message" className="block text-base font-light lg:text-[25px]">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                required
                disabled={status === 'submitting'}
                rows={6}
                className="mt-3 h-[186px] w-full resize-none rounded-[20px] border border-[#aeaeae] bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-primary disabled:opacity-60 lg:h-[269px]"
              />
            </MotionItem>
          </div>

          <MotionItem className="flex w-full max-w-[382px] flex-col items-center gap-4">
            <TurnstileWidget
              ref={turnstileRef}
              onVerify={setTurnstileToken}
              onExpire={() => setTurnstileToken(null)}
            />

            {feedback ? (
              <p
                role={status === 'error' ? 'alert' : 'status'}
                className={cn(
                  'text-center text-sm lg:text-base',
                  status === 'error' ? 'text-red-700' : 'text-primary',
                )}
              >
                {feedback}
              </p>
            ) : null}

            <Button
              type="submit"
              disabled={submitDisabled}
              className="h-[50px] w-full max-w-[318px] text-base font-medium capitalize lg:h-[62px] lg:max-w-[382px] lg:text-xl"
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </Button>
          </MotionItem>
        </form>
      </MotionReveal>
    </section>
  )
}
