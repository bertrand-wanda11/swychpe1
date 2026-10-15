<template>
  <PageHero
    crumb="About us"
    eyebrow="About SwychPe"
    title="A member-owned cooperative, rebuilt for the digital age"
    lead="SwychPe is the digital banking platform of Swychr Cooperative Society with Board of Directors (SWYCO COOP-BOD), headquartered in Buea. We exist to give every Cameroonian access to safe, affordable financial services from their phone."
  />

  <section class="section">
    <div class="container grid grid-3">
      <div v-for="p in pillars" :key="p.title" class="card">
        <span class="icon-tile"><AppIcon :name="p.icon" /></span>
        <h3>{{ p.title }}</h3>
        <p>{{ p.text }}</p>
      </div>
    </div>
  </section>

  <section class="section bg-tint">
    <div class="container facts-grid">
      <div>
        <p class="eyebrow">Corporate information</p>
        <h2 class="h-section">Who we are</h2>
        <p class="lead">
          As a cooperative, SwychPe is owned by its members. Full Account holders subscribe to shares, and the
          cooperative is governed by a board of directors accountable to that membership.
        </p>
      </div>
      <div class="table-wrap">
        <table class="data-table info">
          <tbody>
            <tr v-for="f in facts" :key="f.k">
              <th scope="row">{{ f.k }}</th>
              <td>{{ f.v }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <CtaBand title="Join the cooperative" text="Become a member in minutes from the SwychPe app." />
</template>

<script setup>
import AppIcon from '../components/AppIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import { company } from '../data/site'

const pillars = [
  { icon: 'globe', title: 'Our mission', text: 'Bring regulated, low-cost banking to every phone in Cameroon — including people branches have never served.' },
  { icon: 'users', title: 'Member-owned', text: 'Profits and governance stay with the community of members, not distant shareholders.' },
  { icon: 'shield-check', title: 'Trust by design', text: 'Strong KYC, a double-entry ledger and transparent fees are built into the product from day one.' },
]

const facts = [
  { k: 'Legal entity', v: company.legalName },
  { k: 'Short name', v: company.shortLegal },
  { k: 'Type', v: 'Cooperative financial institution' },
  { k: 'Network', v: 'Cameroon Cooperative Credit Union League (CamCCUL)' },
  { k: 'Supervisor', v: 'Central African Banking Commission (COBAC)' },
  { k: 'Headquarters', v: company.address },
  { k: 'Contact', v: company.email },
  { k: 'Products', v: 'SwychPe mobile app (Android, iOS)' },
]
</script>

<style scoped>
.facts-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 56px;
  align-items: start;
}
.info {
  min-width: 0;
}
.info tbody th {
  width: 34%;
}
@media (max-width: 900px) {
  .facts-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 520px) {
  .info th,
  .info td {
    display: block;
    width: auto !important;
    padding: 6px 16px;
    border: 0;
  }
  .info td {
    padding-bottom: 14px;
    border-bottom: 1px solid var(--line);
  }
}
</style>
