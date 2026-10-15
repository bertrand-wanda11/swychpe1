<template>
  <PageHero
    crumb="Download"
    eyebrow="Get the app"
    title="Download SwychPe"
    lead="SwychPe is awaiting approval on Google Play and the App Store. Android users can install the official app now, directly from our website."
  >
    <template #aside>
      <div class="app-tile">
        <img :src="appIcon" alt="SwychPe app icon" width="112" height="112" />
        <div>
          <strong>SwychPe</strong>
          <span>{{ company.legalName }}</span>
          <small>Finance · com.swychr.swychpe</small>
        </div>
      </div>
    </template>
    <a :href="company.apkDownload" rel="noopener" class="store primary">
      <AppIcon name="download" :size="26" />
      <span><small>ANDROID · AVAILABLE NOW</small>Download APK</span>
    </a>
    <span class="store disabled" aria-disabled="true">
      <AppIcon name="clock" :size="26" />
      <span><small>AWAITING APPROVAL</small>Google Play</span>
    </span>
    <span class="store disabled" aria-disabled="true">
      <AppIcon name="clock" :size="26" />
      <span><small>AWAITING APPROVAL</small>App Store</span>
    </span>
  </PageHero>

  <section class="section-sm status-band">
    <div class="container status-grid">
      <div v-for="s in statuses" :key="s.name" class="status">
        <span class="icon-tile" :class="{ gold: s.wait }"><AppIcon :name="s.icon" :size="20" /></span>
        <div>
          <strong>{{ s.name }}</strong>
          <span :class="s.wait ? 'badge badge-soon' : 'badge badge-live'">{{ s.state }}</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Install on Android</p>
        <h2 class="h-section">How to install the APK</h2>
        <p class="lead">
          Can't download? <a :href="company.apkDrive" target="_blank" rel="noopener">Open the file in Google Drive</a>
          and tap Download.
        </p>
      </div>
      <ol class="install">
        <li v-for="(s, i) in installSteps" :key="s.title">
          <span class="n">{{ i + 1 }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </li>
      </ol>
      <div class="notice before">
        <AppIcon name="shield-check" :size="20" />
        <p>
          Only install SwychPe from swychpe.com or, once approved, the official app stores. SwychPe staff will never
          send you the app over WhatsApp or ask for your MPIN or one-time codes.
        </p>
      </div>
    </div>
  </section>

  <section class="section bg-tint">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Before you start</p>
        <h2 class="h-section">What you'll need</h2>
      </div>
      <div class="grid grid-4">
        <div v-for="n in needs" :key="n.title" class="card">
          <span class="icon-tile"><AppIcon :name="n.icon" /></span>
          <h3>{{ n.title }}</h3>
          <p>{{ n.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <CtaBand title="No app yet? Claim your invite first" text="Verify your number and email on the web and your Basic Account is ready when you install." />
</template>

<script setup>
import AppIcon from '../components/AppIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import { company } from '../data/site'
import appIcon from '../assets/brand/icon.png'

const statuses = [
  { name: 'Android APK', state: 'Available now', icon: 'download', wait: false },
  { name: 'Google Play', state: 'Awaiting approval', icon: 'smartphone', wait: true },
  { name: 'Apple App Store', state: 'Awaiting approval', icon: 'smartphone', wait: true },
]

const installSteps = [
  { title: 'Download', text: "Tap Download APK on your Android phone. Google Drive will say it can't scan the file for viruses because it's large — tap Download anyway." },
  { title: 'Allow the install', text: 'When prompted, allow your browser or Files app to "Install unknown apps" for this install.' },
  { title: 'Install', text: 'Open the downloaded file and tap Install. Play Protect may say the app is new; choose to install anyway.' },
  { title: 'Sign in', text: 'Open SwychPe, sign in with your Cameroon mobile number and the code we text you, then set your MPIN.' },
]

const needs = [
  { icon: 'phone', title: 'Mobile number', text: 'A Cameroonian mobile number to receive your one-time verification code.' },
  { icon: 'id', title: 'ID document', text: 'A valid national ID card or passport to photograph in the app.' },
  { icon: 'camera', title: 'Camera', text: 'For document capture and the liveness selfie check.' },
  { icon: 'key', title: 'An MPIN', text: 'Choose a 4-digit MPIN that only you know to secure your account.' },
]
</script>

<style scoped>
.app-tile {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
}
.app-tile img {
  border-radius: 24px;
  box-shadow: 0 16px 40px -12px rgba(0, 0, 0, 0.5);
}
.app-tile strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: #fff;
}
.app-tile span,
.app-tile small {
  display: block;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.88rem;
}
.app-tile small {
  margin-top: 6px;
  color: var(--gold);
}
.store {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 22px;
  border-radius: 14px;
  background: #0e0618;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.15rem;
  line-height: 1.1;
}
.store small {
  display: block;
  font-size: 0.64rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  opacity: 0.75;
}
.store.primary {
  background: var(--gold);
  color: var(--brand-ink);
  border-color: var(--gold);
}
.store.primary:hover {
  background: #ffb81f;
}
.store.disabled {
  opacity: 0.6;
}
.store.disabled svg {
  color: var(--gold);
}
.status-band {
  padding: 0;
  border-bottom: 1px solid var(--line);
}
.status-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.status {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 24px 20px;
  border-right: 1px solid var(--line);
}
.status:last-child {
  border-right: 0;
}
.status .icon-tile {
  margin: 0;
}
.status strong {
  display: block;
  margin-bottom: 4px;
}
.install {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.install li {
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}
.install .n {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-bottom: 14px;
  background: var(--brand);
  color: #fff;
  font-weight: 800;
}
.install h3 {
  font-size: 1.05rem;
}
.install p {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
}
.before {
  margin-top: 24px;
}
.before p {
  margin: 0;
}
@media (max-width: 1000px) {
  .install {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 680px) {
  .status-grid,
  .install {
    grid-template-columns: 1fr;
  }
  .status {
    border-right: 0;
    border-bottom: 1px solid var(--line);
    padding: 16px 0;
  }
}
</style>
