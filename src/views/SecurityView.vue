<template>
  <PageHero
    crumb="Security"
    eyebrow="Security & compliance"
    title="Your money and your identity, protected"
    lead="SwychPe combines regulated cooperative governance with layered technical controls — from liveness-checked onboarding to one-time codes on every withdrawal."
  />

  <section class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">In the app</p>
        <h2 class="h-section">Layers of protection</h2>
      </div>
      <div class="grid grid-3">
        <div v-for="c in controls" :key="c.title" class="card">
          <span class="icon-tile"><AppIcon :name="c.icon" /></span>
          <h3>{{ c.title }}</h3>
          <p>{{ c.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-tint">
    <div class="container two">
      <div>
        <p class="eyebrow">Governance</p>
        <h2 class="h-section">Regulated and accountable</h2>
        <ul class="check-list">
          <li v-for="g in governance" :key="g"><AppIcon name="check" :size="18" />{{ g }}</li>
        </ul>
      </div>
      <div class="card tips">
        <h3><AppIcon name="alert" :size="20" /> Stay safe</h3>
        <ul class="check-list">
          <li v-for="t in tips" :key="t"><AppIcon name="shield" :size="18" />{{ t }}</li>
        </ul>
        <p class="report">
          Suspect fraud? Email <a :href="`mailto:${company.email}?subject=Fraud%20report`">{{ company.email }}</a>
          immediately.
        </p>
      </div>
    </div>
  </section>

  <CtaBand />
</template>

<script setup>
import AppIcon from '../components/AppIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import { company } from '../data/site'

const controls = [
  { icon: 'id', title: 'Document verification', text: 'Your national ID or passport is captured and reviewed before your account is upgraded.' },
  { icon: 'camera', title: 'Liveness selfie', text: 'An on-device liveness check confirms a real person is present, defeating photo and screen replays.' },
  { icon: 'key', title: 'Hashed MPIN', text: 'Your 4-digit MPIN is never stored in readable form; repeated wrong attempts temporarily lock the account.' },
  { icon: 'fingerprint', title: 'Biometric unlock', text: 'Use your phone fingerprint or face unlock to open the app quickly and securely.' },
  { icon: 'smartphone', title: 'One-time codes', text: 'Registration and withdrawals are confirmed with a one-time code sent to your phone.' },
  { icon: 'activity', title: 'Login records', text: 'Every sign-in is recorded with its device and network details for investigation and audit.' },
  { icon: 'lock', title: 'Encrypted in transit', text: 'All traffic between the app and our servers uses TLS encryption.' },
  { icon: 'server', title: 'Double-entry ledger', text: 'Every movement of money is recorded as balanced ledger entries with a full audit trail.' },
  { icon: 'bell', title: 'Instant alerts', text: 'Push notifications for every credit and debit mean you spot unexpected activity at once.' },
]

const governance = [
  'Operated by Swychr Cooperative Society with Board of Directors (SWYCO COOP-BOD)',
  'Affiliated with the Cameroon Cooperative Credit Union League (CamCCUL)',
  'Subject to COBAC microfinance regulation and reporting',
  'KYC and AML/CFT controls in line with CEMAC regulations',
  'Member data handled as described in our Privacy Policy',
]

const tips = [
  'SwychPe staff will never ask for your MPIN or one-time codes.',
  'Only install SwychPe from Google Play or the official App Store.',
  'Check the recipient name on the confirmation screen before sending.',
  'Lock your phone with a PIN, pattern or biometrics.',
]
</script>

<style scoped>
.two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
}
.two .check-list {
  margin-top: 24px;
}
.tips h3 {
  display: flex;
  align-items: center;
  gap: 10px;
}
.tips h3 svg {
  color: #a06c00;
}
.tips .check-list li svg {
  color: var(--brand);
}
.report {
  margin: 20px 0 0 !important;
  padding-top: 16px;
  border-top: 1px solid var(--line);
}
@media (max-width: 900px) {
  .two {
    grid-template-columns: 1fr;
  }
}
</style>
