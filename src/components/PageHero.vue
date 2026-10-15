<template>
  <section class="page-hero bg-brand">
    <div class="container hero-inner" :class="{ split: $slots.aside }">
      <div>
        <nav v-if="crumb" class="crumbs" aria-label="Breadcrumb">
          <router-link to="/">Home</router-link>
          <AppIcon name="chevron-right" :size="14" />
          <span>{{ crumb }}</span>
        </nav>
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h1 class="h-display">{{ title }}</h1>
        <p v-if="lead" class="lead">{{ lead }}</p>
        <div v-if="$slots.default" class="hero-actions"><slot /></div>
      </div>
      <div v-if="$slots.aside" class="hero-aside"><slot name="aside" /></div>
    </div>
  </section>
</template>

<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  title: { type: String, required: true },
  eyebrow: { type: String, default: '' },
  lead: { type: String, default: '' },
  crumb: { type: String, default: '' },
})
</script>

<style scoped>
.page-hero {
  padding: 72px 0 80px;
  overflow: hidden;
}
.hero-inner > div:first-child {
  max-width: 760px;
}
.hero-inner.split {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 56px;
  align-items: center;
}
.crumbs {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 24px;
}
.crumbs a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}
.h-display {
  font-size: clamp(2.1rem, 4.4vw, 3.3rem);
}
.lead {
  max-width: 640px;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}
@media (max-width: 900px) {
  .hero-inner.split {
    grid-template-columns: 1fr;
  }
  .page-hero {
    padding: 56px 0 64px;
  }
}
</style>
