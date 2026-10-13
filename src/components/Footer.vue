<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <div class="footer-brand">SwychPe</div>
        <p>Digital microfinance banking for Cameroon, operated by Swychr Cooperative Society with Board of Directors.</p>
      </div>

      <div class="footer-right">
        <p>Mayor Street, Molyko, Buea, Cameroon</p>
        <p><a href="mailto:reachswyco@swychr.com">reachswyco@swychr.com</a></p>
        <p><a href="https://swychpe.com" target="_blank" rel="noopener">swychpe.com</a></p>
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
  padding: 60px 0 40px 0;
  font-size: 0.85rem;
  box-sizing: border-box;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
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
  max-width: 400px;
  line-height: 1.6;
  margin: 0;
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

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 24px;
  }
  .footer-right p {
    text-align: left;
  }
}
</style>