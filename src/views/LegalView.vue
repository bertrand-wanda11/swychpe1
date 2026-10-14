<template>
  <div class="page-wrapper">
  
    <Navbar />

   
    <section class="regulatory-header-section bg-soft">
      <div class="container">
        <h1 class="page-title">Regulatory & Legal Notice</h1>
        <p class="page-subtitle">
          Official compliance declaration, licensing details, and institutional oversight framework for SwychPe.
        </p>
        <div class="meta-badges">
          <span class="badge badge-purple">SWYCO COOP-BOD</span>
          <span class="badge badge-gold">COBAC & CAMCCUL Supervised</span>
          <span class="badge badge-outline">Category 1 Microfinance</span>
        </div>
      </div>
    </section>

    
    <main class="regulatory-content-section bg-white">
      <div class="container main-container">
        
        <div class="declaration-card">
          <div class="card-badge-icon">🛡</div>
          <h2>Brand & Operating Entity Declaration</h2>
          <p>
            <strong>SwychPe</strong> is a financial technology brand and mobile platform provided by 
            <strong>Swychr Cooperative Society with Board of Directors (SWYCO COOP-BOD)</strong>.
          </p>
        </div>

      
        <div class="legal-details-grid">
          <div class="detail-card">
            <div class="card-header">
              <span class="icon">🏛</span>
              <h3>Legal Entity</h3>
            </div>
            <p class="card-value">Swychr Cooperative Society with Board of Directors (SWYCO COOP-BOD)</p>
          </div>

          <div class="detail-card">
            <div class="card-header">
              <span class="icon">📋</span>
              <h3>Registration / Matriculation No.</h3>
            </div>
            <p class="card-value code-font">26/022/CMR/SW/53/282/CCA/036004/036004000</p>
          </div>

          <div class="detail-card">
            <div class="card-header">
              <span class="icon">⚖️</span>
              <h3>Regulatory Supervision</h3>
            </div>
            <p class="card-value">
              Operating as a Category 1 Microfinance Cooperative being supervised by the 
              <strong>Cameroon Cooperative Credit Union League (CAMCCUL)</strong> under 
              <em>Official Letter Ref. No.: 141.1/08/26 of 10th July 2026</em>.
            </p>
          </div>

          <div class="detail-card">
            <div class="card-header">
              <span class="icon">🔍</span>
              <h3>Regulatory Authority</h3>
            </div>
            <p class="card-value">
              Under the supervisory framework of the 
              <strong>Central African Banking Commission (COBAC)</strong> and the 
              <strong>Ministry of Finance (MINFI)</strong>, Cameroon.
            </p>
          </div>
        </div>

         
        <div class="protection-box">
          <h3>Fund & Deposit Administration Guarantee</h3>
          <p>
            All funds, user deposits, account balances, and micro-credit facilities made available through the SwychPe mobile application are held and administered directly by <strong>SWYCO COOP-BOD</strong> in full compliance with Cameroonian microfinance cooperative banking regulations.
          </p>
        </div>

        
        <div class="contact-card">
          <h3>Official Headquarters & Support</h3>
          <p><strong>Regional Office:</strong> SWYCO COOP-BOD Regional Office, Mayor Street, Molyko, Buea, Cameroon</p>
          <p><strong>Official Email:</strong> <a href="mailto:reachswyco@swychr.com">reachswyco@swychr.com</a></p>
          <p><strong>Web Portals:</strong> <a href="https://www.swychpe.com" target="_blank" rel="noopener">swychpe.com</a> | <a href="https://www.swychr.com" target="_blank" rel="noopener">swychr.com</a></p>
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
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f3f8;
  color: #1a0826;
  font-family: "Bricolage Grotesque", "DM Sans", sans-serif;
  box-sizing: border-box;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
}

.bg-soft { background-color: #f5f3f8; }
.bg-white { background-color: #ffffff; }

 
.regulatory-header-section {
  padding: 60px 0 40px 0;
  border-bottom: 1px solid #eae5f2;
}

.page-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #1a0826;
  letter-spacing: -0.8px;
  margin-bottom: 12px;
}

.page-subtitle {
  font-size: 1.05rem;
  color: #6b6b6b;
  line-height: 1.6;
  max-width: 720px;
  margin-bottom: 24px;
}

.meta-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.badge {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 999px;
}

.badge-purple {
  background-color: #9218BB;
  color: #ffffff;
}

.badge-gold {
  background-color: #fbc02d;
  color: #1a0826;
}

.badge-outline {
  background-color: #ffffff;
  color: #9218BB;
  border: 1px solid #9218BB;
}

 
.regulatory-content-section {
  padding: 50px 0 80px 0;
}

.declaration-card {
  background-color: #fbf9fc;
  border-left: 4px solid #9218BB;
  border-radius: 0 16px 16px 0;
  padding: 28px 32px;
  margin-bottom: 40px;
}

.card-badge-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.declaration-card h2 {
  font-size: 1.3rem;
  font-weight: 800;
  color: #9218BB;
  margin-bottom: 8px;
}

.declaration-card p {
  font-size: 1.02rem;
  line-height: 1.6;
  color: #333;
  margin: 0;
}

 
.legal-details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.detail-card {
  background-color: #ffffff;
  border: 1px solid #eae5f2;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.card-header .icon {
  font-size: 1.2rem;
}

.card-header h3 {
  font-size: 0.95rem;
  font-weight: 800;
  color: #9218BB;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.card-value {
  font-size: 0.92rem;
  line-height: 1.6;
  color: #4a4a4a;
  margin: 0;
}

.code-font {
  font-family: monospace;
  font-weight: 700;
  color: #1a0826;
  background-color: #f5f3f8;
  padding: 6px 10px;
  border-radius: 6px;
  display: inline-block;
  word-break: break-all;
}

 
.protection-box {
  background-color: #1a052c;
  color: #ffffff;
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 40px;
}

.protection-box h3 {
  color: #fbc02d;
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.protection-box p {
  color: #d1c4e9;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}
 
.contact-card {
  background-color: #f8f6fc;
  border: 1px solid #eae5f2;
  border-radius: 20px;
  padding: 28px;
}

.contact-card h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: #9218BB;
  margin-bottom: 12px;
}

.contact-card p {
  font-size: 0.92rem;
  margin: 6px 0;
  color: #4a4a4a;
}

.contact-card a {
  color: #9218BB;
  font-weight: 700;
  text-decoration: none;
}

.contact-card a:hover {
  text-decoration: underline;
}

 
@media (max-width: 768px) {
  .legal-details-grid {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 2rem;
  }

  .declaration-card, .protection-box, .contact-card {
    padding: 20px;
  }
}
</style>