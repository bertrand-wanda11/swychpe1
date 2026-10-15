<template>
  <section class="section-sm">
    <div class="container">
      <div class="cta">
        <div>
          <h2>{{ title }}</h2>
          <p>{{ text }}</p>
        </div>
        <div class="btn-row">
          <router-link to="/early-access" class="btn btn-gold">
            Get early access <AppIcon name="arrow-right" :size="18" />
          </router-link>
          <a :href="company.apkDownload" rel="noopener" class="btn btn-ghost-light">
            <AppIcon name="download" :size="18" /> Download APK
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppIcon from './AppIcon.vue'
import { company } from '../data/site'

defineProps({
  title: { type: String, default: 'Open your SwychPe account today' },
  text: { type: String, default: 'Download the app, verify your identity in minutes and start banking with a regulated cooperative.' },
})
</script>

<style scoped>
.cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 48px;
  border-radius: 28px;
  color: #fff;
  background: radial-gradient(600px 300px at 100% 0, rgba(246, 168, 0, 0.25), transparent 60%),
    linear-gradient(135deg, var(--brand-deep), var(--brand));
}
.cta h2 {
  color: #fff;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
}
.cta p {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  max-width: 520px;
}
@media (max-width: 860px) {
  .cta {
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 24px;
  }
}
</style>
