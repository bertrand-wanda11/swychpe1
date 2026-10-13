<template>
  <header class="navbar">
    <div class="nav-container">
      <router-link to="/" class="brand-logo" @click="isMobileMenuOpen = false">
        SwychPe
      </router-link>

      <!-- Desktop Navigation Links -->
      <nav class="nav-menu desktop-only">
        <a href="#pay" class="nav-link">Pay</a>
        <a href="#borrow" class="nav-link">Borrow</a>
        <a href="#save" class="nav-link">Save</a>
        <a href="#business" class="nav-link">Business</a>
        <a href="#security" class="nav-link">Security</a>
        <a href="#help" class="nav-link">Help</a>
      </nav>

      <!-- Right Action & Hamburger Button -->
      <div class="nav-actions">
        <router-link to="/Started" class="btn-app-purple desktop-only">
          Get the app
        </router-link>

        <!-- Mobile Hamburger Toggle Button -->
        <button 
          class="hamburger-btn mobile-only" 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <span v-if="!isMobileMenuOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
    </div>

    <!-- Mobile Slide-Down Drawer Menu -->
    <transition name="slide-fade">
      <div v-if="isMobileMenuOpen" class="mobile-drawer mobile-only">
        <a href="#pay" class="mobile-nav-link" @click="isMobileMenuOpen = false">Pay</a>
        <a href="#borrow" class="mobile-nav-link" @click="isMobileMenuOpen = false">Borrow</a>
        <a href="#save" class="mobile-nav-link" @click="isMobileMenuOpen = false">Save</a>
        <a href="#business" class="mobile-nav-link" @click="isMobileMenuOpen = false">Business</a>
        <a href="#security" class="mobile-nav-link" @click="isMobileMenuOpen = false">Security</a>
        <a href="#help" class="mobile-nav-link" @click="isMobileMenuOpen = false">Help</a>
        <router-link to="/Started" class="btn-app-mobile" @click="isMobileMenuOpen = false">
          Get the app
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: #ffffff;
  padding: 18px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
}

.nav-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
}

.brand-logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: #7b1fa2;
  text-decoration: none;
  letter-spacing: -0.5px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-link {
  color: #4a4a4a;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #7b1fa2;
}

.btn-app-purple {
  background-color: #7b1fa2;
  color: #ffffff;
  padding: 10px 24px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  transition: opacity 0.2s;
}

.btn-app-purple:hover {
  opacity: 0.9;
}

/* Hamburger Icon Styling */
.hamburger-btn {
  background: transparent;
  border: none;
  font-size: 1.6rem;
  color: #7b1fa2;
  cursor: pointer;
  padding: 4px 8px;
  display: none;
}

/* Mobile Drawer Menu */
.mobile-drawer {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-top: 1px solid #f0e6f7;
  padding: 20px 24px;
  gap: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.mobile-nav-link {
  color: #1a0826;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  padding: 6px 0;
}

.btn-app-mobile {
  display: block;
  text-align: center;
  background-color: #7b1fa2;
  color: #ffffff;
  padding: 12px;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  margin-top: 8px;
}

/* Vue Slide Transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.25s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* ==========================================================================
   Responsive Display Classes
   ========================================================================== */
@media (min-width: 769px) {
  .mobile-only {
    display: none !important;
  }
}

@media (max-width: 768px) {
  .desktop-only {
    display: none !important;
  }

  .hamburger-btn {
    display: block;
  }
}
</style>