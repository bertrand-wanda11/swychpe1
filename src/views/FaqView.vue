<template>
  <div class="page-wrapper">
    <!-- Reusable Navbar -->
    <Navbar />

    <!-- Purple Hero Header Section -->
    <section class="hero-section">
      <div class="hero-container">
        <h1 class="hero-title">Frequently Asked Questions</h1>
        <p class="hero-subtitle">Find answers to common questions about SwychPe.</p>
      </div>
    </section>

    <!-- White FAQ Accordion Section -->
    <main class="faq-section">
      <div class="faq-container">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="faq-card"
          :class="{ 'is-open': openIndex === index }"
        >
          <button 
            type="button" 
            class="faq-question" 
            @click="toggleFaq(index)"
            :aria-expanded="openIndex === index"
          >
            <span class="arrow-icon">▼</span>
            <span class="question-text">{{ faq.question }}</span>
          </button>
          
          <div v-show="openIndex === index" class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </main>

    <!-- Reusable Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

// Index of currently open FAQ item (default open first item)
const openIndex = ref(0)

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = ref([
  {
    question: 'How long do transfers take?',
    answer: 'Most transfers are completed within minutes. However, some may take up to 1 - 2 business days depending on the country and payment method.'
  },
  {
    question: 'What are the fees?',
    answer: 'Our fees are low, transparent, and shown upfront before you complete any transfer. There are no hidden charges.'
  },
  {
    question: 'Which countries do you support?',
    answer: 'SwychPe supports transfers to over 50+ countries across Africa, Europe, North America, and Asia.'
  },
  {
    question: 'Is my money safe?',
    answer: 'Yes. We use bank-level encryption, multi-factor authentication, and strict compliance protocols to ensure your funds and personal information are fully protected.'
  },
  {
    question: 'Can I cancel a transfer?',
    answer: 'Transfers can be canceled as long as they have not yet been processed or collected by the recipient. You can manage transfers directly from your account dashboard.'
  },
  {
    question: 'Do I need to create an account?',
    answer: 'Yes, creating a free account allows us to verify your identity securely and keep your money transfers safe.'
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our 24/7 customer support team via in-app live chat, email at support@swychpe.com, or through our Help Center.'
  }
])
</script>

<style scoped>
/* Base Layout Structure */
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #ffffff;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  box-sizing: border-box;
}

.page-wrapper > * {
  width: 100%;
}

/* Hero Purple Section */
.hero-section {
  background-color: #5c1180; /* Deep Purple */
  padding: 70px 24px;
  text-align: left;
  box-sizing: border-box;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.hero-title {
  color: #ffffff;
  font-size: 2.8rem;
  font-weight: 800;
  margin: 0 0 16px 0;
  letter-spacing: -0.5px;
  line-height: 1.15;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.05rem;
  font-weight: 500;
  margin: 0;
}

/* White FAQ Accordion Container */
.faq-section {
  flex: 1;
  background-color: #ffffff;
  padding: 60px 24px;
  box-sizing: border-box;
}

.faq-container {
  max-width: 680px; /* Centered narrow accordion list */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Individual FAQ Card Item */
.faq-card {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background-color: #ffffff;
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.faq-card.is-open {
  border-color: #cbd5e1;
}

.faq-question {
  width: 100%;
  padding: 16px 20px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;
}

.faq-question:hover {
  background-color: #f8fafc;
}

.arrow-icon {
  font-size: 0.65rem;
  color: #5c1180;
  transition: transform 0.25s ease;
}

.faq-card.is-open .arrow-icon {
  transform: rotate(0deg);
}

.faq-card:not(.is-open) .arrow-icon {
  transform: rotate(-90deg);
}

.question-text {
  font-size: 0.95rem;
  font-weight: 700;
  color: #5c1180;
}

/* Answer Body */
.faq-answer {
  padding: 0 20px 18px 40px;
  color: #64748b;
  font-size: 0.88rem;
  line-height: 1.6;
}

.faq-answer p {
  margin: 0;
}

/* ==========================================================================
   Full Responsive Media Queries
   ========================================================================== */

/* Large Screens (1440px and up) */
@media (min-width: 1440px) {
  .hero-section {
    padding: 90px 32px;
  }

  .hero-title {
    font-size: 3.2rem;
  }

  .faq-container {
    max-width: 760px;
  }
}

/* Tablets and Medium Devices (768px to 1023px) */
@media (max-width: 1023px) and (min-width: 768px) {
  .hero-section {
    padding: 60px 24px;
  }

  .hero-title {
    font-size: 2.3rem;
  }

  .faq-section {
    padding: 45px 20px;
  }
}

/* Mobile Devices (Under 768px) */
@media (max-width: 767px) {
  .hero-section {
    padding: 45px 18px;
  }

  .hero-title {
    font-size: 1.85rem;
    margin-bottom: 10px;
  }

  .hero-subtitle {
    font-size: 0.92rem;
  }

  .faq-section {
    padding: 30px 16px;
  }

  .faq-question {
    padding: 14px 16px;
    gap: 10px;
  }

  .question-text {
    font-size: 0.88rem;
  }

  .faq-answer {
    padding: 0 16px 14px 32px;
    font-size: 0.82rem;
  }
}

/* Small Smartphone Screens (480px and down) */
@media (max-width: 480px) {
  .hero-section {
    padding: 35px 16px;
  }

  .hero-title {
    font-size: 1.6rem;
  }

  .faq-answer {
    padding: 0 14px 12px 28px;
  }
}
</style>