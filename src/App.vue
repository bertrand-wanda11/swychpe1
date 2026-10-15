<template>
  <a href="#main" class="skip-link">Skip to content</a>
  <SiteNavbar />
  <main id="main">
    <router-view />
  </main>
  <SiteFooter />
</template>

<script setup>
import SiteNavbar from './components/SiteNavbar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<style>
.skip-link {
  position: absolute;
  left: -999px;
  top: 8px;
  z-index: 100;
  padding: 10px 16px;
  background: var(--brand);
  color: #fff;
  border-radius: 8px;
}
.skip-link:focus {
  left: 8px;
}
</style>
