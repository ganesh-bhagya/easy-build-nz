import type { FormEvent } from 'react'
import { contactFormFields } from '@/data/contact'
import { Button } from '@/components/ui/Button'
import { MotionItem, MotionReveal } from '@/components/motion'

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

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
                  autoComplete={field.autoComplete}
                  className="mt-3 w-full border-0 border-b border-[#aeaeae] bg-transparent py-3 text-base outline-none transition-colors focus:border-primary"
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
                rows={6}
                className="mt-3 h-[186px] w-full resize-none rounded-[20px] border border-[#aeaeae] bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-primary lg:h-[269px]"
              />
            </MotionItem>
          </div>

          <MotionItem>
            <Button
              type="submit"
              className="h-[50px] w-full max-w-[318px] text-base font-medium capitalize lg:h-[62px] lg:max-w-[382px] lg:text-xl"
            >
              Send Message
            </Button>
          </MotionItem>
        </form>
      </MotionReveal>
    </section>
  )
}
