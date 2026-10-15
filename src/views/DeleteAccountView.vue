<template>
  <PageHero
    crumb="Delete account"
    eyebrow="Account & data deletion"
    title="Delete your SwychPe account"
    lead="This page explains how to request deletion of your SwychPe account and associated data, what we delete, what we are legally required to keep, and for how long."
  >
    <a href="#request" class="btn btn-gold">Request deletion</a>
    <router-link to="/delete-data" class="btn btn-ghost-light">Delete some data only</router-link>
  </PageHero>

  <section class="section-sm app-id">
    <div class="container">
      <dl class="id-grid">
        <div><dt>App</dt><dd>SwychPe</dd></div>
        <div><dt>Developer</dt><dd>{{ company.legalName }} ({{ company.shortLegal }})</dd></div>
        <div><dt>Android package</dt><dd>com.swychr.swychpe</dd></div>
        <div><dt>Contact</dt><dd><a :href="`mailto:${company.email}`">{{ company.email }}</a></dd></div>
      </dl>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">How to request</p>
        <h2 class="h-section">Steps to delete your account</h2>
      </div>
      <ol class="steps">
        <li v-for="(s, i) in steps" :key="s.title">
          <span class="n">{{ i + 1 }}</span>
          <div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
          </div>
        </li>
      </ol>

      <div class="notice notice-warn before">
        <AppIcon name="alert" :size="20" />
        <div>
          <strong>Before you request deletion</strong>
          <ul>
            <li>Withdraw your available balance, or tell us where to send it (a wallet or account in your own name).</li>
            <li>Repay any outstanding loan or amount owed — accounts with outstanding obligations cannot be closed until settled.</li>
            <li>Minimum balances held on Mini and Daily Savings accounts are released to you when the account closes.</li>
            <li>For Full Accounts with Shares, share capital is refunded in line with the cooperative's bylaws.</li>
            <li>Download any statements you want to keep — you will lose access to the app after closure.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-tint">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">What happens to your data</p>
        <h2 class="h-section">Data deleted and data retained</h2>
        <p class="lead">
          As a regulated financial institution we must keep certain records after an account is closed. Everything else
          is deleted.
        </p>
      </div>
      <div class="grid grid-2">
        <div class="card">
          <div class="head del">
            <AppIcon name="trash" :size="20" />
            <h3>Deleted within 30 days</h3>
          </div>
          <ul class="dlist">
            <li v-for="d in deleted" :key="d.t"><strong>{{ d.t }}</strong><span>{{ d.d }}</span></li>
          </ul>
        </div>
        <div class="card">
          <div class="head keep">
            <AppIcon name="database" :size="20" />
            <h3>Retained as required by law</h3>
          </div>
          <ul class="dlist">
            <li v-for="d in retained" :key="d.t"><strong>{{ d.t }}</strong><span>{{ d.d }}</span></li>
          </ul>
        </div>
      </div>

      <div class="table-wrap retention">
        <table class="data-table">
          <thead>
            <tr><th scope="col">Data category</th><th scope="col">Retention period</th><th scope="col">Reason</th></tr>
          </thead>
          <tbody>
            <tr v-for="r in retention" :key="r.cat">
              <th scope="row">{{ r.cat }}</th>
              <td><strong>{{ r.period }}</strong></td>
              <td>{{ r.why }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="fine">
        Retained records are access-restricted, used only for legal, regulatory, audit and fraud-prevention purposes,
        and are permanently deleted or anonymised at the end of the retention period.
      </p>
    </div>
  </section>

  <section id="request" class="section">
    <div class="container req-grid">
      <div>
        <p class="eyebrow">Submit a request</p>
        <h2 class="h-section">Request account deletion</h2>
        <p class="lead">Fill in the form and send the email it prepares. You can also email us directly or visit our office.</p>
        <ul class="channels">
          <li>
            <span class="icon-tile"><AppIcon name="mail" :size="20" /></span>
            <div>
              <strong>Email</strong>
              <a :href="`mailto:${company.email}?subject=Account%20deletion%20request`">{{ company.email }}</a>
              <small>Subject “Account deletion request”, from your registered email if possible.</small>
            </div>
          </li>
          <li>
            <span class="icon-tile"><AppIcon name="pin" :size="20" /></span>
            <div>
              <strong>In person</strong>
              <span>{{ company.office }}, {{ company.address }}. Bring your ID document.</span>
            </div>
          </li>
        </ul>
        <router-link to="/delete-data" class="link-arrow">Only want to delete some data? <AppIcon name="arrow-right" :size="16" /></router-link>
      </div>
      <DeletionRequestForm mode="account" />
    </div>
  </section>
</template>

<script setup>
import AppIcon from '../components/AppIcon.vue'
import DeletionRequestForm from '../components/DeletionRequestForm.vue'
import PageHero from '../components/PageHero.vue'
import { company } from '../data/site'

const steps = [
  { title: 'Submit your request', text: 'Use the form on this page, email us from your registered email address, or visit our Buea office with your ID.' },
  { title: 'Verify your identity', text: 'We contact you on your registered mobile number or email to confirm the request really comes from you.' },
  { title: 'Settle your balance', text: 'We pay out any remaining balance to a wallet or account in your name and confirm there is nothing outstanding.' },
  { title: 'Account closed & data deleted', text: 'Your account is closed, you are signed out on every device, and your data is deleted within 30 days — except records we must retain.' },
]

const deleted = [
  { t: 'Profile & contact details', d: 'Email address, residential address, next-of-kin details and profile preferences.' },
  { t: 'Login credentials', d: 'Your hashed MPIN and active sessions. Biometric unlock is stored only on your phone and is removed when you uninstall the app.' },
  { t: 'Device & notification data', d: 'Push notification tokens and app settings.' },
  { t: 'Marketing preferences', d: 'You are removed from all promotional communications.' },
  { t: 'Unsubmitted or rejected KYC drafts', d: 'Documents and selfies from onboarding attempts that never produced a verified account.' },
]

const retained = [
  { t: 'Identity & KYC records', d: 'Name, date of birth, ID document images, liveness selfie, ID numbers and verification results.' },
  { t: 'Transaction & ledger records', d: 'Deposits, transfers, withdrawals, fees, balances and statements.' },
  { t: 'Membership & share records', d: 'Membership form, signature card, share subscriptions and refunds (Full Accounts).' },
  { t: 'Security & audit logs', d: 'Login history, IP addresses and audit trails linked to transactions.' },
]

const retention = [
  { cat: 'Identity & KYC records', period: '10 years after closure', why: 'CEMAC AML/CFT regulation and COBAC record-keeping rules' },
  { cat: 'Transaction & ledger records', period: '10 years after the transaction', why: 'AML/CFT, accounting and tax obligations' },
  { cat: 'Membership & share records', period: '10 years after closure', why: 'Cooperative law and audit requirements' },
  { cat: 'Security & audit logs', period: 'Up to 10 years', why: 'Fraud prevention, dispute resolution and regulatory audit' },
  { cat: 'All other personal data', period: 'Deleted within 30 days', why: 'No longer needed once the account is closed' },
]
</script>

<style scoped>
.app-id {
  padding: 0;
  border-bottom: 1px solid var(--line);
}
.id-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0;
}
.id-grid div {
  padding: 24px 20px;
  border-right: 1px solid var(--line);
}
.id-grid div:last-child {
  border-right: 0;
}
.id-grid dt {
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 4px;
}
.id-grid dd {
  margin: 0;
  font-weight: 600;
  font-size: 0.94rem;
  word-break: break-word;
}
.steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.steps li {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}
.steps .n {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--brand);
  color: #fff;
  font-weight: 800;
}
.steps h3 {
  font-size: 1.05rem;
  margin-bottom: 6px;
}
.steps p {
  margin: 0;
  font-size: 0.92rem;
  color: var(--muted);
}
.before {
  margin-top: 32px;
}
.before ul {
  margin: 8px 0 0;
  padding-left: 18px;
  display: grid;
  gap: 4px;
}
.head {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 14px;
  margin-bottom: 6px;
  border-bottom: 1px solid var(--line);
}
.head h3 {
  margin: 0;
}
.head.del svg {
  color: var(--danger);
}
.head.keep svg {
  color: var(--brand);
}
.dlist {
  list-style: none;
  padding: 0;
  margin: 0;
}
.dlist li {
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}
.dlist li:last-child {
  border-bottom: 0;
}
.dlist strong {
  display: block;
  font-size: 0.95rem;
}
.dlist span {
  font-size: 0.88rem;
  color: var(--muted);
}
.retention {
  margin-top: 32px;
}
.retention tbody th {
  color: var(--ink);
  white-space: normal;
}
.fine {
  margin-top: 14px;
  font-size: 0.84rem;
  color: var(--muted);
}
.req-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 56px;
  align-items: start;
}
.req-grid .lead {
  margin-bottom: 28px;
}
.channels {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: grid;
  gap: 20px;
}
.channels li {
  display: flex;
  gap: 16px;
}
.channels .icon-tile {
  margin: 0;
  width: 44px;
  height: 44px;
}
.channels strong,
.channels a,
.channels span,
.channels small {
  display: block;
}
.channels span,
.channels small {
  font-size: 0.9rem;
  color: var(--muted);
}
.channels a {
  font-weight: 600;
  word-break: break-all;
}
@media (max-width: 1000px) {
  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
  .id-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .id-grid div:nth-child(2) {
    border-right: 0;
  }
  .id-grid div:nth-child(-n + 2) {
    border-bottom: 1px solid var(--line);
  }
  .req-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 560px) {
  .steps,
  .id-grid {
    grid-template-columns: 1fr;
  }
  .id-grid div {
    border-right: 0;
    border-bottom: 1px solid var(--line);
    padding: 16px 0;
  }
}
</style>
