<template>
  <div class="page-wrapper">
    <!-- Reusable Navbar Component -->
    <Navbar />

    <!-- Main Content / Download Hero -->
    <main class="download-main">
      <div class="container">
        <!-- Badge -->
        <div class="badge-wrapper">
          <span class="badge">Mobile Banking Made Easy</span>
        </div>

        <!-- Title & Subtitle -->
        <h1 class="download-title">
          Get the <span class="text-purple">SwychPe</span> App
        </h1>
        <p class="download-subtitle">
          Bank, pay, save with your Njangi group, and request instant loans right from your phone—anywhere in Cameroon. Choose your platform below to start.
        </p>

        <!-- Store Download Buttons Container -->
        <div class="store-buttons-container">
          <!-- Google Play Store Button -->
          <a 
            href="https://play.google.com/store" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-store"
          >
            <svg class="store-icon text-green" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-1.42V3.234c0-.54.218-1.033.609-1.420zm11.602 11.602l2.366 2.366-10.98 6.34 8.614-8.706zm.001-2.832L6.597 1.878l10.98 6.34-2.366 2.366zM16.63 12l2.846-1.643c.697-.402.697-1.056 0-1.458L16.63 12z"/>
            </svg>
            <div class="store-btn-text">
              <span class="store-subtitle">GET IT ON</span>
              <span class="store-title">Google Play</span>
            </div>
          </a>

          <!-- Apple App Store Button -->
          <a 
            href="https://apple.com/app-store" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-store"
          >
            <svg class="store-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.61.71-1.14 1.86-.99 2.97 1.07.08 2.15-.57 2.8-1.37"/>
            </svg>
            <div class="store-btn-text">
              <span class="store-subtitle">Download on the</span>
              <span class="store-title">App Store</span>
            </div>
          </a>
        </div>

        <!-- Features Brief Grid -->
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-num">1</div>
            <h3 class="feature-title">Instant Setup</h3>
            <p class="feature-desc">Open a fully verified account in under two minutes using just your phone number.</p>
          </div>

          <div class="feature-card">
            <div class="feature-num">2</div>
            <h3 class="feature-title">All Networks</h3>
            <p class="feature-desc">Pay bills, top up airtime, and transfer funds across all major networks seamlessly.</p>
          </div>

          <div class="feature-card">
            <div class="feature-num">3</div>
            <h3 class="feature-title">Njangi & Loans</h3>
            <p class="feature-desc">Save together with your community and access pre-approved advances instantly.</p>
          </div>
        </div>
      </div>
    </main>

    <!-- Reusable Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'DownloadView',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f8fafc;
  font-family: inherit;
}

.download-main {
  flex: 1;
  padding: 4rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.badge-wrapper {
  margin-bottom: 1.5rem;
}

.badge {
  display: inline-block;
  background-color: #f3e8ff;
  color: #7e22ce;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
}

.download-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.text-purple {
  color: #7e22ce;
}

.download-subtitle {
  font-size: 1.125rem;
  color: #475569;
  max-width: 650px;
  margin: 0 auto 2.5rem auto;
  line-height: 1.6;
}

/* Store Buttons Styles */
.store-buttons-container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 440px;
  margin: 0 auto 3.5rem auto;
}

@media (min-width: 640px) {
  .store-buttons-container {
    flex-direction: row;
    justify-content: center;
  }
  .download-title {
    font-size: 3.25rem;
  }
}

.btn-store {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #0f172a;
  color: #ffffff;
  padding: 0.875rem 1.5rem;
  border-radius: 0.85rem;
  text-decoration: none;
  box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.15);
  transition: transform 0.2s ease, background-color 0.2s ease;
  border: 1px solid #334155;
  flex: 1;
}

.btn-store:hover {
  background-color: #1e293b;
  transform: translateY(-2px);
}

.store-icon {
  width: 2rem;
  height: 2rem;
  fill: currentColor;
}

.text-green {
  color: #4ade80;
}

.store-btn-text {
  text-align: left;
}

.store-subtitle {
  display: block;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #94a3b8;
  font-weight: 600;
}

.store-title {
  display: block;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.1;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  text-align: left;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.feature-num {
  width: 2.5rem;
  height: 2.5rem;
  background-color: #f3e8ff;
  color: #7e22ce;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
}

.feature-title {
  font-weight: 700;
  color: #0f172a;
  font-size: 1rem;
  margin: 0;
}

.feature-desc {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}
</style>