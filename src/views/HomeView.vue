<template>
  <!-- Hero -->
  <section class="hero bg-brand">
    <div class="container hero-grid">
      <div class="hero-copy">
        <span class="hero-chip"><AppIcon name="shield-check" :size="16" /> Licensed cooperative · CamCCUL affiliated</span>
        <h1 class="h-display">Your bank, fully digital. Built for Cameroon.</h1>
        <p class="lead">
          SwychPe is the banking app of Swychr Cooperative. Open an account from your phone, verify your identity in
          minutes, and deposit, transfer, withdraw and download statements without visiting a branch.
        </p>
        <div class="btn-row">
          <router-link to="/early-access" class="btn btn-gold">
            Claim your early invite <AppIcon name="arrow-right" :size="18" />
          </router-link>
          <a :href="company.apkDownload" rel="noopener" class="btn btn-ghost-light">
            <AppIcon name="download" :size="16" /> Download APK
          </a>
        </div>
        <p class="store-note">
          <AppIcon name="clock" :size="14" /> Google Play &amp; App Store listings awaiting approval — Android APK available now.
        </p>
        <ul class="hero-proof">
          <li><strong>0 XAF</strong><span>member transfers</span></li>
          <li><strong>5</strong><span>account tiers</span></li>
          <li><strong>100%</strong><span>in-app onboarding</span></li>
        </ul>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="phone">
          <div class="ph-head">
            <div class="ph-top">
              <img :src="appIcon" alt="" class="ph-logo" width="34" height="34" />
              <div>
                <small>Good morning</small>
                <strong>Amina M.</strong>
              </div>
              <span class="ph-bell"><AppIcon name="bell" :size="16" /></span>
            </div>
            <small class="ph-label">Full Account · Savings</small>
            <div class="ph-bal">XAF 284,500</div>
            <small class="ph-live">XAF · Live balance</small>
          </div>
          <div class="ph-actions">
            <span v-for="a in phoneActions" :key="a.label">
              <i><AppIcon :name="a.icon" :size="18" /></i>{{ a.label }}
            </span>
          </div>
          <div class="ph-list">
            <p class="ph-list-title">Recent activity</p>
            <div v-for="t in phoneTx" :key="t.name" class="ph-tx">
              <i :class="t.dir"><AppIcon :name="t.dir === 'in' ? 'arrow-down' : 'arrow-up'" :size="14" /></i>
              <div>
                <strong>{{ t.name }}</strong>
                <small>{{ t.meta }}</small>
              </div>
              <b :class="t.dir">{{ t.amount }}</b>
            </div>
          </div>
        </div>
        <div class="float f1">
          <span class="icon-tile gold"><AppIcon name="check-circle" :size="18" /></span>
          <div><strong>KYC verified</strong><small>Liveness check passed</small></div>
        </div>
        <div class="float f2">
          <span class="icon-tile"><AppIcon name="send" :size="18" /></span>
          <div><strong>XAF 25,000 sent</strong><small>Fee: 0 XAF</small></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Trust strip -->
  <section class="trust">
    <div class="container trust-grid">
      <div v-for="t in trust" :key="t.title" class="trust-item">
        <AppIcon :name="t.icon" :size="22" />
        <div>
          <strong>{{ t.title }}</strong>
          <span>{{ t.text }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Live features -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">In the app today</p>
        <h2 class="h-section">A complete bank account in your pocket</h2>
        <p class="lead">Every capability below is live in the current SwychPe Android release.</p>
      </div>
      <div class="grid grid-3">
        <article v-for="f in liveFeatures" :key="f.title" class="card card-hover">
          <span class="icon-tile"><AppIcon :name="f.icon" /></span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.text }}</p>
          <router-link v-if="f.to" :to="f.to" class="link-arrow more">Learn more <AppIcon name="arrow-right" :size="16" /></router-link>
        </article>
      </div>
    </div>
  </section>

  <!-- How it works -->
  <section class="section bg-tint">
    <div class="container">
      <div class="section-head center">
        <p class="eyebrow">Get started</p>
        <h2 class="h-section">From download to first deposit in four steps</h2>
      </div>
      <ol class="steps">
        <li v-for="(s, i) in steps" :key="s.title">
          <span class="step-n">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </li>
      </ol>
    </div>
  </section>

  <!-- Accounts preview -->
  <section class="section">
    <div class="container">
      <div class="split-head">
        <div class="section-head">
          <p class="eyebrow">Accounts</p>
          <h2 class="h-section">An account for every stage of your financial life</h2>
          <p class="lead">Start on Basic and upgrade inside the app. The exact quote is shown before you confirm.</p>
        </div>
        <router-link to="/accounts#compare" class="btn btn-outline">Compare all accounts</router-link>
      </div>
      <div class="acct-row">
        <router-link
          v-for="a in accounts"
          :key="a.code"
          to="/accounts"
          class="acct"
          :class="{ featured: a.featured }"
        >
          <span v-if="a.featured" class="badge badge-brand">Full membership</span>
          <h3>{{ a.name }}</h3>
          <p>{{ a.tagline }}</p>
          <dl>
            <div><dt>Setup</dt><dd>{{ a.setupFee }}</dd></div>
            <div><dt>Min. balance</dt><dd>{{ a.minBalance }}</dd></div>
          </dl>
        </router-link>
      </div>
    </div>
  </section>

  <!-- Security -->
  <section class="section bg-brand">
    <div class="container sec-grid">
      <div>
        <p class="eyebrow">Security & compliance</p>
        <h2 class="h-section">Bank-grade protection at every step</h2>
        <p class="lead">
          Your identity is verified once, every sign-in is monitored, and every withdrawal needs your
          confirmation.
        </p>
        <router-link to="/security" class="btn btn-ghost-light">How we protect you <AppIcon name="arrow-right" :size="16" /></router-link>
      </div>
      <div class="grid grid-2">
        <div v-for="s in security" :key="s.title" class="sec-card">
          <span class="icon-tile dark"><AppIcon :name="s.icon" /></span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Roadmap -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Roadmap</p>
        <h2 class="h-section">What's coming to SwychPe</h2>
        <p class="lead">We are building these next, in line with our cooperative licence. They will appear in the app as they launch.</p>
      </div>
      <div class="grid grid-4">
        <div v-for="r in roadmap" :key="r.title" class="card road">
          <div class="road-top">
            <span class="icon-tile gold"><AppIcon :name="r.icon" /></span>
            <StatusBadge status="soon" />
          </div>
          <h3>{{ r.title }}</h3>
          <p>{{ r.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section bg-tint">
    <div class="container faq-grid">
      <div>
        <p class="eyebrow">FAQ</p>
        <h2 class="h-section">Questions people ask</h2>
        <p class="lead">Can't find your answer? Our help centre has more, or email us any time.</p>
        <router-link to="/help" class="link-arrow">Visit the help centre <AppIcon name="arrow-right" :size="16" /></router-link>
      </div>
      <FaqList :items="faqs.slice(0, 6)" />
    </div>
  </section>

  <CtaBand />
</template>

<script setup>
import AppIcon from '../components/AppIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import FaqList from '../components/FaqList.vue'
import StatusBadge from '../components/StatusBadge.vue'
import { accounts, company, faqs } from '../data/site'
import appIcon from '../assets/brand/icon.png'

const phoneActions = [
  { label: 'Deposit', icon: 'arrow-down' },
  { label: 'Withdraw', icon: 'arrow-up' },
  { label: 'Transfer', icon: 'send' },
  { label: 'Receive', icon: 'qr' },
]

const phoneTx = [
  { name: 'MTN MoMo deposit', meta: 'Today · 09:14', amount: '+50,000', dir: 'in' },
  { name: 'Transfer to Paul N.', meta: 'Yesterday · 18:02', amount: '−25,000', dir: 'out' },
  { name: 'Payment link received', meta: 'Mon · 11:40', amount: '+12,500', dir: 'in' },
]

const trust = [
  { icon: 'landmark', title: 'Cooperative institution', text: 'Owned by its members' },
  { icon: 'shield-check', title: 'COBAC regulated', text: 'CEMAC microfinance rules' },
  { icon: 'id', title: 'Full KYC', text: 'ID + liveness verification' },
  { icon: 'lock', title: 'Encrypted', text: 'TLS in transit, hashed MPIN' },
]

const liveFeatures = [
  { icon: 'id', title: 'Open an account in minutes', text: 'Register with your phone number, capture your ID document and complete a liveness selfie. No paperwork, no queue.', to: '/accounts' },
  { icon: 'arrow-down', title: 'Deposit from mobile money', text: 'Fund your account from MTN Mobile Money, Orange Money and other wallets, or submit a bank transfer deposit.', to: '/pay' },
  { icon: 'send', title: 'Free member transfers', text: 'Send money to any SwychPe member instantly with a 0% transfer fee and a receipt you can share.', to: '/pay' },
  { icon: 'arrow-up', title: 'Secure withdrawals', text: 'Withdraw to your mobile wallet. Every withdrawal is confirmed with a one-time code and the fee is shown upfront.', to: '/pay' },
  { icon: 'qr', title: 'Receive with QR & links', text: 'Show your personal QR code or generate a payment link anyone can use to pay you.', to: '/pay' },
  { icon: 'file', title: 'Authenticated e-statements', text: 'Generate a digitally signed PDF statement for any date range, emailed to your verified address.', to: '/pay' },
  { icon: 'layers', title: 'Upgrade your account', text: 'Move from Basic to Student, Mini, Daily Savings or Full Account with Shares, with the quote shown in-app.', to: '/accounts' },
  { icon: 'activity', title: 'Track every transaction', text: 'Follow pending and failed transactions, re-check deposits and download a slip for every completed payment.' },
  { icon: 'bell', title: 'Real-time alerts', text: 'Push notifications for credits, debits, KYC decisions and account updates the moment they happen.' },
]

const steps = [
  { title: 'Download & register', text: 'Install SwychPe from Google Play and sign up with your Cameroonian mobile number and a one-time code.' },
  { title: 'Verify your identity', text: 'Photograph your national ID or passport and complete a quick liveness selfie inside the app.' },
  { title: 'Secure your account', text: 'Set a 4-digit MPIN and, if your phone supports it, enable fingerprint or face unlock.' },
  { title: 'Fund & start banking', text: 'Deposit from mobile money, then transfer, receive, withdraw and download statements.' },
]

const security = [
  { icon: 'key', title: 'MPIN & biometrics', text: 'Every session needs your MPIN or device biometrics; repeated failures lock the account.' },
  { icon: 'activity', title: 'Login monitoring', text: 'Every sign-in is recorded with its device and network so unusual access can be investigated.' },
  { icon: 'shield', title: 'OTP confirmations', text: 'Withdrawals and sensitive changes need a one-time code sent to your phone.' },
  { icon: 'eye', title: 'Liveness KYC', text: 'Selfie liveness checks stop impersonation before an account is ever opened.' },
]

const roadmap = [
  { icon: 'qr', title: 'Scan & Pay', text: 'Pay shops, taxis and market stalls by scanning a merchant QR code.' },
  { icon: 'bolt', title: 'Bills & airtime', text: 'ENEO, CAMWATER, TV subscriptions and airtime for every network.' },
  { icon: 'users', title: 'Digital Njangi', text: 'Run your contribution group with automatic collection and payouts.' },
  { icon: 'card', title: 'Cards', text: 'A SwychPe card for online shopping and subscriptions.' },
]
</script>

<style scoped>
.hero {
  padding: 80px 0 96px;
  overflow: hidden;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 64px;
  align-items: center;
}
.hero-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 24px;
}
.hero-chip svg {
  color: var(--gold);
}
.hero-copy .lead {
  margin: 20px 0 32px;
  max-width: 580px;
}
.store-note {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 18px 0 0;
  font-size: 0.84rem;
  color: rgba(255, 255, 255, 0.65);
}
.store-note svg {
  color: var(--gold);
  flex-shrink: 0;
}
.hero-proof {
  display: flex;
  gap: 40px;
  list-style: none;
  padding: 32px 0 0;
  margin: 40px 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}
.hero-proof strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1.9rem;
  color: #fff;
  line-height: 1.1;
}
.hero-proof span {
  font-size: 0.86rem;
  color: rgba(255, 255, 255, 0.65);
}

