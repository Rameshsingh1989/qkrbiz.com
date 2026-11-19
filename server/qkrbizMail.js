/*
|--------------------------------------------------------------------------
| QkrBiz mail relay
|--------------------------------------------------------------------------
| The QkrBiz /api/Mail/SendEmail endpoint requires a Bearer token. We obtain
| that token from /api/Login/InternalToken using an API key that stays on the
| server (never shipped to the browser), cache it until it is about to expire,
| and forward the caller's email payload with the token attached.
|
| Env vars (server-only, NOT prefixed with VITE_ so they never reach the client):
|   QKRBIZ_API_BASE           e.g. https://intec.qkrbiz.com:444
|   QKRBIZ_INTERNAL_API_KEY   the internal API key
*/

// Read env vars at call time (not module load time): this module is imported
// before server.js runs process.loadEnvFile(), so top-level reads would be empty.
const apiBase = () =>
  process.env.QKRBIZ_API_BASE || 'https://intec.qkrbiz.com:444'
const apiKey = () => process.env.QKRBIZ_INTERNAL_API_KEY || ''

let cachedToken = null
let tokenExpiresAt = 0 // epoch ms

async function getInternalToken() {
  // Reuse the cached token until 60s before it expires.
  if (cachedToken && Date.now() < tokenExpiresAt - 60_000) {
    return cachedToken
  }

  if (!apiKey()) {
    throw new Error('QKRBIZ_INTERNAL_API_KEY is not configured')
  }

  const url = `${apiBase()}/api/Login/InternalToken?apiKey=${encodeURIComponent(
    apiKey()
  )}`

  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error(`InternalToken failed: ${res.status}`)
  }

  const { token } = await res.json()
  if (!token) throw new Error('InternalToken response had no token')

  // Derive expiry from the JWT `exp` claim; fall back to 10 minutes.
  let expMs = Date.now() + 10 * 60_000
  try {
    const payload = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString('utf-8')
    )
    if (payload?.exp) expMs = payload.exp * 1000
  } catch {
    // Keep the fallback expiry if the token can't be decoded.
  }

  cachedToken = token
  tokenExpiresAt = expMs
  return token
}

function postSendEmail(token, payload) {
  return fetch(`${apiBase()}/api/Mail/SendEmail`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  })
}

/**
 * Send an email through QkrBiz, obtaining/caching the Bearer token as needed.
 * @param {object} payload CEmail-shaped body (SendTo, MailSubj, Message, ...)
 * @returns {Promise<{ok: boolean, status: number, text: string}>}
 */
export async function sendMailViaQkrBiz(payload) {
  const token = await getInternalToken()

  let res = await postSendEmail(token, payload)

  // Token may have expired/been revoked — refresh once and retry.
  if (res.status === 401) {
    cachedToken = null
    const fresh = await getInternalToken()
    res = await postSendEmail(fresh, payload)
  }

  const text = await res.text()
  return { ok: res.ok, status: res.status, text }
}
