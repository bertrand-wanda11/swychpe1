<template>
  <div class="page-wrapper">
    <!-- Reusable Navbar -->
    <Navbar />

    <!-- Hero Header Banner -->
    <section class="hero-section">
      <div class="hero-container">
        <h1 class="hero-title">How It Works</h1>
        <p class="hero-subtitle">
          Sending money with SwychPe is simple, fast and secure. Just follow these easy steps.
        </p>
      </div>
    </section>

    <!-- The Process (4-Step Cards) -->
    <section class="process-section">
      <div class="process-container">
        <div class="section-header">
          <h2 class="section-title">The Process</h2>
          <p class="section-subtitle">Four steps from signup to delivery.</p>
        </div>

        <div class="steps-grid">
          <div v-for="step in steps" :key="step.number" class="step-card">
            <div class="step-badge">{{ step.number }}</div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cash in Hand Feature Card Section -->
    <section class="feature-section">
      <div class="feature-container">
        <div class="feature-card-wrapper">
          <div class="feature-image-col">
            <img 
              src="@/assets/images/download (5).jpeg" 
              alt="Cash withdrawal at ATM" 
              class="feature-img"
            />
            <span class="badge-tag">✓ Withdrawal successful</span>
          </div>

          <div class="feature-content-col">
            <h2 class="feature-title">Cash in hand, when it matters</h2>
            <p class="feature-description">
              Your recipient gets paid and can access their money quickly wherever they are.
            </p>
            <div class="pill-tags">
              <span class="pill">Fast payout</span>
              <span class="pill">Real-time tracking</span>
              <span class="pill">Trusted partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Supported Countries Section -->
    <section class="countries-section">
      <div class="countries-container">
        <h2 class="countries-title">Supported Countries</h2>
        <p class="countries-subtitle">Send money to 50+ countries around the world.</p>

        <div class="country-pills">
          <span class="country-pill">Kenya</span>
          <span class="country-pill">Uganda</span>
          <span class="country-pill">Tanzania</span>
          <span class="country-pill">USA</span>
          <span class="country-pill">UK</span>
          <span class="country-pill">Canada</span>
          <span class="country-pill highlight">+50 more</span>
        </div>
      </div>
    </section>

    <!-- CTA Banner Section -->
    <section class="cta-banner-section">
      <div class="cta-container">
        <h2 class="cta-title">It's that easy!</h2>
        <p class="cta-subtitle">Your money, your way. Anytime, Anywhere.</p>
        <router-link to="/Started" class="btn-cta-white">Get Started</router-link>
      </div>
    </section>

    <!-- Reusable Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const steps = ref([
  {
    number: 1,
    title: 'Create your account',
    desc: 'Sign up in minutes with your email or phone number.'
  },
  {
    number: 2,
    title: 'Add Beneficiary',
    desc: "Enter your recipient's details."
  },
  {
    number: 3,
    title: 'Make Payment',
    desc: 'Choose your preferred payment method and confirm the transfer.'
  },
  {
    number: 4,
    title: 'Track & Receive',
    desc: 'Follow live updates until your recipient is paid.'
  }
])
</script>

<style scoped>
/* Page Layout Wrapper */
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #5c1180; /* Purple background for header */
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  box-sizing: border-box;
}

.page-wrapper > * {
  width: 100%;
}

/* Hero Section */
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

/* Process Section */
.process-section {
  background-color: #ffffff;
  padding: 60px 24px 40px 24px;
  box-sizing: border-box;
}

.process-container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 36px;
  text-align: left;
}

.section-title {
  color: #1e1b4b;
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0 0 6px 0;
  letter-spacing: -0.4px;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 0.9rem;
  margin: 0;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.step-card {
  background-color: #ffffff;
  border: 1px solid #f1f5f9;
  border-radius: 16px;
  padding: 28px 20px;
  text-align: left;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.step-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}

.step-badge {
  width: 32px;
  height: 32px;
  background-color: #5c1180;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 18px;
}

.step-title {
  color: #1e1b4b;
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.step-desc {
  color: #64748b;
  font-size: 0.82rem;
  line-height: 1.5;
  margin: 0;
}

/* Feature Card Section */
.feature-section {
  background-color: #ffffff;
  padding: 40px 24px 60px 24px;
  box-sizing: border-box;
}

.feature-container {
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

.feature-image-col {
  position: relative;
  flex: 0 0 42%;
  border-radius: 16px;
  overflow: hidden;
}

.feature-img {
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
  color: #16a34a;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 999px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.feature-content-col {
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

/* Supported Countries Section */
.countries-section {
  background-color: #ffffff;
  padding: 20px 24px 70px 24px;
  box-sizing: border-box;
}

.countries-container {
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
}

.countries-title {
  color: #1e1b4b;
  font-size: 1.75rem;
  font-weight: 800;
  margin: 0 0 6px 0;
  letter-spacing: -0.4px;
}

.countries-subtitle {
  color: #94a3b8;
  font-size: 0.88rem;
  margin: 0 0 24px 0;
}

.country-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.country-pill {
  background-color: #f3e8ff;
  color: #5c1180;
  font-size: 0.82rem;
  font-weight: 700;
  padding: 8px 18px;
  border-radius: 999px;
}

.country-pill.highlight {
  background-color: #e9d5ff;
}

/* CTA Banner Section */
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

/* ==========================================================================
   Full Responsive Media Queries
   ========================================================================== */

/* Large Desktops (1440px and up) */
@media (min-width: 1440px) {
  .hero-section {
    padding: 80px 32px 90px 32px;
  }

  .hero-title {
    font-size: 3.2rem;
  }

  .process-container, .feature-container, .countries-container {
    max-width: 1100px;
  }
}

/* Tablets & Small Laptops (768px to 1023px) */
@media (max-width: 1023px) and (min-width: 768px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .feature-card-wrapper {
    gap: 24px;
    padding: 20px;
  }

  .feature-img {
    height: 240px;
  }
}

/* Mobile Devices (Under 768px) */
@media (max-width: 767px) {
  .hero-section {
    padding: 45px 18px 50px 18px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .steps-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .feature-card-wrapper {
    flex-direction: column;
    padding: 18px;
    gap: 20px;
  }

  .feature-image-col {
    width: 100%;
    flex: none;
  }

  .feature-img {
    height: 220px;
  }

  .cta-banner-section {
    padding: 50px 18px;
  }

  .cta-title {
    font-size: 1.6rem;
  }
}

/* Small Smartphone Screens (480px and down) */
@media (max-width: 480px) {
  .hero-title {
    font-size: 1.7rem;
  }

  .country-pills {
    gap: 8px;
  }

  .country-pill {
    font-size: 0.75rem;
    padding: 6px 14px;
  }
}
</style>