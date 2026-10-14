<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="hero-section bg-soft">
      <div class="container">
        <h1 class="hero-title">Everyday Payments Made Effortless</h1>
        <p class="hero-subtitle">Scan QR codes, recharge airtime, pay utility bills, and send free transfers directly from your phone.</p>
      </div>
    </section>

    <main class="content-section bg-white">
      <div class="container grid-cards">
        <div class="card card-purple">
          <div class="icon">⬚</div>
          <h3>Scan & Pay</h3>
          <p>Instantly pay merchants, shop stalls, and taxi drivers by scanning their SwychPe QR codes.</p>
        </div>
        <div class="card">
          <div class="icon text-purple">📱</div>
          <h3>Airtime & Data Top-up</h3>
          <p>Instant airtime refills for MTN, Orange, Camtel, and Nexttel numbers with zero fee.</p>
        </div>
        <div class="card">
          <div class="icon text-purple">⚡</div>
          <h3>Utility Bills</h3>
          <p>Pay ENEO electricity, CamWater, and internet bills securely without leaving home.</p>
        </div>
        <div class="card">
          <div class="icon text-purple">📺</div>
          <h3>TV & Streaming</h3>
          <p>Renew Canal+, DSTV, and StarTimes subscriptions instantly with automated receipt generation.</p>
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
.page-wrapper { font-family: "Bricolage Grotesque", "DM Sans", sans-serif; background-color: #ffffff; min-height: 100vh; }
.container { max-width: 1140px; margin: 0 auto; padding: 0 24px; }
.bg-soft { background-color: #f5f3f8; }
.hero-section { padding: 60px 0; }
.hero-title { font-size: 2.8rem; font-weight: 800; color: #1a0826; margin-bottom: 12px; }
.hero-subtitle { font-size: 1.05rem; color: #6b6b6b; max-width: 680px; }
.content-section { padding: 60px 0 80px 0; }
.grid-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.card { border-radius: 20px; padding: 32px; background: #f8f6fc; border: 1px solid #eae5f2; }
.card-purple { background: #9218BB; color: #ffffff; }
.card-purple h3, .card-purple p { color: #ffffff; }
.icon { font-size: 1.8rem; margin-bottom: 16px; }
.text-purple { color: #9218BB; }
.card h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 8px; }
.card p { font-size: 0.92rem; color: #fff; line-height: 1.6; margin: 0; }
@media (max-width: 768px) { .grid-cards { grid-template-columns: 1fr; } .hero-title { font-size: 2rem; } }
</style>