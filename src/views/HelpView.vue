<template>
  <PageHero
    crumb="Help centre"
    eyebrow="Support"
    title="How can we help?"
    lead="Find answers to common questions, or reach our member support team by email or at our Buea office."
  />

  <section class="section-sm">
    <div class="container">
      <div class="grid grid-3">
        <a :href="`mailto:${company.email}`" class="card card-hover contact">
          <span class="icon-tile"><AppIcon name="mail" /></span>
          <h3>Email support</h3>
          <p>{{ company.email }}</p>
          <small>We reply within one business day.</small>
        </a>
        <div class="card contact">
          <span class="icon-tile"><AppIcon name="pin" /></span>
          <h3>Visit us</h3>
          <p>{{ company.office }}</p>
          <small>{{ company.address }}</small>
        </div>
        <router-link to="/delete-account" class="card card-hover contact">
          <span class="icon-tile"><AppIcon name="trash" /></span>
          <h3>Close your account</h3>
          <p>Request account closure or data deletion.</p>
          <small>See what we delete and what we must keep.</small>
        </router-link>
      </div>
    </div>
  </section>

  <section class="section bg-tint">
    <div class="container faq-grid">
      <div>
        <p class="eyebrow">FAQ</p>
        <h2 class="h-section">Frequently asked questions</h2>
        <div class="topics">
          <router-link v-for="t in topics" :key="t.to" :to="t.to" class="topic">
            <AppIcon :name="t.icon" :size="18" /> {{ t.label }}
            <AppIcon name="chevron-right" :size="16" class="end" />
          </router-link>
        </div>
      </div>
      <FaqList :items="faqs" />
    </div>
  </section>
</template>

<script setup>
import AppIcon from '../components/AppIcon.vue'
import FaqList from '../components/FaqList.vue'
import PageHero from '../components/PageHero.vue'
import { company, faqs } from '../data/site'

const topics = [
  { to: '/accounts', label: 'Accounts & fees', icon: 'layers' },
  { to: '/pay', label: 'Deposits, transfers & withdrawals', icon: 'arrow-left-right' },
  { to: '/security', label: 'Security & fraud', icon: 'shield' },
  { to: '/privacy', label: 'Privacy & your data', icon: 'lock' },
]
</script>

<style scoped>
.contact {
  text-decoration: none;
  color: inherit;
}
.contact p {
  color: var(--ink);
  font-weight: 600;
  margin-bottom: 6px;
}
.contact small {
  color: var(--muted);
}
.faq-grid {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 56px;
  align-items: start;
}
.topics {
  display: grid;
  gap: 8px;
  margin-top: 24px;
}
.topic {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: var(--radius);
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--ink);
  font-weight: 600;
  text-decoration: none;
}
.topic svg {
  color: var(--brand);
}
.topic .end {
  margin-left: auto;
  color: var(--muted);
}
.topic:hover {
  border-color: var(--brand-200);
}
@media (max-width: 900px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>
