<template>
  <PageHero
    crumb="Business"
    eyebrow="Business banking"
    title="Banking for associations, SMEs and growing companies"
    lead="Open a Full Account with Shares in your organisation's name, with up to three authorised signatories and five sub-accounts to separate operating cash, reserves and investments."
  >
    <router-link to="/accounts#compare" class="btn btn-gold">See account requirements</router-link>
    <a :href="`mailto:${company.email}?subject=Business%20account%20enquiry`" class="btn btn-ghost-light">Talk to us</a>
  </PageHero>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Available now</p>
        <h2 class="h-section">Corporate accounts, the cooperative way</h2>
      </div>
      <div class="grid grid-3">
        <div v-for="b in live" :key="b.title" class="card card-hover">
          <span class="icon-tile"><AppIcon :name="b.icon" /></span>
          <h3>{{ b.title }}</h3>
          <p>{{ b.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-tint">
    <div class="container onboard">
      <div>
        <p class="eyebrow">Onboarding</p>
        <h2 class="h-section">Documents for corporate KYC</h2>
        <p class="lead">Prepare these documents before you start. Our compliance team reviews every corporate application.</p>
      </div>
      <ol class="doc-list">
        <li v-for="(d, i) in docs" :key="d">
          <span>{{ i + 1 }}</span>{{ d }}
        </li>
      </ol>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Coming soon</p>
        <h2 class="h-section">Tools to run your business</h2>
      </div>
      <div class="grid grid-4">
        <div v-for="r in roadmap" :key="r.title" class="card">
          <StatusBadge status="soon" />
          <h3 class="mt">{{ r.title }}</h3>
          <p>{{ r.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <CtaBand title="Bank your organisation with SwychPe" text="Email our business team and we will guide your board through onboarding." />
</template>

<script setup>
import AppIcon from '../components/AppIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import StatusBadge from '../components/StatusBadge.vue'
import { company } from '../data/site'

const live = [
  { icon: 'building', title: 'Organisation accounts', text: 'Full Account with Shares is open to registered companies, associations, churches and cooperatives.' },
  { icon: 'users', title: 'Up to 3 signatories', text: 'Appoint up to three authorised signatories, each individually KYC-verified.' },
  { icon: 'layers', title: 'Five sub-accounts', text: 'Deposit, Savings, Shares, Loan and Investment balances kept separate under one membership.' },
  { icon: 'qr', title: 'Collect with QR & links', text: 'Share a QR code or payment link so members and customers can pay you directly.' },
  { icon: 'file', title: 'Authenticated statements', text: 'Generate PDF statements for audits, tenders and board reporting.' },
  { icon: 'store', title: 'Payroll processing', text: 'Available on Daily Savings accounts at a fixed price per employee.' },
]

const docs = [
  'Certificate of registration (RCCM or association receipt)',
  'Articles of Association / bylaws',
  'Board minutes approving the opening of the account',
  'Tax registration document (NIU)',
  'ID documents for up to 3 authorised signatories',
  'Signed membership form',
  'Location capture of the registered office',
]

const roadmap = [
  { title: 'Merchant QR', text: 'A printable QR code for your shop with a clear daily sales record.' },
  { title: 'Bulk payments', text: 'Pay salaries and suppliers to many accounts or wallets in one batch.' },
  { title: 'Working capital', text: 'Credit lines based on your account and sales history.' },
  { title: 'Agent network', text: 'Earn commission by serving deposits and withdrawals in your community.' },
]
</script>

<style scoped>
.onboard {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 56px;
  align-items: start;
}
.doc-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}
.doc-list li {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  font-weight: 600;
}
.doc-list span {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  background: var(--brand);
  color: #fff;
  font-size: 0.82rem;
}
.mt {
  margin-top: 14px;
}
@media (max-width: 900px) {
  .onboard {
    grid-template-columns: 1fr;
  }
}
</style>