/* phone mockup */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}
.phone {
  width: 300px;
  border-radius: 40px;
  background: #fff;
  border: 10px solid #0e0618;
  box-shadow: 0 40px 80px -24px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  color: var(--ink);
}
.ph-head {
  background: linear-gradient(150deg, var(--brand-deep), var(--brand) 70%, #9c27b0);
  color: #fff;
  padding: 22px 20px 26px;
}
.ph-top {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
}
.ph-top small {
  display: block;
  font-size: 0.7rem;
  opacity: 0.75;
}
.ph-top strong {
  font-size: 0.92rem;
}
.ph-logo {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.35);
}
.ph-bell {
  margin-left: auto;
  opacity: 0.85;
}
.ph-label,
.ph-live {
  font-size: 0.72rem;
  opacity: 0.75;
}
.ph-bal {
  font-family: var(--font-display);
  font-size: 1.85rem;
  font-weight: 800;
  margin: 2px 0;
}
.ph-actions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  padding: 16px 14px;
  margin-top: -14px;
  background: #fff;
  border-radius: 18px 18px 0 0;
  position: relative;
}
.ph-actions span {
  display: grid;
  justify-items: center;
  gap: 6px;
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--ink-2);
}
.ph-actions i {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: var(--brand-50);
  color: var(--brand);
}
.ph-list {
  padding: 4px 16px 22px;
}
.ph-list-title {
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--muted);
  margin: 6px 0 8px;
}
.ph-tx {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 0;
  border-bottom: 1px solid var(--line);
  font-size: 0.78rem;
}
.ph-tx:last-child {
  border: 0;
}
.ph-tx strong {
  display: block;
  font-size: 0.78rem;
}
.ph-tx small {
  color: var(--muted);
  font-size: 0.68rem;
}
.ph-tx i {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.ph-tx i.in {
  background: var(--success-soft);
  color: var(--success);
}
.ph-tx i.out {
  background: var(--brand-50);
  color: var(--brand);
}
.ph-tx b {
  margin-left: auto;
  font-size: 0.8rem;
}
.ph-tx b.in {
  color: var(--success);
}
.float {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #fff;
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  color: var(--ink);
}
.float .icon-tile {
  width: 36px;
  height: 36px;
  margin: 0;
}
.float strong {
  display: block;
  font-size: 0.86rem;
}
.float small {
  font-size: 0.74rem;
  color: var(--muted);
}
.f1 {
  top: 18%;
  left: -4%;
}
.f2 {
  bottom: 14%;
  right: -4%;
}

/* trust strip */
.trust {
  border-bottom: 1px solid var(--line);
}
.trust-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.trust-item {
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 28px 20px;
  border-right: 1px solid var(--line);
}
.trust-item:last-child {
  border-right: 0;
}
.trust-item svg {
  color: var(--brand);
  flex-shrink: 0;
}
.trust-item strong {
  display: block;
  font-size: 0.95rem;
}
.trust-item span {
  font-size: 0.84rem;
  color: var(--muted);
}

.more {
  margin-top: 18px;
  font-size: 0.9rem;
}

/* steps */
.steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  counter-reset: s;
}
.steps li {
  position: relative;
  padding: 28px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}
