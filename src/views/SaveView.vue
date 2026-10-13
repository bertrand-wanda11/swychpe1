<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="hero-section bg-soft">
      <div class="container">
        <h1 class="hero-title">Save the Way Cameroon Already Saves</h1>
        <p class="hero-subtitle">Digitize your Njangi groups, set goal-oriented target savings, and earn attractive interest with fixed deposits.</p>
      </div>
    </section>

    <main class="content-section bg-white">
      <div class="container grid-two">
        <div class="save-box">
          <div class="icon">👥</div>
          <h3>Digital Njangi Groups</h3>
          <p>Form digital contribution circles, manage payout order transparently, and eliminate ledger disputes with automated reminders.</p>
        </div>
        <div class="save-box">
          <div class="icon">🎯</div>
          <h3>Target Savings</h3>
          <p>Lock funds for school fees, rent, or emergency funds while earning interest directly into your SwychPe account.</p>
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
.save-box { background: #f8f6fc; border-radius: 20px; padding: 36px 28px; border: 1px solid #eae5f2; }
.icon { font-size: 2rem; margin-bottom: 12px; color: #9218BB; }
.save-box h3 { font-size: 1.25rem; font-weight: 800; color: #1a0826; margin-bottom: 8px; }
.save-box p { font-size: 0.92rem; color: #666; line-height: 1.6; margin: 0; }
@media (max-width: 768px) { .grid-two { grid-template-columns: 1fr; } .hero-title { font-size: 2rem; } }
</style>