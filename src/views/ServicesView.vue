<template>
  <div class="page-wrapper">
     
    <Navbar />
 
    <section class="hero-section">
      <div class="hero-container">
        <h1 class="hero-title">Our Services</h1>
        <p class="hero-subtitle">Everything you need to send, receive, and manage your money globally.</p>
      </div>
    </section>

   
    <section class="services-grid-section">
      <div class="services-container">
        <div class="services-grid">
          <div v-for="(service, index) in services" :key="index" class="service-card">
            <h3 class="service-title">{{ service.title }}</h3>
            <p v-if="service.description" class="service-description">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
 
    <section class="business-feature-section">
      <div class="business-container">
        <div class="feature-card-wrapper">
          <div class="business-image-col">
            <img 
  src="@/assets/images/download (2).jpeg" 
  alt="Business professional using digital financial tools" 
  class="business-img"
/>
            <span class="badge-tag">Business ready</span>
          </div>

          <div class="business-content-col">
            <h2 class="feature-title">Powerful tools for modern business</h2>
            <p class="feature-description">
              Pay suppliers, manage multiple currencies, and keep every transaction organized in one place.
            </p>
            <div class="pill-tags">
              <span class="pill">Multi-currency</span>
              <span class="pill">Bulk payments</span>
              <span class="pill">Team ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section class="cta-banner-section">
      <div class="cta-container">
        <h2 class="cta-title">Ready to get started?</h2>
        <p class="cta-subtitle">Join SwychPe today and experience a simpler way to move your money.</p>
        <router-link to="/Started" class="btn-cta-white">Get Started</router-link>
      </div>
    </section>

    
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const services = ref([
  { title: 'Mobile Wallet' },
  { title: 'Multi-Currency Accounts' },
  { title: 'Bill Payments' },
  { 
    title: 'Built for business, big and small', 
    description: '' 
  },
  { 
    title: '24/7 Support', 
    description: "We're always here to help, anytime." 
  }
])
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #5c1180;  
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  box-sizing: border-box;
}

.page-wrapper > * {
  width: 100%;
}

 
.hero-section {
  background-color: #5c1180;
  padding: 60px 24px 70px 24px;
  text-align: left;
  box-sizing: border-box;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.hero-title {
  color: #ffffff;
  font-size: 2.8rem;
  font-weight: 800;
  margin: 0 0 12px 0;
  letter-spacing: -0.5px;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
}

 
.services-grid-section {
  background-color: #ffffff;
  padding: 60px 24px;
  box-sizing: border-box;
}

.services-container {
  max-width: 1000px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.service-card {
  background-color: #ffffff;
  border: 1px solid #eef2f6;
  border-radius: 16px;
  padding: 32px 24px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.service-card:hover {
  border-color: #e2e8f0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.service-title {
  color: #1e1b4b;
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
}

.service-description {
  color: #64748b;
  font-size: 0.85rem;
  margin: 8px 0 0 0;
  line-height: 1.4;
}

 
.business-feature-section {
  background-color: #ffffff;
  padding: 40px 24px 80px 24px;
  box-sizing: border-box;
}

.business-container {
  max-width: 900px;
  margin: 0 auto;
}

.feature-card-wrapper {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
  overflow: hidden;
  padding: 24px;
  gap: 40px;
}

.business-image-col {
  position: relative;
  flex: 0 0 42%;
  border-radius: 16px;
  overflow: hidden;
}

.business-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  border-radius: 16px;
}

.badge-tag {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background-color: #ffffff;
  color: #1e1b4b;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 999px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.business-content-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feature-title {
  color: #1e1b4b;
  font-size: 1.75rem;
  font-weight: 800;
  margin: 0 0 12px 0;
  letter-spacing: -0.4px;
  line-height: 1.25;
}

.feature-description {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0 0 24px 0;
}

.pill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pill {
  background-color: #f3e8ff;
  color: #5c1180;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 999px;
}

 
.cta-banner-section {
  background-color: #5c1180;
  padding: 70px 24px;
  text-align: center;
  box-sizing: border-box;
}

.cta-container {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 12px 0;
  letter-spacing: -0.4px;
}

.cta-subtitle {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.92rem;
  margin: 0 0 28px 0;
}

.btn-cta-white {
  display: inline-block;
  background-color: #ffffff;
  color: #180327;
  font-weight: 700;
  font-size: 0.92rem;
  padding: 12px 28px;
  border-radius: 999px;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.btn-cta-white:hover {
  transform: translateY(-2px);
  background-color: #f8fafc;
}

  
@media (min-width: 1440px) {
  .hero-section {
    padding: 80px 32px 90px 32px;
  }

  .hero-title {
    font-size: 3.2rem;
  }

  .services-container {
    max-width: 1100px;
  }
}

 
@media (max-width: 1023px) and (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .feature-card-wrapper {
    gap: 24px;
    padding: 20px;
  }

  .business-img {
    height: 240px;
  }

  .feature-title {
    font-size: 1.5rem;
  }
}

 
@media (max-width: 767px) {
  .hero-section {
    padding: 45px 18px 50px 18px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  .services-grid-section {
    padding: 40px 16px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .service-card {
    padding: 24px 20px;
    min-height: auto;
  }

  .feature-card-wrapper {
    flex-direction: column;
    padding: 18px;
    gap: 20px;
  }

  .business-image-col {
    width: 100%;
    flex: none;
  }

  .business-img {
    height: 220px;
  }

  .feature-title {
    font-size: 1.4rem;
  }

  .cta-banner-section {
    padding: 50px 18px;
  }

  .cta-title {
    font-size: 1.6rem;
  }
}

 
@media (max-width: 480px) {
  .hero-title {
    font-size: 1.7rem;
  }

  .pill-tags {
    gap: 8px;
  }

  .pill {
    font-size: 0.75rem;
    padding: 6px 12px;
  }
}
</style>