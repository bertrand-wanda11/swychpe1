// Minimal client for the SwychPe API (SwychPeApi). Production calls the same host the
// mobile app uses (SwychPeApp lib/core/network/api_config.dart), which must list the
// site's origin in ALLOWED_ORIGINS. `npm run dev` goes through the Vite proxy
// (vite.config.js) instead. Override either with VITE_API_BASE_URL.
const DEFAULT_BASE = import.meta.env.DEV ? '/api/v1' : 'https://swychpe-backend-7xs5xzofea-as.a.run.app/api/v1'
const BASE = (import.meta.env.VITE_API_BASE_URL || DEFAULT_BASE).replace(/\/$/, '')

export class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.status = status
  }
}

function messageFrom(body, status) {
  const detail = body && body.detail
  if (typeof detail === 'string') return detail
  if (Array.isArray(detail) && detail.length) return detail[0].msg || 'Please check your details.'
  if (status === 429) return 'Too many attempts. Please wait a minute and try again.'
  if (status >= 500) return 'Our service is temporarily unavailable. Please try again shortly.'
  return 'Something went wrong. Please try again.'
}

export async function api(path, { method = 'POST', body, token } = {}) {
  const init = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  }
  if (body) init.body = JSON.stringify(body)
  let res
  try {
    res = await fetch(`${BASE}${path}`, init)
  } catch {
    throw new ApiError('Network error. Check your connection and try again.', 0)
  }
  const data = res.status === 204 ? null : await res.json().catch(() => null)
  if (!res.ok) throw new ApiError(messageFrom(data, res.status), res.status)
  return data
}
