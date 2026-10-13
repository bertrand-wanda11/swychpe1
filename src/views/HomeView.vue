<template>
  <div class="page-wrapper">
    <Navbar />

    <!-- 1. Hero Section -->
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-text-col">
          <h1 class="hero-title">
            Bank, pay and borrow from your phone, anywhere in Cameroon.
          </h1>
          <p class="hero-description">
            SwychPe is a fully digital microfinance bank. Open an account in two minutes, pay any bill, top up any network, save with your Njangi group and get a loan without queuing at a branch.
          </p>
          <div class="hero-cta-group">
            <router-link to="/Started" class="btn-primary">Download SwychPe</router-link>
            <a href="#borrow" class="btn-secondary">See how loans work</a>
          </div>
        </div>

        <div class="hero-mockup-col">
          <div class="phone-frame">
            <div class="phone-screen">
              <div class="screen-header">
                <span class="greeting-sub">Good morning</span>
                <span class="user-name">Amina</span>
              </div>

              <div class="wallet-card">
                <span class="wallet-label">Wallet balance</span>
                <div class="wallet-amount">XAF 84,500</div>
              </div>

              <div class="action-grid">
                <div class="action-item">
                  <div class="action-icon">⬚</div>
                  <span>Scan</span>
                </div>
                <div class="action-item">
                  <div class="action-icon">📱</div>
                  <span>Airtime</span>
                </div>
                <div class="action-item">
                  <div class="action-icon">⚡</div>
                  <span>Bills</span>
                </div>
                <div class="action-item">
                  <div class="action-icon">➕</div>
                  <span>Loans</span>
                </div>
              </div>

              <div class="advance-box">
                <div class="advance-text">
                  <strong>Pre-approved advance</strong>
                  <p>Up to XAF 150,000</p>
                </div>
                <button class="btn-claim">Claim</button>
              </div>

              <div class="recent-list">
                <div class="tx-row">
                  <span>ENEO electricity</span>
                  <span class="tx-amount">Paid, XAF 12,000</span>
                </div>
                <div class="tx-row">
                  <span>MTN airtime</span>
                  <span class="tx-amount">XAF 1,000</span>
                </div>
                <div class="tx-row">
                  <span>Njangi, Molyko Traders</span>
                  <span class="tx-amount">XAF 5,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Everyday Payments Section -->
    <section id="pay" class="section-padding bg-white">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Everyday payments, all in one wallet</h2>
          <p class="section-subtitle">Stop juggling apps, kiosks and cash. Pay for what you use every day in a few taps.</p>
        </div>

        <div class="payments-grid">
          <div class="payment-card featured-purple">
            <div class="card-icon">⬚</div>
            <h3>Scan and pay</h3>
            <p>Pay shops, restaurants, market stalls and transport by scanning a QR code. No change needed and no cash to carry.</p>
          </div>

          <div class="payment-card border-card">
            <div class="card-icon text-purple">📱</div>
            <h3>Airtime and data for every network</h3>
            <p>Top up yourself or anyone you know, instantly.</p>
            <div class="pill-group">
              <span class="pill-badge">MTN</span>
              <span class="pill-badge">Orange</span>
              <span class="pill-badge">Camtel</span>
              <span class="pill-badge">Nexttel</span>
            </div>
          </div>

          <div class="payment-card border-card">
            <div class="card-icon text-purple">⚡</div>
            <h3>Bill payments</h3>
            <p>Electricity, water and internet, paid without leaving home.</p>
            <div class="pill-group">
              <span class="pill-badge">ENEO</span>
              <span class="pill-badge">CAMWATER</span>
            </div>
          </div>

          <div class="payment-card border-card">
            <div class="card-icon text-purple">📺</div>
            <h3>Cable and streaming</h3>
            <p>Renew your TV subscription in seconds.</p>
            <div class="pill-group">
              <span class="pill-badge">Canal+</span>
              <span class="pill-badge">StarTimes</span>
              <span class="pill-badge">DStv</span>
            </div>
          </div>

          <div class="payment-card border-card">
            <div class="card-icon text-purple">⇆</div>
            <h3>Free transfers</h3>
            <p>Send money to any SwychPe member for 0 XAF, and move cash in and out with MTN MoMo and Orange Money.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Borrow Section -->
    <section id="borrow" class="section-padding bg-dark-purple text-white">
      <div class="container borrow-grid">
        <div class="borrow-info">
          <h2 class="section-title text-white">Fast loans when life or business moves faster than payday</h2>
          <p class="borrow-desc">Apply in the app, get a decision quickly and receive the money in your SwychPe wallet. No paperwork and no branch visit.</p>

          <div class="tab-options">
            <button class="tab-btn active">Pay day advance</button>
            <button class="tab-btn">Device financing</button>
            <button class="tab-btn">SME working capital</button>
          </div>

          <p class="tab-caption">
            Cover rent, school fees or a medical bill before salary arrives. Borrow a small amount for a short time and repay on payday.
          </p>

          <div class="pill-group">
            <span class="pill-badge dark-pill">Repay from the app</span>
            <span class="pill-badge dark-pill">Limits grow as you repay on time</span>
          </div>
        </div>

        <div class="calculator-card">
          <div class="calc-group">
            <label>How much do you need?</label>
            <div class="calc-amount">XAF {{ loanAmount.toLocaleString() }}</div>
            <input type="range" min="10000" max="300000" step="5000" v-model.number="loanAmount" class="range-slider" />
          </div>

          <div class="calc-group">
            <label>For how long? {{ loanDuration }} month</label>
            <input type="range" min="1" max="6" step="1" v-model.number="loanDuration" class="range-slider" />
          </div>

          <div class="calc-summary">
            <div class="summary-col">
              <span>You repay in total</span>
              <strong>XAF {{ Math.round(loanAmount * 1.02).toLocaleString() }}</strong>
            </div>
            <div class="summary-col">
              <span>Per month</span>
              <strong>XAF {{ Math.round((loanAmount * 1.02) / loanDuration).toLocaleString() }}</strong>
            </div>
          </div>

          <p class="calc-disclaimer">
            Illustration only, at 2% per month. Your real offer depends on your SwychPe profile and repayment history.
          </p>
        </div>
      </div>
    </section>

    <!-- 4. Save Section -->
    <section id="save" class="section-padding bg-white">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Save the way Cameroon already saves</h2>
          <p class="section-subtitle">Set goals, join your Njangi online and earn on your savings with a regulated microfinance institution.</p>
        </div>

        <div class="save-grid">
          <div class="save-card">
            <div class="card-icon text-purple">👥</div>
            <h3>Digital Njangi groups</h3>
            <p>Create or join a group, set contributions and payout order, and let the app keep the ledger. No more disputes over who paid.</p>
          </div>

          <div class="save-card">
            <div class="card-icon text-purple">🎯</div>
            <h3>Target savings</h3>
            <p>Save for school fees, rent or a new phone. Lock your goal so you stay on track and earn interest as you go.</p>
          </div>

          <div class="save-card">
            <div class="card-icon text-purple">👥</div>
            <h3>Community savings pools</h3>
            <p>Pool money with your church, village union or association and manage it transparently.</p>
          </div>

          <div class="save-card solid-purple">
            <div class="card-icon text-white">🛡</div>
            <h3>Fixed deposits</h3>
            <p>Lock money away for a set period and earn a higher return. Open and track it in the app.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Business Section -->
    <section id="business" class="section-padding bg-soft-purple">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Built for traders, shops and growing businesses</h2>
          <p class="section-subtitle">Take payments, pay your team and get the working capital to restock, all from one business profile.</p>
        </div>

        <div class="business-grid">
          <div class="biz-card">
            <div class="card-icon text-purple">🏪</div>
            <h3>Accept payments with one QR code</h3>
            <p>Print your SwychPe QR code and get paid instantly by customers. Low processing fees and a clear daily sales record that helps you qualify for bigger loans.</p>
          </div>

          <div class="biz-card">
            <div class="card-icon text-purple">➕</div>
            <h3>Working capital for SMEs</h3>
            <p>Restock before the busy season or take on a big order. Borrow against your sales history and repay in flexible instalments.</p>
          </div>

          <div class="biz-card">
            <div class="card-icon text-purple">👥</div>
            <h3>Pay staff and suppliers in bulk</h3>
            <p>Send salaries and supplier payments to many wallets or mobile money numbers in one go.</p>
          </div>

          <div class="biz-card">
            <div class="card-icon text-purple">⚡</div>
            <h3>Become a SwychPe agent</h3>
            <p>Earn commission by helping neighbours deposit and withdraw cash. Open a kiosk or shop as a SwychPe point.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. More Services Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">More to make your money go further</h2>
          <p class="section-subtitle">We keep adding services people ask for.</p>
        </div>

        <div class="more-services-grid">
          <div class="more-card">
            <h3>School fees</h3>
            <p>Pay school and university fees on time, with the option to save toward them.</p>
          </div>

          <div class="more-card">
            <h3>Diaspora transfers</h3>
            <p>Receive money from family abroad straight into your wallet through SwychRemit.</p>
          </div>

          <div class="more-card">
            <h3>USD virtual card</h3>
            <p>Shop online and pay for subscriptions with a virtual USD card.</p>
          </div>

          <div class="more-card">
            <h3>Rewards and referrals</h3>
            <p>Earn rewards for paying, saving and inviting friends.</p>
          </div>

          <div class="more-card">
            <h3>Taxes and public fees</h3>
            <p>Pay licences, council fees and taxes without standing in line.</p>
          </div>

          <div class="more-card">
            <h3>Spending insights</h3>
            <p>See where your money goes each month and set budgets that stick.</p>
          </div>

          <div class="more-card">
            <div class="card-title-row">
              <h3>Micro-insurance</h3>
              <span class="tag-coming">Coming soon</span>
            </div>
            <p>Cover for health, phones and shops, paid in small amounts.</p>
          </div>

          <div class="more-card">
            <div class="card-title-row">
              <h3>Bus and event tickets</h3>
              <span class="tag-coming">Coming soon</span>
            </div>
            <p>Book travel and events and pay by scanning.</p>
          </div>

          <div class="more-card">
            <div class="card-title-row">
              <h3>Family wallets</h3>
              <span class="tag-coming">Coming soon</span>
            </div>
            <p>Set allowances for children and relatives with spending limits.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Account Opening & Regulation Section -->
    <section id="security" class="section-padding bg-soft-purple">
      <div class="container">
        <h2 class="section-title">Open your account in under two minutes</h2>
        <div class="steps-three-col">
          <div class="step-col">
            <span class="step-num">1</span>
            <h3>Download and sign up</h3>
            <p>Verify with your National ID or passport and a quick selfie. Your member ID is created instantly.</p>
          </div>

          <div class="step-col">
            <span class="step-num">2</span>
            <h3>Add money</h3>
            <p>Fund your wallet with MTN MoMo, Orange Money, a SwychPe agent or a credit union counter.</p>
          </div>

          <div class="step-col">
            <span class="step-num">3</span>
            <h3>Pay, save and borrow</h3>
            <p>Scan to pay, buy airtime, join a Njangi and apply for a loan from the same app.</p>
          </div>
        </div>

        <div class="security-divider"></div>

        <div class="security-header">
          <h2 class="section-title">Your money is protected</h2>
          <p class="section-subtitle">SwychPe is operated by a cooperative microfinance institution that follows Cameroonian microfinance regulation.</p>
        </div>

        <div class="security-grid">
          <div class="security-card">
            <div class="card-icon text-purple">🛡</div>
            <h3>Regulated</h3>
            <p>Supervised under the CAMCCUL framework, with regular audits and reporting.</p>
          </div>

          <div class="security-card">
            <div class="card-icon text-purple">🔒</div>
            <h3>Secure by design</h3>
            <p>Biometric login, device checks and 24/7 monitoring that flags unusual activity.</p>
          </div>

          <div class="security-card">
            <div class="card-icon text-purple">👥</div>
            <h3>Owned by members</h3>
            <p>As a cooperative, SwychPe exists to serve its members, not distant shareholders.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Expanded 10-Item FAQ Section -->
    <section id="help" class="section-padding bg-white">
      <div class="container">
        <h2 class="section-title">Questions people ask</h2>
        <div class="faq-list">
          <div 
            v-for="(faq, idx) in faqList" 
            :key="idx" 
            class="faq-item"
            :class="{ active: openFaq === idx }"
          >
            <button class="faq-toggle" @click="openFaq = openFaq === idx ? null : idx">
              <span class="faq-arrow">►</span>
              <span class="faq-q-text">{{ faq.q }}</span>
            </button>
            <div v-show="openFaq === idx" class="faq-answer">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. Final CTA Purple Banner -->
    <section class="cta-banner">
      <div class="container cta-content">
        <h2 class="cta-heading">Join SwychPe today</h2>
        <p class="cta-subheading">Banking that fits your pocket and your plans.</p>
        <div class="cta-buttons">
          <router-link to="/Started" class="btn-app-white">Get it on Google Play</router-link>
          <router-link to="/Started" class="btn-app-outline">Download on the App Store</router-link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const loanAmount = ref(105000)
