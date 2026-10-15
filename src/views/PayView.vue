<template>
  <PageHero
    crumb="Pay & transfer"
    eyebrow="Payments"
    title="Move money in, out and across — in seconds"
    lead="Deposit from mobile money, send to any member for free, get paid by QR or link, and withdraw with a one-time code. Every fee is shown before you confirm."
  >
    <router-link to="/early-access" class="btn btn-gold">Get early access</router-link>
    <a href="#fees" class="btn btn-ghost-light">See fees</a>
  </PageHero>

  <section v-for="(block, i) in blocks" :key="block.title" class="section" :class="{ 'bg-tint': i % 2 }">
    <div class="container block" :class="{ flip: i % 2 }">
      <div>
        <p class="eyebrow"><AppIcon :name="block.icon" :size="16" /> {{ block.eyebrow }}</p>
        <h2 class="h-section">{{ block.title }}</h2>
        <p class="lead">{{ block.lead }}</p>
        <div v-if="block.pills" class="pill-list">
          <span v-for="p in block.pills" :key="p" class="pill">{{ p }}</span>
        </div>
      </div>
      <div class="grid">
        <div v-for="item in block.items" :key="item.title" class="card row-card">
          <span class="icon-tile"><AppIcon :name="item.icon" :size="20" /></span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="fees" class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Transparent pricing</p>
        <h2 class="h-section">Payment fees</h2>
        <p class="lead">No hidden charges. The app always shows the fee and total before you approve a transaction.</p>
      </div>
      <div class="table-wrap">
        <table class="data-table fee-table">
          <thead>
            <tr><th scope="col">Service</th><th scope="col">Fee</th><th scope="col">Notes</th></tr>
          </thead>
          <tbody>
            <tr v-for="f in fees" :key="f.service">
              <th scope="row">{{ f.service }}</th>
              <td><strong>{{ f.fee }}</strong></td>
              <td>{{ f.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="section bg-tint">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Coming soon</p>
        <h2 class="h-section">Everyday payments on the roadmap</h2>
      </div>
      <div class="grid grid-4">
        <div v-for="r in roadmap" :key="r.title" class="card">
          <StatusBadge status="soon" />
          <h3 class="mt">{{ r.title }}</h3>
          <p>{{ r.text }}</p>
          <div class="pill-list"><span v-for="p in r.pills" :key="p" class="pill">{{ p }}</span></div>
        </div>
      </div>
    </div>
  </section>

  <CtaBand />
</template>

<script setup>
import AppIcon from '../components/AppIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import StatusBadge from '../components/StatusBadge.vue'
import { withdrawalFee } from '../data/site'

const blocks = [
  {
    icon: 'arrow-down',
    eyebrow: 'Deposit',
    title: 'Fund your account your way',
    lead: 'Top up from the mobile wallet you already use, or move money in from a bank account.',
    pills: ['MTN Mobile Money', 'Orange Money', 'Other mobile wallets', 'Bank transfer'],
    items: [
      { icon: 'smartphone', title: 'Mobile money checkout', text: 'Approve the payment on your phone and your SwychPe balance updates as soon as the operator confirms.' },
      { icon: 'landmark', title: 'Bank transfer deposits', text: 'Submit your transfer details in the app and follow each request from submitted to credited.' },
      { icon: 'clock', title: 'Pending deposit re-checks', text: 'If an operator is slow to confirm, the app re-checks automatically and keeps the transaction visible.' },
    ],
  },
  {
    icon: 'send',
    eyebrow: 'Transfer',
    title: 'Free transfers between members',
    lead: 'Send money to any SwychPe member by phone number with a 0% transfer fee.',
    items: [
      { icon: 'zap', title: 'Instant settlement', text: 'Funds move between SwychPe accounts immediately, any time of day.' },
      { icon: 'shield-check', title: 'Confirm before you send', text: 'See the recipient name and amount on a review screen, then authorise with your MPIN.' },
      { icon: 'receipt', title: 'Shareable receipts', text: 'Every transfer produces a transaction slip you can save or share.' },
    ],
  },
  {
    icon: 'qr',
    eyebrow: 'Receive',
    title: 'Get paid without sharing account details',
    lead: 'Share a QR code or a payment link and let customers, friends and family pay you directly.',
    items: [
      { icon: 'qr', title: 'Personal QR code', text: 'Display your SwychPe QR code for other members to scan and pay.' },
      { icon: 'link', title: 'Payment links', text: 'Generate a link for a specific amount and share it on WhatsApp, SMS or email.' },
      { icon: 'bell', title: 'Instant notification', text: 'A push alert tells you the moment money lands in your account.' },
    ],
  },
  {
    icon: 'arrow-up',
    eyebrow: 'Withdraw',
    title: 'Cash out with confidence',
    lead: 'Withdraw to your mobile money wallet. Each withdrawal is protected by a one-time code.',
    items: [
      { icon: 'key', title: 'OTP-verified', text: 'A one-time code is sent to your registered number before any money leaves your account.' },
      { icon: 'eye', title: 'Fee shown upfront', text: `The standard ${withdrawalFee} fee and the amount you receive are shown before you confirm.` },
      { icon: 'activity', title: 'Live status', text: 'Follow every withdrawal through to completion, with failed payouts clearly flagged.' },
    ],
  },
  {
    icon: 'file',
    eyebrow: 'Records',
    title: 'Statements and history you can rely on',
    lead: 'Keep a complete, authenticated record of your money for visas, loans and bookkeeping.',
    items: [
      { icon: 'file', title: 'Authenticated e-statements', text: 'Pick any date range and receive a digitally generated PDF statement by email.' },
      { icon: 'receipt', title: 'Transaction slips', text: 'Open any transaction to see the full detail and download a slip.' },
      { icon: 'alert', title: 'Pending & failed', text: 'A dedicated view lists anything still processing or needing attention.' },
    ],
  },
]

const fees = [
  { service: 'Deposits (all methods)', fee: 'Free', note: 'Your mobile money operator may apply its own charges.' },
  { service: 'Transfer to a SwychPe member', fee: '0 XAF', note: 'Instant, any amount within your limits.' },
  { service: 'Withdrawal to mobile money', fee: withdrawalFee, note: 'Waived on remittance inflows for Basic Accounts.' },
  { service: 'Receive via QR or payment link', fee: 'Free', note: 'For personal accounts.' },
  { service: 'E-statement', fee: 'Free – standard fee', note: 'Free for Student Accounts; standard per-request fee on other tiers.' },
]

const roadmap = [
  { title: 'Scan & Pay', text: 'Pay merchants, taxis and market stalls by scanning their QR code.', pills: ['Merchants', 'Transport'] },
  { title: 'Airtime & data', text: 'Top up yourself or anyone, on every network.', pills: ['MTN', 'Orange', 'Camtel', 'Nexttel'] },
  { title: 'Utility bills', text: 'Electricity and water, paid without leaving home.', pills: ['ENEO', 'CAMWATER'] },
  { title: 'TV subscriptions', text: 'Renew your TV package in seconds.', pills: ['Canal+', 'DStv', 'StarTimes'] },
]
</script>

<style scoped>
.block {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 56px;
  align-items: center;
}
.block.flip > div:first-child {
  order: 2;
}
.block .eyebrow svg {
  display: inline;
}
.row-card {
  display: flex;
  gap: 18px;
  padding: 22px;
}
.row-card .icon-tile {
  margin: 0;
  width: 44px;
  height: 44px;
}
.row-card h3 {
  font-size: 1.05rem;
  margin-bottom: 4px;
}
.fee-table {
  min-width: 600px;
}
.fee-table tbody th {
  color: var(--ink);
  white-space: normal;
}
.fee-table td:last-child {
  color: var(--muted);
}
.mt {
  margin-top: 14px;
}
@media (max-width: 900px) {
  .block {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .block.flip > div:first-child {
    order: 0;
  }
}
</style>
