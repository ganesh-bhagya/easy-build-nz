import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

const SCRIPT_ID = 'cf-turnstile-script'
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js'

export type TurnstileHandle = {
  reset: () => void
}

type TurnstileWidgetProps = {
  onVerify: (token: string) => void
  onExpire: () => void
}

export const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? ''
export const isTurnstileEnabled = turnstileSiteKey.length > 0

function loadTurnstileScript() {
  return new Promise<void>((resolve, reject) => {
    if (window.turnstile) {
      resolve()
      return
    }

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null

    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', () => reject(new Error('Turnstile failed to load')), {
        once: true,
      })
      return
    }

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Turnstile failed to load'))
    document.head.appendChild(script)
  })
}

export const TurnstileWidget = forwardRef<TurnstileHandle, TurnstileWidgetProps>(
  function TurnstileWidget({ onVerify, onExpire }, ref) {
    const containerRef = useRef<HTMLDivElement>(null)
    const widgetIdRef = useRef<string | null>(null)
    const onVerifyRef = useRef(onVerify)
    const onExpireRef = useRef(onExpire)

    onVerifyRef.current = onVerify
    onExpireRef.current = onExpire

    useImperativeHandle(ref, () => ({
      reset() {
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current)
        }
        onExpireRef.current()
      },
    }))

    useEffect(() => {
      if (!isTurnstileEnabled || !containerRef.current) return

      let cancelled = false

      loadTurnstileScript()
        .then(() => {
          if (cancelled || !containerRef.current || !window.turnstile) return

          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: turnstileSiteKey,
            theme: 'light',
            callback: (token) => onVerifyRef.current(token),
            'expired-callback': () => onExpireRef.current(),
            'error-callback': () => onExpireRef.current(),
          })
        })
        .catch(() => {
          onExpireRef.current()
        })

      return () => {
        cancelled = true
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current)
          widgetIdRef.current = null
        }
      }
    }, [])

    if (!isTurnstileEnabled) return null

    return <div ref={containerRef} className="flex min-h-[65px] justify-center" />
  },
)
