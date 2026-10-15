<template>
  <div class="card form-card">
    <template v-if="!submitted">
      <h3>{{ mode === 'account' ? 'Request account deletion' : 'Request data deletion' }}</h3>
      <p class="intro">
        Use the details registered on your SwychPe account so we can verify you. We will never ask for your MPIN or
        one-time codes.
      </p>

      <form novalidate @submit.prevent="submit">
        <div class="fields">
          <div class="field">
            <label for="dr-name">Full name</label>
            <input id="dr-name" v-model.trim="form.name" class="input" :class="{ invalid: errors.name }" autocomplete="name" />
            <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
          </div>
          <div class="field">
            <label for="dr-phone">Registered mobile number</label>
            <input
              id="dr-phone"
              v-model.trim="form.phone"
              class="input"
              :class="{ invalid: errors.phone }"
              type="tel"
              inputmode="tel"
              autocomplete="tel"
              placeholder="+237 6XX XXX XXX"
            />
            <span v-if="errors.phone" class="error-text">{{ errors.phone }}</span>
          </div>
          <div class="field">
            <label for="dr-email">Email address</label>
            <input
              id="dr-email"
              v-model.trim="form.email"
              class="input"
              :class="{ invalid: errors.email }"
              type="email"
              autocomplete="email"
            />
            <span class="hint">We'll send confirmation and progress updates here.</span>
            <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
          </div>
          <div class="field">
            <label for="dr-cid">Customer ID <span class="opt">(optional)</span></label>
            <input id="dr-cid" v-model.trim="form.customerId" class="input" placeholder="Shown in the app menu" />
          </div>
        </div>

        <fieldset v-if="mode === 'data'" class="field data-types">
          <legend>Data you want deleted</legend>
          <label v-for="d in dataOptions" :key="d" class="check">
            <input v-model="form.dataTypes" type="checkbox" :value="d" />
            <span>{{ d }}</span>
          </label>
          <span v-if="errors.dataTypes" class="error-text">{{ errors.dataTypes }}</span>
        </fieldset>

        <div v-if="mode === 'account'" class="field">
          <label for="dr-payout">Where should we send any remaining balance?</label>
          <input
            id="dr-payout"
            v-model.trim="form.payout"
            class="input"
            placeholder="e.g. MTN MoMo 6XX XXX XXX in my name"
          />
          <span class="hint">Must be a wallet or bank account in your own name.</span>
        </div>

        <div class="field">
          <label for="dr-reason">Reason <span class="opt">(optional)</span></label>
          <textarea id="dr-reason" v-model.trim="form.reason" class="input" rows="3" />
        </div>

        <label class="check confirm">
          <input v-model="form.confirm" type="checkbox" />
          <span v-if="mode === 'account'">
            I understand my SwychPe account will be permanently closed, I will lose access to the app, and records
            required by law will be retained as described on this page.
          </span>
          <span v-else>
            I understand that deleting some data may limit features, and records required by law cannot be deleted.
          </span>
        </label>
        <span v-if="errors.confirm" class="error-text">{{ errors.confirm }}</span>

        <button type="submit" class="btn" :class="mode === 'account' ? 'btn-danger' : 'btn-primary'">
          <AppIcon name="mail" :size="18" /> Submit request
        </button>
        <p class="fine">
          Submitting opens your email app with a pre-filled request to {{ company.email }}. Send that email to complete
          your request.
        </p>
      </form>
    </template>

    <div v-else class="done" role="status">
      <span class="icon-tile done-icon"><AppIcon name="check-circle" :size="26" /></span>
      <h3>Almost done — send the email</h3>
      <p>
        Your email app should have opened with your request. Press <strong>Send</strong> to submit it. Your reference
        is:
      </p>
      <div class="ref">{{ reference }}</div>
      <p>If your email app didn't open, copy the request below and email it to
        <a :href="mailtoHref">{{ company.email }}</a>.</p>
      <pre class="body-preview">{{ emailBody }}</pre>
      <div class="btn-row">
        <button type="button" class="btn btn-outline" @click="copy">
          <AppIcon name="copy" :size="16" /> {{ copied ? 'Copied' : 'Copy request' }}
        </button>
        <a :href="mailtoHref" class="btn btn-primary"><AppIcon name="mail" :size="16" /> Open email again</a>
      </div>
      <ul class="check-list next">
        <li><AppIcon name="clock" :size="18" />We acknowledge requests within 2 business days.</li>
        <li><AppIcon name="shield-check" :size="18" />We'll verify your identity before acting on the request.</li>
        <li><AppIcon name="check" :size="18" />Deletion is completed within 30 days of verification.</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import AppIcon from './AppIcon.vue'
