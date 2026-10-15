<template>
  <PageHero
    crumb="Accounts"
    eyebrow="Personal & business accounts"
    title="Choose the account that fits how you bank"
    lead="Every member starts on a Basic Account. Upgrade inside the app whenever you are ready — the exact fees and requirements are quoted before you confirm."
  >
    <a href="#compare" class="btn btn-gold">Compare accounts</a>
    <router-link to="/download" class="btn btn-ghost-light">Open an account</router-link>
  </PageHero>

  <section class="section">
    <div class="container">
      <div class="grid acct-grid">
        <article v-for="a in accounts" :key="a.code" class="card acct" :class="{ featured: a.featured }">
          <div class="acct-top">
            <span class="icon-tile" :class="{ gold: a.featured }"><AppIcon :name="icons[a.code]" /></span>
            <span class="badge badge-brand">{{ a.audience }}</span>
          </div>
          <h3>{{ a.name }}</h3>
          <p class="tag">{{ a.tagline }}</p>
          <dl class="facts">
            <div><dt>Setup fee</dt><dd>{{ a.setupFee }}</dd></div>
            <div><dt>Minimum balance</dt><dd>{{ a.minBalance }}</dd></div>
            <div><dt>Earns interest</dt><dd>{{ a.interest }}</dd></div>
          </dl>
          <ul class="check-list">
            <li v-for="h in a.highlights" :key="h"><AppIcon name="check" :size="18" />{{ h }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section id="compare" class="section bg-tint">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Side by side</p>
        <h2 class="h-section">Compare account features</h2>
        <p class="lead">All accounts include free deposits and the standard withdrawal fee of {{ withdrawalFee }}.</p>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th v-for="a in accounts" :key="a.code" scope="col">{{ a.name }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.key">
              <th scope="row">{{ row.label }}</th>
              <td v-for="a in accounts" :key="a.code">{{ a[row.key] }}</td>
            </tr>
            <tr>
              <th scope="row">Deposits</th>
              <td v-for="a in accounts" :key="a.code">Free</td>
            </tr>
            <tr>
              <th scope="row">Withdrawal fee</th>
              <td v-for="a in accounts" :key="a.code">{{ withdrawalFee }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="fine">
        Minimum balances on Mini and Daily Savings accounts are held for the life of the account and released when it is
        closed. Basic Accounts pay no withdrawal fee on remittance inflows.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container full-grid">
      <div>
        <p class="eyebrow">Full Account with Shares</p>
        <h2 class="h-section">Full cooperative membership</h2>
        <p class="lead">
          Become a shareholding member of Swychr Cooperative. One membership opens five dedicated sub-accounts, each
          with its own interest, withdrawal and notice rules.
        </p>
        <div class="subs">
          <div v-for="s in subAccounts" :key="s.name" class="sub">
            <span class="icon-tile"><AppIcon :name="s.icon" :size="20" /></span>
            <div>
              <strong>{{ s.name }}</strong>
              <span>{{ s.text }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card setup">
        <h3>Setup costs</h3>
        <table class="setup-table">
          <tbody>
            <tr v-for="c in setupCosts" :key="c.label">
              <th scope="row">{{ c.label }}</th>
              <td>{{ c.value }}</td>
            </tr>
          </tbody>
        </table>
        <p class="fine">At least 50% of the share subscription must be paid up when the account is opened.</p>
      </div>
    </div>
  </section>

  <section class="section bg-tint">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Know your customer</p>
        <h2 class="h-section">What you need to open a Full Account</h2>
      </div>
      <div class="grid grid-2">
        <div class="card">
          <span class="icon-tile"><AppIcon name="user" /></span>
          <h3>Individuals</h3>
          <ul class="check-list">
            <li v-for="d in kycIndividual" :key="d"><AppIcon name="check" :size="18" />{{ d }}</li>
          </ul>
        </div>
        <div class="card">
          <span class="icon-tile"><AppIcon name="building" /></span>
          <h3>Organisations</h3>
          <ul class="check-list">
            <li v-for="d in kycCorporate" :key="d"><AppIcon name="check" :size="18" />{{ d }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <CtaBand title="Start with a free Basic Account" text="Register in minutes and upgrade whenever you are ready." />
</template>

<script setup>
import AppIcon from '../components/AppIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import { accounts, withdrawalFee } from '../data/site'

const icons = { basic: 'wallet', student: 'school', mini: 'smartphone', daily_savings: 'store', full_shares: 'landmark' }

const rows = [
  { key: 'audience', label: 'Who can open it' },
  { key: 'eligibility', label: 'Eligibility' },
  { key: 'setupFee', label: 'Setup fee' },
  { key: 'minBalance', label: 'Minimum balance' },
  { key: 'interest', label: 'Earns interest' },
  { key: 'shares', label: 'Share ownership' },
  { key: 'subAccounts', label: 'Sub-accounts' },
]

const subAccounts = [
  { name: 'Deposit', icon: 'wallet', text: 'Your everyday transactional balance.' },
  { name: 'Savings', icon: 'target', text: 'Interest-earning savings; holds the 10,000 XAF minimum balance.' },
  { name: 'Shares', icon: 'pie', text: 'Your ordinary shares in the cooperative.' },
  { name: 'Loan', icon: 'trending', text: 'Member credit facilities and repayments.' },
  { name: 'Investment', icon: 'activity', text: 'Term placements that earn interest at the applicable rate.' },
]

const setupCosts = [
  { label: 'Registration fee', value: 'Free' },
  { label: 'Minimum savings balance', value: '10,000 XAF' },
  { label: 'Ordinary shares', value: '10,000 XAF each (1–10)' },
  { label: 'Solidarity fund', value: '40% of share subscription' },
  { label: 'Building contribution', value: '6,000 XAF' },
]

const kycIndividual = [
  'Valid national ID card or passport, captured in the app',
  'Liveness selfie and passport-size photo',
  'Location capture or a localisation plan',
  'Signed membership form and signature card',
  'Next-of-kin statement',
]

const kycCorporate = [
  'Registration document and Articles of Association',
  'Board minutes approving the account',
  'Tax registration document',
  'Up to 3 authorised signatories, each KYC-verified',
  'Signed membership form and location capture',
]
</script>

<style scoped>
.acct-grid {
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
}
.acct {
  display: flex;
  flex-direction: column;
}
.acct.featured {
  border: 2px solid var(--brand);
  box-shadow: var(--shadow);
}
.acct-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.acct .tag {
  margin-bottom: 20px;
}
.facts {
  margin: 0 0 20px;
  border-top: 1px solid var(--line);
}
.facts div {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
  font-size: 0.9rem;
}
.facts dt {
  color: var(--muted);
}
.facts dd {
  margin: 0;
  font-weight: 700;
  text-align: right;
}
.acct .check-list li {
  font-size: 0.9rem;
}
.fine {
  margin-top: 16px;
  font-size: 0.84rem;
  color: var(--muted);
}
.full-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 56px;
  align-items: start;
}
.subs {
  display: grid;
  gap: 14px;
  margin-top: 28px;
}
.sub {
  display: flex;
  gap: 16px;
  align-items: center;
}
.sub .icon-tile {
  margin: 0;
  width: 42px;
  height: 42px;
}
.sub strong {
  display: block;
}
.sub span {
  font-size: 0.9rem;
  color: var(--muted);
}
.setup {
  position: sticky;
  top: calc(var(--nav-h) + 24px);
}
.setup-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.92rem;
  margin-top: 8px;
}
.setup-table th,
.setup-table td {
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
  text-align: left;
}
.setup-table th {
  font-weight: 500;
  color: var(--muted);
}
.setup-table td {
  font-weight: 700;
  text-align: right;
}
@media (max-width: 900px) {
  .full-grid {
    grid-template-columns: 1fr;
  }
  .setup {
    position: static;
  }
}
</style>
