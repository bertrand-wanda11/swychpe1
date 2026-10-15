<template>
  <section class="ea">
    <!-- animated backdrop -->
    <div class="backdrop" aria-hidden="true">
      <span class="blob b1" />
      <span class="blob b2" />
      <span class="blob b3" />
      <span class="grid-lines" />
      <span v-for="n in 14" :key="n" class="spark" :style="sparkStyle(n)" />
    </div>

    <div class="container ea-grid">
      <!-- pitch -->
      <div class="pitch">
        <span class="chip reveal" style="--d: 0">
          <span class="pulse" /> Early access · Cameroon only
        </span>

        <h1 class="h-display headline" aria-label="Be among the first to bank with SwychPe">
          <span v-for="(w, i) in headlineWords" :key="i" class="word" :style="{ '--d': 0.08 * i + 0.1 }">{{ w }}&nbsp;</span>
        </h1>

        <p class="lead reveal" style="--d: 0.8">
          Claim your early invite to SwychPe, the digital bank of Swychr Cooperative. Verify your number and email,
          and your <strong>Basic Account</strong> is opened instantly, free of charge.
        </p>

        <div class="rotator reveal" style="--d: 0.95" aria-hidden="true">
          <span>Built to</span>
          <span class="rot-window">
            <span class="rot-track" :style="{ transform: `translateY(-${rotIndex * 100}%)` }">
              <b v-for="r in rotWords" :key="r">{{ r }}</b>
            </span>
          </span>
        </div>

        <ul class="perks">
          <li v-for="(p, i) in perks" :key="p.title" class="reveal" :style="{ '--d': 1.05 + i * 0.1 }">
            <span class="perk-icon"><AppIcon :name="p.icon" :size="18" /></span>
            <div>
              <strong>{{ p.title }}</strong>
              <span>{{ p.text }}</span>
            </div>
          </li>
        </ul>

        <div class="stores reveal" style="--d: 1.5">
          <div class="store-status">
            <AppIcon name="download" :size="18" />
            <div><strong>Google Play</strong><span>Awaiting approval</span></div>
            <span class="dot" />
          </div>
          <div class="store-status">
            <AppIcon name="smartphone" :size="18" />
            <div><strong>App Store</strong><span>Awaiting approval</span></div>
            <span class="dot" />
          </div>
        </div>
      </div>

      <!-- wizard -->
      <div class="panel-wrap reveal" style="--d: 0.3">
        <div class="panel" :class="{ done: step === 4 }">
          <ConfettiBurst v-if="step === 4" :key="confettiKey" />

          <div v-if="step < 4" class="progress" aria-hidden="true">
            <div v-for="(s, i) in stepLabels" :key="s" class="prog-step" :class="{ on: step >= i, current: step === i }">
              <span class="prog-dot">
                <AppIcon v-if="step > i" name="check" :size="14" :stroke="3" />
                <template v-else>{{ i + 1 }}</template>
              </span>
              <small>{{ s }}</small>
            </div>
            <span class="prog-bar"><span :style="{ width: `${(step / 3) * 100}%` }" /></span>
          </div>

          <transition :name="direction" mode="out-in">
            <!-- 0: details -->
            <form v-if="step === 0" key="details" class="step" novalidate @submit.prevent="sendPhoneOtp">
              <h2>Request your invite</h2>
              <p class="sub">Takes about a minute. We'll text a code to your Cameroonian mobile number.</p>

              <div class="field">
                <label for="ea-name">Full name</label>
                <input
                  id="ea-name"
                  v-model.trim="form.name"
                  class="input"
                  :class="{ invalid: errors.name }"
                  autocomplete="name"
                  placeholder="As on your ID card"
                />
                <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
              </div>

              <div class="field">
                <label for="ea-phone">Mobile number</label>
                <div class="phone" :class="{ invalid: errors.phone }">
                  <span class="cc"><span class="flag" aria-hidden="true" /> +237</span>
                  <input
                    id="ea-phone"
                    v-model="form.phone"
                    type="tel"
                    inputmode="numeric"
                    autocomplete="tel-national"
                    placeholder="6XX XXX XXX"
                    maxlength="13"
                    @input="formatPhone"
                  />
                </div>
                <span v-if="errors.phone" class="error-text">{{ errors.phone }}</span>
                <span v-else class="hint">Cameroon mobile numbers only (MTN, Orange, Camtel, Nexttel).</span>
              </div>

              <div class="field">
                <label for="ea-email">Email address</label>
                <input
                  id="ea-email"
                  v-model.trim="form.email"
                  class="input"
                  :class="{ invalid: errors.email }"
                  type="email"
                  autocomplete="email"
                  placeholder="you@example.com"
                />
                <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
              </div>

              <label class="consent">
                <input v-model="form.terms" type="checkbox" />
                <span>
                  I agree to the <router-link to="/terms" target="_blank">Terms &amp; Conditions</router-link> and
                  <router-link to="/privacy" target="_blank">Privacy Policy</router-link>, and confirm I am 18 or older.
                </span>
              </label>
              <span v-if="errors.terms" class="error-text">{{ errors.terms }}</span>

              <p v-if="apiError" class="api-error" role="alert"><AppIcon name="alert" :size="16" /> {{ apiError }}</p>

              <button type="submit" class="btn btn-primary go" :disabled="busy">
                <span v-if="busy" class="spinner" /> {{ busy ? 'Sending code…' : 'Send verification code' }}
                <AppIcon v-if="!busy" name="arrow-right" :size="18" />
              </button>
            </form>

            <!-- 1: phone OTP -->
            <div v-else-if="step === 1" key="phone" class="step">
              <span class="step-icon"><AppIcon name="smartphone" :size="26" /></span>
              <h2>Verify your mobile</h2>
              <p class="sub">
                Enter the 6-digit code sent by SMS to <strong>{{ prettyPhone }}</strong>.
                <button type="button" class="link" @click="goTo(0)">Change</button>
              </p>
              <OtpInput v-model="phoneCode" :error="!!apiError" :disabled="busy" @complete="verifyPhone" />
              <p v-if="devCode" class="dev">Dev mode code: {{ devCode }}</p>
              <p v-if="apiError" class="api-error" role="alert"><AppIcon name="alert" :size="16" /> {{ apiError }}</p>
              <button type="button" class="btn btn-primary go" :disabled="busy || phoneCode.length < 6" @click="verifyPhone">
                <span v-if="busy" class="spinner" /> {{ busy ? busyLabel : 'Verify & create account' }}
              </button>
              <ResendTimer :seconds="resendIn" :busy="busy" @resend="resendPhone" />
            </div>

            <!-- 2: already a member -->
            <div v-else-if="step === 2" key="exists" class="step center">
              <span class="step-icon gold"><AppIcon name="user" :size="26" /></span>
              <h2>You're already a member</h2>
              <p class="sub">
                {{ prettyPhone }} already has a SwychPe account. Install the app and sign in with this number.
              </p>
              <a :href="company.apkDownload" class="btn btn-primary go" rel="noopener">
                <AppIcon name="download" :size="18" /> Download the Android app
              </a>
            </div>

            <!-- 3: email OTP -->
            <div v-else-if="step === 3" key="email" class="step">
              <span class="step-icon"><AppIcon name="mail" :size="26" /></span>
              <h2>Verify your email</h2>
              <p class="sub">
                Your account is open. Last step: enter the code we emailed to <strong>{{ form.email }}</strong>.
                <button type="button" class="link" @click="editingEmail = !editingEmail">
                  {{ editingEmail ? 'Cancel' : 'Wrong email?' }}
                </button>
              </p>
              <transition name="fade">
                <form v-if="editingEmail" class="email-edit" novalidate @submit.prevent="changeEmail">
                  <input v-model.trim="newEmail" class="input" type="email" placeholder="you@example.com" />
                  <button class="btn btn-outline" :disabled="busy">Send code</button>
                </form>
              </transition>
              <OtpInput v-model="emailCode" :error="!!apiError" :disabled="busy" @complete="verifyEmail" />
              <p v-if="devCode" class="dev">Dev mode code: {{ devCode }}</p>
              <p v-if="apiError" class="api-error" role="alert"><AppIcon name="alert" :size="16" /> {{ apiError }}</p>
              <button type="button" class="btn btn-primary go" :disabled="busy || emailCode.length < 6" @click="verifyEmail">
                <span v-if="busy" class="spinner" /> {{ busy ? 'Verifying…' : 'Verify email' }}
              </button>
              <ResendTimer :seconds="resendIn" :busy="busy" label="Resend email" @resend="resendEmail" />
              <p class="fine">Can't find it? Check your spam or promotions folder.</p>
            </div>

            <!-- 4: success -->
            <div v-else key="done" class="step center success">
              <svg class="tick" viewBox="0 0 80 80" aria-hidden="true">
                <circle cx="40" cy="40" r="36" />
                <path d="M24 41l11 11 21-23" />
              </svg>
              <h2>Welcome to SwychPe, {{ firstName }}!</h2>
              <p class="sub">Your Basic Account is open and a welcome email is on its way to {{ form.email }}.</p>

              <div class="acct-card">
                <div>
                  <small>Account number</small>
                  <strong class="mono">{{ shownAccount }}</strong>
                </div>
                <div class="right">
                  <small>Account type</small>
                  <strong>Basic</strong>
                </div>
              </div>

              <a :href="company.apkDownload" class="btn btn-primary go big" rel="noopener">
                <AppIcon name="download" :size="20" /> Download SwychPe for Android
              </a>
              <a :href="company.apkDrive" target="_blank" rel="noopener" class="alt-link">Open download page in Google Drive</a>

              <div class="notice notice-warn approval">
                <AppIcon name="clock" :size="18" />
                <p>
                  SwychPe is awaiting approval on <strong>Google Play</strong> and the <strong>App Store</strong>. Until
                  then, install the Android app directly. iPhone users will get an email when the App Store version is
                  live.
                </p>
              </div>
            </div>
          </transition>
        </div>
        <p class="secure"><AppIcon name="lock" :size="14" /> Secured by Swychr Cooperative · COBAC regulated</p>
      </div>
    </div>
  </section>

  <!-- APK install guide -->
  <section id="install" class="section">
    <div class="container">
      <div class="section-head center">
        <p class="eyebrow">Install the APK</p>
        <h2 class="h-section">Installing SwychPe before store approval</h2>
        <p class="lead">
          While Google Play and the App Store review SwychPe, Android users can install the official app file directly.
        </p>
      </div>
      <ol class="install">
        <li v-for="(s, i) in installSteps" :key="s.title" v-reveal :style="{ '--d': i * 0.08 }">
          <span class="n">{{ i + 1 }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </li>
      </ol>
      <div class="install-cta">
        <a :href="company.apkDownload" class="btn btn-primary" rel="noopener">
          <AppIcon name="download" :size="18" /> Download APK
        </a>
        <span class="notice inline">
          <AppIcon name="shield-check" :size="18" />
          Only install SwychPe from swychpe.com or the official stores. We will never send the app by WhatsApp.
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, defineComponent, h, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import AppIcon from '../components/AppIcon.vue'
import ConfettiBurst from '../components/ConfettiBurst.vue'
import OtpInput from '../components/OtpInput.vue'
import { api } from '../lib/api'
import { company } from '../data/site'

// Small inline countdown + resend link shared by both OTP steps.
const ResendTimer = defineComponent({
  props: { seconds: Number, busy: Boolean, label: { type: String, default: 'Resend code' } },
  emits: ['resend'],
  setup(props, { emit }) {
    return () =>
      h('p', { class: 'resend' }, [
        props.seconds > 0
          ? `Resend available in 0:${String(props.seconds).padStart(2, '0')}`
          : h('button', { type: 'button', class: 'link', disabled: props.busy, onClick: () => emit('resend') }, props.label),
      ])
  },
})

// Fade-up on scroll for the install guide.
const vReveal = {
  mounted(el) {
    el.classList.add('io')
    if (!('IntersectionObserver' in window)) return el.classList.add('in')
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    io.observe(el)
  },
}

const headlineWords = 'Be among the first to bank with SwychPe.'.split(' ')
const rotWords = ['open an account in minutes', 'send money free', 'save with your cooperative', 'go fully digital']
const perks = [
  { icon: 'zap', title: 'Instant Basic Account', text: 'No setup fee, no branch visit, no paperwork.' },
  { icon: 'send', title: '0 XAF member transfers', text: 'Send to any SwychPe member free of charge.' },
  { icon: 'award', title: 'Founding-member status', text: 'First access to new features as they launch.' },
]
const stepLabels = ['Details', 'Mobile', 'Email']
const installSteps = [
  { title: 'Download the APK', text: "Tap Download APK on your Android phone. Google Drive will say it can't scan the file for viruses because it's large — tap Download anyway." },
  { title: 'Allow the install', text: 'When prompted, allow your browser or Files app to "Install unknown apps" for this one install.' },
  { title: 'Install SwychPe', text: 'Open the downloaded file and tap Install. Play Protect may say the app is new; choose to install anyway.' },
  { title: 'Sign in', text: 'Open SwychPe and sign in with the mobile number you verified here. Then set your MPIN.' },
]

const step = ref(0)
const direction = ref('slide-next')
const busy = ref(false)
const busyLabel = ref('')
const apiError = ref('')
const devCode = ref('')
const resendIn = ref(0)
const phoneCode = ref('')
const emailCode = ref('')
const editingEmail = ref(false)
const newEmail = ref('')
const confettiKey = ref(0)
const rotIndex = ref(0)
const shownAccount = ref('')
const form = reactive({ name: '', phone: '', email: '', terms: false })
const errors = reactive({})
let accessToken = ''
let timers = []
let resendTimer = 0

const digits = computed(() => form.phone.replace(/\D/g, ''))
const e164 = computed(() => `+237${digits.value}`)
const prettyPhone = computed(() => `+237 ${digits.value.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')}`)
const firstName = computed(() => form.name.split(/\s+/)[0] || 'there')

const sparkStyle = (n) => ({
  left: `${(n * 37) % 100}%`,
  top: `${(n * 53) % 100}%`,
  animationDelay: `${(n % 7) * 0.6}s`,
  animationDuration: `${5 + (n % 5)}s`,
})

const goTo = (n) => {
  direction.value = n > step.value ? 'slide-next' : 'slide-prev'
  apiError.value = ''
  devCode.value = ''
  step.value = n
}

const startResendTimer = () => {
  clearInterval(resendTimer)
  resendIn.value = 45
  resendTimer = setInterval(() => {
    resendIn.value -= 1
    if (resendIn.value <= 0) clearInterval(resendTimer)
  }, 1000)
}

const run = async (label, fn) => {
  busy.value = true
  busyLabel.value = label
  apiError.value = ''
  try {
    await fn()
  } catch (err) {
    apiError.value = err.message
  } finally {
    busy.value = false
  }
}

const showDevCode = (res) => {
  devCode.value = import.meta.env.DEV && res?.otp_code ? res.otp_code : ''
}

const formatPhone = () => {
  let d = form.phone.replace(/\D/g, '')
  if (d.startsWith('237') && d.length > 9) d = d.slice(3)
  d = d.slice(0, 9)
  form.phone = d.replace(/(\d{3})(?=\d)/g, '$1 ').trim()
}

const validate = () => {
  for (const k of Object.keys(errors)) delete errors[k]
  if (form.name.length < 3 || !/\s/.test(form.name)) errors.name = 'Enter your first and last name.'
  if (!/^6\d{8}$/.test(digits.value)) errors.phone = 'Enter a 9-digit Cameroon mobile number starting with 6.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) errors.email = 'Enter a valid email address.'
  if (!form.terms) errors.terms = 'Please accept the terms to continue.'
  return !Object.keys(errors).length
}

const sendPhoneOtp = () => {
  if (!validate()) return
  run('Sending code…', async () => {
    const res = await api('/auth/otp/request', { body: { phone: e164.value } })
    phoneCode.value = ''
    goTo(1)
    showDevCode(res)
    startResendTimer()
  })
}

const resendPhone = () =>
  run('Sending code…', async () => {
    const res = await api('/auth/otp/request', { body: { phone: e164.value } })
    showDevCode(res)
    startResendTimer()
  })

const verifyPhone = () => {
  if (busy.value || phoneCode.value.length < 6) return
  run('Creating your account…', async () => {
    try {
      const res = await api('/auth/otp/verify', { body: { phone: e164.value, code: phoneCode.value } })
      if (res.status === 'login') return goTo(2)
      busyLabel.value = 'Opening your Basic Account…'
      const tokens = await api('/auth/signup/complete', {
        body: { signup_token: res.signup_token, full_name: form.name, email: form.email, terms_accepted: true },
      })
      accessToken = tokens.access_token
    } catch (err) {
      phoneCode.value = ''
      throw err
    }
    // The account exists from here on, so move to the email step even if the
    // email code fails to send — the error and a resend link show there.
    emailCode.value = ''
    goTo(3)
    await sendEmailOtp(form.email)
  })
}

const sendEmailOtp = async (address) => {
  const res = await api('/customers/me/email', { method: 'PUT', body: { email: address }, token: accessToken })
  showDevCode(res)
  startResendTimer()
}

const resendEmail = () => run('Sending…', () => sendEmailOtp(form.email))

const changeEmail = () => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(newEmail.value)) {
    apiError.value = 'Enter a valid email address.'
    return
  }
  run('Sending…', async () => {
    await sendEmailOtp(newEmail.value)
    form.email = newEmail.value
    editingEmail.value = false
    emailCode.value = ''
  })
}

