<template>
  <PageHero
    crumb="Save"
    eyebrow="Savings & investment"
    title="Grow your money with a cooperative that you own"
    lead="Full Account members earn interest on Savings and Investment balances and hold shares in Swychr Cooperative. Daily Savings and Mini accounts help you build the habit first."
  >
    <router-link to="/accounts" class="btn btn-gold">Compare savings accounts</router-link>
  </PageHero>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Available now</p>
        <h2 class="h-section">Ways to save with SwychPe</h2>
      </div>
      <div class="grid grid-3">
        <article v-for="s in options" :key="s.title" class="card card-hover">
          <div class="top">
            <span class="icon-tile"><AppIcon :name="s.icon" /></span>
            <StatusBadge status="live" />
          </div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
          <ul class="check-list sm">
            <li v-for="p in s.points" :key="p"><AppIcon name="check" :size="16" />{{ p }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section class="section bg-brand">
    <div class="container own">
      <div>
        <p class="eyebrow">Member-owned</p>
        <h2 class="h-section">Why saving with a cooperative is different</h2>
        <p class="lead">
          Swychr Cooperative is owned by its members, not distant shareholders. As a Full Account member your shares
          give you a stake in the institution that holds your savings.
        </p>
      </div>
      <ul class="own-list">
        <li v-for="o in ownership" :key="o.title">
          <span class="icon-tile dark"><AppIcon :name="o.icon" :size="20" /></span>
          <div>
            <strong>{{ o.title }}</strong>
            <span>{{ o.text }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Coming soon</p>
        <h2 class="h-section">Save the way Cameroon already saves</h2>
      </div>
      <div class="grid grid-3">
        <div v-for="r in roadmap" :key="r.title" class="card">
          <div class="top">
            <span class="icon-tile gold"><AppIcon :name="r.icon" /></span>
            <StatusBadge status="soon" />
          </div>
          <h3>{{ r.title }}</h3>
          <p>{{ r.text }}</p>
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

const options = [
  {
    icon: 'target',
    title: 'Savings sub-account',
    text: 'Part of the Full Account with Shares. Your savings balance earns interest at the applicable rate.',
    points: ['Earns interest', '10,000 XAF minimum balance', 'Separate from your spending balance'],
  },
  {
    icon: 'activity',
    title: 'Investment sub-account',
    text: 'Place funds for a fixed term to earn interest under the cooperative rate structure.',
    points: ['Earns interest', 'Term placements', 'Tracked in the app'],
  },
  {
    icon: 'pie',
    title: 'Cooperative shares',
    text: 'Subscribe to 1–10 ordinary shares at 10,000 XAF each and become a member-owner.',
    points: ['Ownership stake', 'At least 50% paid up at opening', 'Held in your Shares sub-account'],
  },
  {
    icon: 'store',
    title: 'Daily Savings Account',
    text: 'Designed for traders and daily earners who deposit small amounts often.',
    points: ['Free deposits', '3,000 XAF minimum balance', 'Payroll processing available'],
  },
  {
    icon: 'smartphone',
    title: 'Mini Account',
    text: 'A no-setup-fee account for verified adults who want to keep a reserve.',
    points: ['No setup fee', '5,000 XAF minimum balance', 'Released on closure'],
  },
  {
    icon: 'school',
    title: 'Student Account',
    text: 'Help students manage pocket money and school fees with free statements.',
    points: ['1,000 XAF one-time setup', 'Free e-statements', 'No running fees'],
  },
]

const ownership = [
  { icon: 'users', title: 'Democratic governance', text: 'A board of directors accountable to the membership.' },
  { icon: 'heart', title: 'Solidarity fund', text: 'Member contributions that support the cooperative community.' },
  { icon: 'building', title: 'Building contribution', text: 'A one-time contribution that builds shared infrastructure.' },
  { icon: 'shield-check', title: 'Regulated & audited', text: 'Supervised under COBAC microfinance rules and CamCCUL standards.' },
]

const roadmap = [
  { icon: 'users', title: 'Digital Njangi groups', text: 'Create or join a contribution circle, set the payout order and let the app keep the ledger.' },
  { icon: 'target', title: 'Target savings', text: 'Lock money towards school fees, rent or a new phone and track progress.' },
  { icon: 'landmark', title: 'Community pools', text: 'Manage church, village or association funds transparently with multiple signatories.' },
]
</script>

<style scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.check-list.sm {
  margin-top: 18px;
  gap: 8px;
  font-size: 0.88rem;
}
.own {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
.own-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 20px;
}
.own-list li {
  display: flex;
  gap: 16px;
  align-items: center;
}
.own-list .icon-tile {
  margin: 0;
}
.own-list strong {
  display: block;
  color: #fff;
}
.own-list span {
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.7);
}
@media (max-width: 900px) {
  .own {
    grid-template-columns: 1fr;
  }
}
</style>