.step-n {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 2rem;
  color: var(--brand-200);
  display: block;
  margin-bottom: 12px;
}
.steps h3 {
  font-size: 1.1rem;
}
.steps p {
  margin: 0;
  color: var(--muted);
  font-size: 0.93rem;
}

/* accounts preview */
.split-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 48px;
}
.split-head .section-head {
  margin-bottom: 0;
}
.acct-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
.acct {
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: var(--ink);
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}
.acct:hover {
  border-color: var(--brand-200);
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}
.acct.featured {
  background: linear-gradient(160deg, var(--brand-50), #fff);
  border-color: var(--brand-200);
}
.acct .badge {
  align-self: flex-start;
  margin-bottom: 12px;
}
.acct h3 {
  font-size: 1.08rem;
}
.acct p {
  font-size: 0.86rem;
  color: var(--muted);
  flex: 1;
}
.acct dl {
  margin: 0;
  display: grid;
  gap: 8px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
}
.acct dl div {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 0.8rem;
}
.acct dt {
  color: var(--muted);
}
.acct dd {
  margin: 0;
  font-weight: 700;
  text-align: right;
}

/* security */
.sec-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 64px;
  align-items: center;
}
.sec-grid .lead {
  margin-bottom: 28px;
}
.sec-card {
  padding: 24px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.sec-card h3 {
  font-size: 1.08rem;
}
.sec-card p {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.road-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.faq-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 64px;
}
.faq-grid .lead {
  margin-bottom: 16px;
}

@media (max-width: 1100px) {
  .acct-row {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 960px) {
  .hero-grid,
  .sec-grid,
  .faq-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .trust-grid,
  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
  .trust-item:nth-child(2) {
    border-right: 0;
  }
  .split-head {
    flex-direction: column;
    align-items: flex-start;
  }
  .acct-row {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .hero {
    padding: 56px 0 72px;
  }
  .hero-proof {
    gap: 24px;
  }
  .hero-proof strong {
    font-size: 1.5rem;
  }
  .trust-grid,
  .steps,
  .acct-row {
    grid-template-columns: 1fr;
  }
  .trust-item {
    border-right: 0;
    border-bottom: 1px solid var(--line);
    padding: 18px 0;
  }
  .phone {
    width: 270px;
  }
  .f1 {
    left: 0;
  }
  .f2 {
    right: 0;
  }
}
</style>
