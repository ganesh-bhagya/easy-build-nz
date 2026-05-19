import { MotionItem, MotionReveal } from '@/components/motion'
import { contactInfo } from '@/data/contact'
import { SocialLinks } from '@/components/contact/SocialLinks'

export function ContactIntro() {
  return (
    <section className="mx-auto max-w-[1728px] px-4 py-10 lg:px-[100px] lg:py-16">
      <MotionReveal className="text-center" stagger={0.1}>
        <MotionItem>
          <h2 className="mx-auto max-w-[263px] text-[30px] font-normal leading-tight lg:max-w-none lg:text-[40px]">
            Let&apos;s Talk About Your Project
          </h2>
        </MotionItem>
        <MotionItem>
          <p className="mx-auto mt-5 max-w-[274px] text-sm font-light leading-relaxed lg:mt-6 lg:max-w-[711px] lg:text-xl">
            Whether you need a quick repair, a full renovation, or expert advice, Easy Build
            NZ is ready to assist. Reach out to us and let&apos;s bring your ideas to life.
          </p>
        </MotionItem>
        <MotionItem>
          <div className="mx-auto mt-8 max-w-[241px] text-center text-lg font-light capitalize leading-relaxed lg:mt-10 lg:max-w-none lg:text-[30px]">
            <p>Location: {contactInfo.location}</p>
            <p className="mt-1">Phone: {contactInfo.phone}</p>
            <p className="mt-1">
              Email:{' '}
              <a
                href={`mailto:${contactInfo.email}`}
                className="lowercase hover:text-primary"
              >
                {contactInfo.email}
              </a>
            </p>
          </div>
        </MotionItem>
        <MotionItem>
          <SocialLinks className="mt-8 lg:mt-10" />
        </MotionItem>
      </MotionReveal>
    </section>
  )
}
