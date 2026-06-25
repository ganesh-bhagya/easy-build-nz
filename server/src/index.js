import { config as loadEnv } from 'dotenv'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'

const serverRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
loadEnv({ path: join(serverRoot, '.env') })

const app = express()
const isProduction = process.env.NODE_ENV === 'production'
const port = Number(process.env.PORT) || 3001

const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean)

app.use(
  cors({
    origin(origin, callback) {
      // Server-to-server / health checks (no Origin header)
      if (!origin) {
        callback(null, true)
        return
      }

      if (allowedOrigins.includes(origin)) {
        callback(null, true)
        return
      }

      console.warn(`[cors] Blocked origin: ${origin}`)
      console.warn(`[cors] Allowed: ${allowedOrigins.join(', ')}`)
      callback(new Error('Not allowed by CORS'))
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  }),
)
app.use(express.json({ limit: '32kb' }))

app.use(
  '/api',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
  }),
)

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function getErrorMessage(error) {
  if (error instanceof Error) {
    return error.message
  }
  return typeof error === 'string' ? error : 'Unknown error'
}

async function verifyTurnstile(token, remoteip) {
  const secret = process.env.TURNSTILE_SECRET_KEY

  if (!secret) {
    if (process.env.NODE_ENV === 'production') {
      console.error('[contact] TURNSTILE_SECRET_KEY is required in production')
      return false
    }
    console.warn('[contact] Turnstile verification skipped (no secret key)')
    return true
  }

  if (!token) return false

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret,
      response: token,
      remoteip,
    }),
  })

  const result = await response.json()
  return result.success === true
}

function isSmtpConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
}

function getMailer() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env

  if (!isSmtpConfigured()) {
    return null
  }

  const port = Number(SMTP_PORT) || 587
  const secure = process.env.SMTP_SECURE === 'true'

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    ...(secure && port === 465
      ? { tls: { minVersion: 'TLSv1.2' } }
      : { requireTLS: process.env.SMTP_REQUIRE_TLS === 'true' }),
  })
}

async function verifySmtpOnStartup() {
  if (!isSmtpConfigured()) {
    if (isProduction) {
      console.error('[smtp] SMTP is not configured — contact emails will not be sent')
    } else {
      console.warn('[smtp] SMTP not configured — submissions will be logged only')
    }
    return
  }

  const transporter = getMailer()

  try {
    await transporter.verify()
    console.log(
      `[smtp] Ready (${process.env.SMTP_HOST}:${process.env.SMTP_PORT || 587}, user: ${process.env.SMTP_USER})`,
    )
  } catch (error) {
    console.error('[smtp] Connection failed — fix SMTP settings in server/.env:', error.message)
  }
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    smtpConfigured: isSmtpConfigured(),
    mailTo: process.env.MAIL_TO || 'contact@easybuildnz.co.nz',
  })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message, turnstileToken } = req.body ?? {}

  const turnstileOk = await verifyTurnstile(
    turnstileToken,
    req.ip || req.headers['x-forwarded-for']?.toString().split(',')[0]?.trim(),
  )

  if (!turnstileOk) {
    return res.status(400).json({ error: 'Security check failed. Please try again.' })
  }

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isValidEmail(email.trim()) ||
    !isNonEmptyString(phone) ||
    !isNonEmptyString(subject) ||
    !isNonEmptyString(message)
  ) {
    return res.status(400).json({ error: 'Please fill in all required fields correctly.' })
  }

  const payload = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    subject: subject.trim(),
    message: message.trim(),
  }

  const mailTo = process.env.MAIL_TO || 'contact@easybuildnz.co.nz'
  const mailFrom =
    process.env.MAIL_FROM || `"Easy Build NZ Website" <${process.env.SMTP_USER || 'noreply@easybuildnz.co.nz'}>`

  const transporter = getMailer()

  if (!transporter) {
    console.error('[contact] Submission received but SMTP is not configured:', payload)
    if (isProduction) {
      return res.status(503).json({
        error: 'Email is temporarily unavailable. Please call us or email contact@easybuildnz.co.nz directly.',
        email: {
          status: 'not_configured',
          delivered: false,
        },
      })
    }
    console.log('[contact] Dev mode — logged submission:', payload)
    return res.json({
      success: true,
      message: 'Message logged locally (SMTP not configured on this server).',
      email: {
        status: 'not_configured',
        delivered: false,
      },
    })
  }

  try {
    const info = await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: payload.email,
      subject: `Website enquiry: ${payload.subject}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        `Subject: ${payload.subject}`,
        '',
        'Message:',
        payload.message,
      ].join('\n'),
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(payload.message).replace(/\n/g, '<br>')}</p>
      `,
    })

    console.log(`[contact] Email sent to ${mailTo} (messageId: ${info.messageId})`)
    res.json({
      success: true,
      message: 'Thank you. We will get back to you soon.',
      email: {
        status: 'sent',
        delivered: true,
        to: mailTo,
        messageId: info.messageId,
      },
    })
  } catch (error) {
    const errorMessage = getErrorMessage(error)

    console.error('[contact] Failed to send email:', errorMessage)
    if (error.response) {
      console.error('[contact] SMTP response:', error.response)
    }
    res.status(500).json({
      error: 'Could not send your message. Please try again later.',
      email: {
        status: 'failed',
        delivered: false,
        reason: errorMessage,
      },
    })
  }
})

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`)
  void verifySmtpOnStartup()
})

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