const verifyEmail = () => {
  if (busy.value || emailCode.value.length < 6) return
  run('Verifying…', async () => {
    try {
      await api('/customers/me/email/verify', { body: { code: emailCode.value }, token: accessToken })
    } catch (err) {
      emailCode.value = ''
      throw err
    }
    accessToken = ''
    goTo(4)
    confettiKey.value += 1
    revealAccount()
  })
}

// Account number = the 9-digit mobile number (SwychPeApi app/core/onboarding.py); reveal it digit by digit.
const revealAccount = () => {
  const target = digits.value
  let i = 0
  shownAccount.value = '•'.repeat(target.length)
  const t = setInterval(() => {
    i += 1
    shownAccount.value = target.slice(0, i) + '•'.repeat(target.length - i)
    if (i >= target.length) clearInterval(t)
  }, 70)
  timers.push(t)
}

onMounted(() => {
  timers.push(setInterval(() => (rotIndex.value = (rotIndex.value + 1) % rotWords.length), 2400))
})
onBeforeUnmount(() => {
  timers.forEach(clearInterval)
  clearInterval(resendTimer)
})
</script>

<style scoped>
.ea {
  position: relative;
  overflow: hidden;
  padding: 72px 0 96px;
  color: #fff;
  background: linear-gradient(160deg, #12051f 0%, var(--brand-ink) 40%, var(--brand-deep) 100%);
  isolation: isolate;
}

/* backdrop */
.backdrop {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.55;
  animation: drift 18s ease-in-out infinite alternate;
}
.b1 {
  width: 520px;
  height: 520px;
  background: #9c27b0;
  top: -160px;
  right: -120px;
}
.b2 {
  width: 420px;
  height: 420px;
  background: var(--gold);
  opacity: 0.18;
  bottom: -180px;
  left: 10%;
  animation-duration: 22s;
}
.b3 {
  width: 360px;
  height: 360px;
  background: #5e35b1;
  top: 30%;
  left: -140px;
  animation-duration: 26s;
}
.grid-lines {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse at 50% 40%, #000 30%, transparent 75%);
}
.spark {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 10px 2px rgba(246, 168, 0, 0.6);
  opacity: 0;
  animation: twinkle ease-in-out infinite;
}
@keyframes drift {
  to {
    transform: translate(60px, 40px) scale(1.12);
  }
}
@keyframes twinkle {
  0%, 100% { opacity: 0; transform: translateY(0); }
  50% { opacity: 0.9; transform: translateY(-24px); }
}

.ea-grid {
  display: grid;
  grid-template-columns: 1fr minmax(0, 480px);
  gap: 64px;
  align-items: center;
}

/* entrance animations */
.reveal,
.word {
  opacity: 0;
  animation: rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
  animation-delay: calc(var(--d, 0) * 1s);
}
.word {
  display: inline-block;
}
@keyframes rise {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: none; }
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}
.pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 0 0 rgba(246, 168, 0, 0.7);
  animation: pulse 1.8s infinite;
}
@keyframes pulse {
  70% { box-shadow: 0 0 0 10px rgba(246, 168, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(246, 168, 0, 0); }
}
.headline {
  color: #fff;
  margin: 22px 0 18px;
  font-size: clamp(2.3rem, 5vw, 3.6rem);
}
.pitch .lead {
  color: rgba(255, 255, 255, 0.78);
  max-width: 560px;
}
.pitch .lead strong {
  color: #fff;
}
.rotator {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  margin: 8px 0 28px;
}
.rot-window {
  height: 1.6em;
  overflow: hidden;
  display: inline-block;
}
.rot-track {
  display: flex;
  flex-direction: column;
  transition: transform 0.6s cubic-bezier(0.7, 0, 0.2, 1);
}
.rot-track b {
  height: 1.6em;
  line-height: 1.6em;
  color: var(--gold);
  white-space: nowrap;
}
.perks {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: grid;
  gap: 14px;
}
.perks li {
  display: flex;
  gap: 14px;
  align-items: center;
}
.perk-icon {
  width: 38px;
  height: 38px;
  border-radius: 11px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.1);
  color: var(--gold);
}
.perks strong {
  display: block;
  font-size: 0.98rem;
}
.perks span {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.65);
}
.stores {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.store-status {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 18px 12px 14px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.14);
}
.store-status strong {
  display: block;
  font-size: 0.9rem;
}
.store-status span {
  font-size: 0.76rem;
  color: var(--gold);
}
.store-status .dot {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gold);
  animation: pulse 1.8s infinite;
}

