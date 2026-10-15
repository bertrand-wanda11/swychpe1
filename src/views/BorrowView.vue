<template>
  <PageHero
    crumb="Borrow"
    eyebrow="Member credit"
    title="Credit built on your cooperative membership"
    lead="Full Account members hold a dedicated Loan sub-account. In-app loan applications are on the way — here is how SwychPe credit will work."
  >
    <router-link to="/accounts" class="btn btn-gold">Become a Full Account member</router-link>
  </PageHero>

  <section class="section">
    <div class="container calc-grid">
      <div>
        <p class="eyebrow">Planned products <StatusBadge status="soon" /></p>
        <h2 class="h-section">Loans for life and business</h2>
        <div class="tabs" role="tablist">
          <button
            v-for="(p, i) in products"
            :key="p.name"
            role="tab"
            :aria-selected="active === i"
            class="tab"
            :class="{ on: active === i }"
            @click="active = i"
          >
            {{ p.name }}
          </button>
        </div>
        <p class="lead">{{ products[active].text }}</p>
        <ul class="check-list">
          <li v-for="pt in products[active].points" :key="pt"><AppIcon name="check" :size="18" />{{ pt }}</li>
        </ul>
      </div>

      <div class="card calc">
        <h3>Repayment illustration</h3>
        <label class="calc-row">
          <span>Amount</span>
          <strong>XAF {{ amount.toLocaleString('en-US') }}</strong>
          <input v-model.number="amount" type="range" min="10000" max="500000" step="5000" />
        </label>
        <label class="calc-row">
          <span>Duration</span>
          <strong>{{ months }} month{{ months > 1 ? 's' : '' }}</strong>
          <input v-model.number="months" type="range" min="1" max="12" step="1" />
        </label>
        <div class="calc-out">
          <div><span>Total repayable</span><strong>XAF {{ total.toLocaleString('en-US') }}</strong></div>
          <div><span>Per month</span><strong>XAF {{ monthly.toLocaleString('en-US') }}</strong></div>
        </div>
        <p class="fine">
          Illustration only, at an assumed flat 2% per month. Actual rates, limits and eligibility will be set by the
          cooperative's credit policy and shown in the app before you accept any offer.
        </p>
      </div>
    </div>
  </section>

  <section class="section bg-tint">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Responsible lending</p>
        <h2 class="h-section">How credit decisions will be made</h2>
      </div>
      <div class="grid grid-4">
        <div v-for="r in principles" :key="r.title" class="card">
          <span class="icon-tile"><AppIcon :name="r.icon" /></span>
          <h3>{{ r.title }}</h3>
          <p>{{ r.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <CtaBand title="Prepare for credit today" text="Open your account and upgrade to Full Account with Shares to build your membership history." />
</template>

<script setup>
import { computed, ref } from 'vue'
import AppIcon from '../components/AppIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import StatusBadge from '../components/StatusBadge.vue'

const products = [
  {
    name: 'Salary advance',
    text: 'Cover rent, school fees or a medical bill before payday, and repay automatically when your salary arrives.',
    points: ['Short-term, small amounts', 'Repay from your SwychPe balance', 'Limits grow with on-time repayment'],
  },
  {
    name: 'SME working capital',
    text: 'Restock before the busy season or take on a large order, with instalments matched to your cash flow.',
    points: ['For traders and registered businesses', 'Based on your account history', 'Flexible instalments'],
  },
  {
    name: 'Device financing',
    text: 'Spread the cost of a smartphone or business equipment over a few months.',
    points: ['Pay in instalments', 'Clear total cost upfront', 'Managed in the app'],
  },
]

const active = ref(0)
const amount = ref(100000)
const months = ref(3)
const total = computed(() => Math.round(amount.value * (1 + 0.02 * months.value)))
const monthly = computed(() => Math.round(total.value / months.value))

const principles = [
  { icon: 'user', title: 'Membership first', text: 'Credit is offered to verified Full Account members with a Loan sub-account.' },
  { icon: 'activity', title: 'Your history counts', text: 'Deposits, savings and repayment behaviour inform limits.' },
  { icon: 'eye', title: 'Full cost disclosure', text: 'Interest, fees and the repayment schedule are shown before you accept.' },
  { icon: 'shield-check', title: 'Regulated lending', text: 'Lending follows COBAC microfinance rules and cooperative bylaws.' },
]
</script>

<style scoped>
.calc-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 56px;
  align-items: start;
}
.eyebrow .badge {
  text-transform: none;
  letter-spacing: 0;
}
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0 20px;
}
.tab {
  padding: 9px 16px;
  border-radius: 999px;
  border: 1.5px solid var(--line-strong);
  background: var(--surface);
  font: inherit;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--ink-2);
  cursor: pointer;
}
.tab.on {
  background: var(--brand);
  border-color: var(--brand);
  color: #fff;
}
.calc {
  padding: 32px;
  box-shadow: var(--shadow);
}
.calc-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  margin: 20px 0;
  font-size: 0.92rem;
  color: var(--muted);
}
.calc-row strong {
  color: var(--ink);
  font-size: 1.05rem;
}
.calc-row input {
  grid-column: 1 / -1;
  accent-color: var(--brand);
  width: 100%;
}
.calc-out {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 20px;
  border-radius: var(--radius);
  background: var(--brand-50);
}
.calc-out span {
  display: block;
  font-size: 0.82rem;
  color: var(--muted);
}
.calc-out strong {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--brand-deep);
}
.fine {
  font-size: 0.8rem;
  color: var(--muted);
  margin: 16px 0 0;
}
@media (max-width: 900px) {
  .calc-grid {
    grid-template-columns: 1fr;
  }
}
</style>
