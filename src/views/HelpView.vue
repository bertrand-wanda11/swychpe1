<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="hero-section bg-soft">
      <div class="container">
        <h1 class="hero-title">How Can We Help You?</h1>
        <p class="hero-subtitle">Get support 24/7 via in-app live chat, email, or visit our regional office in Buea.</p>
      </div>
    </section>

    <main class="content-section bg-white">
      <div class="container grid-two">
        <div class="help-box">
          <h3>Headquarters Location</h3>
          <p>SWYCO COOP-BOD Regional Office</p>
          <p class="detail">Mayor Street, Molyko, Buea, Cameroon</p>
        </div>
        <div class="help-box">
          <h3>Customer Support Channels</h3>
          <p>Email: <a href="mailto:reachswyco@swychr.com">reachswyco@swychr.com</a></p>
          <p class="detail">In-app live chat available 24 hours daily.</p>
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
.help-box { background: #f8f6fc; border-radius: 20px; padding: 32px 28px; border: 1px solid #eae5f2; }
.help-box h3 { font-size: 1.25rem; font-weight: 800; color: #9218BB; margin-bottom: 10px; }
.help-box p { font-size: 0.95rem; color: #1a0826; margin: 4px 0; }
.help-box .detail { color: #666; font-size: 0.9rem; }
.help-box a { color: #9218BB; font-weight: 700; text-decoration: none; }
@media (max-width: 768px) { .grid-two { grid-template-columns: 1fr; } .hero-title { font-size: 2rem; } }
</style>