/* panel */
.panel-wrap {
  position: relative;
}
.panel {
  position: relative;
  overflow: hidden;
  background: var(--surface);
  color: var(--ink);
  border-radius: 28px;
  padding: 32px;
  box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1);
  min-height: 560px;
  transition: box-shadow 0.4s;
}
.panel.done {
  box-shadow: 0 40px 100px -20px rgba(246, 168, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1);
}
.progress {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
}
.prog-step {
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  gap: 6px;
  color: var(--muted);
}
.prog-step small {
  font-size: 0.74rem;
  font-weight: 600;
}
.prog-dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 0.8rem;
  font-weight: 800;
  background: var(--surface);
  border: 2px solid var(--line-strong);
  transition: all 0.3s;
}
.prog-step.on .prog-dot {
  background: var(--brand);
  border-color: var(--brand);
  color: #fff;
}
.prog-step.current .prog-dot {
  box-shadow: 0 0 0 5px var(--brand-100);
}
.prog-step.on small {
  color: var(--brand);
}
.prog-bar {
  position: absolute;
  top: 14px;
  left: 15px;
  right: 15px;
  height: 2px;
  background: var(--line);
}
.prog-bar span {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--brand), var(--gold));
  transition: width 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.step {
  display: grid;
  gap: 16px;
}
.step.center {
  text-align: center;
  justify-items: center;
}
.step h2 {
  font-size: 1.6rem;
  margin: 0;
}
.sub {
  margin: -8px 0 4px !important;
  color: var(--muted);
  font-size: 0.94rem;
}
.step-icon {
  width: 54px;
  height: 54px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: var(--brand-50);
  color: var(--brand);
  animation: bob 3s ease-in-out infinite;
}
.step-icon.gold {
  background: var(--gold-soft);
  color: #a06c00;
}
@keyframes bob {
  50% { transform: translateY(-4px); }
}
.phone {
  display: flex;
  border: 1.5px solid var(--line-strong);
  border-radius: var(--radius-sm);
  overflow: hidden;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.phone:focus-within {
  border-color: var(--brand);
  box-shadow: 0 0 0 4px var(--brand-100);
}
.phone.invalid {
  border-color: var(--danger);
}
.cc {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  background: var(--surface-2);
  border-right: 1px solid var(--line);
  font-weight: 700;
  font-size: 0.95rem;
  white-space: nowrap;
}
/* Cameroon flag: green | red with gold star | yellow */
.flag {
  width: 22px;
  height: 15px;
  border-radius: 2px;
  background: linear-gradient(90deg, #007a5e 33.3%, #ce1126 33.3% 66.6%, #fcd116 66.6%);
  position: relative;
}
.flag::after {
  content: '★';
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 8px;
  color: #fcd116;
  line-height: 1;
}
.phone input {
  flex: 1;
  min-width: 0;
  border: 0;
  padding: 12px 14px;
  font: inherit;
  font-size: 1rem;
  letter-spacing: 0.04em;
  outline: none;
  background: transparent;
}
.consent {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 0.86rem;
  color: var(--ink-2);
  cursor: pointer;
}
.consent input {
  margin-top: 3px;
  width: 16px;
  height: 16px;
  accent-color: var(--brand);
  flex-shrink: 0;
}
.go {
  width: 100%;
  margin-top: 4px;
}
.go.big {
  padding: 16px 22px;
  font-size: 1rem;
}
.api-error {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0 !important;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  background: var(--danger-soft);
  color: var(--danger);
  font-size: 0.88rem;
  font-weight: 600;
}
.dev {
  margin: 0 !important;
  font-size: 0.82rem;
  color: var(--success);
  font-weight: 700;
}
.link {
  border: 0;
  background: none;
  padding: 0;
  font: inherit;
  font-weight: 700;
  color: var(--brand);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.link:disabled {
  opacity: 0.5;
}
:deep(.resend) {
  margin: 0;
  text-align: center;
  font-size: 0.88rem;
  color: var(--muted);
}
.fine {
  margin: 0 !important;
  text-align: center;
  font-size: 0.8rem;
  color: var(--muted);
}
.email-edit {
  display: flex;
  gap: 8px;
}
.spinner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: #fff;
  animation: spin 0.7s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* success */
.success {
  padding-top: 8px;
}
.tick {
  width: 84px;
  height: 84px;
}
.tick circle {
  fill: var(--success-soft);
  stroke: var(--success);
  stroke-width: 3;
  stroke-dasharray: 230;
  stroke-dashoffset: 230;
  animation: draw 0.7s ease-out forwards;
}
.tick path {
  fill: none;
  stroke: var(--success);
  stroke-width: 5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  animation: draw 0.45s 0.6s ease-out forwards;
}
@keyframes draw {
  to { stroke-dashoffset: 0; }
}
.acct-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 18px 20px;
  border-radius: 16px;
  color: #fff;
  text-align: left;
  background: radial-gradient(300px 120px at 100% 0, rgba(246, 168, 0, 0.35), transparent 70%),
    linear-gradient(135deg, var(--brand-deep), var(--brand));
  animation: rise 0.6s 0.5s both;
}
.acct-card small {
  display: block;
  font-size: 0.74rem;
  opacity: 0.75;
}
.acct-card strong {
  font-size: 1.2rem;
}
.acct-card .right {
  text-align: right;
}
.mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.12em;
}
.alt-link {
  font-size: 0.84rem;
  color: var(--muted);
}
.approval {
  text-align: left;
  font-size: 0.86rem;
}
.approval p {
  margin: 0;
}
.secure {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin: 16px 0 0;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

/* step transitions */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s, transform 0.28s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.slide-next-enter-from,
.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
.slide-next-leave-to,
.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* install guide */
.install {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.install li {
  padding: 26px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--surface);
}
.install li.io {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s, transform 0.6s;
  transition-delay: calc(var(--d, 0) * 1s);
}
.install li.in {
  opacity: 1;
  transform: none;
}
.install .n {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-bottom: 14px;
  background: var(--brand);
  color: #fff;
  font-weight: 800;
}
.install h3 {
  font-size: 1.08rem;
}
.install p {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
}
.install-cta {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 32px;
  flex-wrap: wrap;
}
.notice.inline {
  flex: 1;
  min-width: 260px;
  align-items: center;
}
.notice.inline svg {
  color: var(--success);
}

@media (max-width: 1000px) {
  .ea-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .panel-wrap {
    max-width: 520px;
    width: 100%;
    margin: 0 auto;
  }
  .install {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .ea {
    padding: 48px 0 64px;
  }
  .panel {
    padding: 24px 18px;
    border-radius: 22px;
    min-height: 0;
  }
  .rotator {
    font-size: 1.05rem;
    flex-wrap: wrap;
  }
  .install {
    grid-template-columns: 1fr;
  }
  .email-edit {
    flex-direction: column;
  }
}
@media (prefers-reduced-motion: reduce) {
  .reveal,
  .word,
  .install li.io {
    opacity: 1;
    transform: none;
  }
}
</style>
