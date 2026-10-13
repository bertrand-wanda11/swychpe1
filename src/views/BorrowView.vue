<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="hero-section bg-dark text-white">
      <div class="container">
        <h1 class="hero-title text-white">SwychCredit — Fast Loans When You Need Them</h1>
        <p class="hero-subtitle">Get instant payday advances, SME working capital, and device financing directly credited to your wallet.</p>
      </div>
    </section>

    <main class="content-section bg-white">
      <div class="container grid-three">
        <div class="loan-card">
          <h3>Payday Advances</h3>
          <p class="desc">Cover urgent medical bills, rent, or school fees before salary day. Flexible repayment options.</p>
          <span class="badge">Instant Approval</span>
        </div>
        <div class="loan-card">
          <h3>Device Financing</h3>
          <p class="desc">Get the latest smartphone or tablet for work and spread payments across small monthly installments.</p>
          <span class="badge">Low Interest</span>
        </div>
        <div class="loan-card">
          <h3>SME Working Capital</h3>
          <p class="desc">Restock shop inventory or fulfill supplier orders quickly based on your wallet sales history.</p>
          <span class="badge">Business Growth</span>
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
.bg-dark { background-color: #1a052c; }
.text-white { color: #ffffff !important; }
.hero-section { padding: 60px 0; }
.hero-title { font-size: 2.8rem; font-weight: 800; margin-bottom: 12px; }
.hero-subtitle { font-size: 1.05rem; color: #d1c4e9; max-width: 680px; }
.content-section { padding: 60px 0 80px 0; background-color: #ffffff; }
.grid-three { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.loan-card { background: #f8f6fc; border-radius: 20px; padding: 32px 24px; border: 1px solid #eae5f2; }
.loan-card h3 { font-size: 1.2rem; font-weight: 800; color: #1a0826; margin-bottom: 10px; }
.loan-card .desc { font-size: 0.9rem; color: #666; line-height: 1.5; margin-bottom: 20px; }
.badge { background: #9218BB; color: #ffffff; font-size: 0.75rem; font-weight: 700; padding: 6px 14px; border-radius: 999px; }
@media (max-width: 768px) { .grid-three { grid-template-columns: 1fr; } .hero-title { font-size: 2rem; } }
</style>