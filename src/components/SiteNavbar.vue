<template>
  <div class="topbar">
    <div class="container topbar-inner">
      <span class="topbar-reg">
        <AppIcon name="shield-check" :size="14" />
        Cooperative financial institution · CamCCUL affiliated · COBAC regulated
      </span>
      <div class="topbar-links">
        <a :href="`mailto:${company.email}`">{{ company.email }}</a>
        <router-link to="/help">Support</router-link>
      </div>
    </div>
  </div>

  <header class="navbar" :class="{ scrolled }">
    <div class="container nav-inner">
      <router-link to="/" class="brand" aria-label="SwychPe home" @click="close">
        <img :src="wordmark" alt="SwychPe" class="brand-logo" width="131" height="32" />
      </router-link>

      <nav class="nav-menu" aria-label="Main">
        <div
          v-for="group in menu"
          :key="group.label"
          class="nav-item"
          @mouseenter="openGroup = group.label"
          @mouseleave="openGroup = null"
        >
          <button
            class="nav-trigger"
            :aria-expanded="openGroup === group.label"
            @click="openGroup = openGroup === group.label ? null : group.label"
          >
            {{ group.label }}
            <AppIcon name="chevron" :size="16" />
          </button>
          <transition name="drop">
            <div v-show="openGroup === group.label" class="dropdown">
              <router-link
                v-for="item in group.items"
                :key="item.to"
                :to="item.to"
                class="drop-link"
                @click="openGroup = null"
              >
                <span class="icon-tile sm"><AppIcon :name="item.icon" :size="18" /></span>
                <span>
                  <strong>{{ item.label }}</strong>
                  <small>{{ item.desc }}</small>
                </span>
              </router-link>
            </div>
          </transition>
        </div>
        <router-link to="/security" class="nav-link">Security</router-link>
        <router-link to="/help" class="nav-link">Help</router-link>
      </nav>

      <div class="nav-actions">
        <router-link to="/early-access" class="btn btn-primary nav-cta"><span class="cta-dot" /> Get early access</router-link>
        <button
          class="burger"
          :aria-expanded="mobileOpen"
          aria-label="Toggle navigation menu"
          @click="mobileOpen = !mobileOpen"
        >
          <AppIcon :name="mobileOpen ? 'x' : 'menu'" :size="24" />
        </button>
      </div>
    </div>

    <transition name="drop">
      <div v-if="mobileOpen" class="mobile-drawer">
        <div v-for="group in menu" :key="group.label" class="m-group">
          <p class="m-label">{{ group.label }}</p>
          <router-link v-for="item in group.items" :key="item.to" :to="item.to" class="m-link" @click="close">
            <AppIcon :name="item.icon" :size="18" /> {{ item.label }}
          </router-link>
        </div>
        <div class="m-group">
          <p class="m-label">More</p>
          <router-link to="/security" class="m-link" @click="close"><AppIcon name="shield" :size="18" /> Security</router-link>
          <router-link to="/help" class="m-link" @click="close"><AppIcon name="help" :size="18" /> Help centre</router-link>
          <router-link to="/download" class="m-link" @click="close"><AppIcon name="download" :size="18" /> Download the app</router-link>
        </div>
        <router-link to="/early-access" class="btn btn-primary m-cta" @click="close">Get early access</router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from './AppIcon.vue'
import { company } from '../data/site'
import wordmark from '../assets/brand/wordmark.png'

const menu = [
  {
    label: 'Personal',
    items: [
      { to: '/accounts', label: 'Accounts', desc: 'Five tiers, from Basic to Full with Shares', icon: 'layers' },
      { to: '/pay', label: 'Pay & transfer', desc: 'Deposits, withdrawals, transfers, QR', icon: 'arrow-left-right' },
      { to: '/save', label: 'Save', desc: 'Savings, shares and investment', icon: 'target' },
      { to: '/borrow', label: 'Borrow', desc: 'Member credit through your Loan sub-account', icon: 'trending' },
    ],
  },
  {
    label: 'Business',
    items: [
      { to: '/business', label: 'Business banking', desc: 'Corporate accounts and signatories', icon: 'briefcase' },
      { to: '/accounts#compare', label: 'Compare accounts', desc: 'Fees, limits and eligibility side by side', icon: 'pie' },
    ],
  },
  {
    label: 'Company',
    items: [
      { to: '/about', label: 'About SwychPe', desc: 'Our cooperative, governance and mission', icon: 'landmark' },
      { to: '/privacy', label: 'Privacy policy', desc: 'How we handle your data', icon: 'lock' },
      { to: '/delete-account', label: 'Account deletion', desc: 'Close your account or delete data', icon: 'trash' },
    ],
  },
]

