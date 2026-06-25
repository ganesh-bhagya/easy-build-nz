# Easy Build NZ — Contact API

Small Express server for the website contact form.

## Setup

```bash
cd server
npm install
cp .env.example .env
# Edit .env with your SMTP details
npm run dev
```

In another terminal, run the Vite app from the project root:

```bash
npm run dev
```

The frontend proxies `/api` to `http://localhost:3001` in development.

## CORS (fix “CORS error” in production)

`CLIENT_ORIGIN` must be your **website** origin (where users open the site in the browser), for example:

```
CLIENT_ORIGIN=https://easybuildnz.co.nz,https://www.easybuildnz.co.nz
```

Do **not** set this to the API host (`https://backend.easybuildnz.co.nz`) or an email address.

Set `VITE_API_URL=https://backend.easybuildnz.co.nz` in the frontend build `.env` instead.

## Endpoints

- `GET /api/health` — health check
- `POST /api/contact` — submit contact form

Body:

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+64 20 445 0738",
  "subject": "Deck quote",
  "message": "Hello..."
}
```

## SMTP

`.env` is loaded from the `server/` folder (not the process working directory), so SMTP settings apply even when the host starts Node from another path.

On startup you should see either:

- `[smtp] Ready (host:port, user: …)` — good
- `[smtp] Connection failed` or `SMTP is not configured` — fix `.env` and restart

**Passwords with `&`, `#`, or spaces** must be quoted in `.env`:

```
SMTP_PASS="your&password"
```

Check configuration without submitting the form:

```bash
curl https://backend.easybuildnz.co.nz/api/health
```

Expect `"smtpConfigured": true`.

In development, if SMTP is missing, the API logs the submission and returns success. In **production**, missing SMTP returns an error instead of a fake success.

If the API says “Thank you” but no email arrives:

1. Check spam/junk for `contact@easybuildnz.co.nz`
2. Read server logs for `[contact] Email sent to … (messageId: …)`
3. Confirm production `server/.env` has the same SMTP values as local (and quoted password)
4. Restart the Node process after any `.env` change

## Turnstile (CAPTCHA)

1. Create a widget at [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile)
2. Add your domain(s) to the widget
3. Set keys in `server/.env` (`TURNSTILE_SECRET_KEY`) and project root `.env` (`VITE_TURNSTILE_SITE_KEY`)

**Local testing** (always passes):

```
VITE_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

In production, `TURNSTILE_SECRET_KEY` is required or submissions are rejected.
