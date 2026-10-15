<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="f-brand">
        <router-link to="/" class="brand">
          <img :src="wordmarkWhite" alt="SwychPe" class="brand-logo" width="147" height="36" />
        </router-link>
        <p>
          Digital cooperative banking for Cameroon, operated by {{ company.legalName }} ({{ company.shortLegal }}).
        </p>
        <div class="store-row">
          <a :href="company.apkDownload" rel="noopener" class="store-chip">
            <AppIcon name="download" :size="16" /> Download APK
          </a>
          <router-link to="/early-access" class="store-chip">
            <AppIcon name="award" :size="16" /> Early access
          </router-link>
        </div>
        <p class="store-wait">Google Play &amp; App Store listings awaiting approval.</p>
      </div>

      <div v-for="col in columns" :key="col.title" class="f-col">
        <h4>{{ col.title }}</h4>
        <ul>
          <li v-for="l in col.links" :key="l.to">
            <router-link :to="l.to">{{ l.label }}</router-link>
          </li>
        </ul>
      </div>

      <div class="f-col">
        <h4>Contact</h4>
        <ul class="contact">
          <li><AppIcon name="pin" :size="16" /> {{ company.address }}</li>
          <li>
            <AppIcon name="mail" :size="16" />
            <a :href="`mailto:${company.email}`">{{ company.email }}</a>
          </li>
          <li><AppIcon name="globe" :size="16" /> swychpe.com · swychr.com</li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div class="disclosure">
        <AppIcon name="shield-check" :size="18" />
        <p>
          SwychPe is a product of {{ company.legalName }} ({{ company.shortLegal }}), a cooperative financial
          institution affiliated with the Cameroon Cooperative Credit Union League (CamCCUL) and operating under the
          microfinance regulations of the Central African Banking Commission (COBAC). Fees, eligibility and limits
          are shown in the app before you confirm any transaction. Features marked "coming soon" are not yet
          available.
        </p>
      </div>
    </div>

    <div class="f-bottom">
      <div class="container f-bottom-inner">
        <p>© {{ year }} {{ company.shortLegal }}. All rights reserved.</p>
        <div class="legal">
          <router-link to="/terms">Terms & Conditions</router-link>
          <router-link to="/privacy">Privacy Policy</router-link>
          <router-link to="/delete-account">Delete account</router-link>
          <router-link to="/delete-data">Delete data</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import AppIcon from './AppIcon.vue'
import { company } from '../data/site'
import wordmarkWhite from '../assets/brand/wordmark-white.png'

const year = new Date().getFullYear()

const columns = [
  {
    title: 'Personal',
    links: [
      { to: '/accounts', label: 'Accounts' },
      { to: '/pay', label: 'Pay & transfer' },
      { to: '/save', label: 'Save' },
      { to: '/borrow', label: 'Borrow' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About us' },
      { to: '/business', label: 'Business' },
      { to: '/security', label: 'Security' },
      { to: '/help', label: 'Help centre' },
    ],
  },
]
</script>

<style scoped>
.footer {
  background: var(--brand-ink);
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.92rem;
  padding-top: 72px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.4fr;
  gap: 40px;
  padding-bottom: 48px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  margin-bottom: 16px;
}
.brand-logo {
  height: 36px;
  width: auto;
}
.f-brand p {
  max-width: 340px;
}
.store-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
}
.store-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
}
.store-chip:hover {
  background: rgba(255, 255, 255, 0.08);
}
.store-wait {
  margin: 12px 0 0;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}
.f-col h4 {
  color: #fff;
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.f-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}
.f-col a {
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
}
.f-col a:hover {
  color: #fff;
}
.contact li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}
.contact svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--gold);
}
.disclosure {
  display: flex;
  gap: 14px;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.8rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.55);
}
.disclosure svg {
  flex-shrink: 0;
  color: var(--gold);
}
.disclosure p {
  margin: 0;
}
.f-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 0;
  font-size: 0.82rem;
}
.f-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.f-bottom p {
  margin: 0;
}
.legal {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.legal a {
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
}
.legal a:hover {
  color: #fff;
}
@media (max-width: 960px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
  .f-brand {
    grid-column: 1 / -1;
  }
}
@media (max-width: 520px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