const openGroup = ref(null)
const mobileOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

const close = () => {
  mobileOpen.value = false
  openGroup.value = null
}
const onScroll = () => {
  scrolled.value = window.scrollY > 8
}

watch(() => route.fullPath, close)
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.topbar {
  background: var(--brand-ink);
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.78rem;
}
.topbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  min-height: 36px;
}
.topbar-reg {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.topbar-reg svg {
  color: var(--gold);
}
.topbar-links {
  display: flex;
  gap: 20px;
}
.topbar-links a {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
}
.topbar-links a:hover {
  color: #fff;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: saturate(180%) blur(14px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.navbar.scrolled {
  border-bottom-color: var(--line);
  box-shadow: var(--shadow-sm);
}
.nav-inner {
  height: var(--nav-h);
  display: flex;
  align-items: center;
  gap: 32px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.brand-logo {
  height: 32px;
  width: auto;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
}
.nav-item {
  position: relative;
}
.nav-trigger,
.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 10px 14px;
  border-radius: 999px;
  border: 0;
  background: none;
  font: inherit;
  font-size: 0.94rem;
  font-weight: 600;
  color: var(--ink-2);
  text-decoration: none;
  cursor: pointer;
}
.nav-trigger:hover,
.nav-link:hover,
.nav-link.router-link-active {
  color: var(--brand);
  background: var(--brand-50);
}
.nav-trigger svg {
  transition: transform 0.2s;
}
.nav-trigger[aria-expanded='true'] svg {
  transform: rotate(180deg);
}

.dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: -8px;
  width: 360px;
  padding: 10px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}
.dropdown::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
  height: 10px;
}
.drop-link {
  display: flex;
  gap: 14px;
  padding: 12px;
  border-radius: var(--radius);
  text-decoration: none;
  color: var(--ink);
}
.drop-link:hover {
  background: var(--surface-2);
}
.drop-link strong {
  display: block;
  font-size: 0.94rem;
}
.drop-link small {
  display: block;
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.4;
}
.icon-tile.sm {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  margin: 0;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}
.nav-cta {
  padding: 10px 20px;
}
.cta-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gold);
  animation: cta-pulse 1.8s infinite;
}
@keyframes cta-pulse {
  0% { box-shadow: 0 0 0 0 rgba(246, 168, 0, 0.7); }
  70%, 100% { box-shadow: 0 0 0 8px rgba(246, 168, 0, 0); }
}
.burger {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
  color: var(--ink);
  cursor: pointer;
  place-items: center;
}

.mobile-drawer {
  border-top: 1px solid var(--line);
  background: var(--surface);
  padding: 8px 16px 20px;
  max-height: calc(100vh - var(--nav-h));
  overflow-y: auto;
}
.m-group {
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}
.m-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 6px;
}
.m-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 4px;
  color: var(--ink);
  font-weight: 600;
  text-decoration: none;
}
.m-link svg {
  color: var(--brand);
}
.m-cta {
  width: 100%;
  margin-top: 16px;
}

.drop-enter-active,
.drop-leave-active {
  transition: opacity 0.16s, transform 0.16s;
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 960px) {
  .nav-menu {
    display: none;
  }
  .burger {
    display: grid;
  }
  .topbar-links {
    display: none;
  }
}
@media (max-width: 520px) {
  .nav-cta {
    display: none;
  }
  .topbar-reg {
    font-size: 0.7rem;
  }
}
</style>