const loanDuration = ref(1)
const openFaq = ref(null)

const faqList = ref([
  {
    q: 'Do I need to visit a branch?',
    a: 'No, account opening, verification, loans and customer support are handled completely inside the mobile app.'
  },
  {
    q: 'How do I put cash in my account?',
    a: 'You can deposit cash into your SwychPe wallet using MTN Mobile Money, Orange Money, a credit union counter, or at any authorized SwychPe agent.'
  },
  {
    q: 'Who can get a loan?',
    a: 'Any verified SwychPe member with an active transaction profile can apply for instant payday advances and SME working capital directly in the app.'
  },
  {
    q: 'Is SwychPe safe?',
    a: 'Yes. SwychPe is operated by a regulated microfinance cooperative institution under Cameroonian financial framework, with bank-grade encryption and biometric security.'
  },
  {
    q: 'What does it cost?',
    a: 'Opening an account and transferring funds to other SwychPe users is 0 XAF. All bill payment, airtime, and cashout fees are fully transparent and shown before you confirm.'
  },
  {
    q: 'How does digital Njangi work?',
    a: 'You can create or join a group with friends or colleagues, set contribution amounts and payout schedules, and SwychPe manages the automated collection and payout transparently.'
  },
  {
    q: 'Can I pay ENEO and CAMWATER bills on SwychPe?',
    a: 'Yes! You can instantly pay ENEO electricity, CAMWATER, internet bills, and cable TV subscriptions directly from your wallet balance.'
  },
  {
    q: 'How fast are loans paid out?',
    a: 'Approved loan amounts are credited directly into your SwychPe wallet balance within minutes.'
  },
  {
    q: 'What document do I need to register?',
    a: 'You only need a valid Cameroonian National ID card or passport alongside a quick selfie to verify your identity.'
  },
  {
    q: 'How do I contact SwychPe customer support?',
    a: 'You can reach customer support 24/7 through in-app live chat, email at reachswyco@swychr.com, or visit our Buea office at Mayor Street, Molyko.'
  }
])
</script>