import { company } from '../data/site'

const props = defineProps({
  mode: { type: String, default: 'account' }, // 'account' | 'data'
  dataOptions: { type: Array, default: () => [] },
})

const form = reactive({
  name: '',
  phone: '',
  email: '',
  customerId: '',
  payout: '',
  reason: '',
  dataTypes: [],
  confirm: false,
})
const errors = reactive({})
const submitted = ref(false)
const reference = ref('')
const copied = ref(false)

const makeReference = () => {
  const d = new Date()
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `${props.mode === 'account' ? 'DEL' : 'DAT'}-${ymd}-${rand}`
}

const subject = computed(
  () => `${props.mode === 'account' ? 'Account deletion request' : 'Data deletion request'} — ${reference.value}`,
)

const emailBody = computed(() => {
  const lines = [
    `Request type: ${props.mode === 'account' ? 'Delete my SwychPe account and associated data' : 'Delete specific data (keep my account)'}`,
    `Reference: ${reference.value}`,
    '',
    `Full name: ${form.name}`,
    `Registered mobile number: ${form.phone}`,
    `Email: ${form.email}`,
    `Customer ID: ${form.customerId || '—'}`,
  ]
  if (props.mode === 'account') lines.push(`Remaining balance payout: ${form.payout || '—'}`)
  if (props.mode === 'data') lines.push(`Data to delete: ${form.dataTypes.join('; ')}`)
  lines.push(`Reason: ${form.reason || '—'}`, '', 'I confirm I am the owner of this SwychPe account and I understand the retention terms published at swychpe.com.')
  return lines.join('\n')
})

const mailtoHref = computed(
  () => `mailto:${company.email}?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(emailBody.value)}`,
)

const validate = () => {
  for (const k of Object.keys(errors)) delete errors[k]
  if (form.name.length < 3) errors.name = 'Enter your full name as registered.'
  if (form.phone.replace(/\D/g, '').length < 9) errors.phone = 'Enter the mobile number registered on SwychPe.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email address.'
  if (props.mode === 'data' && !form.dataTypes.length) errors.dataTypes = 'Choose at least one type of data.'
  if (!form.confirm) errors.confirm = 'Please confirm you understand before submitting.'
  return Object.keys(errors).length === 0
}

const submit = () => {
  if (!validate()) return
  reference.value = makeReference()
  submitted.value = true
  window.location.href = mailtoHref.value
}

const copy = async () => {
  try {
    await navigator.clipboard.writeText(`To: ${company.email}\nSubject: ${subject.value}\n\n${emailBody.value}`)
    copied.value = true
  } catch {
    copied.value = false
  }
}
</script>

<style scoped>
.form-card {
  padding: 32px;
  box-shadow: var(--shadow);
}
.intro {
  margin-bottom: 24px !important;
}
form {
  display: grid;
  gap: 18px;
}
.fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.opt {
  font-weight: 400;
  color: var(--muted);
}
.data-types {
  border: 0;
  padding: 0;
  margin: 0;
}
.data-types legend {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--ink-2);
  margin-bottom: 8px;
}
.check {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 0.92rem;
  color: var(--ink-2);
  cursor: pointer;
  padding: 4px 0;
}
.check input {
  margin-top: 4px;
  width: 16px;
  height: 16px;
  accent-color: var(--brand);
  flex-shrink: 0;
}
.confirm {
  padding: 14px 16px;
  border-radius: var(--radius-sm);
  background: var(--surface-2);
  border: 1px solid var(--line);
}
form .btn {
  justify-self: start;
}
.fine {
  font-size: 0.8rem !important;
}
.done {
  text-align: left;
}
.done-icon {
  background: var(--success-soft);
  color: var(--success);
  width: 56px;
  height: 56px;
}
.done p {
  margin-bottom: 14px !important;
}
.ref {
  display: inline-block;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 10px 16px;
  border-radius: var(--radius-sm);
  background: var(--brand-50);
  color: var(--brand-deep);
  margin-bottom: 18px;
}
.body-preview {
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 0.8rem;
  line-height: 1.55;
  background: var(--surface-2);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 14px;
  max-height: 220px;
  overflow: auto;
  margin: 0 0 16px;
}
.next {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--line);
  font-size: 0.9rem;
}
@media (max-width: 600px) {
  .form-card {
    padding: 22px 18px;
  }
  .fields {
    grid-template-columns: 1fr;
  }
  form .btn {
    justify-self: stretch;
  }
}
</style>
