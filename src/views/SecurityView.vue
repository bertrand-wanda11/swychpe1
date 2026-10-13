<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="hero-section bg-soft">
      <div class="container">
        <h1 class="hero-title">Regulated, Safe, and Protected</h1>
        <p class="hero-subtitle">SwychPe operates as a Category 1 Microfinance Cooperative under strict CAMCCUL and COBAC regulatory oversight.</p>
      </div>
    </section>

    <main class="content-section bg-white">
      <div class="container grid-three">
        <div class="sec-card">
          <div class="icon">🛡</div>
          <h3>COBAC Regulated</h3>
          <p>Operated by Swychr Cooperative Society with Board of Directors under strict Cameroonian microfinance standards.</p>
        </div>
        <div class="sec-card">
          <div class="icon">🔒</div>
          <h3>Biometric Security</h3>
          <p>Bank-grade 256-bit SSL encryption, device lockup verification, and 24/7 automated threat monitoring.</p>
        </div>
        <div class="sec-card">
          <div class="icon">👥</div>
          <h3>Member Owned</h3>
          <p>As a cooperative microfinance bank, profits and operations exist solely to serve our member ecosystem.</p>
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
.grid-three { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.sec-card { background: #f8f6fc; border-radius: 20px; padding: 32px 24px; border: 1px solid #eae5f2; }
.icon { font-size: 2rem; color: #9218BB; margin-bottom: 12px; }
.sec-card h3 { font-size: 1.2rem; font-weight: 800; color: #1a0826; margin-bottom: 8px; }
.sec-card p { font-size: 0.9rem; color: #666; line-height: 1.6; margin: 0; }
@media (max-width: 768px) { .grid-three { grid-template-columns: 1fr; } .hero-title { font-size: 2rem; } }
</style>