<style scoped>
/* Base Reset & Fonts */
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f3f8;
  color: #1a0826;
  font-family: "Bricolage Grotesque", "DM Sans", sans-serif;
  box-sizing: border-box;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-padding {
  padding: 72px 0;
}

.bg-white { background-color: #ffffff; }
.bg-soft-purple { background-color: #f5f3f8; }
.bg-dark-purple { background-color: #1a052c; }

/* 1. Hero Section */
.hero-section {
  padding: 60px 0 80px 0;
  background-color: #f5f3f8;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.hero-title {
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1.2px;
  color: #1a0826;
  margin-bottom: 24px;
}

.hero-description {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #6b6b6b;
  margin-bottom: 32px;
}

.hero-cta-group {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn-primary {
  background-color: #9218BB;
  color: #ffffff;
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
}

.btn-secondary {
  background-color: #eae5f2;
  color: #1a0826;
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
}

/* Phone Mockup */
.phone-frame {
  width: 320px;
  margin: 0 auto;
  background-color: #1a0826;
  border-radius: 40px;
  padding: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.phone-screen {
  background-color: #ffffff;
  border-radius: 30px;
  padding: 24px 20px;
  color: #1a0826;
}

.greeting-sub { display: block; font-size: 0.75rem; color: #888; }
.user-name { font-size: 1.1rem; font-weight: 800; }

.wallet-card {
  background-color: #9218BB;
  color: #ffffff;
  border-radius: 16px;
  padding: 18px;
  margin: 16px 0;
}

.wallet-label { font-size: 0.75rem; opacity: 0.9; }
.wallet-amount { font-size: 1.5rem; font-weight: 800; margin-top: 4px; }

.action-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  text-align: center;
  margin-bottom: 16px;
}

.action-item { font-size: 0.7rem; font-weight: 600; color: #555; }
.action-icon {
  background-color: #f5f3f8;
  border-radius: 12px;
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 4px;
}

.advance-box {
  background-color: #fcf8ff;
  border: 1px solid #f0e6f7;
  border-radius: 12px;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.advance-text strong { display: block; font-size: 0.8rem; color: #9218BB; }
.advance-text p { font-size: 0.75rem; color: #666; margin: 0; }
.btn-claim { border: none; background: transparent; color: #9218BB; font-size: 0.8rem; font-weight: 800; cursor: pointer; }

.recent-list { font-size: 0.72rem; }
.tx-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #f0f0f0; }
.tx-amount { font-weight: 700; color: #333; }

/* Section Headers & Cards */
.section-header { margin-bottom: 40px; }
.section-title { font-size: 2.2rem; font-weight: 800; letter-spacing: -0.8px; margin-bottom: 8px; }
.section-subtitle { font-size: 1rem; color: #6b6b6b; margin: 0; }

/* Payments Section */
.payments-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.payment-card { border-radius: 20px; padding: 32px 24px; }
.featured-purple { background-color: #9218BB; color: #ffffff; }
.featured-purple h3, .featured-purple p { color: #ffffff; }
.border-card { background-color: #f8f6fc; border: 1px solid #eae5f2; }
.card-icon { font-size: 1.5rem; margin-bottom: 16px; }
.text-purple { color: #9218BB; }
.payment-card h3 { font-size: 1.2rem; font-weight: 800; margin-bottom: 8px; }
.payment-card p { font-size: 0.9rem; color: #666; line-height: 1.5; margin-bottom: 16px; }

.pill-group { display: flex; flex-wrap: wrap; gap: 8px; }
.pill-badge { background-color: #ffffff; color: #9218BB; font-size: 0.75rem; font-weight: 700; padding: 6px 14px; border-radius: 999px; }

/* Borrow Section */
.borrow-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
.borrow-desc { color: #b3a5c2; font-size: 1rem; line-height: 1.6; margin-bottom: 24px; }
.tab-options { display: flex; gap: 8px; margin-bottom: 16px; }
.tab-btn { background-color: rgba(255, 255, 255, 0.1); color: #ffffff; border: none; padding: 10px 18px; border-radius: 999px; font-weight: 700; font-size: 0.85rem; cursor: pointer; }
.tab-btn.active { background-color: #fbc02d; color: #1a0826; }
.tab-caption { font-size: 0.9rem; color: #d1c4e9; line-height: 1.5; margin-bottom: 24px; }
.dark-pill { background-color: rgba(255, 255, 255, 0.08); color: #d1c4e9; }

.calculator-card { background-color: #260e3d; border-radius: 24px; padding: 36px; border: 1px solid rgba(255, 255, 255, 0.1); }
.calc-group { margin-bottom: 24px; }
.calc-group label { display: block; font-size: 0.85rem; color: #b3a5c2; margin-bottom: 8px; }
.calc-amount { font-size: 2.2rem; font-weight: 800; color: #ffffff; margin-bottom: 12px; }
.range-slider { width: 100%; accent-color: #fbc02d; cursor: pointer; }

.calc-summary { display: flex; justify-content: space-between; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 20px; margin-bottom: 16px; }
.summary-col span { display: block; font-size: 0.75rem; color: #b3a5c2; }
.summary-col strong { font-size: 1.2rem; color: #ffffff; }
.calc-disclaimer { font-size: 0.72rem; color: #8c7b9e; margin: 0; }

/* Save Section */
.save-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.save-card { background-color: #f8f6fc; border-radius: 20px; padding: 32px 28px; }
.save-card h3 { font-size: 1.2rem; font-weight: 800; margin-bottom: 8px; }
.save-card p { font-size: 0.9rem; color: #666; line-height: 1.5; margin: 0; }
.solid-purple { background-color: #9218BB; color: #ffffff; }
.solid-purple h3, .solid-purple p { color: #ffffff; }

/* Business Section */
.business-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.biz-card { background-color: #ffffff; border-radius: 20px; padding: 32px 28px; border: 1px solid #eae5f2; }
.biz-card h3 { font-size: 1.15rem; font-weight: 800; margin-bottom: 8px; }
.biz-card p { font-size: 0.9rem; color: #666; line-height: 1.5; margin: 0; }

/* More Services Section */
.more-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.more-card { background-color: #f8f6fc; border-radius: 16px; padding: 24px 20px; }
.more-card h3 { font-size: 1.05rem; font-weight: 800; margin-bottom: 6px; }
.more-card p { font-size: 0.85rem; color: #666; line-height: 1.5; margin: 0; }
.card-title-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
.tag-coming { background-color: #fbc02d; color: #1a0826; font-size: 0.68rem; font-weight: 800; padding: 4px 10px; border-radius: 999px; }

/* Steps & Security */
.steps-three-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 60px; }
.step-col { position: relative; }
.step-num { font-size: 2rem; font-weight: 800; color: #9218BB; display: block; margin-bottom: 8px; }
.step-col h3 { font-size: 1.15rem; font-weight: 800; margin-bottom: 6px; }
.step-col p { font-size: 0.88rem; color: #666; line-height: 1.5; margin: 0; }

.security-divider { height: 1px; background-color: #eae5f2; margin-bottom: 60px; }
.security-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.security-card { background-color: #ffffff; border-radius: 20px; padding: 28px 24px; border: 1px solid #eae5f2; }
.security-card h3 { font-size: 1.1rem; font-weight: 800; margin-bottom: 6px; }
.security-card p { font-size: 0.85rem; color: #666; line-height: 1.5; margin: 0; }

/* FAQ Section */
.faq-list { max-width: 800px; }
.faq-item { border-bottom: 1px solid #eae5f2; }
.faq-toggle { width: 100%; text-align: left; background: transparent; border: none; padding: 18px 0; font-size: 1.05rem; font-weight: 700; color: #1a0826; cursor: pointer; display: flex; align-items: center; gap: 12px; }
.faq-arrow { font-size: 0.7rem; color: #9218BB; transition: transform 0.2s; }
.faq-item.active .faq-arrow { transform: rotate(90deg); }
.faq-answer { padding-bottom: 18px; padding-left: 24px; color: #666; font-size: 0.9rem; line-height: 1.6; }

/* CTA Banner */
.cta-banner { background-color: #9218BB; color: #ffffff; padding: 80px 0; text-align: center; }
.cta-heading { font-size: 2.8rem; font-weight: 800; margin-bottom: 12px; letter-spacing: -0.8px; }
.cta-subheading { font-size: 1.1rem; opacity: 0.9; margin-bottom: 32px; }
.cta-buttons { display: flex; justify-content: center; gap: 16px; }
.btn-app-white { background-color: #ffffff; color: #9218BB; padding: 14px 28px; border-radius: 999px; font-weight: 800; text-decoration: none; font-size: 0.95rem; }
.btn-app-outline { border: 2px solid #ffffff; color: #ffffff; padding: 14px 28px; border-radius: 999px; font-weight: 800; text-decoration: none; font-size: 0.95rem; }

/* Responsive Media Queries */
@media (max-width: 992px) {
  .hero-grid, .borrow-grid { grid-template-columns: 1fr; }
  .payments-grid, .more-services-grid, .steps-three-col, .security-grid { grid-template-columns: 1fr 1fr; }
  .hero-title { font-size: 2.5rem; }
}

@media (max-width: 768px) {
  .payments-grid, .save-grid, .business-grid, .more-services-grid, .steps-three-col, .security-grid { grid-template-columns: 1fr; }
  .cta-buttons { flex-direction: column; align-items: center; }
}
</style>