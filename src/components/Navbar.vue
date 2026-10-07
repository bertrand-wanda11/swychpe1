<template>
  <header class="navbar-container">
    <div class="logo-area">
      <div class="cube-svg-wrapper cube-logo">
        <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" stroke="#E1BEE7" stroke-width="3" opacity="0.9"/>
          <path d="M50 10 L50 50 L85 30 M50 50 L15 30 M50 50 L50 90" stroke="#E1BEE7" stroke-width="3" opacity="0.9"/>
        </svg>
      </div>
      <span class="brand-name">SwychPe</span>
    </div>


   <nav class="nav-links desktop-only">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
      <router-link to="/how-it-works" class="nav-item">How it Works</router-link>
      <router-link to="/services" class="nav-item">Services</router-link>
      <router-link to="/faq" class="nav-item">FAQ</router-link>
    </nav>

    
    <div class="nav-actions">
  <router-link to="/login" class="btn-login desktop-only">Login</router-link>
 <router-link to="/started" class="btn-get-started">Get Started</router-link>

   
      <button class="hamburger-btn" @click="isMobileMenuOpen = !isMobileMenuOpen" aria-label="Toggle navigation">
        <span v-if="!isMobileMenuOpen">☰</span>
        <span v-else>✕</span> 
      </button>
    </div>


    <transition name="slide-fade">
      <div v-if="isMobileMenuOpen" class="mobile-nav-drawer">
        <nav class="mobile-nav-links">
          <router-link to="/" class="mobile-nav-item" @click="isMobileMenuOpen = false">Home</router-link>
          <router-link to="/about" class="mobile-nav-item" @click="isMobileMenuOpen = false">About</router-link>
          <router-link to="/how-it-works" class="mobile-nav-item" @click="isMobileMenuOpen = false">How it Works</router-link>
          <router-link to="/services" class="mobile-nav-item" @click="isMobileMenuOpen = false">Services</router-link>
          <router-link to="/faq" class="mobile-nav-item" @click="isMobileMenuOpen = false">FAQ</router-link>
          <router-link to="/login" class="mobile-nav-item highlight-link" @click="isMobileMenuOpen = false">Login</router-link>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>

<style scoped>
.navbar-container {
  max-width: 1280px;
  margin: 0 auto 3rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 20;
  box-sizing: border-box;
  padding: 2rem 2rem 1.25rem 2rem; 

}

.logo-area { display: flex; align-items: center; font-size: 1.6rem; font-weight: 800; color: #ffffff; }

.cube-svg-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  margin-right: 0.6rem;
  animation: spinCube 10s linear infinite;
}

@keyframes spinCube {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.nav-links { display: flex; gap: 2.2rem; }
.nav-item { color: rgba(255, 255, 255, 0.75); text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: color 0.25s ease; }
.nav-item:hover, .nav-item.active { color: #ffffff; }
.nav-actions { display: flex; align-items: center; gap: 1rem; }

.btn-login { background: transparent; border: none; color: #ffffff; font-family: 'Montserrat',
 sans-serif; text-decoration: none;font-size: 0.95rem; font-weight: 600; cursor: pointer; padding: 0.6rem 1.2rem; }
.btn-get-started { background: #ffffff; color: #180327; border: none; border-radius: 30px;
 font-family: 'Montserrat', sans-serif; font-size: 0.95rem; font-weight: 700; padding: 0.7rem 1.6rem; cursor: pointer;text-decoration: none; }

.hamburger-btn {
  display: none;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 1.4rem;
  border-radius: 8px;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  line-height: 1;
}

.mobile-nav-drawer {
  position: absolute;
  top: 80px;
  left: 1.25rem;
  right: 1.25rem;
  background: #25073c;
  border: 1px solid rgba(225, 190, 231, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  z-index: 30;
}

.mobile-nav-links { display: flex; flex-direction: column; gap: 1.2rem; text-align: center; }
.mobile-nav-item { color: rgba(255, 255, 255, 0.85); text-decoration: none; font-size: 1.1rem; font-weight: 600; }
.mobile-nav-item.active, .mobile-nav-item:hover { color: #E1BEE7; }
.mobile-nav-item.highlight-link { color: #ffffff; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 0.8rem; }

.slide-fade-enter-active, .slide-fade-leave-active { transition: all 0.3s ease; }
.slide-fade-enter-from, .slide-fade-leave-to { transform: translateY(-10px); opacity: 0; }

@media (max-width: 768px) {
  .desktop-only { display: none !important; }
  .hamburger-btn { display: block; }
}
</style>