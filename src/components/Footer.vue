<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <div class="footer-brand">SwychPe</div>
        <p>Digital microfinance banking for Cameroon, operated by Swychr Cooperative Society with Board of Directors.</p>
        
        <div class="social-icons">
          <a href="https://x.com" target="_blank" rel="noopener" aria-label="X (Twitter)" class="social-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          
          <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.48 1.48 0 1 0 0 2.96 1.48 1.48 0 0 0 0-2.96z"/>
            </svg>
          </a>
          
          <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" class="social-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.61.76-1.61 1.54V12h2.72l-.43 3h-2.29v6.8c4.56-.93 8-4.96 8-9.8z"/>
            </svg>
          </a>
    
          <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" class="social-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>

    
      <div class="footer-center">
        <h4 class="notice-title">Legal & Regulatory Notice</h4>
        <p class="notice-text">
          SwychPe is operated by <strong>Swychr Cooperative Society with Board of Directors (SWYCO COOP-BOD)</strong>, a Category 1 Microfinance Cooperative regulated under the supervision of <strong>COBAC</strong> and <strong>CAMCCUL</strong> in the Republic of Cameroon.
        </p>
      </div>

      <div class="footer-right">
        <p>Mayor Street, Molyko, Buea, Cameroon</p>
        <p><a href="mailto:reachswyco@swychr.com">reachswyco@swychr.com</a></p>
        <p><a href="https://swychpe.com" target="_blank" rel="noopener">swychpe.com</a></p>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-container">
        <p>© {{ new Date().getFullYear() }} SwychPe. All rights reserved.</p>
        <div class="legal-links">
          <router-link to="/terms">Terms & Conditions</router-link>
          <span class="divider">•</span>
          <router-link to="/privacy">Privacy Policy</router-link>
          <span class="divider">•</span>
          <router-link to="/legal" class="regulatory-link">Regulatory & Legal Notice</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #0f031a;
  color: rgba(255, 255, 255, 0.7);
  padding: 60px 0 0 0;
  font-size: 0.85rem;
  box-sizing: border-box;
  font-family: "Bricolage Grotesque", "DM Sans", sans-serif;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 40px 24px;
  display: grid;
  grid-template-columns: 1.2fr 1.3fr 1fr;
  gap: 32px;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
}

.footer-brand {
  font-size: 1.4rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 12px;
}

.footer-left p {
  max-width: 360px;
  line-height: 1.6;
  margin: 0 0 20px 0;
}

.social-icons {
  display: flex;
  gap: 14px;
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
}

.social-link:hover {
  background-color: #9218BB;
  color: #ffffff;
  transform: translateY(-2px);
}


.footer-center {
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 16px 20px;
}

.notice-title {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  letter-spacing: -0.2px;
}

.notice-text {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.65);
}

.notice-text strong {
  color: rgba(255, 255, 255, 0.9);
}

.footer-right p {
  margin: 4px 0;
  text-align: right;
}

.footer-right a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
}

.footer-right a:hover {
  text-decoration: underline;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 20px 0;
  background-color: #08010f;
}

.footer-bottom-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}

.footer-bottom-container p {
  margin: 0;
}

.legal-links {
  display: flex;
  align-items: center;
  gap: 12px;
}

.legal-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s ease;
}

.legal-links a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.divider {
  color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 992px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .footer-right p {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .footer-bottom-container {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>