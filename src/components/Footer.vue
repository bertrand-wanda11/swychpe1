<template>
  <footer class="footer-wrapper">
    <div class="footer-container">
      <div class="footer-grid">
     
        <div class="footer-col brand-col">
          <h3 class="footer-brand">SwychPe</h3>
          <p class="footer-tagline">Move Money, Build More.</p>
        </div>

      
        <div class="footer-col">
          <h4 class="footer-title">Quick Links</h4>
          <ul class="footer-links">
          <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/how-it-works">How It Works</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/faq">FAQ</router-link></li>
          </ul>
        </div>

  
        <div class="footer-col">
          <h4 class="footer-title">Account</h4>
          <ul class="footer-links">
         <li><router-link to="/Login">Login</router-link></li>
            <li><router-link to="/Started">Sign Up</router-link></li>
            <li><router-link to="/help">Help Center</router-link></li>
          </ul>
        </div>

     
        <div class="footer-col">
          <h4 class="footer-title">Follow Us</h4>
          <ul class="footer-links">
            <li><a href="https://twitter.com" target="_blank" rel="noopener">Twitter / X</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <p class="copyright-text">© 2026 SwychPe. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrapper {
  width: 100%;
  background-color: #3b0754;
  color: #ffffff;
  padding: 5rem 0 2.5rem 0;
  box-sizing: border-box;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 4rem;
}

.footer-brand {
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  color: #ffffff;
}

.footer-tagline {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
  font-weight: 500;
}

.footer-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 1.2rem 0;
  color: #ffffff;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.25s ease;
}

.footer-links a:hover {
  color: #ffffff;
}

.footer-divider {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.15);
  margin-bottom: 2rem;
}

.footer-bottom {
  display: flex;
  justify-content: flex-start;
}

.copyright-text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>