<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="hero-section bg-soft">
      <div class="container">
        <h1 class="hero-title">Powerful Financial Tools for Modern Businesses</h1>
        <p class="hero-subtitle">Accept QR code payments, disburse staff salaries in bulk, and expand your business with SwychPe Agent Kiosks.</p>
      </div>
    </section>

    <main class="content-section bg-white">
      <div class="container grid-two">
        <div class="biz-card">
          <h3>Merchant QR Code Payments</h3>
          <p>Print your unique business QR code and receive instant payments from customers with clear accounting logs.</p>
        </div>
        <div class="biz-card">
          <h3>Bulk Payroll & Supplier Payments</h3>
          <p>Send bulk salary payouts or supplier transfers to hundreds of Mobile Money numbers or SwychPe wallets in one click.</p>
        </div>
        <div class="biz-card">
          <h3>Become a SwychPe Agent Point</h3>
          <p>Turn your store into an official cash deposit and withdrawal kiosk and earn lucrative commissions on every transaction.</p>
        </div>
        <div class="biz-card">
          <h3>SME Working Capital</h3>
          <p>Borrow against your daily sales history to restock inventory ahead of busy trade seasons.</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.page-wrapper { font-family: "Bricolage Grotesque", "DM Sans", sans-serif; min-height: 100vh; }
.container { max-width: 1140px; margin: 0 auto; padding: 0 24px; }
.bg-soft { background-color: #f5f3f8; }
.hero-section { padding: 60px 0; }
.hero-title { font-size: 2.8rem; font-weight: 800; color: #1a0826; margin-bottom: 12px; }
.hero-subtitle { font-size: 1.05rem; color: #6b6b6b; max-width: 680px; }
.content-section { padding: 60px 0 80px 0; background-color: #ffffff; }
.grid-two { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.biz-card { background: #ffffff; border-radius: 20px; padding: 32px 28px; border: 1px solid #eae5f2; box-shadow: 0 4px 15px rgba(0,0,0,0.02); }
.biz-card h3 { font-size: 1.2rem; font-weight: 800; color: #9218BB; margin-bottom: 8px; }
.biz-card p { font-size: 0.92rem; color: #666; line-height: 1.6; margin: 0; }
@media (max-width: 768px) { .grid-two { grid-template-columns: 1fr; } .hero-title { font-size: 2rem; } }
</style>